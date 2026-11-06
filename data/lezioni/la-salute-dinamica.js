/* LEZIONE UNICA — La salute dinamica
   Fonti: «Ogni movimento conta», «Più movimento = più vita», «Physical fitness e intensità dell'esercizio», «Sonno e benessere»
   (prof. Andrea Bertelli); Linee guida OMS 2020 sull'attività fisica. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["la-salute-dinamica"] = {
  titolo: "Ogni movimento conta",
  sottotitolo: "Salute dinamica, linee guida OMS, physical fitness, intensità dell'esercizio e sonno",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe prima", title: "Ogni movimento conta", sub: "Salute dinamica, linee guida OMS, physical fitness, intensità dell'esercizio e sonno" },

    { t: "cards", kicker: "Per cominciare", title: "Quante ore stai seduto?", cards: [
      { n: "1", h: "Conta", p: "Ore seduto a scuola, a casa sui libri, davanti a telefono e TV." },
      { n: "2", h: "Confronta", p: "E quanti minuti ti muovi davvero in una giornata?" },
      { n: "3", h: "Rifletti", p: "Il nostro corpo è nato per muoversi, non per stare fermo.", dark: true }
    ] },

    { t: "key", kicker: "L'idea chiave", title: "La salute è dinamica", lead: "La salute non è solo assenza di malattia: è uno stato di benessere fisico, mentale e sociale che si costruisce ogni giorno, anche con il movimento.", defs: [["Attività fisica", "qualsiasi movimento dei muscoli che consuma energia"], ["Esercizio fisico", "attività pianificata, strutturata e ripetuta"]] },

    { t: "split", kicker: "Due parole da non confondere", title: "Sedentarietà e inattività fisica", left: { h: "Sedentarietà", items: ["Stare seduti o sdraiati da svegli", "Spesa energetica sotto 1,5 MET", "Si può essere attivi e anche molto sedentari"] }, right: { h: "Inattività fisica", items: ["Non raggiungere le quantità di movimento raccomandate", "Riguarda quanto ti muovi, non quanto stai seduto", "Le due cose vanno combattute insieme"] }, note: "1 MET = l'energia che consumi a riposo, circa 1 kcal per kg di peso all'ora." },

    { t: "points", kicker: "Linee guida OMS", title: "Quanto movimento serve", fig: { svg: "oms", cap: "Raccomandazioni OMS per la salute" }, items: [
      ["5–17 anni:", "almeno 60 minuti al giorno di attività moderata o vigorosa, soprattutto aerobica."],
      ["Forza e ossa:", "almeno 3 volte a settimana attività che rafforzano muscoli e ossa (salti, giochi, esercizi)."],
      ["Adulti:", "almeno 150–300 minuti a settimana moderati, oppure 75–150 vigorosi."],
      ["Meno schermi:", "ridurre il tempo seduto, soprattutto davanti agli schermi."]
    ] },

    { t: "cards", kicker: "Every move counts", title: "Più ti muovi, meglio stai", bg: "blue", grid: 2, cards: [
      { h: "Poco è meglio di niente", p: "Soprattutto per chi parte da zero, ogni minuto di movimento porta benefici." },
      { h: "Più è meglio", p: "Più attività fisica significa meno malattie croniche." },
      { h: "Tutto conta", p: "Anche periodi brevi di pochi minuti si sommano nella giornata." },
      { h: "Il dato", p: "Il rischio più basso si osserva intorno ai 24 minuti al giorno di attività moderata o vigorosa negli adulti.", dark: true }
    ] },

    { t: "stats", kicker: "Le malattie non trasmissibili", title: "Il 71% delle morti nel mondo", stats: [
      { big: "41 mln", h: "Morti ogni anno", p: "Per malattie croniche non trasmissibili (OMS).", blue: true },
      { big: "17,9 mln", h: "Cuore e vasi", p: "Le malattie cardiovascolari sono la prima causa." },
      { big: "4 fattori", h: "Di rischio modificabili", p: "Fumo, inattività fisica, alcol e alimentazione scorretta.", dark: true }
    ] },

    { t: "points", kicker: "La prevenzione", title: "Muoversi per prevenire", fig: { svg: "prevenzione", cap: "I tre livelli della prevenzione" }, items: [
      ["Primaria:", "riduce la probabilità che una malattia compaia."],
      ["Secondaria:", "la scopre presto e ne ferma o rallenta l'evoluzione."],
      ["Terziaria:", "riduce invalidità e complicanze, aiuta a tornare autonomi."],
      ["Determinanti della salute:", "genetica, ambiente, servizi sanitari e soprattutto stili di vita. L'attività fisica è uno dei più importanti che dipendono da te."]
    ] },

    { t: "points", kicker: "Physical fitness", title: "Le cinque componenti", bg: "blue", fig: { svg: "fitness", cap: "La physical fitness o idoneità fisica" }, items: [
      ["Cardiorespiratoria:", "fare a lungo esercizi con tutto il corpo a intensità moderata o vigorosa."],
      ["Muscolo-scheletrica:", "forza, resistenza e potenza dei muscoli."],
      ["Flessibilità:", "l'ampiezza di movimento delle articolazioni."],
      ["Equilibrio:", "stare in equilibrio da fermi e in movimento."],
      ["Velocità:", "muovere il corpo nel minor tempo possibile."]
    ] },

    { t: "table", kicker: "Benefici in età giovanile", title: "Che cosa ti dà il movimento", head: ["Apparato", "Benefici"], rows: [
      ["Muscoli e ossa", "Postura corretta, articolazioni mobili, muscoli tonici, ossa più dense"],
      ["Metabolismo", "Peso equilibrato, più massa magra, fame regolata, zuccheri e grassi nel sangue in ordine"],
      ["Cuore e polmoni", "Battito più basso a riposo, pressione controllata, recupero rapido, polmoni più capaci"],
      ["Mente e relazioni", "Controllo delle emozioni, socialità, autostima e fiducia in sé"]
    ] },

    { t: "split", kicker: "L'intensità", title: "Quanto è duro un esercizio?", left: { h: "Intensità assoluta", items: ["Dipende dal lavoro fatto", "Si misura in MET o in chili sollevati", "Es. correre a 10 km/h = circa 10 MET"] }, right: { h: "Intensità relativa", items: ["Dipende da quanto sei allenato", "% della FC massima o del VO₂max", "Fatica percepita su una scala da 0 a 10"] }, note: "Lo stesso esercizio può essere leggero per un atleta e molto duro per chi è sedentario." },

    { t: "table", kicker: "Monitorare l'intensità", title: "Tre modi per capire quanto stai faticando", head: ["Intensità", "MET", "Fatica (0–10)", "Talk test"], rows: [
      ["Leggera", "sotto 3", "1–2", "Canti e parli tranquillo"],
      ["Moderata", "3–6", "3–4", "Parli ma non canti"],
      ["Vigorosa", "oltre 6", "5–8", "Solo poche parole"]
    ], note: "Alla fine di ogni allenamento fermati un momento e chiediti quanta fatica hai sentito: col tempo diventerai più consapevole del tuo corpo." },

    { t: "cards", kicker: "Strategie per muoversi di più", title: "Cinque idee per ogni giorno", grid: 2, line: true, cards: [
      { h: "Pendolarismo attivo", p: "A scuola a piedi o in bici, o scendi dal bus una fermata prima." },
      { h: "7000 passi", p: "Almeno 7000 passi al giorno portano benefici per la salute." },
      { h: "Pause attive", p: "1–10 minuti di movimento ogni 45–60 minuti di studio: più attenzione e concentrazione." },
      { h: "HIIT casalingo", p: "Saltelli, corda, scale veloci, jumping jack: brevi, intensi, efficaci." }
    ], note: "Muoversi a piedi o in bici fa bene anche all'ambiente: è l'approccio One Health, salute umana, animale e del pianeta insieme." },

    { t: "points", kicker: "Il sonno", title: "L'allenamento invisibile", fig: { svg: "sonnociclo", cap: "I cicli del sonno durante la notte" }, items: [
      ["Quanto:", "gli adolescenti hanno bisogno di 8–10 ore, gli atleti anche di più."],
      ["Cicli:", "4–6 cicli di circa 90 minuti; il sonno profondo all'inizio, la fase REM verso il mattino."],
      ["Sonno profondo:", "ripara i muscoli e libera l'ormone della crescita."],
      ["Fase REM:", "consolida memoria e gesti tecnici imparati."],
      ["Chi dorme meno di 8 ore:", "ha circa 1,7 volte più probabilità di infortunarsi."]
    ] },

    { t: "list", kicker: "Igiene del sonno", title: "Le regole per dormire bene", bg: "blue", items: [
      ["Orari regolari", "Anche nel weekend: l'orologio biologico ringrazia."],
      ["Niente schermi", "Spegnili 1–2 ore prima: la luce blu blocca la melatonina."],
      ["Niente caffeina", "Dopo le 14: caffè, tè, cola ed energy drink."],
      ["Camera ideale", "Buia, silenziosa, fresca (16–19 °C)."],
      ["Cena leggera", "2–3 ore prima di dormire."],
      ["Rilassati", "Respirazione lenta, lettura, routine serale."]
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Ogni movimento conta: rompere la sedentarietà, anche per pochi minuti, fa bene.",
      "Dai 5 ai 17 anni servono almeno 60 minuti al giorno di attività moderata o vigorosa.",
      "La physical fitness ha cinque componenti: cardiorespiratoria, muscolare, flessibilità, equilibrio, velocità.",
      "L'intensità si misura in MET, con la frequenza cardiaca o con la fatica percepita.",
      "Il sonno (8–10 ore) è parte dell'allenamento: ripara il corpo e fissa ciò che impari."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "A. Bertelli, «Ogni movimento conta», «Più movimento = più vita», «Physical fitness e intensità dell'esercizio», «Sonno e benessere».",
      "Organizzazione Mondiale della Sanità, Linee guida su attività fisica e comportamenti sedentari, 2020.",
      "OMS, Noncommunicable diseases – Key facts.",
      "ISTAT, Annuario statistico italiano 2021: pratica sportiva."
    ] }
  ]
};
