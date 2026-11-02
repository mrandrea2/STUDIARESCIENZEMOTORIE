/* LEZIONE UNICA — Principi per una sana alimentazione
   Fonti: UDA 1, 2 e 3 del prof. Andrea Bertelli («Come costruire una dieta sana», «Mangiare a colori per vivere meglio»,
   «Importanza della colazione e sostenibilità della dieta mediterranea») + Linee guida CREA 2018. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["principi-per-una-sana-alimentazione"] = {
  titolo: "Mangiare bene per stare bene",
  sottotitolo: "Nutrienti, dieta mediterranea, colazione, acqua e scelte sostenibili",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Mangiare bene per stare bene", sub: "Nutrienti, dieta mediterranea, colazione, acqua e scelte sostenibili" },

    { t: "cards", kicker: "Per cominciare", title: "Che cosa hai mangiato ieri?", cards: [
      { n: "1", h: "Conta i colori", p: "Quanti colori diversi di frutta e verdura?" },
      { n: "2", h: "Conta i pasti", p: "Hai fatto colazione? Quanti pasti in tutto?" },
      { n: "3", h: "Conta i bicchieri", p: "Quanta acqua hai bevuto?", dark: true }
    ] },

    { t: "split", kicker: "Alimentazione e salute", title: "Il cibo può proteggere o fare male", left: { h: "Gli eccessi", items: ["Pressione alta", "Colesterolo", "Diabete", "Malattie del cuore"] }, right: { h: "Le carenze", items: ["Stanchezza e affaticamento", "Malumore", "Sonnolenza", "Poca concentrazione"] }, note: "Nei Paesi ricchi molte malattie croniche dipendono in parte da come mangiamo. Un'alimentazione corretta è uno dei cardini della prevenzione." },

    { t: "cards", kicker: "Gli alimenti", title: "Tre funzioni dei nutrienti", bg: "blue", cards: [
      { h: "Energetica", p: "Carboidrati, grassi e proteine forniscono energia per muoversi e scaldarsi." },
      { h: "Plastica", p: "Proteine e minerali costruiscono e riparano i tessuti." },
      { h: "Regolatrice", p: "Vitamine e minerali fanno funzionare le reazioni del corpo.", dark: true }
    ], note: "Nessun alimento le fa tutte: per questo serve variare." },

    { t: "stats", kicker: "L'equilibrio", title: "Da dove arriva l'energia", stats: [
      { big: "55%", h: "Carboidrati", p: "Soprattutto complessi: pane, pasta, riso, cereali integrali, legumi.", blue: true },
      { big: "30%", h: "Grassi", p: "Soprattutto olio extravergine d'oliva e frutta secca." },
      { big: "15%", h: "Proteine", p: "Più vegetali; tra le animali prima pesce, poi carni bianche e uova.", dark: true }
    ], note: "Le proporzioni della dieta mediterranea, studiata da Ancel Keys negli anni '60." },

    { t: "points", kicker: "Il peso corporeo", title: "L'indice di massa corporea", fig: { svg: "imc", cap: "Classificazione dell'IMC negli adulti" }, items: [
      ["Formula:", "peso in kg diviso l'altezza in metri al quadrato."],
      ["Negli adulti:", "tra 18,5 e 24,9 è normopeso."],
      ["Limiti:", "non distingue muscoli e grasso: un atleta muscoloso può risultare «sovrappeso»."],
      ["Nei ragazzi:", "si usano le curve dei percentili, per età e sesso."]
    ] },

    { t: "points", kicker: "La dieta mediterranea", title: "Più che una dieta, uno stile di vita", bg: "blue", fig: { svg: "piramide", cap: "La piramide della dieta mediterranea" }, items: [
      ["Dal 2010", "è patrimonio immateriale dell'umanità per l'UNESCO."],
      ["A ogni pasto:", "frutta, verdura, cereali (meglio integrali), olio extravergine."],
      ["Ogni giorno:", "latticini, frutta secca, erbe e spezie al posto del sale."],
      ["Ogni settimana:", "pesce e legumi almeno 2 volte, uova, carni bianche; carni rosse e dolci poco."],
      ["Alla base:", "acqua, attività fisica, stagionalità e convivialità."]
    ] },

    { t: "points", kicker: "Il ritmo alimentare", title: "Cinque pasti al giorno", fig: { svg: "pasti", cap: "Distribuzione indicativa delle calorie" }, items: [
      ["Colazione:", "circa 20%, mai saltarla."],
      ["Spuntino e merenda:", "circa 5% ciascuno: frutta, yogurt, un panino piccolo."],
      ["Pranzo:", "circa 40%, il pasto principale."],
      ["Cena:", "circa 30%, più leggera."]
    ] },

    { t: "cards", kicker: "La prima colazione", title: "Il pasto più importante", bg: "blue", grid: 2, cards: [
      { h: "Perché", p: "Dopo il digiuno della notte dà energia a muscoli e cervello: a scuola ti concentri meglio." },
      { h: "Completa", p: "Carboidrati complessi, un po' di proteine e grassi buoni, frutta." },
      { h: "Dolce", p: "Latte o yogurt, fiocchi d'avena o pane integrale, un velo di marmellata, frutta secca, un frutto." },
      { h: "Salata", p: "Pane integrale con ricotta e pomodoro, o con hummus, e un frutto di stagione.", dark: true }
    ] },

    { t: "split", kicker: "Gli zuccheri", title: "Semplici o complessi?", left: { h: "Zuccheri semplici", items: ["Dolci, bibite, merendine", "Picco di zucchero nel sangue", "Poi calo improvviso e fame", "Favoriscono carie e sovrappeso"] }, right: { h: "Carboidrati complessi", items: ["Pane, pasta, riso, legumi", "Energia che arriva piano", "Sazietà più lunga", "Almeno 2/3 dei carboidrati del giorno"] }, note: "L'OMS consiglia di limitare gli zuccheri semplici. Leggi le etichette: lo zucchero si nasconde anche dove non te lo aspetti." },

    { t: "points", kicker: "Frutta e verdura", title: "Cinque porzioni, cinque colori", fig: { svg: "piatto", cap: "Metà piatto a frutta e verdura" }, items: [
      ["5 porzioni al giorno:", "una porzione è un frutto medio, un piatto d'insalata o di verdure, una coppetta di macedonia."],
      ["5 colori:", "rosso, giallo-arancio, verde, bianco, blu-viola. Ogni colore ha sostanze protettive diverse."],
      ["Perché:", "acqua, vitamine, minerali, fibre e antiossidanti contro i radicali liberi."],
      ["Di stagione:", "più saporita, più nutriente e più sostenibile."]
    ] },

    { t: "points", kicker: "L'acqua", title: "Il nutriente che non deve mancare", bg: "blue", fig: { svg: "acqua", cap: "Il corpo è fatto soprattutto d'acqua" }, items: [
      ["A che cosa serve:", "trasporta nutrienti e ossigeno, regola la temperatura, lubrifica le articolazioni."],
      ["Quanta:", "almeno 6–8 bicchieri al giorno, di più quando fa caldo o fai sport."],
      ["Come:", "spesso e a piccoli sorsi, anche durante i pasti."],
      ["La sete:", "arriva quando hai già perso acqua: gioca d'anticipo."]
    ] },

    { t: "cards", kicker: "Sostenibilità", title: "Buono per te, buono per il pianeta", grid: 2, line: true, cards: [
      { h: "Doppia piramide", p: "Gli alimenti da mangiare più spesso sono anche quelli che inquinano meno." },
      { h: "Locale e di stagione", p: "Meno trasporti, meno imballaggi, più sapore." },
      { h: "Più vegetali", p: "Legumi, cereali, frutta e verdura richiedono meno acqua e suolo della carne." },
      { h: "Non sprecare", p: "Compra quello che serve e leggi bene le date di scadenza." }
    ] },

    { t: "list", kicker: "Take home message", title: "Le linee guida in otto punti", items: [
      ["Peso", "Controllalo e mantieniti sempre attivo."],
      ["Vegetali", "Più cereali, legumi, ortaggi e frutta."],
      ["Grassi", "Scegli la qualità e limita la quantità."],
      ["Zuccheri", "Dolci e bibite zuccherate nei giusti limiti."],
      ["Acqua", "Bevine in abbondanza ogni giorno."],
      ["Sale", "Meglio poco, meglio iodato."],
      ["Alcol", "Per i ragazzi, zero."],
      ["Varietà", "Cambia spesso le tue scelte a tavola."]
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Circa 55% carboidrati (soprattutto complessi), 30% grassi (soprattutto olio EVO), 15% proteine.",
      "La dieta mediterranea è uno stile di vita: vegetali, olio, pesce e legumi, movimento e convivialità.",
      "Cinque pasti al giorno, con una colazione completa.",
      "Cinque porzioni di frutta e verdura, di cinque colori diversi.",
      "Acqua prima della sete, almeno 6–8 bicchieri al giorno."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "A. Bertelli, UDA 1 «Come costruire una dieta sana», UDA 2 «Mangiare a colori per vivere meglio», UDA 3 «Colazione e sostenibilità».",
      "CREA – Centro di ricerca Alimenti e Nutrizione, Linee guida per una sana alimentazione, revisione 2018.",
      "SINU, LARN – Livelli di assunzione di riferimento di nutrienti ed energia, V revisione.",
      "Organizzazione Mondiale della Sanità, raccomandazioni sul consumo di zuccheri."
    ] }
  ]
};
