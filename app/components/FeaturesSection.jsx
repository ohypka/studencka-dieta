// app/components/FeaturesSection.jsx
export default function FeaturesSection({ features }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                {features.map(f => (
                    <div key={f.title} className="space-y-4">
                        <img src={f.icon} className="mx-auto w-16 h-16" alt="" />
                        <h3 className="text-xl font-semibold">{f.title}</h3>
                        <p className="text-gray-600">{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
