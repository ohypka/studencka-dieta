// app/recipes/page.jsx
import RecipeCard from '../components/RecipeCard'
import { recipes } from '@/data/recipes'

export const metadata = {
    title: 'Przepisy • Studencka Dieta'
}

export default function RecipesPage() {
    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold mb-8 text-center">Przepisy</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </section>
    )
}
