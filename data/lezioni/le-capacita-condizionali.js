/* LEZIONE UNICA — Le capacità condizionali
   Fonti: slide del libro di testo su forza, resistenza, velocità e flessibilità + lezioni del prof. Andrea Bertelli. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["le-capacita-condizionali"] = {
  titolo: "Forza, resistenza, velocità, flessibilità",
  sottotitolo: "Le capacità condizionali: che cosa sono, da cosa dipendono e come si allenano",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Le capacità condizionali", sub: "Forza, resistenza, velocità e flessibilità: che cosa sono, da cosa dipendono e come si allenano" },

    { t: "split", kicker: "Il quadro generale", title: "Capacità condizionali e coordinative", left: { h: "Condizionali", items: ["Dipendono soprattutto dai sistemi energetici e dai muscoli", "Forza, resistenza, velocità", "Migliorano con allenamenti di carico"] }, right: { h: "Coordinative", items: ["Dipendono dal sistema nervoso", "Equilibrio, ritmo, orientamento, destrezza", "Migliorano con l'esercizio vario"] }, note: "La flessibilità (mobilità articolare) sta a metà strada. La velocità dipende molto anche dal sistema nervoso." },

    { t: "key", kicker: "1 · La forza", title: "Vincere una resistenza", lead: "La forza è la capacità di vincere o contrastare una resistenza esterna con la contrazione dei muscoli.", defs: [["1RM", "il carico massimo che sollevi una volta sola"], ["Carico relativo", "percentuale del tuo 1RM"]] },

    { t: "cards", kicker: "La forza", title: "Tre tipi di forza", cards: [
      { h: "Massima", p: "Il carico più alto che puoi spostare, senza limiti di tempo. Es. sollevamento pesi." },
      { h: "Veloce · esplosiva", p: "Tanta forza nel minor tempo possibile. Es. salti, lanci, partenze." },
      { h: "Resistente", p: "Mantenere la forza a lungo, resistendo alla fatica. Es. canottaggio, nuoto.", dark: true }
    ] },

    { t: "points", kicker: "La forza", title: "Da che cosa dipende", bg: "blue", fig: { svg: "regimi", cap: "I regimi di contrazione" }, items: [
      ["Fattori strutturali:", "sezione del muscolo e tipo di fibre (veloci o lente)."],
      ["Fattori nervosi:", "quante fibre attivi insieme e quanto in fretta."],
      ["Fattori elastici:", "muscoli e tendini si caricano come molle e restituiscono energia."],
      ["Regimi di contrazione:", "concentrico, eccentrico, isometrico e pliometrico."]
    ] },

    { t: "points", kicker: "Allenare la forza", title: "Carico e ripetizioni giuste", fig: { svg: "forza", cap: "Zone di carico indicative in % di 1RM" }, items: [
      ["Prima la tecnica:", "esecuzione corretta, poi si aggiunge peso."],
      ["Progressività:", "si parte dal carico naturale e da carichi leggeri."],
      ["Recupero:", "2–3 minuti tra le serie pesanti, meno per la forza resistente."],
      ["Da giovani:", "corpo libero, palle mediche, elastici e balzi. I carichi massimali dopo lo sviluppo."]
    ] },

    { t: "key", kicker: "2 · La resistenza", title: "Durare contro la fatica", lead: "La resistenza è la capacità di sostenere uno sforzo il più a lungo possibile e di recuperare in fretta.", defs: [["Generale", "coinvolge oltre un sesto dei muscoli"], ["Specifica", "quella che serve nel tuo sport"]] },

    { t: "points", kicker: "La resistenza", title: "Breve, media, lunga", bg: "blue", fig: { svg: "resistenza", cap: "Classificazione secondo la durata" }, items: [
      ["Breve (45″–2′):", "prevale il sistema lattacido."],
      ["Media (2′–8′):", "lattacido e aerobico si dividono il lavoro."],
      ["Lunga (oltre 8′):", "prevale il sistema aerobico."],
      ["Dipende da:", "cuore, polmoni, capillari, mitocondri, carburante e forza di volontà."]
    ] },

    { t: "cards", kicker: "Allenare la resistenza", title: "Quattro metodi", grid: 2, cards: [
      { h: "Continuo", p: "Corsa lunga a ritmo costante o con cambi di velocità (fartlek)." },
      { h: "Intervallato", p: "Tratti veloci alternati a recuperi incompleti." },
      { h: "Ripetute", p: "Prove intense con recuperi quasi completi." },
      { h: "Circuit training", p: "Stazioni di esercizi diversi una dopo l'altra.", accent: true }
    ], note: "Effetti: cuore più efficiente, più capillari e mitocondri, recupero più veloce. Tra i 10 e i 15 anni la resistenza aerobica si allena molto bene." },

    { t: "key", kicker: "3 · La velocità", title: "Il più in fretta possibile", lead: "La velocità è la capacità di compiere azioni motorie nel minor tempo possibile.", defs: [["Rapidità", "reagire e muoversi in fretta, senza carico"], ["Velocità", "rapidità + forza: muovere il corpo nello spazio"]] },

    { t: "points", kicker: "La velocità", title: "Le sue forme", fig: { svg: "velocita", cap: "Dal segnale al movimento" }, items: [
      ["Di reazione:", "semplice (un segnale noto, es. lo sparo) o complessa (scegliere, es. parare un rigore)."],
      ["Gestuale:", "eseguire un singolo gesto in fretta, es. un pugno."],
      ["Di frequenza:", "ripetere un movimento il più rapidamente possibile."],
      ["Di spostamento:", "ciclica (corsa) o aciclica (cambi di direzione)."]
    ] },

    { t: "cards", kicker: "Allenare la velocità", title: "Brevi, freschi, al massimo", bg: "blue", grid: 2, cards: [
      { n: "6–8 s", h: "Durata delle prove", p: "Oltre, la velocità cala e non stai più allenando la velocità." },
      { n: "1 min", h: "Recupero ogni 10 m", p: "Recupero completo: ogni prova va fatta al massimo." },
      { h: "Quando", p: "All'inizio della seduta, dopo il riscaldamento, mai da stanchi." },
      { h: "A che età", p: "Tra gli 8 e i 16 anni il sistema nervoso risponde moltissimo.", dark: true }
    ] },

    { t: "key", kicker: "4 · La flessibilità", title: "Muoversi in tutta l'ampiezza", lead: "La flessibilità è la capacità di eseguire movimenti con la massima escursione articolare.", defs: [["Mobilità articolare", "dipende dalle articolazioni"], ["Estensibilità", "dipende da muscoli e tendini"]] },

    { t: "points", kicker: "La flessibilità", title: "Attiva e passiva", bg: "blue", fig: { svg: "flessibilita", cap: "Escursione articolare attiva e passiva" }, items: [
      ["Attiva:", "raggiungi l'ampiezza solo con i tuoi muscoli."],
      ["Passiva:", "con un aiuto esterno (compagno, peso, attrezzo): è sempre più ampia."],
      ["Dipende da:", "articolazioni, muscoli, temperatura, ora del giorno, età e sesso."],
      ["Da sapere:", "cala con l'età e si allena meglio tra gli 11 e i 14 anni."]
    ] },

    { t: "table", kicker: "Allenare la flessibilità", title: "Tre modi di allungarsi", head: ["", "Come", "Quando"], rows: [
      ["Stretching statico", "Allungamento lento, tenuto 20–30 s", "Nel defaticamento"],
      ["Stretching dinamico", "Slanci e circonduzioni controllati", "Nel riscaldamento"],
      ["PNF", "Contrai 6–8 s, rilassa, allunga 20–30 s", "Con un compagno esperto"]
    ], note: "Mai molleggiare in fondo al movimento e mai arrivare al dolore: l'allungamento deve tirare, non fare male." },

    { t: "cards", kicker: "E nel tuo sport?", title: "Ogni sport ha la sua ricetta", grid: 2, line: true, cards: [
      { h: "Velocisti e saltatori", p: "Forza esplosiva e velocità." },
      { h: "Fondisti e nuotatori", p: "Resistenza aerobica e forza resistente." },
      { h: "Ginnasti e ballerini", p: "Flessibilità e forza relativa al peso." },
      { h: "Sport di squadra", p: "Un po' di tutto: scatti, cambi di direzione e recupero." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Le capacità condizionali sono forza, resistenza e velocità; la flessibilità sta a metà strada.",
      "La forza può essere massima, esplosiva o resistente e si allena in % del massimale.",
      "La resistenza si divide per durata: breve, media e lunga.",
      "La velocità si allena con prove brevissime, al massimo e con recupero completo.",
      "La flessibilità si allena con lo stretching, mai fino al dolore."
    ] }
  ]
};
