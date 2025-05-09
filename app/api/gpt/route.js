// app/api/gpt/route.js
import OpenAI from "openai";

console.log("🔑 OPENAI_API_KEY env:", process.env.OPENAI_API_KEY);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
    try {
        const { ingredients } = await req.json();
        const chat = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Jesteś asystentem kuchni." },
                { role: "user",   content: `Co mogę ugotować z: ${ingredients}?` }
            ]
        });
        const recipe = chat.choices[0].message.content;
        return new Response(JSON.stringify({ recipe }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
