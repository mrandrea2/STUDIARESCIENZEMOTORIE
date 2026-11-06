/* LEZIONE UNICA — Il sistema nervoso
   Fonti: «Il sistema nervoso» (prof. Andrea Bertelli) + slide del libro di testo. */
window.LEZIONI = window.LEZIONI || {};
LEZIONI["il-sistema-nervoso"] = {
  titolo: "Il cervello in campo",
  sottotitolo: "Sistema nervoso centrale e periferico, neuroni, sinapsi, riflessi e prestazione sportiva",
  slides: [
    { t: "cover", kicker: "Scienze motorie · Classe quarta", title: "Il cervello in campo", sub: "Sistema nervoso centrale e periferico, neuroni, sinapsi, riflessi e prestazione sportiva" },

    { t: "cards", kicker: "Per cominciare", title: "Un rigore in 0,4 secondi", cards: [
      { n: "1", h: "Vedi", p: "Gli occhi seguono la rincorsa e il piede del tiratore." },
      { n: "2", h: "Decidi", p: "Il cervello elabora e sceglie da che parte tuffarsi." },
      { n: "3", h: "Agisci", p: "Il comando corre lungo i nervi fino ai muscoli. Tutto in meno di mezzo secondo.", dark: true }
    ] },

    { t: "points", kicker: "Il quadro generale", title: "Due grandi parti", fig: { svg: "sn", cap: "Organizzazione del sistema nervoso" }, items: [
      ["Sistema nervoso centrale (SNC):", "encefalo e midollo spinale. Elabora le informazioni e decide."],
      ["Sistema nervoso periferico (SNP):", "i nervi che collegano il SNC a muscoli, organi e recettori."],
      ["SNP somatico:", "movimenti volontari dei muscoli scheletrici."],
      ["SNP autonomo:", "funzioni involontarie, con simpatico e parasimpatico."]
    ] },

    { t: "table", kicker: "Il cervello", title: "Quattro lobi, tante funzioni", head: ["Lobo", "Funzioni", "Nello sport"], rows: [
      ["Frontale", "Movimento volontario, decisioni, pianificazione", "Scegliere la giocata, eseguire il gesto"],
      ["Parietale", "Tatto, posizione del corpo nello spazio", "Sapere dove sono braccia e gambe"],
      ["Occipitale", "Visione", "Seguire la palla, leggere il campo"],
      ["Temporale", "Udito, memoria", "Sentire il fischio, ricordare gli schemi"]
    ], note: "Il cervelletto coordina i movimenti e l'equilibrio; il tronco encefalico regola respiro e battito." },

    { t: "points", kicker: "Il midollo spinale", title: "Autostrada e centro dei riflessi", bg: "blue", fig: { svg: "riflesso", cap: "L'arco del riflesso rotuleo" }, items: [
      ["Trasmette:", "i segnali tra cervello e resto del corpo."],
      ["Riflessi spinali:", "risposte automatiche che non passano dal cervello, rapidissime."],
      ["Riflesso rotuleo:", "un colpo sotto la rotula allunga il quadricipite, che si contrae e la gamba scatta."],
      ["Arco riflesso:", "recettore → neurone sensitivo → midollo → neurone motorio → muscolo."]
    ] },

    { t: "points", kicker: "Il neurone", title: "L'unità del sistema nervoso", fig: { svg: "neurone", cap: "Struttura di un neurone" }, items: [
      ["Dendriti:", "ricevono i segnali da altri neuroni."],
      ["Corpo cellulare:", "contiene il nucleo."],
      ["Assone:", "porta l'impulso lontano; la guaina mielinica lo rende molto più veloce."],
      ["Tre tipi:", "sensitivi (portano informazioni al SNC), motori (comandano i muscoli), interneuroni (collegano)."]
    ] },

    { t: "steps", kicker: "L'impulso nervoso", title: "Un segnale elettrico e chimico", steps: [
      { h: "Riposo", p: "Dentro il neurone la carica è negativa: circa −70 mV." },
      { h: "Potenziale d'azione", p: "Entrano ioni sodio: la carica si inverte e l'onda corre lungo l'assone." },
      { h: "Sinapsi", p: "Alla fine dell'assone si liberano neurotrasmettitori nello spazio sinaptico." },
      { h: "Neurone successivo", p: "I neurotrasmettitori si legano ai recettori e il segnale riparte." }
    ], lastDark: true },

    { t: "split", kicker: "Il sistema nervoso autonomo", title: "Acceleratore e freno", left: { h: "Simpatico · lotta o fuga", items: ["Aumenta battito e respiro", "Dilata le pupille", "Manda sangue ai muscoli", "Attivo in gara e sotto stress"] }, right: { h: "Parasimpatico · riposo e digestione", items: ["Rallenta il cuore", "Favorisce digestione e recupero", "Domina dopo lo sforzo e nel sonno", "Un parasimpatico efficiente = recupero migliore"] } },

    { t: "key", kicker: "La placca motoria", title: "Dove il nervo incontra il muscolo", lead: "Alla giunzione neuromuscolare il motoneurone libera acetilcolina: la fibra muscolare riceve il segnale e si contrae.", defs: [["Motoneurone", "neurone che comanda le fibre"], ["Acetilcolina", "neurotrasmettitore della contrazione"]] },

    { t: "cards", kicker: "Sistema nervoso e sport", title: "Il cervello allena il corpo", bg: "blue", grid: 2, cards: [
      { h: "Coordinazione", p: "Tempi e precisione dei movimenti dipendono dal dialogo cervello-muscoli." },
      { h: "Tempo di reazione", p: "Da 0,15 a 0,3 secondi: si migliora con l'esperienza e l'allenamento specifico." },
      { h: "Decisioni rapide", p: "Leggere il gioco e scegliere in frazioni di secondo." },
      { h: "Attenzione", p: "Mantenere la concentrazione evita errori.", dark: true }
    ] },

    { t: "points", kicker: "Plasticità neurale", title: "Il cervello cambia con l'allenamento", items: [
      ["Plasticità:", "il sistema nervoso si modifica con l'esperienza."],
      ["Ripetere:", "un gesto rafforza le sinapsi coinvolte: il movimento diventa automatico e fluido."],
      ["Homunculus:", "le aree della corteccia per mani e viso sono enormi perché richiedono movimenti finissimi."],
      ["Allenarsi:", "fa crescere anche il BDNF, una proteina che nutre i neuroni e aiuta la memoria."]
    ] },

    { t: "split", kicker: "Fatica e recupero", title: "Il cervello decide quando fermarti", left: { h: "Fatica centrale", items: ["Il cervello riduce il comando ai muscoli per proteggere il corpo", "La percezione della fatica regola l'intensità", "Motivazione e allenamento spostano il limite"] }, right: { h: "Il ruolo del sonno", items: ["Di notte il cervello consolida ciò che hai imparato", "Poco sonno: meno coordinazione e attenzione", "Gli adolescenti hanno bisogno di 8–10 ore"] } },

    { t: "table", kicker: "Lesioni nello sport", title: "Proteggere il sistema nervoso", head: ["Lesione", "Che cosa succede", "Prevenzione"], rows: [
      ["Commozione cerebrale", "Confusione, mal di testa, a volte perdita di coscienza", "Casco, regole, stop immediato e visita medica"],
      ["Lesioni spinali", "Danni al midollo, anche permanenti", "Tecnica corretta, tuffi solo in acque profonde"]
    ], note: "Dopo un colpo alla testa non si torna mai in campo lo stesso giorno: in caso di dubbio, fuori." },

    { t: "end", kicker: "In sintesi", title: "Le cinque cose da ricordare", items: [
      "Il SNC (encefalo e midollo) elabora, il SNP (nervi) trasmette.",
      "Il neurone riceve con i dendriti e trasmette con l'assone; la mielina accelera l'impulso.",
      "Alla sinapsi il segnale diventa chimico grazie ai neurotrasmettitori.",
      "Simpatico = lotta o fuga, parasimpatico = riposo e recupero.",
      "Con l'allenamento il cervello cambia: i gesti diventano automatici (plasticità)."
    ] }
  ]
};
