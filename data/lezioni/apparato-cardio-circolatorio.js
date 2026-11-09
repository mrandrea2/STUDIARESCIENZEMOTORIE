/* LEZIONE UNICA — Apparato cardiocircolatorio
   Fonti: «L'apparato cardiovascolare e l'attività fisica» (prof. Andrea Bertelli) + slide del libro di testo. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["apparato-cardio-circolatorio"] = {
  titolo: "Il cuore e lo sport",
  sottotitolo: "Cuore, vasi e sangue: come arriva l'ossigeno ai muscoli e come cambia tutto con l'allenamento",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Il cuore e lo sport", sub: "Cuore, vasi e sangue: come arriva l'ossigeno ai muscoli e come cambia tutto con l'allenamento" },

    { t: "cards", kicker: "Per cominciare", title: "Senti il tuo cuore", cards: [
      { n: "1", h: "Trova il polso", p: "Al polso, lato del pollice, o al collo sotto la mandibola." },
      { n: "2", h: "Conta per 15 secondi", p: "Moltiplica per 4: ecco i battiti al minuto." },
      { n: "3", h: "Ora 20 saltelli", p: "Ricontrolla subito. Quanto è salito? Perché?", dark: true }
    ] },

    { t: "steps", kicker: "Il quadro generale", title: "Un impianto idraulico in tre parti", steps: [
      { h: "La pompa", p: "Il cuore spinge il sangue con circa 70 battiti al minuto a riposo." },
      { h: "I tubi", p: "Arterie, capillari e vene: circa 100.000 km di vasi." },
      { h: "Il liquido", p: "Circa 5 litri di sangue che portano O₂, nutrienti e calore e riportano scorie." }
    ] },

    { t: "points", kicker: "Il cuore", title: "Un muscolo grande come un pugno", fig: { svg: "cuore", cap: "Due pompe affiancate, divise dal setto" }, items: [
      ["Dove:", "al centro del torace, tra i polmoni, con la punta verso sinistra."],
      ["Quanto pesa:", "circa 300 grammi."],
      ["Quattro cavità:", "due atri sopra, che ricevono, e due ventricoli sotto, che spingono."],
      ["Tre strati:", "pericardio (il sacco esterno), miocardio (il muscolo), endocardio (il rivestimento interno)."],
      ["Quattro valvole:", "tricuspide, mitrale, polmonare e aortica fanno andare il sangue in un solo senso."]
    ] },

    { t: "split", kicker: "Due circolazioni", title: "Il sangue fa un giro a otto", fig: { svg: "circolazione", cap: "Piccola e grande circolazione" }, left: { h: "Piccola circolazione", items: ["Ventricolo destro → polmoni", "Lascia CO₂, carica O₂", "Torna all'atrio sinistro"] }, right: { h: "Grande circolazione", items: ["Ventricolo sinistro → aorta → tutto il corpo", "Consegna O₂, raccoglie CO₂", "Torna all'atrio destro"] } },

    { t: "steps", kicker: "Il ciclo cardiaco", title: "Un battito, due tempi", bg: "white", steps: [
      { h: "Diastole", p: "Il cuore si rilassa e si riempie di sangue." },
      { h: "Sistole atriale", p: "Gli atri si contraggono e completano il riempimento dei ventricoli." },
      { h: "Sistole ventricolare", p: "I ventricoli si contraggono: il sangue parte verso polmoni e aorta." },
      { h: "Il segnapassi", p: "Il nodo seno-atriale fa partire ogni battito da solo: il cuore è automatico." }
    ], lastDark: true },

    { t: "list", kicker: "I vasi sanguigni", title: "Dalle autostrade ai vicoli", bg: "blue", fig: { svg: "vasi", cap: "Arteria, vena e capillare in sezione" }, items: [
      ["Arterie", "Portano il sangue via dal cuore. Pareti spesse ed elastiche."],
      ["Arteriole", "Si stringono o si allargano: decidono dove va il sangue."],
      ["Capillari", "Sottilissimi: qui avvengono gli scambi con le cellule."],
      ["Venule e vene", "Riportano il sangue al cuore. Le valvole impediscono il ritorno indietro."],
      ["Pompa muscolare", "Contraendosi, i muscoli delle gambe spremono le vene verso l'alto."]
    ] },

    { t: "cards", kicker: "Il sangue", title: "Un tessuto liquido", grid: 2, fig: { svg: "sangue", cap: "Globuli rossi, globuli bianchi e piastrine" }, cards: [
      { n: "55%", h: "Plasma", p: "Acqua con proteine, sali, zuccheri e ormoni." },
      { n: "45%", h: "Parte corpuscolata", p: "È l'ematocrito: quasi tutta globuli rossi." },
      { h: "Globuli rossi", p: "Con l'emoglobina trasportano l'ossigeno." },
      { h: "Globuli bianchi e piastrine", p: "Difesa dalle infezioni e coagulazione.", dark: true }
    ] },

    { t: "key", kicker: "L'idea chiave", title: "Gittata × frequenza = portata", lead: "Quanto sangue esce dal cuore in un minuto dipende da due numeri. Sotto sforzo salgono entrambi.", defs: [["Gittata sistolica", "sangue spinto a ogni battito"], ["Portata cardiaca", "sangue spinto in un minuto"]] },

    { t: "formula", kicker: "Portata cardiaca", title: "Quanto sangue pompi in un minuto", big: "70 mL × 70 = <em>circa 5 L/min</em>", caption: "gittata sistolica × frequenza cardiaca, a riposo", cols: [
      { h: "Sotto sforzo massimo", p: "Fino a 20–25 L/min in un ragazzo allenato, oltre 30 L/min in un campione di resistenza." },
      { h: "Dove va il sangue", p: "A riposo ai muscoli ne arriva circa il 20%; sotto sforzo oltre l'80%." }
    ] },

    { t: "stats", kicker: "La pressione arteriosa", title: "La spinta del sangue sulle pareti", bg: "blue", stats: [
      { big: "120", h: "Massima · sistolica", p: "mmHg, quando i ventricoli si contraggono.", blue: true },
      { big: "80", h: "Minima · diastolica", p: "mmHg, quando il cuore si rilassa." },
      { big: "Sotto sforzo", h: "", p: "La massima sale, la minima resta quasi uguale. Con l'allenamento la pressione a riposo tende a scendere.", dark: true }
    ] },

    { t: "table", kicker: "Il cuore sotto sforzo", title: "Cosa cambia quando corri", head: ["", "Riposo", "Sforzo moderato", "Sforzo massimo"], rows: [
      ["Frequenza cardiaca", "60–80 bpm", "120–150 bpm", "circa 200 bpm"],
      ["Gittata sistolica", "70 mL", "100–110 mL", "110–120 mL"],
      ["Portata cardiaca", "5 L/min", "12–15 L/min", "20–25 L/min"]
    ], note: "Valori indicativi di un ragazzo sano non allenato. La gittata smette di crescere a metà sforzo: dopo, aumenta solo la frequenza." },

    { t: "points", kicker: "Frequenza cardiaca", title: "Il contagiri del tuo corpo", fig: { svg: "polso", cap: "Si misura con indice e medio" }, items: [
      ["A riposo:", "60–80 battiti al minuto; negli atleti di resistenza anche 40–50."],
      ["Massima teorica:", "FCmax ≈ 220 − età. A 16 anni circa 204: è una stima, l'errore può superare 10 battiti."],
      ["Recupero:", "più velocemente scende dopo lo sforzo, migliore è l'allenamento."],
      ["Variabilità (HRV):", "piccole differenze tra un battito e l'altro sono un buon segno di recupero."]
    ] },

    { t: "formula", kicker: "La formula di Karvonen", title: "Calcola la tua frequenza di allenamento", big: "FC = FCrip + <em>% × (FCmax − FCrip)</em>", caption: "la differenza FCmax − FCrip si chiama frequenza di riserva", cols: [
      { h: "Esempio", p: "16 anni, FCrip 70, FCmax 204, al 60%: 70 + 0,6 × 134 = circa 150 bpm." },
      { h: "Attenzione", p: "220 − età serve a stimare la FC massima. Karvonen invece calcola la frequenza a cui allenarsi." }
    ] },

    { t: "points", kicker: "Le zone di lavoro", title: "Ogni intensità ha un obiettivo", bg: "blue", fig: { svg: "fczone", cap: "Zone indicative in % della FC massima" }, items: [
      ["50–60%:", "recupero attivo e defaticamento."],
      ["60–70%:", "resistenza di base, si bruciano molti grassi."],
      ["70–80%:", "migliora la capacità aerobica: respiro marcato, parli a frasi brevi."],
      ["80–90%:", "vicino alla soglia: ripetute e lavori a intervalli."],
      ["Oltre 90%:", "sforzi brevi e massimali, solo per pochi secondi o minuti."]
    ] },

    { t: "cards", kicker: "Con l'allenamento", title: "Il cuore d'atleta", grid: 2, cards: [
      { h: "Cuore più grande e forte", p: "Il ventricolo sinistro si allarga e si irrobustisce: più sangue a ogni battito." },
      { h: "Bradicardia a riposo", p: "Servono meno battiti per la stessa portata: il cuore lavora meno." },
      { h: "Più capillari nei muscoli", p: "Più strade per portare ossigeno alle fibre." },
      { h: "Più sangue in circolo", p: "Aumenta il volume del plasma e migliora il raffreddamento.", accent: true }
    ], note: "Sono adattamenti normali e reversibili: se smetti di allenarti, in qualche settimana il cuore torna come prima." },

    { t: "cards", kicker: "E nel tuo sport?", title: "Ogni sport allena il cuore a modo suo", grid: 2, line: true, cards: [
      { h: "Corsa, nuoto, ciclismo", p: "Lavori lunghi e continui: il cuore diventa una pompa più capiente." },
      { h: "Pesistica e lanci", p: "Sforzi brevi e intensi: la pressione sale molto, il cuore si irrobustisce." },
      { h: "Sport di squadra", p: "Picchi e recuperi: conta quanto in fretta scende la frequenza." },
      { h: "Prima di tutto", p: "Visita medico-sportiva: controlla che il tuo cuore sia pronto per l'agonismo." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Il cuore è una doppia pompa: la parte destra manda il sangue ai polmoni, la sinistra a tutto il corpo.",
      "Le arterie partono dal cuore, le vene tornano al cuore, i capillari fanno gli scambi.",
      "Portata = gittata × frequenza: a riposo circa 5 L/min, sotto sforzo anche 20–25.",
      "FCmax ≈ 220 − età è una stima; con Karvonen calcoli la frequenza di allenamento.",
      "Con l'allenamento il cuore diventa più grande ed efficiente e batte più lento a riposo."
    ] }
  ]
};
