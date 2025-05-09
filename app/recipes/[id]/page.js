// app/recipes/[id]/page.js
import { recipes } from '../../../data/recipes';

export default function RecipeDetail({ params }) {
    const recipe = recipes.find(r => r.id === params.id);
    if (!recipe) return <p>Przepis nie znaleziony</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
            <img src={recipe.img} alt={recipe.title} className="w-full h-64 object-cover mb-4"/>
            <h3 className="font-semibold">Składniki:</h3>
            <ul className="list-disc list-inside mb-4">
                {recipe.ingredients.map((ing,i) => <li key={i}>{ing}</li>)}
            </ul>
            <h3 className="font-semibold">Kroki przygotowania:</h3>
            <ol className="list-decimal list-inside">
                {recipe.steps.map((step,i) => <li key={i} className="mb-2">{step}</li>)}
            </ol>
        </div>
    );
}
