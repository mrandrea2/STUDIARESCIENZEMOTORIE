/* LEZIONE UNICA — Il sistema immunitario
   Fonti: «Il sistema immunitario» (prof. Andrea Bertelli), lezione su Canva e slide Zanichelli; «PNEI» (prof. Bertelli) per esercizio e immunità. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["il-sistema-immunitario"] = {
  titolo: "Le difese del corpo",
  sottotitolo: "Immunità innata e acquisita, anticorpi, memoria, vaccini e attività fisica",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quarta", title: "Le difese del corpo", sub: "Immunità innata e acquisita, anticorpi, memoria, vaccini e attività fisica" },

    { t: "cards", kicker: "Per cominciare", title: "Un esercito sempre di guardia", cards: [
      { n: "1", h: "Un graffio", p: "Si arrossa, si gonfia, fa male: è la risposta infiammatoria." },
      { n: "2", h: "Il raffreddore", p: "Dopo qualche giorno passa: le difese hanno vinto." },
      { n: "3", h: "La varicella", p: "Si prende una volta sola: il corpo se la ricorda.", dark: true }
    ] },

    { t: "points", kicker: "Il quadro generale", title: "Tre linee di difesa", fig: { svg: "difese", cap: "Le linee di difesa dell'organismo" }, items: [
      ["Barriere:", "pelle e mucose bloccano l'ingresso dei microbi."],
      ["Immunità innata:", "rapida, uguale per tutti i patogeni, non ha memoria."],
      ["Immunità acquisita:", "più lenta la prima volta, specifica, e con memoria."]
    ] },

    { t: "cards", kicker: "Prima linea", title: "Le barriere fisiche e chimiche", bg: "blue", grid: 2, cards: [
      { h: "Pelle", p: "Un muro compatto, leggermente acido." },
      { h: "Mucose", p: "Vie respiratorie e digerenti producono muco che intrappola i microbi." },
      { h: "Secrezioni", p: "Lacrime e saliva contengono lisozima, che rompe i batteri." },
      { h: "Acidità", p: "Lo stomaco distrugge molti microbi ingeriti.", dark: true }
    ] },

    { t: "table", kicker: "Seconda linea", title: "Le cellule dell'immunità innata", head: ["Cellula", "Che cosa fa"], rows: [
      ["Neutrofili", "I globuli bianchi più numerosi: arrivano per primi e mangiano i batteri"],
      ["Macrofagi", "Grandi «mangiatori» (fagocitosi); avvisano i linfociti"],
      ["Cellule Natural Killer", "Distruggono cellule infettate da virus o tumorali"]
    ], note: "Risposta infiammatoria: più sangue nella zona, rossore, calore, gonfiore. Serve a portare le cellule di difesa e a riparare il tessuto." },

    { t: "split", kicker: "Terza linea", title: "L'immunità acquisita", left: { h: "Linfociti T", items: ["T helper: attivano e coordinano le altre cellule", "T citotossici: uccidono le cellule infette", "Maturano nel timo"] }, right: { h: "Linfociti B", items: ["Producono anticorpi specifici", "Maturano nel midollo osseo", "Alcuni diventano cellule della memoria"] } },

    { t: "points", kicker: "Gli anticorpi", title: "Proteine a forma di Y", bg: "blue", fig: { svg: "anticorpo", cap: "Anticorpo e antigene" }, items: [
      ["Antigene:", "la «firma» del microbo, riconosciuta dal sistema immunitario."],
      ["Anticorpo:", "si lega solo a quell'antigene, come una chiave alla sua serratura."],
      ["Neutralizzano:", "bloccano il microbo e attivano il complemento."],
      ["Segnalano:", "rendono il microbo più facile da mangiare per i fagociti."]
    ] },

    { t: "points", kicker: "La memoria immunologica", title: "Perché la seconda volta va meglio", fig: { svg: "memoria", cap: "Risposta primaria e secondaria" }, items: [
      ["Prima infezione:", "la risposta è lenta (giorni) e moderata."],
      ["Cellule della memoria:", "alcuni linfociti B e T restano pronti per anni."],
      ["Seconda infezione:", "la risposta è rapida e molto più forte: spesso non ti ammali nemmeno."],
      ["Vaccini:", "insegnano al sistema immunitario a riconoscere il microbo senza far ammalare."]
    ] },

    { t: "split", kicker: "Il sistema linfatico", title: "Le stazioni di controllo", left: { h: "Che cos'è", items: ["Vasi che trasportano la linfa", "Linfonodi, milza, timo, tonsille", "Riporta liquidi nel sangue"] }, right: { h: "A che cosa serve", items: ["Filtra i patogeni", "Attiva i linfociti", "I linfonodi si gonfiano durante un'infezione"] }, note: "Le citochine sono le molecole-segnale che coordinano la risposta: alcune accendono l'infiammazione, altre la spengono." },

    { t: "table", kicker: "Quando il sistema sbaglia", title: "Troppo, troppo poco o contro di sé", head: ["Problema", "Che cosa succede", "Esempi"], rows: [
      ["Malattie autoimmuni", "Attacca le cellule del proprio corpo", "Diabete tipo 1, artrite reumatoide, lupus"],
      ["Immunodeficienze", "Difese troppo deboli, più infezioni", "Congenite o acquisite (HIV)"],
      ["Allergie", "Reazione esagerata a sostanze innocue", "Pollini, acari, alimenti"]
    ] },

    { t: "points", kicker: "Esercizio e immunità", title: "La curva a J", bg: "blue", fig: { svg: "curvaj", cap: "Carico di allenamento e rischio di infezioni" }, items: [
      ["Sedentari:", "rischio di infezioni più alto."],
      ["Attività moderata e regolare:", "più cellule immunitarie in circolo, meno infiammazione cronica."],
      ["Sforzi estremi senza recupero:", "per qualche giorno le difese calano (es. dopo una maratona)."],
      ["La regola:", "allenamento regolare + recupero + sonno + alimentazione varia."]
    ] },

    { t: "cards", kicker: "Proteggere le difese", title: "Cinque abitudini dell'atleta", grid: 2, line: true, cards: [
      { h: "Dormire", p: "Di notte si producono citochine protettive: poco sonno triplica la probabilità di ammalarsi." },
      { h: "Mangiare vario", p: "Vitamina C e D, zinco, ferro, proteine: i mattoni delle difese." },
      { h: "Gestire lo stress", p: "Il cortisolo alto e cronico abbassa le difese." },
      { h: "Igiene", p: "Lavarsi le mani, borraccia personale, niente asciugamani condivisi." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Tre linee di difesa: barriere, immunità innata e immunità acquisita.",
      "Neutrofili, macrofagi e cellule NK sono la risposta rapida e aspecifica.",
      "I linfociti T coordinano e uccidono, i linfociti B producono anticorpi.",
      "La memoria immunologica è la base dei vaccini.",
      "Attività moderata e regolare rinforza le difese; gli eccessi senza recupero le indeboliscono."
    ] }
  ]
};
