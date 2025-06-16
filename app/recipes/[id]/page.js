// app/recipes/[id]/page.jsx
'use client'

import { useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { recipes } from '@/data/recipes'

export default function RecipeDetailPage() {
    const { id } = useParams()
    const router = useRouter()
    const recipe = recipes.find(r => r.id === id)
    const contentRef = useRef()

    if (!recipe) {
        return (
            <div className="container mx-auto p-6 text-center">
                <p className="text-lg">Przepis nie znaleziony</p>
                <button
                    onClick={() => router.back()}
                    className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Wróć
                </button>
            </div>
        )
    }

    const downloadPdf = async () => {
        const el = contentRef.current
        if (!el) return

        // Rozwiń kontener, by złapać całość
        const origMaxH = el.style.maxHeight
        const origOv   = el.style.overflow
        el.style.maxHeight = 'none'
        el.style.overflow  = 'visible'
        await new Promise(r => setTimeout(r, 100))

        const pdf = new jsPDF('p', 'mm', 'a4')
        const pageWidth  = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()

        const canvas = await html2canvas(el, { scale: 2 })
        const imgData = canvas.toDataURL('image/png')
        const props   = pdf.getImageProperties(imgData)
        const imgW    = pageWidth
        const imgH    = (props.height * pageWidth) / props.width

        let heightLeft = imgH
        let position   = 0

        pdf.addImage(imgData, 'PNG', 0, position, imgW, imgH)
        heightLeft -= pageHeight

        while (heightLeft > 0) {
            pdf.addPage()
            position = -(imgH - heightLeft)
            pdf.addImage(imgData, 'PNG', 0, position, imgW, imgH)
            heightLeft -= pageHeight
        }

        pdf.save(`${recipe.title}.pdf`)

        // Przywróć style
        el.style.maxHeight = origMaxH
        el.style.overflow  = origOv
    }

    return (
        <div className="container mx-auto py-12 px-4 space-y-6">
            {/* Ograniczony kontener */}
            <div className="max-w-2xl mx-auto">
                <div
                    ref={contentRef}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                    {/* obrazek z zachowaniem proporcji */}
                    <div className="w-full overflow-hidden">
                        <img
                            src={recipe.img}
                            alt={recipe.title}
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: '300px' }}
                        />
                    </div>

                    <div className="p-6 space-y-4">
                        <h2 className="text-3xl font-bold">{recipe.title}</h2>
                        <p className="text-gray-600">
                            <span className="font-medium">{recipe.kcal} kcal</span> •{' '}
                            B: {recipe.protein_g} g • T: {recipe.fat_g} g • W: {recipe.carbs_g} g
                        </p>

                        <section>
                            <h3 className="text-2xl font-semibold mb-2">Składniki:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-2">Lista zakupów:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {recipe.shoppingList.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-2">Kroki przygotowania:</h3>
                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                {recipe.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <button
                    onClick={downloadPdf}
                    className="px-5 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
                >
                    Pobierz PDF
                </button>
                <button
                    onClick={() => router.back()}
                    className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition"
                >
                    Wróć
                </button>
            </div>
        </div>
    )
}
