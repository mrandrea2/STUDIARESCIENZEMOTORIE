/* =========================================================
   ARGOMENTI DEL SITO — Prof. Andrea Bertelli
   ---------------------------------------------------------
   Per aggiungere materiale a un argomento, aggiungi una riga
   in "materiali". Tipi disponibili:
     pdf    → file su Drive (PDF, PPTX, DOCX)  id = ID del file Drive
     video  → video su Drive (.mp4)            id = ID del file Drive
     audio  → podcast su Drive (.m4a/.mp3)     id = ID del file Drive
     slides → Presentazione Google             id = ID della presentazione
     yt     → video YouTube                    id = codice del video
     form   → Google Moduli (quiz)             id = codice dopo /d/e/
     la     → gioco LearningApps               id = codice dopo ?v=
     link   → qualunque altro sito             url = indirizzo completo
   L'ID Drive è la parte di link tra /d/ e /view
   Esempio: drive.google.com/file/d/1AbCdEf.../view  →  id: "1AbCdEf..."
   ========================================================= */

window.TOPICS = [
  {
    id: "metodo-di-studio",
    titolo: "Metodo di studio",
    sottotitolo: "imparare a imparare",
    classi: [1, 2, 3, 4, 5],
    obiettivi: [
      "Capire come funziona il cervello quando impara",
      "Organizzare il tempo di studio in modo efficace",
      "Memorizzare meglio e ricordare più a lungo",
      "Gestire stress e ansia da verifica",
      "Allenare attenzione e concentrazione"
    ],
    evidenza: [
      { titolo: "Cervello in gioco", testo: "Scopri come funziona il tuo cervello quando studi, ricordi e ti concentri." },
      { titolo: "Sblocca il tuo potenziale", testo: "Strategie pratiche per organizzarti, studiare meglio e ottenere di più." }
    ],
    materiali: []
  },

  /* ---------------- CLASSE PRIMA ---------------- */
  {
    id: "la-salute-dinamica",
    titolo: "La salute dinamica",
    sottotitolo: "ogni movimento conta",
    classi: [1],
    obiettivi: [
      "Sostituire la sedentarietà con qualsiasi tipo di movimento",
      "Bambini e adolescenti: almeno 60 minuti al giorno di attività moderata-vigorosa",
      "Adulti: almeno 150 minuti a settimana di attività moderata",
      "Muoversi a piedi o in bici salvaguarda l'ambiente",
      "Fare attività con i compagni migliora la socialità",
      "Alimentazione, movimento e sonno per una vita più sana"
    ],
    materiali: [
      { tipo: "pdf", id: "1_5ZMzXjYaezJ_7Au8urmZ15rFLt5-vNX", titolo: "Sonno e benessere" },
      { tipo: "yt", id: "ub747pprmJ8", titolo: "Video introduttivo" }
    ],
    extra: [
      { tipo: "form", id: "1FAIpQLSfoXFm7tWWKsdNJmsZ_bIXyr2Al6xTDLl_zHi7XKD4ityc8xQ", titolo: "Quiz: salute dinamica" },
      { tipo: "la", id: "phrg6e51n24", titolo: "Prevenire è meglio che curare" },
      { tipo: "la", id: "pa0aamsmc24", titolo: "Benessere e salute: quiz" },
      { tipo: "la", id: "p0s7z8trk24", titolo: "Memory dei cibi sani" }
    ]
  },
  {
    id: "sistema-scheletrico",
    titolo: "Il sistema scheletrico",
    sottotitolo: "l'impalcatura del corpo",
    classi: [1],
    obiettivi: [
      "Struttura e funzioni del sistema scheletrico",
      "Tipologie di tessuto osseo e cellule ossee",
      "Anatomia della colonna vertebrale e principali patologie",
      "Struttura del cranio e della gabbia toracica",
      "Patologie del sistema scheletrico"
    ],
    materiali: [
      { tipo: "yt", id: "hWJikT7WP_E", titolo: "Video di ripasso" }
    ],
    domande: [
      "Qual è la differenza tra osso compatto e osso spugnoso per struttura e funzione?",
      "Quali sono i ruoli di osteoblasti, osteoclasti e osteociti?",
      "Come si rimodella l'osso in risposta all'attività fisica intensa o a un trauma?"
    ]
  },
  {
    id: "le-articolazioni",
    titolo: "Le articolazioni",
    sottotitolo: "dove nasce il movimento",
    classi: [1],
    obiettivi: [
      "Struttura e funzioni dei diversi tipi di articolazione",
      "Spalla, gomito e polso",
      "Anca, ginocchio e caviglia",
      "I movimenti permessi da ogni articolazione",
      "Gli infortuni articolari più comuni nello sport"
    ],
    materiali: [
      { tipo: "yt", id: "hWJikT7WP_E", titolo: "Il sistema scheletrico e l'apparato locomotore · La Biologia per tutti" },
      { tipo: "pdf", id: "123XYIAbf3NAeMaLpdKoDqYCzWn0yfvo_", titolo: "Approfondimento articolazioni" },
      { tipo: "pdf", id: "1S5_e9an_Cj9iIDLGM4Lm3l9QQEK8EgiG", titolo: "Tabella delle articolazioni" },
      { tipo: "pdf", id: "1_4Q_z9fZwNXnlkypzqJRAnsd6NwboDPf", titolo: "Scheda: spalla" },
      { tipo: "pdf", id: "1U2_jmHK_tgzbpAxpbUJAuNJeUPX6zsnS", titolo: "Scheda: gomito" },
      { tipo: "pdf", id: "1A4BIRTFtbOA0bO3gxW6yojdEkKDs32pH", titolo: "Scheda: anca" },
      { tipo: "pdf", id: "177oMj-Qt0rOqmq4R_G2frCnhUZIEVcvA", titolo: "Scheda: ginocchio" }
    ]
  },
  {
    id: "sistema-muscolare",
    titolo: "Il sistema muscolare",
    sottotitolo: "il motore del movimento",
    classi: [1],
    obiettivi: [
      "Le fibre muscolari",
      "Tipi di muscolo e loro funzioni",
      "Il meccanismo della contrazione muscolare",
      "Muscoli agonisti, antagonisti e sinergici",
      "Il reclutamento delle fibre muscolari",
      "Applicazioni pratiche nello sport"
    ],
    materiali: [
      { tipo: "yt", id: "lJ7f3uEI5To", titolo: "Il tessuto muscolare · La Biologia per tutti" },
      { tipo: "pdf", id: "12K-rUfsqC4fTSgJ6bZDJ_SpyA7KiKQ_T", titolo: "Come crescono i muscoli?", nota: "Documento di sintesi" }
    ]
  },

  {
    id: "le-capacita-coordinative",
    titolo: "Le capacità coordinative",
    sottotitolo: "coordinazione ed equilibrio",
    classi: [3],
    obiettivi: [
      "Distinguere movimento riflesso, volontario e automatizzato",
      "Capacità condizionali e coordinative: che cosa le differenzia",
      "Le capacità coordinative generali e speciali",
      "L'equilibrio: statico, dinamico, in volo, e come migliorarlo",
      "Il controllo motorio: percezione, elaborazione, esecuzione, feedback",
      "Le fasi dell'apprendimento motorio e come si allena la coordinazione (in quarta lo approfondirai)"
    ],
    sintesi: [
      ["Capacità coordinative", "Dipendono dal sistema nervoso: organizzano e regolano il movimento, lo rendono preciso ed economico."],
      ["Generali", "Apprendimento motorio, controllo motorio, adattamento e trasformazione del movimento."],
      ["Speciali", "Combinazione, differenziazione, orientamento, ritmo, reazione, equilibrio, fantasia motoria."],
      ["Equilibrio", "Statico, dinamico, in volo. Base larga, baricentro basso e sguardo fisso aumentano la stabilità."],
      ["Controllo motorio", "Sistema percettivo, elaborativo, effettore e di controllo (feedback)."],
      ["Apprendimento", "Coordinazione grezza → coordinazione fine → disponibilità variabile."]
    ],
    materiali: [
      { tipo: "link", url: "https://www.mobilesport.ch/wp-content/uploads/2013/10/praxis_2008_38_Koordination_i.pdf", titolo: "Esercizi di coordinazione", nota: "mobilesport.ch · Ufficio federale dello sport (CH)" }
    ]
  },

  {
    id: "l-apprendimento-motorio",
    titolo: "L'apprendimento motorio",
    sottotitolo: "come si impara un gesto",
    classi: [4],
    obiettivi: [
      "Distinguere apprendimento e prestazione",
      "Controllo ad anello aperto e ad anello chiuso",
      "Le teorie: Adams, Schmidt (schema e programma motorio generalizzato), approccio ecologico",
      "Le fasi dell'apprendimento secondo Fitts e Posner e secondo Meinel e Schnabel",
      "Memoria motoria, feedback, organizzazione della pratica e focus dell'attenzione",
      "Collegare l'apprendimento motorio alle capacità coordinative studiate in terza"
    ],
    sintesi: [
      ["Apprendimento", "Cambiamento relativamente stabile della capacità di eseguire un gesto, dovuto a pratica ed esperienza. Si verifica con test di ritenzione e di transfer."],
      ["Controllo", "Anello aperto: gesto rapido senza correzioni. Anello chiuso: il feedback corregge durante il gesto."],
      ["Teorie", "Adams: traccia mnestica e percettiva. Schmidt: programma motorio generalizzato e schema. Approccio ecologico: individuo, compito e ambiente."],
      ["Fasi", "Cognitiva → associativa → autonoma (Fitts e Posner); grezza → fine → disponibilità variabile (Meinel e Schnabel)."],
      ["Pratica", "Variata e casuale: più fatica subito, più apprendimento dopo. Feedback ridotto gradualmente. Focus esterno sull'effetto del gesto."],
      ["Collegamento", "L'apprendimento motorio è la capacità coordinativa generale che sta alla base di tutte le altre."]
    ],
    materiali: []
  },

  /* ---------------- CLASSE SECONDA / TERZA ---------------- */
  {
    id: "il-primo-soccorso",
    titolo: "Il primo soccorso",
    sottotitolo: "sapere cosa fare",
    classi: [2],
    obiettivi: [
      "Il dovere di soccorso e il codice di comportamento",
      "Chiamare il 112 nel modo giusto",
      "Valutare coscienza e respiro; la posizione laterale di sicurezza",
      "La rianimazione cardiopolmonare e il defibrillatore (DAE)",
      "Il soffocamento da corpo estraneo",
      "Traumi, ferite ed emorragie: che cosa fare e che cosa non fare"
    ],
    sintesi: [
      ["Codice di comportamento", "Sicurezza della scena, valutazione, chiamata al 112, intervento con ciò che sai fare."],
      ["112", "Dove, che cosa è successo, quante persone, come stanno, il tuo numero."],
      ["RCP", "Mani al centro del torace, 5–6 cm, 100–120 al minuto, 30 compressioni e 2 ventilazioni."],
      ["DAE", "Lo può usare chiunque: si accende e guida con la voce."],
      ["Posizione laterale di sicurezza", "Per chi respira ma non è cosciente: le vie aeree restano libere."],
      ["RICE", "Riposo, ghiaccio, compressione, elevazione: per distorsioni, stiramenti e contusioni."]
    ],
    materiali: [
      { tipo: "link", url: "https://www.ircouncil.it/", titolo: "Italian Resuscitation Council", nota: "Linee guida e corsi BLSD" }
    ]
  },
  {
    id: "apparato-cardio-circolatorio",
    titolo: "Apparato cardio-circolatorio",
    sottotitolo: "il cuore dell'atleta",
    classi: [2],
    obiettivi: [
      "Struttura e funzione del cuore",
      "Il ciclo cardiaco",
      "Circolazione polmonare e sistemica",
      "Tipi di vasi sanguigni",
      "Il ruolo del cuore nell'attività fisica",
      "Adattamenti cardiaci all'allenamento",
      "Prevenire le malattie cardiovascolari croniche"
    ],
    materiali: [
      { tipo: "pdf", id: "1NOdJbZ-BpDtD3Iv8tM1rA-XX7MfMmnlt", titolo: "Prevenzione cardiovascolare", nota: "Ministero della Salute" },
      { tipo: "yt", id: "TnXaetHt6vY", titolo: "Video di ripasso" }
    ],
    extra: [
      { tipo: "form", id: "1FAIpQLSc7zAY_fLn_zGIZUAZPgazII7o6TP0PsmoUaHRcW8qrXHZWJg", titolo: "Quiz: apparato cardio-circolatorio" }
    ]
  },
  {
    id: "apparato-respiratorio",
    titolo: "Apparato respiratorio",
    sottotitolo: "il respiro e lo sport",
    classi: [2],
    obiettivi: [
      "Struttura dell'apparato respiratorio",
      "Il processo di ventilazione polmonare",
      "Gli scambi gassosi",
      "Il trasporto dei gas nel sangue",
      "La regolazione della respirazione",
      "Gli adattamenti respiratori all'esercizio fisico"
    ],
    materiali: [
      { tipo: "yt", id: "UHpqXOSi4Q0", titolo: "Apparato respiratorio · La Biologia per tutti" },
      { tipo: "link", url: "https://polmonifumo.vercel.app/#top", titolo: "Polmoni e fumo: sito interattivo" },
      { tipo: "audio", id: "1IGfLeFNeKxyGUfy5qk3za9tQceio4Sa6", titolo: "Podcast introduttivo" }
    ]
  },
  {
    id: "i-metabolismi-energetici",
    titolo: "I metabolismi energetici",
    sottotitolo: "da dove arriva l'energia",
    classi: [2, 3],
    obiettivi: [
      "I tre sistemi energetici: anaerobico alattacido, anaerobico lattacido, aerobico",
      "Il ruolo di ogni sistema in base a intensità e durata dello sforzo",
      "Usare i metabolismi energetici per allenarsi meglio"
    ],
    materiali: [
      { tipo: "yt", id: "eNOJhnzjmbE", titolo: "La glicolisi · La Biologia per tutti" }
    ]
  },
  {
    id: "teoria-dellallenamento",
    titolo: "Teoria dell'allenamento",
    sottotitolo: "carico, recupero, supercompensazione",
    classi: [2, 3, 4],
    obiettivi: [
      "Carico esterno e carico interno",
      "La supercompensazione e come sfruttarla",
      "L'overtraining e come prevenirlo",
      "I mezzi dell'allenamento sportivo",
      "L'allenamento in età giovanile e il modello LTAD",
      "I principi dell'allenamento",
      "Le fasi della seduta e il riscaldamento",
      "Le differenze di genere nello sport"
    ],
    materiali: [
      { tipo: "link", url: "https://maratona-galilei.vercel.app/#/", titolo: "Esempio: piano di allenamento per la maratona" }
    ]
  },
  {
    id: "le-capacita-condizionali",
    titolo: "Le capacità condizionali",
    sottotitolo: "forza, resistenza, velocità, flessibilità",
    classi: [2, 3],
    obiettivi: [
      "Le capacità motorie che determinano la prestazione",
      "I tipi di resistenza e i metodi per allenarla",
      "La forza: il concetto di 1RM e i metodi di allenamento",
      "La flessibilità per la prestazione e la postura",
      "Come fare stretching e a cosa serve",
      "Velocità e rapidità: come allenarle"
    ],
    materiali: [
      { tipo: "yt", id: "SXxuQz0R-8U", titolo: "Video di approfondimento 1" }
    ]
  },

  /* ---------------- NUOVI: CLASSE TERZA ---------------- */
  {
    id: "dal-gioco-allo-sport",
    titolo: "Dal gioco allo sport",
    sottotitolo: "open skills e closed skills",
    classi: [3],
    obiettivi: [
      "Che differenza c'è tra gioco, gioco presportivo e sport",
      "Le abilità aperte (open skills) e chiuse (closed skills)",
      "Altri modi di classificare le abilità: discrete, seriali, continue",
      "Come si allena un'abilità aperta e come una chiusa",
      "Esempi dalle discipline praticate a scuola"
    ],
    sintesi: [
      ["Gioco", "Attività libera, piacevole, fine a se stessa, con regole che i giocatori possono cambiare."],
      ["Sport", "Attività motoria con regole codificate e condivise, organizzata da federazioni, con una dimensione competitiva."],
      ["Open skills", "Abilità eseguite in un ambiente che cambia e non è prevedibile (avversari, compagni, palla). Contano lettura della situazione, anticipazione e decisione. Esempi: pallavolo, calcio, tennis, scherma."],
      ["Closed skills", "Abilità eseguite in un ambiente stabile e prevedibile: è l'atleta a decidere quando iniziare. Contano precisione e ripetibilità del gesto. Esempi: tuffi, ginnastica artistica, lancio del peso, tiro a segno."],
      ["Un continuum", "Molti gesti stanno a metà: il servizio nel tennis o nella pallavolo è chiuso, lo scambio che segue è aperto."],
      ["Come allenarle", "Closed: ripetizione, pratica costante, feedback sul gesto. Open: pratica variabile, giochi a campo ridotto, situazioni di gioco reali."]
    ],
    materiali: []
  },
  {
    id: "apparato-digerente",
    titolo: "L'apparato digerente",
    sottotitolo: "dal cibo all'energia",
    classi: [3],
    obiettivi: [
      "Gli organi dell'apparato digerente e il percorso del cibo",
      "Digestione meccanica e digestione chimica",
      "Gli enzimi e i nutrienti che scompongono",
      "Il ruolo di fegato e pancreas",
      "L'assorbimento nell'intestino",
      "Digestione e attività sportiva"
    ],
    sintesi: [
      ["Bocca", "Inizia la digestione: masticazione (meccanica) e saliva con amilasi, che comincia a scomporre l'amido."],
      ["Esofago", "Trasporta il bolo allo stomaco grazie alla peristalsi, onde di contrazione della muscolatura liscia."],
      ["Stomaco", "Acido cloridrico e pepsina iniziano la digestione delle proteine. Il bolo diventa chimo."],
      ["Intestino tenue", "Duodeno, digiuno e ileo. Qui avviene la maggior parte della digestione e dell'assorbimento, grazie a villi e microvilli."],
      ["Fegato e pancreas", "Il fegato produce la bile (conservata nella cistifellea) che emulsiona i grassi. Il pancreas versa enzimi (lipasi, amilasi, tripsina) e bicarbonato."],
      ["Intestino crasso", "Assorbe acqua e sali, ospita il microbiota intestinale e forma le feci."],
      ["E lo sport?", "Durante uno sforzo intenso il sangue viene dirottato ai muscoli e la digestione rallenta. Pasto completo 3–4 ore prima, spuntino leggero fino a 1 ora prima."]
    ],
    materiali: [
      { tipo: "yt", id: "RDnlYnrodyQ", titolo: "Apparato digerente · La Biologia per tutti" },]
  },
  {
    id: "test-motori",
    titolo: "I test motori",
    sottotitolo: "misurare per migliorare",
    classi: [3],
    obiettivi: [
      "Perché si fanno i test e come renderli affidabili",
      "Test di Cooper, beep test e Bronco test: la resistenza",
      "Illinois test e test a navetta: agilità e velocità",
      "Leggere i propri risultati e confrontarli nel tempo",
      "Progettare un riscaldamento adatto alla prova"
    ],
    sintesi: [
      ["Regole d'oro", "Stesso riscaldamento, stesso orario, stessa superficie, stesse istruzioni. Solo così i risultati sono confrontabili nel tempo."],
      ["Test di Cooper", "Corri la distanza più lunga possibile in 12 minuti. Dalla distanza si stima il massimo consumo di ossigeno (VO₂max)."],
      ["Beep test", "Navette di 20 m a ritmo dettato da un segnale sonoro che accelera ogni minuto (livello). Ti fermi quando non riesci più a stare nel ritmo."],
      ["Bronco test", "Navette andata-ritorno a 20, 40 e 60 m, ripetute 5 volte senza pausa (1200 m totali). Si misura il tempo."],
      ["Illinois agility test", "Percorso di 10 × 5 m con 4 coni centrali da superare a slalom. Si parte sdraiati a pancia in giù. Misura l'agilità."],
      ["Test a navetta", "Brevi spostamenti ripetuti (es. 4 × 10 m) con cambi di direzione: velocità, accelerazione e frenata."]
    ],
    calcolatori: true,
    materiali: []
  },

  /* ---------------- CLASSE TERZA ---------------- */
  {
    id: "principi-per-una-sana-alimentazione",
    titolo: "Principi per una sana alimentazione",
    sottotitolo: "colazione, dieta mediterranea, sostenibilità",
    classi: [3],
    obiettivi: [
      "I benefici di una colazione regolare e cosa metterci",
      "La piramide della dieta mediterranea",
      "Quanti pasti fare e come distribuirli",
      "Quante porzioni di frutta e verdura",
      "L'idratazione: quanta acqua bere",
      "Leggere le etichette di cibi e bevande",
      "Cosa significa mangiare in modo sostenibile"
    ],
    sintesi: [
      ["Cinque pasti", "Colazione 15–20%, spuntino 5%, pranzo 35–40%, merenda 5%, cena 30–35% delle calorie della giornata."],
      ["Frutta e verdura", "Cinque porzioni al giorno, di tanti colori diversi. La verdura è la base della dieta."],
      ["Grassi buoni", "L'olio extravergine di oliva è la fonte principale di grassi sani."],
      ["Cosa limitare", "Carne rossa durante la settimana, zuccheri semplici e bevande zuccherate. Meglio i cereali integrali."],
      ["Acqua", "6–8 bicchieri al giorno, a piccoli sorsi, di più se fai sport. L'acqua non ha calorie."],
      ["Sostenibilità", "Prodotti di stagione, meno spreco di cibo: fa bene alla salute e al pianeta."]
    ],
    materiali: [
      { tipo: "yt", id: "YlSf3j_lK3M", titolo: "Le biomolecole · La Biologia per tutti" }
    ],
    extra: [
      { tipo: "link", url: "https://bit.ly/nonsprecarecibolearningapp", titolo: "Compito a casa: non sprecare il cibo", nota: "Metti le azioni sostenibili nel riquadro giusto" }
    ]
  },

  /* ---------------- CLASSE QUARTA ---------------- */
  {
    id: "il-sistema-nervoso",
    titolo: "Il sistema nervoso",
    sottotitolo: "la regia del movimento",
    classi: [4],
    obiettivi: [
      "La struttura del sistema nervoso",
      "Le funzioni delle parti del sistema nervoso centrale",
      "Il sistema nervoso periferico e il controllo dei movimenti",
      "Come viaggiano i segnali nervosi",
      "Plasticità neurale e adattamento all'allenamento",
      "Il ruolo del sistema nervoso nello sport"
    ],
    materiali: [
      { tipo: "yt", id: "t806EymH7Kg", titolo: "Organizzazione del sistema nervoso · La Biologia per tutti" }
    ],
    extra: [
      { tipo: "form", id: "1FAIpQLSdSRqh8VybtrUqPxra-aF9I-OZAIKVcVOArSzqMDoVuVFV-HA", titolo: "Test: sistema nervoso" }
    ]
  },
  {
    id: "il-sistema-endocrino",
    titolo: "Il sistema endocrino",
    sottotitolo: "gli ormoni e lo sport",
    classi: [4],
    obiettivi: [
      "Il sistema endocrino regola il corpo umano",
      "Ogni ghiandola endocrina ha un ruolo specifico",
      "Gli ormoni influenzano direttamente la prestazione",
      "L'attività fisica stimola la produzione di ormoni",
      "Gli squilibri ormonali compromettono salute e prestazione"
    ],
    materiali: [
      { tipo: "yt", id: "H24GJOLXz1A", titolo: "Il sistema endocrino" }
    ]
  },
  {
    id: "il-sistema-immunitario",
    titolo: "Il sistema immunitario",
    sottotitolo: "le difese dell'organismo",
    classi: [4],
    obiettivi: [
      "Il sistema immunitario è fondamentale per la salute",
      "Immunità innata e immunità acquisita",
      "La funzione degli anticorpi",
      "Il sistema linfatico",
      "Immunodepressione e malattie autoimmuni",
      "Il ruolo dei vaccini nella prevenzione"
    ],
    materiali: [
      { tipo: "yt", id: "LL7aKX2K_XM", titolo: "Il sistema linfatico · La Biologia per tutti" }
    ]
  },
  {
    id: "pnei-lifestyle-e-salute",
    titolo: "PNEI: lifestyle e salute",
    sottotitolo: "mente e corpo sono un unico sistema",
    classi: [4],
    obiettivi: [
      "La connessione mente-corpo",
      "Lo stile di vita e la prevenzione delle malattie",
      "I benefici della dieta mediterranea",
      "L'attività fisica per raggiungere e mantenere la salute",
      "Il sonno di qualità nello sport e a scuola",
      "Gestire lo stress con la respirazione diaframmatica"
    ],
    materiali: [
      { tipo: "yt", id: "H24GJOLXz1A", titolo: "Il sistema endocrino · La Biologia per tutti" },
      { tipo: "audio", id: "1qfbEZX4CsnBHDdWsfMDdTBhIRKrl-BS8", titolo: "Podcast di ripasso" },
      { tipo: "pdf", id: "1sOhQzq2tEyjvhbhI3yP-QPOZC-lFZWuS", titolo: "Salute e stile di vita" },
      { tipo: "pdf", id: "11vI26gqVgHZrk6fq3lJBADDOMHvUkAr4", titolo: "Il ruolo del sonno per il benessere" },
      { tipo: "pdf", id: "11nb-07Xy7yknfg3PKH9K_VJrCRRhYbNJ", titolo: "Come l'attività fisica modula la salute" },
      { tipo: "pdf", id: "1RQ5f8lVOZlQS40D_zsSILY3DaIuTKZm7", titolo: "Le exerchine" },
      { tipo: "pdf", id: "1cLnUwW4t9uaMZIzWnDcRozMSwfBH1MEE", titolo: "Alimentazione e PNEI" },
      { tipo: "pdf", id: "1bUGVandHWd19Q_6zsdedi9ltoIA_mYoL", titolo: "La respirazione diaframmatica" }
    ]
  },
  {
    id: "adattamenti-in-quota-e-in-profondita",
    titolo: "Adattamenti in quota e in profondità",
    sottotitolo: "il corpo in condizioni estreme",
    classi: [4],
    obiettivi: [
      "L'allenamento in altura migliora il trasporto dell'ossigeno",
      "Gli adattamenti arrivano solo dopo l'acclimatamento",
      "L'ipossia stimola la produzione di eritropoietina (EPO)",
      "In profondità la pressione richiede adattamenti cardiovascolari e respiratori",
      "I rischi: narcosi da azoto e malattia da decompressione"
    ],
    materiali: [
      { tipo: "pdf", id: "1525novEK9odyzCkdbtOH2yItf2UL4Et1", titolo: "Effetti dell'allenamento in quota" },
      { tipo: "pdf", id: "1wPJXNVvC8L62B-ygoOu-_q8sfY69aC07", titolo: "Gli effetti fisiologici della profondità in acqua" },
      { tipo: "yt", id: "VasQo4KsJ1E", titolo: "L'allenamento in alta quota" }
    ],
    domande: [
      "Quali adattamenti cardiovascolari avvengono durante l'allenamento in alta quota?",
      "Come cambia la frequenza cardiaca a riposo dopo un lungo periodo in quota?",
      "Che impatto ha l'ipossia sull'efficienza del cuore?",
      "Come può l'allenamento in quota migliorare la prestazione al livello del mare?"
    ]
  },

  /* ---------------- CLASSE QUINTA ---------------- */
  {
    id: "psicologia-dello-sport",
    titolo: "Psicologia dello sport",
    sottotitolo: "allenare la mente",
    classi: [5],
    obiettivi: [
      "Motivazione intrinseca ed estrinseca",
      "La concentrazione come capacità allenabile",
      "Gestione delle emozioni e controllo dell'ansia",
      "L'arousal prima delle gare",
      "Visualizzazione e imagery",
      "La psicologia dello sport è per tutti?"
    ],
    materiali: [
      { tipo: "pdf", id: "1B-XoZege10kVxqBA2kw8NtJxU-N76_HQ", titolo: "Definizione e ambiti applicativi", nota: "Master MAPS" },
      { tipo: "pdf", id: "1NuaVxHimWtoktGLNa4f0ITbiIgubxSZI", titolo: "Regolazione delle emozioni nello sport" },
      { tipo: "yt", id: "P6oALbNqPeE", titolo: "Video di approfondimento 1" }
    ]
  },
  {
    id: "adattamenti-fisiologici-allallenamento",
    titolo: "Adattamenti fisiologici all'allenamento",
    sottotitolo: "come cambia il corpo che si allena",
    classi: [5],
    obiettivi: [
      "I metabolismi energetici nell'attività fisica",
      "Risposte fisiologiche e adattamenti all'esercizio",
      "Il modello prestativo degli sport e l'allenamento"
    ],
    materiali: [
      { tipo: "yt", id: "lJ7f3uEI5To", titolo: "Il tessuto muscolare · La Biologia per tutti" }
    ]
  },
  {
    id: "alimentazione-e-sport-integratori-e-doping",
    titolo: "Alimentazione e sport",
    sottotitolo: "integratori e doping",
    classi: [3, 5],
    obiettivi: [
      "Principi di un'alimentazione sportiva sana",
      "Le risposte fisiologiche ai macronutrienti",
      "Bilancio calorico e bilancio idrico",
      "Gli integratori nello sport: quando servono davvero",
      "Cosa sono le sostanze dopanti"
    ],
    materiali: [
      { tipo: "yt", id: "YlSf3j_lK3M", titolo: "Le biomolecole · La Biologia per tutti" },
      { tipo: "pdf", id: "1EVmQBwCOhVXxcZSqSPjWGLXDiMtBCKLn", titolo: "Attenti alle diete e agli integratori", nota: "Dossier scientifico" },
      { tipo: "pdf", id: "1Crusu7ROTn8Tx4haoqn1xG53fq0CPLn8", titolo: "Integratori", nota: "Università di Verona" },
      { tipo: "link", url: "https://www.ausl.bologna.it/seztemi/alimentazione/integratori/integratori-per-lo-sport", titolo: "Integratori per lo sport", nota: "AUSL Bologna" },
      { tipo: "link", url: "https://www.epicentro.iss.it/fitosorveglianza/manifesto-erice-2022-traduzione", titolo: "Manifesto di Erice 2022", nota: "Istituto Superiore di Sanità" }
    ]
  },
  {
    id: "disabilita-e-sport-le-paralimpiadi",
    titolo: "Disabilità e sport",
    sottotitolo: "le Paralimpiadi",
    classi: [5],
    obiettivi: [
      "La storia delle Paralimpiadi",
      "La disabilità e l'approccio biopsicosociale",
      "Lo sport per andare oltre i limiti",
      "Storie di atleti con disabilità"
    ],
    materiali: [
      { tipo: "video", id: "1-54yHB7tobL8g2wr1HE_CrnNPSnqTiVi", titolo: "Lo spirito paralimpico" },
      { tipo: "audio", id: "10prTTA8UWkTlgin8UaHxuFftYV_W3kES", titolo: "Podcast: disabilità, sport, Paralimpiadi" }
    ]
  }
];

/* Ordine degli argomenti nell'indice di ogni classe */
window.CLASSI = {
  1: { nome: "Classe prima", temi: ["la-salute-dinamica", "sistema-scheletrico", "le-articolazioni", "sistema-muscolare"] },
  2: { nome: "Classe seconda", temi: ["apparato-cardio-circolatorio", "apparato-respiratorio", "il-primo-soccorso", "i-metabolismi-energetici", "teoria-dellallenamento", "le-capacita-condizionali"] },
  3: { nome: "Classe terza", temi: ["i-metabolismi-energetici", "teoria-dellallenamento", "dal-gioco-allo-sport", "le-capacita-condizionali", "le-capacita-coordinative", "apparato-digerente", "principi-per-una-sana-alimentazione", "alimentazione-e-sport-integratori-e-doping", "test-motori"] },
  4: { nome: "Classe quarta", temi: ["il-sistema-nervoso", "l-apprendimento-motorio", "il-sistema-endocrino", "il-sistema-immunitario", "pnei-lifestyle-e-salute", "teoria-dellallenamento", "adattamenti-in-quota-e-in-profondita"] },
  5: { nome: "Classe quinta", temi: ["psicologia-dello-sport", "adattamenti-fisiologici-allallenamento", "alimentazione-e-sport-integratori-e-doping", "disabilita-e-sport-le-paralimpiadi"] }
};
