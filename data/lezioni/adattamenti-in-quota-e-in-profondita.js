/* LEZIONE UNICA — Adattamenti in quota e in profondità
   Fonti: «Effetti dell'allenamento in quota» e «Gli effetti fisiologici della profondità in acqua» (prof. Andrea Bertelli). */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["adattamenti-in-quota-e-in-profondita"] = {
  titolo: "Su in montagna, giù nel mare",
  sottotitolo: "Come si adatta il corpo all'altitudine e alla pressione dell'acqua",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quarta", title: "Su in montagna, giù nel mare", sub: "Come si adatta il corpo all'altitudine e alla pressione dell'acqua" },

    { t: "cards", kicker: "Per cominciare", title: "Due ambienti estremi", cards: [
      { n: "8848 m", h: "In cima all'Everest", p: "Ogni respiro porta circa un terzo dell'ossigeno del livello del mare." },
      { n: "−100 m", h: "In apnea profonda", p: "La pressione è 11 volte quella in superficie." },
      { n: "?", h: "Come fa il corpo?", p: "Si adatta: con il cuore, il sangue, il respiro e i riflessi.", dark: true }
    ] },

    { t: "points", kicker: "In quota", title: "L'aria è più rarefatta", fig: { svg: "montagna", cap: "Pressione e ossigeno disponibile con l'altitudine" }, items: [
      ["La percentuale di O₂:", "resta circa il 21% a qualsiasi quota."],
      ["Cala la pressione:", "l'aria è meno densa, quindi in ogni respiro c'è meno ossigeno."],
      ["Ipossia:", "il sangue trasporta meno ossigeno ai muscoli."],
      ["Allenamento in altura:", "di solito oltre i 2000 metri."]
    ] },

    { t: "split", kicker: "Le risposte del corpo", title: "Subito e dopo settimane", left: { h: "Risposte immediate", items: ["Più respiri al minuto (ventilazione)", "Battito più alto a riposo e sotto sforzo", "Prestazione aerobica più bassa"] }, right: { h: "Acclimatamento", items: ["I reni producono più EPO", "Più globuli rossi ed emoglobina", "Più capillari e mitocondri", "Serve da qualche giorno a qualche settimana"] } },

    { t: "cards", kicker: "Perché allenarsi in altura", title: "I benefici", bg: "blue", grid: 2, cards: [
      { h: "Più ossigeno trasportato", p: "Più globuli rossi = più ossigeno ai muscoli." },
      { h: "Più resistenza", p: "Migliora la capacità aerobica." },
      { h: "Vantaggio al mare", p: "Tornati in pianura, l'effetto dura alcune settimane." },
      { h: "Live high, train low", p: "Molti atleti dormono in quota e si allenano più in basso.", dark: true }
    ] },

    { t: "split", kicker: "I rischi", title: "Il mal di montagna", left: { h: "Sintomi", items: ["Mal di testa, nausea", "Stanchezza, sonno disturbato", "Difficoltà di concentrazione"] }, right: { h: "Prevenzione", items: ["Salire gradualmente", "Bere molto: l'aria è secca", "Allenamenti più leggeri nei primi giorni", "Se i sintomi peggiorano, scendere"] } },

    { t: "split", kicker: "Ipossia simulata", title: "La montagna in casa", left: { h: "Come", items: ["Camere ipobariche o tende ipossiche", "Maschere che riducono l'ossigeno inspirato"] }, right: { h: "Pro e contro", items: ["Comode, niente viaggi", "Efficacia ancora discussa", "Non riproducono freddo, sole e terreno"] } },

    { t: "points", kicker: "In profondità", title: "La pressione cresce in fretta", bg: "blue", fig: { svg: "boyle", cap: "Pressione e volume dell'aria nei polmoni" }, items: [
      ["Ogni 10 metri:", "la pressione aumenta di 1 atmosfera."],
      ["A 10 m:", "2 atm; a 20 m: 3 atm; a 30 m: 4 atm."],
      ["Legge di Boyle:", "a temperatura costante pressione × volume resta uguale: se la pressione raddoppia, il volume si dimezza."],
      ["Esempio:", "a 20 metri l'aria nei polmoni di un apneista occupa un terzo del volume di superficie."]
    ] },

    { t: "key", kicker: "Il riflesso d'immersione", title: "Il corpo risparmia ossigeno", lead: "Appena il viso tocca l'acqua fredda si attiva un riflesso che abbiamo in comune con i mammiferi marini.", defs: [["Bradicardia", "il cuore rallenta e consuma meno"], ["Vasocostrizione", "meno sangue a braccia e gambe, più a cuore e cervello"]] },

    { t: "split", kicker: "Apnea", title: "Senza bombole", left: { h: "Che cosa succede", items: ["Il riflesso d'immersione è molto evidente", "Blood shift: oltre 30–40 m il sangue si sposta nel torace e protegge i polmoni", "Serve grande preparazione fisica e mentale"] }, right: { h: "Sicurezza", items: ["Mai in apnea da soli", "Mai iperventilare prima: rischio di svenire in acqua", "Rispettare i propri limiti"] } },

    { t: "table", kicker: "Con l'autorespiratore", title: "I gas sotto pressione", head: ["Problema", "Che cosa succede", "Prevenzione"], rows: [
      ["Narcosi da azoto", "Oltre 30–40 m: euforia, confusione, come un'ubriacatura", "Limiti di profondità, miscele con elio"],
      ["Tossicità dell'ossigeno", "A pressione alta: convulsioni, perdita di coscienza", "Miscele adatte alla profondità"],
      ["Malattia da decompressione", "Risalita troppo veloce: l'azoto forma bolle, come una bibita stappata", "Risalita lenta, tappe di decompressione"]
    ] },

    { t: "cards", kicker: "Le regole d'oro", title: "Immergersi in sicurezza", grid: 2, line: true, cards: [
      { h: "Respira regolare", p: "Con le bombole non trattenere mai il fiato in risalita." },
      { h: "Rispetta i limiti", p: "Di profondità e di tempo per ogni immersione." },
      { h: "Risali lentamente", p: "Segui il computer subacqueo o la guida." },
      { h: "Mai da solo", p: "Sempre con un compagno, in apnea e con le bombole." }
    ] },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "In quota la percentuale di ossigeno non cambia, ma cala la pressione: meno O₂ in ogni respiro.",
      "Con l'acclimatamento aumentano EPO e globuli rossi: per questo gli atleti si allenano in altura.",
      "In acqua la pressione sale di 1 atmosfera ogni 10 metri; il volume dell'aria si riduce (legge di Boyle).",
      "Il riflesso d'immersione rallenta il cuore e manda il sangue agli organi vitali.",
      "Narcosi, tossicità dell'ossigeno e decompressione si prevengono rispettando le regole."
    ] }
  ]
};
