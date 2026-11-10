/* LEZIONE UNICA — L'apprendimento motorio (classe quarta)
   Testi originali del prof. Andrea Bertelli, rielaborati dal libro di testo in adozione
   («Apprendimento e controllo motorio») e dai manuali citati nelle fonti.
   Si collega a «Le capacità coordinative» (classe terza). */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["l-apprendimento-motorio"] = {
  titolo: "Come si impara un gesto",
  sottotitolo: "Teorie e metodi dell'apprendimento motorio",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quarta", title: "Come si impara un gesto", sub: "Teorie e metodi dell'apprendimento motorio" },

    { t: "cards", kicker: "Per cominciare", title: "Imparare non è riuscire una volta", cards: [
      { n: "1", h: "Dalla terza", p: "Le capacità coordinative dipendono dal sistema nervoso. L'apprendimento motorio è la prima di tutte." },
      { n: "2", h: "Che cos'è", p: "Un cambiamento relativamente stabile nel saper eseguire un gesto, dovuto a pratica ed esperienza." },
      { n: "3", h: "Prestazione ≠ apprendimento", p: "Una giornata buona non basta: si verifica giorni dopo (ritenzione) e in situazioni nuove (transfer).", dark: true }
    ] },

    { t: "points", kicker: "Il controllo motorio", title: "Anello aperto e anello chiuso", fig: { svg: "anello", cap: "Due modi di guidare il movimento" }, items: [
      ["Anello aperto:", "il programma parte e arriva ai muscoli senza correzioni. Serve nei gesti rapidi: un pugno, la battuta, uno smash."],
      ["Anello chiuso:", "le informazioni dei sensi tornano al cervello e correggono il gesto mentre avviene. Serve nei gesti lenti e precisi: l'equilibrio sulla trave."],
      ["Perché i due modi:", "il feedback impiega tempo. Se il gesto dura meno di circa due decimi di secondo, non c'è tempo per correggerlo."],
      ["Nella realtà:", "si combinano. Il tiro parte ad anello aperto, la rincorsa si aggiusta ad anello chiuso."]
    ] },

    { t: "steps", kicker: "Le teorie", title: "Tre modi di spiegare l'apprendimento", steps: [
      { h: "Adams (1971): circuito chiuso", p: "Il gesto nasce da una traccia di memoria e viene confrontato con la traccia percettiva, il «come deve sentirsi». Si impara riducendo l'errore." },
      { h: "Schmidt (1975): teoria dello schema", p: "Nella memoria non c'è ogni singolo gesto, ma un programma generale e delle regole (schemi) per adattarlo. La pratica variata rinforza lo schema." },
      { h: "Approccio ecologico", p: "Bernstein, Gibson, Newell: il movimento nasce dall'incontro tra individuo, compito e ambiente. L'allievo esplora e trova la sua soluzione." }
    ], lastDark: true },

    { t: "split", kicker: "Schmidt", title: "Il programma motorio generalizzato", left: { h: "Che cosa resta uguale", items: ["L'ordine delle fasi del gesto", "Il ritmo interno (tempi relativi)", "La distribuzione della forza tra le fasi"] }, right: { h: "Che cosa puoi cambiare", items: ["La durata totale: lento o veloce", "La forza totale: piano o forte", "Il segmento: mano destra, sinistra, piede"] }, note: "Prova: scrivi la tua firma piccola sul foglio, poi grande alla lavagna. È la stessa firma: cambia il parametro, non il programma." },

    { t: "split", kicker: "Bernstein", title: "Liberare i gradi di libertà", left: { h: "Il principiante", items: ["Blocca molte articolazioni", "Gesto rigido, «a pezzi»", "Così ha meno cose da controllare"] }, right: { h: "L'esperto", items: ["Libera le articolazioni", "Sfrutta elasticità e slancio", "Gesto fluido ed economico"] }, note: "Il corpo ha tantissimi modi di eseguire un gesto (gradi di libertà). Imparare significa organizzarli, prima riducendoli e poi sfruttandoli." },

    { t: "cards", kicker: "Le fasi", title: "Due modelli, stessa strada", bg: "blue", grid: 3, cards: [
      { n: "1", h: "Cognitiva · grezza", p: "Capisci che cosa fare. Pensi a ogni dettaglio, il gesto è rigido e pieno di errori." },
      { n: "2", h: "Associativa · fine", p: "Colleghi le parti. Gli errori calano e il gesto diventa fluido in condizioni note." },
      { n: "3", h: "Autonoma · disponibilità variabile", p: "Il gesto va da solo e si adatta. La mente resta libera per leggere il gioco.", dark: true }
    ], note: "Fitts e Posner (1967) guardano alla mente; Meinel e Schnabel guardano alla qualità del gesto." },

    { t: "points", kicker: "La memoria motoria", title: "Dove si conservano i gesti", fig: { svg: "fasi", cap: "Con la pratica il gesto passa alla memoria a lungo termine" }, items: [
      ["Memoria sensoriale:", "trattiene per un attimo ciò che vedi e senti."],
      ["Memoria a breve termine:", "pochi elementi per pochi secondi: per questo una spiegazione lunga non si ricorda."],
      ["Memoria a lungo termine:", "procedurale (saper fare) e dichiarativa (sapere che cosa). I gesti stanno nella procedurale: per questo non si dimentica come si va in bici."],
      ["Il sonno:", "durante la notte il cervello consolida ciò che hai praticato di giorno."]
    ] },

    { t: "cards", kicker: "Il feedback", title: "Correggere, ma non troppo", grid: 2, cards: [
      { h: "Intrinseco ed estrinseco", p: "Il primo sono le tue sensazioni; il secondo arriva da insegnante, compagno o video." },
      { h: "Risultato e prestazione", p: "«Fuori di un metro» è conoscenza del risultato. «Il gomito era basso» è conoscenza della prestazione." },
      { h: "Il rischio", p: "Un feedback dopo ogni prova crea dipendenza: senza l'insegnante il gesto peggiora." },
      { h: "La soluzione", p: "Ridurlo man mano, aspettare qualche secondo perché l'allievo si autovaluti, lasciare che sia lui a chiederlo.", dark: true }
    ] },

    { t: "split", kicker: "Organizzare la pratica", title: "Più difficile oggi, meglio domani", left: { h: "A blocchi e costante", items: ["Ripeti lo stesso gesto tante volte di fila", "Migliora subito la prestazione", "Si dimentica più in fretta"] }, right: { h: "Casuale e variata", items: ["Alterni gesti e condizioni diverse", "Più errori durante la seduta", "Più apprendimento e transfer nel tempo"] }, note: "È l'interferenza contestuale: dover ricostruire il gesto ogni volta costringe il cervello a lavorare di più. Anche distribuire la pratica in più sedute brevi funziona meglio di una seduta lunghissima." },

    { t: "points", kicker: "L'attenzione", title: "Dove guardi cambia come impari", bg: "blue", items: [
      ["Focus interno:", "pensare al corpo, «piega il polso». Spesso irrigidisce il gesto."],
      ["Focus esterno:", "pensare all'effetto, «manda la palla dentro il canestro». Di solito porta a gesti più fluidi ed efficaci (G. Wulf)."],
      ["Esplicito e implicito:", "una lista di regole contro un'immagine o un gioco. Ciò che si impara in modo implicito regge meglio sotto pressione."],
      ["Le analogie:", "«spingi la palla come se la mettessi su uno scaffale alto» riassume tante regole in una."]
    ] },

    { t: "cards", kicker: "Imparare guardando", title: "Osservare, immaginare, imitare", grid: 3, cards: [
      { h: "Dimostrazione", p: "Vedere il gesto prima di provarlo. Funziona anche il modello «che sbaglia e corregge»." },
      { h: "Neuroni specchio", p: "Scoperti a Parma (G. Rizzolatti): si attivano quando agisci e quando guardi qualcuno agire." },
      { h: "Immaginazione motoria", p: "Ripassare il gesto a occhi chiusi attiva aree simili alla pratica reale. Aiuta, ma non la sostituisce.", dark: true }
    ] },

    { t: "list", kicker: "Il transfer", title: "Quando un gesto ne aiuta un altro", items: [
      ["Positivo", "Il lancio della palla da baseball aiuta il servizio del tennis: fasi simili."],
      ["Negativo", "Chi viene dal tennis piega il polso nel badminton nel momento sbagliato."],
      ["Bilaterale", "Allenare la mano destra migliora un po' anche la sinistra."],
      ["Nella didattica", "Si parte dai gesti che hanno elementi in comune e si separano quelli che si disturbano."]
    ] },

    { t: "points", kicker: "L'approccio ecologico", title: "Cambia il compito, cambia il gesto", items: [
      ["I vincoli (Newell):", "dell'individuo (statura, forza), del compito (regole, attrezzo), dell'ambiente (spazio, terreno)."],
      ["L'insegnante come regista:", "invece di spiegare tutto, modifica i vincoli: campo più piccolo, palla più leggera, rete più bassa."],
      ["Un esempio:", "nel minivolley il pallone leggero e il campo ridotto fanno nascere da soli il palleggio giusto."],
      ["Affordance (Gibson):", "l'ambiente «suggerisce» le azioni possibili: uno spazio libero invita a correre, un compagno smarcato a passare."]
    ] },

    { t: "list", kicker: "Il collegamento", title: "Con le capacità coordinative", items: [
      ["Apprendimento", "È la capacità coordinativa generale di base: più gesti conosci, più in fretta ne impari di nuovi."],
      ["Controllo e adattamento", "Corrispondono all'anello chiuso e alla disponibilità variabile."],
      ["Capacità speciali", "Differenziazione, ritmo, orientamento: sono i parametri che il programma motorio regola."],
      ["Periodi sensibili", "Tra i 7 e i 13 anni la coordinazione cresce più in fretta: per questo conta fare tanti sport da piccoli."]
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Apprendere significa cambiare in modo stabile: si verifica con ritenzione e transfer, non con una sola prova.",
      "Gesti rapidi ad anello aperto, gesti lenti e precisi ad anello chiuso.",
      "Schmidt: un programma motorio generalizzato con parametri che si adattano; la pratica variata rinforza lo schema.",
      "Fasi: cognitiva, associativa, autonoma. Grezza, fine, disponibilità variabile.",
      "Pratica variata, feedback ridotto gradualmente e focus esterno favoriscono l'apprendimento."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "Libro di testo in adozione: capitolo «Apprendimento e controllo motorio» (rielaborazione del prof. A. Bertelli).",
      "R. A. Schmidt, T. D. Lee, Controllo motorio e apprendimento, Calzetti Mariucci.",
      "R. A. Magill, D. Anderson, Motor Learning and Control, McGraw-Hill.",
      "G. Wulf, Attention and Motor Skill Learning, Human Kinetics.",
      "K. Meinel, G. Schnabel, Teoria del movimento, SSS Roma."
    ] }
  ]
};
