/* LEZIONE UNICA — Il primo soccorso
   Contenuti rielaborati dal prof. Andrea Bertelli a partire dal libro di testo in adozione
   e aggiornati alle linee guida europee sulla rianimazione (ERC 2021). Testi e disegni originali. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["il-primo-soccorso"] = {
  titolo: "Sapere cosa fare",
  sottotitolo: "Il primo soccorso: chiamare, valutare, intervenire senza fare danni",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe seconda", title: "Sapere cosa fare", sub: "Il primo soccorso: chiamare, valutare, intervenire senza fare danni" },

    { t: "cards", kicker: "Per cominciare", title: "Succede in palestra, per strada, a casa", cards: [
      { n: "1", h: "Un compagno a terra", p: "Non risponde. Tutti guardano, nessuno si muove." },
      { n: "2", h: "Una caviglia girata", p: "Dolore, gonfiore. Ghiaccio? Calore? Massaggio?" },
      { n: "3", h: "La differenza", p: "Chi sa cosa fare nei primi minuti può salvare una vita.", dark: true }
    ] },

    { t: "split", kicker: "Le basi", title: "Che cos'è il primo soccorso", left: { h: "Primo soccorso", items: ["L'aiuto che chiunque può dare", "In attesa dei soccorsi professionali", "Con gesti semplici e sicuri"] }, right: { h: "Un dovere di tutti", items: ["Non soccorrere è un reato: omissione di soccorso", "Il minimo obbligatorio: chiamare il 112", "Non si chiede di fare il medico, ma di non restare a guardare"] } },

    { t: "steps", kicker: "Il codice di comportamento", title: "Prima di tutto, nell'ordine", steps: [
      { h: "Sicurezza", p: "Guardati intorno: traffico, corrente, fuoco? Non diventare la seconda vittima." },
      { h: "Valuta", p: "Chiamalo a voce alta, scuotilo piano le spalle: risponde?" },
      { h: "Chiama il 112", p: "Oppure fallo chiamare a qualcuno indicandolo: «Tu, chiama il 112»." },
      { h: "Intervieni", p: "Solo con ciò che sai fare. Non spostarlo, non dargli da bere né da mangiare." }
    ], lastDark: true },

    { t: "table", kicker: "La chiamata", title: "Che cosa dire al 112", head: ["Domanda", "Che cosa rispondi"], rows: [
      ["Dove?", "Indirizzo preciso, piano, punti di riferimento"],
      ["Che cosa è successo?", "Malore, caduta, incidente…"],
      ["Quante persone?", "Numero ed età approssimativa"],
      ["Come stanno?", "È cosciente? Respira? Sanguina?"],
      ["Il tuo numero", "Resta raggiungibile e non riattaccare per primo"]
    ], note: "L'operatore ti guida passo per passo: puoi mettere il telefono in vivavoce e intanto agire." },

    { t: "points", kicker: "Valutare", title: "Coscienza e respiro", fig: { svg: "pls", cap: "Posizione laterale di sicurezza" }, items: [
      ["Coscienza:", "lo chiami e lo tocchi. Se non risponde, apri le vie aeree: mano sulla fronte, due dita sotto il mento, testa indietro."],
      ["Respiro, per 10 secondi:", "guarda il torace, ascolta, senti l'aria sulla guancia (G.A.S.)."],
      ["Respira:", "mettilo in posizione laterale di sicurezza e controlla di continuo."],
      ["Non respira, o respira male:", "è un arresto cardiaco. Si parte con la rianimazione."]
    ] },

    { t: "points", kicker: "L'arresto cardiaco", title: "Rianimazione cardiopolmonare", bg: "blue", fig: { svg: "rcp", cap: "Le compressioni toraciche" }, items: [
      ["Dove:", "persona supina su un piano rigido, mani al centro del torace, sulla metà inferiore dello sterno."],
      ["Come:", "braccia tese, spalle sopra le mani, spingi forte: 5–6 cm."],
      ["Quanto veloce:", "100–120 compressioni al minuto. Lascia risalire il torace."],
      ["Ritmo:", "30 compressioni e 2 ventilazioni; se non te la senti, solo compressioni senza fermarti."],
      ["Fino a quando:", "arrivano i soccorsi, la persona si riprende o sei esausto."]
    ] },

    { t: "points", kicker: "Il defibrillatore", title: "Il DAE: lo usa chiunque", fig: { svg: "catena", cap: "Allarme, RCP, defibrillazione, soccorso avanzato" }, items: [
      ["Che cos'è:", "un apparecchio che riconosce il ritmo del cuore e, se serve, dà la scarica."],
      ["Come si usa:", "lo accendi e lui ti parla: placche sul torace nudo, nessuno tocca la persona durante l'analisi."],
      ["Dove si trova:", "in palestre, scuole, stazioni. Cerca il cartello verde con il cuore."],
      ["La legge:", "chi lo usa per soccorrere non è punibile: è un gesto di aiuto."]
    ] },

    { t: "split", kicker: "Gravità", title: "Emergenza o urgenza?", left: { h: "Emergenza", items: ["Pericolo immediato di vita", "Arresto cardiaco, soffocamento, emorragia grave", "Si agisce in pochi minuti"] }, right: { h: "Urgenza", items: ["Serve aiuto in tempi brevi", "Ma la vita non è in pericolo immediato", "Frattura, ferita profonda, ustione"] }, note: "Prevenzione attiva: comportamenti sicuri (casco, riscaldamento). Prevenzione passiva: ambienti sicuri (protezioni, segnaletica)." },

    { t: "cards", kicker: "Il soffocamento", title: "Qualcosa va di traverso", bg: "blue", grid: 3, cards: [
      { n: "1", h: "Tossisce", p: "Incoraggialo a tossire forte. Non dare pacche." },
      { n: "2", h: "Non riesce più", p: "5 colpi forti tra le scapole, con il busto in avanti." },
      { n: "3", h: "Ancora ostruito", p: "5 compressioni addominali (manovra di Heimlich), alternate ai colpi.", dark: true }
    ], note: "Se perde coscienza: chiama il 112 e inizia la rianimazione." },

    { t: "table", kicker: "In palestra", title: "I traumi più comuni", head: ["Trauma", "Che cosa succede", "Che cosa fai"], rows: [
      ["Contusione", "Colpo senza ferita: livido o ematoma", "Ghiaccio, riposo"],
      ["Crampo", "Contrazione dolorosa e involontaria", "Allunga piano il muscolo, massaggia"],
      ["Stiramento e strappo", "Fibre muscolari allungate o rotte", "RICE, niente massaggio, visita"],
      ["Distorsione", "L'articolazione si torce, i legamenti soffrono", "RICE, immobilizza"],
      ["Lussazione", "Le ossa escono dall'articolazione", "Immobilizza così com'è, mai rimettere a posto"],
      ["Frattura", "Osso rotto, chiusa o esposta", "Immobilizza anche le articolazioni sopra e sotto"]
    ] },

    { t: "points", kicker: "Muscoli e articolazioni", title: "Il protocollo RICE", fig: { svg: "rice", cap: "Riposo, ghiaccio, compressione, elevazione" }, items: [
      ["Rest:", "ferma l'attività, non «correrci sopra»."],
      ["Ice:", "ghiaccio avvolto in un panno, 15–20 minuti più volte al giorno nelle prime 48 ore."],
      ["Compression:", "una fascia elastica, non troppo stretta."],
      ["Elevation:", "l'arto più in alto del cuore riduce il gonfiore."],
      ["Mai subito:", "calore e massaggi su un trauma recente."]
    ] },

    { t: "points", kicker: "Ferite ed emorragie", title: "Fermare il sangue", bg: "blue", fig: { svg: "pressione", cap: "Compressione diretta e punti di compressione" }, items: [
      ["Ferita leggera:", "lava con acqua, disinfetta, copri con garza sterile. Controlla la vaccinazione antitetanica."],
      ["Emorragia:", "guanti, garza e premi forte e a lungo direttamente sulla ferita."],
      ["Se continua:", "aggiungi garze senza togliere le prime; premi l'arteria a monte."],
      ["Naso che sanguina:", "testa in avanti, non indietro; stringi le narici per 10 minuti."],
      ["Shock:", "pallore, sudore freddo, polso veloce: sdraialo con le gambe sollevate."]
    ] },

    { t: "cards", kicker: "Altre situazioni", title: "Caldo, freddo, ustioni", grid: 2, cards: [
      { h: "Colpo di calore", p: "All'ombra, raffredda con acqua sul corpo, fai bere a piccoli sorsi se è cosciente." },
      { h: "Ipotermia", p: "Al riparo, coperte, scalda prima il tronco. Niente alcol." },
      { h: "Ustione", p: "Acqua corrente fresca per 10–20 minuti, garza sterile. Niente pomate, non rompere le bolle." },
      { h: "Trauma alla testa", p: "Non muoverlo se ha perso i sensi; anche se si riprende, va visitato.", dark: true }
    ] },

    { t: "cards", kicker: "Gli errori da evitare", title: "Prima di tutto, non nuocere", bg: "blue", grid: 2, line: true, cards: [
      { h: "Spostare la persona", p: "Solo se c'è un pericolo immediato: rischi di peggiorare un trauma alla colonna." },
      { h: "Dare da bere", p: "Mai a chi non è del tutto cosciente: può soffocare." },
      { h: "Rimettere a posto un osso", p: "Si immobilizza così com'è e si aspettano i soccorsi." },
      { h: "Far vomitare", p: "In caso di avvelenamento chiama il 112 o il Centro antiveleni." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Sicurezza, valutazione, 112, intervento: sempre in quest'ordine.",
      "Non risponde e non respira normalmente: compressioni al centro del torace, 100–120 al minuto, 5–6 cm.",
      "Il DAE lo può usare chiunque: ti guida con la voce.",
      "Respira ma non è cosciente: posizione laterale di sicurezza.",
      "Distorsioni e strappi: RICE. Mai calore o massaggi su un trauma recente."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "Libro di testo in adozione: capitoli sul primo soccorso (rielaborazione del prof. A. Bertelli).",
      "European Resuscitation Council, Linee guida 2021; Italian Resuscitation Council (ircouncil.it).",
      "Legge 116/2021 sull'uso dei defibrillatori; Numero unico di emergenza 112.",
      "Questa lezione non sostituisce un corso BLSD: chiedi alla scuola come seguirne uno."
    ] }
  ]
};
