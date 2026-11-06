/* LEZIONE UNICA — PNEI: lifestyle e salute
   Fonti: «PNEI: salute e stile di vita», «Le exerchine», «Respirazione diaframmatica», «Il ruolo del sonno»,
   «Come l'attività fisica modula la salute», «Alimentazione e PNEI» (prof. Andrea Bertelli). */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["pnei-lifestyle-e-salute"] = {
  titolo: "Mente e corpo: un'unica rete",
  sottotitolo: "Psiconeuroendocrinoimmunologia: stress, movimento, alimentazione, sonno e respiro",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quarta", title: "Mente e corpo: un'unica rete", sub: "Psiconeuroendocrinoimmunologia: stress, movimento, alimentazione, sonno e respiro" },

    { t: "cards", kicker: "Per cominciare", title: "Ti è mai successo?", cards: [
      { n: "1", h: "Prima della verifica", p: "Mal di pancia, cuore che batte, mani fredde." },
      { n: "2", h: "Dopo un periodo difficile", p: "Ti ammali più spesso." },
      { n: "3", h: "Dopo una corsa", p: "Ti senti più sereno e lucido. La mente parla al corpo, e viceversa.", dark: true }
    ] },

    { t: "points", kicker: "Che cos'è la PNEI", title: "Psiche, nervi, ormoni, difese", fig: { svg: "pnei", cap: "La rete PNEI" }, items: [
      ["PNEI:", "la disciplina che studia i legami tra psiche, sistema nervoso, endocrino e immunitario."],
      ["Un linguaggio comune:", "neurotrasmettitori, ormoni e citochine si parlano tra loro."],
      ["Esempio:", "durante un'infezione le citochine arrivano al cervello: ti senti stanco e senza voglia."],
      ["Scopo:", "mantenere l'omeostasi e reagire in modo coordinato a ogni sfida."]
    ] },

    { t: "points", kicker: "Lo stress", title: "L'asse dello stress", bg: "blue", fig: { svg: "stress", cap: "Asse ipotalamo-ipofisi-surrene" }, items: [
      ["Il cervello percepisce una minaccia:", "una gara, un esame, un litigio."],
      ["Ipotalamo e ipofisi:", "attivano le surrenali."],
      ["Cortisolo e adrenalina:", "più energia, più battito, più vigilanza."],
      ["Acuto:", "è utile, ti prepara all'azione."]
    ] },

    { t: "split", kicker: "Quando lo stress non finisce", title: "Stress acuto e stress cronico", left: { h: "Acuto · utile", items: ["Dura minuti o ore", "Mobilita energia", "Migliora attenzione e prestazione"] }, right: { h: "Cronico · dannoso", items: ["Dura settimane o mesi", "Cortisolo sempre alto: difese più deboli", "Ferite che guariscono più lentamente, più raffreddori", "Infiammazione cronica, sonno disturbato"] } },

    { t: "points", kicker: "Il movimento", title: "Il farmaco più potente", items: [
      ["Antistress:", "l'attività moderata e regolare abbassa i livelli di base di cortisolo e adrenalina."],
      ["Umore:", "endorfine, dopamina e serotonina: meno ansia, più benessere."],
      ["Cervello:", "più BDNF, la proteina che nutre i neuroni: memoria e apprendimento migliorano."],
      ["Difese:", "più cellule immunitarie in circolo e meno infiammazione cronica."],
      ["Equilibrio:", "senza recupero, anche l'esercizio diventa uno stress."]
    ] },

    { t: "key", kicker: "Le exerchine", title: "Messaggi chimici del movimento", lead: "Quando ti alleni, muscoli, cuore, fegato e tessuto adiposo liberano molecole-segnale chiamate exerchine (termine nato nel 2016): parlano con cervello, difese e metabolismo.", defs: [["Miochine", "dai muscoli, es. IL-6, irisina"], ["Effetti", "meno infiammazione, più sensibilità all'insulina"]] },

    { t: "cards", kicker: "Le exerchine al lavoro", title: "Un dialogo tra organi", bg: "blue", grid: 2, cards: [
      { h: "Sul cervello", p: "BDNF: nuovi neuroni nell'ippocampo, area della memoria. Più umore e motivazione." },
      { h: "Sulle difese", p: "Dopo lo sforzo salgono IL-10 e IL-1RA, citochine antinfiammatorie." },
      { h: "Sul metabolismo", p: "Migliorano l'uso di zuccheri e grassi e la sensibilità all'insulina." },
      { h: "Sul muscolo", p: "La follistatina contrasta la miostatina e favorisce la crescita.", dark: true }
    ] },

    { t: "split", kicker: "L'alimentazione", title: "Il carburante della rete PNEI", left: { h: "Infiammano", items: ["Zuccheri e cibi ultraprocessati", "Eccesso di grassi saturi", "Grasso viscerale in eccesso (adipochine)", "Carenze di vitamine e minerali"] }, right: { h: "Proteggono", items: ["Dieta mediterranea", "Omega-3: pesce azzurro, noci, semi di lino", "Fibre per un microbiota sano (asse intestino-cervello)", "Vitamina D e C, zinco"] } },

    { t: "points", kicker: "Il sonno", title: "Il reset notturno", fig: { svg: "sonnociclo", cap: "I cicli del sonno" }, items: [
      ["Di notte:", "melatonina alta, cortisolo basso; si producono citochine protettive."],
      ["Al mattino:", "il cortisolo sale, con un picco 30 minuti dopo il risveglio."],
      ["Poco sonno:", "cortisolo e grelina (fame) salgono, leptina e testosterone scendono."],
      ["Per i ragazzi:", "8–10 ore, orari regolari, niente schermi prima di dormire."]
    ] },

    { t: "points", kicker: "Il respiro", title: "Il telecomando del sistema nervoso", bg: "blue", items: [
      ["Respirazione diaframmatica:", "lenta e profonda, con la pancia che si solleva."],
      ["Effetti:", "abbassa il cortisolo, la frequenza respiratoria e la pressione; attiva il parasimpatico attraverso il nervo vago."],
      ["Nello sport:", "5 minuti di respiro lento migliorano la prestazione sotto pressione (es. tiro a segno)."],
      ["Tecniche:", "quadrata 4-4-4-4, triangolare 4-4-4, coerenza cardiaca 5-5, di pancia."]
    ] },

    { t: "cards", kicker: "Strategie pratiche", title: "Uno stile di vita PNEI", grid: 2, line: true, cards: [
      { h: "Gestisci lo stress", p: "Respiro, mindfulness, natura, musica, un amico con cui parlare." },
      { h: "Muoviti ogni giorno", p: "Attività moderata, piacevole, con il recupero giusto." },
      { h: "Mangia mediterraneo", p: "Cibi freschi, vegetali, pesce, olio EVO; poco zucchero e cibo spazzatura." },
      { h: "Evita ciò che infiamma", p: "Niente fumo, niente alcol, niente sostanze." }
    ], note: "Le relazioni contano: sentirsi sostenuti riduce lo stress e ha effetti misurabili sulle difese. Chiedere aiuto è una forza." },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Psiche, sistema nervoso, endocrino e immunitario sono un'unica rete (PNEI).",
      "Lo stress acuto aiuta; quello cronico, con il cortisolo sempre alto, abbassa le difese.",
      "Il movimento regolare libera exerchine che proteggono cervello, metabolismo e immunità.",
      "Alimentazione mediterranea e sonno di qualità tengono bassa l'infiammazione.",
      "Il respiro lento è il modo più rapido per calmare il sistema nervoso."
    ] }
  ]
};
