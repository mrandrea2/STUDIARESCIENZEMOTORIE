/* LEZIONE UNICA — Apparato digerente
   Lezione costruita da ricerche online: vedi l'ultima slide per le fonti. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["apparato-digerente"] = {
  titolo: "Dal piatto al muscolo",
  sottotitolo: "Il viaggio del cibo nell'apparato digerente e che cosa significa per chi fa sport",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Dal piatto al muscolo", sub: "Il viaggio del cibo nell'apparato digerente e che cosa significa per chi fa sport" },

    { t: "cards", kicker: "Per cominciare", title: "Che fine fa un panino?", cards: [
      { n: "1", h: "Lo mastichi", p: "In bocca inizia già la digestione." },
      { n: "2", h: "Sparisce", p: "Per ore viaggia lungo un tubo di quasi 8 metri." },
      { n: "3", h: "Diventa energia", p: "Una parte arriva ai muscoli che ti servono in partita.", dark: true }
    ] },

    { t: "steps", kicker: "Il quadro generale", title: "Quattro compiti in sequenza", steps: [
      { h: "Ingestione", p: "Il cibo entra dalla bocca." },
      { h: "Digestione", p: "Viene sminuzzato e scomposto in molecole piccole." },
      { h: "Assorbimento", p: "Le molecole passano nel sangue e nella linfa." },
      { h: "Eliminazione", p: "Ciò che non serve esce come feci." }
    ] },

    { t: "list", kicker: "Il tubo digerente", title: "Il viaggio del cibo", bg: "blue", fig: { svg: "digerente", cap: "Gli organi principali dell'apparato digerente" }, items: [
      ["Bocca", "Denti e lingua sminuzzano; la saliva inizia a digerire l'amido."],
      ["Faringe ed esofago", "Il bolo scende con onde muscolari: la peristalsi."],
      ["Stomaco", "Succhi acidi digeriscono le proteine. Il cibo diventa chimo."],
      ["Intestino tenue", "Circa 6 metri: finisce la digestione e si assorbono i nutrienti."],
      ["Intestino crasso", "Circa 1,5 metri: assorbe acqua e sali, ospita il microbiota."]
    ] },

    { t: "split", kicker: "Due tipi di digestione", title: "Meccanica e chimica", left: { h: "Digestione meccanica", items: ["Masticazione", "Rimescolamento nello stomaco", "Peristalsi lungo il tubo", "Rompe il cibo in pezzi più piccoli"] }, right: { h: "Digestione chimica", items: ["Enzimi e succhi digestivi", "Spezzano le grandi molecole", "Amidi → glucosio, proteine → aminoacidi", "Grassi → acidi grassi e glicerolo"] } },

    { t: "points", kicker: "Lo stomaco", title: "Un sacco muscolare acido", items: [
      ["Capacità:", "vuoto è piccolo, pieno arriva a circa 1,5 litri."],
      ["Succo gastrico:", "acido cloridrico (uccide i microbi) e pepsina (digerisce le proteine)."],
      ["Muco:", "protegge la parete dall'acido."],
      ["Tempi:", "il cibo resta nello stomaco 2–4 ore; i grassi lo fanno restare di più."]
    ], note: "Per questo prima di una gara si evita un pasto ricco di grassi: lo stomaco resta pieno a lungo." },

    { t: "cards", kicker: "Le ghiandole annesse", title: "Fegato e pancreas", bg: "blue", grid: 2, cards: [
      { h: "Fegato", p: "Produce la bile, che spezzetta i grassi. Immagazzina glicogeno e lo libera quando serve." },
      { h: "Cistifellea", p: "Conserva la bile e la versa nell'intestino durante il pasto." },
      { h: "Pancreas: succo", p: "Enzimi che digeriscono carboidrati, proteine e grassi nell'intestino." },
      { h: "Pancreas: ormoni", p: "Insulina e glucagone regolano lo zucchero nel sangue.", dark: true }
    ] },

    { t: "points", kicker: "L'assorbimento", title: "Una superficie enorme in poco spazio", fig: { svg: "villo", cap: "I villi dell'intestino tenue" }, items: [
      ["Pieghe, villi e microvilli:", "moltiplicano la superficie dell'intestino tenue."],
      ["Quanto è grande:", "circa 30 metri quadrati, come un piccolo appartamento."],
      ["Nel sangue:", "zuccheri, aminoacidi, acqua, sali e vitamine idrosolubili vanno al fegato."],
      ["Nella linfa:", "i grassi e le vitamine liposolubili."]
    ] },

    { t: "split", kicker: "L'intestino crasso", title: "L'ultimo tratto, pieno di vita", left: { h: "Che cosa fa", items: ["Assorbe acqua e sali", "Forma e compatta le feci", "Elimina gli scarti"] }, right: { h: "Il microbiota", items: ["Miliardi di batteri utili", "Fermentano le fibre", "Producono vitamine e aiutano le difese"] }, note: "Le fibre di frutta, verdura, legumi e cereali integrali nutrono il microbiota e aiutano la regolarità intestinale." },

    { t: "stats", kicker: "I tempi della digestione", title: "Quanto resta il cibo in ogni tratto", stats: [
      { big: "2–4 h", h: "Stomaco", p: "Di più dopo un pasto ricco di grassi e proteine.", blue: true },
      { big: "3–5 h", h: "Intestino tenue", p: "Si assorbe la maggior parte dei nutrienti." },
      { big: "12–48 h", h: "Intestino crasso", p: "Riassorbimento dell'acqua e formazione delle feci.", dark: true }
    ] },

    { t: "key", kicker: "L'idea chiave", title: "Muscoli e intestino si contendono il sangue", lead: "Durante uno sforzo intenso il sangue va ai muscoli e lascia l'intestino. Se lo stomaco è pieno, la digestione rallenta.", defs: [["A riposo", "molto sangue va all'intestino"], ["Sotto sforzo", "il sangue va ai muscoli"]] },

    { t: "cards", kicker: "Digestione e sport", title: "Le regole pratiche", bg: "blue", grid: 2, cards: [
      { n: "3 h", h: "Pasto completo", p: "Finisci di mangiare circa 3 ore prima di gara o allenamento." },
      { n: "1 h", h: "Spuntino leggero", p: "Frutta, pane e marmellata, fette biscottate: zuccheri facili da digerire." },
      { h: "Da evitare prima", p: "Fritti, condimenti grassi, molte fibre, bevande gassate." },
      { h: "Durante", p: "Piccoli sorsi d'acqua, mai grandi quantità tutte insieme.", dark: true }
    ], note: "Nausea, crampi e «mal di pancia» durante lo sforzo sono spesso il segno di un pasto troppo vicino o troppo pesante." },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Il cibo attraversa bocca, esofago, stomaco, intestino tenue e intestino crasso.",
      "La digestione è meccanica (masticare, rimescolare) e chimica (enzimi).",
      "Fegato e pancreas producono bile ed enzimi; il pancreas regola anche lo zucchero nel sangue.",
      "I nutrienti si assorbono nell'intestino tenue, grazie ai villi.",
      "Prima dello sport: pasto completo 3 ore prima, leggero e povero di grassi."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "E. N. Marieb, Il corpo umano, Zanichelli: sintesi del capitolo sull'apparato digerente (online.scuola.zanichelli.it).",
      "D. Sadava e altri, La nuova biologia.blu, Zanichelli: capitolo «L'alimentazione e la digestione».",
      "H. F. Helander, L. Fändriks, «Surface area of the digestive tract – revisited», Scandinavian Journal of Gastroenterology, 2014.",
      "CREA, Linee guida per una sana alimentazione, revisione 2018."
    ] }
  ]
};
