/* LEZIONE UNICA — I metabolismi energetici
   Fonti: «I metabolismi energetici» (prof. Andrea Bertelli) + slide del libro di testo. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["i-metabolismi-energetici"] = {
  titolo: "L'energia del movimento",
  sottotitolo: "ATP e i tre sistemi energetici: da dove arriva l'energia per uno scatto, un 400 metri o una maratona",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "L'energia del movimento", sub: "ATP e i tre sistemi energetici: da dove arriva l'energia per uno scatto, un 400 metri o una maratona" },

    { t: "cards", kicker: "Per cominciare", title: "Tre motori diversi", cards: [
      { n: "1", h: "Il dragster", p: "Potenza enorme, ma il serbatoio si svuota in pochi secondi." },
      { n: "2", h: "La Ferrari", p: "Veloce e potente, ma consuma tanto e si surriscalda." },
      { n: "3", h: "La 500", p: "Non corre molto, ma con un pieno va lontanissimo.", dark: true }
    ], note: "Il tuo muscolo li ha tutti e tre: sono i tre sistemi energetici." },

    { t: "split", kicker: "Il metabolismo", title: "Costruire e smontare", left: { h: "Anabolismo", items: ["Costruisce molecole complesse", "Consuma energia", "Es. crescita muscolare, riserve di glicogeno"] }, right: { h: "Catabolismo", items: ["Smonta le molecole dei nutrienti", "Libera energia", "Es. digestione, demolizione del glucosio"] }, note: "Metabolismo = tutte le reazioni chimiche del corpo. Quello energetico serve a produrre ATP." },

    { t: "points", kicker: "L'ATP", title: "L'unica moneta che il muscolo accetta", fig: { svg: "atp", cap: "L'ATP è come una batteria carica" }, items: [
      ["ATP:", "adenosina trifosfato, una molecola con tre gruppi fosfato."],
      ["Energia:", "staccando un fosfato diventa ADP e libera l'energia per la contrazione."],
      ["Scorta minima:", "nel muscolo ce n'è per 2–3 secondi di sforzo massimo."],
      ["Il problema:", "va ricaricata di continuo. Lo fanno i tre sistemi energetici."]
    ] },

    { t: "steps", kicker: "Il quadro generale", title: "Tre sistemi per ricaricare l'ATP", steps: [
      { h: "Anaerobico alattacido", p: "Usa la fosfocreatina. Senza ossigeno e senza acido lattico." },
      { h: "Anaerobico lattacido", p: "Usa il glucosio senza ossigeno. Produce acido lattico." },
      { h: "Aerobico", p: "Usa glucidi e grassi con l'ossigeno, nei mitocondri." }
    ] },

    { t: "key", kicker: "Le parole per confrontarli", title: "Latenza, potenza, capacità", lead: "Per ogni sistema ci chiediamo: quanto ci mette a partire, quanta energia dà al secondo, per quanto tempo.", defs: [["Potenza", "energia prodotta in un secondo"], ["Capacità", "energia totale prima di esaurirsi"]] },

    { t: "cards", kicker: "1 · Anaerobico alattacido", title: "Il dragster: fosfocreatina", bg: "blue", grid: 2, cards: [
      { n: "0 s", h: "Latenza", p: "Parte subito, al primo istante." },
      { n: "6–8 s", h: "Durata", p: "Potenza massima, ma per pochissimo tempo." },
      { h: "Come funziona", p: "La fosfocreatina cede il suo fosfato all'ADP e ricarica l'ATP." },
      { h: "Recupero", p: "50% in circa 30 secondi, quasi completo in 3 minuti.", dark: true }
    ], note: "Sport: 60 e 100 metri, salti, lanci, sollevamento pesi, uno scatto in partita." },

    { t: "cards", kicker: "2 · Anaerobico lattacido", title: "La Ferrari: glicolisi senza ossigeno", grid: 2, cards: [
      { n: "15–30 s", h: "Latenza", p: "Diventa importante dopo i primi secondi." },
      { n: "1–2 min", h: "Durata", p: "Massima resa tra 30 secondi e un minuto e mezzo." },
      { h: "Come funziona", p: "Il glucosio viene spezzato in fretta: solo 2 ATP e tanto acido lattico." },
      { h: "Il limite", p: "Il muscolo diventa acido e brucia: la potenza cala.", accent: true }
    ], note: "Sport: 400 e 800 metri, 100 metri a nuoto, azioni ripetute senza pausa." },

    { t: "points", kicker: "3 · Aerobico", title: "La 500: lento ma infinito", bg: "blue", fig: { svg: "mitocondrio", cap: "Il sistema aerobico lavora nei mitocondri" }, items: [
      ["Latenza:", "2–3 minuti per arrivare a pieno regime."],
      ["Combustibili:", "glucidi e grassi, in casi estremi anche proteine."],
      ["Resa:", "circa 36 ATP da una molecola di glucosio, contro le 2 del lattacido."],
      ["Durata:", "ore, finché ci sono carburante e acqua."],
      ["Scarti:", "solo CO₂ e acqua, che eliminiamo respirando e sudando."]
    ] },

    { t: "table", kicker: "A confronto", title: "I tre sistemi in una tabella", head: ["", "Alattacido", "Lattacido", "Aerobico"], rows: [
      ["Carburante", "Fosfocreatina", "Glucosio", "Glucidi e grassi"],
      ["Ossigeno", "No", "No", "Sì"],
      ["Potenza", "Massima", "Alta", "Moderata"],
      ["Durata", "6–8 s", "1–2 min", "Ore"],
      ["Recupero", "3 min", "30–60 min", "Ore o giorni"]
    ], note: "La potenza scende da sinistra a destra, la durata sale." },

    { t: "points", kicker: "Lavorano insieme", title: "Non un interruttore, ma un mixer", fig: { svg: "sistemi", cap: "Contributo dei tre sistemi nel tempo" }, items: [
      "I tre sistemi sono sempre accesi insieme: cambia solo chi prevale.",
      "Nei primi secondi domina l'alattacido, poi cresce il lattacido.",
      "Dopo circa un minuto e mezzo l'aerobico diventa il principale.",
      "Più lo sforzo è lungo e meno intenso, più conta l'aerobico."
    ] },

    { t: "split", kicker: "Acido lattico e debito di O₂", title: "Cosa succede dopo lo sforzo", left: { h: "L'acido lattico", items: ["Si forma quando serve energia in fretta", "Viene smaltito in circa 30–60 minuti", "Il recupero attivo lo smaltisce più in fretta", "Il fegato lo può trasformare di nuovo in glucosio (ciclo di Cori)"] }, right: { h: "Il debito di ossigeno", items: ["Dopo lo sforzo continui ad ansimare", "Serve a ricaricare la fosfocreatina", "E a smaltire l'acido lattico", "Più lo sforzo è intenso, più è grande il debito"] } },

    { t: "cards", kicker: "E nel tuo sport?", title: "Quale sistema prevale?", grid: 2, line: true, cards: [
      { h: "100 metri, salto, lancio", p: "Alattacido: tutto in meno di 10 secondi." },
      { h: "400 metri, 100 m nuoto", p: "Lattacido: il minuto più duro dell'atletica." },
      { h: "Maratona, fondo, triathlon", p: "Aerobico: ore di lavoro a ritmo costante." },
      { h: "Calcio, basket, tennis, pallavolo", p: "Misti: scatti alattacidi su una base aerobica che fa recuperare." }
    ] },

    { t: "cards", kicker: "Con l'allenamento", title: "Ogni sistema si allena", bg: "blue", cards: [
      { h: "Alattacido", p: "Scatti brevissimi a tutta (6–8 s) con recuperi lunghi, 2–3 minuti." },
      { h: "Lattacido", p: "Prove da 30 s a 2 min molto intense: il corpo impara a tamponare l'acido." },
      { h: "Aerobico", p: "Lavori lunghi e continui o a intervalli: più mitocondri e capillari.", dark: true }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Il muscolo usa solo ATP, ma ne ha per 2–3 secondi: deve ricaricarlo di continuo.",
      "Alattacido: fosfocreatina, potenza massima, 6–8 secondi.",
      "Lattacido: glucosio senza ossigeno, 1–2 minuti, produce acido lattico.",
      "Aerobico: glucidi e grassi con ossigeno, potenza minore ma durata di ore.",
      "I tre sistemi lavorano sempre insieme: durata e intensità decidono chi prevale."
    ] }
  ]
};
