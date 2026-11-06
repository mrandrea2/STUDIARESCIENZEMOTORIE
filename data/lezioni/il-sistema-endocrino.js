/* LEZIONE UNICA — Il sistema endocrino
   Fonti: «Sistema endocrino» (prof. Andrea Bertelli) + slide del libro di testo. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["il-sistema-endocrino"] = {
  titolo: "I messaggeri del corpo",
  sottotitolo: "Ormoni, ghiandole, feedback e risposta endocrina all'attività fisica",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quarta", title: "I messaggeri del corpo", sub: "Ormoni, ghiandole, feedback e risposta endocrina all'attività fisica" },

    { t: "cards", kicker: "Per cominciare", title: "Prima della gara", cards: [
      { n: "1", h: "Il cuore batte forte", p: "Le mani sudano, sei più sveglio." },
      { n: "2", h: "Chi lo ha deciso?", p: "Le surrenali hanno messo in circolo adrenalina." },
      { n: "3", h: "Un messaggio nel sangue", p: "Gli ormoni regolano quasi tutte le funzioni del corpo.", dark: true }
    ] },

    { t: "key", kicker: "Definizioni", title: "Ghiandole e ormoni", lead: "Il sistema endocrino è l'insieme delle ghiandole che producono ormoni: molecole messaggere che viaggiano nel sangue e agiscono solo sulle cellule con il recettore giusto.", defs: [["Ghiandola endocrina", "versa i suoi prodotti nel sangue"], ["Cellula bersaglio", "ha il recettore per quell'ormone"]] },

    { t: "split", kicker: "Due sistemi di comunicazione", title: "Endocrino e nervoso", left: { h: "Sistema nervoso", items: ["Segnali elettrici e neurotrasmettitori", "Effetto in millisecondi", "Agisce in un punto preciso"] }, right: { h: "Sistema endocrino", items: ["Ormoni nel sangue", "Effetti da minuti a mesi", "Agisce a distanza su molti organi"] }, note: "Lavorano insieme: l'ipotalamo è il ponte tra i due sistemi." },

    { t: "table", kicker: "Gli ormoni", title: "Come agiscono", head: ["Tipo", "Esempio", "Come agisce"], rows: [
      ["Peptidici (idrosolubili)", "Insulina, GH", "Si legano a recettori sulla membrana"],
      ["Steroidei (liposolubili)", "Testosterone, estrogeni, cortisolo", "Entrano nella cellula e agiscono sul nucleo"],
      ["Derivati da aminoacidi", "Adrenalina, ormoni tiroidei", "Membrana o nucleo, a seconda dell'ormone"]
    ], note: "Endocrini: agiscono a distanza. Paracrini: su cellule vicine. Autocrini: sulla cellula che li produce." },

    { t: "points", kicker: "Le ghiandole", title: "La mappa del sistema endocrino", bg: "blue", fig: { svg: "ghiandole", cap: "Le principali ghiandole endocrine" }, items: [
      ["Ipotalamo e ipofisi:", "la centrale di comando."],
      ["Tiroide e paratiroidi:", "metabolismo e calcio."],
      ["Pancreas:", "zucchero nel sangue."],
      ["Surrenali:", "stress e sali minerali."],
      ["Gonadi, epifisi, timo:", "sviluppo sessuale, ritmo sonno-veglia, difese."]
    ] },

    { t: "points", kicker: "La regolazione", title: "Il feedback negativo", fig: { svg: "feedback", cap: "L'asse ipotalamo-ipofisi-ghiandola" }, items: [
      ["Asse:", "l'ipotalamo stimola l'ipofisi, l'ipofisi stimola un'altra ghiandola."],
      ["Feedback negativo:", "quando l'ormone finale è abbastanza, frena ipotalamo e ipofisi. Come un termostato."],
      ["Feedback positivo:", "più raro, amplifica la risposta (es. ossitocina nel parto)."],
      ["Scopo:", "mantenere l'omeostasi, l'equilibrio interno."]
    ] },

    { t: "table", kicker: "L'ipofisi", title: "La ghiandola maestra", head: ["Ormone", "Che cosa fa"], rows: [
      ["GH · ormone della crescita", "Crescita di ossa e muscoli, sintesi proteica; picco nel sonno profondo"],
      ["TSH", "Stimola la tiroide"],
      ["ACTH", "Stimola le surrenali a produrre cortisolo"],
      ["FSH e LH", "Stimolano ovaie e testicoli"],
      ["ADH (neuroipofisi)", "Fa trattenere acqua ai reni"],
      ["Ossitocina (neuroipofisi)", "Contrazioni del parto, allattamento, legami affettivi"]
    ] },

    { t: "split", kicker: "Tiroide e paratiroidi", title: "Metabolismo e calcio", left: { h: "Tiroide", items: ["T3 e T4: regolano il metabolismo, l'energia, il calore", "Calcitonina: abbassa il calcio nel sangue", "Iper e ipotiroidismo cambiano energia e peso"] }, right: { h: "Paratiroidi", items: ["Paratormone (PTH): alza il calcio nel sangue", "Prende calcio dalle ossa e lo trattiene nei reni", "Calcitonina e PTH lavorano in coppia"] } },

    { t: "points", kicker: "Il pancreas", title: "Insulina e glucagone", bg: "blue", fig: { svg: "glicemia", cap: "Due ormoni, un equilibrio" }, items: [
      ["Insulina:", "dopo il pasto fa entrare il glucosio nelle cellule e lo trasforma in glicogeno."],
      ["Glucagone:", "a digiuno e sotto sforzo libera glucosio dal glicogeno del fegato."],
      ["Perché conta:", "il cervello usa quasi solo glucosio: la glicemia deve restare stabile."],
      ["Diabete:", "tipo 1, il pancreas non produce insulina; tipo 2, le cellule non rispondono. Il movimento migliora la sensibilità all'insulina."]
    ] },

    { t: "split", kicker: "Le surrenali", title: "Gli ormoni dello stress", left: { h: "Midollare", items: ["Adrenalina e noradrenalina", "Risposta immediata: battito, pressione, glucosio", "Lotta o fuga"] }, right: { h: "Corticale", items: ["Cortisolo: mobilita energia, frena l'infiammazione", "Aldosterone: trattiene sodio e acqua", "Se lo stress è cronico, il cortisolo alto fa male"] } },

    { t: "cards", kicker: "Le altre ghiandole", title: "Gonadi, epifisi, timo", cards: [
      { h: "Gonadi", p: "Testosterone (testicoli), estrogeni e progesterone (ovaie): sviluppo sessuale, massa muscolare e ossea." },
      { h: "Epifisi", p: "Melatonina: alta di notte, regola il ritmo sonno-veglia. La luce degli schermi la blocca." },
      { h: "Timo", p: "Fa maturare i linfociti T. Si riduce dopo la pubertà.", dark: true }
    ] },

    { t: "table", kicker: "Ormoni e attività fisica", title: "Che cosa succede quando ti alleni", head: ["Ormone", "Durante l'esercizio", "Effetto"], rows: [
      ["Adrenalina e noradrenalina", "Salgono subito", "Più battito, più glucosio e grassi disponibili"],
      ["Glucagone e cortisolo", "Salgono negli sforzi lunghi", "Mantengono la glicemia"],
      ["Insulina", "Scende", "Il muscolo usa glucosio anche senza molta insulina"],
      ["GH e testosterone", "Salgono negli sforzi intensi", "Riparazione e crescita muscolare"]
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Gli ormoni sono messaggeri che viaggiano nel sangue e agiscono su cellule con il recettore giusto.",
      "L'ipotalamo comanda l'ipofisi, che comanda le altre ghiandole; il feedback negativo regola tutto.",
      "Insulina abbassa e glucagone alza lo zucchero nel sangue.",
      "Le surrenali producono adrenalina e cortisolo, gli ormoni dello stress.",
      "Durante l'esercizio salgono adrenalina, glucagone, cortisolo e GH; l'insulina scende."
    ] }
  ]
};
