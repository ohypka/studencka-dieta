'use client'
import React from 'react'
import { createPortal } from 'react-dom'

export default function ArticleModal({ article, onClose }) {
    if (!article) return null

    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-xl w-full p-8 relative"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
                <h2 className={`text-2xl font-bold mb-4 ${article.color.replace('bg-', 'text-')}`}>
                    {article.title}
                </h2>
                <div
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </div>,
        document.body
    )
}
