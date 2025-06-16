// app/api/gpt/route.js
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request) {
    try {
        const { ingredients } = await request.json()

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `
Jesteś asystentem kuchennym studenta. Na podstawie podanych składników wygeneruj łatwy i szybki przepis 
z szacowanymi kaloriami oraz makroskładnikami (białka, tłuszcze, węglowodany) na porcję, a dodatkowo 
listą zakupów (tylko nazwy produktów). Odpowiedz TYLKO czystym JSON-em, bez dodatkowego tekstu, w formacie:

{
  "title": string,
  "calories": number,
  "proteins": number,
  "fats": number,
  "carbohydrates": number,
  "ingredients": [ "nazwa składnika (ilość na 1 porcję)", ... ],
  "instructions": [ "krok 1", "krok 2", ... ],
  "shopping_list": [ "nazwa produktu", ... ]
}
`
                },
                { role: 'user', content: `Dostępne składniki: ${ingredients}` }
            ]
        })

        const text = completion.choices[0].message.content.trim()
        let data = {}
        try {
            data = JSON.parse(text)
        } catch (e) {
            const m = text.match(/\{[\s\S]*\}/)
            data = m ? JSON.parse(m[0]) : {}
        }

        // Wyciągamy wszystkie pola
        const recipe = {
            title:         data.title         || '',
            calories:      data.calories      || 0,
            proteins:      data.proteins      || 0,
            fats:          data.fats          || 0,
            carbohydrates: data.carbohydrates || 0,
            ingredients:   Array.isArray(data.ingredients)   ? data.ingredients   : [],
            instructions:  Array.isArray(data.instructions)  ? data.instructions  : [],
            shoppingList:  Array.isArray(data.shopping_list) ? data.shopping_list : []
        }

        return NextResponse.json(recipe)
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Błąd generowania przepisu.' }, { status: 500 })
    }
}
