/* =========================================================
   GIOCHI DI RIPASSO — Classe seconda e terza
   ========================================================= */
window.GAMES = window.GAMES || {};

GAMES["apparato-cardio-circolatorio"] = {
  quiz: [
    ["Quale ventricolo spinge il sangue nella circolazione sistemica (grande circolo)?", ["Destro", "Sinistro", "Entrambi", "Nessuno, lo fanno gli atri"], 1, "Il ventricolo sinistro ha la parete più spessa perché pompa il sangue in tutto il corpo."],
    ["Le arterie polmonari trasportano sangue…", ["Ricco di ossigeno", "Povero di ossigeno", "Senza globuli rossi", "Solo durante lo sport"], 1, "Le arterie si definiscono per la direzione (dal cuore), non per l'ossigeno."],
    ["La gittata cardiaca si calcola come…", ["FC × gittata sistolica", "FC + pressione", "Volume corrente × FC", "Pressione ÷ FC"], 0, "A riposo è circa 5 litri al minuto."],
    ["Il pacemaker naturale del cuore è…", ["Il nodo atrio-ventricolare", "Il nodo seno-atriale", "La valvola mitrale", "Il fascio di His"], 1, "Si trova nell'atrio destro e genera l'impulso di ogni battito."],
    ["La fase in cui i ventricoli si contraggono si chiama…", ["Diastole", "Sistole", "Inspirazione", "Ripolarizzazione"], 1, "In diastole il cuore si rilassa e si riempie."],
    ["Una formula semplice per stimare la FC massima è…", ["100 + età", "220 − età", "180 − peso", "FC riposo × 2"], 1, "È una stima: le differenze tra persone possono essere grandi."],
    ["Dove avvengono gli scambi tra sangue e tessuti?", ["Nelle arterie", "Nelle vene", "Nei capillari", "Nell'aorta"], 2, "Le pareti sottilissime dei capillari permettono il passaggio di gas e nutrienti."],
    ["Cosa caratterizza il \"cuore d'atleta\" negli sport di resistenza?", ["FC a riposo più alta", "Cavità più ampie e FC a riposo più bassa", "Valvole più piccole", "Pressione sempre alta"], 1, "Ogni battito spinge più sangue, quindi servono meno battiti (bradicardia)."]
  ],
  vf: [
    ["Le vene riportano il sangue al cuore.", true, "Hanno valvole a nido di rondine che impediscono il reflusso."],
    ["La valvola tricuspide si trova nel cuore sinistro.", false, "Si trova tra atrio e ventricolo destro; a sinistra c'è la mitrale (bicuspide)."],
    ["Durante l'esercizio aumentano sia la frequenza cardiaca sia la gittata sistolica.", true, "Così la gittata cardiaca può aumentare di 4–7 volte."],
    ["Il sangue in uscita dal ventricolo sinistro va nell'aorta.", true, "L'aorta è l'arteria più grande del corpo."],
    ["L'attività fisica regolare aumenta il rischio cardiovascolare.", false, "Lo riduce: abbassa pressione, migliora il colesterolo e il controllo della glicemia."],
    ["La pressione arteriosa ottimale a riposo è intorno a 120/80 mmHg.", true, "Massima (sistolica) e minima (diastolica)."]
  ],
  flash: [
    ["Piccola circolazione", "Ventricolo destro → polmoni → atrio sinistro: il sangue si ossigena."],
    ["Grande circolazione", "Ventricolo sinistro → aorta → tessuti → vene cave → atrio destro."],
    ["Gittata sistolica", "Volume di sangue espulso da un ventricolo a ogni battito (circa 70 ml a riposo)."],
    ["Gittata cardiaca", "Frequenza cardiaca × gittata sistolica: litri di sangue pompati in un minuto."],
    ["Nodo seno-atriale", "Pacemaker naturale del cuore, nell'atrio destro."],
    ["Sistole e diastole", "Contrazione e rilassamento del cuore."],
    ["Bradicardia dell'atleta", "Frequenza cardiaca a riposo bassa grazie all'allenamento aerobico."],
    ["Capillari", "Vasi sottilissimi dove avvengono gli scambi con i tessuti."]
  ],
  abbina: [
    ["Aorta", "Arteria principale del grande circolo"],
    ["Vene cave", "Riportano il sangue all'atrio destro"],
    ["Mitrale", "Valvola tra atrio e ventricolo sinistro"],
    ["Tricuspide", "Valvola tra atrio e ventricolo destro"],
    ["Diastole", "Rilassamento e riempimento"],
    ["220 − età", "Stima della FC massima"]
  ],
  completa: [
    "Il ventricolo {sinistro} pompa il sangue nell'aorta.",
    "La gittata cardiaca è la frequenza cardiaca per la gittata {sistolica}.",
    "Il pacemaker naturale del cuore è il nodo {seno-atriale}.",
    "Gli scambi con i tessuti avvengono nei {capillari}."
  ]
};

GAMES["apparato-respiratorio"] = {
  quiz: [
    ["Qual è il principale muscolo dell'inspirazione?", ["Il diaframma", "Il retto dell'addome", "Il trapezio", "Il gran dorsale"], 0, "Contraendosi si abbassa e aumenta il volume della gabbia toracica."],
    ["Dove avvengono gli scambi gassosi nei polmoni?", ["Nei bronchi", "Negli alveoli", "Nella trachea", "Nella laringe"], 1, "Ossigeno e anidride carbonica passano per diffusione tra alveoli e capillari."],
    ["Come viene trasportato la maggior parte dell'ossigeno nel sangue?", ["Disciolto nel plasma", "Legato all'emoglobina", "Legato ai globuli bianchi", "Come bicarbonato"], 1, "Circa il 98% viaggia legato all'emoglobina dei globuli rossi."],
    ["La CO₂ viaggia nel sangue soprattutto…", ["Legata all'emoglobina", "Come ione bicarbonato", "Disciolta nella linfa", "Dentro le piastrine"], 1, "Circa il 70% viene trasportata come bicarbonato."],
    ["Cosa stimola di più la frequenza respiratoria?", ["Il calo di CO₂", "L'aumento di CO₂ nel sangue", "La luce", "La digestione"], 1, "I chemocettori sono molto sensibili a CO₂ e acidità del sangue."],
    ["La ventilazione polmonare al minuto è…", ["Frequenza respiratoria × volume corrente", "Capacità vitale ÷ 2", "FC × gittata", "Volume residuo + spazio morto"], 0, "A riposo circa 6 L/min, in un atleta allo sforzo massimo oltre 100 L/min."],
    ["Il volume corrente a riposo è circa…", ["50 ml", "500 ml", "5 litri", "15 litri"], 1, "È l'aria che entra ed esce in un respiro tranquillo."],
    ["Dove si trovano i centri che regolano il respiro?", ["Nel cervelletto", "Nel tronco encefalico (bulbo e ponte)", "Nel midollo osseo", "Nella corteccia visiva"], 1, "Funzionano in automatico, anche quando dormi."]
  ],
  vf: [
    ["A riposo l'espirazione è un processo passivo.", true, "I muscoli si rilassano e i polmoni ritornano elastici al volume iniziale."],
    ["L'aria che entra dal naso viene filtrata, scaldata e umidificata.", true, "Per questo è meglio respirare con il naso quando possibile."],
    ["Lo spazio morto è l'aria che partecipa agli scambi gassosi.", false, "È l'aria che resta nelle vie aeree e non arriva agli alveoli (circa 150 ml)."],
    ["Con l'allenamento i muscoli respiratori diventano più forti ed efficienti.", true, "I volumi polmonari invece cambiano poco."],
    ["L'epiglottide impedisce al cibo di entrare nella trachea.", true, "Si chiude durante la deglutizione."],
    ["Il fumo non ha effetti sulla prestazione sportiva.", false, "Il monossido di carbonio si lega all'emoglobina e riduce il trasporto di ossigeno."]
  ],
  flash: [
    ["Vie aeree superiori", "Naso, faringe, laringe."],
    ["Vie aeree inferiori", "Trachea, bronchi, bronchioli, alveoli."],
    ["Alveoli", "Piccole sacche dove avvengono gli scambi gassosi."],
    ["Diffusione", "Passaggio dei gas da dove sono più concentrati a dove lo sono meno."],
    ["Volume corrente", "Aria mobilizzata in un atto respiratorio tranquillo (circa 0,5 L)."],
    ["Capacità vitale", "Massima quantità d'aria espirata dopo un'inspirazione massima."],
    ["Emoglobina", "Proteina dei globuli rossi che trasporta l'ossigeno."],
    ["Chemocettori", "Sensori che misurano CO₂, O₂ e acidità del sangue e regolano il respiro."]
  ],
  abbina: [
    ["Diaframma", "Muscolo principale dell'inspirazione"],
    ["Alveoli", "Scambi gassosi"],
    ["Emoglobina", "Trasporto dell'ossigeno"],
    ["Bicarbonato", "Trasporto della CO₂"],
    ["Bulbo", "Centri del respiro"],
    ["Epiglottide", "Protegge la trachea"]
  ],
  completa: [
    "Il muscolo principale dell'inspirazione è il {diaframma}.",
    "Gli scambi gassosi avvengono negli {alveoli}.",
    "L'ossigeno viaggia legato all'{emoglobina}.",
    "La ventilazione è la frequenza respiratoria per il volume {corrente}."
  ]
};

GAMES["i-metabolismi-energetici"] = {
  quiz: [
    ["Qual è la molecola che fornisce direttamente energia al muscolo?", ["Glucosio", "ATP", "Lattato", "Ossigeno"], 1, "Tutti i sistemi energetici servono a ricostruire ATP."],
    ["Quale sistema domina in uno sprint di 100 m?", ["Aerobico", "Anaerobico lattacido", "Anaerobico alattacido", "Lipidico"], 2, "Usa ATP e fosfocreatina già presenti nel muscolo."],
    ["Il sistema alattacido fornisce energia al massimo per circa…", ["1–2 secondi", "8–10 secondi", "2 minuti", "1 ora"], 1, "Le scorte di fosfocreatina si esauriscono in fretta."],
    ["La glicolisi anaerobica produce…", ["Lattato e ioni idrogeno", "Solo acqua", "Grassi", "Proteine"], 0, "È l'accumulo di ioni H⁺ (acidosi) a far calare la prestazione."],
    ["Quale prova dipende soprattutto dal sistema lattacido?", ["Maratona", "400 m piani", "Salto in alto", "Passeggiata"], 1, "Sforzi massimali tra circa 20 secondi e 2 minuti."],
    ["Dove avviene il metabolismo aerobico?", ["Nel citoplasma", "Nei mitocondri", "Nel nucleo", "Nel plasma"], 1, "Ciclo di Krebs e catena respiratoria avvengono nei mitocondri."],
    ["Quale combustibile usa il sistema aerobico?", ["Solo fosfocreatina", "Carboidrati e grassi (e in piccola parte proteine)", "Solo lattato", "Solo ossigeno"], 1, "Con l'allenamento si impara a usare di più i grassi."],
    ["Quanto tempo serve per ricaricare in gran parte la fosfocreatina?", ["5 secondi", "2–3 minuti", "2 ore", "Un giorno"], 1, "Per questo tra sprint massimali servono recuperi lunghi."]
  ],
  vf: [
    ["I tre sistemi energetici lavorano sempre insieme, con proporzioni diverse.", true, "Si parla di continuum energetico."],
    ["Il sistema aerobico ha la potenza più alta ma dura poco.", false, "Ha la capacità più alta (dura a lungo) ma la potenza più bassa."],
    ["Il lattato è solo uno scarto inutile.", false, "Viene riutilizzato come combustibile da cuore, fegato e muscoli."],
    ["La glicolisi avviene nel citoplasma della cellula.", true, "Non ha bisogno di ossigeno."],
    ["Dal glucosio il sistema aerobico ricava molto più ATP della glicolisi anaerobica.", true, "Circa 36–38 ATP contro 2."],
    ["In una maratona prevale il sistema alattacido.", false, "Prevale il sistema aerobico."]
  ],
  flash: [
    ["ATP", "Adenosintrifosfato: la moneta energetica della cellula."],
    ["Anaerobico alattacido", "ATP + fosfocreatina. Massima potenza, durata 8–10 s, nessun lattato."],
    ["Anaerobico lattacido", "Glicolisi senza ossigeno. Alta potenza, da circa 20 s a 2 min, produce lattato."],
    ["Aerobico", "Ossidazione di carboidrati e grassi nei mitocondri. Bassa potenza, durata molto lunga."],
    ["Fosfocreatina", "Molecola che cede un fosfato per ricostruire ATP in pochissimo tempo."],
    ["Ciclo di Krebs", "Serie di reazioni nei mitocondri che estrae energia dai nutrienti."],
    ["VO₂max", "Massimo consumo di ossigeno: indice della potenza aerobica."],
    ["Continuum energetico", "I sistemi lavorano insieme: varia solo quale prevale."]
  ],
  abbina: [
    ["100 m", "Alattacido"],
    ["400 m", "Lattacido"],
    ["Maratona", "Aerobico"],
    ["Mitocondri", "Metabolismo aerobico"],
    ["Citoplasma", "Glicolisi"],
    ["Fosfocreatina", "Ricarica rapida dell'ATP"]
  ],
  completa: [
    "La moneta energetica del muscolo è l'{ATP}.",
    "Il sistema alattacido usa la {fosfocreatina}.",
    "La glicolisi anaerobica produce {lattato}.",
    "Il metabolismo aerobico avviene nei {mitocondri}."
  ]
};

GAMES["teoria-dellallenamento"] = {
  quiz: [
    ["Cosa si intende per carico esterno?", ["La risposta del corpo allo sforzo", "Il lavoro proposto: volume, intensità, densità", "Il peso dello zaino", "La fatica percepita"], 1, "Il carico interno invece è come il tuo corpo reagisce a quel lavoro."],
    ["Quale di questi misura il carico interno?", ["Chilometri percorsi", "Numero di ripetizioni", "Frequenza cardiaca e RPE", "Peso sollevato"], 2, "La fatica percepita (RPE) e la FC dicono quanto ti è costato il lavoro."],
    ["La supercompensazione è…", ["Il calo di prestazione dopo una gara", "Il recupero oltre il livello di partenza dopo un carico adeguato", "Allenarsi due volte al giorno", "Un integratore"], 1, "Se il nuovo stimolo arriva in questa fase, la condizione migliora."],
    ["Cosa succede se il nuovo allenamento arriva troppo presto, senza recupero?", ["Si migliora più in fretta", "Si accumula fatica fino al sovrallenamento", "Non succede niente", "Si dimagrisce"], 1, "Carico e recupero devono alternarsi."],
    ["Quale NON è un segnale di overtraining?", ["Calo di prestazione che dura settimane", "Sonno disturbato e irritabilità", "Migliore umore e più energia", "FC a riposo alterata"], 2, "L'overtraining peggiora umore, sonno e prestazione."],
    ["Il principio di specificità dice che…", ["Ci si allena sempre allo stesso modo", "Si migliora soprattutto in ciò che si allena", "Bisogna fare tutti gli sport", "Conta solo la quantità"], 1, "Per migliorare lo sprint devi allenare lo sprint."],
    ["Un buon riscaldamento serve a…", ["Stancarsi prima della gara", "Alzare temperatura muscolare e FC, preparare il gesto e ridurre il rischio di infortuni", "Fare stretching statico di 5 minuti per muscolo", "Solo a chiacchierare"], 1, "Si fa una parte generale e poi una parte specifica per lo sport."],
    ["Il modello LTAD riguarda…", ["La dieta degli atleti", "Lo sviluppo dell'atleta a lungo termine per fasi di età", "Il doping", "Le regole della pallavolo"], 1, "Long-Term Athlete Development: prima le basi e il divertimento, poi la specializzazione."]
  ],
  vf: [
    ["Il recupero fa parte dell'allenamento.", true, "È durante il recupero che avvengono gli adattamenti."],
    ["Il principio di progressività dice di aumentare il carico gradualmente.", true, "Uno stimolo sempre uguale smette di far migliorare."],
    ["Se smetti di allenarti, gli adattamenti restano per sempre.", false, "Principio di reversibilità: senza stimolo si perdono."],
    ["Due atleti possono reagire in modo diverso allo stesso allenamento.", true, "Per questo serve individualizzare."],
    ["Nei giovani la specializzazione precoce in un solo sport è sempre la scelta migliore.", false, "Una base motoria ampia riduce infortuni e abbandoni."],
    ["Una seduta si articola in riscaldamento, fase centrale e defaticamento.", true, "Il defaticamento aiuta il ritorno graduale alla calma."]
  ],
  flash: [
    ["Carico esterno", "Il lavoro proposto: volume, intensità, densità, tipo di esercizio."],
    ["Carico interno", "La risposta individuale al lavoro: FC, fatica percepita (RPE), lattato."],
    ["Supercompensazione", "Stimolo → fatica → recupero → livello superiore a quello di partenza."],
    ["Overtraining", "Sindrome da sovrallenamento: calo prolungato di prestazione per troppo carico e poco recupero."],
    ["Specificità", "Gli adattamenti dipendono dal tipo di allenamento svolto."],
    ["Progressività", "Aumentare il carico gradualmente nel tempo."],
    ["RPE", "Scala della fatica percepita (es. da 0 a 10)."],
    ["LTAD", "Long-Term Athlete Development: sviluppo dell'atleta a lungo termine."]
  ],
  abbina: [
    ["Volume", "Quanto lavoro"],
    ["Intensità", "Quanto forte"],
    ["Densità", "Rapporto lavoro/pausa"],
    ["Reversibilità", "Senza stimolo si perde"],
    ["Individualizzazione", "Ognuno risponde a modo suo"],
    ["Defaticamento", "Ritorno alla calma"]
  ],
  completa: [
    "La frequenza cardiaca misura il carico {interno}.",
    "Dopo un carico adeguato e il recupero arriva la {supercompensazione}.",
    "Troppo carico e poco recupero portano all'{overtraining}.",
    "Il riscaldamento ha una parte generale e una parte {specifica}."
  ]
};

GAMES["le-capacita-condizionali"] = {
  quiz: [
    ["Quali sono le capacità condizionali?", ["Equilibrio, ritmo, orientamento", "Forza, resistenza, velocità (e flessibilità)", "Tecnica e tattica", "Attenzione e memoria"], 1, "Dipendono soprattutto da muscoli e metabolismi; le coordinative dal sistema nervoso."],
    ["Cosa significa 1RM?", ["Una ripetizione al minuto", "Il carico massimo sollevabile per una sola ripetizione", "Un recupero di 1 minuto", "1 metro di salto"], 1, "Serve a dosare i carichi in percentuale."],
    ["Per allenare la forza massima si usano in genere carichi…", ["Sotto il 40% di 1RM", "Tra 85% e 100% di 1RM, con poche ripetizioni", "Senza pesi", "Il 60% per 30 ripetizioni"], 1, "Poche ripetizioni (1–5) e recuperi lunghi."],
    ["Il fartlek è un metodo…", ["Di forza", "Di resistenza con variazioni libere di ritmo", "Di flessibilità", "Di velocità di reazione"], 1, "Nasce in Svezia: significa \"gioco di velocità\"."],
    ["Nel riscaldamento prima di uno sforzo esplosivo è meglio…", ["Stretching statico lungo", "Stretching dinamico e mobilità", "Nessun movimento", "Massaggio"], 1, "Lo statico prolungato può ridurre per poco tempo la forza esplosiva."],
    ["La velocità di reazione è…", ["Il tempo tra uno stimolo e l'inizio della risposta", "La velocità massima di corsa", "La resistenza alla velocità", "La forza del primo passo"], 0, "Esempio: la partenza dai blocchi allo sparo."],
    ["Quale fattore conta di più per la velocità massima?", ["Fibre lente e grasso corporeo", "Fibre rapide e sistema nervoso efficiente", "Altezza e peso", "Solo la scarpa"], 1, "La velocità è molto legata a qualità genetiche e neuromuscolari."],
    ["L'interval training alterna…", ["Studio e sport", "Fasi di lavoro intenso e fasi di recupero", "Corsa e nuoto", "Forza e stretching"], 1, "Permette di lavorare più a lungo ad alta intensità."]
  ],
  vf: [
    ["La forza esplosiva è la capacità di produrre molta forza in pochissimo tempo.", true, "Serve nei salti, nei lanci e negli scatti."],
    ["La flessibilità dipende solo dai muscoli.", false, "Dipende da mobilità articolare ed estensibilità di muscoli, tendini e legamenti."],
    ["Il test di Cooper valuta la resistenza aerobica.", true, "Si corre per 12 minuti e si misura la distanza."],
    ["La resistenza alla forza si allena con carichi bassi e molte ripetizioni.", true, "Ad esempio sotto il 60–65% di 1RM per 15 o più ripetizioni."],
    ["La velocità non si può allenare per niente.", false, "Si può migliorare: tecnica di corsa, forza, reattività."],
    ["Lo stretching regolare migliora la mobilità articolare.", true, "Va fatto con costanza, senza dolore."]
  ],
  flash: [
    ["Forza massima", "Massima forza che si può esprimere con una contrazione volontaria."],
    ["Forza esplosiva", "Produrre molta forza nel minor tempo possibile."],
    ["Resistenza", "Capacità di sostenere uno sforzo nel tempo opponendosi alla fatica."],
    ["Metodo continuo", "Corsa a ritmo costante e senza pause."],
    ["Velocità", "Capacità di compiere azioni motorie nel minor tempo possibile."],
    ["Flessibilità", "Ampiezza di movimento di un'articolazione."],
    ["Stretching statico", "Mantenere una posizione di allungamento per 20–30 secondi."],
    ["PNF", "Stretching che alterna contrazione e allungamento del muscolo."]
  ],
  abbina: [
    ["1RM", "Carico massimo per 1 ripetizione"],
    ["Fartlek", "Gioco di velocità"],
    ["Cooper", "12 minuti di corsa"],
    ["Interval training", "Lavoro e recupero alternati"],
    ["Sit and reach", "Test di flessibilità"],
    ["Squat jump", "Forza esplosiva"]
  ],
  completa: [
    "Il carico massimo per una ripetizione si chiama {1RM}.",
    "Il {fartlek} alterna liberamente ritmi diversi di corsa.",
    "Prima di uno sprint è meglio lo stretching {dinamico}.",
    "La velocità di {reazione} è il tempo tra stimolo e risposta."
  ]
};

GAMES["dal-gioco-allo-sport"] = {
  quiz: [
    ["Cosa distingue lo sport dal gioco?", ["Lo sport non ha regole", "Lo sport ha regole codificate e una struttura organizzata", "Il gioco è sempre competitivo", "Non c'è differenza"], 1, "Nello sport le regole sono stabilite da federazioni e valgono per tutti."],
    ["Una open skill si esegue in un ambiente…", ["Stabile e prevedibile", "Variabile e imprevedibile", "Sempre al chiuso", "Senza avversari"], 1, "Bisogna leggere la situazione e decidere in fretta."],
    ["Quale di questi è un esempio di closed skill?", ["Un dribbling nel calcio", "Un tuffo dal trampolino", "Un attacco a muro nella pallavolo", "Una parata del portiere"], 1, "L'ambiente non cambia: conta la precisione del gesto."],
    ["Nelle open skills è fondamentale…", ["Ripetere sempre lo stesso identico gesto", "Anticipazione e capacità di decisione", "Non guardare l'avversario", "La lentezza"], 1, "Il gesto va adattato a ciò che succede."],
    ["Il servizio nella pallavolo è…", ["Un'abilità aperta", "Un'abilità più chiusa", "Un gioco presportivo", "Non è un'abilità"], 1, "Lo decidi tu quando partire e l'ambiente è stabile; lo scambio che segue è aperto."],
    ["Come si allena meglio un'abilità aperta?", ["Solo ripetizioni identiche", "Con pratica variabile e situazioni di gioco", "Solo teoria", "Solo con la forza"], 1, "Partite a campo ridotto e situazioni reali allenano le decisioni."],
    ["Il lancio del peso è un'abilità…", ["Chiusa e discreta", "Aperta e continua", "Seriale e aperta", "Cooperativa"], 0, "Ha un inizio e una fine precisi e si esegue in ambiente stabile."],
    ["Un gioco presportivo è…", ["Uno sport olimpico", "Un gioco semplificato che prepara a uno sport", "Una gara ufficiale", "Un riscaldamento senza regole"], 1, "Ad esempio la palla rilanciata come avviamento alla pallavolo."]
  ],
  vf: [
    ["Nel gioco i partecipanti possono modificare le regole.", true, "Il gioco è libero e flessibile."],
    ["La ginnastica artistica è fatta soprattutto di closed skills.", true, "L'ambiente è stabile e conta la perfezione del gesto."],
    ["Nel tennis tutte le abilità sono chiuse.", false, "Il servizio è più chiuso, ma lo scambio è un'abilità aperta."],
    ["Un'abilità continua non ha un inizio e una fine ben definiti.", true, "Ad esempio nuotare o correre."],
    ["Per le closed skills è utile il feedback sulla tecnica.", true, "Aiuta a rendere il gesto preciso e stabile."],
    ["Il fair play non riguarda lo sport di squadra.", false, "Il rispetto di regole, avversari e arbitri vale in ogni sport."]
  ],
  flash: [
    ["Gioco", "Attività libera e piacevole, fine a se stessa."],
    ["Sport", "Attività motoria con regole codificate, organizzata e competitiva."],
    ["Open skill", "Abilità in ambiente variabile e imprevedibile."],
    ["Closed skill", "Abilità in ambiente stabile e prevedibile."],
    ["Abilità discreta", "Ha un inizio e una fine chiari (un salto, un tiro)."],
    ["Abilità seriale", "Sequenza di gesti discreti (una routine di ginnastica)."],
    ["Abilità continua", "Senza un inizio e una fine definiti (correre, nuotare)."],
    ["Pratica variabile", "Allenare il gesto in condizioni sempre diverse."]
  ],
  abbina: [
    ["Calcio", "Open skill"],
    ["Tuffi", "Closed skill"],
    ["Ciclismo", "Abilità continua"],
    ["Salto in alto", "Abilità discreta"],
    ["Routine di ginnastica", "Abilità seriale"],
    ["Palla rilanciata", "Gioco presportivo"]
  ],
  completa: [
    "Nelle {open} skills l'ambiente cambia di continuo.",
    "Nelle {closed} skills conta soprattutto la precisione del gesto.",
    "Lo sport ha regole {codificate} dalle federazioni.",
    "Le abilità aperte si allenano con la pratica {variabile}."
  ]
};

GAMES["apparato-digerente"] = {
  quiz: [
    ["Dove inizia la digestione dei carboidrati?", ["Nello stomaco", "In bocca", "Nell'intestino crasso", "Nel fegato"], 1, "L'amilasi della saliva comincia a scomporre l'amido."],
    ["Dove avviene la maggior parte dell'assorbimento dei nutrienti?", ["Stomaco", "Intestino tenue", "Esofago", "Intestino crasso"], 1, "Villi e microvilli aumentano moltissimo la superficie di assorbimento."],
    ["Cosa fa la bile?", ["Digerisce le proteine", "Emulsiona i grassi", "Produce insulina", "Assorbe l'acqua"], 1, "Divide i grassi in goccioline, così la lipasi lavora meglio."],
    ["Dove viene prodotta la bile?", ["Nella cistifellea", "Nel fegato", "Nel pancreas", "Nello stomaco"], 1, "La cistifellea la conserva e la rilascia quando serve."],
    ["Nello stomaco inizia la digestione…", ["Dei grassi", "Delle proteine", "Delle fibre", "Delle vitamine"], 1, "Grazie ad acido cloridrico e pepsina."],
    ["La peristalsi è…", ["Un enzima", "Un'onda di contrazione che spinge il cibo", "Una ghiandola", "Una malattia"], 1, "È prodotta dalla muscolatura liscia del tubo digerente."],
    ["Cosa assorbe soprattutto l'intestino crasso?", ["Proteine", "Acqua e sali minerali", "Grassi", "Glucosio"], 1, "Ospita anche il microbiota intestinale."],
    ["Quando conviene fare un pasto completo prima di una gara?", ["Subito prima", "3–4 ore prima", "Durante il riscaldamento", "Non si mangia mai"], 1, "La digestione richiede tempo e sangue che durante lo sforzo va ai muscoli."]
  ],
  vf: [
    ["Durante uno sforzo intenso il flusso di sangue all'apparato digerente diminuisce.", true, "Il sangue viene dirottato verso i muscoli che lavorano."],
    ["Il pancreas produce enzimi digestivi e bicarbonato.", true, "Il bicarbonato neutralizza l'acidità del chimo."],
    ["I grassi lasciano lo stomaco più velocemente dei carboidrati.", false, "Grassi, fibre e proteine rallentano lo svuotamento dello stomaco."],
    ["Il microbiota intestinale è formato da miliardi di batteri utili.", true, "Contribuisce a digestione, difese immunitarie e salute generale."],
    ["L'esofago digerisce il cibo.", false, "L'esofago trasporta il bolo allo stomaco."],
    ["Le fibre aiutano il buon funzionamento dell'intestino.", true, "Si trovano in verdura, frutta, legumi e cereali integrali."]
  ],
  flash: [
    ["Digestione meccanica", "Sminuzzare il cibo: masticazione e movimenti di stomaco e intestino."],
    ["Digestione chimica", "Scomposizione delle molecole grazie agli enzimi."],
    ["Amilasi", "Enzima che scompone l'amido in zuccheri semplici."],
    ["Pepsina", "Enzima dello stomaco che inizia la digestione delle proteine."],
    ["Lipasi", "Enzima che scompone i grassi in acidi grassi e glicerolo."],
    ["Chimo", "Poltiglia di cibo semidigerito che esce dallo stomaco."],
    ["Villi intestinali", "Piccole sporgenze del tenue che assorbono i nutrienti."],
    ["Cistifellea", "Piccola sacca che conserva la bile prodotta dal fegato."]
  ],
  abbina: [
    ["Bocca", "Masticazione e amilasi salivare"],
    ["Stomaco", "Acido cloridrico e pepsina"],
    ["Fegato", "Produce la bile"],
    ["Pancreas", "Enzimi e bicarbonato"],
    ["Intestino tenue", "Assorbimento dei nutrienti"],
    ["Intestino crasso", "Assorbimento dell'acqua"]
  ],
  completa: [
    "La digestione dell'amido inizia in {bocca} grazie all'amilasi.",
    "Il fegato produce la {bile} che emulsiona i grassi.",
    "La maggior parte dell'assorbimento avviene nell'intestino {tenue}.",
    "Il cibo avanza nel tubo digerente grazie alla {peristalsi}."
  ]
};

GAMES["test-motori"] = {
  quiz: [
    ["Quanto dura il test di Cooper?", ["6 minuti", "12 minuti", "20 minuti", "1 ora"], 1, "Si corre la distanza massima possibile in 12 minuti."],
    ["Cosa stima il test di Cooper?", ["La forza massima", "Il VO₂max (potenza aerobica)", "La flessibilità", "La velocità di reazione"], 1, "Più metri percorri, più alto è il VO₂max stimato."],
    ["Nel beep test la velocità…", ["È sempre uguale", "Aumenta a ogni livello, circa ogni minuto", "Diminuisce", "La decidi tu"], 1, "È un test incrementale fino all'esaurimento."],
    ["Quanto è lunga ogni navetta del beep test?", ["10 m", "20 m", "50 m", "100 m"], 1, "Devi arrivare alla linea prima del segnale."],
    ["Il Bronco test prevede navette a…", ["10, 20, 30 m", "20, 40, 60 m", "50, 100, 150 m", "5, 10, 15 m"], 1, "Un giro completo si ripete 5 volte, per 1200 m totali."],
    ["L'Illinois agility test valuta…", ["La forza delle braccia", "L'agilità e i cambi di direzione", "La resistenza aerobica", "La flessibilità"], 1, "Si parte sdraiati a pancia in giù e si percorre uno slalom tra i coni."],
    ["Perché si fa sempre lo stesso riscaldamento prima di un test?", ["Per perdere tempo", "Per rendere i risultati confrontabili nel tempo", "Per stancarsi", "Non serve"], 1, "Condizioni uguali = test ripetibile e affidabile."],
    ["Cosa fai se durante un test di resistenza ti senti male (vertigini, dolore al petto)?", ["Continui fino alla fine", "Ti fermi subito e avvisi l'insegnante", "Acceleri", "Bevi e riparti"], 1, "La sicurezza viene prima del risultato."]
  ],
  vf: [
    ["Un test è affidabile se, ripetuto nelle stesse condizioni, dà risultati simili.", true, "Si chiama ripetibilità o affidabilità."],
    ["Nel test di Cooper si cammina sempre allo stesso ritmo.", false, "Bisogna percorrere la distanza massima possibile."],
    ["Il beep test termina quando non si riesce più a stare nel ritmo del segnale.", true, "Di solito dopo due segnali mancati."],
    ["Il Bronco test è nato nel rugby.", true, "Oggi è usato anche in altri sport di squadra."],
    ["Confrontare i propri risultati nel tempo è più utile che confrontarsi con gli altri.", true, "Misura i tuoi progressi."],
    ["Le condizioni del terreno non influenzano il risultato di un test di corsa.", false, "Superficie, vento e temperatura cambiano la prestazione."]
  ],
  flash: [
    ["Test di Cooper", "12 minuti di corsa alla massima distanza; stima del VO₂max."],
    ["Beep test", "Navette di 20 m a velocità crescente, guidate da un segnale sonoro."],
    ["Bronco test", "Navette 20-40-60 m andata e ritorno × 5 (1200 m), si misura il tempo."],
    ["Illinois test", "Slalom di agilità su un percorso 10 × 5 m."],
    ["Test a navetta", "Spostamenti brevi ripetuti con cambio di direzione (es. 4 × 10 m)."],
    ["Affidabilità", "Un test ripetuto nelle stesse condizioni dà risultati simili."],
    ["Validità", "Il test misura davvero la capacità che vuole misurare."],
    ["VO₂max", "Massima quantità di ossigeno che il corpo riesce a usare in un minuto."]
  ],
  abbina: [
    ["Cooper", "12 minuti"],
    ["Beep test", "20 m a ritmo crescente"],
    ["Bronco", "1200 m in navette"],
    ["Illinois", "Agilità"],
    ["4 × 10 m", "Velocità con cambi di direzione"],
    ["Sit and reach", "Flessibilità"]
  ],
  completa: [
    "Il test di {Cooper} dura 12 minuti.",
    "Nel beep test le navette sono lunghe {20} metri.",
    "Il Bronco test copre in totale {1200} metri.",
    "L'Illinois test misura l'{agilità}."
  ]
};

GAMES["principi-per-una-sana-alimentazione"] = {
  quiz: [
    ["Quanti pasti al giorno sono consigliati?", ["1", "2", "5", "8"], 2, "Colazione, spuntino, pranzo, merenda e cena."],
    ["Quale percentuale di energia dovrebbe fornire la colazione?", ["5%", "15–20%", "50%", "70%"], 1, "È un pasto principale che dà energia e concentrazione."],
    ["Quante porzioni di frutta e verdura al giorno?", ["1", "5", "10", "Solo nel weekend"], 1, "Meglio se di colori diversi e di stagione."],
    ["Qual è il condimento principale della dieta mediterranea?", ["Burro", "Olio extravergine di oliva", "Strutto", "Margarina"], 1, "È ricco di grassi monoinsaturi e antiossidanti."],
    ["Quanti bicchieri d'acqua al giorno, in media?", ["1–2", "6–8", "15", "Solo quando si ha sete forte"], 1, "Di più se fai sport o fa caldo."],
    ["Nella lista degli ingredienti di un'etichetta, il primo ingrediente è…", ["Quello presente in quantità maggiore", "Il più costoso", "Quello naturale", "A caso"], 0, "Gli ingredienti sono elencati in ordine decrescente di peso."],
    ["Quante calorie forniscono 1 g di grassi?", ["4 kcal", "7 kcal", "9 kcal", "0 kcal"], 2, "Carboidrati e proteine ne forniscono circa 4 per grammo."],
    ["Cosa significa mangiare in modo sostenibile?", ["Mangiare solo carne", "Scegliere prodotti di stagione, sprecare meno, ridurre la carne rossa", "Comprare cibi in tanta plastica", "Saltare i pasti"], 1, "Fa bene alla salute e al pianeta."]
  ],
  vf: [
    ["Saltare la colazione aiuta a concentrarsi meglio a scuola.", false, "La colazione sostiene attenzione e memoria nella mattinata."],
    ["L'acqua non ha calorie.", true, "È la scelta migliore per idratarsi."],
    ["Le bevande zuccherate andrebbero limitate.", true, "Apportano molti zuccheri semplici e poca sazietà."],
    ["Alla base della piramide mediterranea ci sono i dolci.", false, "Alla base ci sono acqua, frutta, verdura e cereali; i dolci sono in cima."],
    ["I legumi sono una buona fonte di proteine.", true, "Ceci, lenticchie, fagioli: proteine, fibre e poco impatto ambientale."],
    ["I prodotti di stagione sono di solito più saporiti.", true, "E richiedono meno trasporti e conservazione."]
  ],
  flash: [
    ["Dieta mediterranea", "Modello alimentare basato su verdura, frutta, cereali, legumi, pesce e olio d'oliva."],
    ["Distribuzione dei pasti", "Colazione 15–20%, spuntino 5%, pranzo 35–40%, merenda 5%, cena 30–35%."],
    ["Macronutrienti", "Carboidrati, proteine e grassi: forniscono energia."],
    ["Micronutrienti", "Vitamine e sali minerali: non danno energia ma sono indispensabili."],
    ["Fibre", "Parti dei vegetali che aiutano l'intestino e aumentano la sazietà."],
    ["Etichetta", "Riporta ingredienti in ordine decrescente e valori nutrizionali per 100 g."],
    ["Idratazione", "6–8 bicchieri d'acqua al giorno, di più con lo sport."],
    ["Spreco alimentare", "Cibo buttato che si poteva consumare: va ridotto."]
  ],
  abbina: [
    ["Olio extravergine", "Grassi buoni"],
    ["Legumi", "Proteine vegetali"],
    ["Pane integrale", "Carboidrati e fibre"],
    ["Frutta e verdura", "Vitamine e minerali"],
    ["Acqua", "0 calorie"],
    ["Grassi", "9 kcal per grammo"]
  ],
  completa: [
    "I pasti consigliati sono {5} al giorno.",
    "La colazione dovrebbe fornire il 15–20% dell'{energia} giornaliera.",
    "Il condimento della dieta mediterranea è l'olio {extravergine}.",
    "Gli ingredienti in etichetta sono in ordine {decrescente} di quantità."
  ]
};
