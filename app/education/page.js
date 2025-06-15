'use client'

import { useState } from 'react'
import { articles } from '@/data/articles'
import ArticleCard from '../components/ArticleCard'
import ArticleModal from '../components/ArticleModal'

export default function EducationPage() {
    const [selected, setSelected] = useState(null)

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-extrabold mb-8 text-center">Edukacja</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map(a => (
                        <ArticleCard key={a.id} article={a} onClick={setSelected} />
                    ))}
                </div>
            </div>

            <ArticleModal
                article={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    )
}
