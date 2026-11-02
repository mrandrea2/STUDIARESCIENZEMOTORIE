/* LEZIONE UNICA — Teoria dell'allenamento
   Fonti: «Teoria dell'allenamento» (prof. Andrea Bertelli) + slide del libro di testo. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["teoria-dellallenamento"] = {
  titolo: "Allenarsi bene",
  sottotitolo: "Carico, recupero, supercompensazione e i principi per migliorare senza farsi male",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Allenarsi bene", sub: "Carico, recupero, supercompensazione e i principi per migliorare senza farsi male" },

    { t: "cards", kicker: "Per cominciare", title: "Basta allenarsi tanto?", cards: [
      { n: "1", h: "Sempre la stessa corsa", p: "Dopo un mese non migliori più. Perché?" },
      { n: "2", h: "Tutti i giorni a tutta", p: "Ti senti sempre più stanco e vai più piano." },
      { n: "3", h: "Allenarsi è una scienza", p: "Servono il carico giusto e il recupero giusto.", dark: true }
    ] },

    { t: "split", kicker: "Definizioni", title: "Teoria e scienza dell'allenamento", left: { h: "Allenamento", items: ["Processo pianificato e graduale", "Per migliorare la prestazione o la salute", "Con stimoli ripetuti nel tempo"] }, right: { h: "Allenabilità", items: ["Quanto una persona risponde agli stimoli", "Fattori endogeni: genetica, età, sesso", "Fattori esogeni: alimentazione, sonno, ambiente"] }, note: "Teoria dell'allenamento = l'insieme delle regole pratiche. Scienza dell'allenamento = le basi di fisiologia, biomeccanica e psicologia." },

    { t: "steps", kicker: "Come reagisce il corpo", title: "Omeostasi, aggiustamento, adattamento", steps: [
      { h: "Omeostasi", p: "Il corpo tende a mantenere un equilibrio interno stabile." },
      { h: "Aggiustamento", p: "Durante lo sforzo cambia subito: battito e respiro salgono. Poi tutto torna come prima." },
      { h: "Adattamento", p: "Se lo stimolo si ripete, il corpo cambia in modo duraturo: diventa più capace." }
    ] },

    { t: "points", kicker: "Il principio base", title: "La supercompensazione", bg: "blue", fig: { svg: "supercomp", cap: "Carico, recupero e supercompensazione" }, items: [
      ["Carico:", "l'allenamento ti affatica e abbassa le tue capacità."],
      ["Recupero:", "il corpo ripara e ricarica le scorte."],
      ["Supercompensazione:", "per qualche tempo sei più forte di prima."],
      ["Il segreto:", "il nuovo allenamento va fatto proprio in quel momento. Troppo presto accumuli fatica, troppo tardi perdi il guadagno."]
    ] },

    { t: "split", kicker: "Il carico", title: "Quanto pesa un allenamento", left: { h: "Carico esterno", items: ["Quello che fai", "Volume: quanto (km, ripetizioni, minuti)", "Intensità: quanto forte (velocità, chili)", "Densità: quanto recupero tra le prove"] }, right: { h: "Carico interno", items: ["Quanto ti costa", "Frequenza cardiaca", "Fatica percepita (scala da 1 a 10)", "Lo stesso esercizio pesa diversamente su persone diverse"] } },

    { t: "points", kicker: "La regola dello stimolo", title: "Né troppo poco, né troppo", fig: { svg: "soglie", cap: "Effetto dello stimolo secondo l'intensità" }, items: [
      ["Debole:", "non produce effetti."],
      ["Medio:", "mantiene il livello che hai."],
      ["Forte:", "fa migliorare: è lo stimolo allenante."],
      ["Eccessivo:", "danneggia e porta al sovrallenamento."]
    ] },

    { t: "cards", kicker: "Quando si esagera", title: "Il sovrallenamento", dark: true, lead: "Troppo carico e troppo poco recupero per settimane: la prestazione cala invece di crescere.", cards: [
      { h: "Segnali", p: "Stanchezza continua, sonno disturbato, battito alto a riposo, umore nero, infortuni." },
      { h: "Cosa fare", p: "Ridurre il carico, dormire, mangiare bene. Il recupero fa parte dell'allenamento.", accent: true }
    ] },

    { t: "list", kicker: "I principi dell'allenamento", title: "Le sette regole d'oro", bg: "blue", items: [
      ["Progressività", "Il carico aumenta piano piano."],
      ["Continuità", "Meglio poco e spesso che tanto ogni tanto."],
      ["Individualizzazione", "Ognuno ha i suoi tempi e il suo livello."],
      ["Specificità", "Si migliora in ciò che si allena."],
      ["Varietà", "Cambiare stimoli evita noia e stalli."],
      ["Alternanza carico-recupero", "Il miglioramento avviene durante il riposo."],
      ["Multilateralità", "Da giovani, tante attività diverse prima di specializzarsi."]
    ] },

    { t: "split", kicker: "Mezzi e metodi", title: "Con che cosa ci si allena", left: { h: "Mezzi", items: ["Generali: corsa, ginnastica, esercizi a corpo libero", "Speciali: esercizi simili al gesto di gara", "Specifici: il gesto di gara stesso"] }, right: { h: "Metodi", items: ["Il modo di organizzare il lavoro", "Continuo, intervallato, a ripetute, a circuito", "Si scelgono in base all'obiettivo"] }, note: "Contenuti = che cosa alleno. Mezzi = con quali esercizi. Metodi = come li organizzo." },

    { t: "points", kicker: "La seduta", title: "Le tre parti di ogni allenamento", fig: { svg: "seduta", cap: "Riscaldamento, parte centrale, defaticamento" }, items: [
      ["Riscaldamento:", "prepara cuore, muscoli e testa."],
      ["Parte centrale:", "il lavoro vero, sull'obiettivo del giorno."],
      ["Defaticamento:", "corsa lenta e allungamento per tornare alla calma e recuperare prima."]
    ] },

    { t: "cards", kicker: "Il riscaldamento", title: "Perché non si salta mai", bg: "blue", grid: 2, cards: [
      { h: "Scalda i muscoli", p: "Sale la temperatura: i muscoli diventano più elastici e veloci." },
      { h: "Prepara cuore e respiro", p: "Più sangue e più ossigeno arrivano subito ai muscoli." },
      { h: "Risveglia i nervi", p: "Riflessi e coordinazione migliorano." },
      { h: "Previene gli infortuni", p: "Muscoli e tendini caldi si strappano meno.", dark: true }
    ], note: "Generale (corsa, mobilità) + specifico (gesti del tuo sport). Dura 15–20 minuti e cresce di intensità." },

    { t: "steps", kicker: "Programmare", title: "Dalla seduta alla stagione", steps: [
      { h: "Seduta", p: "Il singolo allenamento." },
      { h: "Microciclo", p: "Una settimana di sedute." },
      { h: "Mesociclo", p: "3–6 settimane con un obiettivo." },
      { h: "Macrociclo", p: "Tutta la stagione, verso le gare importanti." }
    ], lastDark: true },

    { t: "cards", kicker: "Età e sesso", title: "Allenare i giovani, allenare tutti", grid: 2, line: true, cards: [
      { h: "Prima dello sviluppo", p: "Giochi, coordinazione, rapidità, tanti sport diversi." },
      { h: "Durante e dopo lo sviluppo", p: "Si inseriscono gradualmente forza e resistenza specifica." },
      { h: "Ragazze e ragazzi", p: "Stessi principi; cambiano i valori medi di forza e la composizione corporea." },
      { h: "Non bruciare le tappe", p: "Chi si specializza troppo presto rischia infortuni e abbandono." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Allenarsi significa dare stimoli ripetuti che il corpo trasforma in adattamenti.",
      "Supercompensazione: dopo carico e recupero sei più forte di prima, per un po'.",
      "Lo stimolo deve essere forte quanto basta: troppo poco non serve, troppo fa male.",
      "Progressività, continuità, individualizzazione e alternanza carico-recupero sono le regole base.",
      "Ogni seduta ha riscaldamento, parte centrale e defaticamento."
    ] }
  ]
};
