// app/calculators/page.js
'use client'

import { useState } from 'react'

export default function CalculatorsPage() {
    const [weight, setWeight]     = useState('')
    const [height, setHeight]     = useState('')
    const [age, setAge]           = useState('')
    const [gender, setGender]     = useState('male')
    const [activity, setActivity] = useState('1.2')
    const [result, setResult]     = useState(null)

    const calculate = () => {
        const w    = parseFloat(weight)
        const hCm  = parseFloat(height)
        const h    = hCm / 100
        const a    = parseInt(age, 10)
        const act  = parseFloat(activity)
        if (!w || !h || !a || !act) return

        const bmiVal = w / (h * h)

        // PPM wg Mifflin–St Jeor
        const ppmVal = gender === 'male'
            ? 10 * w + 6.25 * hCm - 5 * a + 5
            : 10 * w + 6.25 * hCm - 5 * a - 161

        const cpmVal = ppmVal * act

        setResult({
            bmi: bmiVal,
            ppm: ppmVal,
            cpm: cpmVal
        })
    }

    const reset = () => {
        setWeight('')
        setHeight('')
        setAge('')
        setGender('male')
        setActivity('1.2')
        setResult(null)
    }

    const getBmiCategory = (bmi) => {
        if (bmi < 16.0) return { label: 'Wygłodzenie',       color: 'text-red-700' }
        if (bmi < 17.0) return { label: 'Wychudzenie',       color: 'text-red-600' }
        if (bmi < 18.5) return { label: 'Niedowaga',         color: 'text-yellow-600' }
        if (bmi < 25.0) return { label: 'Waga prawidłowa',   color: 'text-green-600' }
        if (bmi < 30.0) return { label: 'Nadwaga',           color: 'text-yellow-500' }
        if (bmi < 35.0) return { label: 'Otyłość I stopnia', color: 'text-red-500' }
        if (bmi < 40.0) return { label: 'Otyłość II stopnia',color: 'text-red-600' }
        return { label: 'Otyłość III stopnia',color: 'text-red-700' }
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-extrabold text-center mb-8">Kalkulatory dietetyczne</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Formularz */}
                    <div className="bg-white rounded-xl shadow p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Płeć</label>
                            <select
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <option value="male">Mężczyzna</option>
                                <option value="female">Kobieta</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Waga (kg)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="np. 70"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Wzrost (cm)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="np. 175"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Wiek (lata)</label>
                            <input
                                type="number"
                                value={age}
                                onChange={e => setAge(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="np. 25"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Aktywność fizyczna</label>
                            <select
                                value={activity}
                                onChange={e => setActivity(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <option value="1.2">Mała (siedzący tryb życia, brak treningów)</option>
                                <option value="1.375">Lekka (1–3 treningi w tygodniu)</option>
                                <option value="1.55">Umiarkowana (3–5 treningów w tygodniu)</option>
                                <option value="1.725">Duża (ciężka praca fizyczna lub intensywne ćwiczenia)</option>
                            </select>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={calculate}
                                className="flex-1 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition"
                            >
                                Oblicz
                            </button>
                            <button
                                onClick={reset}
                                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition"
                            >
                                Wyczyść
                            </button>
                        </div>
                    </div>

                    {/* Wyniki */}
                    {result && (
                        <div className="bg-white rounded-xl shadow p-6 space-y-8">
                            {/* BMI */}
                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-600">Twoje BMI</p>
                                <p className={`text-4xl font-bold ${getBmiCategory(result.bmi).color}`}>
                                    {result.bmi.toFixed(1)}
                                </p>
                                <p className={`text-lg font-medium ${getBmiCategory(result.bmi).color}`}>
                                    {getBmiCategory(result.bmi).label}
                                </p>
                            </div>

                            {/* PPM i CPM */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-green-50 rounded-lg p-4 text-center">
                                    <p className="text-sm text-gray-600">Podstawowa Przemiana Materii (PPM)</p>
                                    <p className="text-2xl font-semibold text-green-700">{Math.round(result.ppm)} kcal</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4 text-center">
                                    <p className="text-sm text-gray-600">Całkowite Zapotrzebowanie Energetyczne (CPM)</p>
                                    <p className="text-2xl font-semibold text-blue-700">{Math.round(result.cpm)} kcal</p>
                                </div>
                            </div>

                            {/* Cele kaloryczne */}
                            <div className="space-y-2">
                                <p>
                                    <span className="font-semibold">{Math.round(result.cpm - 500)}</span> kcal&nbsp;
                                    <span className="text-gray-600">– aby schudnąć</span>
                                </p>
                                <p>
                                    <span className="font-semibold">{Math.round(result.cpm)}</span> kcal&nbsp;
                                    <span className="text-gray-600">– aby utrzymać wagę</span>
                                </p>
                                <p>
                                    <span className="font-semibold">{Math.round(result.cpm + 500)}</span> kcal&nbsp;
                                    <span className="text-gray-600">– aby przytyć</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
