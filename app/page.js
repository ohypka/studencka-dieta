// app/page.js
import FeaturesSection from './components/FeaturesSection'
import FeatureBlock from './components/FeatureBlock'
import { featuresList } from '../data/features'

export default function HomePage() {
    return (
        <>
            <section
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
                style={{ backgroundImage: "url('/hero-food.jpg')" }}
            >
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">
                    Twoja Dieta w Zasięgu Ręki
                </h1>
                <p className="mt-4 text-2xl text-white/90">
                    Zdrowe przepisy i kalkulatory w jednym miejscu
                </p>
                <button className="mt-8 px-8 py-4 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition">
                    Sprawdź Przepisy
                </button>
            </section>

            <FeaturesSection features={featuresList} />

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
        </>
    )
}
