/* =========================================================
   GIOCHI DI RIPASSO — Metodo di studio e classe prima
   quiz:     [domanda, [risposte], indice risposta giusta (0 = prima), spiegazione]
   vf:       [affermazione, true/false, spiegazione]
   flash:    [fronte, retro]
   abbina:   [termine, definizione]
   completa: frase con le parole da trovare tra {graffe}
   ========================================================= */
window.GAMES = window.GAMES || {};

GAMES["metodo-di-studio"] = {
  quiz: [
    ["Quale strategia è più efficace per ricordare a lungo?", ["Rileggere più volte il libro", "Interrogarsi da soli senza guardare", "Sottolineare quasi tutto", "Studiare tutto la sera prima"], 1, "Il recupero attivo (autointerrogazione) rafforza la memoria più della rilettura passiva."],
    ["La tecnica del pomodoro prevede in genere…", ["50 minuti di studio e 2 di pausa", "25 minuti di studio e 5 di pausa", "10 minuti di studio e 10 di pausa", "Studiare finché si è stanchi"], 1, "Blocchi brevi e concentrati, seguiti da una pausa, mantengono alta l'attenzione."],
    ["Cosa descrive la curva dell'oblio di Ebbinghaus?", ["Come cresce la motivazione", "Come dimentichiamo rapidamente ciò che non ripassiamo", "Quanto dura il sonno REM", "Il calo di forza con la fatica"], 1, "Senza ripasso la memoria cala in fretta: ripassi distanziati nel tempo la fermano."],
    ["Un obiettivo SMART è…", ["Vago ma motivante", "Specifico, misurabile, raggiungibile, rilevante e con una scadenza", "Molto ambizioso e senza scadenze", "Deciso dall'insegnante"], 1, "SMART aiuta a trasformare un desiderio in un piano concreto."],
    ["Dove conviene tenere il telefono mentre studi?", ["Sul tavolo a faccia in giù", "In un'altra stanza", "In tasca in vibrazione", "Acceso per la musica"], 1, "Anche solo vederlo riduce l'attenzione: lontano è meglio."],
    ["Il sonno dopo lo studio…", ["Fa dimenticare ciò che hai studiato", "Aiuta a consolidare i ricordi", "Non ha nessun effetto", "Serve solo ai muscoli"], 1, "Durante il sonno il cervello riorganizza e fissa le informazioni."],
    ["Il multitasking durante lo studio…", ["Fa risparmiare tempo", "Riduce qualità e velocità dell'apprendimento", "Migliora la memoria", "È consigliato dagli esperti"], 1, "Il cervello passa da un compito all'altro e perde efficienza a ogni cambio."],
    ["Una mappa concettuale serve a…", ["Decorare il quaderno", "Collegare i concetti e vederne la struttura", "Copiare il libro", "Sostituire lo studio"], 1, "Organizzare le idee in rete facilita comprensione e richiamo."]
  ],
  vf: [
    ["Studiare tutto il giorno prima della verifica è la strategia migliore.", false, "Lo studio distribuito su più giorni è molto più efficace."],
    ["Spiegare un argomento a voce alta aiuta a capirlo meglio.", true, "Riformulare con parole proprie mostra subito cosa non è chiaro."],
    ["Alternare argomenti diversi nello stesso pomeriggio può migliorare l'apprendimento.", true, "Si chiama interleaving: obbliga il cervello a distinguere e collegare."],
    ["Un po' di ansia prima della verifica è sempre dannosa.", false, "Un livello moderato di attivazione può aiutare la concentrazione."],
    ["La respirazione lenta può ridurre l'ansia da verifica.", true, "Attiva il sistema parasimpatico e rallenta il battito."],
    ["Sottolineare molto equivale a studiare.", false, "Sottolineare non basta: serve elaborare e ripetere."]
  ],
  flash: [
    ["Recupero attivo", "Richiamare le informazioni dalla memoria senza guardare (autointerrogazione, flashcard, esercizi)."],
    ["Ripetizione dilazionata", "Ripassare a intervalli crescenti di tempo per fissare i ricordi."],
    ["Tecnica del pomodoro", "Blocchi di studio di circa 25 minuti seguiti da 5 minuti di pausa."],
    ["Obiettivo SMART", "Specifico, Misurabile, Raggiungibile, Rilevante, Temporizzato."],
    ["Curva dell'oblio", "Descrive quanto velocemente dimentichiamo ciò che non ripassiamo."],
    ["Interleaving", "Alternare argomenti o tipi di esercizi diversi nella stessa sessione."],
    ["Mappa concettuale", "Schema che collega i concetti con frecce e parole legame."],
    ["Ambiente di studio", "Luogo ordinato, luminoso, senza distrazioni, con tutto il materiale a portata di mano."]
  ],
  abbina: [
    ["Pomodoro", "25 minuti + 5 di pausa"],
    ["SMART", "Obiettivo chiaro con scadenza"],
    ["Ebbinghaus", "Curva dell'oblio"],
    ["Flashcard", "Recupero attivo"],
    ["Sonno", "Consolidamento della memoria"],
    ["Mappa", "Collegare i concetti"]
  ],
  completa: [
    "Per ricordare a lungo è meglio {interrogarsi} che rileggere.",
    "Ripassare a intervalli crescenti si chiama ripetizione {dilazionata}.",
    "Un obiettivo {SMART} ha sempre una scadenza.",
    "Durante il {sonno} il cervello consolida ciò che hai studiato."
  ]
};

GAMES["la-salute-dinamica"] = {
  quiz: [
    ["Quanta attività fisica raccomanda l'OMS a bambini e adolescenti?", ["30 minuti a settimana", "Almeno 60 minuti al giorno", "2 ore al mese", "Solo nei giorni di scuola"], 1, "Almeno 60 minuti al giorno di attività moderata-vigorosa, in media."],
    ["Per un adulto l'OMS raccomanda almeno…", ["150 minuti a settimana di attività moderata", "20 minuti al mese", "1 ora al giorno di corsa intensa", "Nessuna attività"], 0, "150–300 minuti a settimana di attività moderata, oppure 75–150 di vigorosa."],
    ["Secondo l'OMS la salute è…", ["Assenza di malattia", "Uno stato di completo benessere fisico, mentale e sociale", "Avere muscoli forti", "Non prendere farmaci"], 1, "La definizione del 1948 va oltre la semplice assenza di malattia."],
    ["Quale di questi è un comportamento sedentario?", ["Andare a scuola in bici", "Stare seduti al videogioco per ore", "Fare le scale", "Giocare a pallavolo"], 1, "Lunghi periodi seduti, soprattutto davanti a schermi, sono sedentarietà."],
    ["Come riconosci un'intensità moderata?", ["Non riesci a parlare", "Respiri più forte ma riesci a parlare", "Sei completamente a riposo", "Hai dolore muscolare"], 1, "È il test del parlato: a intensità moderata parli, ma non canti."],
    ["Quante ore dovrebbe dormire un adolescente?", ["4–5 ore", "8–10 ore", "12–14 ore", "Basta riposare nel weekend"], 1, "Il sonno adeguato sostiene crescita, umore, memoria e prestazione."],
    ["Muoversi a piedi o in bici per andare a scuola…", ["Non conta come attività fisica", "Fa bene alla salute e all'ambiente", "È pericoloso sempre", "Fa perdere tempo di studio"], 1, "Ogni movimento conta e si riducono traffico e inquinamento."],
    ["Il rafforzamento muscolare per i ragazzi andrebbe fatto…", ["Mai prima dei 18 anni", "Almeno 3 volte a settimana", "Solo in palestra con pesi", "Una volta all'anno"], 1, "Anche giochi, salti e arrampicate rinforzano muscoli e ossa."]
  ],
  vf: [
    ["Anche pochi minuti di movimento sono meglio di niente.", true, "Il messaggio dell'OMS è: ogni movimento conta."],
    ["Se fai sport 2 volte a settimana puoi stare seduto tutto il resto del tempo senza conseguenze.", false, "Anche chi fa sport deve interrompere spesso la sedentarietà."],
    ["Sonno, alimentazione e movimento sono collegati tra loro.", true, "Insieme formano lo stile di vita che protegge la salute."],
    ["Fare attività con gli amici migliora anche il benessere sociale.", true, "La salute ha anche una dimensione sociale."],
    ["L'attività fisica serve solo a dimagrire.", false, "Migliora cuore, ossa, umore, sonno, concentrazione e molto altro."],
    ["La salute dipende anche dalle nostre scelte quotidiane.", true, "Per questo si parla di salute dinamica: si costruisce ogni giorno."]
  ],
  flash: [
    ["Salute (OMS, 1948)", "Stato di completo benessere fisico, mentale e sociale, non solo assenza di malattia."],
    ["Sedentarietà", "Tempo passato seduti o sdraiati da svegli con un dispendio energetico molto basso."],
    ["60 minuti", "Attività fisica quotidiana minima raccomandata tra 5 e 17 anni."],
    ["150 minuti", "Attività moderata settimanale minima raccomandata per un adulto."],
    ["Test del parlato", "A intensità moderata riesci a parlare ma non a cantare."],
    ["Physical fitness", "Capacità di svolgere le attività quotidiane con energia, senza affaticarsi troppo."],
    ["Mobilità attiva", "Spostarsi a piedi o in bicicletta invece che in auto."],
    ["Sonno adolescenti", "8–10 ore per notte."]
  ],
  abbina: [
    ["60 minuti al giorno", "Ragazzi 5–17 anni"],
    ["150 minuti a settimana", "Adulti"],
    ["8–10 ore", "Sonno di un adolescente"],
    ["Test del parlato", "Stimare l'intensità"],
    ["Bicicletta", "Mobilità sostenibile"],
    ["OMS", "Organizzazione Mondiale della Sanità"]
  ],
  completa: [
    "I ragazzi dovrebbero muoversi almeno {60} minuti al giorno.",
    "Stare seduti a lungo da svegli si chiama {sedentarietà}.",
    "La salute è benessere fisico, mentale e {sociale}.",
    "A intensità moderata riesci ancora a {parlare}."
  ]
};

GAMES["sistema-scheletrico"] = {
  quiz: [
    ["Quante ossa ha in media lo scheletro di un adulto?", ["106", "206", "306", "406"], 1, "Alla nascita sono di più: molte poi si fondono."],
    ["Quale cellula costruisce nuovo tessuto osseo?", ["Osteoclasto", "Osteoblasto", "Osteocita", "Condrocita"], 1, "Osteoblasti costruiscono, osteoclasti riassorbono, osteociti mantengono."],
    ["Dove si producono le cellule del sangue?", ["Nel periostio", "Nel midollo osseo rosso", "Nella cartilagine", "Nei legamenti"], 1, "Questa funzione si chiama emopoiesi."],
    ["Quante sono le vertebre cervicali?", ["5", "7", "12", "4"], 1, "7 cervicali, 12 toraciche (dorsali), 5 lombari, poi sacro e coccige."],
    ["La curva della colonna a livello dorsale si chiama…", ["Lordosi", "Cifosi", "Scoliosi", "Artrosi"], 1, "Lordosi cervicale e lombare, cifosi dorsale e sacrale."],
    ["La scoliosi è…", ["Un'esagerazione della curva lombare", "Una deviazione laterale della colonna con rotazione delle vertebre", "Una frattura", "Una malattia del ginocchio"], 1, "Si osserva guardando la schiena da dietro o con il test di flessione in avanti."],
    ["Il femore è un esempio di osso…", ["Piatto", "Corto", "Lungo", "Irregolare"], 2, "Ha una diafisi (corpo) e due epifisi (estremità)."],
    ["Qual è l'unico osso mobile del cranio?", ["Il frontale", "L'occipitale", "La mandibola", "Il temporale"], 2, "Si articola con il temporale e permette di masticare e parlare."]
  ],
  vf: [
    ["L'osso è un tessuto vivo che si rinnova continuamente.", true, "Viene costantemente costruito e riassorbito."],
    ["L'attività fisica con carichi e salti rende le ossa più forti.", true, "L'osso si adatta ai carichi che riceve (legge di Wolff)."],
    ["Le coste sono 10 paia.", false, "Sono 12 paia: 7 vere, 3 false e 2 fluttuanti."],
    ["Le ossa fanno da riserva di calcio e fosforo.", true, "Il calcio viene rilasciato nel sangue quando serve."],
    ["L'osso spugnoso si trova soprattutto nelle epifisi delle ossa lunghe.", true, "La sua struttura a trabecole è leggera ma resistente."],
    ["L'osteoporosi rende le ossa più dense.", false, "Le rende più fragili e porose: il rischio di fratture aumenta."]
  ],
  flash: [
    ["Funzioni dello scheletro", "Sostegno, protezione, movimento, riserva di minerali, produzione delle cellule del sangue."],
    ["Osteoblasti", "Cellule che producono nuova matrice ossea."],
    ["Osteoclasti", "Cellule che riassorbono (demoliscono) il tessuto osseo."],
    ["Osteociti", "Osteoblasti maturi intrappolati nella matrice che mantengono l'osso."],
    ["Osso compatto", "Denso e resistente, forma la parte esterna e la diafisi delle ossa lunghe."],
    ["Osso spugnoso", "Leggero, a trabecole, contiene midollo rosso; si trova nelle epifisi."],
    ["Colonna vertebrale", "7 cervicali, 12 toraciche, 5 lombari, sacro e coccige."],
    ["Cartilagine di accrescimento", "Zona tra diafisi ed epifisi che permette la crescita in lunghezza."]
  ],
  abbina: [
    ["Femore", "Osso lungo"],
    ["Scapola", "Osso piatto"],
    ["Vertebra", "Osso irregolare"],
    ["Carpo", "Osso corto"],
    ["Midollo rosso", "Emopoiesi"],
    ["Sterno", "Gabbia toracica"]
  ],
  completa: [
    "Gli {osteoblasti} costruiscono l'osso, gli {osteoclasti} lo riassorbono.",
    "Le vertebre lombari sono {5}.",
    "La curva dorsale della colonna si chiama {cifosi}.",
    "Il midollo osseo rosso produce le cellule del {sangue}."
  ]
};

GAMES["le-articolazioni"] = {
  quiz: [
    ["Le articolazioni mobili si chiamano…", ["Sinartrosi", "Anfiartrosi", "Diartrosi", "Suture"], 2, "Sono le articolazioni sinoviali, come spalla e ginocchio."],
    ["Le suture del cranio sono…", ["Diartrosi", "Sinartrosi", "Anfiartrosi", "Enartrosi"], 1, "Sono articolazioni fisse."],
    ["Quale liquido lubrifica le articolazioni mobili?", ["Linfa", "Liquido sinoviale", "Plasma", "Bile"], 1, "È prodotto dalla membrana sinoviale e riduce l'attrito."],
    ["I muscoli della cuffia dei rotatori stabilizzano…", ["L'anca", "Il ginocchio", "La spalla", "La caviglia"], 2, "Sovraspinato, sottospinato, piccolo rotondo e sottoscapolare."],
    ["Quali ossa formano il ginocchio?", ["Femore, tibia e rotula", "Omero, radio e ulna", "Tibia, perone e astragalo", "Femore e bacino"], 0, "Il perone non partecipa all'articolazione del ginocchio."],
    ["La prono-supinazione avviene tra…", ["Omero e scapola", "Radio e ulna", "Tibia e femore", "Femore e anca"], 1, "Il radio ruota attorno all'ulna: girare il palmo in alto o in basso."],
    ["La distorsione di caviglia più frequente avviene in…", ["Eversione", "Inversione", "Flessione dorsale", "Estensione"], 1, "Il piede si gira verso l'interno e si stirano i legamenti laterali."],
    ["L'anca è un'enartrosi: cosa significa?", ["Permette solo flessione", "È una sfera in una cavità, con movimenti su tutti i piani", "È immobile", "È una sutura"], 1, "La testa del femore si inserisce nell'acetabolo del bacino."]
  ],
  vf: [
    ["I menischi del ginocchio ammortizzano e stabilizzano l'articolazione.", true, "Sono due cuscinetti di fibrocartilagine: mediale e laterale."],
    ["La spalla è l'articolazione più stabile del corpo.", false, "È la più mobile, e proprio per questo è soggetta a lussazioni."],
    ["I legamenti uniscono un muscolo a un osso.", false, "I legamenti uniscono osso a osso; i tendini uniscono muscolo a osso."],
    ["Le articolazioni tra le vertebre sono anfiartrosi.", true, "I dischi intervertebrali permettono piccoli movimenti."],
    ["Il legamento crociato anteriore si rompe spesso nei cambi di direzione.", true, "È un infortunio tipico di calcio, sci, basket e pallavolo."],
    ["La caviglia è formata da tibia, perone e astragalo.", true, "Il perone si chiama anche fibula, l'astragalo anche talo."]
  ],
  flash: [
    ["Sinartrosi", "Articolazioni immobili (es. suture del cranio)."],
    ["Anfiartrosi", "Articolazioni semimobili (es. tra le vertebre, sinfisi pubica)."],
    ["Diartrosi", "Articolazioni mobili con capsula e liquido sinoviale."],
    ["Cuffia dei rotatori", "Quattro muscoli che stabilizzano la spalla."],
    ["Legamenti crociati", "Anteriore e posteriore: impediscono lo scivolamento della tibia sotto il femore."],
    ["Menischi", "Fibrocartilagini a C che ammortizzano il ginocchio."],
    ["Abduzione", "Movimento che allontana un segmento dall'asse del corpo."],
    ["Adduzione", "Movimento che avvicina un segmento all'asse del corpo."]
  ],
  abbina: [
    ["Spalla", "Scapolo-omerale"],
    ["Anca", "Testa del femore e acetabolo"],
    ["Ginocchio", "Femore, tibia, rotula"],
    ["Gomito", "Omero, radio, ulna"],
    ["Caviglia", "Tibia, perone, astragalo"],
    ["Cranio", "Suture immobili"]
  ],
  completa: [
    "Le articolazioni mobili si chiamano {diartrosi}.",
    "I {legamenti} uniscono un osso all'altro.",
    "La spalla è stabilizzata dalla cuffia dei {rotatori}.",
    "Il ginocchio è ammortizzato dai {menischi}."
  ]
};

GAMES["sistema-muscolare"] = {
  quiz: [
    ["Quale tessuto muscolare è striato e volontario?", ["Liscio", "Cardiaco", "Scheletrico", "Nessuno"], 2, "Il cardiaco è striato ma involontario, il liscio è involontario."],
    ["L'unità contrattile del muscolo è…", ["Il sarcomero", "Il tendine", "L'osteone", "Il neurone"], 0, "Contiene i filamenti di actina e miosina."],
    ["Quale ione avvia la contrazione nella fibra muscolare?", ["Sodio", "Calcio", "Ferro", "Potassio"], 1, "Viene liberato dal reticolo sarcoplasmatico."],
    ["L'unità motoria è formata da…", ["Un muscolo e un tendine", "Un motoneurone e le fibre che innerva", "Due muscoli antagonisti", "Un osso e un muscolo"], 1, "Unità piccole per i movimenti fini, grandi per quelli di forza."],
    ["Le fibre di tipo I sono…", ["Rapide e affaticabili", "Lente, ossidative e resistenti alla fatica", "Prive di mitocondri", "Presenti solo nei velocisti"], 1, "Sono le fibre rosse, tipiche degli sforzi di lunga durata."],
    ["Durante una discesa delle scale il quadricipite lavora in modo…", ["Concentrico", "Eccentrico", "Isometrico", "Passivo"], 1, "Si allunga mentre è in tensione e frena il movimento."],
    ["Nel curl con manubrio il muscolo antagonista è…", ["Bicipite brachiale", "Tricipite brachiale", "Deltoide", "Trapezio"], 1, "Il bicipite flette il gomito (agonista), il tricipite lo estende."],
    ["Secondo il principio della dimensione (Henneman) si reclutano prima…", ["Le unità motorie grandi e rapide", "Le unità motorie piccole e lente", "Tutte insieme", "A caso"], 1, "All'aumentare della forza richiesta si aggiungono le unità più grandi."]
  ],
  vf: [
    ["Il muscolo può solo tirare, non spingere.", true, "Per questo lavora sempre in coppia con un antagonista."],
    ["Nella contrazione isometrica la lunghezza del muscolo non cambia.", true, "Esempio: il plank."],
    ["Il cuore è un muscolo liscio.", false, "È muscolo cardiaco: striato ma involontario."],
    ["L'ATP serve sia per la contrazione sia per il rilassamento.", true, "Serve a staccare la miosina dall'actina."],
    ["L'ipertrofia è l'aumento del numero di fibre muscolari.", false, "È l'aumento del volume delle fibre; l'aumento del numero si chiama iperplasia."],
    ["I tendini collegano i muscoli alle ossa.", true, "Trasmettono la forza del muscolo allo scheletro."]
  ],
  flash: [
    ["Sarcomero", "Unità contrattile della fibra, compresa tra due linee Z."],
    ["Actina e miosina", "Filamenti proteici che scorrono uno sull'altro durante la contrazione."],
    ["Unità motoria", "Motoneurone più tutte le fibre muscolari che innerva."],
    ["Contrazione concentrica", "Il muscolo si accorcia mentre produce forza."],
    ["Contrazione eccentrica", "Il muscolo si allunga mentre produce forza (frena)."],
    ["Contrazione isometrica", "Il muscolo produce forza senza cambiare lunghezza."],
    ["Fibre tipo I", "Lente, rosse, ossidative, resistenti alla fatica."],
    ["Fibre tipo II", "Rapide, bianche, glicolitiche, potenti ma affaticabili."]
  ],
  abbina: [
    ["Agonista", "Muscolo che compie il movimento"],
    ["Antagonista", "Muscolo che si oppone al movimento"],
    ["Sinergico", "Muscolo che aiuta l'agonista"],
    ["Plank", "Contrazione isometrica"],
    ["Squat in discesa", "Contrazione eccentrica"],
    ["Calcio", "Avvia la contrazione"]
  ],
  completa: [
    "L'unità contrattile del muscolo è il {sarcomero}.",
    "I filamenti di {actina} e {miosina} scorrono uno sull'altro.",
    "Nella contrazione {isometrica} il muscolo non cambia lunghezza.",
    "Le fibre di tipo {I} resistono meglio alla fatica."
  ]
};
