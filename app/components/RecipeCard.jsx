// app/components/RecipeCard.jsx
import Link from 'next/link'

export default function RecipeCard({ recipe }) {
    return (
        <Link
            href={`/recipes/${recipe.id}`}
            className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
        >
            <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <p className="mt-1 text-sm text-gray-600">~{recipe.kcal} kcal</p>
            </div>
        </Link>
    )
}
