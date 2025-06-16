// app/page.js
'use client'

import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import FeaturesSection from './components/FeaturesSection'
import FeatureBlock from './components/FeatureBlock'
import { featuresList } from '@/data/features'

export default function HomePage() {
    return (
        <>
            {/* Sekcja Hero */}
            <section
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 space-y-6"
                style={{ backgroundImage: "url('/home.jpg')" }}
            >
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">
                    Twoja Dieta w&nbsp;Zasięgu Ręki
                </h1>
                <p className="text-2xl text-white/90 max-w-2xl">
                    Zdrowe przepisy, AI-asystent i&nbsp;kalkulatory dietetyczne –&nbsp;wszystko w&nbsp;jednym miejscu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/recipes"
                        className="px-8 py-4 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                    >
                        Sprawdź Przepisy
                    </Link>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf3eYVATdHOQbWuzzFvKPwBGw1YvspvqoUoQhQAiWoqJmwLKg/viewform?usp=sharing&ouid=106658456979211610144"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                        Wypełnij Ankietę Ewaluacyjną
                    </Link>
                </div>
            </section>

            {/* Sekcja O projekcie */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 gap-8">
                        <div className="h-64 lg:h-auto">
                            <img
                                src="/project-hero.jpg"
                                alt="Studencka Dieta"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center space-y-6">
                            <h2 className="text-4xl font-extrabold text-gray-800">
                                O projekcie <span className="text-green-600">Studencka Dieta</span>
                            </h2>
                            <p className="text-lg text-gray-700">
                                Strona ta została utworzona w&nbsp;ramach projektu społecznego przez studentkę dietetyki
                                na&nbsp;Uniwersytecie Vizja w&nbsp;Warszawie. Inicjatywa ta ma na&nbsp;celu wspieranie studentów w&nbsp;organizacji
                                tanich, szybkich i&nbsp;zdrowych posiłków oraz&nbsp;w&nbsp;poprawie nawyków żywieniowych.
                            </p>
                            <p className="text-lg text-gray-700">Platforma oferuje:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Łatwe i tanie przepisy z&nbsp;wartościami odżywczymi</li>
                                <li>AI-asystenta generującego przepisy na&nbsp;podstawie składników</li>
                                <li>Praktyczne kalkulatory dietetyczne (BMI, PPM, CPM)</li>
                            </ul>

                            {/* Dwa logotypy PNG */}
                            <div className="flex items-center space-x-8 mt-6">
                                <img
                                    src="/logo_vizja.png"
                                    alt="Logo Uniwersytetu Vizja"
                                    className="h-24 object-contain"
                                />
                                <img
                                    src="/logo_projekty.png"
                                    alt="Logo projektów studenckich"
                                    className="h-24 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sekcja funkcjonalności */}
            <FeaturesSection features={featuresList} />

            {/* Bloki funkcji */}
            <div className="container mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                <FeatureBlock
                    img="/ai-demo.png"
                    title="AI-asystent kuchenny"
                    text="Wpisz składniki, a&nbsp;my&nbsp;wygenerujemy przepis."
                >
                    <Link
                        href="/ai-kitchen"
                        className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition inline-block"
                    >
                        Przejdź do&nbsp;asystenta&nbsp;ai
                    </Link>
                </FeatureBlock>

                <FeatureBlock
                    img="/calculator-demo.png"
                    title="Kalkulatory dietetyczne"
                    text="Oblicz swoje BMI, PPM i&nbsp;CPM w&nbsp;kilka sekund."
                    reverse
                >
                    <Link
                        href="/calculators"
                        className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition inline-block"
                    >
                        Przejdź do&nbsp;Kalkulatorów
                    </Link>
                </FeatureBlock>
            </div>

            {/* Vercel Analytics */}
            <Analytics />
        </>
    )
}
