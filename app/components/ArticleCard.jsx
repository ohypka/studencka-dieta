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
        hover:scale-[1.03] hover:shadow-lg transition
      `}
        >
            <span className="text-3xl text-white">{article.icon}</span>
            <h3 className="text-lg font-semibold text-white">{article.title}</h3>
        </div>
    )
}
