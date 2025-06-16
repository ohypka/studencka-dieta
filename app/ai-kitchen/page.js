'use client'

import { useState, useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function AIDishPage() {
    const [ingredients, setIngredients] = useState('')
    const [recipe, setRecipe]           = useState(null)
    const pdfRef = useRef()

    const formatText = text =>
        text.replace(/\b(i|w|lub)\s+/gi, (m, w) => `${w}\u00A0`)

    async function onSubmit(e) {
        e.preventDefault()
        const res = await fetch('/api/gpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients })
        })
        const data = await res.json()
        console.log('GPT response:', data)  // <-- zobacz w konsoli devtools co naprawdę przychodzi

        setRecipe({
            title:         data.title         || '',
            calories:      data.calories      || 0,
            proteins:      data.proteins      || 0,
            fats:          data.fats          || 0,
            carbohydrates: data.carbohydrates || 0,
            ingredients:   Array.isArray(data.ingredients)   ? data.ingredients   : [],
            instructions:  Array.isArray(data.instructions)  ? data.instructions  : [],
            shoppingList:  Array.isArray(data.shopping_list) ? data.shopping_list : []
        })
    }

    async function downloadPdf() {
        if (!pdfRef.current) return
        const el = pdfRef.current
        const origMaxH = el.style.maxHeight
        const origOv   = el.style.overflow
        el.style.maxHeight = 'none'
        el.style.overflow  = 'visible'
        await new Promise(r => setTimeout(r, 100))

        const canvas = await html2canvas(el, { scale: 2 })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pw = pdf.internal.pageSize.getWidth()
        const ph = pdf.internal.pageSize.getHeight()
        const props = pdf.getImageProperties(imgData)
        const ih = (props.height * pw) / props.width

        let leftover = ih
        let position = 0

        pdf.addImage(imgData, 'PNG', 0, position, pw, ih)
        leftover -= ph

        while (leftover > 0) {
            pdf.addPage()
            position = -(ih - leftover)
            pdf.addImage(imgData, 'PNG', 0, position, pw, ih)
            leftover -= ph
        }

        pdf.save(`${recipe.title}.pdf`)

        el.style.maxHeight = origMaxH
        el.style.overflow  = origOv
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 space-y-12">
            <form onSubmit={onSubmit} className="space-y-4">
                <label className="block text-lg font-medium">
                    Co masz w&nbsp;lodówce?
                </label>
                <textarea
                    value={ingredients}
                    onChange={e => setIngredients(e.target.value)}
                    rows={3}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="np. makaron, pomidory, czosnek"
                    required
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                    Generuj przepis
                </button>
            </form>

            {recipe && (
                <>
                    <div
                        ref={pdfRef}
                        className="bg-white rounded-2xl shadow-lg p-8 space-y-6 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="text-center space-y-2">
                            <h1 className="text-4xl font-extrabold">
                                {formatText(recipe.title)}
                            </h1>
                            <p className="text-gray-600">
                                Kalorie: <strong>{recipe.calories} kcal</strong> •
                                Białka: <strong>{recipe.proteins} g</strong> •
                                Tłuszcze: <strong>{recipe.fats} g</strong> •
                                Węglowodany: <strong>{recipe.carbohydrates} g</strong>
                            </p>
                        </div>
                        <hr className="border-gray-300" />

                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Składniki</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i}>{formatText(ing)}</li>
                                ))}
                            </ul>
                        </section>

                        {recipe.shoppingList.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-semibold mb-2">Lista zakupów</h2>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {recipe.shoppingList.map((item, i) => (
                                        <li key={i}>{formatText(item)}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Instrukcje</h2>
                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                {recipe.instructions.map((step, i) => (
                                    <li key={i}>{formatText(step)}</li>
                                ))}
                            </ol>
                        </section>
                    </div>

                    <div className="text-right space-x-4">
                        <button
                            onClick={downloadPdf}
                            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
                        >
                            Pobierz PDF
                        </button>
                        <button
                            onClick={() => {
                                setRecipe(null)
                                setIngredients('')
                            }}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition"
                        >
                            Nowy przepis
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
