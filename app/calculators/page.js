// app/calculators/page.js
"use client";

import { useState } from "react";

export default function CalculatorsPage() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [activity, setActivity] = useState(1.2);
    const [bmi, setBmi] = useState(null);
    const [ppm, setPpm] = useState(null);
    const [cpm, setCpm] = useState(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;
        const a = parseFloat(age);
        if (!w || !h || !a) return;
        const bmiVal = w / (h * h);
        const ppmVal = 10 * w + 6.25 * (h * 100) - 5 * a + 5; // męski
        const cpmVal = ppmVal * activity;
        setBmi(bmiVal.toFixed(1));
        setPpm(Math.round(ppmVal));
        setCpm(Math.round(cpmVal));
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Kalkulatory dietetyczne</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="number"
                    placeholder="Waga (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border p-2"
                />
                <input
                    type="number"
                    placeholder="Wzrost (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="border p-2"
                />
                <input
                    type="number"
                    placeholder="Wiek (lata)"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border p-2"
                />
                <select
                    value={activity}
                    onChange={(e) => setActivity(parseFloat(e.target.value))}
                    className="border p-2"
                >
                    <option value={1.2}>Mała aktywność</option>
                    <option value={1.375}>Lekka aktywność</option>
                    <option value={1.55}>Umiarkowana aktywność</option>
                    <option value={1.725}>Duża aktywność</option>
                </select>
            </div>
            <button
                onClick={calculate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Oblicz
            </button>
            {bmi && (
                <div className="mt-4 space-y-1">
                    <div>BMI: {bmi}</div>
                    <div>PPM: {ppm} kcal</div>
                    <div>CPM: {cpm} kcal</div>
                </div>
            )}
        </div>
    );
}
