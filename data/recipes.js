// data/recipes.js
export const recipes = [
    {
        id: 'carbonara',
        title: 'Makaron Carbonara',
        img: '/carbonara.png',  // wgraj ten obraz do public/
        ingredients: ['makaron', 'jajka', 'boczek', 'parmezan'],
        steps: [
            'Ugotuj makaron wg instrukcji.',
            'Usmaż boczek.',
            'Wymieszaj jajka z parmezanem.',
            'Połącz wszystko razem bez ponownego gotowania jajek.'
        ]
    },
    {
        id: 'omlet',
        title: 'Omlet ze szpinakiem',
        img: '/omlet.jpg',
        ingredients: ['jajka', 'szpinak', 'sól', 'pieprz'],
        steps: [
            'Roztrzep jajka z solą i pieprzem.',
            'Na patelni podsmaż szpinak.',
            'Wlej masę jajeczną i smaż do ścięcia.'
        ]
    },
    // dodaj więcej przepisów...
];
