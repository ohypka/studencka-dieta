// app/page.js
'use client'

import { Analytics } from '@vercel/analytics/react'
import FeaturesSection from './components/FeaturesSection'
import FeatureBlock from './components/FeatureBlock'
import { featuresList } from '../data/features'

export default function HomePage() {
    return (
        <>
            {/* Sekcja Hero */}
            <section
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 space-y-6"
                style={{ backgroundImage: "url('/hero-food.jpg')" }}
            >
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">
                    Twoja Dieta w Zasięgu Ręki
                </h1>
                <p className="text-2xl text-white/90 max-w-2xl">
                    Zdrowe przepisy, AI-asystent i kalkulatory dietetyczne – wszystko w jednym miejscu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/recipes"
                        className="px-8 py-4 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                    >
                        Sprawdź Przepisy
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf3eYVATdHOQbWuzzFvKPwBGw1YvspvqoUoQhQAiWoqJmwLKg/viewform?usp=sharing&ouid=106658456979211610144"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                        Wypełnij ankietę ewaluacyjną
                    </a>
                </div>
            </section>

            {/* Sekcja funkcjonalności */}
            <FeaturesSection features={featuresList} />

            {/* Bloki funkcji */}
            <FeatureBlock
                img="/ai-demo.jpg"
                title="AI-asystent kuchenny"
                text="Wpisz składniki, a my wygenerujemy przepis."
            />

            <FeatureBlock
                img="/calculator-demo.jpg"
                title="Kalkulatory dietetyczne"
                text="Oblicz swoje BMI, PPM i CPM w kilka sekund."
                reverse
            />

            {/* Vercel Analytics */}
            <Analytics />
        </>
    )
}
