/* LEZIONE UNICA — I test motori
   Lezione costruita da ricerche online: vedi l'ultima slide per le fonti. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["test-motori"] = {
  titolo: "Misurarsi per migliorare",
  sottotitolo: "Che cosa sono i test motori, come si eseguono bene e come leggere i risultati",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Misurarsi per migliorare", sub: "Che cosa sono i test motori, come si eseguono bene e come leggere i risultati" },

    { t: "cards", kicker: "Per cominciare", title: "Come sai se sei migliorato?", cards: [
      { n: "1", h: "«Mi sento più veloce»", p: "È una sensazione, non una misura." },
      { n: "2", h: "«Ho corso in 8,1 secondi»", p: "Un numero si può confrontare nel tempo." },
      { n: "3", h: "Il test", p: "Una prova standard che trasforma una capacità in un numero.", dark: true }
    ] },

    { t: "key", kicker: "Definizione", title: "Che cos'è un test motorio", lead: "Una prova pratica, eseguita sempre nello stesso modo, che misura una capacità motoria e dà un risultato confrontabile.", defs: [["Test", "la singola prova"], ["Batteria", "un gruppo di test che misura capacità diverse"]] },

    { t: "cards", kicker: "A che cosa servono", title: "Quattro buoni motivi", bg: "blue", grid: 2, cards: [
      { h: "Conoscersi", p: "Scoprire i propri punti forti e quelli da migliorare." },
      { h: "Programmare", p: "Scegliere l'allenamento giusto partendo dal proprio livello." },
      { h: "Verificare", p: "Ripetere il test dopo settimane e vedere se l'allenamento funziona." },
      { h: "Motivare", p: "Vedere i propri progressi dà la voglia di continuare.", dark: true }
    ] },

    { t: "list", kicker: "Un buon test", title: "Le qualità di un test affidabile", items: [
      ["Validità", "Misura davvero la capacità che dichiara."],
      ["Affidabilità", "Ripetuto nelle stesse condizioni, dà risultati simili."],
      ["Oggettività", "Il risultato non dipende da chi misura."],
      ["Standardizzazione", "Regole, spazi e attrezzi sempre uguali."],
      ["Semplicità", "Facile, sicuro, con attrezzi che ci sono in palestra."],
      ["Tabelle di riferimento", "Valori per età e sesso con cui confrontarsi."]
    ] },

    { t: "steps", kicker: "Come si esegue", title: "Le regole del buon test", bg: "blue", steps: [
      { h: "Prima", p: "Riscaldamento, spiegazione e dimostrazione, una prova di prova." },
      { h: "Durante", p: "Massimo impegno, sempre stesse regole. Di solito si fanno 2 prove e vale la migliore." },
      { h: "Dopo", p: "Si registra subito il risultato, con data e condizioni." },
      { h: "Nel tempo", p: "Si ripete nello stesso periodo, stessa ora, stesso luogo." }
    ] },

    { t: "table", kicker: "La batteria Eurofit", title: "Il test europeo per la scuola", head: ["Test", "Che cosa misura"], rows: [
      ["Equilibrio su una gamba (flamingo)", "Equilibrio"],
      ["Plate tapping", "Velocità degli arti superiori"],
      ["Sit and reach", "Flessibilità"],
      ["Salto in lungo da fermo", "Forza esplosiva delle gambe"],
      ["Handgrip, addominali in 30″, sospensione alla sbarra", "Forza della mano, del tronco, delle braccia"],
      ["Navetta 10 × 5 m · navetta 20 m", "Agilità · resistenza aerobica"]
    ], note: "Proposta dal Consiglio d'Europa nel 1988, è ancora la base di molte batterie scolastiche." },

    { t: "points", kicker: "Forza esplosiva", title: "Salto in lungo da fermo", fig: { svg: "salto", cap: "Si misura dalla linea al tallone più vicino" }, items: [
      ["Come:", "piedi dietro la linea, slancio delle braccia, salto a piedi pari."],
      ["Misura:", "dalla linea al punto d'appoggio più arretrato."],
      ["Prove:", "due o tre, vale la migliore."],
      ["Varianti:", "salto in alto da fermo (Sargent), lancio della palla medica per le braccia."]
    ] },

    { t: "points", kicker: "Resistenza aerobica", title: "Il test navetta di Léger", bg: "blue", fig: { svg: "navetta", cap: "Andata e ritorno su 20 metri" }, items: [
      ["Come:", "corri avanti e indietro su 20 metri, arrivando alla linea al «bip»."],
      ["Ritmo:", "parte lento e accelera ogni minuto."],
      ["Fine:", "quando non arrivi alla linea per due volte di seguito."],
      ["Risultato:", "il livello raggiunto, da cui si stima il massimo consumo di ossigeno."]
    ] },

    { t: "formula", kicker: "Un'alternativa", title: "Il test di Cooper", big: "Più metri in <em>12 minuti</em>", caption: "corsa continua su una pista misurata", cols: [
      { h: "Come si esegue", p: "Dopo il riscaldamento, corri per 12 minuti al ritmo più alto che riesci a tenere." },
      { h: "Che cosa si ricava", p: "Dalla distanza si stima la capacità aerobica e si confronta con le tabelle per età e sesso." }
    ] },

    { t: "points", kicker: "Flessibilità", title: "Sit and reach", fig: { svg: "sitreach", cap: "Il risultato si legge in centimetri" }, items: [
      ["Come:", "seduto, gambe tese, piante dei piedi contro la cassetta."],
      ["Movimento:", "spingi le mani in avanti lentamente, senza molleggiare."],
      ["Misura:", "il punto raggiunto, tenuto per 2 secondi."],
      ["Prima:", "un buon riscaldamento: a muscoli freddi il risultato peggiora."]
    ] },

    { t: "cards", kicker: "Velocità e agilità", title: "Altri test di palestra", bg: "blue", grid: 2, cards: [
      { h: "30 metri lanciati o da fermo", p: "Velocità di spostamento, con cronometro o fotocellule." },
      { h: "Navetta 10 × 5 m", p: "Agilità e cambi di direzione." },
      { h: "Illinois agility test", p: "Percorso a slalom tra i coni: agilità." },
      { h: "Tempo di reazione", p: "Afferrare un righello lasciato cadere: più è basso il numero, più sei rapido.", dark: true }
    ] },

    { t: "split", kicker: "Leggere i risultati", title: "Con chi ti confronti?", left: { h: "Con te stesso", items: ["È il confronto più utile", "Mostra quanto sei migliorato", "Non dipende dalla genetica degli altri"] }, right: { h: "Con le tabelle", items: ["Valori medi per età e sesso", "Percentili: «sei al 70° percentile» vuol dire meglio del 70% dei coetanei", "Utili per capire il proprio livello"] }, note: "Un test fotografa un momento: sonno, stanchezza, ciclo, tempo atmosferico e motivazione influenzano il risultato." },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Un test motorio misura una capacità in modo standard e confrontabile.",
      "Un buon test è valido, affidabile, oggettivo e standardizzato.",
      "Riscaldamento, regole uguali e due prove: vale la migliore.",
      "Eurofit: equilibrio, velocità, flessibilità, forza e resistenza in una batteria.",
      "Il confronto più utile è con te stesso, nel tempo."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "Consiglio d'Europa, Eurofit: Handbook for the Eurofit Tests of Physical Fitness, 1988 (2ª ed. 1993).",
      "Topend Sports, «Eurofit Fitness Testing Battery» (topendsports.com).",
      "L. A. Léger e altri, «The multistage 20 metre shuttle run test for aerobic fitness», Journal of Sports Sciences, 1988.",
      "K. H. Cooper, «A means of assessing maximal oxygen intake», JAMA, 1968."
    ] }
  ]
};
