// data/recipes.js
export const recipes = [
    {
        id: 'tortilla-jajko',
        title: 'Tortilla z jajkiem i warzywami',
        img: '/tortilla.jpg',
        kcal: 335,
        ingredients: [
            'tortilla pszenna (1 szt.)',
            'jajko gotowane (1 szt.)',
            'serek śmietankowy (2 łyżki)',
            'pomidor lub papryka (kilka plasterków)',
            'rukola (garść)',
            'sól, pieprz (do smaku)'
        ],
        steps: [
            'Ugotuj jajko na twardo i pokrój w plasterki.',
            'Tortillę posmaruj serkiem.',
            'Dodaj rukolę, warzywa i jajko.',
            'Zwiń ciasno i przekrój na pół.'
        ],
        zamienniki: {
            'tortilla pszenna': ['naleśnik', 'lawasz', 'liść sałaty'],
            'serek śmietankowy': ['hummus', 'twarożek', 'awokado'],
            'pomidor/papryka': ['ogórek kiszony', 'cukinia'],
            'rukola': ['mix sałat', 'sałata lodowa']
        }
    },
    {
        id: 'owsianka-nocna',
        title: 'Owsianka nocna',
        img: '/owsianka.jpg',
        kcal: 345,
        ingredients: [
            'płatki owsiane (5 łyżek / 50 g)',
            'mleko 2% (150 ml)',
            'banan (1/2 szt.)',
            'jogurt naturalny (1 łyżka)',
            'nasiona chia (1 łyżeczka)',
            'opcjonalnie: cynamon, orzechy'
        ],
        steps: [
            'Wymieszaj składniki w słoiku lub pojemniku.',
            'Wstaw na noc do lodówki.',
            'Rano dodaj owoce lub orzechy.'
        ],
        zamienniki: {
            'płatki owsiane': ['płatki jaglane', 'muesli'],
            'mleko 2%': ['napój owsiany', 'woda'],
            'banan': ['jabłko', 'borówki', 'gruszka'],
            'jogurt naturalny': ['kefir', 'jogurt roślinny'],
            'nasiona chia': ['siemię lniane']
        }
    },
    {
        id: 'wrap-twarozek',
        title: 'Mini wrapy z twarożkiem i rzodkiewką',
        img: '/wrap.jpg',
        kcal: 265,
        ingredients: [
            'twaróg półtłusty (3 łyżki)',
            'jogurt naturalny (1 łyżka)',
            'rzodkiewki (3 szt.)',
            'szczypiorek (do smaku)',
            'sałata rzymska (2 liście) lub tortilla (1 mała)',
            'sól, pieprz (do smaku)'
        ],
        steps: [
            'Wymieszaj twarożek z jogurtem i szczypiorkiem.',
            'Dodaj pokrojone rzodkiewki.',
            'Rozsmaruj na sałacie lub tortilli i zwiń.'
        ],
        zamienniki: {
            'twaróg': ['serek wiejski', 'feta'],
            'jogurt naturalny': ['kefir', 'majonez light'],
            'rzodkiewki': ['ogórek', 'papryka'],
            'szczypiorek': ['koperek', 'cebula dymka']
        }
    },
    {
        id: 'placuszki-bananowe',
        title: 'Mini placuszki bananowe',
        img: '/placuszki.jpg',
        kcal: 300,
        ingredients: [
            'banan dojrzały (1 szt.)',
            'jajko (1 szt.)',
            'płatki owsiane (2 łyżki)',
            'olej do smażenia (1 łyżeczka)'
        ],
        steps: [
            'Zblenduj banana z jajkiem i płatkami.',
            'Smaż placuszki na rozgrzanej patelni.',
            'Ostudź i zapakuj do pudełka.'
        ],
        zamienniki: {
            'banan': ['gruszka', 'jabłko', 'puree z dyni'],
            'płatki owsiane': ['mąka owsiana', 'kasza manna'],
            'olej': ['masło klarowane', 'bez tłuszczu na patelni teflonowej']
        }
    },
    {
        id: 'jajka-muffinki',
        title: 'Jajka w muffinkach',
        img: '/muffinki.jpg',
        kcal: 310,
        ingredients: [
            'jajka (3 szt.)',
            'papryka (1/4 szt.)',
            'szynka lub ser (1 plaster)',
            'mleko (1 łyżka)',
            'przyprawy: sól, pieprz, zioła'
        ],
        steps: [
            'Wymieszaj jajka z mlekiem i pokrojonymi dodatkami.',
            'Wlej do silikonowych foremek.',
            'Piecz w 180°C przez 15 minut.'
        ],
        zamienniki: {
            'szynka': ['ser', 'tofu', 'pieczarki'],
            'papryka': ['kukurydza', 'brokuł', 'suszone pomidory'],
            'mleko': ['napój roślinny', 'bez mleka – tylko jajka']
        }
    }
];
