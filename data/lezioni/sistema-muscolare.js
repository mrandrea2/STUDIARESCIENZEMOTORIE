/* LEZIONE UNICA — Il sistema muscolare
   Fonti: «Il sistema muscolare» e «Come crescono i muscoli?» (prof. Andrea Bertelli) + slide Zanichelli / D Scuola. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["sistema-muscolare"] = {
  titolo: "I muscoli: il motore del movimento",
  sottotitolo: "Tipi di muscolo, struttura, contrazione, fibre e unità motorie",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe prima", title: "I muscoli: il motore del movimento", sub: "Tipi di muscolo, struttura, contrazione, fibre e unità motorie" },

    { t: "cards", kicker: "Per cominciare", title: "Più di 600 muscoli", cards: [
      { n: "40%", h: "Del peso corporeo", p: "Nei maschi adulti; un po' meno nelle femmine." },
      { n: "600+", h: "Muscoli scheletrici", p: "Dal più grande, il gluteo, al più piccolo, la staffa nell'orecchio." },
      { n: "100%", h: "Del movimento", p: "Senza muscoli non si muove nulla, nemmeno il cuore.", dark: true }
    ] },

    { t: "cards", kicker: "Tre tipi di muscolo", title: "Scheletrico, cardiaco, liscio", cards: [
      { h: "Scheletrico", p: "Striato e volontario. Muove le ossa, mantiene la postura, produce calore." },
      { h: "Cardiaco", p: "Striato ma involontario. Si contrae da solo per tutta la vita, non si stanca." },
      { h: "Liscio", p: "Involontario, contrazione lenta e prolungata. Nei vasi, nello stomaco, nell'intestino.", dark: true }
    ] },

    { t: "cards", kicker: "Le proprietà", title: "Che cosa sa fare un muscolo", bg: "blue", grid: 2, cards: [
      { h: "Contrattilità", p: "Si accorcia e sviluppa forza." },
      { h: "Estensibilità", p: "Si allunga se viene tirato." },
      { h: "Elasticità", p: "Torna alla lunghezza iniziale quando smetti di tirarlo." },
      { h: "Eccitabilità", p: "Risponde allo stimolo del nervo.", dark: true }
    ] },

    { t: "points", kicker: "La struttura", title: "Dal muscolo al sarcomero", fig: { svg: "muscolo", cap: "Muscolo, fascio, fibra, miofibrille" }, items: [
      ["Muscolo:", "avvolto dall'epimisio; alle estremità il connettivo forma il tendine."],
      ["Fasci:", "gruppi di fibre avvolti dal perimisio."],
      ["Fibra:", "una cellula lunghissima, avvolta dall'endomisio, con membrana (sarcolemma) e citoplasma (sarcoplasma)."],
      ["Miofibrille:", "filamenti di actina e miosina, organizzati in sarcomeri."]
    ] },

    { t: "points", kicker: "La contrazione", title: "Filamenti che scorrono", bg: "blue", fig: { svg: "sarcomero", cap: "Il sarcomero, unità della contrazione" }, items: [
      ["Il comando:", "l'impulso nervoso arriva alla fibra e libera calcio."],
      ["Il calcio:", "si lega alla troponina e scopre i punti di attacco sull'actina."],
      ["I ponti:", "le teste di miosina si attaccano all'actina, si piegano e la tirano verso il centro."],
      ["L'energia:", "ogni ciclo consuma ATP. Senza impulso, il calcio torna nei depositi e il muscolo si rilassa."]
    ] },

    { t: "points", kicker: "Lavorare in squadra", title: "Agonisti, antagonisti, sinergici", fig: { svg: "agonista", cap: "Bicipite e tricipite nella flessione del gomito" }, items: [
      ["Agonista:", "realizza il movimento, es. il bicipite nella flessione del gomito."],
      ["Antagonista:", "fa l'azione opposta e si allunga per controllarla, es. il tricipite."],
      ["Sinergici:", "aiutano o stabilizzano, es. brachiale e brachioradiale."],
      ["Origine e inserzione:", "il muscolo si attacca a un punto fisso (origine) e a un punto mobile (inserzione)."]
    ] },

    { t: "table", kicker: "Le forme dei muscoli", title: "La forma dipende dalle fibre", head: ["Forma", "Fibre", "Esempio"], rows: [
      ["Fusiforme", "Parallele, più gonfie al centro", "Bicipite brachiale"],
      ["Pennato", "Oblique ai due lati del tendine", "Retto femorale"],
      ["Triangolare", "A ventaglio verso un tendine", "Grande pettorale"],
      ["Nastriforme", "Parallele, con più inserzioni", "Retto dell'addome"],
      ["Con più capi", "Due, tre o quattro capi", "Bicipite, tricipite, quadricipite"]
    ] },

    { t: "points", kicker: "Le fibre", title: "Lente o veloci?", bg: "blue", fig: { svg: "fibre", cap: "I tipi di fibra muscolare" }, items: [
      ["Tipo I (lente, rosse):", "tanti capillari, mioglobina e mitocondri; metabolismo aerobico; resistono alla fatica."],
      ["Tipo IIa (veloci intermedie):", "usano sia l'aerobico sia l'anaerobico."],
      ["Tipo IIx (veloci, bianche):", "potentissime, anaerobiche, si stancano in fretta."],
      ["Nello sport:", "i maratoneti hanno più fibre lente, i velocisti più fibre veloci."]
    ] },

    { t: "split", kicker: "I regimi di contrazione", title: "Accorciarsi, allungarsi, tenere", left: { h: "Dinamiche", items: ["Concentrica: il muscolo si accorcia (salita dello squat)", "Eccentrica: si allunga frenando (discesa dello squat)"] }, right: { h: "Statiche e miste", items: ["Isometrica: forza senza cambiare lunghezza (plank)", "Pliometrica: eccentrica + concentrica rapidissima (balzi)"] }, note: "Nel ciclo stiramento-accorciamento il muscolo funziona come una molla: l'energia elastica accumulata in frenata si somma alla spinta." },

    { t: "key", kicker: "L'unità motoria", title: "Un neurone, tante fibre", lead: "L'unità motoria è formata da un motoneurone e da tutte le fibre che comanda. Quando arriva l'impulso si contraggono tutte insieme, al massimo.", defs: [["Legge del tutto o nulla", "le fibre di un'unità si contraggono tutte o nessuna"], ["Muscoli fini", "poche fibre per unità: occhio, dita"]] },

    { t: "split", kicker: "Graduare la forza", title: "Come dosi la forza", left: { h: "Reclutamento spaziale", items: ["Più forza serve, più unità motorie attivi", "Prima le piccole (fibre lente), poi le grandi (veloci)"] }, right: { h: "Reclutamento temporale", items: ["Più impulsi ravvicinati: le scosse si sommano", "Fino al tetano: contrazione piena e continua", "Forza fino a 3–4 volte quella di una scossa"] } },

    { t: "split", kicker: "Il tono muscolare", title: "Mai del tutto spenti", left: { h: "Che cos'è", items: ["Una lieve contrazione che resta anche a riposo", "Parte passiva + parte riflessa dal sistema nervoso", "Il caldo lo riduce, il freddo lo aumenta"] }, right: { h: "Quando cambia", items: ["Ipertono: troppo alto (spasticità)", "Ipotonia: troppo basso", "Flaccidità: assente"] } },

    { t: "cards", kicker: "Come crescono i muscoli", title: "Allenamento e adattamento", bg: "blue", grid: 2, cards: [
      { h: "Prime settimane", p: "La forza cresce soprattutto perché il sistema nervoso impara ad attivare più fibre insieme." },
      { h: "Ipertrofia", p: "Con l'allenamento di forza le fibre producono più miofibrille e diventano più grosse." },
      { h: "Resistenza", p: "L'allenamento aerobico aumenta mitocondri e capillari." },
      { h: "Recupero", p: "Il muscolo cresce mentre riposi: sonno e proteine sono fondamentali.", dark: true }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Ci sono tre tipi di muscolo: scheletrico, cardiaco e liscio.",
      "Il muscolo scheletrico si organizza in fasci, fibre, miofibrille e sarcomeri.",
      "La contrazione è lo scorrimento dell'actina sulla miosina, con calcio e ATP.",
      "Le fibre lente resistono alla fatica, le veloci producono forza e potenza.",
      "La forza si gradua reclutando più unità motorie e aumentando la frequenza degli impulsi."
    ] }
  ]
};
