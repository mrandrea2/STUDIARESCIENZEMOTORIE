/* LEZIONE UNICA — Psicologia dello sport
   Fonti: «Psicologia dello sport» (prof. Andrea Bertelli); «Regolazione delle emozioni nello sport» (prof. E. Rubaltelli, Liceo Galilei 2022). */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["psicologia-dello-sport"] = {
  titolo: "Allenare la mente",
  sottotitolo: "Motivazione, attenzione, arousal, emozioni, flow, routine e obiettivi SMART",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quinta", title: "Allenare la mente", sub: "Motivazione, attenzione, arousal, emozioni, flow, routine e obiettivi SMART" },

    { t: "cards", kicker: "Per cominciare", title: "Stesso fisico, gara diversa", cards: [
      { n: "1", h: "In allenamento", p: "Il tiro libero entra 9 volte su 10." },
      { n: "2", h: "Ultimo secondo, finale", p: "Mani rigide, pensieri veloci, palla sul ferro." },
      { n: "3", h: "La differenza", p: "Non sono cambiati i muscoli: è cambiata la mente.", dark: true }
    ] },

    { t: "split", kicker: "La motivazione", title: "Il carburante dell'impegno", left: { h: "Intrinseca", items: ["Piacere dell'attività", "Voglia di migliorare e di diventare capace", "È la più duratura"] }, right: { h: "Estrinseca", items: ["Premi, medaglie, approvazione degli altri", "Funziona nel breve periodo", "Da sola tende a calare"] }, note: "Teoria dell'autodeterminazione (Deci e Ryan): sentirsi capaci, autonomi e in relazione nutre la motivazione intrinseca. Atkinson distingue chi cerca il successo da chi evita il fallimento." },

    { t: "split", kicker: "Gli obiettivi", title: "Processo e risultato", left: { h: "Obiettivi di processo", items: ["Migliorare il gesto, la tattica, le abilità mentali", "Dipendono solo da te", "Favoriscono l'apprendimento"] }, right: { h: "Obiettivi di risultato", items: ["Vincere, battere un record, qualificarsi", "Motivano ma dipendono anche dagli altri", "Da soli possono generare ansia"] } },

    { t: "points", kicker: "L'attenzione", title: "Il modello di Nideffer", bg: "blue", fig: { svg: "nideffer", cap: "Ampiezza e direzione dell'attenzione" }, items: [
      ["Ampia esterna:", "leggere il campo, la posizione di tutti."],
      ["Ampia interna:", "pianificare la tattica, analizzare la situazione."],
      ["Stretta esterna:", "fissare la palla, il bersaglio, l'avversario."],
      ["Stretta interna:", "ascoltare respiro, sensazioni, emozioni."],
      ["L'atleta esperto:", "passa rapidamente da un tipo all'altro."]
    ] },

    { t: "points", kicker: "L'arousal", title: "Il livello di attivazione", fig: { svg: "arousal", cap: "La curva a U rovesciata" }, items: [
      ["Arousal:", "attivazione fisica e mentale: battito, tensione muscolare, vigilanza."],
      ["Troppo basso:", "apatia, riflessi lenti, poca energia."],
      ["Troppo alto:", "ansia, rigidità, errori di precisione, decisioni affrettate."],
      ["Zona ottimale:", "personale e diversa per ogni sport (modello IZOF di Hanin)."]
    ] },

    { t: "split", kicker: "Gestire l'arousal", title: "Alzare o abbassare il volume", left: { h: "Per attivarti", items: ["Musica ritmata", "Self-talk energico: «Forza! Vai!»", "Riscaldamento dinamico", "Respiri rapidi e profondi"] }, right: { h: "Per calmarti", items: ["Respirazione lenta e controllata", "Rilassamento muscolare progressivo", "Mindfulness", "Immagini rilassanti"] } },

    { t: "points", kicker: "Il flow", title: "L'esperienza ottimale", bg: "blue", fig: { svg: "flow", cap: "Equilibrio tra sfida e abilità" }, items: [
      ["Flow (Csikszentmihalyi):", "lo stato in cui sfida e abilità sono in equilibrio."],
      ["Come si sente:", "sei tutt'uno con l'azione, il tempo sembra cambiare, i movimenti sono fluidi."],
      ["Autotelico:", "l'attività piace in sé, al di là del risultato."],
      ["Come favorirlo:", "obiettivi chiari, sfida calibrata, feedback continuo."]
    ] },

    { t: "cards", kicker: "Le emozioni", title: "Un radar che orienta", grid: 2, cards: [
      { h: "Sono funzionali", p: "Risposte rapide a eventi e pensieri: ci avvicinano a ciò che serve e ci allontanano dai pericoli." },
      { h: "Cambiano la mente", p: "Influenzano ciò che percepiamo e ricordiamo: con la paura tornano in mente gli errori passati." },
      { h: "Sono personali", p: "La stessa situazione provoca emozioni diverse in atleti diversi." },
      { h: "Utili o dannose", p: "Positive e negative possono aiutare o ostacolare: dipende dall'atleta (Hanin).", dark: true }
    ] },

    { t: "table", kicker: "Regolare le emozioni", title: "Il modello di Gross", head: ["Strategia", "Esempio nello sport"], rows: [
      ["Scegliere o modificare la situazione", "Il mezzofondista si mette in testa per non restare chiuso nel gruppo"],
      ["Orientare l'attenzione", "Il tiratore canta mentalmente per non sentire i punteggi dello speaker"],
      ["Rivalutare (strategia cognitiva)", "Vedere la finale come una sfida, non come una minaccia"],
      ["Modulare la risposta", "Respiro, rilassamento muscolare, musica"]
    ], note: "Sopprimere le emozioni funziona poco e costa energia mentale: rivalutare la situazione è più efficace." },

    { t: "split", kicker: "L'intelligenza emotiva", title: "Capire e gestire le emozioni", left: { h: "Verso di sé", items: ["Consapevolezza: riconoscere le proprie emozioni", "Autoregolazione: gestirle sotto pressione"] }, right: { h: "Verso gli altri", items: ["Empatia: capire i compagni", "Abilità sociali: comunicare, risolvere conflitti, guidare"] }, note: "Uno studio sulla Giulietta & Romeo Half Marathon di Verona (Rubaltelli e colleghi, 2018) ha collegato l'intelligenza emotiva a tempi di gara migliori." },

    { t: "cards", kicker: "Routine e rituali", title: "La sicurezza della ripetizione", bg: "blue", grid: 2, cards: [
      { h: "Controllo", p: "Danno la sensazione di poter influenzare la prestazione." },
      { h: "Meno ansia", p: "Azioni note e prevedibili calmano il sistema nervoso." },
      { h: "Attenzione", p: "Portano il focus su ciò che si può controllare." },
      { h: "Esempio", p: "Il cestista: tre palleggi, respiro, sguardo al ferro, tiro. Sempre uguale.", dark: true }
    ] },

    { t: "steps", kicker: "Reagire all'errore", title: "Dall'errore alla crescita", steps: [
      { h: "Riconoscere", p: "Accettare l'errore senza scuse." },
      { h: "Analizzare", p: "Tecnica, tattica, testa o fisico? Che cosa dipendeva da me?" },
      { h: "Reset", p: "Respiro, self-talk: «Il prossimo è mio»." },
      { h: "Correggere", p: "Applicare subito la soluzione e riconoscere il miglioramento." }
    ], lastDark: true },

    { t: "table", kicker: "Obiettivi SMART", title: "Da un sogno a un piano", head: ["Lettera", "Significato", "Esempio"], rows: [
      ["S", "Specifico", "Correre 10 km"],
      ["M", "Misurabile", "In 45 minuti"],
      ["A", "Accessibile", "Oggi li corro in 52"],
      ["R", "Rilevante", "Per qualificarmi alla gara cittadina"],
      ["T", "Temporizzato", "Entro 8 settimane"]
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "La motivazione intrinseca è la più duratura; gli obiettivi di processo dipendono da te.",
      "L'attenzione può essere ampia o stretta, esterna o interna (Nideffer).",
      "Ogni atleta ha la sua zona ottimale di arousal: si alza o si abbassa con tecniche precise.",
      "Rivalutare la situazione regola le emozioni meglio che sopprimerle.",
      "Routine, reazione costruttiva all'errore e obiettivi SMART allenano la mente."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "A. Bertelli, «Psicologia dello sport», Liceo Galilei.",
      "E. Rubaltelli, «Intelligenza emotiva e regolazione delle emozioni», conferenza al Liceo Galilei, 2022.",
      "M. Csikszentmihalyi, Flow. La psicologia dell'esperienza ottimale.",
      "N. Campriani, Ricordati di dimenticare la paura, Mondadori 2013."
    ] }
  ]
};
