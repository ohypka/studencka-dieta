// app/components/FeaturesSection.jsx
import Link from 'next/link';

export default function FeaturesSection({ features }) {
    // formatujemy tekst, aby nie łamać krótkich wyrazów
    const formatText = (text) =>
        text
            .replace(/ w /g, ' w\u00A0')
            .replace(/ i /g, ' i\u00A0')
            .replace(/ my /g, ' my\u00A0')
            .replace(/ na /g, ' na\u00A0');

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="space-y-4 bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        {/* Obrazek */}
                        <img
                            src={f.img}
                            alt={f.title}
                            className="w-full h-40 object-cover"
                        />

                        {/* Tytuł jako link */}
                        <div className="px-6">
                            <Link
                                href={f.href}
                                className="block text-2xl font-semibold text-gray-800 hover:text-green-600 transition"
                            >
                                {f.title}
                            </Link>

                            {/* Opis */}
                            <p className="mt-2 text-gray-600">
                                {formatText(f.description)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
