/* LEZIONE UNICA — Alimentazione e sport, integratori e doping
   Fonti: «Attività fisica e pratica sportiva» (prof. Andrea Bertelli, dai LARN V revisione), conferenza della dott.ssa Rossana Robbi
   sugli integratori, Linee guida CREA 2018 cap. 11, Codice e Lista WADA, legge 376/2000. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["alimentazione-e-sport-integratori-e-doping"] = {
  titolo: "Il carburante dell'atleta",
  sottotitolo: "Che cosa mangiare e bere per allenarsi, quando servono gli integratori e perché il doping è sempre una sconfitta",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Il carburante dell'atleta", sub: "Che cosa mangiare e bere per allenarsi, quando servono gli integratori e perché il doping è sempre una sconfitta" },

    { t: "cards", kicker: "Per cominciare", title: "Vero o falso?", cards: [
      { n: "1", h: "«Più proteine, più muscoli»", p: "Il muscolo è fatto al 70% di acqua: senza allenamento le proteine in più non diventano muscolo." },
      { n: "2", h: "«Bevo solo quando ho sete»", p: "La sete arriva tardi: hai già perso acqua e prestazione." },
      { n: "3", h: "«L'integratore fa la differenza»", p: "Nessun integratore sostituisce una dieta corretta.", dark: true }
    ] },

    { t: "list", kicker: "Chi fa sport", title: "Non tutti gli sportivi sono uguali", bg: "blue", items: [
      ["Sportivi", "Oltre 2,5 ore a settimana, per salute e forma fisica."],
      ["Atleti ricreativi", "Oltre 4 ore, con gare non ufficiali."],
      ["Atleti competitivi", "Oltre 6 ore, per migliorare la prestazione."],
      ["Atleti d'élite", "Oltre 10 ore, al livello più alto."]
    ], note: "Più ore di allenamento significano più energia, acqua e nutrienti da reintegrare. La base resta la dieta mediterranea." },

    { t: "stats", kicker: "I nutrienti dell'atleta", title: "Quanto serve, in grammi per kg di peso", stats: [
      { big: "3–12 g", h: "Carboidrati", p: "Al giorno: 3–5 per un'attività leggera, fino a 8–12 per carichi estremi. Il carburante principale.", blue: true },
      { big: "1,2–1,5 g", h: "Proteine", p: "Al giorno per la maggior parte degli atleti (0,9 per un sedentario), divise nei pasti." },
      { big: "20–35%", h: "Grassi", p: "Delle calorie totali. Carburante degli sforzi lunghi e poco intensi.", dark: true }
    ] },

    { t: "steps", kicker: "Mangiare intorno all'allenamento", title: "Prima, durante, dopo", steps: [
      { h: "3 ore prima", p: "Pasto ricco di carboidrati complessi: pasta, riso, pane, patate. Pochi grassi e poche proteine." },
      { h: "Durante", p: "Acqua. Se lo sforzo supera l'ora, anche carboidrati: 30–60 g all'ora." },
      { h: "Subito dopo", p: "Liquidi, carboidrati e un po' di proteine: le prime 2 ore sono le migliori per ricaricare." },
      { h: "Il pasto dopo", p: "Pasta o riso, proteine magre, verdura, frutta e olio EVO." }
    ], lastDark: true },

    { t: "points", kicker: "L'acqua", title: "Il primo integratore è l'acqua", bg: "blue", fig: { svg: "disidratazione", cap: "Effetti della perdita di liquidi" }, items: [
      ["Termoregolazione:", "oltre l'80% del calore si disperde con il sudore."],
      ["Già al 2%:", "di peso perso calano prestazione e concentrazione."],
      ["Segnali:", "urine scure e scarse, crampi, mal di testa, nausea, battito alto."],
      ["Controllo pratico:", "pesati prima e dopo l'allenamento: ogni mezzo chilo perso è mezzo litro da bere."]
    ] },

    { t: "points", kicker: "Come bere", title: "Una strategia in tre tempi", fig: { svg: "borraccia", cap: "Indicazioni dei LARN per l'idratazione" }, items: [
      ["Prima:", "5–10 mL per kg nelle 2–4 ore precedenti. Urine giallo chiaro = tutto ok."],
      ["Durante:", "0,4–0,8 litri all'ora, a piccoli sorsi, acqua fresca ma non gelata."],
      ["Dopo:", "il 125–150% di quanto perso, nelle ore successive, con un po' di sale."],
      ["Non esagerare:", "bere litri e litri in poco tempo è pericoloso: abbassa il sodio nel sangue."]
    ] },

    { t: "key", kicker: "Gli integratori", title: "Non sono farmaci, non sono magici", lead: "Gli integratori sono prodotti che completano la dieta normale con nutrienti concentrati. Non curano, non sostituiscono il cibo.", defs: [["Servono", "solo in casi precisi, su consiglio di un esperto"], ["Non servono", "a chi mangia in modo vario ed equilibrato"]] },

    { t: "table", kicker: "Integratori per lo sport", title: "Che cosa dicono gli studi", head: ["Prodotto", "A che cosa serve", "Attenzione"], rows: [
      ["Bevande saline", "Reintegrare acqua e sali", "Utili solo oltre 1 ora di sforzo"],
      ["Carboidrati (gel, barrette)", "Energia nelle gare lunghe", "Pane e marmellata funzionano uguale"],
      ["Proteine e aminoacidi", "Recupero muscolare", "Il cibo basta; l'eccesso affatica i reni"],
      ["Creatina", "Sforzi brevi e ripetuti", "Effetti variabili; sconsigliata sotto i 12 anni"],
      ["Vitamine", "Solo in caso di carenza", "Troppe vitamine possono fare male"]
    ], note: "Alcuni integratori comprati online sono contaminati da sostanze dopanti: l'atleta ne è comunque responsabile." },

    { t: "cards", kicker: "Gli integratori", title: "Perché si usano troppo", bg: "blue", grid: 2, cards: [
      { n: "65–70%", h: "Degli atleti controllati", p: "Dichiara di prendere integratori, secondo la Commissione antidoping del Ministero della Salute." },
      { h: "Le cause", p: "Pubblicità, consigli di amici, imitazione dei campioni, pressione dell'allenatore." },
      { h: "Il rischio", p: "Danno un falso senso di sicurezza e allontanano da una dieta corretta." },
      { h: "Il passo successivo", p: "Pensare che una pillola faccia vincere può essere il primo passo verso il doping.", dark: true }
    ] },

    { t: "key", kicker: "Il doping", title: "Barare con il proprio corpo", lead: "Doping è usare sostanze o metodi proibiti per migliorare artificialmente la prestazione. È vietato perché fa male alla salute e falsa la gara.", defs: [["WADA", "Agenzia mondiale antidoping, pubblica la Lista"], ["NADO Italia", "l'organizzazione antidoping italiana"]] },

    { t: "points", kicker: "La Lista proibita", title: "Che cosa è vietato", fig: { svg: "wada", cap: "La Lista WADA si aggiorna ogni 1° gennaio" }, items: [
      ["Sempre vietati:", "anabolizzanti, EPO e ormoni della crescita, beta-2 agonisti senza autorizzazione, modulatori ormonali, diuretici e agenti mascheranti."],
      ["Vietati in gara:", "stimolanti, narcotici, cannabinoidi, cortisonici."],
      ["Metodi vietati:", "trasfusioni e manipolazione del sangue, manomissione dei campioni, doping genetico."],
      ["Farmaci per curarsi:", "si possono usare solo con un'esenzione a fini terapeutici (TUE)."]
    ] },

    { t: "table", kicker: "I danni del doping", title: "Il prezzo da pagare", head: ["Sostanza", "Perché la usano", "Che cosa rischi"], rows: [
      ["Anabolizzanti", "Più massa e forza", "Danni a fegato e cuore, squilibri ormonali, acne, aggressività"],
      ["EPO, trasfusioni", "Più globuli rossi, più resistenza", "Sangue denso: trombosi, ictus, infarto"],
      ["Stimolanti", "Meno fatica, più aggressività", "Aritmie, colpo di calore, dipendenza"],
      ["Diuretici", "Perdere peso, nascondere altre sostanze", "Disidratazione, crampi, squilibri dei sali"]
    ] },

    { t: "split", kicker: "Le regole", title: "Il doping è anche un reato", left: { h: "Nello sport", items: ["Squalifica fino a 4 anni, anche alla prima violazione", "Perdita di medaglie e risultati", "Responsabilità oggettiva: rispondi di ciò che trovi nel tuo corpo"] }, right: { h: "In Italia", items: ["Legge 376 del 2000: il doping è un reato penale", "Punisce anche chi procura o vende le sostanze", "Controlli in gara e fuori gara"] }, note: "Prima di prendere qualsiasi farmaco o integratore, chiedi al medico e controlla la Lista." },

    { t: "cards", kicker: "Le scelte giuste", title: "Il vero vantaggio è pulito", bg: "blue", cards: [
      { h: "Allenamento", p: "Progressivo e costante, con il recupero giusto." },
      { h: "Alimentazione", p: "Varia, mediterranea, adeguata al carico. Acqua prima della sete." },
      { h: "Sonno e testa", p: "Dormire bene, gestire lo stress, divertirsi.", dark: true }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "L'atleta ha bisogno soprattutto di carboidrati; le proteine servono, ma 1,2–1,5 g per kg bastano.",
      "Pasto completo 3 ore prima; dopo lo sforzo liquidi, carboidrati e un po' di proteine.",
      "Bevi prima, durante e dopo: già il 2% di peso perso con il sudore riduce la prestazione.",
      "Gli integratori servono solo in casi precisi; non sostituiscono mai una dieta corretta.",
      "Il doping fa male alla salute, falsa la gara ed è un reato: il vero vantaggio è pulito."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "A. Bertelli, «Attività fisica e pratica sportiva», dai LARN – SINU, V revisione.",
      "R. Robbi, «Gli integratori alimentari nella corsa: cosa devo controllare?», conferenza.",
      "CREA, Linee guida per una sana alimentazione 2018, cap. 11 «Attenti alle diete e all'uso degli integratori».",
      "WADA, Codice mondiale antidoping e Lista delle sostanze e dei metodi proibiti 2026 (wada-ama.org); NADO Italia (nadoitalia.it).",
      "Legge 14 dicembre 2000, n. 376, «Disciplina della tutela sanitaria delle attività sportive e della lotta contro il doping»."
    ] }
  ]
};
