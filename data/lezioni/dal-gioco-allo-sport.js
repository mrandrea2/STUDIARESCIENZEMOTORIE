/* LEZIONE UNICA — Dal gioco allo sport
   Lezione costruita da ricerche online: vedi l'ultima slide per le fonti. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["dal-gioco-allo-sport"] = {
  titolo: "Dal gioco allo sport",
  sottotitolo: "Perché giochiamo, come nascono le regole e come un gioco diventa uno sport",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Liceo sportivo", title: "Dal gioco allo sport", sub: "Perché giochiamo, come nascono le regole e come un gioco diventa uno sport" },

    { t: "cards", kicker: "Per cominciare", title: "Gioco o sport?", cards: [
      { n: "1", h: "Calcio al parco", p: "Porte fatte con gli zaini, squadre a caso, nessun arbitro." },
      { n: "2", h: "Partita di campionato", p: "Campo regolamentare, arbitro, classifica, tesseramento." },
      { n: "3", h: "Che cosa cambia?", p: "Il pallone è lo stesso. Cambiano regole, scopo e organizzazione.", dark: true }
    ] },

    { t: "points", kicker: "Che cos'è il gioco", title: "Un'attività libera, con le sue regole", items: [
      ["Libero:", "si gioca per scelta; se è obbligato, smette di essere gioco."],
      ["Separato:", "ha uno spazio e un tempo propri (il campo, la partita)."],
      ["Incerto:", "non si sa come andrà a finire: è il bello del gioco."],
      ["Regolato:", "le regole valgono solo dentro il gioco e tutti le accettano."],
      ["Fine a sé stesso:", "non produce nulla: si gioca per il piacere di giocare."]
    ], note: "Sono le caratteristiche indicate da Johan Huizinga («Homo ludens», 1938) e Roger Caillois («I giochi e gli uomini», 1958)." },

    { t: "points", kicker: "I tipi di gioco", title: "Le quattro categorie di Caillois", bg: "blue", fig: { svg: "caillois", cap: "Agon, alea, mimicry, ilinx" }, items: [
      ["Agon:", "la competizione, vince il più bravo. Es. corsa, scacchi, quasi tutti gli sport."],
      ["Alea:", "la fortuna, vince il caso. Es. dadi, lotterie."],
      ["Mimicry:", "l'imitazione, fare finta di essere altro. Es. recitare, travestirsi."],
      ["Ilinx:", "la vertigine, perdere l'equilibrio per gioco. Es. altalena, giostre, sci estremo."]
    ] },

    { t: "split", kicker: "Due modi di giocare", title: "Paidia e ludus", arrow: true, left: { h: "Paidia", items: ["Gioco spontaneo e libero", "Improvvisazione e fantasia", "Es. rincorrersi in cortile"] }, right: { h: "Ludus", items: ["Gioco organizzato", "Regole precise, impegno, tecnica", "Es. una gara ufficiale"] }, note: "Secondo Caillois ogni gioco sta su una linea tra questi due poli. Lo sport è il gioco più vicino al ludus." },

    { t: "key", kicker: "L'idea chiave", title: "Lo sport è un gioco che si è dato delle regole ufficiali", lead: "Lo sport nasce dal gioco quando le regole vengono scritte, uguali per tutti, e qualcuno le fa rispettare.", defs: [["Regolamento", "regole scritte e valide ovunque"], ["Istituzione", "federazioni, arbitri, campionati"]] },

    { t: "points", kicker: "Il percorso", title: "Dal cortile al campionato", fig: { svg: "giocosport", cap: "Ogni gradino aggiunge regole e organizzazione" }, items: [
      ["Gioco libero:", "regole inventate e cambiate mentre si gioca."],
      ["Gioco con regole:", "le regole si decidono prima e valgono per tutti i giocatori."],
      ["Gioco-sport:", "regole semplificate di uno sport, adatte all'età (minivolley, minibasket)."],
      ["Sport:", "regolamento ufficiale, arbitro, federazione, classifiche."]
    ] },

    { t: "cards", kicker: "Le caratteristiche dello sport", title: "Che cosa rende sport uno sport", bg: "blue", grid: 2, cards: [
      { h: "Movimento", p: "Impegno fisico e abilità motorie." },
      { h: "Competizione", p: "Confronto con gli altri, con sé stessi o con il cronometro." },
      { h: "Regole codificate", p: "Scritte e uguali in tutto il mondo." },
      { h: "Organizzazione", p: "Federazioni, società, arbitri e calendari di gara.", dark: true }
    ] },

    { t: "steps", kicker: "Un po' di storia", title: "Dai giochi antichi allo sport moderno", steps: [
      { h: "Antica Grecia", p: "I Giochi di Olimpia, dal 776 a.C.: corsa, lotta, pentathlon." },
      { h: "Medioevo", p: "Tornei, palio, calcio fiorentino: giochi legati alle feste." },
      { h: "Inghilterra, '800", p: "Nelle scuole nascono i regolamenti di calcio, rugby, tennis." },
      { h: "1896", p: "Pierre de Coubertin fa rinascere i Giochi Olimpici ad Atene." }
    ], lastDark: true },

    { t: "table", kicker: "Classificare gli sport", title: "Come si possono raggruppare", head: ["Criterio", "Gruppo", "Esempi"], rows: [
      ["Numero di atleti", "Individuali / di squadra", "Atletica, tennis / calcio, pallavolo"],
      ["Contatto", "Con o senza contatto", "Rugby, judo / pallavolo, tennis"],
      ["Tipo di gesto", "Ciclici / aciclici", "Corsa, nuoto / salti, lanci"],
      ["Ambiente", "Abilità chiuse / aperte", "Ginnastica, tuffi / basket, scherma"]
    ], note: "Abilità chiuse: ambiente stabile, gesto sempre uguale. Abilità aperte: devi adattarti di continuo all'avversario e alla palla." },

    { t: "split", kicker: "Regole e valori", title: "Le regole servono a giocare", left: { h: "Regole scritte", items: ["Rendono la gara uguale per tutti", "Proteggono la salute degli atleti", "Le fa rispettare l'arbitro"] }, right: { h: "Fair play", items: ["Il rispetto oltre il regolamento", "Rispetto di avversari, arbitro e compagni", "Vincere bene, perdere bene"] }, note: "Senza regole condivise non c'è gioco: se uno bara, il gioco finisce per tutti." },

    { t: "cards", kicker: "Ruoli in campo", title: "Nel gioco di squadra ognuno ha un compito", grid: 2, line: true, cards: [
      { h: "Giocatore", p: "Rispetta compiti e schemi, collabora con i compagni." },
      { h: "Capitano", p: "Fa da ponte tra squadra, arbitro e allenatore." },
      { h: "Arbitro", p: "Applica il regolamento in modo imparziale." },
      { h: "Allenatore", p: "Prepara la squadra e decide la tattica." }
    ] },

    { t: "cards", kicker: "Perché fare sport", title: "Molto più che vincere", bg: "blue", cards: [
      { h: "Salute", p: "Muoversi ogni giorno protegge cuore, ossa, peso e umore." },
      { h: "Relazioni", p: "Collaborare, rispettare, gestire vittorie e sconfitte." },
      { h: "Crescita", p: "Disciplina, costanza e fiducia in sé stessi.", dark: true }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Il gioco è libero, separato, incerto, regolato e fine a sé stesso.",
      "Caillois distingue quattro tipi di gioco: agon, alea, mimicry e ilinx.",
      "Lo sport nasce quando un gioco si dà regole ufficiali e un'organizzazione.",
      "Gli sport si classificano per numero di atleti, contatto, gesto e ambiente.",
      "Le regole rendono possibile il gioco; il fair play gli dà valore."
    ] },

    { t: "fonti", kicker: "Fonti", title: "Per approfondire", items: [
      "J. Huizinga, Homo ludens, 1938 (ed. it. Einaudi).",
      "R. Caillois, I giochi e gli uomini. La maschera e la vertigine, 1958 (ed. it. Bompiani).",
      "metropolisweb.it, «Come funziona la classificazione dei giochi secondo Caillois», 2022.",
      "Comitato Olimpico Internazionale, olympics.com: storia dei Giochi antichi e moderni."
    ] }
  ]
};
