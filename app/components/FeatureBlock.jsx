// app/components/FeatureBlock.jsx
export default function FeatureBlock({ img, title, text, reverse }) {
    return (
        <section className={`flex flex-col lg:flex-row items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
                <img src={img} className="w-full h-auto object-cover" alt={title} />
            </div>
            <div className="lg:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg text-gray-700">{text}</p>
                <a className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
                    Wypróbuj teraz
                </a>
            </div>
        </section>
    )
}
