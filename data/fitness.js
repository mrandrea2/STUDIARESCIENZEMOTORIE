/* =========================================================
   LABORATORIO FITNESS — tabelle e protocolli dei test
   Fasce di N. Lovecchio, «Physical fitness», guida per l'insegnante,
   Marietti Scuola: media ± deviazioni standard di studenti delle
   superiori (2017–2021). Protocolli riscritti dal prof. A. Bertelli.
   soglie: i quattro confini tra le cinque fasce (dal valore più basso);
   basso: true quando il valore più basso è il migliore (tempi).
   ========================================================= */
window.FITNESS = {
  fasce: ["scarsa", "debole", "media", "buona", "ottima"],
  test: [
    { k: "cooper", nome: "Test di Cooper", breve: "Cooper", cap: "resistenza", unita: "metri in 12 minuti", ph: "es. 2100",
      F: [1580, 1670, 1745, 1815], M: [1925, 2080, 2210, 2335],
      come: ["Su una pista o un percorso misurato, dopo il riscaldamento.", "Corri per 12 minuti cercando di coprire più metri possibile; se serve puoi camminare.", "Al fischio finale ti fermi: il compagno annota i metri percorsi."] },
    { k: "mille", nome: "1000 metri", breve: "1000 m", cap: "resistenza", unita: "minuti:secondi", ph: "es. 4:30", basso: true, tempo: true,
      F: [300, 340, 380, 420], M: [260, 300, 330, 370],
      come: ["Partenza in piedi dietro la linea.", "Corri 1000 metri con un ritmo il più possibile regolare: non partire troppo forte.", "Il tempo si ferma quando il busto supera il traguardo."] },
    { k: "addo", nome: "Addominali in 30 secondi", breve: "Addominali", cap: "forzaRes", unita: "ripetizioni", ph: "es. 20",
      F: [9, 16, 22, 28], M: [12, 20, 26, 32],
      come: ["Supino, ginocchia piegate, piedi a terra tenuti fermi da un compagno, mani dietro la nuca.", "Sali fino a toccare le ginocchia con i gomiti e torna giù con le scapole a terra.", "Si contano le ripetizioni complete in 30 secondi."] },
    { k: "salto", nome: "Salto in lungo da fermo", breve: "Salto", cap: "esplosiva", unita: "centimetri", ph: "es. 180",
      F: [100, 145, 180, 214], M: [132, 181, 218, 254],
      come: ["Piedi paralleli dietro la linea di stacco.", "Slancio delle braccia, stacco a due piedi e atterraggio a piedi pari.", "Si misura dalla linea al punto di appoggio più arretrato. Vale la migliore di tre prove."] },
    { k: "navetta", nome: "Navetta 10 × 5 metri", breve: "Navetta", cap: "agilita", unita: "secondi", ph: "es. 19,5", basso: true,
      F: [17.9, 20.5, 23, 26.5], M: [16.5, 18.5, 21, 24.5],
      come: ["Due linee a 5 metri di distanza.", "Al via corri avanti e indietro tra le linee per dieci tratti: nove cambi di direzione.", "A ogni cambio superi la linea con un piede. Il tempo si ferma all'ultimo passaggio."] },
    { k: "sprint", nome: "Sprint 30 metri", breve: "30 metri", cap: "velocita", unita: "secondi", ph: "es. 5,2", basso: true,
      F: [5.6, 5.75, 5.9, 6.2], M: [4.7, 4.9, 5.12, 5.38],
      come: ["Partenza da fermo, in piedi, quando vuoi tu.", "Il tempo parte al primo movimento e si ferma quando il busto supera il traguardo dei 30 metri.", "Vale la migliore di due prove, con recupero completo."] }
  ],
  capacita: {
    resistenza: { nome: "Resistenza", argomento: "le-capacita-condizionali",
      consiglio: "2–3 volte a settimana corsa continua di 20–40 minuti a un ritmo in cui riesci ancora a parlare; una volta a settimana ripetute brevi." },
    forzaRes: { nome: "Forza del tronco", argomento: "le-capacita-condizionali",
      consiglio: "Un circuito a corpo libero due volte a settimana: plank, crunch, mountain climber, superman. Qualità prima della quantità." },
    esplosiva: { nome: "Forza esplosiva", argomento: "le-capacita-condizionali",
      consiglio: "Salti e balzi due volte a settimana: squat jump, balzi alternati, salti alla corda. Poche ripetizioni, veloci, con recupero completo." },
    agilita: { nome: "Agilità", argomento: "le-capacita-coordinative",
      consiglio: "Cambi di direzione, scaletta, giochi di inseguimento. Si allena da freschi, a inizio seduta." },
    velocita: { nome: "Velocità", argomento: "le-capacita-condizionali",
      consiglio: "Partenze e allunghi su 10–30 metri con recupero completo e attenzione alla tecnica di corsa: braccia, appoggio, postura." }
  },
  livelli: ["Da costruire", "In crescita", "Nella media", "Buono", "Ottimo"]
};
