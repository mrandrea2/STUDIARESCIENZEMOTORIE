/* LEZIONE UNICA — Le articolazioni
   Fonti: approfondimento articolazioni, tabella e schede di spalla, gomito, anca, ginocchio (materiali del prof. Andrea Bertelli). */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["le-articolazioni"] = {
  titolo: "Le articolazioni",
  sottotitolo: "Come si uniscono le ossa, quanto si muovono e come proteggerle nello sport",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe prima", title: "Le articolazioni", sub: "Come si uniscono le ossa, quanto si muovono e come proteggerle nello sport" },

    { t: "cards", kicker: "Per cominciare", title: "Prova a muoverti", cards: [
      { n: "1", h: "Ruota il polso", p: "In quante direzioni si muove?" },
      { n: "2", h: "Piega il ginocchio", p: "E adesso prova a ruotarlo da teso…" },
      { n: "3", h: "Perché?", p: "Ogni articolazione ha una forma che decide i movimenti possibili.", dark: true }
    ] },

    { t: "key", kicker: "Definizione", title: "Il punto d'incontro tra due ossa", lead: "Un'articolazione è la struttura che unisce due o più ossa. Può bloccarle, permettere piccoli movimenti o grandi escursioni.", defs: [["Stabilità", "tenere le ossa al loro posto"], ["Mobilità", "permettere il movimento"]] },

    { t: "points", kicker: "Classificazione", title: "Tre gruppi per mobilità", bg: "blue", fig: { svg: "tipiart", cap: "Sinartrosi, anfiartrosi, diartrosi" }, items: [
      ["Sinartrosi (immobili):", "tra le ossa c'è tessuto connettivo, senza cavità. Es. suture del cranio, dente nell'alveolo."],
      ["Anfiartrosi (poco mobili):", "unite da cartilagine. Es. vertebre con i dischi, sinfisi pubica."],
      ["Diartrosi (mobili):", "tra le ossa c'è una cavità con liquido sinoviale. Es. spalla, anca, ginocchio."]
    ] },

    { t: "points", kicker: "La diartrosi", title: "Com'è fatta un'articolazione mobile", fig: { svg: "diartrosi", cap: "Struttura di una diartrosi" }, items: [
      ["Cartilagine articolare:", "liscia, riveste le ossa e riduce l'attrito."],
      ["Capsula articolare:", "un manicotto fibroso che avvolge l'articolazione."],
      ["Membrana e liquido sinoviale:", "lubrificano e nutrono la cartilagine."],
      ["Legamenti:", "corde fibrose che stabilizzano le ossa."],
      ["Menischi:", "cuscinetti di cartilagine fibrosa (ginocchio)."]
    ] },

    { t: "table", kicker: "Le forme delle diartrosi", title: "La forma decide il movimento", head: ["Tipo", "Superfici", "Esempio"], rows: [
      ["Enartrosi", "Sfera in una cavità", "Spalla, anca"],
      ["Condiloartrosi", "Ovale in una cavità", "Polso"],
      ["A sella", "Due selle incastrate", "Base del pollice, sterno-clavicolare"],
      ["Ginglimo angolare", "Cilindro e scanalatura (cerniera)", "Gomito, ginocchio, dita"],
      ["Ginglimo laterale", "Perno che ruota", "Tra radio e ulna, prima e seconda vertebra"],
      ["Artrodia", "Superfici piatte che scivolano", "Tra le ossa del carpo"]
    ] },

    { t: "points", kicker: "I movimenti", title: "Le parole del movimento", bg: "blue", fig: { svg: "movimenti", cap: "Movimenti angolari e rotatori" }, items: [
      ["Flessione / estensione:", "chiudere o aprire l'angolo tra due segmenti."],
      ["Abduzione / adduzione:", "allontanare o avvicinare un arto all'asse del corpo."],
      ["Rotazione:", "girare un segmento attorno al proprio asse."],
      ["Circonduzione:", "il segmento disegna un cono, es. le braccia a mulino."],
      ["Prono-supinazione:", "girare il palmo della mano verso il basso o verso l'alto."]
    ] },

    { t: "split", kicker: "La spalla", title: "La più mobile del corpo", left: { h: "Com'è fatta", items: ["Enartrosi tra testa dell'omero e scapola", "Cavità poco profonda", "Stabilizzata dai muscoli della cuffia dei rotatori"] }, right: { h: "Nello sport", items: ["Lanci, nuoto, pallavolo, tennis", "Rischio di lussazione e tendinite", "Rinforzare la cuffia è prevenzione"] } },

    { t: "split", kicker: "Gomito e polso", title: "Cerniera e perno", left: { h: "Gomito", items: ["Ginglimo angolare: flessione ed estensione", "Tra radio e ulna avviene la prono-supinazione", "Rischio: epicondilite (gomito del tennista)"] }, right: { h: "Polso e mano", items: ["Condiloartrosi tra radio e carpo", "Otto ossa del carpo, tanti piccoli legamenti", "Rischio: distorsioni nelle cadute"] } },

    { t: "split", kicker: "L'anca", title: "Stabile e potente", left: { h: "Com'è fatta", items: ["Enartrosi tra testa del femore e acetabolo", "Cavità profonda: molto stabile", "Capsula e legamenti robustissimi"] }, right: { h: "Nello sport", items: ["Corsa, salti, calcio, arti marziali", "Muscoli glutei e flessori dell'anca", "La mobilità dell'anca protegge la schiena"] } },

    { t: "split", kicker: "Il ginocchio", title: "La cerniera più sollecitata", left: { h: "Com'è fatto", items: ["Ginglimo angolare tra femore e tibia, con la rotula davanti", "Due menischi ammortizzano", "Legamenti collaterali e crociati (anteriore e posteriore)"] }, right: { h: "Nello sport", items: ["Cambi di direzione, atterraggi, contrasti", "Infortuni tipici: crociato anteriore, menischi", "Prevenzione: atterrare morbidi, forza e propriocezione"] } },

    { t: "split", kicker: "La caviglia", title: "Piccola ma fondamentale", left: { h: "Com'è fatta", items: ["Articolazione tra tibia, perone e astragalo", "Movimenti di flessione dorsale e plantare", "Legamenti laterali e deltoideo"] }, right: { h: "Nello sport", items: ["La distorsione è l'infortunio più frequente", "Esercizi di equilibrio su una gamba", "Scarpe adatte e superfici regolari"] } },

    { t: "cards", kicker: "Prevenzione", title: "Proteggere le articolazioni", bg: "blue", grid: 2, cards: [
      { h: "Riscaldamento", p: "Il liquido sinoviale diventa più fluido e la cartilagine si prepara al carico." },
      { h: "Forza muscolare", p: "Muscoli forti stabilizzano spalla, ginocchio e caviglia." },
      { h: "Propriocezione", p: "Esercizi di equilibrio insegnano ai legamenti a reagire in fretta." },
      { h: "Mobilità", p: "Allungare ed escursioni complete mantengono l'ampiezza dei movimenti.", dark: true }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Le articolazioni si dividono in sinartrosi, anfiartrosi e diartrosi.",
      "Una diartrosi ha cartilagine, capsula, liquido sinoviale e legamenti.",
      "La forma delle superfici decide i movimenti: enartrosi, ginglimo, condiloartrosi, sella, artrodia.",
      "Spalla mobilissima, anca stabile, ginocchio e caviglia molto sollecitati nello sport.",
      "Riscaldamento, forza e propriocezione prevengono gli infortuni articolari."
    ] }
  ]
};
