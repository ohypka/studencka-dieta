// app/components/RecipeCard.jsx
import Link from 'next/link';

export default function RecipeCard({ recipe }) {
    return (
        <Link
            href={`/recipes/${recipe.id}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
            <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                    Składniki: {recipe.ingredients.join(', ')}
                </p>
            </div>
        </Link>
    );
}
