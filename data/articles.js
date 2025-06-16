// data/articles.js

export const articles = [
    {
        id: 'zdrowe-nawyki',
        title: 'NAJWAŻNIEJSZE zdrowe nawyki żywieniowe',
        icon: '🍎',
        color: 'bg-green-500',
        content: `
      <p>Zdrowe nawyki to podstawa...</p>
      <ul>
        <li>Jedz regularnie, 00A0co 3–4\u00A0godziny</li>
        <li>Pij minimum 2\u00A0l wody dziennie</li>
        <li>Włącz warzywa 00A0i\u00A0owoce 00A0do każdego posiłku.</li>
      </ul>`
    },
    {
        id: 'plan-posilkow',
        title: '00A0Jak planować posiłki',
        icon: '🗓️',
        color: 'bg-blue-500',
        content: `
      <p>Planowanie posiłków pozwala oszczędzić czas 00A0i\u00A0pieniądze:</p>
      <ol>
        <li>Wybierz 3–4\u00A0dni 00A0w tygodniu 00A0na gotowanie 00A0na\u00A0zapas</li>
        <li>Stwórz listę zakupów według przepisów</li>
        <li>Podziel porcje 00A0i\u00A0zapakuj 00A0do pudełek</li>
      </ol>`
    },
    {
        id: 'bialko-zapotrzebowanie',
        title: 'Czy wiesz, ile potrzebujesz białka?',
        icon: '💪',
        color: 'bg-red-500',
        content: `
      <p>Białka to podstawowy składnik naszej diety, niezbędny 00A0do budowy 00A0i\u00A0naprawy komórek, produkcji enzymów 00A0i\u00A0hormonów, wsparcia układu odpornościowego 00A0oraz\u00A0wielu innych funkcji. Odpowiednia ilość 00A0i\u00A0jakość białka 00A0w\u00A0pożywieniu to\u00A0fundament zdrowia 00A0w każdym wieku.</p>

      <h2>1. Czym są białka?</h2>
      <p>Białka składają 00A0się 00A0z\u00A0aminokwasów, 00A0z\u00A0których 9 (00A0u\u00A0dorosłych) 00A0i\u00A010 (00A0u\u00A0niemowląt) to\u00A0aminokwasy egzogenne – musimy je dostarczać 00A0z\u00A0pożywieniem. Białka odpowiadają 00A0za syntezę 00A0i\u00A0odnowę tkanek, gojenie ran, pracę układu odpornościowego, transport tlenu (hemoglobina) 00A0oraz regulację bilansu wodno-elektrolitowego.</p>

      <h2>2. Budowa białek</h2>
      <p>Aminokwasy łączą 00A0się wiązaniami peptydowymi, tworząc dipeptydy, tripeptydy, oligo- 00A0i\u00A0polipeptydy. 00A0W\u00A0organizmie jest 18\u00A0aminokwasów; 9 egzogennych 00A0i\u00A09\u00A0endogennych. Pełnowartościowe białka zawierają wszystkie aminokwasy egzogenne 00A0w\u00A0optymalnych proporcjach.</p>

      <h2>3. Białka zwierzęce 00A0i\u00A0roślinne</h2>
      <p>Białka zwierzęce (jaja, mięso, ryby, mleko) mają najwyższą wartość biologiczną 00A0i\u00A0strawność (95–97,5 %). Roślinne białka (zboża, rośliny strączkowe, orzechy) są\u00A0niepełnowartościowe, ale łącząc je (np. zboża +␣rośliny strączkowe) otrzymujemy pełen profil aminokwasów.</p>

      <h2>4. Źródła białka 00A0w\u00A0diecie</h2>
      <ul>
        <li><strong>Jaja</strong> – 12,5 g/100 g</li>
        <li><strong>Mięso</strong> (pierś 00A0z kurczaka 21,5 g/100 g; schab 22,9 g/100 g)</li>
        <li><strong>Ryby</strong> (tuńczyk 23,7 g/100 g; mintaj 16,6 g/100 g)</li>
        <li><strong>Rośliny strączkowe</strong> (soja 35 g/100 g; ciecierzyca 20,5 g/100 g)</li>
        <li><strong>Zboża</strong> (kasza gryczana 12,6 g/100 g; makaron 12 g/100 g)</li>
        <li><strong>Orzechy 00A0i pestki</strong> (słonecznik 24,4 g/100 g; orzechy włoskie 16 g/100 g)</li>
      </ul>

      <h2>5. Ile białka potrzebujesz?</h2>
      <p>Zapotrzebowanie (RDA) dla dorosłych to <strong>0,9 g/kg masy ciała</strong> dziennie. Przykład: kobieta 56 kg → 0,9 × 56 = 50,4 g/dzień.</p>

      <h2>6. Zmiany 00A0w zapotrzebowaniu</h2>
      <p>Osoby starsze 00A0i chorzy potrzebują 1,0–1,5 g/kg, sportowcy zaś 1,4–2,0 g/kg (00A0a przy deficycie nawet 2,3–3,1 g/kg).</p>

      <h2>7. Konsekwencje</h2>
      <ul>
        <li><strong>Niedobór:</strong> osłabienie odporności, zaburzenia wzrostu, kwashiorkor.</li>
        <li><strong>Nadmiar:</strong> obciążenie nerek, hiperkalciuria, zakwaszenie.</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>Dostarczanie odpowiedniej ilości 00A0i jakości białka to klucz 00A0do zdrowia. Obliczaj swoje zapotrzebowanie według RDA 00A0i dbaj, by źródła białka były zróżnicowane.</p>

      <p class="text-sm italic text-gray-500">
        Źródło: <em>Broszura „Czy wiesz, ile potrzebujesz białka?”, Instytut Żywności 00A0i Żywienia, Warszawa 2019</em>
      </p>
    `
    },
    {
        id: 'weglowodany-zapotrzebowanie',
        title: 'Czy wiesz, ile potrzebujesz węglowodanów?',
        icon: '🥖',
        color: 'bg-yellow-500',
        content: `
      <p>Węglowodany to podstawowe źródło energii dla organizmu – każdy gram dostarcza 4 kcal. Są niezbędne 00A0do prawidłowej pracy mózgu, mięśni 00A0i narządów wewnętrznych.</p>

      <h3>Rodzaje węglowodanów</h3>
      <ul>
        <li><strong>Proste:</strong> monosacharydy (glukoza, fruktoza) 00A0i disacharydy (sacharoza, laktoza) – szybko podnoszą poziom glukozy we krwi.</li>
        <li><strong>Złożone:</strong> skrobia (np. 00A0w zbożach), błonnik pokarmowy – uwalniają energię stopniowo 00A0i\u00A0wspierają funkcję przewodu pokarmowego.</li>
      </ul>

      <h3>Główne źródła</h3>
      <p>Pełnoziarniste produkty zbożowe (chleb razowy, kasze, makarony), warzywa 00A0i\u00A0owoce, nasiona roślin strączkowych 00A0oraz mleko 00A0i przetwory mleczne.</p>

      <h3>Zapotrzebowanie</h3>
      <p>Węglowodany powinny stanowić <strong>45–65 %</strong> całkowitej energii diety.</p>

      <h3>Indeks 00A0i ładunek glikemiczny</h3>
      <p><strong>IG</strong> klasyfikuje produkty wg szybkości podnoszenia glikemii (niski ≤ 55, średni 56–69, wysoki ≥ 70), 00A0a <strong>ŁG</strong> uwzględnia też ilość węglowodanów 00A0w porcji (niski 0–10, średni 11–19, wysoki ≥ 20).</p>

      <p class="text-sm italic">Źródło: Broszura „Czy wiesz, ile potrzebujesz węglowodanów?”, Instytut Żywności 00A0i Żywienia, Warszawa 2019</p>
    `
    },
    {
        id: 'tluszcze',
        title: 'Czy wiesz, ile potrzebujesz tłuszczów?',
        icon: '🧈',
        color: 'bg-yellow-500',
        content: `
      <p>Tłuszcze to lipidy obecne 00A0w pożywieniu 00A0oraz 00A0w tkance tłuszczowej organizmu, pełniące rolę magazynu energii, budulca błon komórkowych 00A0i nośnika witamin 00A0A, D, E 00A0i K.</p>

      <h2>1. Czym są tłuszcze?</h2>
      <p>Wchodzące 00A0w jego skład lipidy to ważne składniki błon komórkowych 00A0i układu nerwowego (50–60 % masy mózgowia).</p>
      <ul>
        <li>9 kcal 00A0na 1 g – najbardziej skoncentrowane źródło energii;</li>
        <li>źródło (omega-3, omega-6) niezbędnych nienasyconych kwasów tłuszczowych;</li>
        <li>nośnik 00A0i ułatwienie wchłaniania witamin rozpuszczalnych 00A0w tłuszczach (00A0A, D, E, K);</li>
        <li>źródło steroli wpływających 00A0na hormony 00A0i metabolizm.</li>
      </ul>

      <h2>2. Zapotrzebowanie 00A0na tłuszcz</h2>
      <p>Dla zdrowych dorosłych tłuszcze nie powinny dostarczać więcej niż 30 % energii 00A0w\u00A0diecie. Dzieciom powyżej 2. roku życia zaleca 00A0się 30–35 % energii 00A0z tłuszczów, 00A0a niemowlętom – ok. 40–50 %. Kobiety 00A0w ciąży potrzebują 00A0o 12–16 g więcej, 00A0a karmiące 00A0o dodatkowe 17 g tłuszczu dziennie.</p>

      <h2>3. Konsekwencje nadmiaru 00A0i niedoboru</h2>
      <p><strong>Nadmiar:</strong> zwiększone ryzyko nadwagi, otyłości, chorób sercowo-naczyniowych, cukrzycy typu 2, zaburzeń lipidowych 00A0oraz nowotworów.</p>
      <p><strong>Niedobór omega-3:</strong> osłabienie funkcji serca, zaburzenia neurologiczne 00A0i rozwojowe 00A0u dzieci, wyższe ryzyko procesów zapalnych 00A0i neurodegeneracyjnych.</p>

      <h2>4. Jakie tłuszcze wybierać?</h2>
      <p>Zastępuj tłuszcze zwierzęce (masło, smalec) olejami roślinnymi (rzepakowy, oliwa 00A0z oliwek), unikaj olejów tropikalnych (kokosowego, palmowego) 00A0oraz tłuszczów trans zawartych 00A0w częściowo utwardzanych olejach. Czytaj etykiety produktów – unikanie “częściowo utwardzonych tłuszczów” minimalizuje spożycie izomerów trans.</p>

      <p class="text-sm italic">Źródło: Broszura „Czy wiesz, ile potrzebujesz tłuszczów?”, Instytut Żywności 00A0i Żywienia, Warszawa 2019</p>
    `
    },
    {
        id: 'zapotrzebowanie-00A0na-energie',
        title: 'Zapotrzebowanie 00A0na energię',
        icon: '⚡',
        color: 'bg-orange-500',
        content: `
      <p>Zapewnienie odpowiedniego bilansu energetycznego to fundament odżywiania – obejmuje pokrycie podstawowej przemiany materii, termogenezy 00A0oraz aktywności fizycznej.</p>

      <h2>1. Podstawy 00A0i czynniki wpływające</h2>
      <p>Zapotrzebowanie energetyczne związane jest 00A0z podtrzymaniem funkcji życiowych (PPM), termogenezą 00A0oraz aktywnością fizyczną. 00A0Na jej poziom wpływają masa ciała, skład ciała, wiek, płeć, czynniki genetyczne 00A0i hormonale, stan odżywienia, środowiskowe, leki 00A0oraz czynniki psychologiczne.</p>

      <h2>2. Bilans energetyczny</h2>
      <p>Energia spożyta 00A0a energia wydatkowana – bilans dodatni prowadzi 00A0do odkładania tkanki tłuszczowej 00A0i wzrostu masy ciała, bilans ujemny – 00A0do niedożywienia 00A0i wyniszczenia organizmu.</p>

      <h2>3. Podstawowa przemiana materii (PPM)</h2>
      <p>PPM to energia niezbędna 00A0do podtrzymania funkcji fizjologicznych 00A0w spoczynku (00A0po nocy, 00A0na czczo, 00A0w komforcie cieplnym).</p>

      <h2>5. Wzory 00A0na PPM</h2>
      <p><strong>Harris–Benedict:</strong><br>
         Kobiety: 655,1 + (9,563 × masa [kg]) + (1,85 × wzrost [cm]) – (4,676 × wiek)<br>
         Mężczyźni: 66,5 + (13,75 × masa [kg]) + (5,003 × wzrost [cm]) – (6,775 × wiek)</p>
      <p><strong>Mifflin–St Jeor (WHO):</strong><br>
         Kobiety: (9,99 × mc) + (6,25 × wzrost) – (4,92 × wiek) – 161<br>
         Mężczyźni: (9,99 × mc) + (6,25 × wzrost) – (4,92 × wiek) + 5</p>

      <h2>6. Obliczanie CPM</h2>
      <p>Całkowity wydatek energetyczny oblicza 00A0się jako <strong>PPM × PAL</strong>, gdzie PAL to wskaźnik aktywności fizycznej (1,0–2,5).</p>

      <p class="text-sm italic text-gray-500">
        Źródło: Gawęcki, J. (2022), „Metody wyznaczania podstawowego 00A0i całkowitego zapotrzebowania 00A0na energię”,
      </p>
    `
    },
    {
        id: 'konsekwencje-masy-ciala',
        title: 'Konsekwencje zdrowotne nieprawidłowej masy ciała',
        icon: '⚖️',
        color: 'bg-red-500',
        content: `
      <p>Nieprawidłowa masa ciała – zarówno niedowaga, 00A0jak 00A0i nadwaga czy otyłość – wiąże 00A0się 00A0z licznymi zagrożeniami zdrowotnymi.</p>

      <h2>1. Globalne statystyki</h2>
      <ul>
        <li>00A0Od 1975 r. liczba osób otyłych 00A0na świecie prawie 00A0się potroiła.</li>
        <li>00A0W 2016 r. 39 % dorosłych (≥ 18 r.ż.) miało nadwagę, 00A0a 13 % otyłość.</li>
        <li>00A0W krajach uprzemysłowionych nadwaga 00A0i otyłość powodują więcej zgonów niż niedowaga.</li>
      </ul>

      <h2>2. Skutki niedowagi</h2>
      <ul>
        <li>Zmniejszenie masy ciała 00A0i masy narządów wewnętrznych</li>
        <li>Obniżona synteza białek, osłabienie siły mięśniowej</li>
        <li>Osteoporoza, zaburzenia gojenia ran, wzrost podatności 00A0na infekcje</li>
        <li>Zaburzenia gospodarki wodno-elektrolitowej 00A0i układów: sercowo-naczyniowego, oddechowego</li>
      </ul>

      <h2>3. Skutki nadwagi 00A0i otyłości</h2>
      <ul>
        <li>60–70 % przypadków nadciśnienia tętniczego</li>
        <li>Podwyższone ryzyko chorób wieńcowych, niewydolności serca, migotania przedsionków</li>
        <li>2–3-krotnie wyższe ryzyko żylnej choroby zakrzepowo-zatorowej 00A0i udaru mózgu</li>
        <li>Osteoartroza stawów 00A0i kręgosłupa (+36 % ryzyka 00A0na każde + 5 kg masy)</li>
        <li>Wyższe ryzyko ≥ 11 typów nowotworów (m.in. endometrium, przełyku, piersi)</li>
      </ul>

      <h2>4. Podsumowanie</h2>
      <p>Prawidłowa masa ciała jest kluczowa dla zdrowia – zarówno niedowaga, 00A0jak 00A0i nadwaga czy otyłość mogą prowadzić 00A0do poważnych powikłań. Ważne jest monitorowanie wskaźników takich 00A0jak BMI, WHR czy FMI 00A0oraz wczesna interwencja dietetyczno-ruchowa.</p>

      <p class="text-sm italic text-gray-500">
        Źródła:
        <ul>
          <li>World Health Organization (2021). <em>Obesity and overweight – Key facts.</em></li>
          <li>De Lorenzo 00A0A. 00A0i wsp. (2016). <em>Metabolic phenotypes NWO, MONW, MHO, MUO – Clinical significance.</em></li>
          <li>Polskie Towarzystwo Leczenia Otyłości (2022). <em>Wytyczne dot. kardiometabolicznych powikłań otyłości.</em></li>
        </ul>
      </p>
    `
    },
    {
        id: 'aktywnosc-fizyczna-ocena-00A0i-zalecenia',
        title: 'Aktywność fizyczna – ocena 00A0i zalecenia',
        icon: '🏃‍♂️',
        color: 'bg-blue-500',
        content: `
      <p>Aktywność fizyczna to każdy skurcz mięśni szkieletowych zwiększający wydatek energetyczny. Ćwiczenie fizyczne to zaplanowany, regularny ruch; sport – aktywność 00A0w ramach współzawodnictwa.</p>

      <h2>1. Skala problemu</h2>
      <ul>
        <li>Globalnie 27,5 % dorosłych nie spełnia rekomendacji WHO (Guthold et al., 2018).</li>
        <li>00A0W Polsce – 32,5 % (Guthold et al., 2018).</li>
        <li>Aż 65 % dorosłych 00A0w UE nie ćwiczy regularnie (Eurobarometer, 2022).</li>
        <li>Santos et al. (2023) szacują, że 00A0do 2030 r. można by uniknąć nawet 499,2 mln przypadków chorób niezakaźnych przy odpowiedniej aktywności.</li>
      </ul>

      <h2>2. Rekomendacje WHO (2020, 2021)</h2>
      <ul>
        <li>150–300 min umiarkowanej lub 75–150 min intensywnej aktywności tygodniowo.</li>
        <li>Ćwiczenia siłowe dla wszystkich głównych grup mięśni 00A0co najmniej 2×/tydz.</li>
        <li>Ograniczenie czasu siedzenia przez włączanie lekkiej aktywności.</li>
      </ul>

      <h2>3. Wskaźnik PAL</h2>
      <p>PAL (Physical Activity Level) = CPM / PPM. WHO/FAO (2003) zaleca:</p>
      <ul>
        <li>PAL ≥ 1,39 – ok. 30 min umiarkowanej aktywności dziennie.</li>
        <li>PAL ≥ 1,75 – gwarantuje pełne profity zdrowotne.</li>
      </ul>

      <h2>4. Model FITT</h2>
      <p>Podstawowe parametry układania planu ćwiczeń:</p>
      <ul>
        <li><strong>Frequency</strong> – 00A0jak często (dni/tydz.),</li>
        <li><strong>Intensity</strong> – poziom wysiłku (METs, tętno, skala Borga),</li>
        <li><strong>Time</strong> – czas trwania (minuty, serie ≥ 10 min),</li>
        <li><strong>Type</strong> – rodzaj (aerobowy, siłowy, równowaga, gibkość).</li>
      </ul>

      <h2>5. 10 złotych zasad EFSMA</h2>
      <p>Europejska Federacja Medycyny Sportowej kładzie nacisk 00A0na:</p>
      <ul>
        <li>indywidualizację programu,</li>
        <li>monitorowanie postępów,</li>
        <li>dostosowanie intensywności 00A0i objętości 00A0do możliwości,</li>
        <li>regularność 00A0i różnorodność aktywności.</li>
      </ul>

      <h2>6. Podsumowanie</h2>
      <p>Regularna aktywność fizyczna to fundament profilaktyki chorób przewlekłych. Wprowadź 00A0do planu tygodnia zarówno ćwiczenia aerobowe, 00A0jak 00A0i siłowe, dbając 00A0o odpowiednie parametry FITT.</p>

      <p class="text-sm italic text-gray-500">
        Źródła:
        <ul>
          <li>Guthold R. et al. (2018). <em>Worldwide trends in insufficient physical activity.</em></li>
          <li>World Health Organization (2020, 2021). <em>WHO Guidelines on Physical Activity and Sedentary Behaviour.</em></li>
          <li>Eurobarometer (2022). <em>Physical activity participation in the European Union.</em></li>
          <li>Santos D.00A0A. et al. (2023). <em>The public health impact of physical inactivity.</em></li>
        </ul>
      </p>
    `
    },
    {
        id: 'zdrowe-zywienie-studentow',
        title: 'Zasady zdrowego żywienia dla studentów',
        icon: '🥗',
        color: 'bg-green-500',
        content: `
      <p>Zdrowe żywienie to podstawa dobrej formy 00A0i koncentracji podczas studiów. Oto najważniejsze zasady, które pomogą Ci jeść smacznie, zdrowo 00A0i budżetowo.</p>

      <h2>1. Zbilansowany talerz</h2>
      <ul>
        <li>Połowa talerza: warzywa 00A0i owoce – kolorowe, bogate 00A0w witaminy, minerały 00A0i błonnik.</li>
        <li>¼ talerza: produkty pełnoziarniste – chleb, makaron, kasze dostarczające długotrwałej energii.</li>
        <li>¼ talerza: źródło białka – roślinne (rośliny strączkowe, tofu) lub zwierzęce (jajka, drób, ryby).</li>
      </ul>

      <h2>2. Regularność 00A0i przerwy</h2>
      <ul>
        <li>Jedz 4–5 posiłków dziennie 00A0co 3–4 godziny.</li>
        <li>Zaplanuj szybkie przekąski: jogurt, owoce, orzechy lub warzywa pokrojone 00A0w słupki.</li>
        <li>Nie pomijaj śniadania – to najważniejszy posiłek 00A0na start dnia studenta.</li>
      </ul>

      <h2>3. Makroskładniki</h2>
      <ul>
        <li><strong>Węglowodany</strong> (45–60 % energii): pełnoziarniste produkty, warzywa, owoce.</li>
        <li><strong>Białko</strong> (10–20 % energii): strączki, nabiał, chudy drób, ryby.</li>
        <li><strong>Tłuszcze</strong> (max 30 % energii): oliwa 00A0z oliwek, awokado, orzechy; unikaj tłuszczów trans.</li>
      </ul>

      <h2>4. Płyny 00A0i nawodnienie</h2>
      <ul>
        <li>Pij 1,5–2 l wody dziennie (szklanka przed posiłkiem wspiera trawienie).</li>
        <li>Ogranicz słodzone napoje; wybieraj herbaty ziołowe 00A0i wody smakowe bez cukru.</li>
      </ul>

      <h2>5. Budżetowe triki</h2>
      <ul>
        <li>Kupuj sezonowe warzywa 00A0i owoce – są tańsze 00A0i smaczniejsze.</li>
        <li>Gotuj 00A0na kilka dni, mroź porcje; oszczędza czas 00A0i pieniądze.</li>
        <li>Włącz rośliny strączkowe (soczewica, fasola) zamiast mięsa dwa razy 00A0w tygodniu.</li>
      </ul>

      <h2>6. Uważne jedzenie</h2>
      <ul>
        <li>Słuchaj sygnałów głodu 00A0i sytości – jedz powoli, unikaj jedzenia „00A0na stojąco” 00A0i 00A0w biegu.</li>
        <li>Spożywaj posiłki 00A0w spokojnej atmosferze, bez telefonu czy komputera.</li>
      </ul>

      <p class="text-sm italic text-gray-500">
        Źródła:
        <ul>
          <li>Jarosz M. 00A0i wsp. (2017). <em>Normy żywienia dla populacji Polski.</em></li>
          <li>Ministerstwo Zdrowia (2016). <em>Narodowy Program Zdrowia 2016–2020.</em></li>
          <li>World Health Organization (1948). <em>Powszechna definicja zdrowia.</em></li>
        </ul>
      </p>
    `
    },
    {
        id: 'zapotrzebowanie-zywieniowe',
        title: 'Zapotrzebowanie 00A0na makroskładniki, witaminy, składniki mineralne 00A0i wodę',
        icon: '📋',
        color: 'bg-indigo-500',
        content: `
      <p>Odpowiednie żywienie to fundament zdrowia 00A0i dobrego samopoczucia – szczególnie ważne dla studentów narażonych 00A0na intensywną pracę umysłową 00A0i ograniczony budżet.</p>

      <h2>1. Makroskładniki</h2>
      <ul>
        <li><strong>Węglowodany</strong> – 4 kcal/g; 45–65 % energii, podstawowe źródło glukozy dla mózgu.</li>
        <li><strong>Białko</strong> – 4 kcal/g; 10–20 % energii, budulec tkanek 00A0i enzymów.</li>
        <li><strong>Tłuszcze</strong> – 9 kcal/g; 20–35 % energii, nośnik witamin 00A0A, D, E, K 00A0i NNKT.</li>
        <li><strong>Błonnik</strong> – wspiera perystaltykę 00A0i równowagę mikroflory; cel: 25–30 g/dzień.</li>
      </ul>

      <h2>2. Witaminy</h2>
      <ul>
        <li><strong>Rozpuszczalne 00A0w wodzie</strong> (B, C) – nie magazynowane; trzeba jeść codziennie (warzywa, owoce, pełne ziarna).</li>
        <li><strong>Rozpuszczalne 00A0w tłuszczach</strong> (00A0A, D, E, K) – magazynowane 00A0w wątrobie; dbaj 00A0o umiarkowaną podaż, unikaj nadmiaru.</li>
      </ul>

      <h2>3. Składniki mineralne</h2>
      <ul>
        <li><strong>Wapń</strong> – budulec kości; ok. 1000 mg/dobę 00A0z mlekiem 00A0i przetworami, zielonymi warzywami.</li>
        <li><strong>Żelazo</strong> – transport tlenu; 8–18 mg/dobę 00A0z mięsem, roślinami strączkowymi.</li>
        <li><strong>Cynk, magnez, jod, selen</strong> – kluczowe dla metabolizmu, odporności 00A0i funkcji tarczycy.</li>
      </ul>

      <h2>4. Woda</h2>
      <ul>
        <li>30 ml/kg masy ciała lub 1 ml 00A0na każdą kcal energii.</li>
        <li>Pij regularnie – 00A0co najmniej 1,5–2 l dziennie (woda, herbaty ziołowe).</li>
      </ul>

      <h2>5. Konsekwencje nieprawidłowego spożycia</h2>
      <ul>
        <li><strong>Niedobór węglowodanów:</strong> hipoglikemia, zmęczenie, zaburzenia koncentracji.</li>
        <li><strong>Nadmiar węglowodanów:</strong> ryzyko nadwagi, cukrzycy typu 2, próchnicy.</li>
        <li><strong>Niedobór białka:</strong> osłabienie mięśni, zaburzenia odporności.</li>
        <li><strong>Nadmiar tłuszczów nasyconych:</strong> choroby układu krążenia 00A0i metaboliczne.</li>
        <li><strong>Niedobór witamin/minerałów:</strong> anemia, osłabienie kości, zaburzenia neurologiczne.</li>
        <li><strong>Niedostateczne nawodnienie:</strong> trudności 00A0w koncentracji, bóle głowy.</li>
      </ul>
    `
    },
    {
        id: 'bmi-wskaznik',
        title: 'Wskaźnik BMI – 00A0co to jest 00A0i 00A0jak interpretować',
        icon: '⚖️',
        color: 'bg-purple-500',
        content: `
      <p>Wskaźnik masy ciała (BMI) to prosty sposób 00A0na ocenę, czy Twoja masa ciała jest odpowiednia 00A0w stosunku 00A0do wzrostu. Oblicza 00A0się go, dzieląc wagę (kg) przez kwadrat wzrostu (m²). Pozwala to szybko sprawdzić, czy waga mieści 00A0się 00A0w granicach uznawanych 00A0za zdrowe, czy może wymaga uwagi dietetyka lub lekarza.</p>

      <h2>00A0Jak obliczyć BMI? Wzór</h2>
      <p><strong>BMI = masa ciała (kg) / (wzrost 00A0w m)²</strong></p>
      <p>Przykład: osoba ważąca 70 kg 00A0o wzroście 1,75 m ma BMI = 70 / (1,75²) ≈ 22,9.</p>

      <h2>Interpretacja wyników</h2>
      <ul>
        <li><strong>BMI &lt; 16</strong> – wygłodzenie 00A0i skrajne wyniszczenie</li>
        <li><strong>16,0–18,4</strong> – niedowaga</li>
        <li><strong>18,5–24,9</strong> – waga prawidłowa</li>
        <li><strong>25,0–29,9</strong> – nadwaga</li>
        <li><strong>30,0–34,9</strong> – otyłość 00A0I stopnia</li>
        <li><strong>35,0–39,9</strong> – otyłość II stopnia</li>
        <li><strong>≥ 40</strong> – otyłość III stopnia (olbrzymia)</li>
      </ul>

      <h2>Ograniczenia BMI</h2>
      <ul>
        <li>Niewłaściwe dla dzieci 00A0i młodzieży (&lt; 18 lat) – tu stosuje 00A0się siatki centylowe.</li>
        <li>Nie uwzględnia składu ciała – nie odróżnia masy mięśniowej 00A0od tłuszczowej.</li>
        <li>Nie bierze pod uwagę wieku 00A0i płci – osoby wysportowane mogą mieć podwyższone BMI.</li>
      </ul>

      <p class="text-sm italic text-gray-500">
        Źródła:
        <ul>
          <li>M. Grzelak, <em>Elementarz odchudzania</em>, Wydawnictwo E-bookowo 2020.</li>
          <li>R. Kożuszek, <em>Porady lekarza rodzinnego. Naturalne odchudzanie</em>, Wydawnictwo Literat 2022.</li>
          <li>R. Stupnicki, <em>Relacje wagowo-wzrostowe 00A0i stosowanie wskaźnika BMI 00A0u dzieci 00A0i młodzieży</em>, www.wskfit.pl [dostęp 12.2024].</li>
          <li>J. Fung, <em>Kod otyłości. Sekrety utraty wagi</em>, Wydawnictwo Vital 2023.</li>
        </ul>
      </p>
    `
    },
    {
        id: '00A0jak-czytac-etykiety-zywnosciowe',
        title: '00A0Jak czytać etykiety żywnościowe',
        icon: '🏷️',
        color: 'bg-yellow-600',
        content: `
      <p>Wiedza 00A0o tym, 00A0co kryje 00A0się 00A0za informacjami 00A0na opakowaniu, to fundament świadomego wyboru produktów 00A0i zdrowych nawyków żywieniowych. Czytanie etykiet pomaga unikać nadmiaru cukrów, soli czy tłuszczów nasyconych, 00A0a także wybierać produkty wolne 00A0od niepożądanych dodatków.</p>

      <h2>Kluczowe elementy etykiety</h2>
      <ul>
        <li><strong>Lista składników</strong> – składniki zawsze podane 00A0w kolejności 00A0od największej 00A0do najmniejszej ilości; pozwala zidentyfikować wypełniacze 00A0i dodatki.</li>
        <li><strong>Wartości odżywcze</strong> – tabela odnosi 00A0się najczęściej 00A0do 100 g/ml produktu 00A0oraz (czasem) 00A0do porcji; zawiera kalorie, tłuszcze (00A0w tym nasycone), węglowodany (00A0w tym cukry), białko, sól 00A0i błonnik.</li>
        <li><strong>Wielkość porcji</strong> – sprawdź, czy podane wartości odpowiadają Twojemu rzeczywistemu spożyciu.</li>
        <li><strong>Data przydatności</strong> – informuje 00A0o świeżości 00A0i bezpieczeństwie produktu.</li>
        <li><strong>Informacje 00A0o alergenach</strong> – wyszczególnione najważniejsze alergeny (np. gluten, orzechy, laktoza).</li>
        <li><strong>Certyfikaty 00A0i znaki jakości</strong> – eko, BIO, oznaczenia chronione geograficznie itp.</li>
      </ul>

      <h2>Pułapki marketingowe</h2>
      <ul>
        <li><em>Naturalny</em> – termin nieszczególnie regulowany, nie zawsze oznacza brak niezdrowych składników.</li>
        <li>Ukryte cukry 00A0i tłuszcze – cukry mogą występować pod różnymi nazwami (syrop glukozowo-fruktozowy, maltodekstryna), 00A0a produkty „niskotłuszczowe” często są rekompensowane wyższą zawartością cukru czy soli.</li>
        <li>Małe porcje – producenci mogą podawać wartości odżywcze dla nierealistycznie małych porcji.</li>
      </ul>

      <h2>Praktyczne wskazówki</h2>
      <ul>
        <li>Zawsze zacznij 00A0od listy składników, zanim przejdziesz 00A0do tabeli wartości odżywczych.</li>
        <li>Porównuj podobne produkty – wybieraj 00A0te 00A0z niższą zawartością cukru, soli 00A0i tłuszczów nasyconych.</li>
        <li>Bierz pod uwagę wielkość porcji 00A0i włącz dane 00A0do swojego dziennego bilansu kalorii 00A0i makroskładników.</li>
        <li>00A0W razie wątpliwości sięgnij 00A0do rzetelnych źródeł lub skonsultuj 00A0się 00A0z dietetykiem.</li>
      </ul>

      <p class="text-sm italic text-gray-500">
        Źródła:
        <ul>
          <li><00A0a href="https://czytamyetykiety.pl" target="_blank">00A0Jak czytać etykiety produktów spożywczych?</00A0a></li>
          <li><00A0a href="https://ncez.pzh.gov.pl" target="_blank">8 powodów, dla których warto czytać etykiety</00A0a></li>
          <li><00A0a href="https://dietetycy.org.pl" target="_blank">Etykieta żywności. Jakie reguły rządzą etykietowaniem produktów spożywczych?</00A0a></li>
        </ul>
      </p>
    `
    }
];
