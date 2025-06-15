// app/recipes/[id]/page.js
'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { recipes } from '@/data/recipes'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function RecipeDetail() {
    const { id } = useParams()
    const router = useRouter()
    const [recipe, setRecipe] = useState(null)
    const cardRef = useRef()

    // Znajdź przepis po ID
    useEffect(() => {
        const found = recipes.find(r => r.id === id)
        setRecipe(found || null)
    }, [id])

    // Generuj PDF z zawartości ref
    const downloadPdf = async () => {
        if (!cardRef.current) return
        const canvas = await html2canvas(cardRef.current, { scale: 2 })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = (canvas.height * pageWidth) / canvas.width
        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight)
        pdf.save(`${recipe.title}.pdf`)
    }

    if (recipe === null) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Przepis nie znaleziony.</p>
            </div>
        )
    }

    return (
        <div className="py-12 container mx-auto px-4 space-y-6">
            <button
                onClick={() => router.back()}
                className="text-green-600 hover:underline"
            >
                ← Powrót do listy przepisów
            </button>

            <div
                ref={cardRef}
                className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 gap-8"
            >
                {/* Zdjęcie */}
                <div className="h-64 lg:h-auto">
                    <img
                        src={recipe.img}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Szczegóły */}
                <div className="p-8 space-y-6">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        {recipe.title}
                    </h1>
                    <p className="text-sm text-gray-600">~{recipe.kcal} kcal</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold border-b pb-1">Składniki</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {recipe.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold border-b pb-1">
                            Kroki przygotowania
                        </h2>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                            {recipe.steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </section>

                    {recipe.shoppingList && (
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b pb-1">
                                Lista zakupów
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {recipe.shoppingList.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>

            {/* Akcje */}
            <div className="flex justify-end space-x-4">
                <button
                    onClick={downloadPdf}
                    className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
                >
                    Pobierz PDF
                </button>
            </div>
        </div>
    )
}
