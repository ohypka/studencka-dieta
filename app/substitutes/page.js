// app/substitutes/page.js
'use client'

import { substitutes } from '@/data/substitutes'

export default function SubstitutesPage() {
    return (
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4 space-y-12">
                <h1 className="text-5xl font-extrabold text-center text-gray-800">
                    Zamienniki Twoich Ulubionych Potraw
                </h1>
                {substitutes.map(({ category, pairs }) => (
                    <div key={category} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-700">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pairs.map(({ original, substitute }) => (
                                <div
                                    key={original}
                                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition p-6 flex flex-col"
                                >
                                    {/* Oryginał */}
                                    <div className="flex-1">
                                        <p className="text-xs uppercase text-gray-400 mb-1">Oryginał</p>
                                        <p className="text-lg font-semibold text-gray-800">{original}</p>
                                    </div>

                                    {/* Strzałka */}
                                    <div className="my-4 flex justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 text-green-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>

                                    {/* Zamiennik */}
                                    <div className="flex-1 bg-green-50 rounded-2xl p-4">
                                        <p className="text-xs uppercase text-gray-400 mb-1">Zdrowszy wybór</p>
                                        <p className="text-lg font-semibold text-green-600">{substitute}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
