/* =========================================================
   SCHEMI RIASSUNTIVI — Prof. Andrea Bertelli
   Tipi di grafica:
     hub      concetto al centro e voci intorno      centro + voci: [titolo, testo]
     flow     sequenza di passaggi                   voci: [titolo, testo]
     cycle    ciclo che si ripete                    voci: [titolo, testo]
     compare  confronto in colonne                   colonne: [{ nome, sotto, voci: [..] }]
     bars     barre con un valore (0–100)            voci: [etichetta, valore, testo sul valore, spiegazione]
   ========================================================= */
window.SCHEMI = {
  "la-salute-dinamica": [
    { tipo: "hub", titolo: "I pilastri della salute", centro: "Salute dinamica", voci: [
      ["Movimento", "Almeno 60 minuti al giorno di attività moderata o vigorosa."],
      ["Alimentazione", "Cinque pasti, frutta e verdura di tanti colori, acqua."],
      ["Sonno", "8–10 ore per notte: memoria, crescita e umore."],
      ["Relazioni", "Fare sport con gli altri migliora il benessere sociale."],
      ["Ambiente", "A piedi o in bici: fa bene a te e al pianeta."],
      ["Mente", "Gestire lo stress e riposare quanto serve."]
    ] },
    { tipo: "bars", titolo: "Quanto stai lavorando? Il test del parlato", voci: [
      ["Leggera", 30, "parli e canti", "Passeggiare, sistemare la stanza."],
      ["Moderata", 60, "parli, ma non canti", "Camminata veloce, bici in pianura."],
      ["Vigorosa", 90, "solo poche parole", "Corsa, partita, salire le scale di corsa."]
    ] },
    { tipo: "compare", titolo: "Sedentario o attivo?", colonne: [
      { nome: "Sedentario", sotto: "ore seduto da sveglio", voci: ["Ore davanti a schermi", "Spostamenti sempre in auto", "Più rischio di sovrappeso", "Peggiori sonno e umore"] },
      { nome: "Attivo", sotto: "ogni movimento conta", voci: ["Pause attive ogni ora", "Scale invece dell'ascensore", "Cuore, ossa e muscoli più forti", "Più concentrazione a scuola"] }
    ] }
  ],

  "sistema-scheletrico": [
    { tipo: "hub", titolo: "Le funzioni dello scheletro", centro: "Scheletro", voci: [
      ["Sostegno", "È l'impalcatura che regge il corpo."],
      ["Protezione", "Cranio per il cervello, gabbia toracica per cuore e polmoni."],
      ["Movimento", "Le ossa fanno da leve per i muscoli."],
      ["Riserva minerale", "Deposito di calcio e fosforo."],
      ["Emopoiesi", "Il midollo rosso produce le cellule del sangue."]
    ] },
    { tipo: "compare", titolo: "Le forme delle ossa", colonne: [
      { nome: "Lunghe", sotto: "diafisi + 2 epifisi", voci: ["Femore", "Omero", "Tibia"] },
      { nome: "Corte", sotto: "piccole, a cubo", voci: ["Carpo", "Tarso"] },
      { nome: "Piatte", sotto: "sottili, larghe", voci: ["Scapola", "Sterno", "Ossa del cranio"] },
      { nome: "Irregolari", sotto: "forme complesse", voci: ["Vertebre", "Mandibola"] }
    ] },
    { tipo: "flow", titolo: "La colonna vertebrale dall'alto in basso", voci: [
      ["7 cervicali", "Curva in avanti: lordosi cervicale."],
      ["12 toraciche", "Curva all'indietro: cifosi dorsale. Si articolano con le coste."],
      ["5 lombari", "Le più grandi, reggono più peso: lordosi lombare."],
      ["Sacro", "5 vertebre fuse, collegate al bacino."],
      ["Coccige", "4–5 piccole vertebre fuse."]
    ] }
  ],

  "le-articolazioni": [
    { tipo: "compare", titolo: "Tre tipi di articolazione", colonne: [
      { nome: "Sinartrosi", sotto: "immobili", voci: ["Suture del cranio"] },
      { nome: "Anfiartrosi", sotto: "semimobili", voci: ["Tra le vertebre", "Sinfisi pubica"] },
      { nome: "Diartrosi", sotto: "mobili", voci: ["Spalla", "Ginocchio", "Anca", "Gomito"] }
    ] },
    { tipo: "hub", titolo: "Com'è fatta un'articolazione mobile", centro: "Diartrosi", voci: [
      ["Cartilagine", "Riveste le ossa e riduce l'attrito."],
      ["Capsula", "Manicotto fibroso che avvolge l'articolazione."],
      ["Membrana sinoviale", "Produce il liquido sinoviale."],
      ["Liquido sinoviale", "Lubrifica e nutre la cartilagine."],
      ["Legamenti", "Uniscono osso a osso e stabilizzano."],
      ["Menischi", "Nel ginocchio: ammortizzano e stabilizzano."]
    ] },
    { tipo: "compare", titolo: "I movimenti in coppia", colonne: [
      { nome: "Flessione", sotto: "chiudi l'angolo", voci: ["Piegare il gomito"] },
      { nome: "Estensione", sotto: "apri l'angolo", voci: ["Distendere il ginocchio"] },
      { nome: "Abduzione", sotto: "ti allontani dall'asse", voci: ["Alzare il braccio di lato"] },
      { nome: "Adduzione", sotto: "ti avvicini all'asse", voci: ["Riportare il braccio al fianco"] }
    ] }
  ],

  "sistema-muscolare": [
    { tipo: "compare", titolo: "Tre tipi di muscolo", colonne: [
      { nome: "Scheletrico", sotto: "striato · volontario", voci: ["Muove le ossa", "Lo comandi tu"] },
      { nome: "Cardiaco", sotto: "striato · involontario", voci: ["Solo nel cuore", "Lavora sempre"] },
      { nome: "Liscio", sotto: "non striato · involontario", voci: ["Stomaco, intestino, vasi", "Contrazione lenta"] }
    ] },
    { tipo: "flow", titolo: "Come si contrae un muscolo", voci: [
      ["Impulso nervoso", "Il motoneurone porta il comando alla fibra."],
      ["Placca motrice", "Viene liberata acetilcolina."],
      ["Potenziale d'azione", "L'impulso corre lungo la fibra."],
      ["Calcio", "Esce dal reticolo sarcoplasmatico."],
      ["Ponti actina-miosina", "La miosina aggancia l'actina usando ATP."],
      ["Accorciamento", "I sarcomeri si accorciano: il muscolo tira."]
    ] },
    { tipo: "compare", titolo: "Fibre lente e fibre rapide", colonne: [
      { nome: "Tipo I", sotto: "lente · rosse", voci: ["Tanti mitocondri", "Resistenti alla fatica", "Maratona, fondo"] },
      { nome: "Tipo II", sotto: "rapide · bianche", voci: ["Molta forza in poco tempo", "Si affaticano presto", "Sprint, salti, lanci"] }
    ] }
  ],

  "apparato-cardio-circolatorio": [
    { tipo: "cycle", titolo: "Il giro del sangue", voci: [
      ["Atrio destro", "Arriva il sangue povero di ossigeno dalle vene cave."],
      ["Ventricolo destro", "Lo spinge nelle arterie polmonari."],
      ["Polmoni", "Il sangue cede CO₂ e prende ossigeno."],
      ["Atrio sinistro", "Rientra il sangue ossigenato dalle vene polmonari."],
      ["Ventricolo sinistro", "La parete più spessa: spinge il sangue nell'aorta."],
      ["Tessuti", "Nei capillari l'ossigeno passa alle cellule."]
    ] },
    { tipo: "bars", titolo: "Gittata cardiaca: quanto sangue in un minuto", voci: [
      ["A riposo", 15, "circa 5 L/min", "Per tutti, allenati o no."],
      ["Esercizio moderato", 40, "circa 12–15 L/min", "FC e gittata sistolica salgono."],
      ["Massimo · non allenato", 60, "circa 20 L/min", "Limite di chi non si allena."],
      ["Massimo · atleta di fondo", 100, "fino a 35 L/min", "Cuore più grande ed efficiente."]
    ] },
    { tipo: "compare", titolo: "I vasi sanguigni", colonne: [
      { nome: "Arterie", sotto: "dal cuore", voci: ["Pareti spesse ed elastiche", "Alta pressione", "Aorta: la più grande"] },
      { nome: "Capillari", sotto: "gli scambi", voci: ["Parete di un solo strato", "Passano O₂, CO₂ e nutrienti"] },
      { nome: "Vene", sotto: "verso il cuore", voci: ["Pareti più sottili", "Valvole contro il reflusso", "Aiutate dai muscoli"] }
    ] }
  ],

  "apparato-respiratorio": [
    { tipo: "flow", titolo: "Il viaggio dell'aria", voci: [
      ["Naso", "Filtra, scalda e umidifica l'aria."],
      ["Faringe", "Crocevia tra aria e cibo."],
      ["Laringe", "Corde vocali; l'epiglottide chiude la trachea quando deglutisci."],
      ["Trachea", "Tubo con anelli di cartilagine."],
      ["Bronchi e bronchioli", "Si ramificano come un albero rovesciato."],
      ["Alveoli", "Milioni di sacchetti dove avvengono gli scambi gassosi."]
    ] },
    { tipo: "compare", titolo: "Inspirazione ed espirazione", colonne: [
      { nome: "Inspirazione", sotto: "sempre attiva", voci: ["Il diaframma si contrae e scende", "Il torace si allarga", "La pressione nei polmoni cala", "L'aria entra"] },
      { nome: "Espirazione", sotto: "a riposo passiva", voci: ["Il diaframma si rilassa e sale", "Il torace torna indietro", "L'aria esce", "Sotto sforzo aiutano gli addominali"] }
    ] },
    { tipo: "bars", titolo: "Ventilazione: litri d'aria al minuto", voci: [
      ["A riposo", 4, "circa 6 L/min", "12–16 respiri da mezzo litro."],
      ["Camminata", 13, "circa 20 L/min", "Respiri più profondi."],
      ["Corsa", 40, "circa 60 L/min", "Aumentano frequenza e volume."],
      ["Atleta al massimo", 100, "oltre 150 L/min", "Muscoli respiratori allenati."]
    ] }
  ],

  "i-metabolismi-energetici": [
    { tipo: "compare", titolo: "I tre sistemi energetici", colonne: [
      { nome: "Alattacido", sotto: "ATP + fosfocreatina", voci: ["Massima potenza", "Fino a 8–10 secondi", "Niente lattato", "100 m, salti, lanci"] },
      { nome: "Lattacido", sotto: "glicolisi senza O₂", voci: ["Alta potenza", "Da 20 secondi a 2 minuti", "Produce lattato", "400 m, 800 m"] },
      { nome: "Aerobico", sotto: "con ossigeno", voci: ["Potenza più bassa", "Oltre 2 minuti, anche ore", "Carboidrati e grassi", "Maratona, fondo"] }
    ] },
    { tipo: "bars", titolo: "Potenza dei sistemi (quanto ATP al secondo)", voci: [
      ["Alattacido", 100, "massima", "Dura pochissimo."],
      ["Lattacido", 60, "alta", "L'acidità fa calare la prestazione."],
      ["Aerobico", 30, "media", "Ma dura molto più a lungo."]
    ] },
    { tipo: "flow", titolo: "Dal glucosio all'ATP", voci: [
      ["Glucosio", "Arriva dal sangue o dal glicogeno."],
      ["Glicolisi", "Nel citoplasma: 2 ATP, senza ossigeno."],
      ["Piruvato", "Bivio: senza O₂ diventa lattato, con O₂ va nei mitocondri."],
      ["Ciclo di Krebs", "Nei mitocondri: estrae energia e libera CO₂."],
      ["Catena respiratoria", "Usa l'ossigeno: circa 36 ATP in totale e acqua."]
    ] }
  ],

  "teoria-dellallenamento": [
    { tipo: "flow", titolo: "La supercompensazione", voci: [
      ["Carico", "Un allenamento adeguato è lo stimolo."],
      ["Fatica", "Subito dopo la prestazione cala."],
      ["Recupero", "Il corpo ripara e ricostruisce."],
      ["Supercompensazione", "Torni a un livello più alto di prima."],
      ["Nuovo carico", "Se arriva al momento giusto, migliori. Troppo presto: overtraining."]
    ] },
    { tipo: "compare", titolo: "Carico esterno e carico interno", colonne: [
      { nome: "Esterno", sotto: "cosa fai", voci: ["Volume: quanto", "Intensità: quanto forte", "Densità: lavoro e pause", "Frequenza: quante volte"] },
      { nome: "Interno", sotto: "quanto ti costa", voci: ["Frequenza cardiaca", "Fatica percepita (RPE)", "Lattato", "Sensazioni e sonno"] }
    ] },
    { tipo: "hub", titolo: "I principi dell'allenamento", centro: "Principi", voci: [
      ["Progressività", "Aumenta il carico poco alla volta."],
      ["Specificità", "Migliori in ciò che alleni."],
      ["Individualizzazione", "Ognuno risponde in modo diverso."],
      ["Continuità", "Allenarsi con regolarità."],
      ["Reversibilità", "Se smetti, perdi gli adattamenti."],
      ["Alternanza", "Carico e recupero devono alternarsi."]
    ] },
    { tipo: "flow", titolo: "Le fasi della seduta", voci: [
      ["Riscaldamento generale", "Corsa leggera e mobilità: sale la temperatura."],
      ["Riscaldamento specifico", "Gesti dello sport e allunghi."],
      ["Fase centrale", "Il lavoro principale della giornata."],
      ["Defaticamento", "Ritorno graduale alla calma e allungamento."]
    ] }
  ],

  "le-capacita-condizionali": [
    { tipo: "hub", titolo: "Le capacità condizionali", centro: "Condizione fisica", voci: [
      ["Forza", "Massima, esplosiva, resistente."],
      ["Resistenza", "Aerobica e anaerobica."],
      ["Velocità", "Reazione, accelerazione, velocità massima."],
      ["Flessibilità", "Mobilità articolare ed estensibilità muscolare."]
    ] },
    { tipo: "bars", titolo: "Allenare la forza: quale carico?", voci: [
      ["Resistenza alla forza", 50, "40–60% di 1RM", "15 o più ripetizioni."],
      ["Ipertrofia", 78, "70–85% di 1RM", "6–12 ripetizioni."],
      ["Forza massima", 93, "85–100% di 1RM", "1–5 ripetizioni, recuperi lunghi."],
      ["Forza esplosiva", 45, "30–60% di 1RM", "Poche ripetizioni, velocissime."]
    ] },
    { tipo: "compare", titolo: "Metodi per la resistenza", colonne: [
      { nome: "Continuo", sotto: "ritmo costante", voci: ["Corsa lunga senza pause"] },
      { nome: "Fartlek", sotto: "gioco di velocità", voci: ["Cambi di ritmo liberi"] },
      { nome: "Interval", sotto: "lavoro e recupero", voci: ["Fasi intense e pause"] },
      { nome: "Ripetute", sotto: "distanze uguali", voci: ["Es. 6 × 400 m"] }
    ] }
  ],

  "dal-gioco-allo-sport": [
    { tipo: "compare", titolo: "Gioco, gioco presportivo, sport", colonne: [
      { nome: "Gioco", sotto: "libero", voci: ["Regole flessibili", "Fine a se stesso", "Divertimento"] },
      { nome: "Presportivo", sotto: "ponte", voci: ["Regole semplificate", "Prepara a uno sport", "Es. palla rilanciata"] },
      { nome: "Sport", sotto: "codificato", voci: ["Regole delle federazioni", "Competizione", "Arbitri e classifiche"] }
    ] },
    { tipo: "compare", titolo: "Open skills e closed skills", colonne: [
      { nome: "Open", sotto: "ambiente che cambia", voci: ["Leggere la situazione", "Anticipare e decidere", "Calcio, pallavolo, tennis"] },
      { nome: "Closed", sotto: "ambiente stabile", voci: ["Decidi tu quando partire", "Precisione e ripetibilità", "Tuffi, ginnastica, peso"] }
    ] },
    { tipo: "bars", titolo: "Quanto è «aperta» un'abilità?", voci: [
      ["Tiro con l'arco", 8, "chiusa", "Bersaglio fermo, nessun avversario."],
      ["Tuffo", 12, "chiusa", "Sempre lo stesso ambiente."],
      ["Servizio a pallavolo", 30, "quasi chiusa", "Decidi tu quando battere."],
      ["Schiacciata", 75, "aperta", "Dipende da alzata e muro."],
      ["Dribbling nel calcio", 95, "molto aperta", "Avversari sempre diversi."]
    ] }
  ],

  "apparato-digerente": [
    { tipo: "flow", titolo: "Il viaggio del cibo", voci: [
      ["Bocca", "Masticazione e saliva: l'amilasi inizia a digerire l'amido."],
      ["Esofago", "La peristalsi spinge il bolo verso lo stomaco."],
      ["Stomaco", "Acido cloridrico e pepsina: iniziano a digerire le proteine. Nasce il chimo."],
      ["Intestino tenue", "Bile ed enzimi del pancreas; i villi assorbono i nutrienti."],
      ["Intestino crasso", "Assorbe acqua e sali; ospita il microbiota."]
    ] },
    { tipo: "compare", titolo: "Chi digerisce cosa", colonne: [
      { nome: "Carboidrati", sotto: "→ zuccheri semplici", voci: ["Amilasi salivare", "Amilasi pancreatica"] },
      { nome: "Proteine", sotto: "→ amminoacidi", voci: ["Pepsina (stomaco)", "Tripsina (pancreas)"] },
      { nome: "Grassi", sotto: "→ acidi grassi e glicerolo", voci: ["Bile che emulsiona", "Lipasi pancreatica"] }
    ] },
    { tipo: "bars", titolo: "Quanto prima mangiare prima dello sport", voci: [
      ["Pasto completo", 100, "3–4 ore prima", "Carboidrati, poche fibre e pochi grassi."],
      ["Spuntino leggero", 40, "1–2 ore prima", "Frutta, pane, una barretta."],
      ["Acqua", 8, "fino a 15 min prima", "A piccoli sorsi."]
    ] }
  ],

  "test-motori": [
    { tipo: "compare", titolo: "Quale test per quale capacità", colonne: [
      { nome: "Resistenza", sotto: "aerobica", voci: ["Test di Cooper", "Beep test", "Bronco test"] },
      { nome: "Velocità e agilità", sotto: "cambi di direzione", voci: ["Navetta 4 × 10 m", "Illinois test", "Sprint 30 m"] },
      { nome: "Forza", sotto: "esplosiva", voci: ["Salto in lungo da fermo", "Squat jump", "Lancio palla medica"] },
      { nome: "Flessibilità", sotto: "mobilità", voci: ["Sit and reach"] }
    ] },
    { tipo: "flow", titolo: "Un test fatto bene", voci: [
      ["Stesse istruzioni", "Tutti sanno esattamente cosa fare."],
      ["Stesso riscaldamento", "Uguale ogni volta che ripeti il test."],
      ["Stesse condizioni", "Stessa superficie, orario simile."],
      ["Massimo impegno", "Il test vale solo se dai il meglio, in sicurezza."],
      ["Registra e confronta", "Confrontati con te stesso nel tempo."]
    ] },
    { tipo: "bars", titolo: "Test di Cooper: metri e VO₂max stimato", voci: [
      ["1800 m", 48, "≈ 29 ml/kg/min", "Livello da migliorare."],
      ["2200 m", 63, "≈ 38 ml/kg/min", "Livello nella media."],
      ["2600 m", 78, "≈ 47 ml/kg/min", "Buon livello."],
      ["3000 m", 93, "≈ 56 ml/kg/min", "Livello da atleta di fondo."]
    ] }
  ],

  "principi-per-una-sana-alimentazione": [
    { tipo: "bars", titolo: "Come distribuire l'energia della giornata", voci: [
      ["Colazione", 45, "15–20%", "Un vero pasto: energia per la mattina."],
      ["Spuntino", 13, "5%", "Frutta o yogurt."],
      ["Pranzo", 95, "35–40%", "Il pasto principale."],
      ["Merenda", 13, "5%", "Leggera, soprattutto prima dello sport."],
      ["Cena", 82, "30–35%", "Completa ma più leggera."]
    ] },
    { tipo: "flow", titolo: "La piramide mediterranea, dalla base alla cima", voci: [
      ["Acqua e movimento", "Ogni giorno, alla base di tutto."],
      ["Frutta, verdura, cereali", "A ogni pasto, meglio integrali e di stagione."],
      ["Olio d'oliva, frutta secca, latte e yogurt", "Ogni giorno, nelle giuste porzioni."],
      ["Pesce, legumi, uova, carni bianche", "Più volte a settimana, alternandoli."],
      ["Carne rossa e salumi", "Poche volte a settimana."],
      ["Dolci", "In cima: solo ogni tanto."]
    ] },
    { tipo: "compare", titolo: "I macronutrienti", colonne: [
      { nome: "Carboidrati", sotto: "4 kcal/g", voci: ["Energia pronta", "Pasta, pane, riso, frutta"] },
      { nome: "Proteine", sotto: "4 kcal/g", voci: ["Costruiscono i tessuti", "Legumi, pesce, uova, carne"] },
      { nome: "Grassi", sotto: "9 kcal/g", voci: ["Riserva e vitamine", "Olio d'oliva, frutta secca"] }
    ] }
  ],

  "il-sistema-nervoso": [
    { tipo: "compare", titolo: "Centrale e periferico", colonne: [
      { nome: "SNC", sotto: "elabora", voci: ["Encefalo", "Midollo spinale", "Protetti da ossa e meningi"] },
      { nome: "SNP", sotto: "collega", voci: ["12 paia di nervi cranici", "31 paia di nervi spinali", "Somatico e autonomo"] }
    ] },
    { tipo: "flow", titolo: "Dal pensiero al movimento", voci: [
      ["Corteccia motoria", "Decide il movimento."],
      ["Cervelletto", "Coordina e corregge."],
      ["Midollo spinale", "Trasmette il comando."],
      ["Motoneurone", "Porta l'impulso al muscolo."],
      ["Placca neuromuscolare", "L'acetilcolina fa contrarre la fibra."],
      ["Feedback", "Fusi e organi del Golgi informano il cervello."]
    ] },
    { tipo: "flow", titolo: "Il potenziale d'azione", voci: [
      ["Riposo", "Circa −70 mV: l'interno è negativo."],
      ["Soglia", "Uno stimolo abbastanza forte fa partire l'impulso."],
      ["Depolarizzazione", "Entra il sodio: l'interno diventa positivo."],
      ["Ripolarizzazione", "Esce il potassio: si torna negativi."],
      ["Ritorno al riposo", "La pompa sodio-potassio ristabilisce l'equilibrio."]
    ] },
    { tipo: "compare", titolo: "Simpatico e parasimpatico", colonne: [
      { nome: "Simpatico", sotto: "attacco o fuga", voci: ["FC e pressione su", "Pupille dilatate", "Digestione rallentata"] },
      { nome: "Parasimpatico", sotto: "riposo e digestione", voci: ["FC giù", "Digestione attiva", "Recupero"] }
    ] }
  ],

  "il-sistema-endocrino": [
    { tipo: "hub", titolo: "Le ghiandole e i loro ormoni", centro: "Sistema endocrino", voci: [
      ["Ipotalamo e ipofisi", "La regia: ormone della crescita e controllo delle altre ghiandole."],
      ["Tiroide", "T3 e T4: regolano il metabolismo."],
      ["Pancreas", "Insulina e glucagone: la glicemia."],
      ["Surreni", "Adrenalina e cortisolo: azione e stress."],
      ["Gonadi", "Testosterone ed estrogeni."],
      ["Epifisi", "Melatonina: il ritmo sonno-veglia."]
    ] },
    { tipo: "cycle", titolo: "Il controllo della glicemia", voci: [
      ["Mangi", "La glicemia sale."],
      ["Insulina", "Il pancreas la libera."],
      ["Glucosio nelle cellule", "La glicemia torna normale."],
      ["Digiuno o sforzo", "La glicemia scende."],
      ["Glucagone", "Il fegato libera glucosio."],
      ["Equilibrio", "Feedback negativo, come un termostato."]
    ] },
    { tipo: "compare", titolo: "Ormoni durante l'esercizio", colonne: [
      { nome: "Aumentano", sotto: "più energia", voci: ["Adrenalina e noradrenalina", "Cortisolo", "Ormone della crescita", "Glucagone"] },
      { nome: "Diminuisce", sotto: "", voci: ["Insulina"] }
    ] }
  ],

  "il-sistema-immunitario": [
    { tipo: "compare", titolo: "Immunità innata e acquisita", colonne: [
      { nome: "Innata", sotto: "subito · aspecifica", voci: ["Pelle e mucose", "Febbre e infiammazione", "Macrofagi e neutrofili", "Nessuna memoria"] },
      { nome: "Acquisita", sotto: "più lenta · specifica", voci: ["Linfociti B: anticorpi", "Linfociti T: coordinano e uccidono", "Ha memoria", "Base dei vaccini"] }
    ] },
    { tipo: "flow", titolo: "Come risponde a un'infezione", voci: [
      ["Barriere", "Pelle e mucose bloccano i microrganismi."],
      ["Infiammazione", "I fagociti inglobano gli invasori."],
      ["Allarme", "L'antigene viene presentato ai linfociti T."],
      ["Attacco", "I linfociti B producono anticorpi, i T citotossici eliminano le cellule infette."],
      ["Memoria", "Al prossimo incontro la risposta sarà più rapida."]
    ] },
    { tipo: "bars", titolo: "Movimento e difese", voci: [
      ["Sedentarietà", 50, "difese nella media", "Nessun beneficio dell'esercizio."],
      ["Attività moderata regolare", 90, "difese più efficienti", "Il livello migliore."],
      ["Sforzi estremi senza recupero", 35, "difese ridotte per qualche tempo", "Servono riposo e sonno."]
    ] }
  ],

  "pnei-lifestyle-e-salute": [
    { tipo: "hub", titolo: "Un unico sistema che comunica", centro: "PNEI", voci: [
      ["Psiche", "Pensieri ed emozioni."],
      ["Sistema nervoso", "Neurotrasmettitori."],
      ["Sistema endocrino", "Ormoni come il cortisolo."],
      ["Sistema immunitario", "Difese e infiammazione."]
    ] },
    { tipo: "flow", titolo: "Lo stress cronico", voci: [
      ["Stress prolungato", "Verifiche, conflitti, poco sonno."],
      ["Ipotalamo", "Dà l'allarme."],
      ["Ipofisi", "Stimola i surreni."],
      ["Cortisolo", "Resta alto troppo a lungo."],
      ["Conseguenze", "Difese più basse, sonno e umore peggiori."]
    ] },
    { tipo: "hub", titolo: "Le quattro leve dello stile di vita", centro: "Stile di vita", voci: [
      ["Movimento", "Il muscolo libera exerchine benefiche."],
      ["Alimentazione", "La dieta mediterranea è antinfiammatoria."],
      ["Sonno", "Recupero, memoria, difese."],
      ["Respiro", "Respirazione lenta per calmare il sistema nervoso."]
    ] },
    { tipo: "flow", titolo: "Prova adesso: respirazione diaframmatica", voci: [
      ["Posizione", "Seduto comodo, una mano sulla pancia."],
      ["Inspira 4 secondi", "Dal naso, gonfiando la pancia."],
      ["Pausa", "Un secondo."],
      ["Espira 6 secondi", "Lentamente, dalla bocca."],
      ["Ripeti", "Per 3–5 minuti."]
    ] }
  ],

  "adattamenti-in-quota-e-in-profondita": [
    { tipo: "compare", titolo: "In quota e in profondità", colonne: [
      { nome: "Quota", sotto: "meno pressione", voci: ["Meno ossigeno al sangue", "Respiro e FC più alti", "Più EPO e globuli rossi", "Rischio: mal di montagna"] },
      { nome: "Profondità", sotto: "più pressione", voci: ["+1 atmosfera ogni 10 m", "Polmoni compressi", "Riflesso d'immersione", "Rischi: narcosi, decompressione"] }
    ] },
    { tipo: "flow", titolo: "L'acclimatamento in quota", voci: [
      ["Primi giorni", "Respiri più veloce, il cuore batte di più."],
      ["EPO", "I reni producono più eritropoietina."],
      ["Globuli rossi", "Aumentano in 2–3 settimane."],
      ["Più ossigeno", "Il sangue trasporta più O₂."],
      ["Ritorno in pianura", "Il vantaggio dura qualche settimana."]
    ] },
    { tipo: "bars", titolo: "La pressione sott'acqua", voci: [
      ["Superficie", 20, "1 atmosfera", "La pressione dell'aria."],
      ["10 m", 40, "2 atmosfere", "Il volume dei polmoni si dimezza."],
      ["20 m", 60, "3 atmosfere", ""],
      ["30 m", 80, "4 atmosfere", "Può comparire la narcosi da azoto."],
      ["40 m", 100, "5 atmosfere", ""]
    ] }
  ],

  "psicologia-dello-sport": [
    { tipo: "bars", titolo: "La U rovesciata: attivazione e prestazione", voci: [
      ["Attivazione bassa", 35, "noia, poca energia", "Prestazione sotto le possibilità."],
      ["Attivazione ottimale", 95, "concentrato e carico", "La zona migliore: è diversa per ognuno."],
      ["Attivazione troppo alta", 40, "ansia, tensione", "Errori e rigidità."]
    ] },
    { tipo: "compare", titolo: "Due tipi di motivazione", colonne: [
      { nome: "Intrinseca", sotto: "dentro di te", voci: ["Piacere di giocare", "Voglia di migliorare", "Più stabile nel tempo"] },
      { nome: "Estrinseca", sotto: "fuori di te", voci: ["Premi e medaglie", "Approvazione degli altri", "Aiuta, ma da sola non basta"] }
    ] },
    { tipo: "hub", titolo: "Gli attrezzi della mente", centro: "Allenamento mentale", voci: [
      ["Goal setting", "Obiettivi chiari, misurabili, con scadenza."],
      ["Self-talk", "Frasi brevi e positive."],
      ["Imagery", "Visualizzare il gesto con tutti i sensi."],
      ["Routine", "Sempre la stessa sequenza prima del gesto."],
      ["Respiro", "Per abbassare l'ansia."],
      ["Rilassamento", "Contrarre e rilassare i muscoli (Jacobson)."]
    ] }
  ],

  "adattamenti-fisiologici-allallenamento": [
    { tipo: "compare", titolo: "Resistenza e forza: adattamenti diversi", colonne: [
      { nome: "Resistenza", sotto: "allenamento aerobico", voci: ["Più mitocondri e capillari", "Cuore più efficiente", "FC a riposo più bassa", "Più uso dei grassi"] },
      { nome: "Forza", sotto: "carichi elevati", voci: ["Più unità motorie reclutate", "Ipertrofia delle fibre", "Tendini più resistenti", "Più potenza"] }
    ] },
    { tipo: "flow", titolo: "Quando arrivano i miglioramenti di forza", voci: [
      ["Settimane 1–4", "Adattamenti nervosi: reclutamento e coordinazione."],
      ["Settimane 6–8", "Comincia l'ipertrofia."],
      ["Mesi", "Crescita di muscoli, tendini e ossa."],
      ["Se smetti", "Detraining: gli adattamenti si perdono poco a poco."]
    ] },
    { tipo: "compare", titolo: "Risposta acuta e adattamento cronico", colonne: [
      { nome: "Acuta", sotto: "durante lo sforzo", voci: ["FC che sale", "Respiro più veloce", "Sudorazione"] },
      { nome: "Cronica", sotto: "dopo settimane", voci: ["FC a riposo più bassa", "VO₂max più alto", "Muscoli più forti"] }
    ] }
  ],

  "alimentazione-e-sport-integratori-e-doping": [
    { tipo: "flow", titolo: "Mangiare intorno alla gara", voci: [
      ["3–4 ore prima", "Pasto ricco di carboidrati, povero di grassi e fibre."],
      ["1 ora prima", "Spuntino leggero e acqua."],
      ["Durante", "Oltre i 60 minuti: acqua e carboidrati."],
      ["Dopo", "Carboidrati e proteine entro 1–2 ore, e reidratarsi."]
    ] },
    { tipo: "bars", titolo: "Perdere acqua: cosa succede", voci: [
      ["−1% del peso", 20, "sete", "È già il segnale di bere."],
      ["−2%", 45, "la prestazione cala", "Resistenza e concentrazione peggiorano."],
      ["−3/4%", 70, "crampi, calo forte", "Rischio di malore."],
      ["−5% e oltre", 100, "pericolo", "Serve fermarsi e reidratarsi."]
    ] },
    { tipo: "compare", titolo: "Il doping: sostanze e rischi", colonne: [
      { nome: "Anabolizzanti", sotto: "più massa", voci: ["Danni a fegato e cuore", "Squilibri ormonali"] },
      { nome: "EPO e trasfusioni", sotto: "più globuli rossi", voci: ["Sangue denso", "Trombosi e infarto"] },
      { nome: "Stimolanti", sotto: "meno fatica", voci: ["Aritmie", "Dipendenza"] },
      { nome: "Diuretici", sotto: "mascheranti", voci: ["Disidratazione", "Squilibri di sali"] }
    ] }
  ],

  "disabilita-e-sport-le-paralimpiadi": [
    { tipo: "flow", titolo: "La storia in sei tappe", voci: [
      ["1948 · Stoke Mandeville", "Ludwig Guttmann organizza giochi per veterani con lesioni spinali."],
      ["1960 · Roma", "Le prime Paralimpiadi della storia."],
      ["1976 · Örnsköldsvik", "Le prime Paralimpiadi invernali."],
      ["1988 · Seul", "Paralimpiadi nelle stesse sedi delle Olimpiadi."],
      ["1989 · IPC", "Nasce il Comitato Paralimpico Internazionale."],
      ["2026 · Milano Cortina", "Le Paralimpiadi invernali in Italia."]
    ] },
    { tipo: "compare", titolo: "Due modi di guardare la disabilità", colonne: [
      { nome: "Modello medico", sotto: "solo la malattia", voci: ["Il problema è nella persona", "Serve solo curare"] },
      { nome: "Biopsicosociale", sotto: "persona + ambiente", voci: ["Conta anche l'ambiente", "Barriere da abbattere", "Partecipazione e diritti"] }
    ] },
    { tipo: "hub", titolo: "I valori paralimpici", centro: "Spirito paralimpico", voci: [
      ["Coraggio", "Mettersi in gioco."],
      ["Determinazione", "Andare oltre i limiti."],
      ["Ispirazione", "Essere un esempio per gli altri."],
      ["Uguaglianza", "Lo sport è di tutti."]
    ] }
  ]
};
