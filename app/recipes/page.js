// app/recipes/page.js
import { recipes } from '../../data/recipes';
import RecipeCard from '../components/RecipeCard';

export default function RecipesPage() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Baza przepisów</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map(r => (
                    <RecipeCard key={r.id} recipe={r} />
                ))}
            </div>
        </div>
    );
}
