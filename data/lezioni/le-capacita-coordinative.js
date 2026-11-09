/* LEZIONE UNICA — Le capacità coordinative e l'apprendimento motorio
   Contenuti rielaborati dal prof. Andrea Bertelli a partire dal libro di testo in adozione
   (capitoli «Coordinazione» e «Apprendimento e controllo motorio»). Testi e disegni originali. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["le-capacita-coordinative"] = {
  titolo: "Muoversi con intelligenza",
  sottotitolo: "Capacità coordinative, equilibrio e apprendimento motorio",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classi prima e quarta", title: "Muoversi con intelligenza", sub: "Capacità coordinative, equilibrio e apprendimento motorio" },

    { t: "cards", kicker: "Per cominciare", title: "Forti non basta", cards: [
      { n: "1", h: "Il pallone che scappa", p: "Hai gambe forti, ma il controllo di palla non riesce." },
      { n: "2", h: "La prima volta in bici", p: "All'inizio pensi a tutto. Dopo un mese pedali e parli." },
      { n: "3", h: "La domanda", p: "Chi decide come si muove il corpo? Il sistema nervoso.", dark: true }
    ] },

    { t: "steps", kicker: "Tre tipi di movimento", title: "Riflesso, volontario, automatizzato", steps: [
      { h: "Riflesso", p: "Involontario e velocissimo: ritrai la mano dal fuoco prima di pensarci." },
      { h: "Volontario", p: "Lo decidi e lo controlli passo per passo: lento e faticoso per la mente." },
      { h: "Automatizzato", p: "Appreso a forza di ripetere: lo fai senza pensarci e la mente resta libera." }
    ], lastDark: true },

    { t: "points", kicker: "Le capacità motorie", title: "Condizionali e coordinative", fig: { svg: "capacita", cap: "Le due famiglie delle capacità motorie" }, items: [
      ["Condizionali:", "forza, resistenza, velocità. Dipendono da muscoli, cuore, energia: sono quantitative."],
      ["Coordinative:", "dipendono dal sistema nervoso, che organizza e regola il movimento: sono qualitative."],
      ["Insieme:", "ogni gesto le usa tutte. Un tiro in porta è forza, velocità e precisione insieme."],
      ["Quando allenarle:", "le coordinative crescono moltissimo tra i 7 e i 13 anni, ma migliorano a ogni età."]
    ] },

    { t: "cards", kicker: "Le forme della coordinazione", title: "Come si coordina il corpo", bg: "blue", grid: 2, cards: [
      { h: "Dinamica generale", p: "Tutto il corpo lavora insieme: correre, saltare, arrampicarsi." },
      { h: "Oculo-manuale e oculo-podalica", p: "Occhi e mani, occhi e piedi: palleggiare, calciare, prendere." },
      { h: "Intersegmentaria", p: "Braccia e gambe in combinazioni diverse: uguali, crociate, indipendenti." },
      { h: "Destrezza", p: "Fare il gesto giusto in modo preciso, veloce ed economico.", dark: true }
    ] },

    { t: "split", kicker: "Tre capacità di base", title: "Le capacità coordinative generali", left: { h: "Apprendimento motorio", items: ["Imparare gesti nuovi", "Più ne sai, più impari in fretta", "È la base di tutte le altre"] }, right: { h: "Controllo e adattamento", items: ["Controllo: guidare il gesto verso lo scopo", "Adattamento: cambiarlo quando cambia la situazione", "Esempio: la palla rimbalza storta e tu correggi"] } },

    { t: "list", kicker: "Le capacità speciali", title: "Sette abilità da allenare", items: [
      ["Combinazione", "Unire movimenti diversi in un'azione fluida: corsa, stacco e schiacciata."],
      ["Differenziazione", "Dosare la forza e la precisione: un passaggio corto o lungo."],
      ["Orientamento", "Sapere dove sei rispetto a campo, compagni, palla."],
      ["Ritmo", "Dare il tempo giusto al gesto: la rincorsa del salto in lungo."],
      ["Reazione", "Rispondere rapidamente a un segnale, semplice o a scelta."],
      ["Equilibrio", "Mantenere o recuperare una posizione stabile."],
      ["Fantasia motoria", "Inventare soluzioni nuove ed efficaci: la giocata che sorprende."]
    ] },

    { t: "points", kicker: "L'equilibrio", title: "Restare in piedi è un lavoro", bg: "blue", fig: { svg: "equilibrio", cap: "Base d'appoggio e baricentro" }, items: [
      ["Statico:", "stare fermi in una posizione, come in piedi su una gamba."],
      ["Dinamico:", "durante il movimento, come camminare sulla trave."],
      ["In volo e in rotazione:", "nel salto, nella capriola, nel tuffo."],
      ["Chi lo regola:", "il cervelletto unisce le informazioni di occhi, orecchio interno, pelle e muscoli."],
      ["Per essere più stabile:", "allarga la base, abbassa il baricentro, guarda un punto fisso."]
    ] },

    { t: "points", kicker: "Il controllo motorio", title: "Dal segnale al gesto", fig: { svg: "controllo", cap: "I quattro sistemi del controllo motorio" }, items: [
      ["Percettivo:", "i sensi raccolgono le informazioni. La vista conta per oltre l'80%."],
      ["Elaborativo:", "il cervello confronta con la memoria e decide che cosa fare."],
      ["Effettore:", "i muscoli eseguono il programma."],
      ["Controllo:", "il feedback dice se il gesto è riuscito e lo corregge."]
    ] },

    { t: "cards", kicker: "I sensi del movimento", title: "Non solo i cinque sensi", grid: 2, cards: [
      { h: "Vista", p: "Focale per il dettaglio, periferica per il campo intorno a te." },
      { h: "Udito", p: "Il rimbalzo della palla, il fischio, la voce dei compagni." },
      { h: "Tatto", p: "Il contatto con il pallone, l'attrezzo, l'avversario." },
      { h: "Propriocezione", p: "Recettori in muscoli, tendini, articolazioni e orecchio interno: sai dove sono le braccia anche a occhi chiusi.", dark: true }
    ] },

    { t: "split", kicker: "Anticipare", title: "Giocare un attimo prima", left: { h: "Anticipazione", items: ["Prevedere dove e quando arriva la palla", "Spaziale: dove? Temporale: quando?", "Nasce dall'esperienza e dalla lettura degli indizi"] }, right: { h: "La finta", items: ["Dare all'avversario un indizio falso", "Lui anticipa nella direzione sbagliata", "Tu guadagni tempo e spazio"] }, note: "Il programma motorio generalizzato: ogni gesto ha una parte fissa (la sequenza) e una parte variabile (forza, velocità, direzione). Per questo sai tirare piano o forte senza imparare due gesti diversi." },

    { t: "steps", kicker: "Come si impara", title: "Le tre fasi dell'apprendimento", steps: [
      { h: "Coordinazione grezza", p: "Il gesto è rigido, lento, pieno di errori. Serve tanta attenzione." },
      { h: "Coordinazione fine", p: "Il gesto diventa preciso e fluido, in condizioni note." },
      { h: "Disponibilità variabile", p: "Lo esegui bene in qualsiasi situazione, anche sotto pressione." }
    ], lastDark: true },

    { t: "points", kicker: "Imparare dagli errori", title: "Il feedback", bg: "blue", fig: { svg: "fasi", cap: "Dal gesto grezzo al gesto adattabile" }, items: [
      ["Interno:", "le tue sensazioni durante il gesto."],
      ["Esterno:", "l'insegnante, un video, un compagno che ti osserva."],
      ["Conoscenza del risultato:", "«Il tiro è entrato.»"],
      ["Conoscenza della prestazione:", "«Il gomito era basso.» Dice come correggere."],
      ["Tre tipi di errore:", "di percezione, di scelta, di esecuzione."]
    ] },

    { t: "cards", kicker: "Allenare la coordinazione", title: "Come si migliora", grid: 2, line: true, cards: [
      { h: "Varia le condizioni", p: "Cambia attrezzo, spazio, velocità, mano o piede." },
      { h: "Togli un senso", p: "Equilibrio a occhi chiusi, palleggio senza guardare." },
      { h: "Aggiungi una richiesta", p: "Palleggia e conta, corri e rispondi a un segnale." },
      { h: "Poco ma fresco", p: "La coordinazione si allena a inizio lezione, senza fatica." }
    ], note: "Transfer: un gesto già imparato può aiutare (positivo) o disturbare (negativo) l'apprendimento di uno nuovo." },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Le capacità coordinative dipendono dal sistema nervoso e rendono il gesto preciso ed economico.",
      "Generali: apprendimento, controllo, adattamento. Speciali: combinazione, differenziazione, orientamento, ritmo, reazione, equilibrio, fantasia.",
      "L'equilibrio può essere statico, dinamico o in volo; base larga e baricentro basso danno stabilità.",
      "Il controllo motorio passa da percezione, elaborazione, esecuzione e feedback.",
      "Si impara in tre fasi: grezza, fine, disponibilità variabile."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "Libro di testo in adozione: capitoli «Coordinazione» e «Apprendimento e controllo motorio» (rielaborazione del prof. A. Bertelli).",
      "K. Meinel, G. Schnabel, Teoria del movimento, SSS Roma.",
      "R. A. Schmidt, T. D. Lee, Controllo motorio e apprendimento, Calzetti Mariucci."
    ] }
  ]
};
