'use client'

import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function ArticleModal({ article, onClose }) {
    const modalRef = useRef()

    if (!article) return null

    const downloadPdf = async () => {
        const el = modalRef.current
        if (!el) return

        // Tymczasowo rozwiń kontener, aby uwzględnić cały tekst
        const origMaxH = el.style.maxHeight
        const origOverflow = el.style.overflow
        el.style.maxHeight = 'none'
        el.style.overflow  = 'visible'
        await new Promise(r => setTimeout(r, 100))

        const pdf = new jsPDF('p', 'mm', 'a4')
        const pw  = pdf.internal.pageSize.getWidth()
        const ph  = pdf.internal.pageSize.getHeight()
        const canvas = await html2canvas(el, { scale: 2 })
        const imgData = canvas.toDataURL('image/png')
        const props   = pdf.getImageProperties(imgData)
        const iw  = pw
        const ih  = (props.height * pw) / props.width

        let heightLeft = ih
        let position   = 0

        pdf.addImage(imgData, 'PNG', 0, position, iw, ih)
        heightLeft -= ph

        while (heightLeft > 0) {
            pdf.addPage()
            position = -(ih - heightLeft)
            pdf.addImage(imgData, 'PNG', 0, position, iw, ih)
            heightLeft -= ph
        }

        pdf.save(`${article.id}.pdf`)

        // Przywróć style
        el.style.maxHeight = origMaxH
        el.style.overflow  = origOverflow
    }

    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>

                <h2 className={`text-2xl font-bold mb-6 ${article.color.replace('bg-', 'text-')}`}>
                    {article.title}
                </h2>

                <div
                    className="prose prose-lg space-y-8 max-w-none text-gray-700 text-justify break-words"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-8 flex justify-end space-x-4">
                    <button
                        onClick={downloadPdf}
                        className="px-5 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
                    >
                        Pobierz PDF
                    </button>
                    <button
                        onClick={onClose}
                        className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition"
                    >
                        Zamknij
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}
