/* =========================================================
   GIOCHI DI RIPASSO — Classe quarta e quinta
   ========================================================= */
window.GAMES = window.GAMES || {};

GAMES["il-sistema-nervoso"] = {
  quiz: [
    ["Da cosa è formato il sistema nervoso centrale?", ["Nervi cranici e spinali", "Encefalo e midollo spinale", "Solo il cervello", "Gangli e plessi"], 1, "Il sistema nervoso periferico è formato da nervi e gangli."],
    ["Quale parte dell'encefalo coordina movimento ed equilibrio?", ["Ipotalamo", "Cervelletto", "Bulbo", "Lobo occipitale"], 1, "Confronta il movimento voluto con quello eseguito e lo corregge."],
    ["La guaina mielinica serve a…", ["Rallentare l'impulso", "Rendere la conduzione dell'impulso più veloce", "Nutrire il muscolo", "Produrre ormoni"], 1, "L'impulso salta da un nodo di Ranvier all'altro (conduzione saltatoria)."],
    ["Il potenziale di riposo di un neurone è circa…", ["+30 mV", "0 mV", "−70 mV", "−200 mV"], 2, "L'interno della cellula è negativo rispetto all'esterno."],
    ["Durante la depolarizzazione…", ["Il potassio entra", "Il sodio entra nella cellula", "Il calcio esce", "Non si muove niente"], 1, "Poi il potassio esce e la cellula si ripolarizza."],
    ["Il sistema simpatico prepara il corpo a…", ["Riposo e digestione", "Attacco o fuga", "Sonno profondo", "Crescita"], 1, "Aumenta FC, pressione e glicemia; il parasimpatico fa l'opposto."],
    ["Quale neurotrasmettitore agisce sulla placca neuromuscolare?", ["Dopamina", "Acetilcolina", "Serotonina", "Adrenalina"], 1, "Viene liberato dal motoneurone e fa contrarre la fibra."],
    ["Nelle prime settimane di allenamento della forza si migliora soprattutto per…", ["Ipertrofia immediata", "Adattamenti nervosi: più unità motorie reclutate e meglio sincronizzate", "Aumento del grasso", "Crescita delle ossa"], 1, "L'ipertrofia arriva dopo alcune settimane."]
  ],
  vf: [
    ["Il potenziale d'azione segue la legge del tutto o nulla.", true, "Se lo stimolo supera la soglia, l'impulso parte sempre con la stessa ampiezza."],
    ["I nervi spinali sono 12 paia.", false, "Sono 31 paia; i nervi cranici sono 12 paia."],
    ["Il riflesso rotuleo non passa dal cervello.", true, "È un arco riflesso midollare."],
    ["I fusi neuromuscolari misurano l'allungamento del muscolo.", true, "Gli organi tendinei del Golgi misurano invece la tensione."],
    ["Il cervello non cambia più dopo l'infanzia.", false, "La plasticità neurale continua per tutta la vita."],
    ["La corteccia motoria si trova nel lobo frontale.", true, "Nel giro precentrale."]
  ],
  flash: [
    ["SNC", "Sistema nervoso centrale: encefalo e midollo spinale."],
    ["SNP", "Sistema nervoso periferico: 12 paia di nervi cranici e 31 paia di nervi spinali."],
    ["Neurone", "Cellula nervosa: dendriti, corpo cellulare, assone."],
    ["Sinapsi", "Punto di contatto tra due neuroni o tra neurone e muscolo."],
    ["Potenziale d'azione", "Inversione rapida del potenziale di membrana che trasmette l'impulso."],
    ["Simpatico", "Sistema \"attacco o fuga\": prepara all'azione."],
    ["Parasimpatico", "Sistema \"riposo e digestione\": favorisce il recupero."],
    ["Plasticità neurale", "Capacità del sistema nervoso di modificarsi con l'esperienza e l'allenamento."]
  ],
  abbina: [
    ["Cervelletto", "Coordinazione ed equilibrio"],
    ["Mielina", "Conduzione veloce"],
    ["Acetilcolina", "Placca neuromuscolare"],
    ["Fuso neuromuscolare", "Sente l'allungamento"],
    ["Golgi", "Sente la tensione del tendine"],
    ["Simpatico", "Attacco o fuga"]
  ],
  completa: [
    "Il sistema nervoso centrale è formato da encefalo e midollo {spinale}.",
    "Il {cervelletto} coordina movimento ed equilibrio.",
    "Durante la depolarizzazione entra il {sodio}.",
    "Il sistema {parasimpatico} favorisce riposo e digestione."
  ]
};

GAMES["il-sistema-endocrino"] = {
  quiz: [
    ["Le ghiandole endocrine rilasciano i loro prodotti…", ["In un dotto verso l'esterno", "Direttamente nel sangue", "Nell'intestino", "Nella saliva"], 1, "Le ghiandole esocrine invece usano un dotto (es. ghiandole sudoripare)."],
    ["Quale ghiandola è considerata la \"direttrice d'orchestra\"?", ["Tiroide", "Ipofisi", "Pancreas", "Surrene"], 1, "È controllata dall'ipotalamo e regola molte altre ghiandole."],
    ["Quale ormone abbassa la glicemia?", ["Glucagone", "Insulina", "Cortisolo", "Adrenalina"], 1, "È prodotto dalle cellule beta del pancreas."],
    ["Durante l'esercizio intenso l'adrenalina…", ["Diminuisce", "Aumenta, alzando FC e disponibilità di energia", "Non cambia", "Blocca i muscoli"], 1, "È prodotta dalla parte midollare del surrene."],
    ["La tiroide produce ormoni che regolano…", ["Il metabolismo", "La vista", "La digestione delle proteine", "La coagulazione"], 0, "T3 e T4 aumentano il consumo energetico delle cellule."],
    ["Quale organo produce l'eritropoietina (EPO)?", ["Fegato", "Reni", "Cuore", "Polmoni"], 1, "Stimola la produzione di globuli rossi; il suo uso esterno è doping."],
    ["Il cortisolo è…", ["Un ormone dello stress che mobilita energia", "Un enzima digestivo", "Un neurotrasmettitore", "Una vitamina"], 0, "Se resta alto a lungo, deprime le difese immunitarie."],
    ["Il meccanismo che riporta un ormone ai valori normali si chiama…", ["Feedback positivo", "Feedback negativo", "Riflesso", "Omeostasi zero"], 1, "Come un termostato: quando il valore sale, la produzione cala."]
  ],
  vf: [
    ["Il pancreas è una ghiandola sia endocrina sia esocrina.", true, "Produce ormoni (insulina, glucagone) ed enzimi digestivi."],
    ["L'ormone della crescita (GH) aumenta con l'esercizio e durante il sonno profondo.", true, "Favorisce riparazione e crescita dei tessuti."],
    ["Il glucagone abbassa la glicemia.", false, "La alza, facendo liberare glucosio dal fegato."],
    ["La melatonina regola il ritmo sonno-veglia.", true, "È prodotta dall'epifisi soprattutto al buio."],
    ["Il testosterone è prodotto solo dagli uomini.", false, "È presente anche nelle donne, in quantità minori."],
    ["Gli squilibri ormonali possono peggiorare la prestazione sportiva.", true, "Ad esempio nella sindrome da sovrallenamento."]
  ],
  flash: [
    ["Ormone", "Messaggero chimico rilasciato nel sangue che agisce su organi bersaglio."],
    ["Ipotalamo-ipofisi", "Asse che controlla gran parte del sistema endocrino."],
    ["Insulina", "Pancreas: fa entrare il glucosio nelle cellule e abbassa la glicemia."],
    ["Glucagone", "Pancreas: alza la glicemia liberando glucosio dal fegato."],
    ["Adrenalina", "Surrene midollare: ormone dell'azione, aumenta FC e glicemia."],
    ["Cortisolo", "Surrene corticale: ormone dello stress."],
    ["Tiroxina (T4)", "Tiroide: regola il metabolismo."],
    ["EPO", "Reni: stimola la produzione di globuli rossi."]
  ],
  abbina: [
    ["Pancreas", "Insulina e glucagone"],
    ["Surrene", "Adrenalina e cortisolo"],
    ["Tiroide", "T3 e T4"],
    ["Reni", "Eritropoietina"],
    ["Epifisi", "Melatonina"],
    ["Ipofisi", "Ormone della crescita"]
  ],
  completa: [
    "L'{insulina} abbassa la glicemia.",
    "L'ipofisi è controllata dall'{ipotalamo}.",
    "L'{adrenalina} aumenta durante l'esercizio intenso.",
    "L'EPO è prodotta dai {reni}."
  ]
};

GAMES["il-sistema-immunitario"] = {
  quiz: [
    ["L'immunità innata è…", ["Specifica e con memoria", "Rapida e aspecifica", "Presente solo dopo i vaccini", "Formata solo da anticorpi"], 1, "È la prima linea di difesa: barriere, fagociti, infiammazione."],
    ["Quali cellule producono gli anticorpi?", ["Globuli rossi", "Linfociti B (plasmacellule)", "Piastrine", "Neuroni"], 1, "I linfociti B, attivati, diventano plasmacellule."],
    ["I linfociti T maturano…", ["Nel timo", "Nel fegato", "Nello stomaco", "Nei reni"], 0, "Il timo è un organo linfoide primario come il midollo osseo."],
    ["Un vaccino agisce…", ["Curando la malattia in corso", "Insegnando al sistema immunitario a riconoscere un agente e creando memoria", "Uccidendo tutti i batteri", "Sostituendo gli anticorpi per sempre"], 1, "È un'immunizzazione attiva."],
    ["Una malattia autoimmune si verifica quando…", ["Mancano i globuli bianchi", "Il sistema immunitario attacca le cellule del proprio corpo", "Si prende un virus", "Si mangia troppo"], 1, "Esempi: diabete di tipo 1, artrite reumatoide."],
    ["I linfonodi fanno parte…", ["Dell'apparato digerente", "Del sistema linfatico", "Del sistema nervoso", "Dell'apparato respiratorio"], 1, "Filtrano la linfa e ospitano i linfociti."],
    ["Cosa riconosce un anticorpo?", ["Un antigene specifico", "Qualunque cosa", "Solo i grassi", "Gli ormoni"], 0, "Ogni anticorpo si lega a un antigene preciso, come chiave e serratura."],
    ["L'attività fisica moderata e regolare…", ["Indebolisce le difese", "Sostiene il sistema immunitario", "Non ha effetti", "Causa malattie autoimmuni"], 1, "Sforzi molto lunghi e intensi senza recupero possono invece ridurle temporaneamente."]
  ],
  vf: [
    ["La pelle è una barriera dell'immunità innata.", true, "Insieme alle mucose, è la prima difesa."],
    ["La febbre è sempre inutile.", false, "Moderata, aiuta a contrastare l'infezione."],
    ["I macrofagi inglobano e distruggono i microrganismi.", true, "È il processo di fagocitosi."],
    ["L'immunità acquisita ha memoria.", true, "Al secondo incontro con lo stesso agente la risposta è più rapida."],
    ["Gli antibiotici funzionano contro i virus.", false, "Agiscono sui batteri, non sui virus."],
    ["Stress cronico e poco sonno possono indebolire le difese.", true, "È il collegamento studiato dalla PNEI."]
  ],
  flash: [
    ["Immunità innata", "Difesa rapida e aspecifica: barriere, fagociti, infiammazione."],
    ["Immunità acquisita", "Difesa specifica e con memoria: linfociti B e T."],
    ["Antigene", "Molecola riconosciuta come estranea dal sistema immunitario."],
    ["Anticorpo", "Proteina a Y prodotta dai linfociti B che si lega a un antigene."],
    ["Linfociti T", "Coordinano la risposta (helper) o uccidono cellule infette (citotossici)."],
    ["Sistema linfatico", "Vasi e linfonodi che drenano i liquidi e filtrano la linfa."],
    ["Vaccino", "Stimola la memoria immunitaria senza causare la malattia."],
    ["Autoimmunità", "Il sistema immunitario attacca i tessuti del proprio corpo."]
  ],
  abbina: [
    ["Linfociti B", "Anticorpi"],
    ["Timo", "Maturazione dei linfociti T"],
    ["Macrofagi", "Fagocitosi"],
    ["Linfonodi", "Filtrano la linfa"],
    ["Vaccino", "Memoria immunitaria"],
    ["Pelle", "Barriera fisica"]
  ],
  completa: [
    "Gli anticorpi sono prodotti dai linfociti {B}.",
    "L'immunità {innata} è rapida e aspecifica.",
    "Il {vaccino} crea memoria immunitaria.",
    "Un anticorpo riconosce uno specifico {antigene}."
  ]
};

GAMES["pnei-lifestyle-e-salute"] = {
  quiz: [
    ["Cosa significa PNEI?", ["Prevenzione Nutrizionale e Igiene", "Psico-Neuro-Endocrino-Immunologia", "Piano Nazionale di Educazione Igienica", "Pressione Neurale e Immunità"], 1, "Studia come mente, sistema nervoso, ormoni e difese comunicano."],
    ["Lo stress cronico tende a…", ["Rafforzare sempre le difese", "Mantenere alto il cortisolo e indebolire le difese", "Abbassare la pressione", "Migliorare il sonno"], 1, "Un po' di stress acuto è utile, quello cronico no."],
    ["Cosa sono le exerchine (o miochine)?", ["Integratori", "Molecole rilasciate dal muscolo che lavora, con effetti positivi su tutto il corpo", "Ormoni dello stress", "Batteri intestinali"], 1, "Il muscolo in contrazione si comporta come un organo che comunica."],
    ["La respirazione diaframmatica lenta…", ["Attiva il simpatico", "Favorisce il parasimpatico e riduce lo stress", "Aumenta la FC", "Non ha effetti"], 1, "Rallenta il battito e calma il sistema nervoso."],
    ["L'asse dello stress è formato da…", ["Ipotalamo, ipofisi e surrene", "Cuore e polmoni", "Stomaco e intestino", "Tiroide e reni"], 0, "Asse HPA: porta alla produzione di cortisolo."],
    ["Quale stile alimentare ha un effetto antinfiammatorio?", ["Ricco di zuccheri e fritti", "Dieta mediterranea", "Solo carne", "Digiuno continuo"], 1, "Verdura, frutta, legumi, pesce e olio d'oliva."],
    ["Dormire poco prima di una verifica…", ["Aiuta a ricordare", "Peggiora memoria, attenzione e umore", "Non cambia niente", "Migliora la prestazione sportiva"], 1, "Il sonno è parte attiva dello studio e del recupero."],
    ["Il nervo vago è legato…", ["Al sistema simpatico", "Al sistema parasimpatico", "Ai muscoli delle gambe", "Alla vista"], 1, "Rallenta il cuore e favorisce digestione e recupero."]
  ],
  vf: [
    ["Mente e corpo si influenzano a vicenda.", true, "È il principio di base della PNEI."],
    ["L'attività fisica regolare ha effetti antinfiammatori.", true, "Anche grazie alle exerchine."],
    ["Il sonno serve solo a riposare i muscoli.", false, "Serve anche a memoria, ormoni e difese immunitarie."],
    ["Respirare con il diaframma può aiutare la concentrazione.", true, "Riduce l'agitazione e migliora il controllo."],
    ["Lo stress acuto è sempre dannoso.", false, "Uno stress breve e gestibile prepara all'azione."],
    ["Lo stile di vita influenza il rischio di malattie metaboliche.", true, "Alimentazione, movimento e sonno contano molto."]
  ],
  flash: [
    ["PNEI", "Psico-Neuro-Endocrino-Immunologia: studia la comunicazione tra mente, nervi, ormoni e difese."],
    ["Asse HPA", "Ipotalamo-ipofisi-surrene: il circuito dello stress."],
    ["Cortisolo cronico", "Se resta alto, indebolisce le difese e altera sonno e umore."],
    ["Exerchine", "Molecole rilasciate dal muscolo durante l'esercizio, con effetti benefici."],
    ["Respirazione diaframmatica", "Respiro lento con la pancia che attiva il parasimpatico."],
    ["Nervo vago", "Principale nervo del parasimpatico."],
    ["Infiammazione cronica", "Infiammazione di basso grado legata a stile di vita scorretto."],
    ["Igiene del sonno", "Orari regolari, niente schermi prima di dormire, stanza buia."]
  ],
  abbina: [
    ["Asse HPA", "Stress"],
    ["Exerchine", "Muscolo che comunica"],
    ["Nervo vago", "Parasimpatico"],
    ["Dieta mediterranea", "Effetto antinfiammatorio"],
    ["Melatonina", "Sonno"],
    ["Diaframma", "Respiro lento"]
  ],
  completa: [
    "L'ormone principale dello stress è il {cortisolo}.",
    "Il muscolo che lavora rilascia le {exerchine}.",
    "La respirazione {diaframmatica} riduce lo stress.",
    "Il nervo {vago} rallenta il cuore."
  ]
};

GAMES["adattamenti-in-quota-e-in-profondita"] = {
  quiz: [
    ["In alta quota la percentuale di ossigeno nell'aria…", ["Scende al 10%", "Resta circa il 21%, ma cala la pressione parziale", "Sale al 30%", "Scompare"], 1, "È la minore pressione a ridurre l'ossigeno che arriva al sangue (ipossia)."],
    ["Quale ormone aumenta con la permanenza in quota?", ["Insulina", "Eritropoietina (EPO)", "Melatonina", "Glucagone"], 1, "Stimola la produzione di globuli rossi."],
    ["Nei primi giorni in quota la frequenza cardiaca a riposo…", ["Diminuisce", "Aumenta", "Resta uguale", "Si azzera"], 1, "Il cuore compensa il minor contenuto di ossigeno."],
    ["Cosa significa \"live high, train low\"?", ["Dormire in quota e allenarsi in basso", "Allenarsi solo in quota", "Vivere al mare", "Allenarsi solo di notte"], 0, "Si sfruttano gli adattamenti della quota senza ridurre l'intensità degli allenamenti."],
    ["Ogni 10 m di profondità in acqua la pressione aumenta di circa…", ["0,1 atmosfere", "1 atmosfera", "10 atmosfere", "Non cambia"], 1, "A 10 m sei a 2 atmosfere totali."],
    ["Il riflesso d'immersione provoca…", ["Tachicardia", "Bradicardia e vasocostrizione periferica", "Aumento della digestione", "Sudorazione"], 1, "Il corpo risparmia ossigeno per cuore e cervello."],
    ["La malattia da decompressione è causata da…", ["Troppo ossigeno", "Bolle di azoto per una risalita troppo rapida", "Freddo", "Disidratazione"], 1, "Per questo i subacquei fanno soste di decompressione."],
    ["La narcosi da azoto si manifesta con…", ["Euforia e confusione in profondità", "Crampi", "Febbre", "Fame"], 0, "Si chiama anche \"ebbrezza degli abissi\"."]
  ],
  vf: [
    ["Gli adattamenti alla quota richiedono settimane di acclimatamento.", true, "L'aumento dei globuli rossi non è immediato."],
    ["In quota si respira più velocemente.", true, "L'iperventilazione è una delle prime risposte."],
    ["Il mal di montagna colpisce solo chi non è allenato.", false, "Può colpire chiunque: conta salire gradualmente."],
    ["Secondo la legge di Boyle, scendendo in profondità il volume dei polmoni si riduce.", true, "Volume e pressione sono inversamente proporzionali."],
    ["Il doping con EPO è permesso se l'atleta si allena in quota.", false, "L'EPO assunta dall'esterno è sempre doping."],
    ["Risalire lentamente riduce il rischio di malattia da decompressione.", true, "L'azoto ha il tempo di essere eliminato."]
  ],
  flash: [
    ["Ipossia", "Ridotta disponibilità di ossigeno per i tessuti."],
    ["Acclimatamento", "Insieme degli adattamenti alla quota, in giorni e settimane."],
    ["EPO", "Ormone renale che stimola la produzione di globuli rossi."],
    ["Live high, train low", "Vivere in quota, allenarsi a bassa quota."],
    ["Riflesso d'immersione", "Bradicardia e vasocostrizione quando il viso entra in acqua fredda."],
    ["Legge di Boyle", "A temperatura costante, volume e pressione di un gas sono inversamente proporzionali."],
    ["Narcosi da azoto", "Alterazione mentale in profondità dovuta all'azoto ad alta pressione."],
    ["Malattia da decompressione", "Bolle di azoto nei tessuti per risalita troppo rapida."]
  ],
  abbina: [
    ["Quota", "Ipossia ipobarica"],
    ["EPO", "Più globuli rossi"],
    ["10 m di profondità", "+1 atmosfera"],
    ["Apnea", "Riflesso d'immersione"],
    ["Risalita rapida", "Decompressione"],
    ["Ebbrezza degli abissi", "Narcosi da azoto"]
  ],
  completa: [
    "In quota cala la pressione {parziale} dell'ossigeno.",
    "La permanenza in quota stimola la produzione di {EPO}.",
    "Ogni 10 m di profondità la pressione aumenta di 1 {atmosfera}.",
    "Il riflesso d'immersione provoca {bradicardia}."
  ]
};

GAMES["psicologia-dello-sport"] = {
  quiz: [
    ["La motivazione intrinseca nasce…", ["Dai premi e dalle medaglie", "Dal piacere e dall'interesse per l'attività stessa", "Dalla paura della punizione", "Dai soldi"], 1, "È la motivazione più stabile nel tempo."],
    ["Cosa descrive la curva a U rovesciata (Yerkes-Dodson)?", ["Più arousal significa sempre prestazione migliore", "Esiste un livello ottimale di attivazione: troppo poco o troppo peggiorano la prestazione", "Arousal e prestazione non c'entrano", "La crescita muscolare"], 1, "Il livello ottimale cambia da persona a persona e da sport a sport."],
    ["L'imagery è…", ["Guardare foto di campioni", "Rappresentarsi mentalmente un gesto o una situazione con tutti i sensi", "Sognare di notte", "Un test fisico"], 1, "Attiva aree cerebrali simili a quelle del movimento reale."],
    ["Il self-talk è…", ["Parlare con l'allenatore", "Il dialogo interno che l'atleta fa con se stesso", "Un'intervista", "Un modo di urlare"], 1, "Frasi brevi e positive aiutano concentrazione e fiducia."],
    ["Un obiettivo di prestazione è…", ["Vincere la gara", "Migliorare il proprio risultato o un aspetto tecnico", "Battere un avversario", "Ricevere un premio"], 1, "Dipende da te, a differenza dell'obiettivo di risultato."],
    ["L'ansia somatica si manifesta con…", ["Pensieri negativi", "Sintomi fisici: battito accelerato, tensione, mani sudate", "Più concentrazione", "Fame"], 1, "L'ansia cognitiva riguarda invece preoccupazioni e pensieri."],
    ["Una routine pre-prestazione serve a…", ["Perdere tempo", "Entrare nello stato mentale giusto in modo ripetibile", "Distrarsi", "Intimorire l'avversario"], 1, "Ad esempio la sequenza fissa prima di un servizio."],
    ["La psicologia dello sport è…", ["Solo per atleti in difficoltà", "Utile a tutti: si allena come qualsiasi capacità", "Solo per professionisti", "Inutile negli sport di squadra"], 1, "Concentrazione e gestione delle emozioni si possono allenare."]
  ],
  vf: [
    ["La concentrazione è una capacità allenabile.", true, "Con esercizi specifici e routine."],
    ["Un livello medio di attivazione è spesso il migliore per la prestazione.", true, "È ciò che descrive la U rovesciata."],
    ["La motivazione estrinseca è sempre negativa.", false, "Può aiutare, ma da sola è meno stabile di quella intrinseca."],
    ["La visualizzazione può migliorare l'apprendimento di un gesto tecnico.", true, "Funziona meglio insieme alla pratica reale."],
    ["Il rilassamento muscolare progressivo alterna contrazione e rilassamento dei muscoli.", true, "È il metodo di Jacobson."],
    ["Gli obiettivi migliori sono vaghi e senza scadenza.", false, "Funzionano meglio obiettivi specifici, misurabili e con una scadenza."]
  ],
  flash: [
    ["Motivazione intrinseca", "Fare un'attività per il piacere e l'interesse che dà."],
    ["Motivazione estrinseca", "Fare un'attività per ottenere qualcosa di esterno (premi, riconoscimenti)."],
    ["Arousal", "Livello di attivazione fisica e mentale."],
    ["U rovesciata", "Prestazione massima con un livello ottimale, non massimo, di arousal."],
    ["Imagery", "Visualizzazione mentale multisensoriale di un gesto o di una situazione."],
    ["Self-talk", "Dialogo interno usato per guidare attenzione ed emozioni."],
    ["Goal setting", "Tecnica per fissare obiettivi efficaci (SMART)."],
    ["Routine pre-prestazione", "Sequenza fissa di azioni e pensieri prima del gesto."]
  ],
  abbina: [
    ["Yerkes-Dodson", "U rovesciata"],
    ["Jacobson", "Rilassamento progressivo"],
    ["Imagery", "Visualizzazione"],
    ["Self-talk", "Dialogo interno"],
    ["Goal setting", "Obiettivi"],
    ["Ansia somatica", "Sintomi fisici"]
  ],
  completa: [
    "La motivazione {intrinseca} nasce dal piacere dell'attività.",
    "Il livello di attivazione si chiama {arousal}.",
    "Con l'{imagery} si visualizza un gesto con tutti i sensi.",
    "Il dialogo interno dell'atleta si chiama {self-talk}."
  ]
};

GAMES["adattamenti-fisiologici-allallenamento"] = {
  quiz: [
    ["Qual è un adattamento cronico all'allenamento di resistenza?", ["FC a riposo più alta", "Più mitocondri e più capillari nei muscoli", "Meno globuli rossi", "Riduzione del VO₂max"], 1, "I muscoli diventano più bravi a usare l'ossigeno."],
    ["Cosa distingue una risposta acuta da un adattamento cronico?", ["Nulla", "La risposta acuta avviene durante lo sforzo, l'adattamento dopo settimane di allenamento", "L'adattamento è immediato", "La risposta acuta dura anni"], 1, "Es. acuta: la FC sale; cronica: la FC a riposo scende."],
    ["Nelle prime 4–6 settimane di allenamento della forza si migliora soprattutto per…", ["Ipertrofia", "Adattamenti nervosi", "Aumento delle ossa", "Perdita di grasso"], 1, "Migliori reclutamento, frequenza di scarica e coordinazione."],
    ["Un atleta di resistenza allenato usa più grassi a parità di intensità. Perché?", ["Perché mangia più grassi", "Perché ha più mitocondri ed enzimi ossidativi", "Perché ha meno muscoli", "Non è vero"], 1, "Così risparmia glicogeno e ritarda la fatica."],
    ["L'allenamento anaerobico lattacido migliora…", ["Solo la flessibilità", "La capacità di tamponare l'acidità e gli enzimi glicolitici", "Il sonno", "La vista"], 1, "Si tollera meglio lo sforzo intenso di media durata."],
    ["Cosa significa analizzare il modello prestativo di uno sport?", ["Scegliere la divisa", "Capire quali richieste energetiche, muscolari e tecniche ha quello sport", "Copiare un campione", "Contare i tifosi"], 1, "È il punto di partenza per programmare l'allenamento."],
    ["Cosa succede con il detraining?", ["Gli adattamenti si mantengono per sempre", "Gli adattamenti si riducono gradualmente", "Si migliora più in fretta", "Si diventa più forti"], 1, "Principio di reversibilità."],
    ["La gittata sistolica dopo mesi di allenamento aerobico…", ["Diminuisce", "Aumenta", "Non cambia", "Si annulla"], 1, "Il ventricolo si riempie e si svuota di più a ogni battito."]
  ],
  vf: [
    ["Il VO₂max migliora con l'allenamento aerobico.", true, "Anche se dipende in parte dalla genetica."],
    ["L'ipertrofia è il primo adattamento all'allenamento della forza.", false, "Prima arrivano gli adattamenti nervosi."],
    ["L'allenamento aerobico aumenta il volume del plasma.", true, "Il sangue circola meglio e si suda prima."],
    ["Gli adattamenti dipendono dal tipo di allenamento svolto.", true, "Principio di specificità."],
    ["La soglia anaerobica di un atleta allenato è più alta.", true, "Può correre più veloce senza accumulare lattato."],
    ["Allenare la forza fa sempre perdere velocità.", false, "Un buon allenamento della forza migliora spesso la velocità."]
  ],
  flash: [
    ["Risposta acuta", "Cambiamento immediato durante lo sforzo (es. FC che sale)."],
    ["Adattamento cronico", "Modifica stabile dopo settimane o mesi di allenamento."],
    ["Biogenesi mitocondriale", "Aumento del numero di mitocondri nei muscoli allenati."],
    ["Capillarizzazione", "Aumento dei capillari attorno alle fibre muscolari."],
    ["Adattamenti nervosi", "Migliore reclutamento e sincronizzazione delle unità motorie."],
    ["Ipertrofia", "Aumento del volume delle fibre muscolari."],
    ["Modello prestativo", "Profilo delle richieste fisiche e tecniche di uno sport."],
    ["Detraining", "Perdita degli adattamenti quando ci si ferma."]
  ],
  abbina: [
    ["Mitocondri", "Più energia aerobica"],
    ["Capillari", "Più ossigeno al muscolo"],
    ["Prime settimane di forza", "Adattamenti nervosi"],
    ["Dopo 6–8 settimane", "Ipertrofia"],
    ["Bradicardia", "Cuore più efficiente"],
    ["Detraining", "Reversibilità"]
  ],
  completa: [
    "L'allenamento aerobico aumenta il numero di {mitocondri}.",
    "Nelle prime settimane di forza prevalgono gli adattamenti {nervosi}.",
    "L'aumento del volume delle fibre si chiama {ipertrofia}.",
    "Quando ci si ferma gli adattamenti si perdono: è il {detraining}."
  ]
};

GAMES["alimentazione-e-sport-integratori-e-doping"] = {
  quiz: [
    ["Qual è il carburante principale negli sforzi ad alta intensità?", ["Proteine", "Carboidrati (glicogeno)", "Vitamine", "Acqua"], 1, "Per questo le scorte di glicogeno sono così importanti."],
    ["Perdere il 2% del peso corporeo in liquidi…", ["Migliora la prestazione", "Peggiora già la prestazione", "Non ha effetti", "Fa dimagrire in modo sano"], 1, "Pesarsi prima e dopo l'allenamento aiuta a capire quanto bere."],
    ["Quando fare un pasto completo prima di una gara?", ["10 minuti prima", "3–4 ore prima", "Il giorno dopo", "Mai"], 1, "Ricco di carboidrati, povero di grassi e fibre."],
    ["Nel recupero dopo l'allenamento sono utili…", ["Solo grassi", "Carboidrati e proteine", "Solo caffè", "Nessun alimento"], 1, "Ricaricano glicogeno e aiutano la riparazione muscolare."],
    ["Il bilancio energetico è…", ["Calorie introdotte meno calorie consumate", "Solo le calorie del pranzo", "Il peso della bilancia", "Le ore di sonno"], 0, "Se è positivo si accumula energia, se negativo si perde."],
    ["Un integratore…", ["Sostituisce una dieta corretta", "Può essere utile solo in situazioni specifiche, non sostituisce la dieta", "È sempre necessario per chi fa sport", "Non può mai contenere sostanze proibite"], 1, "Alcuni prodotti sono risultati contaminati da sostanze dopanti."],
    ["Chi stila la lista internazionale delle sostanze proibite?", ["FIFA", "WADA (Agenzia Mondiale Antidoping)", "OMS", "CONI soltanto"], 1, "In Italia opera NADO Italia."],
    ["Il principio di responsabilità oggettiva dice che…", ["Se l'atleta non sapeva, non è colpevole", "L'atleta è responsabile di qualunque sostanza trovata nel suo corpo", "Il responsabile è sempre l'allenatore", "Il medico paga per l'atleta"], 1, "Per questo bisogna fare molta attenzione a farmaci e integratori."]
  ],
  vf: [
    ["Il doping può causare danni gravi a cuore, fegato e sistema ormonale.", true, "Anche danni psicologici."],
    ["In Italia il doping è anche un reato penale.", true, "Lo prevede la legge 376 del 2000."],
    ["Più proteine si mangiano, più muscoli si costruiscono, senza limiti.", false, "Oltre il fabbisogno l'eccesso non aumenta i muscoli."],
    ["L'acqua è la bevanda migliore per sforzi brevi.", true, "Le bevande sportive servono negli sforzi lunghi."],
    ["L'EPO aumenta i globuli rossi ed è una sostanza dopante.", true, "Aumenta anche la viscosità del sangue e il rischio di trombosi."],
    ["I diuretici sono vietati perché possono mascherare altre sostanze.", true, "Fanno anche perdere peso velocemente."]
  ],
  flash: [
    ["Glicogeno", "Riserva di carboidrati in muscoli e fegato."],
    ["Bilancio energetico", "Calorie introdotte meno calorie consumate."],
    ["Bilancio idrico", "Liquidi assunti meno liquidi persi (sudore, urine, respiro)."],
    ["Integratore", "Prodotto che completa la dieta; utile solo in casi specifici."],
    ["WADA", "Agenzia Mondiale Antidoping: pubblica la lista delle sostanze proibite."],
    ["Anabolizzanti", "Sostanze derivate dal testosterone per aumentare la massa muscolare: vietate."],
    ["Doping ematico", "Aumentare artificialmente i globuli rossi (EPO, trasfusioni)."],
    ["Responsabilità oggettiva", "L'atleta risponde di qualunque sostanza trovata nel suo organismo."]
  ],
  abbina: [
    ["Carboidrati", "Benzina per l'alta intensità"],
    ["Proteine", "Riparazione muscolare"],
    ["EPO", "Doping ematico"],
    ["WADA", "Lista proibita"],
    ["Legge 376/2000", "Doping come reato"],
    ["Diuretici", "Agenti mascheranti"]
  ],
  completa: [
    "La riserva di carboidrati nei muscoli si chiama {glicogeno}.",
    "Perdere il {2}% del peso in liquidi peggiora la prestazione.",
    "La lista delle sostanze proibite è pubblicata dalla {WADA}.",
    "Un integratore non sostituisce una {dieta} corretta."
  ]
};

GAMES["disabilita-e-sport-le-paralimpiadi"] = {
  quiz: [
    ["Chi è considerato il padre del movimento paralimpico?", ["Pierre de Coubertin", "Ludwig Guttmann", "Alex Zanardi", "Jesse Owens"], 1, "Nel 1948 organizzò i Giochi di Stoke Mandeville per veterani con lesioni spinali."],
    ["In quale città si sono svolte le prime Paralimpiadi nel 1960?", ["Londra", "Roma", "Tokyo", "Parigi"], 1, "Subito dopo le Olimpiadi di Roma."],
    ["Il modello biopsicosociale considera la disabilità…", ["Solo come malattia", "Come interazione tra condizione della persona e ambiente", "Una colpa", "Un problema solo medico"], 1, "È il modello ICF dell'OMS: l'ambiente può creare o abbattere barriere."],
    ["A cosa serve la classificazione degli atleti paralimpici?", ["A scegliere la divisa", "A far gareggiare atleti con limitazioni funzionali simili", "A decidere chi vince", "A escludere atleti"], 1, "Rende la competizione equa."],
    ["Il simbolo paralimpico si chiama…", ["Cinque cerchi", "Agitos", "Fiaccola", "Stella"], 1, "Tre forme rossa, blu e verde: significa \"mi muovo\"."],
    ["Quale organizzazione guida il movimento paralimpico mondiale?", ["CIO", "IPC (Comitato Paralimpico Internazionale)", "FIFA", "UEFA"], 1, "In Italia c'è il CIP, Comitato Italiano Paralimpico."],
    ["Bebe Vio è campionessa di…", ["Nuoto", "Scherma in carrozzina", "Atletica", "Tiro con l'arco"], 1, "Ha vinto ori paralimpici nel fioretto."],
    ["Gli Special Olympics sono rivolti ad atleti con…", ["Disabilità fisica", "Disabilità intellettiva", "Solo sordità", "Nessuna disabilità"], 1, "Sono un movimento diverso dalle Paralimpiadi."]
  ],
  vf: [
    ["Lo sport per persone con disabilità ha anche un valore riabilitativo e sociale.", true, "Fu proprio l'idea di Guttmann."],
    ["Le Paralimpiadi si svolgono solo in estate.", false, "Esistono anche le Paralimpiadi invernali."],
    ["Le barriere architettoniche fanno parte del concetto di disabilità.", true, "Secondo il modello biopsicosociale l'ambiente conta."],
    ["Alex Zanardi ha vinto medaglie paralimpiche nell'handbike.", true, "Dopo l'incidente automobilistico del 2001."],
    ["Gli atleti paralimpici non si allenano come gli atleti olimpici.", false, "Seguono programmi di allenamento rigorosi come tutti gli atleti."],
    ["Le Paralimpiadi invernali del 2026 si sono svolte in Italia, a Milano Cortina.", true, "Si sono tenute dopo le Olimpiadi invernali."]
  ],
  flash: [
    ["Ludwig Guttmann", "Neurologo, fondatore del movimento paralimpico (Stoke Mandeville, 1948)."],
    ["Roma 1960", "Prime Paralimpiadi della storia."],
    ["IPC", "International Paralympic Committee."],
    ["CIP", "Comitato Italiano Paralimpico."],
    ["Agitos", "Simbolo paralimpico: \"mi muovo\" in latino."],
    ["Modello biopsicosociale", "La disabilità nasce dall'interazione tra persona e ambiente."],
    ["Classificazione funzionale", "Raggruppa gli atleti per limitazioni simili, per gare eque."],
    ["Special Olympics", "Movimento sportivo per persone con disabilità intellettiva."]
  ],
  abbina: [
    ["Guttmann", "Stoke Mandeville"],
    ["Roma", "1960"],
    ["Agitos", "Simbolo paralimpico"],
    ["Bebe Vio", "Scherma"],
    ["Zanardi", "Handbike"],
    ["ICF", "Modello biopsicosociale"]
  ],
  completa: [
    "Il padre del movimento paralimpico è Ludwig {Guttmann}.",
    "Le prime Paralimpiadi si sono svolte a {Roma} nel 1960.",
    "Il simbolo paralimpico si chiama {Agitos}.",
    "Secondo il modello biopsicosociale conta anche l'{ambiente}."
  ]
};
