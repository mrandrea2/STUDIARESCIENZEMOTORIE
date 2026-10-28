/* =========================================================
   ATTIVITÀ IN PIÙ — si aggiungono ai giochi esistenti
   ordina: [titolo, [passaggi nell'ordine giusto]]
   gruppi: [domanda, [[nome gruppo, [voci]], [nome gruppo, [voci]], ...]]
   ========================================================= */
window.GAMES = window.GAMES || {};
(function () {
  const X = {};

  X["la-salute-dinamica"] = {
    quiz: [
      ["Quale abitudine aiuta di più a interrompere la sedentarietà a scuola?", ["Restare seduti tutta la mattina", "Alzarsi e muoversi durante le pause", "Mangiare la merenda al banco", "Usare il telefono in ricreazione"], 1, "Anche pochi minuti di movimento ogni ora fanno bene a corpo e attenzione."],
      ["Cosa migliora l'attività fisica regolare, oltre ai muscoli?", ["Solo il peso", "Umore, sonno e concentrazione", "Nulla", "Solo la vista"], 1, "Il movimento libera sostanze che migliorano umore e capacità di attenzione."],
      ["Qual è un'attività vigorosa?", ["Leggere", "Camminare piano", "Correre una partita di calcio", "Stare in piedi"], 2, "Con l'intensità vigorosa riesci a dire solo poche parole."],
      ["Gli schermi la sera prima di dormire…", ["Aiutano ad addormentarsi", "Possono peggiorare la qualità del sonno", "Non hanno effetti", "Aumentano le ore di sonno"], 1, "La luce degli schermi ritarda la melatonina."],
      ["Quale scelta è sia salutare sia sostenibile?", ["Farsi accompagnare in auto per 500 m", "Andare a scuola a piedi o in bici", "Prendere sempre l'ascensore", "Restare a casa"], 1, "Mobilità attiva: movimento per te, meno inquinamento per tutti."]
    ],
    vf: [
      ["Fare sport con i compagni migliora anche il benessere sociale.", true, "La salute ha una dimensione fisica, mentale e sociale."],
      ["Per stare in salute basta non essere malati.", false, "La salute è benessere completo, non solo assenza di malattia."],
      ["Il sonno è parte dello stile di vita sano.", true, "Recupero, crescita e memoria dipendono dal sonno."],
      ["L'attività fisica serve solo a chi vuole diventare atleta.", false, "Serve a tutti, a ogni età."]
    ],
    flash: [
      ["Intensità moderata", "Respiri più forte ma riesci ancora a parlare."],
      ["Intensità vigorosa", "Riesci a dire solo poche parole."],
      ["Pausa attiva", "Breve momento di movimento che interrompe lo stare seduti."],
      ["Benessere sociale", "Stare bene nelle relazioni con gli altri."]
    ],
    abbina: [["Camminata veloce", "Intensità moderata"], ["Corsa in partita", "Intensità vigorosa"], ["Pausa attiva", "Interrompe la sedentarietà"]],
    completa: [
      "Ogni {movimento} conta per la salute.",
      "Gli schermi la sera peggiorano il {sonno}.",
      "Andare a scuola in {bici} è salutare e sostenibile."
    ],
    ordina: [
      ["Dalla meno intensa alla più intensa", ["Stare seduti", "Passeggiare", "Camminata veloce", "Corsa leggera", "Sprint"]]
    ],
    gruppi: ["Abitudine sana o da cambiare?", [
      ["Sana", ["Dormire 9 ore", "Andare a scuola a piedi", "Bere acqua", "Fare sport con gli amici"]],
      ["Da cambiare", ["Ore di videogiochi seduto", "Saltare la colazione", "Schermi fino a tardi", "Sempre l'ascensore"]]
    ]]
  };

  X["sistema-scheletrico"] = {
    quiz: [
      ["Come si chiama il corpo centrale di un osso lungo?", ["Epifisi", "Diafisi", "Periostio", "Midollo"], 1, "Le estremità si chiamano epifisi."],
      ["Quale membrana riveste l'esterno dell'osso?", ["Pleura", "Periostio", "Pericardio", "Meninge"], 1, "Il periostio contiene vasi e nervi e serve alla crescita in spessore."],
      ["Quante paia di coste ha l'essere umano?", ["10", "12", "14", "24"], 1, "7 vere, 3 false e 2 fluttuanti."],
      ["Quale minerale è il più importante per le ossa?", ["Ferro", "Calcio", "Sodio", "Iodio"], 1, "Insieme al fosforo dà durezza all'osso; la vitamina D ne favorisce l'assorbimento."],
      ["Cosa protegge la gabbia toracica?", ["Stomaco e fegato", "Cuore e polmoni", "Cervello", "Reni"], 1, "È formata da coste, sterno e vertebre toraciche."]
    ],
    vf: [
      ["La vitamina D aiuta ad assorbire il calcio.", true, "Si forma anche esponendosi al sole."],
      ["Il femore è l'osso più lungo del corpo.", true, "È anche uno dei più robusti."],
      ["Le vertebre toraciche sono 7.", false, "Le toraciche sono 12; le cervicali sono 7."],
      ["Lo zaino troppo pesante portato su una spalla può affaticare la colonna.", true, "Meglio portarlo su entrambe le spalle e non sovraccaricarlo."]
    ],
    flash: [
      ["Diafisi", "Corpo centrale di un osso lungo."],
      ["Epifisi", "Estremità di un osso lungo."],
      ["Periostio", "Membrana che riveste l'esterno dell'osso."],
      ["Legge di Wolff", "L'osso si rinforza in base ai carichi che riceve."]
    ],
    abbina: [["Cranio", "Protegge il cervello"], ["Coste", "Proteggono cuore e polmoni"], ["Vitamina D", "Assorbimento del calcio"]],
    completa: [
      "Il corpo centrale dell'osso lungo si chiama {diafisi}.",
      "Le coste sono {12} paia.",
      "La vitamina {D} aiuta ad assorbire il calcio."
    ],
    ordina: [
      ["La colonna vertebrale, dall'alto in basso", ["Vertebre cervicali", "Vertebre toraciche", "Vertebre lombari", "Sacro", "Coccige"]],
      ["Le ossa della gamba, dall'alto in basso", ["Bacino", "Femore", "Rotula", "Tibia e perone", "Tarso"]]
    ],
    gruppi: ["Che forma ha quest'osso?", [
      ["Lungo", ["Femore", "Omero", "Tibia", "Radio"]],
      ["Piatto", ["Scapola", "Sterno", "Osso frontale"]],
      ["Corto o irregolare", ["Vertebra", "Ossa del carpo", "Ossa del tarso"]]
    ]]
  };

  X["le-articolazioni"] = {
    quiz: [
      ["Quale articolazione permette i movimenti più ampi?", ["Ginocchio", "Spalla", "Gomito", "Caviglia"], 1, "Per questo è anche la più soggetta a lussazioni."],
      ["La rotula si trova davanti…", ["Al gomito", "Al ginocchio", "All'anca", "Alla caviglia"], 1, "È un osso sesamoide dentro il tendine del quadricipite."],
      ["Il gomito permette soprattutto…", ["Rotazioni complete", "Flessione ed estensione", "Abduzione", "Circonduzione"], 1, "Tra radio e ulna avviene la prono-supinazione."],
      ["Cosa unisce un muscolo a un osso?", ["Legamento", "Tendine", "Menisco", "Capsula"], 1, "I legamenti invece uniscono osso a osso."],
      ["Qual è un modo per prevenire le distorsioni di caviglia?", ["Non scaldarsi", "Esercizi di equilibrio e propriocezione", "Correre sempre su terreni sconnessi", "Usare scarpe slacciate"], 1, "Allenare l'equilibrio rende la caviglia più reattiva."]
    ],
    vf: [
      ["La circonduzione combina più movimenti in un cerchio.", true, "Esempio: i cerchi con le braccia."],
      ["Il ginocchio è un'articolazione immobile.", false, "È una diartrosi, quindi mobile."],
      ["Il riscaldamento aumenta la produzione di liquido sinoviale.", true, "L'articolazione diventa più lubrificata."],
      ["L'anca è più stabile della spalla.", true, "La testa del femore è inserita in profondità nell'acetabolo."]
    ],
    flash: [
      ["Circonduzione", "Movimento circolare che unisce flessione, abduzione, estensione e adduzione."],
      ["Tendine", "Collega il muscolo all'osso."],
      ["Lussazione", "Le superfici articolari perdono il contatto."],
      ["Propriocezione", "Capacità di sentire la posizione delle articolazioni."]
    ],
    abbina: [["Lussazione", "Perdita di contatto tra le ossa"], ["Distorsione", "Stiramento dei legamenti"], ["Tendine", "Muscolo e osso"]],
    completa: [
      "I {tendini} uniscono i muscoli alle ossa.",
      "La {rotula} si trova davanti al ginocchio.",
      "Una {distorsione} stira i legamenti."
    ],
    ordina: [
      ["Dall'articolazione più mobile alla meno mobile", ["Spalla", "Ginocchio", "Tra le vertebre", "Suture del cranio"]]
    ],
    gruppi: ["Che tipo di articolazione è?", [
      ["Mobile (diartrosi)", ["Spalla", "Anca", "Ginocchio", "Gomito"]],
      ["Semimobile (anfiartrosi)", ["Tra due vertebre", "Sinfisi pubica"]],
      ["Immobile (sinartrosi)", ["Suture del cranio"]]
    ]]
  };

  X["sistema-muscolare"] = {
    quiz: [
      ["Quale muscolo estende il ginocchio?", ["Bicipite femorale", "Quadricipite", "Gastrocnemio", "Gluteo"], 1, "Gli ischiocrurali, dietro la coscia, lo flettono."],
      ["Il deltoide si trova…", ["Sulla spalla", "Sul petto", "Sulla coscia", "Sulla schiena bassa"], 0, "Solleva il braccio in avanti, di lato e indietro."],
      ["Il muscolo più importante per respirare è…", ["Il deltoide", "Il diaframma", "Il bicipite", "Il trapezio"], 1, "Separa torace e addome."],
      ["Cosa serve alla miosina per staccarsi dall'actina?", ["Ossigeno", "ATP", "Acqua", "Sodio"], 1, "Senza ATP il muscolo resta contratto."],
      ["Quale esercizio è soprattutto isometrico?", ["Squat", "Plank", "Salto", "Corsa"], 1, "La lunghezza del muscolo non cambia."]
    ],
    vf: [
      ["Il quadricipite è formato da quattro capi.", true, "Retto femorale, vasto laterale, vasto mediale e vasto intermedio."],
      ["Il gastrocnemio si trova nel polpaccio.", true, "Insieme al soleo forma il tricipite surale."],
      ["Le fibre rapide sono le più resistenti alla fatica.", false, "Sono le fibre lente (tipo I) a resistere meglio."],
      ["La contrazione eccentrica frena il movimento.", true, "Come il quadricipite quando scendi le scale."]
    ],
    flash: [
      ["Quadricipite", "Muscolo davanti alla coscia: estende il ginocchio."],
      ["Ischiocrurali", "Muscoli dietro la coscia: flettono il ginocchio."],
      ["Gran pettorale", "Muscolo del petto: avvicina il braccio al corpo."],
      ["Retto dell'addome", "Flette il busto in avanti."]
    ],
    abbina: [["Quadricipite", "Estende il ginocchio"], ["Deltoide", "Solleva il braccio"], ["Gastrocnemio", "Punta del piede"]],
    completa: [
      "Il {quadricipite} estende il ginocchio.",
      "Il principale muscolo della respirazione è il {diaframma}.",
      "Senza {ATP} il muscolo non si rilassa."
    ],
    ordina: [
      ["Le tappe della contrazione", ["Impulso nel motoneurone", "Acetilcolina nella placca", "Potenziale d'azione sulla fibra", "Liberazione del calcio", "Ponti actina-miosina", "Accorciamento del sarcomero"]]
    ],
    gruppi: ["Che tipo di contrazione?", [
      ["Concentrica", ["Salire le scale", "Fase di spinta dello squat", "Sollevare un peso"]],
      ["Eccentrica", ["Scendere le scale", "Atterrare da un salto", "Discesa dello squat"]],
      ["Isometrica", ["Plank", "Wall sit", "Tenere fermo un peso"]]
    ]]
  };

  X["apparato-cardio-circolatorio"] = {
    quiz: [
      ["Quante cavità ha il cuore?", ["2", "3", "4", "6"], 2, "Due atri e due ventricoli."],
      ["Le vene polmonari portano sangue…", ["Povero di ossigeno al cuore", "Ricco di ossigeno all'atrio sinistro", "Ai polmoni", "Al fegato"], 1, "È l'eccezione: vene con sangue ossigenato."],
      ["Quale cellula del sangue trasporta l'ossigeno?", ["Globulo bianco", "Globulo rosso", "Piastrina", "Linfocita"], 1, "Contiene l'emoglobina."],
      ["Le piastrine servono a…", ["Trasportare ossigeno", "Coagulare il sangue", "Combattere i virus", "Digerire"], 1, "Fermano le emorragie."],
      ["Dove si misura facilmente la frequenza cardiaca?", ["Al gomito", "Al polso o al collo", "Alla caviglia", "Sulla fronte"], 1, "Arteria radiale al polso, carotide al collo."]
    ],
    vf: [
      ["Il cuore è un muscolo involontario.", true, "Batte senza che tu lo decida."],
      ["Il sangue è formato solo da globuli rossi.", false, "Ci sono anche plasma, globuli bianchi e piastrine."],
      ["Durante lo sforzo il sangue va soprattutto ai muscoli che lavorano.", true, "Il flusso a stomaco e intestino diminuisce."],
      ["Il fumo fa bene al sistema cardiovascolare.", false, "Danneggia i vasi e aumenta il rischio di infarto."]
    ],
    flash: [
      ["Plasma", "Parte liquida del sangue: acqua, sali, proteine, nutrienti."],
      ["Globuli rossi", "Trasportano l'ossigeno grazie all'emoglobina."],
      ["Piastrine", "Servono alla coagulazione."],
      ["Frequenza cardiaca", "Numero di battiti al minuto."]
    ],
    abbina: [["Globuli bianchi", "Difese"], ["Piastrine", "Coagulazione"], ["Plasma", "Parte liquida del sangue"]],
    completa: [
      "Il cuore ha due atri e due {ventricoli}.",
      "Le {piastrine} servono alla coagulazione.",
      "Il battito si sente al polso e alla {carotide}."
    ],
    ordina: [
      ["Il percorso del sangue partendo dall'atrio destro", ["Atrio destro", "Ventricolo destro", "Arterie polmonari", "Polmoni", "Vene polmonari", "Atrio sinistro", "Ventricolo sinistro", "Aorta"]]
    ],
    gruppi: ["Che sangue trasporta?", [
      ["Ricco di ossigeno", ["Aorta", "Vene polmonari", "Ventricolo sinistro"]],
      ["Povero di ossigeno", ["Vene cave", "Arterie polmonari", "Ventricolo destro"]]
    ]]
  };

  X["apparato-respiratorio"] = {
    quiz: [
      ["Quale gas espiriamo in quantità maggiore rispetto all'aria inspirata?", ["Ossigeno", "Anidride carbonica", "Azoto", "Elio"], 1, "La CO₂ è il prodotto di scarto del metabolismo."],
      ["Come si chiamano le membrane che avvolgono i polmoni?", ["Meningi", "Pleure", "Pericardio", "Periostio"], 1, "Il liquido tra le pleure permette ai polmoni di scorrere."],
      ["Perché è meglio inspirare dal naso?", ["Per fare rumore", "Filtra, scalda e umidifica l'aria", "Entra più CO₂", "Non c'è differenza"], 1, "Peli e muco trattengono le particelle."],
      ["Quale muscolo aiuta l'espirazione forzata?", ["Bicipite", "Addominali", "Quadricipite", "Deltoide"], 1, "Spingono il diaframma verso l'alto."],
      ["L'asma provoca…", ["Bronchi più larghi", "Restringimento dei bronchi", "Più alveoli", "Polmoni più grandi"], 1, "Con le giuste cure si può fare sport normalmente."]
    ],
    vf: [
      ["Il polmone destro ha tre lobi.", true, "Il sinistro ne ha due, per fare spazio al cuore."],
      ["Lo scambio dei gas avviene per diffusione.", true, "I gas passano da dove sono più concentrati a dove lo sono meno."],
      ["Durante lo sforzo la frequenza respiratoria diminuisce.", false, "Aumenta per portare più ossigeno ed eliminare CO₂."],
      ["Il fumo danneggia le ciglia che puliscono i bronchi.", true, "Le vie aeree si difendono peggio."]
    ],
    flash: [
      ["Pleure", "Membrane che avvolgono i polmoni."],
      ["Spazio morto", "Aria nelle vie aeree che non arriva agli alveoli (circa 150 ml)."],
      ["Volume residuo", "Aria che resta nei polmoni anche dopo un'espirazione massima."],
      ["Ventilazione", "Frequenza respiratoria × volume corrente."]
    ],
    abbina: [["Naso", "Filtra e scalda l'aria"], ["Pleure", "Avvolgono i polmoni"], ["Addominali", "Espirazione forzata"]],
    completa: [
      "I polmoni sono avvolti dalle {pleure}.",
      "Il polmone destro ha {tre} lobi.",
      "I gas si scambiano per {diffusione}."
    ],
    ordina: [
      ["Il viaggio dell'aria", ["Naso", "Faringe", "Laringe", "Trachea", "Bronchi", "Bronchioli", "Alveoli"]],
      ["Il viaggio dell'ossigeno", ["Alveolo", "Capillare polmonare", "Emoglobina nei globuli rossi", "Cuore sinistro", "Arterie", "Muscolo che lavora"]]
    ],
    gruppi: ["Cosa succede quando…", [
      ["Inspiri", ["Il diaframma scende", "Il torace si allarga", "L'aria entra"]],
      ["Espiri", ["Il diaframma sale", "Il torace si restringe", "L'aria esce"]]
    ]]
  };

  X["i-metabolismi-energetici"] = {
    quiz: [
      ["Quale sport alterna di più i tre sistemi energetici?", ["Maratona", "Pallavolo o calcio", "Lancio del peso", "100 m"], 1, "Gli sport di squadra alternano sforzi brevi e intensi a fasi più lente."],
      ["Dove è immagazzinato il glicogeno?", ["Nelle ossa", "Nei muscoli e nel fegato", "Nel sangue", "Nel cervello"], 1, "È la riserva di carboidrati."],
      ["Quale nutriente fornisce più energia per grammo?", ["Carboidrati", "Proteine", "Grassi", "Acqua"], 2, "9 kcal contro le 4 di carboidrati e proteine."],
      ["Cosa fa calare la prestazione nel sistema lattacido?", ["La mancanza di acqua", "L'accumulo di ioni idrogeno (acidosi)", "Il troppo ossigeno", "Il freddo"], 1, "L'acidità ostacola la contrazione."],
      ["Uno sforzo di 30 secondi al massimo usa soprattutto…", ["Il sistema aerobico", "Il sistema lattacido", "Solo i grassi", "Nessun sistema"], 1, "Tra circa 20 secondi e 2 minuti domina il lattacido."]
    ],
    vf: [
      ["A riposo il corpo usa soprattutto il sistema aerobico.", true, "C'è tutto il tempo per usare l'ossigeno."],
      ["Il glicogeno non si esaurisce mai.", false, "Dopo 60–90 minuti di sforzo intenso può esaurirsi."],
      ["I grassi si usano soprattutto negli sforzi lunghi e moderati.", true, "Servono ossigeno e tempo per ossidarli."],
      ["Il recupero attivo aiuta a smaltire il lattato.", true, "Muovendosi piano si riutilizza più in fretta."]
    ],
    flash: [
      ["Glicogeno", "Riserva di carboidrati nei muscoli e nel fegato."],
      ["Acidosi", "Aumento di ioni H⁺ che fa calare la prestazione."],
      ["Recupero attivo", "Movimento leggero dopo lo sforzo per smaltire più in fretta."],
      ["Mitocondri", "Centrali energetiche della cellula, dove lavora il sistema aerobico."]
    ],
    abbina: [["Glicogeno", "Riserva di carboidrati"], ["Grassi", "9 kcal per grammo"], ["Acidosi", "Ioni idrogeno in eccesso"]],
    completa: [
      "Il {glicogeno} è la riserva di carboidrati.",
      "I {grassi} forniscono 9 kcal per grammo.",
      "Il recupero {attivo} aiuta a smaltire il lattato."
    ],
    ordina: [
      ["Dalla durata più breve alla più lunga", ["Salto in alto", "100 m", "400 m", "1500 m", "Maratona"]],
      ["Dal glucosio all'ATP (con ossigeno)", ["Glucosio", "Glicolisi", "Piruvato", "Ciclo di Krebs", "Catena respiratoria"]]
    ],
    gruppi: ["Quale sistema domina?", [
      ["Alattacido", ["Salto in lungo", "Lancio del giavellotto", "Sprint di 5 secondi", "Sollevamento massimale"]],
      ["Lattacido", ["400 m piani", "100 m a nuoto", "800 m"]],
      ["Aerobico", ["Maratona", "Sci di fondo", "Camminata di un'ora"]]
    ]]
  };

  X["teoria-dellallenamento"] = {
    quiz: [
      ["Cosa misura la scala RPE?", ["La velocità", "La fatica percepita", "Il peso", "La FC"], 1, "Di solito da 0 (riposo) a 10 (sforzo massimo)."],
      ["Quale di questi è un mezzo di allenamento?", ["La scarpa", "Un esercizio come la corsa o lo squat", "Il campo", "L'arbitro"], 1, "I mezzi sono gli esercizi usati per allenare."],
      ["Quale fase viene dopo la fase centrale della seduta?", ["Riscaldamento", "Defaticamento", "Gara", "Nessuna"], 1, "Serve a tornare gradualmente alla calma."],
      ["Un allenamento sempre uguale per mesi…", ["Fa migliorare sempre", "Smette di far migliorare", "Raddoppia la forza", "Evita il recupero"], 1, "Serve aumentare il carico in modo progressivo."],
      ["Cosa significa densità del carico?", ["Il peso dell'attrezzo", "Il rapporto tra lavoro e pausa", "Il numero di atleti", "L'altezza"], 1, "Più pause brevi = densità più alta."]
    ],
    vf: [
      ["Dormire bene fa parte del recupero.", true, "Durante il sonno avvengono riparazione e adattamenti."],
      ["Allenarsi forte tutti i giorni senza pause è la strategia migliore.", false, "Senza recupero si rischia l'overtraining."],
      ["Lo stesso allenamento può essere facile per uno e duro per un altro.", true, "Il carico interno è individuale."],
      ["Il riscaldamento riduce il rischio di infortuni.", true, "Muscoli più caldi ed elastici."]
    ],
    flash: [
      ["Volume", "Quantità di lavoro: chilometri, ripetizioni, minuti."],
      ["Intensità", "Quanto è impegnativo il lavoro: velocità, carico, % FC max."],
      ["Densità", "Rapporto tra lavoro e recupero."],
      ["Mezzi di allenamento", "Gli esercizi usati per allenare una capacità."]
    ],
    abbina: [["RPE", "Fatica percepita"], ["Overtraining", "Troppo carico, poco recupero"], ["Progressività", "Aumentare poco alla volta"]],
    completa: [
      "La scala {RPE} misura la fatica percepita.",
      "Dopo la fase centrale viene il {defaticamento}.",
      "Il rapporto tra lavoro e pausa si chiama {densità}."
    ],
    ordina: [
      ["La supercompensazione", ["Carico", "Fatica", "Recupero", "Supercompensazione", "Nuovo carico"]],
      ["Le fasi della seduta", ["Riscaldamento generale", "Riscaldamento specifico", "Fase centrale", "Defaticamento"]]
    ],
    gruppi: ["Carico esterno o interno?", [
      ["Esterno", ["Chilometri percorsi", "Chili sollevati", "Numero di ripetizioni", "Velocità di corsa"]],
      ["Interno", ["Frequenza cardiaca", "Fatica percepita", "Lattato nel sangue"]]
    ]]
  };

  X["le-capacita-condizionali"] = {
    quiz: [
      ["Le capacità coordinative dipendono soprattutto…", ["Dai muscoli", "Dal sistema nervoso", "Dalle ossa", "Dal cuore"], 1, "Equilibrio, ritmo, orientamento sono coordinative."],
      ["Quale test misura la forza esplosiva degli arti inferiori?", ["Sit and reach", "Salto in lungo da fermo", "Cooper", "Plank"], 1, "Anche lo squat jump e il counter movement jump."],
      ["Lo stretching statico si mantiene per circa…", ["2 secondi", "20–30 secondi", "5 minuti", "Un'ora"], 1, "Senza molleggiare e senza dolore."],
      ["La velocità di reazione dipende soprattutto…", ["Dal peso", "Dalla rapidità del sistema nervoso", "Dalla flessibilità", "Dall'alimentazione"], 1, "Si migliora con stimoli sonori, visivi e tattili."],
      ["Quale capacità serve di più in un 400 m?", ["Flessibilità", "Resistenza alla velocità", "Forza massima", "Equilibrio"], 1, "Mantenere un'alta velocità mentre arriva la fatica."]
    ],
    vf: [
      ["La flessibilità tende a diminuire con l'età se non la si allena.", true, "Va allenata con regolarità."],
      ["Lo stretching va fatto fino a sentire dolore forte.", false, "Si allunga fino a una tensione piacevole, mai dolore."],
      ["Il fartlek alterna liberamente ritmi diversi.", true, "Significa «gioco di velocità»."],
      ["Velocità e forza non sono collegate.", false, "Più forza esplosiva aiuta ad accelerare."]
    ],
    flash: [
      ["Velocità di reazione", "Tempo tra lo stimolo e l'inizio della risposta."],
      ["Accelerazione", "Capacità di aumentare la velocità in poco spazio."],
      ["Resistenza alla velocità", "Mantenere a lungo una velocità alta."],
      ["Mobilità articolare", "Ampiezza di movimento di un'articolazione."]
    ],
    abbina: [["Stretching statico", "20–30 secondi fermo"], ["Velocità di reazione", "Partenza allo sparo"], ["Resistenza alla velocità", "Mantenere uno sprint lungo"]],
    completa: [
      "Le capacità {coordinative} dipendono dal sistema nervoso.",
      "Lo stretching statico dura circa {20}–30 secondi.",
      "Il salto in lungo da fermo misura la forza {esplosiva}."
    ],
    ordina: [
      ["Dal carico più leggero al più pesante (% di 1RM)", ["Forza esplosiva", "Resistenza alla forza", "Ipertrofia", "Forza massima"]]
    ],
    gruppi: ["Quale capacità alleni?", [
      ["Forza", ["Squat con bilanciere", "Piegamenti", "Salti sulla cassa"]],
      ["Resistenza", ["Corsa di 30 minuti", "Fartlek", "Nuoto continuo"]],
      ["Velocità", ["Partenze da 20 m", "Reazione al fischio", "Skip veloce"]],
      ["Flessibilità", ["Stretching dei flessori", "Mobilità delle spalle"]]
    ]]
  };

  X["dal-gioco-allo-sport"] = {
    quiz: [
      ["Chi stabilisce le regole ufficiali di uno sport?", ["I giocatori", "Le federazioni sportive", "Il pubblico", "L'allenatore"], 1, "Ad esempio la FIPAV per la pallavolo."],
      ["Qual è un'abilità continua?", ["Un tiro a canestro", "Nuotare", "Un salto in alto", "Un servizio"], 1, "Non ha un inizio e una fine ben definiti."],
      ["La ricezione nella pallavolo è…", ["Chiusa", "Aperta", "Solo continua", "Non è un'abilità"], 1, "Dipende dalla battuta avversaria, sempre diversa."],
      ["Il fair play significa…", ["Vincere a ogni costo", "Rispettare regole, avversari e arbitri", "Giocare senza regole", "Non giocare"], 1, "È il gioco leale."],
      ["Per allenare un'abilità chiusa conviene…", ["Solo partite", "Ripetere il gesto con attenzione alla tecnica", "Non allenarla", "Cambiare sport"], 1, "Ripetizione e feedback rendono il gesto stabile."]
    ],
    vf: [
      ["Nel gioco libero le regole possono cambiare.", true, "Le decidono i giocatori."],
      ["La corsa è un'abilità continua.", true, "Il gesto si ripete senza un inizio e una fine netti."],
      ["Il fair play vale solo per i professionisti.", false, "Vale per tutti, anche a scuola."],
      ["Un gioco presportivo semplifica le regole di uno sport.", true, "Serve ad avvicinarsi gradualmente."]
    ],
    flash: [
      ["Federazione", "Ente che stabilisce le regole e organizza le gare di uno sport."],
      ["Fair play", "Rispetto di regole, avversari, compagni e arbitri."],
      ["Gioco presportivo", "Gioco semplificato che prepara a uno sport."],
      ["Abilità discreta", "Gesto con un inizio e una fine chiari."]
    ],
    abbina: [["Federazione", "Regole ufficiali"], ["Fair play", "Gioco leale"], ["Arbitro", "Fa rispettare le regole"]],
    completa: [
      "Le regole ufficiali sono stabilite dalle {federazioni}.",
      "Il {fair play} è il gioco leale.",
      "Nuotare è un'abilità {continua}."
    ],
    ordina: [
      ["Dall'abilità più chiusa alla più aperta", ["Tiro con l'arco", "Tuffo", "Servizio a pallavolo", "Schiacciata", "Dribbling nel calcio"]],
      ["Dal gioco allo sport", ["Gioco libero", "Gioco con regole", "Gioco presportivo", "Sport"]]
    ],
    gruppi: ["Open o closed skill?", [
      ["Open", ["Dribbling", "Ricezione", "Parata del portiere", "Assalto di scherma"]],
      ["Closed", ["Tuffo", "Lancio del peso", "Tiro libero", "Routine di ginnastica"]]
    ]]
  };

  X["apparato-digerente"] = {
    quiz: [
      ["Quanto è lungo circa l'intestino tenue?", ["50 cm", "6–7 metri", "20 metri", "1 metro"], 1, "È ripiegato su se stesso nell'addome."],
      ["Cos'è il bolo?", ["Un enzima", "Il cibo masticato e impastato con la saliva", "Un organo", "Un ormone"], 1, "Nello stomaco diventa chimo."],
      ["Quale organo conserva la bile?", ["Fegato", "Cistifellea", "Pancreas", "Milza"], 1, "Il fegato la produce, la cistifellea la conserva."],
      ["Il fegato, oltre alla bile…", ["Non fa altro", "Immagazzina glicogeno e filtra le sostanze tossiche", "Produce saliva", "Digerisce il cibo in bocca"], 1, "È l'organo interno più grande."],
      ["Dove inizia la digestione delle proteine?", ["Bocca", "Stomaco", "Intestino crasso", "Esofago"], 1, "Grazie a pepsina e acido cloridrico."]
    ],
    vf: [
      ["La saliva contiene un enzima digestivo.", true, "L'amilasi salivare."],
      ["Il fegato è l'organo interno più grande.", true, "Pesa circa un chilo e mezzo."],
      ["Fare sport intenso subito dopo un pasto abbondante è consigliato.", false, "Lo stomaco pieno toglie sangue ai muscoli e può dare nausea."],
      ["Le fibre si trovano soprattutto nei vegetali.", true, "Verdura, frutta, legumi, cereali integrali."]
    ],
    flash: [
      ["Bolo", "Cibo masticato e impastato con la saliva."],
      ["Peristalsi", "Onde di contrazione che spingono il cibo."],
      ["Bile", "Prodotta dal fegato, emulsiona i grassi."],
      ["Microbiota", "Batteri utili dell'intestino crasso."]
    ],
    abbina: [["Bolo", "Cibo masticato"], ["Chimo", "Cibo nello stomaco"], ["Villi", "Assorbono i nutrienti"]],
    completa: [
      "Il cibo masticato si chiama {bolo}.",
      "La bile è conservata nella {cistifellea}.",
      "Le proteine iniziano a essere digerite nello {stomaco}."
    ],
    ordina: [
      ["Il viaggio del cibo", ["Bocca", "Faringe", "Esofago", "Stomaco", "Intestino tenue", "Intestino crasso"]],
      ["Cosa succede al cibo", ["Masticazione", "Bolo", "Chimo", "Assorbimento dei nutrienti", "Assorbimento dell'acqua"]]
    ],
    gruppi: ["Dove succede?", [
      ["Bocca", ["Masticazione", "Amilasi salivare"]],
      ["Stomaco", ["Acido cloridrico", "Pepsina", "Formazione del chimo"]],
      ["Intestino", ["Villi intestinali", "Assorbimento dell'acqua", "Microbiota"]]
    ]]
  };

  X["test-motori"] = {
    quiz: [
      ["Il sit and reach misura…", ["La forza", "La flessibilità di schiena e muscoli posteriori della coscia", "La velocità", "La resistenza"], 1, "Seduti, gambe tese, si spinge in avanti."],
      ["Quale test misura la forza esplosiva delle gambe?", ["Cooper", "Salto in lungo da fermo", "Sit and reach", "Beep test"], 1, "Si misura la distanza dal punto di stacco."],
      ["Perché si ripete un test a distanza di mesi?", ["Per noia", "Per vedere i propri progressi", "Per cambiare voto", "Non serve"], 1, "Il confronto con se stessi motiva."],
      ["Un test è «valido» se…", ["È facile", "Misura davvero la capacità che deve misurare", "Dura poco", "Lo fanno tutti"], 1, "Validità e affidabilità sono le due qualità di un buon test."],
      ["Nel beep test, quando ci si ferma?", ["Dopo 5 minuti", "Quando non si riesce più a raggiungere la linea in tempo", "Al primo segnale", "Quando si vuole"], 1, "Di solito dopo due segnali mancati."]
    ],
    vf: [
      ["Prima di un test serve sempre un riscaldamento.", true, "Per sicurezza e per dare il meglio."],
      ["Il Bronco test si misura in metri percorsi.", false, "Si misura il tempo per completare 1200 m di navette."],
      ["Il sit and reach misura la flessibilità.", true, "Soprattutto di schiena e ischiocrurali."],
      ["Confrontarsi solo con i compagni è il modo migliore per usare i test.", false, "È più utile confrontarsi con se stessi nel tempo."]
    ],
    flash: [
      ["Sit and reach", "Test di flessibilità da seduti a gambe tese."],
      ["Salto in lungo da fermo", "Test di forza esplosiva degli arti inferiori."],
      ["Navetta 4 × 10 m", "Test di velocità con cambi di direzione."],
      ["Validità", "Il test misura davvero ciò che deve misurare."]
    ],
    abbina: [["Salto in lungo da fermo", "Forza esplosiva"], ["Navetta", "Velocità e cambi di direzione"], ["Validità", "Misura ciò che deve"]],
    completa: [
      "Il {sit and reach} misura la flessibilità.",
      "Un test è {valido} se misura ciò che deve misurare.",
      "Nel Bronco test si misura il {tempo}."
    ],
    ordina: [
      ["Come si svolge un test", ["Spiegare le istruzioni", "Riscaldamento", "Prova di prova", "Esecuzione al massimo", "Registrare il risultato", "Confrontare con il test precedente"]]
    ],
    gruppi: ["Cosa misura questo test?", [
      ["Resistenza", ["Test di Cooper", "Beep test", "Bronco test"]],
      ["Velocità e agilità", ["Navetta 4 × 10 m", "Illinois test", "Sprint 30 m"]],
      ["Forza", ["Salto in lungo da fermo", "Lancio della palla medica"]],
      ["Flessibilità", ["Sit and reach"]]
    ]]
  };

  X["principi-per-una-sana-alimentazione"] = {
    quiz: [
      ["Quale colazione è più completa?", ["Solo un caffè", "Latte o yogurt, pane o cereali, frutta", "Una brioche e una bibita", "Niente"], 1, "Carboidrati, proteine, vitamine e liquidi."],
      ["Cosa indica la data «da consumarsi preferibilmente entro»?", ["Dopo quella data il cibo è pericoloso", "Dopo quella data può perdere qualità ma spesso è ancora sicuro", "Il giorno di produzione", "Il prezzo"], 1, "Diverso da «da consumarsi entro», che è una scadenza vera."],
      ["Quali alimenti sono legumi?", ["Pasta e riso", "Ceci, lenticchie, fagioli", "Mele e pere", "Formaggi"], 1, "Ottima fonte di proteine vegetali e fibre."],
      ["Perché scegliere prodotti di stagione?", ["Costano di più", "Sono più saporiti e hanno meno impatto ambientale", "Durano per sempre", "Non hanno vitamine"], 1, "Viaggiano meno e maturano in modo naturale."],
      ["Quale bevanda è la migliore per idratarsi?", ["Bibita zuccherata", "Acqua", "Energy drink", "Succo con zucchero aggiunto"], 1, "Non ha calorie e idrata."]
    ],
    vf: [
      ["La dieta mediterranea è stata riconosciuta patrimonio UNESCO.", true, "Dal 2010."],
      ["Gli energy drink sono adatti ai ragazzi.", false, "Contengono molta caffeina e zuccheri: sconsigliati agli adolescenti."],
      ["Mangiare lentamente aiuta a sentirsi sazi.", true, "Il segnale di sazietà arriva dopo circa 20 minuti."],
      ["I legumi sono poveri di proteine.", false, "Sono una buona fonte di proteine vegetali."]
    ],
    flash: [
      ["Da consumarsi entro", "Scadenza vera: dopo quella data non va consumato."],
      ["Da consumarsi preferibilmente entro", "Termine minimo di conservazione: dopo può perdere qualità."],
      ["Legumi", "Ceci, lenticchie, fagioli, piselli: proteine e fibre."],
      ["Stagionalità", "Mangiare frutta e verdura nel loro periodo naturale."]
    ],
    abbina: [["Ceci", "Legumi"], ["Energy drink", "Sconsigliato ai ragazzi"], ["Mela a ottobre", "Frutta di stagione"]],
    completa: [
      "Ceci e lenticchie sono {legumi}.",
      "La dieta mediterranea è patrimonio {UNESCO}.",
      "La bevanda migliore per idratarsi è l'{acqua}."
    ],
    ordina: [
      ["I pasti della giornata", ["Colazione", "Spuntino", "Pranzo", "Merenda", "Cena"]],
      ["La piramide mediterranea, dalla base alla cima", ["Acqua", "Frutta e verdura", "Cereali", "Olio d'oliva e latticini", "Pesce, legumi, uova", "Carne rossa", "Dolci"]]
    ],
    gruppi: ["Ogni giorno o solo ogni tanto?", [
      ["Ogni giorno", ["Verdura", "Frutta", "Acqua", "Cereali integrali", "Olio d'oliva"]],
      ["Solo ogni tanto", ["Dolci", "Bibite zuccherate", "Salumi", "Fritti"]]
    ]]
  };

  X["il-sistema-nervoso"] = {
    quiz: [
      ["Quale parte del neurone riceve i segnali?", ["Assone", "Dendriti", "Mielina", "Sinapsi"], 1, "L'assone invece trasmette il segnale ad altre cellule."],
      ["Il midollo spinale è protetto…", ["Dal cranio", "Dalla colonna vertebrale", "Dalle coste", "Dal bacino"], 1, "Corre dentro il canale vertebrale."],
      ["Quale lobo elabora la vista?", ["Frontale", "Occipitale", "Temporale", "Parietale"], 1, "Si trova nella parte posteriore del cervello."],
      ["Cos'è un arco riflesso?", ["Un movimento volontario", "Una risposta automatica che passa dal midollo spinale", "Un esercizio di stretching", "Un ormone"], 1, "Ad esempio togliere la mano da qualcosa che scotta."],
      ["L'ippocampo è importante per…", ["La vista", "La memoria", "La digestione", "Il battito"], 1, "Aiuta a formare nuovi ricordi."]
    ],
    vf: [
      ["Il cervello usa circa il 20% dell'energia del corpo.", true, "Pur pesando circa il 2% del peso corporeo."],
      ["I nervi cranici sono 31 paia.", false, "Sono 12 paia; i nervi spinali sono 31."],
      ["Il movimento regolare favorisce la plasticità del cervello.", true, "Stimola la crescita di nuove connessioni."],
      ["Le meningi proteggono encefalo e midollo.", true, "Sono tre membrane: dura madre, aracnoide e pia madre."]
    ],
    flash: [
      ["Dendriti", "Ramificazioni del neurone che ricevono i segnali."],
      ["Assone", "Prolungamento che trasmette l'impulso."],
      ["Arco riflesso", "Risposta automatica che passa dal midollo spinale."],
      ["Meningi", "Tre membrane che proteggono il sistema nervoso centrale."]
    ],
    abbina: [["Dendriti", "Ricevono i segnali"], ["Assone", "Trasmette l'impulso"], ["Ippocampo", "Memoria"]],
    completa: [
      "I {dendriti} ricevono i segnali.",
      "Il lobo {occipitale} elabora la vista.",
      "Le {meningi} proteggono encefalo e midollo."
    ],
    ordina: [
      ["Dal pensiero al movimento", ["Corteccia motoria", "Cervelletto", "Midollo spinale", "Motoneurone", "Placca neuromuscolare", "Contrazione del muscolo"]],
      ["Il potenziale d'azione", ["Riposo a −70 mV", "Stimolo oltre la soglia", "Entra il sodio", "Esce il potassio", "Ritorno al riposo"]]
    ],
    gruppi: ["Centrale o periferico?", [
      ["Sistema nervoso centrale", ["Cervello", "Cervelletto", "Tronco encefalico", "Midollo spinale"]],
      ["Sistema nervoso periferico", ["Nervo sciatico", "Nervo vago", "Nervi cranici", "Gangli"]]
    ]]
  };

  X["il-sistema-endocrino"] = {
    quiz: [
      ["Dove si trova la tiroide?", ["Nel cervello", "Nel collo", "Nell'addome", "Sopra i reni"], 1, "Davanti alla trachea, a forma di farfalla."],
      ["Dove si trovano i surreni?", ["Sopra i reni", "Nel collo", "Nel cervello", "Vicino al cuore"], 0, "Il nome dice tutto: sopra i reni."],
      ["Cosa succede se il pancreas non produce insulina?", ["Niente", "Diabete di tipo 1", "Ipertiroidismo", "Asma"], 1, "La glicemia resta alta: serve l'insulina dall'esterno."],
      ["Quale ormone prepara il corpo all'azione in pochi secondi?", ["Melatonina", "Adrenalina", "Insulina", "Tiroxina"], 1, "Battito e glicemia salgono subito."],
      ["Gli ormoni viaggiano…", ["Nei nervi", "Nel sangue", "Nell'aria", "Nella linfa soltanto"], 1, "Raggiungono gli organi bersaglio con la circolazione."]
    ],
    vf: [
      ["La tiroide ha bisogno di iodio per funzionare.", true, "Per questo si consiglia il sale iodato."],
      ["L'adrenalina rallenta il cuore.", false, "Lo accelera."],
      ["Il sonno profondo stimola l'ormone della crescita.", true, "Dormire bene aiuta crescita e recupero."],
      ["Il sistema endocrino è più lento del sistema nervoso.", true, "Gli ormoni agiscono in minuti od ore, i nervi in millisecondi."]
    ],
    flash: [
      ["Organo bersaglio", "Organo su cui agisce un ormone."],
      ["Feedback negativo", "Meccanismo che riporta un valore alla normalità."],
      ["Ghiandola esocrina", "Versa i prodotti in un dotto (es. ghiandole sudoripare)."],
      ["Iodio", "Minerale indispensabile per gli ormoni tiroidei."]
    ],
    abbina: [["Glicemia", "Zucchero nel sangue"], ["Surreni", "Sopra i reni"], ["Iodio", "Ormoni tiroidei"]],
    completa: [
      "La {tiroide} si trova nel collo.",
      "Gli ormoni viaggiano nel {sangue}.",
      "La tiroide ha bisogno di {iodio}."
    ],
    ordina: [
      ["Il controllo della glicemia dopo un pasto", ["Mangi un piatto di pasta", "La glicemia sale", "Il pancreas libera insulina", "Il glucosio entra nelle cellule", "La glicemia torna normale"]]
    ],
    gruppi: ["Quale ghiandola lo produce?", [
      ["Pancreas", ["Insulina", "Glucagone"]],
      ["Surreni", ["Adrenalina", "Cortisolo"]],
      ["Tiroide", ["Tiroxina (T4)", "T3"]],
      ["Ipofisi o epifisi", ["Ormone della crescita", "Melatonina"]]
    ]]
  };

  X["il-sistema-immunitario"] = {
    quiz: [
      ["Quali sono gli organi linfoidi primari?", ["Milza e tonsille", "Midollo osseo e timo", "Fegato e reni", "Cuore e polmoni"], 1, "Qui nascono e maturano i linfociti."],
      ["Cos'è un'allergia?", ["Una risposta esagerata a sostanze innocue", "Un'infezione da batteri", "Una vitamina", "Un vaccino"], 0, "Ad esempio a pollini o acari."],
      ["Lavarsi spesso le mani serve a…", ["Nulla", "Ridurre la diffusione dei microrganismi", "Aumentare la febbre", "Produrre anticorpi"], 1, "È una delle prime regole di prevenzione."],
      ["L'immunità di gregge si ottiene quando…", ["Nessuno si vaccina", "Una grande parte della popolazione è immune", "Si prendono antibiotici", "Si fa sport"], 1, "Protegge anche chi non può vaccinarsi."],
      ["La milza…", ["Produce bile", "Filtra il sangue e ospita linfociti", "Produce insulina", "Digerisce i grassi"], 1, "È un organo linfoide secondario."]
    ],
    vf: [
      ["I globuli bianchi fanno parte del sistema immunitario.", true, "Ne esistono diversi tipi: neutrofili, linfociti, monociti…"],
      ["Le allergie sono risposte a sostanze pericolose.", false, "Sono risposte esagerate a sostanze innocue."],
      ["Dormire poco può rendere più facile ammalarsi.", true, "Il sonno sostiene le difese."],
      ["I vaccini contengono la malattia vera e propria.", false, "Contengono antigeni o istruzioni che insegnano a riconoscere l'agente, senza causare la malattia."]
    ],
    flash: [
      ["Organi linfoidi primari", "Midollo osseo e timo: dove nascono e maturano i linfociti."],
      ["Organi linfoidi secondari", "Linfonodi, milza, tonsille: dove i linfociti incontrano gli antigeni."],
      ["Allergia", "Risposta immunitaria esagerata a sostanze innocue."],
      ["Immunità di gregge", "Protezione collettiva quando molti sono immuni."]
    ],
    abbina: [["Midollo osseo", "Nascono i linfociti"], ["Milza", "Filtra il sangue"], ["Allergia", "Risposta esagerata"]],
    completa: [
      "I linfociti maturano nel midollo osseo e nel {timo}.",
      "Un'{allergia} è una risposta esagerata a sostanze innocue.",
      "Lavarsi le {mani} riduce i contagi."
    ],
    ordina: [
      ["La risposta a un'infezione", ["Barriere di pelle e mucose", "Infiammazione e fagociti", "Presentazione dell'antigene", "Attivazione dei linfociti", "Produzione di anticorpi", "Cellule della memoria"]]
    ],
    gruppi: ["Immunità innata o acquisita?", [
      ["Innata", ["Pelle", "Febbre", "Macrofagi", "Infiammazione"]],
      ["Acquisita", ["Anticorpi", "Linfociti B", "Linfociti T", "Memoria immunitaria"]]
    ]]
  };

  X["pnei-lifestyle-e-salute"] = {
    quiz: [
      ["Quale di questi riduce lo stress?", ["Dormire poco", "Attività fisica regolare", "Saltare i pasti", "Restare sempre al telefono"], 1, "Il movimento abbassa il cortisolo nel tempo."],
      ["Quante ore di sonno servono a un adolescente?", ["5–6", "8–10", "12–14", "Dipende dal meteo"], 1, "Sonno e memoria sono legati."],
      ["La respirazione lenta agisce soprattutto su…", ["Sistema simpatico", "Sistema parasimpatico", "Ossa", "Tiroide"], 1, "Calma il sistema nervoso e rallenta il cuore."],
      ["Cosa significa «infiammazione cronica di basso grado»?", ["Una febbre alta", "Un'infiammazione lieve ma continua, legata allo stile di vita", "Una frattura", "Un'allergia"], 1, "È collegata a sedentarietà, cattiva alimentazione e stress."],
      ["Quale alimento ha effetti antinfiammatori?", ["Bibite zuccherate", "Olio extravergine di oliva", "Fritti", "Merendine"], 1, "È ricco di polifenoli."]
    ],
    vf: [
      ["Le emozioni possono influenzare le difese immunitarie.", true, "È uno dei principi della PNEI."],
      ["Il cortisolo è sempre dannoso.", false, "In acuto serve; è il cortisolo cronicamente alto a fare danni."],
      ["Lo stile di vita può cambiare il rischio di malattie.", true, "Movimento, cibo, sonno e stress contano."],
      ["Gli schermi prima di dormire aiutano il rilassamento.", false, "La luce blu ritarda il sonno."]
    ],
    flash: [
      ["Stress acuto", "Risposta breve che prepara all'azione: può essere utile."],
      ["Stress cronico", "Stress prolungato che mantiene alto il cortisolo."],
      ["Polifenoli", "Sostanze antiossidanti di olio d'oliva, frutta e verdura."],
      ["Mente-corpo", "Pensieri ed emozioni influenzano le risposte fisiche."]
    ],
    abbina: [["Olio d'oliva", "Polifenoli"], ["Stress cronico", "Cortisolo alto"], ["Respiro lento", "Calma il sistema nervoso"]],
    completa: [
      "Lo stress {cronico} mantiene alto il cortisolo.",
      "L'olio d'oliva contiene {polifenoli}.",
      "Un adolescente dovrebbe dormire {8}–10 ore."
    ],
    ordina: [
      ["Lo stress cronico", ["Stress prolungato", "Allarme dell'ipotalamo", "Ipofisi stimola i surreni", "Cortisolo alto a lungo", "Difese più basse"]],
      ["La respirazione diaframmatica", ["Mano sulla pancia", "Inspira dal naso 4 secondi", "Breve pausa", "Espira 6 secondi", "Ripeti per qualche minuto"]]
    ],
    gruppi: ["Aiuta o peggiora il benessere?", [
      ["Aiuta", ["Camminare all'aperto", "Respirazione lenta", "Dieta mediterranea", "Dormire 9 ore"]],
      ["Peggiora", ["Stare svegli fino a tardi", "Saltare i pasti", "Stress senza pause", "Ore sul divano"]]
    ]]
  };

  X["adattamenti-in-quota-e-in-profondita"] = {
    quiz: [
      ["Cos'è il mal di montagna?", ["Un'allergia", "Un malessere dovuto a una salita troppo rapida in quota", "Un infortunio", "Una vitamina"], 1, "Mal di testa, nausea, insonnia: si previene salendo con gradualità."],
      ["Perché gli atleti si allenano in quota?", ["Per il panorama", "Per aumentare i globuli rossi", "Per perdere muscoli", "Per dormire meno"], 1, "Più globuli rossi = più ossigeno ai muscoli."],
      ["In apnea, il riflesso d'immersione…", ["Aumenta la FC", "Rallenta il cuore per risparmiare ossigeno", "Fa sudare", "Non esiste"], 1, "Si attiva soprattutto con il viso in acqua fredda."],
      ["Cosa fa un subacqueo per evitare la malattia da decompressione?", ["Risale velocemente", "Risale lentamente e fa soste", "Trattiene il fiato", "Scende di più"], 1, "Così l'azoto viene eliminato gradualmente."],
      ["A quale profondità la pressione è di 3 atmosfere?", ["10 m", "20 m", "30 m", "5 m"], 1, "1 atm in superficie + 1 ogni 10 m."]
    ],
    vf: [
      ["Salire gradualmente riduce il rischio di mal di montagna.", true, "Dà tempo al corpo di adattarsi."],
      ["In quota l'aria contiene il 5% di ossigeno.", false, "La percentuale resta circa il 21%: cala la pressione."],
      ["Gli apneisti allenano anche la tolleranza alla CO₂.", true, "È la CO₂ a dare lo stimolo a respirare."],
      ["Gli adattamenti alla quota durano per sempre.", false, "Si perdono dopo alcune settimane in pianura."]
    ],
    flash: [
      ["Mal di montagna", "Malessere per salita rapida in quota: mal di testa, nausea, insonnia."],
      ["Ipossia ipobarica", "Meno ossigeno disponibile per la pressione più bassa."],
      ["Apnea", "Sospensione volontaria del respiro."],
      ["Soste di decompressione", "Pause durante la risalita per eliminare l'azoto."]
    ],
    abbina: [["Mal di montagna", "Salita troppo rapida"], ["Everest", "Ipossia estrema"], ["Soste", "Risalita sicura"]],
    completa: [
      "Il mal di {montagna} si previene salendo gradualmente.",
      "Il subacqueo risale {lentamente}.",
      "A 20 m la pressione è di {3} atmosfere."
    ],
    ordina: [
      ["L'acclimatamento in quota", ["Arrivo in quota", "Respiro e battito accelerano", "I reni producono EPO", "Aumentano i globuli rossi", "Il sangue porta più ossigeno"]],
      ["Dalla pressione più bassa alla più alta", ["Cima dell'Everest", "Rifugio a 3000 m", "Livello del mare", "10 m sott'acqua", "30 m sott'acqua"]]
    ],
    gruppi: ["Quota o profondità?", [
      ["Quota", ["Ipossia", "Mal di montagna", "Più EPO", "Aria rarefatta"]],
      ["Profondità", ["Narcosi da azoto", "Riflesso d'immersione", "Decompressione", "Pressione più alta"]]
    ]]
  };

  X["psicologia-dello-sport"] = {
    quiz: [
      ["Qual è un esempio di self-talk positivo?", ["«Sbaglierò sicuramente»", "«Calma, spingi sulle gambe»", "«Non ce la faccio»", "«È tutto inutile»"], 1, "Frasi brevi, al presente, orientate all'azione."],
      ["La concentrazione «ampia ed esterna» serve per…", ["Visualizzare un gesto", "Leggere il campo e i movimenti degli avversari", "Rilassarsi", "Dormire"], 1, "Nel modello di Nideffer l'attenzione varia per ampiezza e direzione."],
      ["Cos'è l'ansia cognitiva?", ["Mani sudate", "Pensieri e preoccupazioni sulla prestazione", "Battito veloce", "Crampi"], 1, "L'ansia somatica riguarda i sintomi fisici."],
      ["Quale obiettivo è SMART?", ["«Voglio migliorare»", "«Correre 1000 m in meno di 4 minuti entro maggio»", "«Essere il migliore»", "«Allenarmi un po'»"], 1, "Specifico, misurabile, raggiungibile, rilevante, con scadenza."],
      ["Lo stato di «flow» è…", ["Un momento di noia", "Una piena immersione nell'attività, con concentrazione e piacere", "Un infortunio", "Una dieta"], 1, "Arriva quando la sfida è adatta alle tue capacità."]
    ],
    vf: [
      ["L'ansia cognitiva riguarda i pensieri.", true, "Preoccupazioni e dubbi."],
      ["Un obiettivo vago motiva più di uno specifico.", false, "Gli obiettivi specifici funzionano meglio."],
      ["Il flow arriva quando sfida e abilità sono in equilibrio.", true, "Troppo facile annoia, troppo difficile preoccupa."],
      ["Visualizzare il gesto attiva aree cerebrali simili a quelle del movimento reale.", true, "Per questo l'imagery è utile."]
    ],
    flash: [
      ["Ansia cognitiva", "Pensieri e preoccupazioni sulla prestazione."],
      ["Ansia somatica", "Sintomi fisici: battito, tensione, sudorazione."],
      ["Flow", "Stato di totale immersione nell'attività."],
      ["Obiettivo di risultato", "Riguarda la classifica o la vittoria: non dipende solo da te."]
    ],
    abbina: [["Flow", "Immersione totale"], ["Ansia cognitiva", "Pensieri negativi"], ["Obiettivo SMART", "Specifico e con scadenza"]],
    completa: [
      "L'ansia {cognitiva} riguarda i pensieri.",
      "Lo stato di {flow} è un'immersione totale nell'attività.",
      "Un obiettivo {SMART} ha una scadenza."
    ],
    ordina: [
      ["Una routine prima del servizio", ["Respiro profondo", "Guardo il bersaglio", "Visualizzo la traiettoria", "Parola chiave: «decisa»", "Eseguo il servizio"]]
    ],
    gruppi: ["Motivazione intrinseca o estrinseca?", [
      ["Intrinseca", ["Mi diverto a giocare", "Voglio migliorare la tecnica", "Mi piace la sfida"]],
      ["Estrinseca", ["Voglio la medaglia", "Mi pagano un premio", "Voglio l'applauso del pubblico"]]
    ]]
  };

  X["adattamenti-fisiologici-allallenamento"] = {
    quiz: [
      ["Dopo mesi di allenamento aerobico la FC a riposo…", ["Aumenta", "Diminuisce", "Non cambia", "Si azzera"], 1, "Il cuore spinge più sangue a ogni battito."],
      ["Cosa aumenta nei muscoli con l'allenamento di resistenza?", ["Il grasso", "Capillari e mitocondri", "Le ossa", "Il lattato a riposo"], 1, "Arriva e si usa più ossigeno."],
      ["Quale adattamento porta l'allenamento della forza ai tendini?", ["Diventano più fragili", "Diventano più resistenti", "Si accorciano", "Nessuno"], 1, "I tendini si adattano più lentamente dei muscoli."],
      ["La soglia anaerobica di un atleta allenato…", ["È più bassa", "Si sposta più in alto", "Scompare", "È uguale a quella di un sedentario"], 1, "Può sostenere intensità più alte senza accumulare lattato."],
      ["Perché nello sport serve un modello prestativo?", ["Per scegliere la maglia", "Per allenare le capacità che quello sport richiede", "Per vincere sempre", "Non serve"], 1, "Ogni sport ha richieste diverse."]
    ],
    vf: [
      ["I tendini si adattano più lentamente dei muscoli.", true, "Per questo i carichi vanno aumentati con gradualità."],
      ["Due settimane senza allenamento cancellano tutti gli adattamenti.", false, "Si perdono gradualmente: alcuni durano di più."],
      ["L'allenamento aerobico aumenta il volume del sangue.", true, "Soprattutto del plasma."],
      ["Gli adattamenti sono uguali per ogni tipo di allenamento.", false, "Dipendono dal tipo di stimolo: specificità."]
    ],
    flash: [
      ["Soglia anaerobica", "Intensità oltre la quale il lattato si accumula rapidamente."],
      ["Volume plasmatico", "Quantità della parte liquida del sangue: aumenta con l'allenamento aerobico."],
      ["Specificità", "Ogni allenamento produce adattamenti specifici."],
      ["Gradualità", "Aumentare i carichi poco alla volta per far adattare anche i tendini."]
    ],
    abbina: [["Soglia anaerobica", "Si alza con l'allenamento"], ["Tendini", "Si adattano lentamente"], ["Plasma", "Aumenta con l'aerobico"]],
    completa: [
      "Con l'allenamento la soglia {anaerobica} si alza.",
      "I {tendini} si adattano più lentamente dei muscoli.",
      "L'aerobico aumenta il volume del {plasma}."
    ],
    ordina: [
      ["I miglioramenti della forza nel tempo", ["Adattamenti nervosi", "Più unità motorie sincronizzate", "Inizio dell'ipertrofia", "Muscoli e tendini più forti"]]
    ],
    gruppi: ["Adattamento da resistenza o da forza?", [
      ["Resistenza", ["Più mitocondri", "Più capillari", "FC a riposo più bassa", "Più uso dei grassi"]],
      ["Forza", ["Ipertrofia", "Più unità motorie reclutate", "Più potenza nei salti"]]
    ]]
  };

  X["alimentazione-e-sport-integratori-e-doping"] = {
    quiz: [
      ["Come capisci quanto liquido hai perso in allenamento?", ["Guardando l'orologio", "Pesandoti prima e dopo", "Contando i passi", "Non si può"], 1, "Ogni chilo perso è circa un litro di liquidi."],
      ["Le bevande sportive servono soprattutto…", ["Sempre, anche a riposo", "Negli sforzi lunghi oltre l'ora", "Al posto della colazione", "Per dormire meglio"], 1, "Negli sforzi brevi basta l'acqua."],
      ["Cos'è un'esenzione a fini terapeutici (TUE)?", ["Un integratore", "Il permesso di usare un farmaco vietato per una malattia certificata", "Un test fisico", "Una dieta"], 1, "Va richiesta prima, con documentazione medica."],
      ["Le proteine dopo l'allenamento servono a…", ["Dare energia immediata", "Riparare e costruire i muscoli", "Idratare", "Aumentare il grasso"], 1, "Insieme ai carboidrati favoriscono il recupero."],
      ["Qual è il primo segnale di disidratazione?", ["Febbre", "Sete", "Fame", "Sonno"], 1, "Quando hai sete hai già perso liquidi."]
    ],
    vf: [
      ["Un litro di sudore corrisponde a circa un chilo di peso perso.", true, "Per questo la bilancia aiuta a capire quanto bere."],
      ["Gli integratori sono controllati come i farmaci.", false, "Sono controllati meno: alcuni prodotti sono risultati contaminati."],
      ["Le bevande sportive contengono sali e zuccheri.", true, "Servono negli sforzi lunghi."],
      ["Un atleta può usare qualsiasi farmaco se è prescritto.", false, "Se è nella lista proibita serve un'esenzione (TUE)."]
    ],
    flash: [
      ["TUE", "Esenzione a fini terapeutici: permesso per un farmaco vietato, con certificato medico."],
      ["Bevanda sportiva", "Acqua con sali e carboidrati, utile negli sforzi lunghi."],
      ["Sete", "Primo segnale di disidratazione."],
      ["NADO Italia", "Organizzazione nazionale antidoping."]
    ],
    abbina: [["Sete", "Primo segnale"], ["TUE", "Esenzione terapeutica"], ["Bevanda sportiva", "Sforzi lunghi"]],
    completa: [
      "La {sete} è il primo segnale di disidratazione.",
      "Un litro di sudore pesa circa un {chilo}.",
      "Dopo lo sforzo servono carboidrati e {proteine}."
    ],
    ordina: [
      ["Mangiare intorno alla gara", ["Pasto 3–4 ore prima", "Spuntino 1 ora prima", "Acqua durante il riscaldamento", "Gara", "Carboidrati e proteine dopo"]]
    ],
    gruppi: ["Sostanza vietata o sana abitudine?", [
      ["Vietata (doping)", ["EPO", "Anabolizzanti", "Diuretici", "Stimolanti"]],
      ["Sana abitudine", ["Acqua", "Pasta prima della gara", "Frutta", "Yogurt dopo l'allenamento"]]
    ]]
  };

  X["disabilita-e-sport-le-paralimpiadi"] = {
    quiz: [
      ["Quale sport paralimpico si gioca con una palla sonora?", ["Sitting volley", "Goalball", "Basket in carrozzina", "Tiro con l'arco"], 1, "È pensato per atleti con disabilità visiva."],
      ["Nel sitting volley gli atleti…", ["Giocano in piedi", "Giocano seduti a terra", "Usano due palloni", "Giocano in acqua"], 1, "La rete è più bassa e il campo più piccolo."],
      ["Chi accompagna un corridore cieco in pista?", ["L'allenatore", "Una guida legata con un cordino", "Un arbitro", "Nessuno"], 1, "Atleta e guida corrono insieme."],
      ["Cosa sono le barriere architettoniche?", ["Muri antirumore", "Ostacoli che impediscono a tutti di usare spazi e servizi", "Recinzioni del campo", "Regole sportive"], 1, "Esempio: scale senza rampa."],
      ["Cosa significa «inclusione» nello sport?", ["Far giocare solo i più bravi", "Permettere a tutti di partecipare, adattando regole e spazi", "Separare le persone", "Eliminare le gare"], 1, "Lo sport è di tutti."]
    ],
    vf: [
      ["Il goalball si gioca con una palla che contiene sonagli.", true, "Gli atleti la localizzano con l'udito."],
      ["Le barriere architettoniche riguardano solo le persone in carrozzina.", false, "Riguardano anche anziani, genitori con passeggino, persone con disabilità visiva."],
      ["Nell'atletica paralimpica esistono atleti guida.", true, "Accompagnano i corridori con disabilità visiva."],
      ["Lo sport inclusivo adatta regole e spazi perché tutti possano giocare.", true, "È l'idea alla base dell'inclusione."]
    ],
    flash: [
      ["Goalball", "Sport per atleti con disabilità visiva, con palla sonora."],
      ["Sitting volley", "Pallavolo giocata da seduti a terra."],
      ["Atleta guida", "Accompagna in gara un atleta con disabilità visiva."],
      ["Barriere architettoniche", "Ostacoli fisici che limitano l'accesso a spazi e servizi."]
    ],
    abbina: [["Goalball", "Palla sonora"], ["Sitting volley", "Seduti a terra"], ["Atleta guida", "Corre con l'atleta cieco"]],
    completa: [
      "Il {goalball} si gioca con una palla sonora.",
      "Nel sitting {volley} si gioca seduti.",
      "Le barriere {architettoniche} limitano l'accesso agli spazi."
    ],
    ordina: [
      ["La storia del movimento paralimpico", ["Stoke Mandeville 1948", "Roma 1960", "Prime invernali 1976", "Seul 1988", "Nascita dell'IPC 1989", "Milano Cortina 2026"]]
    ],
    gruppi: ["Che cosa pensa ciascun modello?", [
      ["Modello medico", ["Il problema è solo nella persona", "Serve soprattutto curare"]],
      ["Modello biopsicosociale", ["Conta anche l'ambiente", "Abbattere le barriere", "Partecipazione e diritti"]]
    ]]
  };

  /* unione con i giochi esistenti */
  Object.keys(X).forEach(id => {
    const g = window.GAMES[id] = window.GAMES[id] || { quiz: [], vf: [], flash: [], abbina: [], completa: [] };
    ["quiz", "vf", "flash", "abbina", "completa"].forEach(k => { g[k] = (g[k] || []).concat(X[id][k] || []); });
    if (X[id].ordina) g.ordina = X[id].ordina;
    if (X[id].gruppi) g.gruppi = X[id].gruppi;
  });
  delete window.GAMES["metodo-di-studio"];
})();
