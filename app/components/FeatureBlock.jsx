// app/components/FeatureBlock.jsx
export default function FeatureBlock({ img, title, text, reverse, children }) {
    // Zamiana krótkich wyrazów na niełamliwe połączenia z następnym wyrazem:
    const formattedText = text
        .replace(/ w /g, ' w\u00A0')
        .replace(/ i /g, ' i\u00A0')
        .replace(/ na /g, ' na\u00A0');

    return (
        <section
            className={`flex flex-col lg:flex-row items-center ${
                reverse ? 'lg:flex-row-reverse' : ''
            } bg-white rounded-xl shadow-lg overflow-hidden`}
        >
            {/* Obrazek */}
            <div className="lg:w-1/2">
                <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>
            {/* Tekst + przycisk */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-lg text-gray-700">
                    {formattedText}
                </p>
                {children && (
                    <div className="mt-4">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}
