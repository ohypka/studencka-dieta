// app/api/gpt/route.js
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request) {
    try {
        const { ingredients } = await request.json()

        // Uszczegółowiony prompt: każda pozycja ze składnikiem zawiera ilość na porcję w nawiasie
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `
Jesteś asystentem kuchennym studenta. Na podstawie podanych składników wygeneruj łatwy i szybki przepis.
Odpowiedz TYLKO czystym JSON-em, bez dodatkowego tekstu, w formacie:

{
  "title": string,
  "calories": number,
  "proteins": number,
  "fats": number,
  "carbohydrates": number,
  "ingredients": [ "nazwa składnika (ilość na 1 porcję)", ... ],
  "instructions": [ "krok 1", "krok 2", ... ]
}

Każdy element w tablicy "ingredients" musi mieć podaną ilość na jedną porcję w nawiasie, np. "makaron spaghetti (100 g)".
          `
                },
                {
                    role: 'user',
                    content: `Dostępne składniki: ${ingredients}`
                }
            ]
        })

        const text = completion.choices[0].message.content.trim()
        let data
        try {
            data = JSON.parse(text)
        } catch (e) {
            // wyciągnięcie JSON-a z tekstu
            const match = text.match(/\{[\s\S]*\}/)
            data = match ? JSON.parse(match[0]) : {}
        }

        // Gwarantujemy zawsze tablice
        const recipe = {
            title:        data.title || '',
            calories:     data.calories || 0,
            ingredients:  Array.isArray(data.ingredients) ? data.ingredients : [],
            instructions: Array.isArray(data.instructions) ? data.instructions : [],
        }

        return NextResponse.json(recipe)
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Błąd generowania przepisu.' },
            { status: 500 }
        )
    }
}
