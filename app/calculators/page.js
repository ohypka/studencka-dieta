// app/calculators/page.js
'use client'

import { useState } from 'react'

export default function CalculatorsPage() {
    const [weight, setWeight]     = useState('')
    const [height, setHeight]     = useState('')
    const [age, setAge]           = useState('')
    const [gender, setGender]     = useState('male')
    // Domyślna aktywność ustawiona na „Lekka” (środek przedziału PAL 1.2–1.55)
    const [activity, setActivity] = useState('1.375')
    const [result, setResult]     = useState(null)

    const calculate = () => {
        const w    = parseFloat(weight)
        const hCm  = parseFloat(height)
        const h    = hCm / 100
        const a    = parseInt(age, 10)
        const act  = parseFloat(activity)
        if (!w || !h || !a || !act) return

        // Obliczenie BMI
        const bmiVal = w / (h * h)

        // PPM: Harris-Benedict jeśli BMI ≤ 30, inaczej Mifflin-St Jeora
        let ppmVal
        if (bmiVal <= 30) {
            // Harris-Benedict:
            //   mężczyźni: 66.5 + 13.75·waga + 5.003·wzrost(cm) – 6.775·wiek
            //   kobiety:   655.1 + 9.563·waga + 1.85·wzrost(cm) – 4.676·wiek
            ppmVal = gender === 'male'
                ? 66.5  + 13.75  * w   + 5.003  * hCm - 6.775 * a
                : 655.1 + 9.563   * w   + 1.85   * hCm - 4.676 * a
        } else {
            // Mifflin-St Jeora:
            //   mężczyźni: 10·waga + 6.25·wzrost(cm) – 5·wiek + 5
            //   kobiety:   10·waga + 6.25·wzrost(cm) – 5·wiek – 161
            ppmVal = gender === 'male'
                ? 10 * w + 6.25 * hCm - 5 * a + 5
                : 10 * w + 6.25 * hCm - 5 * a - 161
        }

        // CPM = PPM × współczynnik aktywności
        const cpmVal = ppmVal * act

        setResult({
            bmi: bmiVal,
            ppm: ppmVal,
            cpm: cpmVal,
            act: act
        })
    }

    const reset = () => {
        setWeight('')
        setHeight('')
        setAge('')
        setGender('male')
        setActivity('1.375')
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
                        {/* Płeć */}
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
                        {/* Waga */}
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
                        {/* Wzrost */}
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
                        {/* Wiek */}
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
                        {/* Aktywność fizyczna (PAL wg dietetycy.org.pl) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Aktywność fizyczna</label>
                            <select
                                value={activity}
                                onChange={e => setActivity(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <option value="1.1">Brak aktywności (PAL &lt; 1.2)</option>
                                <option value="1.375">Lekka aktywność (PAL 1.2–1.55)</option>
                                <option value="1.63">Umiarkowana aktywność (PAL 1.55–1.71)</option>
                                <option value="1.83">Wysoka aktywność (PAL 1.71–1.95)</option>
                                <option value="2.0">Bardzo wysoka aktywność (PAL &gt; 1.95)</option>
                            </select>

                            {/* Dokładny opis interpretacji PAL */}
                            <div className="mt-4 text-sm text-gray-600">
                                <h2 className="font-semibold mb-2">Interpretacja współczynnika PAL:</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    <li><strong>Brak aktywności (PAL &lt; 1.2):</strong> brak treningów, praca siedząca, stan chorobowy/leżący.</li>
                                    <li><strong>Lekka aktywność (PAL 1.2–1.55):</strong> praca siedząca + 1–2 treningi tygodniowo.</li>
                                    <li><strong>Umiarkowana aktywność (PAL 1.55–1.71):</strong> praca siedząca + 3–4 treningi tygodniowo.</li>
                                    <li><strong>Wysoka aktywność (PAL 1.71–1.95):</strong> praca fizyczna + 3–4 treningi tygodniowo.</li>
                                    <li><strong>Bardzo wysoka aktywność (PAL &gt; 1.95):</strong> praca fizyczna i intensywne ćwiczenia codzienne lub sport zawodowy.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Przyciski */}
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

                            {/* Cele kaloryczne / komunikat */}
                            <div className="space-y-2">
                                { (result.bmi < 18.5 || result.act <= 1.2) ? (
                                    <p className="text-center text-red-600">
                                        Z uwagi na niską masę ciała i/lub niską aktywność fizyczną, Twoje zapotrzebowanie kaloryczne jest bardzo niskie, co może generować wyższe uczucie głodu i problemy z bilansowaniem diety. Zwiększ swoją aktywność w celu zwiększenia zapotrzebowania kalorycznego.
                                    </p>
                                ) : (
                                    <p>
                                        <span className="font-semibold">{Math.round(result.cpm - 500)}</span> kcal&nbsp;
                                        <span className="text-gray-600">– aby schudnąć</span>
                                    </p>
                                )}
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
