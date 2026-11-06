/* LEZIONE UNICA — Il sistema scheletrico
   Fonti: «Il sistema scheletrico» (prof. Andrea Bertelli) + slide del libro di testo. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["sistema-scheletrico"] = {
  titolo: "Lo scheletro in movimento",
  sottotitolo: "Funzioni, tessuto osseo, colonna vertebrale, gabbia toracica e salute delle ossa",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe prima", title: "Lo scheletro in movimento", sub: "Funzioni, tessuto osseo, colonna vertebrale, gabbia toracica e salute delle ossa" },

    { t: "cards", kicker: "Per cominciare", title: "Un'impalcatura viva", cards: [
      { n: "206", h: "Ossa nell'adulto", p: "Nel neonato sono di più: molte poi si fondono." },
      { n: "15%", h: "Del peso corporeo", p: "Leggero ma resistentissimo." },
      { n: "10 anni", h: "Per rinnovarsi", p: "L'osso si ricostruisce di continuo per tutta la vita.", dark: true }
    ] },

    { t: "cards", kicker: "A che cosa serve", title: "Le cinque funzioni dello scheletro", grid: 2, cards: [
      { h: "Sostegno", p: "Dà forma al corpo e lo tiene in piedi." },
      { h: "Protezione", p: "Cranio, gabbia toracica e colonna proteggono cervello, cuore, polmoni e midollo." },
      { h: "Movimento", p: "Le ossa sono leve su cui tirano i muscoli." },
      { h: "Sangue e minerali", p: "Il midollo rosso produce le cellule del sangue; le ossa conservano calcio e fosforo.", dark: true }
    ] },

    { t: "points", kicker: "Le ossa", title: "Cinque forme diverse", bg: "blue", fig: { svg: "tipiossa", cap: "Classificazione delle ossa per forma" }, items: [
      ["Lunghe:", "una dimensione prevale, es. femore, omero."],
      ["Corte:", "dimensioni simili, es. ossa del carpo."],
      ["Piatte:", "sottili e larghe, es. scapola, ossa del cranio."],
      ["Irregolari:", "forme complesse, es. vertebre."],
      ["Sesamoidi:", "dentro un tendine, es. rotula."]
    ] },

    { t: "split", kicker: "Il tessuto osseo", title: "Duro e leggero insieme", left: { h: "Osso compatto", items: ["Denso e resistente", "Forma la parte esterna", "Prevale nella diafisi"] }, right: { h: "Osso spugnoso", items: ["Leggero, a trabecole", "Si trova all'interno e nelle epifisi", "Contiene il midollo rosso"] }, note: "La matrice è fatta di collagene, che dà flessibilità, e di sali di calcio e fosforo, che danno durezza." },

    { t: "points", kicker: "L'osso lungo", title: "Diafisi, epifisi, metafisi", fig: { svg: "osso", cap: "Struttura di un osso lungo" }, items: [
      ["Diafisi:", "la parte centrale, di osso compatto, con il midollo giallo."],
      ["Epifisi:", "le estremità, di osso spugnoso con midollo rosso, rivestite di cartilagine."],
      ["Metafisi:", "zona di passaggio; nei ragazzi c'è la cartilagine di crescita, che fa allungare l'osso."],
      ["Periostio:", "la membrana esterna, con vasi e nervi."]
    ] },

    { t: "points", kicker: "Le cellule dell'osso", title: "Un cantiere sempre aperto", bg: "blue", fig: { svg: "rimodella", cap: "Il rimodellamento osseo" }, items: [
      ["Osteoblasti:", "costruiscono la matrice nuova."],
      ["Osteociti:", "osteoblasti maturi intrappolati nella matrice: la mantengono."],
      ["Osteoclasti:", "grandi cellule che riassorbono l'osso vecchio."],
      ["Equilibrio:", "se prevalgono gli osteoclasti l'osso si indebolisce; carico e movimento stimolano gli osteoblasti."]
    ] },

    { t: "split", kicker: "Cartilagine e midollo", title: "Due tessuti preziosi", left: { h: "La cartilagine", items: ["Ialina: riveste le superfici articolari", "Elastica: orecchio esterno", "Fibrosa: dischi intervertebrali e menischi"] }, right: { h: "Il midollo osseo", items: ["Rosso: produce globuli rossi, bianchi e piastrine", "Giallo: soprattutto grasso", "Per l'atleta: globuli rossi = ossigeno ai muscoli"] } },

    { t: "split", kicker: "Lo scheletro assile", title: "Il cranio", left: { h: "Neurocranio · 8 ossa", items: ["Protegge il cervello", "Frontale, parietali, occipitale, temporali", "Unite da suture: articolazioni fisse"] }, right: { h: "Splancnocranio · 14 ossa", items: ["Forma il viso", "Mascellare, zigomatico, nasale", "La mandibola è l'unico osso mobile"] } },

    { t: "points", kicker: "La colonna vertebrale", title: "33–34 vertebre e quattro curve", fig: { svg: "colonna", cap: "Le regioni e le curve della colonna" }, items: [
      ["Regioni:", "7 cervicali, 12 toraciche, 5 lombari, 5 sacrali fuse, 4–5 coccigee."],
      ["Curve:", "lordosi cervicale e lombare, cifosi toracica e sacrale: ammortizzano i carichi."],
      ["La vertebra:", "corpo che sostiene il peso, arco, processi per muscoli e legamenti, forame per il midollo spinale."],
      ["Dischi intervertebrali:", "nucleo polposo gelatinoso dentro un anello fibroso: ammortizzatori."]
    ] },

    { t: "table", kicker: "Quando la colonna soffre", title: "Paramorfismi e patologie", head: ["Problema", "Che cos'è"], rows: [
      ["Paramorfismo", "Atteggiamento scorretto, correggibile con la postura e l'esercizio"],
      ["Dismorfismo", "Alterazione stabile delle ossa (es. scoliosi strutturata)"],
      ["Scoliosi", "Curva laterale della colonna"],
      ["Ernia del disco", "Il nucleo polposo esce dall'anello e preme sui nervi"],
      ["Osteoporosi", "Le ossa perdono densità e si fratturano più facilmente"]
    ], note: "Postura, rinforzo dei muscoli del tronco e movimento regolare sono la migliore prevenzione." },

    { t: "split", kicker: "La gabbia toracica", title: "Uno scudo che respira", left: { h: "Com'è fatta", items: ["Sterno al centro", "12 paia di coste", "Vere (1–7), false (8–10), fluttuanti (11–12)", "Dietro: vertebre toraciche"] }, right: { h: "A che cosa serve", items: ["Protegge cuore e polmoni", "Si solleva e si abbassa con il respiro", "Offre attacco ai muscoli respiratori"] } },

    { t: "split", kicker: "Lo scheletro appendicolare", title: "Arti superiori e inferiori", left: { h: "Arto superiore", items: ["Clavicola e scapola (cingolo)", "Omero, radio, ulna", "Carpo, metacarpo, falangi"] }, right: { h: "Arto inferiore", items: ["Bacino (cingolo)", "Femore, rotula, tibia, perone", "Tarso, metatarso, falangi"] } },

    { t: "steps", kicker: "Quando un osso si rompe", title: "La riparazione in quattro fasi", steps: [
      { h: "Ematoma", p: "Il sangue si raccoglie nella frattura." },
      { h: "Callo fibrocartilagineo", p: "Un ponte morbido unisce i monconi." },
      { h: "Callo osseo", p: "Il ponte si calcifica e diventa osso." },
      { h: "Rimodellamento", p: "L'osso torna alla sua forma in mesi." }
    ], lastDark: true },

    { t: "cards", kicker: "Ossa forti per la vita", title: "Che cosa fa bene alle ossa", bg: "blue", grid: 2, cards: [
      { h: "Movimento con carico", p: "Corsa, salti, giochi con la palla e forza aumentano la densità ossea." },
      { h: "Calcio e proteine", p: "Latte, yogurt, formaggi, legumi, frutta secca, acque calciche." },
      { h: "Vitamina D", p: "Si produce con il sole; serve ad assorbire il calcio." },
      { h: "Ormoni", p: "Paratormone, calcitonina ed estrogeni regolano il metabolismo osseo.", dark: true }
    ], note: "Il picco di massa ossea si raggiunge intorno ai 20–25 anni: quello che fai adesso conta per tutta la vita." },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Lo scheletro sostiene, protegge, permette il movimento, produce sangue e conserva minerali.",
      "L'osso è vivo: osteoblasti costruiscono, osteoclasti riassorbono.",
      "Un osso lungo ha diafisi, epifisi e metafisi con la cartilagine di crescita.",
      "La colonna ha 33–34 vertebre, quattro curve e dischi che ammortizzano.",
      "Movimento con carico, calcio e vitamina D costruiscono ossa forti."
    ] }
  ]
};
