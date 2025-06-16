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
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                {/* Kcal + makro */}
                <p className="text-sm text-gray-600">
                    <span className="font-medium">{recipe.kcal} kcal</span> •{' '}
                    B: {recipe.protein_g} g • T: {recipe.fat_g} g • W: {recipe.carbs_g} g
                </p>
            </div>
        </Link>
    )
}
