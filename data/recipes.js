// data/recipes.js
export const recipes =
    [
        {
            id: 'tortilla-jajko',
            title: 'Tortilla z jajkiem i warzywami',
            img: '/tortilla-jajko.png',
            kcal: 335,
            protein_g: 13,
            fat_g: 19,
            carbs_g: 30,
            ingredients: [
                '1x tortilla pełnoziarnista',
                '1 jajko (ugotowane na twardo)',
                '2 łyżki serka śmietankowego',
                'kilka plasterków pomidora lub papryki',
                'garść rukoli',
                'sól, pieprz do smaku'
            ],
            shoppingList: [
                'tortilla pełnoziarnista',
                'jajka',
                'serek śmietankowy',
                '1 pomidor lub 1 papryka',
                'opakowanie rukoli',
                'sól, pieprz'
            ],
            steps: [
                'Ugotuj jajko na twardo (ok. 9 min), ostudź, obierz i pokrój w plasterki.',
                'Rozłóż tortillę i posmaruj ją cienko serkiem śmietankowym.',
                'Na środku ułóż rukolę, plasterki jajka i warzywa.',
                'Dopraw całość solą i pieprzem.',
                'Zwiń tortillę w rulon, przetnij na pół i zapakuj.'
            ],
            zamienniki: {
                'tortilla pełnoziarnista': ['liść sałaty rzymskiej', 'lawasz'],
                'serek śmietankowy': ['hummus', 'awokado', 'twarożek jogurtowy'],
                'pomidor/papryka': ['ogórek', 'rzodkiewka'],
                'rukola': ['mix sałat', 'sałata lodowa', 'szpinak baby']
            }
        },

        {
            id: 'owsianka-nocna',
            title: 'Owsianka nocna',
            img: '/owsianka-nocna.png',
            kcal: 345,
            protein_g: 16,
            fat_g: 8,
            carbs_g: 58,
            ingredients: [
                '5 łyżek płatków owsianych (50 g)',
                '150 ml mleka (krowie lub roślinne)',
                '1/2 banana',
                '1 łyżka jogurtu naturalnego',
                '1 łyżeczka nasion chia',
                'opcjonalnie cynamon, orzechy, owoce'
            ],
            shoppingList: [
                'opakowanie płatków owsianych',
                'mleko',
                '1 banan',
                'jogurt naturalny',
                'nasiona chia',
                'cynamon, orzechy włoskie, owoce sezonowe'
            ],
            steps: [
                'Do słoika wsyp płatki owsiane i nasiona chia.',
                'Dodaj jogurt, mleko i rozgniecionego banana.',
                'Dodaj szczyptę cynamonu, zamknij i wymieszaj.',
                'Wstaw do lodówki na całą noc (min. 6–8 h).',
                'Rano przed podaniem możesz dodać świeże owoce lub orzechy.'
            ],
            zamienniki: {
                'płatki owsiane': ['płatki jaglane', 'musli niesłodzone', 'płatki żytnie'],
                'mleko': ['napój owsiany', 'sojowy', 'woda'],
                'banan': ['jabłko starte', 'gruszka', 'maliny', 'a nawet starta marchewka'],
                'jogurt': ['kefir', 'jogurt roślinny, np. kokosowy', 'maślanka'],
                'nasiona chia': ['siemię lniane', 'słonecznik', 'pestki dyni']
            }
        },

        {
            id: 'wrap-twarozek',
            title: 'Mini wrapy z twarożkiem i rzodkiewką',
            img: '/wrap-twarozek.png',
            kcal: 265,
            protein_g: 11,
            fat_g: 7,
            carbs_g: 38,
            ingredients: [
                '3 łyżki twarożku lub serka wiejskiego',
                '1 łyżka jogurtu naturalnego',
                '3 rzodkiewki pokrojone w plasterki',
                'szczypiorek do smaku',
                '1 tortilla pełnoziarnista',
                'sól, pieprz'
            ],
            shoppingList: [
                'twaróg półtłusty lub serek wiejski',
                'jogurt naturalny',
                'rzodkiewki',
                'szczypiorek',
                'sałata rzymska',
                'tortilla pełnoziarnista',
                'sól, pieprz'
            ],
            steps: [
                'W miseczce wymieszaj twarożek z jogurtem, solą, pieprzem i drobno posiekanym szczypiorkiem.',
                'Rzodkiewki pokrój w cienkie plasterki.',
                'Na tortillę rozłóź liście sałaty i rozsmaruj pastę twarogową.',
                'Nałóż rzodkiewki, zwiń całość w rulon.',
                'Przetnij na pół i zapakuj do lunchboxa.'
            ],
            zamienniki: {
                'twaróg': ['serek wiejski', 'serek kremowy light', 'feta pokruszona'],
                'jogurt': ['kefir', 'majonez light', 'jogurt roślinny'],
                'rzodkiewki': ['ogórek', 'papryka', 'marchewka pokrojona w słupki'],
                'szczypiorek': ['koperek', 'cebula dymka', 'natka pietruszki']
            }
        },

        {
            id: 'placuszki-bananowe',
            title: 'Mini placuszki bananowe',
            img: '/placuszki-bananowe.png',
            kcal: 300,
            protein_g: 11,
            fat_g: 12,
            carbs_g: 41,
            ingredients: [
                '1 duży dojrzały banan',
                '1 jajko',
                '2 łyżki płatków owsianych',
                '1 łyżeczka oliwy do smażenia'
            ],
            shoppingList: [
                'dojrzały banan',
                'jajka',
                'płatki owsiane',
                'oliwa z oliwek do smażenia'
            ],
            steps: [
                'Banana rozgnieć widelcem lub zmiksuj razem z jajkiem i płatkami.',
                'Rozgrzej patelnię z niewielką ilością oliwy.',
                'Nakładaj łyżką małe placuszki (średnica 6–7 cm).',
                'Smaż po ok. 1,5 minuty z każdej strony na złoty kolor.',
                'Ostudzone przechowuj w pudełku.'
            ],
            zamienniki: {
                'banan': ['gruszka', 'puree z dyni', 'marchewka tarta'],
                'płatki owsiane': ['kasza manna', 'mąka kokosowa', 'mąka owsiana'],
                'oliwa z oliwek': ['olej kokosowy', 'smażenie bez tłuszczu na nieprzywierającej patelni']
            }
        },

        {
            id: 'sniadaniowe-muffinki',
            title: 'Śniadaniowe muffinki',
            img: '/sniadaniowe-muffinki.png',
            kcal: 310,
            protein_g: 30,
            fat_g: 17,
            carbs_g: 9,
            ingredients: [
                '3 jajka',
                'pół papryki pokrojonej w kostkę',
                '2 plasterki szynki drobiowej',
                '1 łyżka mleka',
                'sól, pieprz, dowolne zioła (np. bazylia)'
            ],
            shoppingList: [
                'jajka',
                'papryka',
                'szynka drobiowa',
                'mleko',
                'sól, pieprz, ulubione zioła'
            ],
            steps: [
                'Rozgrzej piekarnik do 180°C.',
                'W miseczce roztrzep jajka z mlekiem, solą, pieprzem i ziołami.',
                'Paprykę i szynkę pokrój w drobną kostkę.',
                'Do foremek na muffinki wlej mieszankę – ok. 2/3 wysokości.',
                'Piecz przez 15 minut, aż jajka się zetną i lekko zarumienią.',
                'Ostudź i przełóż do pojemników lub zjedz od razu.'
            ],
            zamienniki: {
                'szynka drobiowa': ['tofu'],
                'papryka': ['kukurydza', 'brokuł drobno pokrojony', 'pomidory suszone'],
                'mleko': ['napój sojowy', 'napój owsiany', 'woda + więcej jajek']
            }
        },

        {
            id: 'kanapka-tunczyk',
            title: 'Kanapka z pastą z tuńczyka i jajka',
            img: '/kanapka-tunczyk.png',
            kcal: 300,
            protein_g: 29,
            fat_g: 7,
            carbs_g: 31,
            ingredients: [
                'pół puszki tuńczyka w sosie własnym (ok. 70 g)',
                '1 jajko ugotowane na twardo',
                '1 łyżka jogurtu naturalnego lub majonezu light',
                '2 kromki pieczywa (pełnoziarniste)',
                'szczypiorek, sól, pieprz'
            ],
            shoppingList: [
                'tuńczyk w sosie własnym',
                'jajka',
                'jogurt naturalny lub majonez light',
                'chleb pełnoziarnisty',
                'pęczek szczypiorku',
                'sól, pieprz'
            ],
            steps: [
                'Odsącz tuńczyka i rozdrobnij widelcem.',
                'Pokrój ugotowane jajko i dodaj do tuńczyka.',
                'Dodaj jogurt/majonez, posiekany szczypiorek, sól i pieprz; dobrze wymieszaj.',
                'Posmaruj pastą kromki pieczywa, złóż kanapkę.',
                'Spakuj do lunchboxa – dobrze trzyma świeżość kilka godzin.'
            ],
            zamienniki: {
                'tuńczyk': ['makrela z puszki', 'soczewica ugotowana', 'kurczak z poprzedniego obiadu'],
                'jogurt/majonez': ['hummus', 'awokado'],
                'chleb': ['tortilla', 'bułka grahamka', 'chleb żytni']
            }
        },

        {
            id: 'salatka-makaronowa',
            title: 'Sałatka makaronowa z warzywami',
            img: '/salatka-makaronowa.png',
            kcal: 280,
            protein_g: 10,
            fat_g: 1,
            carbs_g: 56,
            ingredients: [
                '60 g makaronu (ugotowanego)',
                'pół papryki pokrojonej w kostkę',
                'pół ogórka pokrojonego w plastry',
                '1 łyżka keczupu lub jogurtu naturalnego',
                'sól, pieprz'
            ],
            shoppingList: [
                'opakowanie makaronu (np. świderki)',
                '1 papryka',
                '1 ogórek',
                'keczup lub jogurt naturalny',
                'sól, pieprz'
            ],
            steps: [
                'Ugotuj makaron al dente zgodnie z instrukcją; ostudź.',
                'Pokrój paprykę i ogórka.',
                'W dużej misce wymieszaj makaron z warzywami.',
                'Dodaj keczup lub jogurt, przypraw solą i pieprzem, dobrze wymieszaj.',
                'Zapakuj do pudełka – smakuje dobrze na zimno lub w temperaturze pokojowej.'
            ],
            zamienniki: {
                'makaron': ['kasza kuskus', 'ryż biały lub brązowy', 'kasza jaglana'],
                'papryka': ['marchewka starta', 'kukurydza z puszki'],
                'keczup/jogurt': ['majonez light', 'sos winegret', 'oliwa z oliwek']
            }
        },

        {
            id: 'wrap-hummus',
            title: 'Wrap z hummusem i ogórkiem',
            img: '/wrap-hummus.png',
            kcal: 250,
            protein_g: 8,
            fat_g: 9,
            carbs_g: 33,
            ingredients: [
                '1 pełnoziarnista tortilla',
                '2 łyżki hummusu',
                'kilka pasków ogórka',
                'szczypiorek lub plasterki rzodkiewki'
            ],
            shoppingList: [
                'opakowanie tortilli pełnoziarnistych',
                'hummus',
                'ogórek',
                'pęczek szczypiorku lub opakowanie rzodkiewek'
            ],
            steps: [
                'Rozłóż tortillę i posmaruj hummusem.',
                'Na środku ułóż paski ogórka i posyp drobno pokrojonym szczypiorkiem lub rzodkiewką.',
                'Zwiń tortillę ciasno w rulon i przetnij na pół.',
                'Zapakuj do pudełka – sprawdza się na wynos:).'
            ],
            zamienniki: {
                'tortilla': ['liść sałaty', 'lawasz'],
                'hummus': ['serek kanapkowy', 'pasta z awokado', 'twarożek', 'serek wiejski'],
                'ogórek': ['papryka', 'marchewka', 'rzodkiewki']
            }
        },

        {
            id: 'jogurt-musli',
            title: 'Jogurt z owocami i musli',
            img: '/jogurt-musli.png',
            kcal: 220,
            protein_g: 8,
            fat_g: 7,
            carbs_g: 30,
            ingredients: [
                '150 g jogurtu naturalnego',
                'porcja musli bez cukru',
                '50 g świeżych lub mrożonych owoców',
                '1 łyżka orzechów lub rodzynek'
            ],
            shoppingList: [
                'duże opakowanie jogurtu naturalnego',
                'musli bez dodatku cukru',
                'opakowanie owoców (np. truskawki, jagody)',
                'orzechy włoskie lub migdały'
            ],
            steps: [
                'Do miseczki lub pojemnika włóż jogurt.',
                'Dodaj owoce i posyp od góry musli oraz orzechami/rodzynkami.',
                'Jeśli trzeba, przykryj pokrywką lub folią i schowaj do lodówki lub zjedz od razu.'
            ],
            zamienniki: {
                'jogurt': ['kefir', 'maślanka', 'jogurt roślinny'],
                'musli': ['płatki owsiane', 'płatki kukurydziane niesłodzone'],
                'orzechy': ['pestki dyni', 'słonecznika', 'rodzynki']
            }
        },

        {
            id: 'tortilla-fasola',
            title: 'Mini tortille z pastą z fasoli i warzywami',
            img: '/tortilla-fasola.png',
            kcal: 320,
            protein_g: 10,
            fat_g: 7,
            carbs_g: 55,
            ingredients: [
                '2 mini tortille pełnoziarniste',
                '3 łyżki pasty z czarnej fasoli',
                '2 łyżki kukurydzy z puszki',
                'papryka lub pomidor pokrojone',
                'kilka liści sałaty lub koperku'
            ],
            shoppingList: [
                'mini tortille pełnoziarniste',
                'puszka czarnej fasoli lub gotowa pasta',
                'puszka kukurydzy',
                '1 papryka lub pomidor',
                'sałata lub pęczek koperku'
            ],
            steps: [
                'Podgrzej tortille przez ok. 20 s na suchej patelni lub w mikrofalówce.',
                'Na każdą tortillę nałóż pastę z fasoli.',
                'Dodaj kukurydzę, pokrojone warzywa i liście sałaty.',
                'Zwiń w rulon, przetnij na pół i zapakuj do pudełka.'
            ],
            zamienniki: {
                'mini tortille': ['liście sałaty', 'bułka grahamka'],
                'pasta z fasoli': ['hummus', 'guacamole', 'pasta z soczewicy'],
                'kukurydza': ['groszek', 'marchewka gotowana', 'fasolka szparagowa'],
                'papryka/pomidor': ['ogórek', 'rzodkiewka']
            }
        },

        {
            id: 'meksykanski-bowl',
            title: 'Meksykański bowl z ryżem i fasolą',
            img: '/meksykanski-bowl.png',
            kcal: 450,
            protein_g: 14,
            fat_g: 3,
            carbs_g: 92,
            ingredients: [
                '80 g ryżu brązowego (surowego)',
                '100 g fasoli z puszki (odsączonej)',
                '50 g kukurydzy z puszki',
                'pół pomidora pokrojonego',
                'pół łyżeczki kminu rzymskiego',
                'pół łyżeczki słodkiej papryki',
                'sól, pieprz do smaku',
                'opcjonalnie: kolendra'
            ],
            shoppingList: [
                'ryż brązowy 500 g',
                '2 puszki fasoli',
                '1 puszka kukurydzy',
                '1 pomidor',
                'przyprawy: kmin, papryka, sól, pieprz',
                'kolendra (opakowanie)'
            ],
            steps: [
                'Ugotuj ryż zgodnie z instrukcją i odstaw do ostudzenia.',
                'W misce wymieszaj ryż, fasolę, kukurydzę i pokrojonego pomidora.',
                'Dopraw kminem, papryką, solą i pieprzem.',
                'Jeśli lubisz – dodaj świeżą kolendrę.',
                'Zapakuj do pudełka – smakuje zimna lub lekko podgrzana.'
            ],
            zamienniki: {
                'ryż': ['kasza jaglana', 'quinoa', 'kuskus'],
                'fasola': ['soczewica', 'cieciorka'],
                'kukurydza': ['groszek', 'marchewka'],
                'pomidor': ['papryka', 'ogórek']
            }
        },

        {
            id: 'kurczak-kasza-brokul',
            title: 'Kurczak z warzywami i kaszą pęczak',
            img: '/kurczak-kasza-brokul.png',
            kcal: 500,
            protein_g: 47,
            fat_g: 12,
            carbs_g: 51,
            ingredients: [
                '120 g piersi z kurczaka',
                '70 g kaszy pęczak (suchej)',
                '100 g brokuła',
                '1 marchewka',
                '1 ząbek czosnku',
                '1 łyżeczka oliwy z oliwek',
                'sól, pieprz do smaku'
            ],
            shoppingList: [
                'pierś z kurczaka 400 g',
                'kasza pęczak opakowanie',
                '1 brokuł',
                '2 marchewki',
                'czosnek 1–2 ząbki',
                'oliwa',
                'przyprawy'
            ],
            steps: [
                'Ugotuj kaszę pęczak zgodnie z instrukcją.',
                'Kurczaka pokrój na paski, przypraw solą i pieprzem.',
                'Na patelni rozgrzej oliwę, podsmaż czosnek, następnie kurczaka (5–7 min).',
                'Dodaj pokrojoną marchewkę i brokuły, smaż kilka minut.',
                'Połącz wszystko z kaszą i zapakuj po ostudzeniu.'
            ],
            zamienniki: {
                'kurczak': ['indyk', 'tofu', 'cieciorka'],
                'kasza pęczak': ['ryż brązowy', 'makaron pełnoziarnisty'],
                'brokuł': ['kalafior', 'cukinia', 'papryka']
            }
        },

        {
            id: 'zupa-krem-batat',
            title: 'Zupa krem z batata i marchewki',
            img: '/zupa-krem-batat.png',
            kcal: 300,
            protein_g: 4,
            fat_g: 6,
            carbs_g: 58,
            ingredients: [
                '200 g batata',
                '100 g marchewki',
                'pół cebuli',
                '500 ml bulionu warzywnego',
                '1 łyżka oliwy',
                'świeży imbir 1 cm kawałek',
                'sól i pieprz do smaku'
            ],
            shoppingList: [
                '1 batat',
                '2 marchewki',
                '1 cebula',
                'bulion warzywny',
                'imbir',
                'oliwa',
                'przyprawy'
            ],
            steps: [
                'Na oliwie podsmaż pokrojoną cebulę i imbir przez 2 minuty.',
                'Dodaj pokrojonego batata i marchewkę, zalej bulionem.',
                'Gotuj przez 15–20 minut, aż warzywa będą miękkie.',
                'Zblenduj na gładki krem, dopraw solą i pieprzem.',
                'Odstaw do ostudzenia i zapakuj na wynos.'
            ],
            zamienniki: {
                'batat': ['dynia', 'ziemniak'],
                'marchewka': ['pietruszka', 'seler']
            }
        },

        {
            id: 'makaron-tunczyk-szpinak',
            title: 'Makaron z tuńczykiem i szpinakiem',
            img: '/makaron-tunczyk-szpinak.png',
            kcal: 420,
            protein_g: 34,
            fat_g: 7,
            carbs_g: 53,
            ingredients: [
                '80 g makaronu pełnoziarnistego (suchego)',
                '70 g tuńczyka w sosie własnym',
                '100 g szpinaku (świeży lub mrożony)',
                '1 ząbek czosnku',
                '1 łyżeczka oliwy',
                'sól i pieprz do smaku'
            ],
            shoppingList: [
                'makaron pełnoziarnisty',
                '1 puszka tuńczyka',
                'opakowanie szpinaku',
                'czosnek',
                'oliwa',
                'przyprawy'
            ],
            steps: [
                'Ugotuj makaron al dente, odcedź.',
                'Na oliwie podsmaż pokrojony czosnek przez 1 min.',
                'Dodaj szpinak i podsmaż.',
                'Dodaj odsączonego tuńczyka i podgrzej całość przez 2 minuty.',
                'Wymieszaj z makaronem, dopraw i zapakuj.'
            ],
            zamienniki: {
                'tuńczyk': ['makrela', 'soczewica', 'ser feta'],
                'szpinak': ['jarmuż', 'brokuły', 'groszek'],
                'makaron': ['ryż', 'quinoa', 'kasza jęczmienna']
            }
        },

        {
            id: 'salatka-quinoa-feta',
            title: 'Sałatka z komosą, ogórkiem i fetą',
            img: '/salatka-quinoa-feta.png',
            kcal: 390,
            protein_g: 15,
            fat_g: 18,
            carbs_g: 42,
            ingredients: [
                '70 g komosy ryżowej (quinoa) suchej',
                '1 ogórek pokrojony',
                '100 g pomidorków koktajlowych',
                '50 g sera feta',
                '1 łyżka oliwy',
                'sok z cytryny lub ocet',
                'sól, pieprz, bazylia'
            ],
            shoppingList: [
                'quinoa',
                '1 ogórek',
                'opakowanie pomidorków koktajlowych',
                'ser feta',
                'oliwa',
                'cytryna lub ocet',
                'przyprawy'
            ],
            steps: [
                'Ugotuj quinoę zgodnie z instrukcją, ostudź.',
                'Pokrój warzywa.',
                'W misce połącz komosę, ogórek, pomidorki i fetę.',
                'Skrop oliwą i sokiem z cytryny, dopraw przyprawami.',
                'Spakuj do pudełka – świetna na zimno.'
            ],
            zamienniki: {
                'quinoa': ['kuskus', 'ryż', 'kasza jaglana'],
                'feta': ['mozzarella', 'camembert', 'tofu'],
                'oliwa': ['sos jogurtowy', 'majonez light']
            }
        },

    {
            id: 'stirfry-indyk-warzywa',
            title: 'Stir-fry z indykiem i warzywami',
            img: '/stirfry-indyk-warzywa.png',
            kcal: 480,
            protein_g: 36,
            fat_g: 25,
            carbs_g: 30,
            ingredients: [
                '120 g piersi z indyka',
                '200 g mieszanki warzyw (papryka, marchew, cukinia)',
                '2 łyżki sosu sojowego',
                '1 łyżeczka oleju sezamowego',
                '1 ząbek czosnku',
                'sól i pieprz do smaku'
            ],
            shoppingList: [
                'pierś z indyka 400 g',
                'opakowanie mieszanki warzyw',
                'sos sojowy',
                'olej sezamowy',
                'czosnek',
                'przyprawy'
            ],
            steps: [
                'Na dużej patelni lub woku rozgrzej olej sezamowy i podsmaż czosnek przez 30 s.',
                'Dodaj pokrojonego indyka i smaż 5–7 minut.',
                'Wrzuć warzywa i smaż kolejne 5 minut, mieszając.',
                'Dodaj sos sojowy, wymieszaj i zdejmij z ognia.',
                'Zapakuj do pudełka – dobrze smakuje od razu lub lekko ostudzone.'
            ],
            zamienniki: {
                'indyk': ['kurczak', 'tofu', 'krewetki'],
                'warzywa': ['brokuły', 'kalafior', 'groszek cukrowy']
            }
        },

        {
            id: 'zapiekanka-ziemniaki-brokul',
            title: 'Zapiekanka z ziemniakami i brokułami',
            img: '/zapiekanka-ziemniaki-brokul.png',
            kcal: 520,
            protein_g: 26,
            fat_g: 20,
            carbs_g: 58,
            ingredients: [
                '200 g ziemniaków',
                '150 g brokuła',
                '50 g sera żółtego',
                '2 łyżki jogurtu naturalnego',
                'sól, pieprz, szczypta gałki muszkatołowej'
            ],
            shoppingList: [
                'ziemniaki 0,5 kg',
                '1 brokuł',
                'ser żółty 200 g',
                'jogurt naturalny',
                'przyprawy'
            ],
            steps: [
                'Ugotuj ziemniaki i brokuł na półtwardo, odcedź i ostudź.',
                'Ziemniaki pokrój w plasterki i ułóż w naczyniu.',
                'Na ziemniaki wyłóż różyczki brokuła.',
                'Jogurt dopraw solą, pieprzem i gałką i wyrównaj na wierzchu.',
                'Posyp tartym serem i zapiekaj w 180°C przez 15 minut.',
                'Ostudź, podziel na porcje i zapakuj.'
            ],
            zamienniki: {
                'ziemniaki': ['bataty', 'dynia', 'makaron'],
                'ser żółty': ['feta', 'mozzarella'],
                'jogurt': ['śmietana 12%', 'jogurt roślinny']
            }
        },

        {
            id: 'chili-sin-carne',
            title: 'Chili sin carne z ryżem',
            img: '/chili-sin-carne.png',
            kcal: 500,
            protein_g: 22,
            fat_g: 7,
            carbs_g: 90,
            ingredients: [
                '150 g czerwonej soczewicy (suchej)',
                '1 papryka pokrojona',
                '200 g przecieru pomidorowego',
                'pół cebuli',
                '1 ząbek czosnku',
                '1 łyżeczka oliwy',
                'przyprawy: chili, słodka papryka, sól, pieprz',
                '80 g ryżu (suchego)'
            ],
            shoppingList: [
                'soczewica czerwona opakowanie',
                '1 papryka',
                'przecier pomidorowy 500 g',
                '1 cebula',
                'czosnek',
                'oliwa',
                'przyprawy',
                'ryż (np. basmati)'
            ],
            steps: [
                'Ugotuj ryż zgodnie z instrukcją i odstaw.',
                'Na oliwie podsmaż cebulę i czosnek.',
                'Dodaj paprykę i przyprawy, podsmaż przez 2 minuty.',
                'Wsyp soczewicę i wlej przecier, gotuj 15–20 minut.',
                'Podawaj z ryżem, ostudź i zapakuj.'
            ],
            zamienniki: {
                'soczewica': ['cieciorka', 'fasola'],
                'ryż': ['kasza', 'makaron'],
                'przecier': ['pomidory z puszki', 'passata pomidorowa']
            }
        },

        {
            id: 'quesadilla-kurczak-szpinak',
            title: 'Quesadilla z kurczakiem i szpinakiem',
            img: '/quesadilla-kurczak-szpinak.png',
            kcal: 450,
            protein_g: 45,
            fat_g: 15,
            carbs_g: 35,
            ingredients: [
                '1 tortilla pełnoziarnista',
                '100 g piersi z kurczaka pokrojonej w paski',
                '100 g szpinaku',
                '30 g sera żółtego',
                'sól, pieprz, oregano'
            ],
            shoppingList: [
                'tortilla pełnoziarnista',
                'pierś z kurczaka',
                'opakowanie szpinaku',
                'ser żółty',
                'przyprawy'
            ],
            steps: [
                'Usmaż przyprawionego kurczaka na patelni (ok. 5–7 minut).',
                'Dodaj szpinak i duś.',
                'Na tortillę nałóż mięso i szpinak, posyp serem.',
                'Złóż na pół i podsmaż z obu stron (2–3 minuty każdy bok).',
                'Pokrój na kawałki i zapakuj.'
            ],
            zamienniki: {
                'tortilla': ['lawasz'],
                'kurczak': ['indyk', 'tofu', 'cieciorka'],
                'szpinak': ['jarmuż', 'rukola']
            }
        },

        {
            id: 'makaron-kurczak-pieczarki',
            title: 'Makaron z kurczakiem i pieczarkami',
            img: '/makaron-kurczak-pieczarki.png',
            kcal: 500,
            protein_g: 51,
            fat_g: 10,
            carbs_g: 53,
            ingredients: [
                '80 g makaronu pełnoziarnistego',
                '120 g piersi z kurczaka pokrojonej',
                '100 g pieczarek pokrojonych',
                'pół cebuli',
                '2 łyżki śmietany 12% lub jogurtu',
                'sól, pieprz, czosnek granulowany'
            ],
            shoppingList: [
                'makaron pełnoziarnisty',
                'pierś z kurczaka',
                'pieczarki',
                '1 cebula',
                'śmietana 12% lub jogurt',
                'przyprawy'
            ],
            steps: [
                'Ugotuj makaron al dente.',
                'Na oliwie podsmaż cebulę i pieczarki, aż się zeszklą.',
                'Dodaj kurczaka i smaż kilka minut.',
                'Dodaj śmietanę lub jogurt i dopraw.',
                'Wymieszaj z makaronem i zapakuj po ostudzeniu.'
            ],
            zamienniki: {
                'makaron': ['ryż', 'kasza'],
                'kurczak': ['indyk', 'tofu', 'tuńczyk'],
                'pieczarki': ['inne grzyby', 'cukinia']
            }
        },

        {
            id: 'koktajl-owocowo-warzywny',
            title: 'Koktajl owocowo-warzywny',
            img: '/koktajl-owocowo-warzywny.png',
            kcal: 180,
            protein_g: 4,
            fat_g: 2,
            carbs_g: 36,
            ingredients: [
                'pół banana',
                '1 małe jabłko',
                'garść szpinaku',
                '150 ml wody lub napoju roślinnego'
            ],
            shoppingList: [
                'banany',
                'jabłka',
                'opakowanie szpinaku',
                'woda / napój roślinny'
            ],
            steps: [
                'Obierz banana i pokrój jabłko na kawałki (ze skórką lub bez).',
                'Do blendera włóż banana, jabłko, szpinak i zalej płynem.',
                'Zmiksuj do uzyskania gładkiej konsystencji.',
                'Przelej do szklanki lub bidonu; spożyj od razu lub przechowuj do kilku godzin w lodówce.'
            ],
            zamienniki: {
                'banan': ['gruszka', 'kiwi'],
                'jabłko': ['gruszka', 'pomarańcza'],
                'szpinak': ['jarmuż', 'rukola'],
                'woda/napój': ['kefir', 'maślanka', 'mleko']
            }
        },

        {
            id: 'kanapka-awokado',
            title: 'Pełnoziarnista kanapka z awokado',
            img: '/kanapka-awokado.png',
            kcal: 220,
            protein_g: 6,
            fat_g: 9,
            carbs_g: 29,
            ingredients: [
                '1 kromka chleba pełnoziarnistego',
                '1/3 awokado',
                'kilka plasterków pomidora',
                'szczypta soli i pieprzu'
            ],
            shoppingList: [
                'chleb pełnoziarnisty',
                'awokado',
                'pomidor',
                'sól, pieprz'
            ],
            steps: [
                'Awokado rozgnieć widelcem, dopraw solą i pieprzem.',
                'Posmaruj pastą kromkę chleba.',
                'Nałóż plasterki pomidora.',
                'Zapakuj do pudełka lub talerza.'
            ],
            zamienniki: {
                'awokado': ['hummus', 'twarożek', 'pasta z fasoli'],
                'pomidor': ['ogórek', 'rzodkiewka']
            }
        },

        {
            id: 'jogurt-miod-orzechy',
            title: 'Jogurt grecki z miodem i orzechami',
            img: '/jogurt-miod-orzechy.png',
            kcal: 200,
            protein_g: 12,
            fat_g: 13,
            carbs_g: 11,
            ingredients: [
                '150 g jogurtu greckiego',
                '1 łyżeczka miodu',
                '10 g orzechów włoskich lub migdałów'
            ],
            shoppingList: [
                'jogurt grecki',
                'miód',
                'orzechy włoskie lub migdały'
            ],
            steps: [
                'Przełóż jogurt do miseczki.',
                'Skrop miodem.',
                'Posyp orzechami i ewentualnie lekko wymieszaj.',
                'Podawaj od razu lub zapakuj.'
            ],
            zamienniki: {
                'jogurt grecki': ['jogurt naturalny', 'kefir'],
                'miód': ['syrop klonowy', 'słodzik'],
                'orzechy': ['pestki dyni', 'słonecznika']
            }
        },

        {
            id: 'mini-wrap-hummus',
            title: 'Mini wrap z hummusem i marchewką',
            img: '/mini-wrap-hummus.png',
            kcal: 180,
            protein_g: 5,
            fat_g: 6,
            carbs_g: 26,
            ingredients: [
                '1 mini tortilla pełnoziarnista',
                '1 łyżka hummusu',
                '1 mała marchewka (pokrojona w słupki)',
                'szczypiorek'
            ],
            shoppingList: [
                'mini tortille pełnoziarniste',
                'hummus',
                'marchewki',
                'pęczek szczypiorku'
            ],
            steps: [
                'Na tortillę nałóż hummus.',
                'Dodaj marchew pokrojoną w słupki i szczypiorek.',
                'Zwiń ciasno, przekrój i zapakuj.'
            ],
            zamienniki: {
                'hummus': ['pasta z awokado', 'twarożek'],
                'marchewka': ['papryka', 'ogórek']
            }
        },

        {
            id: 'placuszki-jaglane',
            title: 'Placuszki jaglane z owocami',
            img: '/placuszki-jaglane.png',
            kcal: 240,
            protein_g: 11,
            fat_g: 7,
            carbs_g: 31,
            ingredients: [
                '30 g suchej kaszy jaglanej (2 łyżki)',
                '1 jajko',
                '2 łyżki mleka (ok. 30 ml)',
                '50 g owoców (np. borówki, maliny)'
            ],
            shoppingList: [
                'kasza jaglana',
                'jajka',
                'mleko lub napój roślinny',
                'opakowanie owoców sezonowych'
            ],
            steps: [
                'Ugotuj kaszę jaglaną i ostudź.',
                'W miseczce wymieszaj z jajkiem, mlekiem i owocami.',
                'Na patelni nieprzywierającej formuj małe placuszki i smaż 2 minuty z każdej strony.',
                'Ostudź i zapakuj.'
            ],
            zamienniki: {
                'kasza jaglana': ['płatki owsiane', 'mąka kokosowa'],
                'mleko': ['napój roślinny', 'jogurt'],
                'owoce': ['jabłko z cynamonem', 'gruszka']
            }
        },

        {
            id: 'budyn-chia-kakao',
            title: 'Mini budyń chia z kakao',
            img: '/budyn-chia-kakao.png',
            kcal: 200,
            protein_g: 10,
            fat_g: 12,
            carbs_g: 21,
            ingredients: [
                '2 łyżki nasion chia (ok. 30 g)',
                '150 ml mleka (krowiego lub roślinnego)',
                '1 łyżeczka kakao',
                'opcjonalnie: słodzik i owoce do dekoracji'
            ],
            shoppingList: [
                'nasiona chia',
                'mleko lub napój roślinny',
                'kakao',
                'słodzik opcjonalnie',
                'owoce na dekorację'
            ],
            steps: [
                'Wymieszaj nasiona chia z mlekiem i kakao w słoiku lub szklance.',
                'Opcjonalnie dosłódź według uznania.',
                'Odstaw do lodówki na co najmniej 30 minut (lub na noc).',
                'Przed podaniem wymieszaj i udekoruj owocami.'
            ],
            zamienniki: {
                'nasiona chia': ['siemię lniane', 'płatki owsiane'],
                'mleko': ['kefir', 'woda + jogurt'],
                'kakao': ['cynamon', 'starta gorzka czekolada']
            }
        },

        {
            id: 'omlet-szpinak-pomidor',
            title: 'Omlet ze szpinakiem i pomidorem',
            img: '/omlet-szpinak-pomidor.png',
            kcal: 330,
            protein_g: 16,
            fat_g: 16,
            carbs_g: 9,
            ingredients: [
                '2 jajka',
                '100 g szpinaku (świeżego lub mrożonego)',
                '1 mały pomidor',
                '1 łyżeczka oliwy',
                'sól, pieprz, bazylia'
            ],
            shoppingList: [
                'jajka',
                'szpinak',
                'pomidory',
                'oliwa',
                'przyprawy (sól, pieprz, bazylia)'
            ],
            steps: [
                'Rozgrzej oliwę na patelni, dodaj szpinak, smaż aż zmięknie.',
                'Pokrój pomidora w kostkę, dodaj do szpinaku i podgrzej chwilę.',
                'W misce roztrzep jajka z solą i pieprzem.',
                'Wlej masę jajeczną na patelnię, smaż omlet, aż się zetnie, pod koniec złóż na pół.',
                'Podawaj ciepły lub spakuj do pudełka — smakuje dobrze również po ostudzeniu.'
            ],
            zamienniki: {
                'szpinak': ['jarmuż', 'rukola'],
                'pomidor': ['papryka', 'cukinia']
            }
        },

        {
            id: 'salatka-quinoa-ciepla',
            title: 'Ciepła sałatka z komosą i warzywami',
            img: '/salatka-quinoa-ciepla.png',
            kcal: 400,
            protein_g: 12,
            fat_g: 20,
            carbs_g: 51,
            ingredients: [
                '70 g komosy ryżowej (quinoa)',
                'pół cukinii',
                'pół papryki',
                '1 łyżka oliwy',
                'sól, pieprz, sok z cytryny'
            ],
            shoppingList: [
                'quinoa 200 g',
                '1 cukinia',
                '1 papryka',
                'oliwa',
                'cytryna',
                'przyprawy'
            ],
            steps: [
                'Ugotuj quinoę zgodnie z instrukcją, odcedź i odstaw.',
                'Na patelni rozgrzej oliwę, podsmaż pokrojone warzywa (cukinia, papryka).',
                'Wymieszaj z komosą, skrop sokiem z cytryny, dopraw solą i pieprzem.',
                'Podawaj od razu lub zapakuj – pyszna i na ciepło, i na zimno.'
            ],
            zamienniki: {
                'quinoa': ['ryż', 'kasza jaglana'],
                'cukinia/papryka': ['brokuł', 'marchewka'],
                'oliwa': ['pesto', 'sos jogurtowy']
            }
        },

        {
            id: 'gulasz-soczewica-warzywa',
            title: 'Gulasz z soczewicą i warzywami',
            img: '/gulasz-soczewica-warzywa.png',
            kcal: 450,
            protein_g: 28,
            fat_g: 7,
            carbs_g: 81,
            ingredients: [
                '100 g czerwonej lub zielonej soczewicy (suchej)',
                '1 marchewka',
                'pół cebuli',
                '200 g pomidorów z puszki',
                '1 ząbek czosnku',
                '1 łyżeczka oleju',
                'przyprawy: papryka słodka, sól, pieprz'
            ],
            shoppingList: [
                'soczewica 250 g',
                '1 marchewka',
                '1 cebula',
                'puszka pomidorów',
                'czosnek',
                'olej',
                'przyprawy'
            ],
            steps: [
                'Podsmaż na oleju posiekaną cebulę i czosnek.',
                'Dodaj pokrojoną marchewkę i przyprawy, smaż 2–3 minuty.',
                'Wsyp soczewicę i dodaj pomidory, duś 15–20 minut aż wszystko zmięknie.',
                'Dopraw do smaku i zapakuj do pudełka – smaczne od razu lub lekko ostudzone.'
            ],
            zamienniki: {
                'soczewica': ['cieciorka', 'fasola'],
                'marchewka': ['dynia', 'ziemniak'],
                'pomidor z puszki': ['przecier pomidorowy']
            }
        },

        {
            id: 'tortilla-kurczak-warzywa',
            title: 'Tortilla z kurczakiem i warzywami',
            img: '/tortilla-kurczak-warzywa.png',
            kcal: 450,
            protein_g: 38,
            fat_g: 10,
            carbs_g: 36,
            ingredients: [
                '1 pełnoziarnista tortilla',
                '100 g piersi z kurczaka',
                'sałata',
                'pół pomidora',
                '2 łyżki jogurtu naturalnego',
                'sól, pieprz, oregano'
            ],
            shoppingList: [
                'tortilla pełnoziarnista',
                'pierś z kurczaka',
                'sałata',
                '1 pomidor',
                'jogurt naturalny',
                'przyprawy'
            ],
            steps: [
                'Usmaż kurczaka pokrojonego w paski z przyprawami (5–7 minut).',
                'Na tortillę nałóż jogurt, sałatę, pomidora i kurczaka.',
                'Zwiń tortillę ciasno i zapakuj – świetnie smakuje na zimno i lekko podgrzana.'
            ],
            zamienniki: {
                'kurczak': ['indyk', 'tuńczyk', 'tofu'],
                'tortilla': ['lawasz', 'liść sałaty'],
                'jogurt': ['hummus', 'twarożek']
            }
        },

        {
            id: 'salatka-tunczyk-warzywa',
            title: 'Sałatka z tuńczykiem i warzywami',
            img: '/salatka-tunczyk-warzywa.png',
            kcal: 380,
            protein_g: 27,
            fat_g: 6,
            carbs_g: 9,
            ingredients: [
                '1 puszka tuńczyka w sosie własnym',
                'mix sałat',
                'pół ogórka',
                '100 g pomidorków koktajlowych',
                '1 łyżeczka oliwy',
                'sól, pieprz, sok z cytryny'
            ],
            shoppingList: [
                'tuńczyk w sosie własnym',
                'mix sałat',
                'ogórek',
                'pomidorki koktajlowe',
                'oliwa',
                'przyprawy',
                'cytryna'
            ],
            steps: [
                'Odsącz tuńczyka i przełóż do miski.',
                'Dodaj pokrojone warzywa.',
                'Skrop oliwą i sokiem z cytryny, dopraw do smaku.',
                'Wymieszaj i zapakuj – idealna na zimno.'
            ],
            zamienniki: {
                'tuńczyk': ['makrela', 'jajko', 'cieciorka'],
                'oliwa': ['sos winegret', 'jogurtowy dressing'],
                'mix sałat': ['rukola', 'szpinak']
            }
        }
];
