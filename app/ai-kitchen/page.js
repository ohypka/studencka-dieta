// app/ai-kitchen/page.js
"use client";

import { useState } from "react";

export default function AiKitchenPage() {
    const [ingredients, setIngredients] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult("");
        try {
            const res = await fetch("/api/gpt", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ingredients })
            });
            const data = await res.json();
            setResult(data.recipe || data.error);
        } catch (err) {
            setResult("Błąd: " + err.message);
        }
        setLoading(false);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Co ugotować z tego, co mam?</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="np. makaron, pomidory, ser..."
                    className="border p-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Generuję..." : "Generuj przepis"}
                </button>
            </form>
            {result && (
                <pre className="bg-gray-100 p-4 whitespace-pre-wrap">{result}</pre>
            )}
        </div>
    );
}
