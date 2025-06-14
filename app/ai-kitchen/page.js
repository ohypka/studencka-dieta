// app/ai-kitchen/page.js
'use client'

import { useState, useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function AIDishPage() {
    const [ingredients, setIngredients] = useState('')
    const [recipe, setRecipe]           = useState(null)
    const pdfRef = useRef()

    // Funkcja: zastępuje spację po krótkich wyrazach niełamliwą spacją
    const formatText = (text) =>
        text.replace(/\b(i|w|lub)\s+/gi, (match, p1) => `${p1}\u00A0`)

    // Generowanie przepisu
    async function onSubmit(e) {
        e.preventDefault()
        const res = await fetch('/api/gpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients })
        })
        const data = await res.json()
        setRecipe({
            title:        data.title || '',
            calories:     data.calories || 0,
            ingredients:  Array.isArray(data.ingredients) ? data.ingredients : [],
            instructions: Array.isArray(data.instructions) ? data.instructions : []
        })
    }

    // Pobierz PDF
    async function downloadPdf() {
        if (!pdfRef.current) return
        const canvas = await html2canvas(pdfRef.current, { scale: 2 })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const w = pdf.internal.pageSize.getWidth()
        const h = (canvas.height * w) / canvas.width
        pdf.addImage(imgData, 'PNG', 0, 0, w, h)
        pdf.save(`${recipe.title}.pdf`)
    }

    const ingList   = recipe?.ingredients  ?? []
    const instrList = recipe?.instructions ?? []

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 space-y-12">
            {/* Formularz */}
            <form onSubmit={onSubmit} className="space-y-4">
                <label className="block text-lg font-medium">Co masz w&nbsp;lodówce?</label>
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

            {/* Wyświetlanie przepisu */}
            {recipe && (
                <>
                    <div ref={pdfRef} className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
                        {/* Nagłówek */}
                        <div className="space-y-2 text-center">
                            <h1 className="text-4xl font-extrabold">
                                {formatText(recipe.title)}
                            </h1>
                            <p className="text-gray-600">
                                Szacowane kalorie:&nbsp;
                                <span className="font-semibold">{recipe.calories} kcal</span>
                            </p>
                        </div>
                        <hr className="border-gray-300" />

                        {/* Składniki */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b pb-2">Składniki</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {ingList.map((ing, i) => (
                                    <li key={i}>{formatText(ing)}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Instrukcje */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b pb-2">Instrukcje</h2>
                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                {instrList.map((step, i) => (
                                    <li key={i}>{formatText(step)}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Akcje */}
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
