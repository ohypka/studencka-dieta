// app/components/ArticleCard.jsx
'use client'
import React from 'react'

export default function ArticleCard({ article, onClick }) {
    return (
        <div
            onClick={() => onClick(article)}
            className={`
        ${article.color}
        p-6 rounded-xl cursor-pointer
        flex items-center space-x-4
        hover:scale-105 hover:shadow-lg transition-transform
      `}
        >
            <span className="text-3xl text-white">{article.icon}</span>
            <h3 className="text-lg font-semibold text-white">{article.title}</h3>
        </div>
    )
}
