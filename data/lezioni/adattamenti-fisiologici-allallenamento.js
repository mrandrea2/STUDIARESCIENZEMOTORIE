/* LEZIONE UNICA — Adattamenti fisiologici all'allenamento
   Fonti: «Adattamenti a lungo termine ai diversi tipi di allenamento» (prof. Andrea Bertelli); video del prof. sui motori energetici. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["adattamenti-fisiologici-allallenamento"] = {
  titolo: "Come ti cambia l'allenamento",
  sottotitolo: "Adattamenti a lungo termine all'allenamento aerobico, anaerobico, di forza, HIIT e di flessibilità",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quinta", title: "Come ti cambia l'allenamento", sub: "Adattamenti a lungo termine all'allenamento aerobico, anaerobico, di forza, HIIT e di flessibilità" },

    { t: "cards", kicker: "Per cominciare", title: "Stesso corpo, risultati diversi", cards: [
      { n: "1", h: "Il maratoneta", p: "Battito a riposo anche sotto i 40. Corre per ore." },
      { n: "2", h: "Il pesista", p: "Muscoli grossi, ossa dense, forza esplosiva." },
      { n: "3", h: "Il principio", p: "Il corpo si adatta esattamente allo stimolo che riceve.", dark: true }
    ] },

    { t: "split", kicker: "Due tipi di risposta", title: "Aggiustamento e adattamento", left: { h: "Aggiustamento · acuto", items: ["Durante la seduta", "Battito e respiro salgono", "Finisce quando ti fermi"] }, right: { h: "Adattamento · cronico", items: ["Dopo settimane e mesi", "Cambiano cuore, muscoli, ossa, metabolismo", "Specifico per lo stimolo, sinergico se combinato"] } },

    { t: "points", kicker: "Il quadro generale", title: "Che cosa cambia nel corpo", fig: { svg: "adattamenti", cap: "Adattamenti sistemici all'allenamento" }, items: [
      ["Cuore:", "più gittata sistolica, battito a riposo più basso."],
      ["Vasi:", "funzione dell'endotelio migliore, flusso distribuito meglio."],
      ["Muscolo:", "più mitocondri e capillari (aerobico), più miofibrille (forza); le fibre IIx diventano IIa."],
      ["Tessuti:", "tendini e ossa più resistenti con il carico meccanico."],
      ["Metabolismo:", "più sensibilità all'insulina, grassi nel sangue migliori."]
    ] },

    { t: "table", kicker: "1 · Allenamento aerobico", title: "Il motore che dura", head: ["Livello", "Adattamenti"], rows: [
      ["Cuore", "Ipertrofia eccentrica: il ventricolo si allarga e si riempie di più"],
      ["Sangue", "Più plasma e globuli rossi"],
      ["Respiro", "Scambi più efficienti, muscoli respiratori più resistenti"],
      ["Muscolo", "Più mitocondri, capillari (+10–15%) e mioglobina; fibre più ossidative"],
      ["Prestazione", "VO₂max +15–30%, soglia più alta, più economia di corsa"]
    ], note: "Salute: pressione più bassa, colesterolo HDL più alto, trigliceridi più bassi; meno rischio di malattie cardiovascolari e diabete." },

    { t: "split", kicker: "2 · Allenamento anaerobico", title: "Brevi e intensi", left: { h: "Adattamenti", items: ["Il sistema nervoso recluta prima le unità motorie grandi", "Più enzimi della glicolisi e più tamponi (carnosina)", "Più glicogeno e fosfocreatina nel muscolo", "Più trasportatori per smaltire il lattato"] }, right: { h: "Effetti", items: ["Più potenza e velocità", "Tolleri meglio la fatica intensa", "Più massa magra, meno grasso", "Stimolo alla densità ossea con salti e carichi"] } },

    { t: "points", kicker: "3 · Allenamento di forza", title: "Prima i nervi, poi i muscoli", bg: "blue", fig: { svg: "fibre", cap: "Con la forza crescono soprattutto le fibre veloci" }, items: [
      ["Settimane 1–6:", "il sistema nervoso attiva più unità motorie e meglio sincronizzate; meno co-contrazioni degli antagonisti."],
      ["Dopo 3–6 mesi:", "ipertrofia, la sezione del muscolo cresce del 5–10%."],
      ["Nella cellula:", "più sintesi proteica (via mTOR), più actina e miosina."],
      ["Ossa e tendini:", "più densità minerale e più rigidità del tendine."],
      ["Salute:", "previene sarcopenia, osteoporosi e mal di schiena."]
    ] },

    { t: "table", kicker: "4 · Endurance", title: "Il campione di resistenza", head: ["Parametro", "Adattamento"], rows: [
      ["Frequenza a riposo", "Negli atleti d'élite anche 30–40 battiti al minuto"],
      ["Mitocondri", "+20–50%, con più enzimi ossidativi"],
      ["Capillari per fibra", "+15–20%"],
      ["Carburante", "Usa più grassi, risparmia glicogeno: il «muro» arriva più tardi"],
      ["Termoregolazione", "Più plasma: suda prima e raffredda meglio"]
    ], note: "Esempio: il piano di allenamento per una maratona costruisce questi adattamenti settimana dopo settimana." },

    { t: "split", kicker: "5 · HIIT", title: "Intervalli ad alta intensità", left: { h: "Adattamenti", items: ["VO₂max migliora in 8–12 settimane", "Recupero del battito più rapido", "Più mitocondri in meno tempo", "Potenza e tolleranza ai cambi di ritmo"] }, right: { h: "Come e con quali cautele", items: ["Blocchi da 30″ a 4′ intensi, 1–3′ di recupero", "1–2 sedute a settimana", "Serve una base aerobica", "Progressione graduale per evitare infortuni"] } },

    { t: "split", kicker: "6 · Flessibilità", title: "Più ampiezza, meno rigidità", left: { h: "Adattamenti", items: ["Più escursione articolare con 2–3 sedute a settimana per almeno 3–4 settimane", "Più tolleranza all'allungamento", "Il riflesso da stiramento scatta più tardi", "PNF: gli organi di Golgi fanno rilassare il muscolo"] }, right: { h: "Effetti", items: ["Postura migliore, meno dolori da sedentarietà", "Gesti più ampi (squat, calci)", "Rilassamento, meno crampi"] } },

    { t: "table", kicker: "In pratica", title: "Una settimana equilibrata", head: ["Componente", "Quanto", "Adattamento principale"], rows: [
      ["Endurance", "150–300′ moderati o 75–150′ vigorosi", "Mitocondri, capillari, economia"],
      ["Forza", "Almeno 2 sedute, 6–12 ripetizioni", "Miofibrille, ossa, tendini"],
      ["HIIT", "1–2 sedute", "VO₂max e soglia"],
      ["Flessibilità", "10–15′ al giorno o 2–3 sedute", "Escursione articolare"]
    ] },

    { t: "cards", kicker: "Massimizzare gli adattamenti", title: "Le cinque regole", bg: "blue", grid: 2, cards: [
      { h: "Progressione", p: "Carico e volume aumentano gradualmente, a blocchi." },
      { h: "Specificità", p: "Il corpo si adatta ai gesti e ai sistemi energetici che usi." },
      { h: "Recupero", p: "Sonno, idratazione, proteine (1,6–2,2 g/kg se lavori sulla forza)." },
      { h: "Monitoraggio", p: "Fatica percepita, variabilità del battito (HRV), test periodici.", dark: true }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Gli adattamenti cronici sono specifici dello stimolo e si sommano se si combinano.",
      "Aerobico ed endurance: più mitocondri, capillari, plasma; cuore più capiente.",
      "Forza: prima il sistema nervoso, poi l'ipertrofia; ossa e tendini più forti.",
      "HIIT: grandi miglioramenti di VO₂max in poco tempo, ma serve una base.",
      "Il mix ideale è endurance + forza + HIIT + flessibilità, con progressione e recupero."
    ] }
  ]
};
