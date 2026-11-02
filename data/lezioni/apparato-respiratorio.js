/* LEZIONE UNICA — Apparato respiratorio
   Fonti: «Il respiro e lo sport» (prof. Andrea Bertelli) + slide del libro di testo.
   Tipi di slide: cover, cards, key, stack, stats, formula, split, table, steps, list, end */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["apparato-respiratorio"] = {
  titolo: "Il respiro e lo sport",
  sottotitolo: "Vie aeree, volumi polmonari, scambi gassosi e cosa succede quando ci muoviamo",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Il respiro e lo sport", sub: "Vie aeree, volumi polmonari, scambi gassosi e cosa succede quando ci muoviamo" },

    { t: "cards", kicker: "Per cominciare", title: "Quanta aria sposti in un respiro?", cards: [
      { n: "1", h: "Respiro normale", p: "Inspira ed espira come fai seduto al banco." },
      { n: "2", h: "Respiro massimo", p: "Riempi i polmoni il più possibile." },
      { n: "3", h: "Butta fuori tutto", p: "Ti sembra di essere vuoto? Qualcosa resta sempre…", dark: true }
    ] },

    { t: "steps", kicker: "Il quadro generale", title: "La respirazione in quattro fasi", steps: [
      { h: "Ventilazione", p: "L'aria entra ed esce dai polmoni (respirazione esterna)." },
      { h: "Diffusione", p: "O₂ e CO₂ passano tra alveoli e sangue." },
      { h: "Trasporto", p: "Il sangue porta i gas tra polmoni e tessuti." },
      { h: "Respirazione cellulare", p: "Nei mitocondri l'O₂ serve a produrre ATP (respirazione interna)." }
    ] },

    { t: "list", kicker: "Le vie aeree", title: "Il viaggio dell'aria", bg: "blue", fig: { svg: "polmoni", cap: "Vie aeree, polmoni e diaframma" }, items: [
      ["Naso", "Filtra, riscalda e umidifica l'aria."],
      ["Faringe", "Crocevia tra vie aeree e digerenti."],
      ["Laringe", "Contiene le corde vocali; l'epiglottide chiude la trachea quando deglutisci."],
      ["Trachea", "Tubo rinforzato da anelli di cartilagine."],
      ["Bronchi e bronchioli", "Si ramificano come un albero rovesciato."],
      ["Alveoli", "Circa 300 milioni di sacchetti avvolti dai capillari: qui avvengono gli scambi."]
    ] },

    { t: "split", kicker: "I polmoni", title: "Due polmoni avvolti dalle pleure", lead: "Il polmone destro è più voluminoso: ha tre lobi. Il sinistro ne ha due, per lasciare spazio al cuore.", left: { h: "Pleura viscerale", items: ["Foglietto interno", "Aderisce al polmone"] }, right: { h: "Pleura parietale", items: ["Foglietto esterno", "Aderisce alla parete del torace"] }, note: "Tra i due foglietti c'è il liquido pleurico: fa scorrere i polmoni e li tiene «attaccati» al torace mentre si espande." },

    { t: "split", kicker: "La meccanica respiratoria", title: "Chi muove l'aria?", bg: "blue", fig: { svg: "diaframma", cap: "Il diaframma è il motore del respiro" }, left: { h: "Inspirazione · sempre attiva", items: ["Diaframma: si contrae e scende", "Intercostali esterni: sollevano le coste", "Muscoli accessori sotto sforzo (scaleni, sternocleidomastoideo)"] }, right: { h: "Espirazione · a riposo passiva", items: ["A riposo: i muscoli si rilassano e il polmone torna indietro", "Sotto sforzo: addominali", "Intercostali interni: abbassano le coste"] }, note: "Inspirazione + espirazione = atto respiratorio. I muscoli adeguano la ventilazione ai bisogni: si elimina tanta CO₂ quanta se ne produce." },

    { t: "key", kicker: "Automatica e volontaria", title: "L'unica funzione che puoi anche comandare", lead: "Il respiro è automatico, ma puoi cambiarne volontariamente ampiezza e frequenza.", defs: [["Apnea inspiratoria", "a polmoni pieni: anche qualche minuto"], ["Apnea espiratoria", "a polmoni vuoti: pochi secondi"]] },

    { t: "key", kicker: "L'idea chiave", title: "I polmoni sono un serbatoio con una riserva", lead: "A riposo usiamo solo una piccola parte. Il resto si apre quando serve: nello sport.", defs: [["Volumi", "i singoli «strati» del serbatoio"], ["Capacità", "somme di due o più volumi"]] },

    { t: "stack", kicker: "Volumi polmonari", title: "A riposo usiamo solo 0,5 L su circa 6", rows: [
      { abbr: "VRI", h: "Riserva inspiratoria", v: "circa 3000 mL", p: "aria in più che posso inspirare", size: 3000 },
      { abbr: "VC", h: "Volume corrente", v: "circa 500 mL", p: "un respiro normale", size: 500, hl: true },
      { abbr: "VRE", h: "Riserva espiratoria", v: "circa 1100 mL", p: "aria in più che posso espirare", size: 1100 },
      { abbr: "VR", h: "Volume residuo", v: "circa 1200 mL", p: "non esce mai", size: 1200, dark: true }
    ], note: "Sotto sforzo il volume corrente si allarga dentro le due riserve; il volume residuo resta uguale. Valori medi di un adulto giovane, circa 20–25% in meno nelle ragazze." },

    { t: "stats", kicker: "Capacità polmonari", title: "Le capacità sono somme di volumi", bg: "blue", grid: 2, stats: [
      { big: "CV · 4600 mL", h: "Capacità vitale = VRI + VC + VRE", p: "Tutta l'aria che espiro dopo aver inspirato al massimo." },
      { big: "CPT · 5800 mL", h: "Capacità polmonare totale = CV + VR", p: "Tutta l'aria contenuta a polmoni pieni.", blue: true },
      { big: "CI · 3500 mL", h: "Capacità inspiratoria = VC + VRI", p: "Il massimo che inspiro partendo da un'espirazione normale." },
      { big: "CFR · 2300 mL", h: "Capacità funzionale residua = VRE + VR", p: "L'aria nei polmoni alla fine di un'espirazione normale.", blue: true }
    ] },

    { t: "formula", kicker: "Ventilazione al minuto", title: "Quanta aria muoviamo in un minuto", big: "0,5 L × 12 = <em>6 L/min</em>", caption: "volume corrente × respiri al minuto", cols: [
      { h: "Spazio morto: 150 mL", p: "Aria che resta in naso, trachea e bronchi e non arriva agli alveoli." },
      { h: "Lento e profondo vince", p: "(500 − 150) × 12 = 4,2 L/min arrivano davvero agli alveoli." }
    ] },

    { t: "split", kicker: "Scambi gassosi", title: "I gas passano da soli: diffusione", fig: { svg: "alveolo", cap: "Scambio tra alveolo e capillare" }, lead: "Da dove la pressione parziale è alta a dove è bassa: nessuna pompa, basta una membrana sottilissima.", arrow: true,
      left: { h: "Nel polmone · respirazione esterna", items: ["O₂ dall'alveolo al sangue", "CO₂ dal sangue all'alveolo", "PO₂ circa 100 mmHg nell'alveolo contro 40 nel sangue venoso"] },
      right: { h: "Nel muscolo · respirazione interna", items: ["O₂ dal sangue al muscolo", "CO₂ dal muscolo al sangue", "Nei mitocondri l'O₂ serve a produrre ATP"] } },

    { t: "stats", kicker: "Trasporto nel sangue", title: "Come viaggiano O₂ e CO₂", stats: [
      { big: "98%", h: "dell'O₂ sull'emoglobina", p: "dei globuli rossi; il resto è disciolto nel plasma.", blue: true },
      { big: "70%", h: "della CO₂ come bicarbonato", p: "circa il 20% sull'emoglobina, il resto disciolta." },
      { big: "Effetto Bohr", h: "", p: "Nel muscolo che lavora ci sono più CO₂, acidità e calore. L'emoglobina «molla» più ossigeno proprio dove serve.", dark: true }
    ] },

    { t: "table", kicker: "Il respiro sotto sforzo", title: "Respiri più profondi, poi più frequenti", head: ["", "Riposo", "Moderato", "Massimale"], rows: [
      ["Volume corrente", "0,5 L", "1,5–2 L", "2,5–3 L"],
      ["Respiri al minuto", "12–16", "25–30", "40–50"],
      ["Ventilazione", "6–8 L/min", "40–60 L/min", "100–150 L/min"]
    ], note: "Il volume corrente «mangia» entrambe le riserve; il volume residuo non cambia. Gli atleti di resistenza arrivano fino a 180 L/min." },

    { t: "steps", kicker: "Le fasi della risposta", title: "Dall'avvio al recupero, in quattro tempi", bg: "white", lastDark: true, steps: [
      { h: "Avvio", p: "Sale di colpo al primo secondo: è il comando nervoso, prima che il sangue cambi." },
      { h: "Adattamento", p: "Nei 2–3 minuti dopo sale piano, guidata da CO₂, acidità e calore." },
      { h: "Stato stabile", p: "A ritmo costante si stabilizza: domanda e offerta si equilibrano." },
      { h: "Recupero", p: "Cala subito un po', poi lentamente: si «ripaga» il debito di ossigeno." }
    ] },

    { t: "cards", kicker: "Le soglie ventilatorie", title: "Il talk test: riesci a parlare?", dark: true, lead: "A un certo punto il respiro sale più del consumo di O₂: il corpo tampona l'acido lattico e produce CO₂ in più da eliminare.", cards: [
      { h: "Prima soglia", p: "Respiro più marcato, ma parli ancora a frasi intere. Zona della resistenza di base." },
      { h: "Seconda soglia", p: "Dici solo parole singole. Sforzo sostenibile per pochi minuti: zona delle ripetute.", accent: true }
    ] },

    { t: "cards", kicker: "Con l'allenamento", title: "Il polmone cambia poco, il respiro molto", bg: "blue", grid: 2, cards: [
      { h: "Muscoli respiratori più forti", p: "E più resistenti: si affaticano meno." },
      { h: "Più lento e profondo", p: "A parità di sforzo: meno spazio morto sprecato." },
      { h: "Ventilazione massima più alta", p: "E soglie spostate in avanti." },
      { h: "Volumi statici quasi uguali", p: "Un po' di più in nuoto e apnea." }
    ], note: "In un ragazzo sano, al livello del mare, di solito limitano prima cuore e muscoli, non il respiro." },

    { t: "cards", kicker: "E nel tuo sport?", title: "Ogni sport usa il respiro a modo suo", grid: 2, line: true, cards: [
      { h: "Pallavolo e tennis", p: "Sforzi brevi e pause: conta il recupero tra un punto e l'altro." },
      { h: "Nuoto", p: "Si respira a tempo con le bracciate; allena i muscoli respiratori." },
      { h: "Corsa di resistenza", p: "Ritmo costante sotto soglia: respiro regolare e controllato." },
      { h: "Alta quota", p: "L'aria ha meno O₂: si respira di più anche da fermi." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "L'aria arriva agli alveoli attraverso le vie aeree, che la filtrano, scaldano e umidificano.",
      "Il diaframma è il motore dell'inspirazione; a riposo l'espirazione è passiva.",
      "A riposo usiamo 0,5 L su circa 6: sotto sforzo il volume corrente invade le riserve.",
      "I gas passano per diffusione; l'O₂ viaggia per il 98% sull'emoglobina.",
      "Con l'allenamento il polmone cambia poco, ma il respiro diventa più efficiente."
    ] }
  ]
};
