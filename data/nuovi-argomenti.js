/* =========================================================
   NUOVI ARGOMENTI — giochi, schemi e laboratorio per
   «Le capacità coordinative» (terza), «L'apprendimento motorio» (quarta) e «Il primo soccorso» (seconda).
   Formati identici a giochi-*.js, schemi.js e laboratori.js.
   ========================================================= */
window.GAMES = window.GAMES || {};
window.SCHEMI = window.SCHEMI || {};
window.LAB = window.LAB || {};

/* ---------------- LE CAPACITÀ COORDINATIVE ---------------- */
GAMES["le-capacita-coordinative"] = {
  quiz: [
    ["Da quale sistema dipendono soprattutto le capacità coordinative?", ["Dal sistema digerente", "Dal sistema nervoso", "Dal sistema endocrino", "Dall'apparato respiratorio"], 1, "Il sistema nervoso organizza, regola e controlla il movimento."],
    ["Quale di queste è una capacità condizionale?", ["Equilibrio", "Ritmo", "Resistenza", "Orientamento"], 2, "Forza, resistenza e velocità dipendono da muscoli ed energia: sono condizionali."],
    ["Ritrarre la mano da una pentola che scotta è un movimento…", ["Volontario", "Riflesso", "Automatizzato", "Programmato"], 1, "Il riflesso è involontario e velocissimo: parte prima che tu ci pensi."],
    ["Andare in bici parlando con un amico è un esempio di movimento…", ["Riflesso", "Volontario", "Automatizzato", "Casuale"], 2, "Il gesto è stato appreso e ripetuto: non serve più pensarci."],
    ["Quale organo integra le informazioni per l'equilibrio?", ["Il cervelletto", "Il fegato", "Il midollo osseo", "La tiroide"], 0, "Il cervelletto unisce le informazioni di vista, orecchio interno, tatto e propriocettori."],
    ["Per essere più stabile devi…", ["Stringere la base e alzarti sulle punte", "Allargare la base e abbassare il baricentro", "Chiudere gli occhi", "Guardare in basso i piedi"], 1, "Base larga e baricentro basso aumentano la stabilità."],
    ["Dosare la forza per un passaggio corto o lungo è la capacità di…", ["Orientamento", "Differenziazione", "Reazione", "Ritmo"], 1, "Differenziare significa regolare con precisione forza, ampiezza e velocità del gesto."],
    ["Quale senso fornisce più informazioni durante il movimento?", ["Udito", "Tatto", "Vista", "Olfatto"], 2, "La vista fornisce oltre l'80% delle informazioni."],
    ["La propriocezione ti permette di…", ["Sentire gli odori", "Sapere dove sono le parti del corpo anche a occhi chiusi", "Vedere a colori", "Digerire meglio"], 1, "Recettori in muscoli, tendini e articolazioni informano il cervello sulla posizione del corpo."],
    ["Nella fase di coordinazione grezza il gesto è…", ["Fluido e preciso", "Rigido, lento e con molti errori", "Automatico", "Adattabile a ogni situazione"], 1, "È la prima fase: serve molta attenzione e il gesto è ancora impreciso."],
    ["«Il gomito era basso» è un feedback di…", ["Conoscenza del risultato", "Conoscenza della prestazione", "Anticipazione", "Transfer"], 1, "Descrive come è stato eseguito il gesto e suggerisce la correzione."],
    ["Quando conviene allenare la coordinazione in una lezione?", ["Alla fine, quando sei stanco", "All'inizio, quando sei fresco", "Mai insieme alla forza", "Solo d'estate"], 1, "Il sistema nervoso apprende meglio senza fatica."]
  ],
  vf: [
    ["Le capacità coordinative sono qualitative.", true, "Riguardano la qualità del movimento, non la quantità di forza o energia."],
    ["L'equilibrio può essere solo statico.", false, "Esiste anche quello dinamico e quello in volo o in rotazione."],
    ["La finta serve a dare all'avversario un indizio falso.", true, "Lui anticipa nella direzione sbagliata e tu guadagni tempo."],
    ["Un gesto imparato non può mai disturbare l'apprendimento di un altro.", false, "Può succedere: è il transfer negativo."],
    ["Il feedback esterno arriva da un insegnante, un video o un compagno.", true, "Quello interno sono le tue sensazioni."],
    ["La fantasia motoria è inventare soluzioni nuove ed efficaci.", true, "È la giocata che sorprende."],
    ["Il ritmo riguarda solo la musica.", false, "Ogni gesto sportivo ha il suo ritmo, come la rincorsa del salto."],
    ["Le capacità coordinative migliorano solo da bambini.", false, "Crescono molto tra i 7 e i 13 anni, ma migliorano a ogni età."]
  ],
  flash: [
    ["Capacità coordinative", "Capacità che dipendono dal sistema nervoso e rendono il movimento preciso ed economico."],
    ["Destrezza", "Eseguire il gesto giusto in modo preciso, veloce ed economico."],
    ["Coordinazione intersegmentaria", "Muovere braccia e gambe in combinazioni diverse: uguali, crociate, indipendenti."],
    ["Differenziazione", "Dosare forza, ampiezza e velocità del gesto."],
    ["Orientamento", "Sapere dove sei rispetto a spazio, compagni e palla."],
    ["Reazione", "Rispondere rapidamente a un segnale, semplice o a scelta."],
    ["Propriocezione", "Senso della posizione e del movimento del corpo."],
    ["Anticipazione", "Prevedere dove e quando avverrà un evento, come l'arrivo della palla."],
    ["Programma motorio", "Schema del gesto con una parte fissa (sequenza) e una variabile (forza, velocità)."],
    ["Disponibilità variabile", "Ultima fase dell'apprendimento: il gesto riesce in ogni situazione."]
  ],
  abbina: [
    ["Equilibrio", "Mantenere una posizione stabile"], ["Ritmo", "Il tempo giusto del gesto"], ["Reazione", "Rispondere a un segnale"],
    ["Orientamento", "Sapere dove sei nello spazio"], ["Combinazione", "Unire più movimenti in uno"], ["Differenziazione", "Dosare la forza"],
    ["Fantasia motoria", "Inventare soluzioni nuove"], ["Cervelletto", "Regola l'equilibrio"]
  ],
  completa: [
    "Le capacità {coordinative} dipendono dal sistema nervoso.",
    "Per essere stabile allarga la {base} d'appoggio.",
    "Il {feedback} dice se il gesto è riuscito.",
    "La {propriocezione} informa sulla posizione del corpo.",
    "La prima fase dell'apprendimento è la coordinazione {grezza}.",
    "Un gesto ripetuto tante volte diventa {automatizzato}."
  ],
  ordina: [
    ["Dal segnale al gesto", ["I sensi raccolgono le informazioni", "Il cervello le elabora e decide", "I muscoli eseguono", "Il feedback controlla il risultato"]],
    ["Le fasi dell'apprendimento motorio", ["Coordinazione grezza", "Coordinazione fine", "Disponibilità variabile"]]
  ],
  gruppi: ["Condizionale o coordinativa?", [
    ["Condizionali", ["Forza", "Resistenza", "Velocità"]],
    ["Coordinative", ["Equilibrio", "Ritmo", "Orientamento", "Differenziazione"]]
  ]]
};

SCHEMI["le-capacita-coordinative"] = [
  { tipo: "compare", titolo: "Le capacità motorie", colonne: [
    { nome: "Condizionali", sotto: "quantitative · muscoli ed energia", voci: ["Forza", "Resistenza", "Velocità", "Mobilità articolare (di confine)"] },
    { nome: "Coordinative generali", sotto: "la base", voci: ["Apprendimento motorio", "Controllo motorio", "Adattamento e trasformazione"] },
    { nome: "Coordinative speciali", sotto: "qualitative · sistema nervoso", voci: ["Combinazione", "Differenziazione", "Orientamento", "Ritmo", "Reazione", "Equilibrio", "Fantasia motoria"] }
  ] },
  { tipo: "cycle", titolo: "Il controllo motorio", voci: [
    ["Sistema percettivo", "Vista, udito, tatto e propriocezione raccolgono le informazioni."],
    ["Sistema elaborativo", "Il cervello confronta con la memoria e sceglie la risposta."],
    ["Sistema effettore", "I muscoli eseguono il programma motorio."],
    ["Sistema di controllo", "Il feedback confronta il risultato con l'obiettivo e corregge il gesto successivo."]
  ] },
  { tipo: "flow", titolo: "Le fasi dell'apprendimento", voci: [
    ["Coordinazione grezza", "Gesto rigido e lento, tanti errori, serve molta attenzione."],
    ["Coordinazione fine", "Gesto preciso e fluido in condizioni note."],
    ["Disponibilità variabile", "Il gesto riesce in ogni situazione, anche sotto pressione."]
  ] },
  { tipo: "hub", titolo: "Le forme dell'equilibrio", centro: "Equilibrio", voci: [
    ["Statico", "Mantenere una posizione ferma, come la candela o l'appoggio monopodalico."],
    ["Dinamico", "Durante lo spostamento: trave, slackline, pattini."],
    ["In volo e in rotazione", "Salti, capriole, tuffi: riorientarsi in aria."],
    ["Chi lo regola", "Il cervelletto, con vista, orecchio interno, tatto e propriocettori."],
    ["Come migliorarlo", "Base larga, baricentro basso, schiena allineata, sguardo su un punto fisso."]
  ] }
];

LAB["le-capacita-coordinative"] = [
  { t: "tool", tool: "equilibrio" },
  { t: "tool", tool: "reazione" },
  { t: "esperienza", titolo: "Il percorso delle sette capacità", dove: "in palestra", tempo: "1 lezione", obiettivo: "Riconoscere in pratica le capacità coordinative speciali.", materiale: ["Coni", "Cerchi", "Palloni di diverso peso", "Funicelle", "Panca o trave bassa"], passi: ["A coppie, preparate sette stazioni, una per capacità.", "Equilibrio: cammina sulla panca, poi a occhi semichiusi.", "Ritmo: corsa nei cerchi con passi a tempo (1-2-3, 1-2).", "Differenziazione: lancia nel cerchio a 3, 6 e 9 metri.", "Reazione: il compagno lascia cadere la palla, tu la prendi.", "Orientamento: dopo 3 giri su te stesso, corri al cono del colore chiamato.", "Combinazione: palleggia correndo a slalom.", "Fantasia: inventa un modo nuovo di superare l'ostacolo."], osserva: ["In quale stazione hai fatto più fatica? Perché?", "Che cosa è cambiato quando hai tolto la vista?"] },
  { t: "esperienza", titolo: "Impara un gesto nuovo e osserva le fasi", dove: "in palestra o a casa", tempo: "10 minuti al giorno per una settimana", obiettivo: "Riconoscere su di sé le fasi dell'apprendimento motorio.", materiale: ["Tre palline", "Quaderno"], passi: ["Scegli un gesto nuovo: la giocoleria con tre palline, il palleggio con la mano debole, un passo di danza.", "Primo giorno: annota quanti errori fai in un minuto.", "Ripeti ogni giorno per dieci minuti, sempre a inizio allenamento.", "Ultimo giorno: rifai il test e prova anche mentre un compagno ti parla."], osserva: ["Riconosci la fase grezza e quella fine?", "Quale feedback ti è servito di più: le tue sensazioni o le correzioni di un compagno?"] }
];

/* ---------------- IL PRIMO SOCCORSO ---------------- */
GAMES["il-primo-soccorso"] = {
  quiz: [
    ["Qual è la prima cosa da fare davanti a una persona a terra?", ["Spostarla subito", "Controllare che la scena sia sicura", "Darle da bere", "Fotografare la scena"], 1, "Prima di tutto la sicurezza: non devi diventare la seconda vittima."],
    ["Qual è il numero unico di emergenza?", ["113", "118", "112", "911"], 2, "Il 112 smista la chiamata ai soccorsi giusti."],
    ["La persona non risponde e non respira normalmente. Che cosa fai dopo aver chiamato il 112?", ["La metti in posizione laterale di sicurezza", "Inizi le compressioni toraciche", "Le sollevi le gambe", "Aspetti in silenzio"], 1, "È un arresto cardiaco: ogni minuto senza compressioni conta."],
    ["A che frequenza si fanno le compressioni toraciche?", ["40–60 al minuto", "60–80 al minuto", "100–120 al minuto", "150–180 al minuto"], 2, "È il ritmo di canzoni come «Stayin' Alive»."],
    ["Quanto deve abbassarsi il torace di un adulto?", ["1–2 cm", "5–6 cm", "10–12 cm", "Non importa"], 1, "Spingi forte e lascia risalire il torace del tutto."],
    ["Dove si mettono le mani per le compressioni?", ["Sulla pancia", "Al centro del torace, sulla metà inferiore dello sterno", "Sul lato sinistro del petto", "Sul collo"], 1, "Al centro del torace, braccia tese."],
    ["La persona respira ma non è cosciente. Che cosa fai?", ["La fai sedere", "Le dai acqua", "La metti in posizione laterale di sicurezza", "Inizi le compressioni"], 2, "La posizione laterale tiene libere le vie aeree."],
    ["Chi può usare un defibrillatore automatico (DAE)?", ["Solo i medici", "Solo gli infermieri", "Chiunque, seguendo le istruzioni vocali", "Nessuno senza patente"], 2, "Il DAE analizza il ritmo e guida l'utente con la voce."],
    ["Un compagno tossisce forte per un boccone di traverso. Che cosa fai?", ["Gli dai subito pacche sulla schiena", "Lo incoraggi a tossire", "Gli dai da bere", "Fai la manovra di Heimlich"], 1, "Finché tossisce efficacemente, la tosse è la cosa migliore."],
    ["Che cosa significa la «I» di RICE?", ["Immobilità", "Ice, ghiaccio", "Iniezione", "Ispezione"], 1, "Rest, Ice, Compression, Elevation."],
    ["Il naso sanguina. Come si tiene la testa?", ["All'indietro", "In avanti", "Di lato", "Sdraiati supini"], 1, "Testa in avanti e narici strette per 10 minuti: il sangue non va in gola."],
    ["Una lussazione della spalla va…", ["Rimessa a posto subito", "Massaggiata", "Immobilizzata così com'è", "Scaldata"], 2, "Rimetterla a posto può danneggiare vasi e nervi."],
    ["Su un'ustione recente metti…", ["Olio o burro", "Ghiaccio diretto", "Acqua corrente fresca per 10–20 minuti", "Pomata subito"], 2, "L'acqua fresca ferma il danno; niente pomate né bolle rotte."]
  ],
  vf: [
    ["Non soccorrere una persona in pericolo è un reato.", true, "È l'omissione di soccorso: il minimo è chiamare il 112."],
    ["Chi è svenuto deve bere subito un bicchiere d'acqua.", false, "Mai dare da bere a chi non è del tutto cosciente: può soffocare."],
    ["Se non te la senti di fare le ventilazioni, fai solo le compressioni.", true, "Le compressioni continue sono comunque efficaci."],
    ["Sul trauma recente di una caviglia va messo calore.", false, "Ghiaccio nelle prime 48 ore: il calore aumenta il gonfiore."],
    ["Il ghiaccio va avvolto in un panno.", true, "A contatto diretto può ustionare la pelle."],
    ["Durante l'analisi del DAE nessuno deve toccare la persona.", true, "Il movimento disturba l'analisi e la scarica è pericolosa per chi tocca."],
    ["In caso di avvelenamento bisogna far vomitare.", false, "Si chiama il 112 o il Centro antiveleni: il vomito può peggiorare il danno."],
    ["Una frattura si immobilizza anche nelle articolazioni sopra e sotto.", true, "Così l'osso rotto non si muove."]
  ],
  flash: [
    ["Omissione di soccorso", "Reato di chi non presta aiuto o non chiama i soccorsi."],
    ["112", "Numero unico europeo di emergenza."],
    ["RCP", "Rianimazione cardiopolmonare: compressioni toraciche e ventilazioni."],
    ["DAE", "Defibrillatore automatico esterno: analizza il ritmo e, se serve, dà la scarica."],
    ["Posizione laterale di sicurezza", "Posizione su un fianco per chi respira ma non è cosciente."],
    ["Manovra di Heimlich", "Compressioni addominali per liberare le vie aeree da un corpo estraneo."],
    ["RICE", "Rest, Ice, Compression, Elevation: protocollo per i traumi muscolari e articolari."],
    ["Distorsione", "Torsione dell'articolazione con sollecitazione dei legamenti."],
    ["Lussazione", "Perdita di contatto tra i capi articolari."],
    ["Shock", "Grave calo di sangue e ossigeno agli organi: pallore, sudore freddo, polso rapido."]
  ],
  abbina: [
    ["Arresto cardiaco", "Compressioni toraciche"], ["Respira ma incosciente", "Posizione laterale"], ["Soffocamento", "Colpi tra le scapole"],
    ["Distorsione", "RICE"], ["Ustione", "Acqua corrente fresca"], ["Epistassi", "Testa in avanti"],
    ["Emorragia", "Compressione diretta"], ["Colpo di calore", "Ombra e raffreddare"]
  ],
  completa: [
    "Il numero unico di emergenza è il {112}.",
    "Le compressioni si fanno a 100–120 al {minuto}.",
    "Il rapporto è 30 compressioni e 2 {ventilazioni}.",
    "Il {DAE} si usa seguendo le istruzioni vocali.",
    "Su una distorsione si applica il protocollo {RICE}.",
    "Il naso che sanguina: testa in {avanti}."
  ],
  ordina: [
    ["Il codice di comportamento", ["Controllare che la scena sia sicura", "Valutare se la persona risponde", "Chiamare il 112", "Intervenire con ciò che si sa fare"]],
    ["Davanti a un arresto cardiaco", ["Chiami e non risponde", "Non respira normalmente", "Chiami il 112 e fai portare un DAE", "Compressioni toraciche", "Applichi il DAE e segui la voce"]]
  ],
  gruppi: ["Emergenza o urgenza?", [
    ["Emergenza", ["Arresto cardiaco", "Soffocamento completo", "Emorragia grave"]],
    ["Urgenza", ["Frattura del polso", "Distorsione di caviglia", "Ferita da cucire"]]
  ]]
};

SCHEMI["il-primo-soccorso"] = [
  { tipo: "flow", titolo: "Il codice di comportamento", voci: [
    ["Sicurezza", "Controlla traffico, corrente, fuoco: non diventare la seconda vittima."],
    ["Valuta", "Chiamalo e scuotilo piano: risponde? Respira normalmente?"],
    ["Chiama il 112", "Dove, che cosa, quante persone, come stanno, il tuo numero."],
    ["Intervieni", "RCP, posizione laterale, compressione di una ferita: solo ciò che sai fare."]
  ] },
  { tipo: "compare", titolo: "Risponde? Respira?", colonne: [
    { nome: "Cosciente", sotto: "parla e risponde", voci: ["Rassicuralo", "Non spostarlo se ha traumi", "Coprilo", "Controlla e aspetta i soccorsi"] },
    { nome: "Incosciente, respira", sotto: "torace che si muove", voci: ["Posizione laterale di sicurezza", "Chiama il 112", "Ricontrolla il respiro di continuo"] },
    { nome: "Incosciente, non respira", sotto: "arresto cardiaco", voci: ["112 in vivavoce", "Compressioni 100–120 al minuto", "30:2 o solo compressioni", "DAE appena arriva"] }
  ] },
  { tipo: "bars", titolo: "Ogni minuto conta (valori indicativi)", voci: [
    ["Subito", 90, "RCP + DAE", "Le probabilità di sopravvivere sono massime."],
    ["Dopo 3 minuti", 70, "", "Il cervello inizia a soffrire per la mancanza di ossigeno."],
    ["Dopo 5 minuti", 50, "", "Senza RCP le possibilità si dimezzano."],
    ["Dopo 10 minuti", 10, "", "Senza nessun intervento sopravvive quasi nessuno."]
  ] },
  { tipo: "hub", titolo: "Traumi in palestra", centro: "Trauma", voci: [
    ["Contusione", "Ghiaccio e riposo."],
    ["Crampo", "Allunga piano il muscolo e massaggia."],
    ["Stiramento e strappo", "RICE, niente massaggio, visita medica."],
    ["Distorsione", "RICE e immobilizzazione."],
    ["Lussazione e frattura", "Immobilizza così com'è e chiama i soccorsi."]
  ] }
];

LAB["il-primo-soccorso"] = [
  { t: "tool", tool: "rcp" },
  { t: "tool", tool: "chiamata" },
  { t: "esperienza", titolo: "La posizione laterale di sicurezza", dove: "in palestra, sui materassi", tempo: "20 minuti", obiettivo: "Saper mettere in posizione laterale di sicurezza un compagno in tre passaggi.", materiale: ["Materassini"], passi: ["Il compagno è supino. Ti inginocchi al suo fianco.", "Il braccio vicino a te va ad angolo retto, con il palmo verso l'alto.", "Porta il braccio lontano sul petto e appoggia il dorso della sua mano sulla guancia vicino a te.", "Piega il ginocchio lontano, con il piede a terra.", "Tenendo mano e ginocchio, giralo verso di te.", "Sistema la gamba in alto ad angolo retto e inclina la testa indietro, bocca verso terra.", "Scambiatevi i ruoli e cronometrate: entro 30 secondi?"], osserva: ["Perché la bocca deve essere rivolta verso terra?", "Che cosa controlli dopo averlo girato?"], sicurezza: "Movimenti lenti: è un'esercitazione, il compagno collabora." },
  { t: "esperienza", titolo: "Il kit di primo soccorso della palestra", dove: "in palestra", tempo: "15 minuti", obiettivo: "Sapere dove si trovano e a che cosa servono gli strumenti di soccorso.", materiale: ["Cassetta di primo soccorso della scuola"], passi: ["Con l'insegnante, apri la cassetta e fai l'elenco di ciò che contiene.", "Per ogni oggetto scrivi a che cosa serve: guanti, garze sterili, bende, ghiaccio istantaneo, disinfettante, forbici.", "Cerca nella scuola il DAE e il cartello verde che lo segnala.", "Disegna la piantina con il percorso più veloce dalla palestra al DAE."], osserva: ["Quanto tempo serve per andare a prendere il DAE?", "Chi lo va a prendere mentre tu fai le compressioni?"] }
];

/* ---------------- L'APPRENDIMENTO MOTORIO (quarta) ---------------- */
GAMES["l-apprendimento-motorio"] = {
  quiz: [
    ["Che cosa si intende per apprendimento motorio?", ["Riuscire un gesto una volta", "Un cambiamento relativamente stabile nel saper eseguire un gesto, frutto della pratica", "Aumentare la forza muscolare", "Ricordare le regole di uno sport"], 1, "L'apprendimento è stabile nel tempo; una prova riuscita è solo prestazione."],
    ["Come si verifica davvero che un gesto è stato appreso?", ["Con una prova subito dopo l'allenamento", "Con test di ritenzione e di transfer", "Chiedendo all'allievo", "Misurando la frequenza cardiaca"], 1, "Ritenzione: giorni dopo. Transfer: in una situazione nuova."],
    ["Uno smash a pallavolo è guidato soprattutto…", ["Ad anello chiuso", "Ad anello aperto", "Dal sistema endocrino", "Dal riflesso rotuleo"], 1, "È troppo rapido per essere corretto durante l'esecuzione."],
    ["Restare in equilibrio su una trave è un controllo…", ["Ad anello aperto", "Ad anello chiuso", "Riflesso", "Casuale"], 1, "Le informazioni dei sensi correggono di continuo la posizione."],
    ["Chi ha proposto la teoria dello schema e il programma motorio generalizzato?", ["Adams", "Schmidt", "Fitts", "Pavlov"], 1, "R. A. Schmidt, 1975."],
    ["Nel programma motorio generalizzato resta invariato…", ["La durata totale del gesto", "La forza totale", "L'ordine delle fasi e il ritmo interno", "La mano che usi"], 2, "Durata, forza e segmento sono parametri che puoi cambiare."],
    ["Secondo Bernstein il principiante…", ["Usa tutte le articolazioni liberamente", "Blocca molte articolazioni e muove il corpo «a pezzi»", "Non ha bisogno di feedback", "È già nella fase autonoma"], 1, "Riduce i gradi di libertà per avere meno cose da controllare."],
    ["Le fasi di Fitts e Posner sono…", ["Grezza, fine, variabile", "Cognitiva, associativa, autonoma", "Allarme, resistenza, esaurimento", "Carico, recupero, supercompensazione"], 1, "Corrispondono a grezza, fine e disponibilità variabile di Meinel e Schnabel."],
    ["In quale memoria si conservano i gesti come andare in bici?", ["Sensoriale", "A breve termine", "Procedurale", "Dichiarativa"], 2, "È la memoria del saper fare."],
    ["Un feedback dato dopo ogni singola prova…", ["È sempre il migliore", "Può creare dipendenza dall'insegnante", "Non ha effetti", "Serve solo ai principianti esperti"], 1, "Meglio ridurlo gradualmente e lasciare spazio all'autovalutazione."],
    ["Alternare in modo casuale gesti diversi durante la seduta…", ["Peggiora l'apprendimento", "Peggiora un po' la prestazione subito ma migliora l'apprendimento", "Non cambia nulla", "Va bene solo per i professionisti"], 1, "È l'effetto dell'interferenza contestuale."],
    ["«Manda la palla dentro il canestro» è un esempio di…", ["Focus interno", "Focus esterno", "Feedback intrinseco", "Transfer negativo"], 1, "L'attenzione è sull'effetto del gesto, non sul corpo."],
    ["I neuroni specchio si attivano…", ["Solo quando dormi", "Quando agisci e quando osservi qualcuno agire", "Solo durante la corsa", "Solo nei bambini"], 1, "Scoperti dal gruppo di G. Rizzolatti a Parma."],
    ["Nell'approccio ecologico l'insegnante soprattutto…", ["Spiega ogni dettaglio tecnico", "Modifica i vincoli di compito e ambiente", "Corregge ogni errore", "Fa ripetere sempre lo stesso esercizio"], 1, "Campo, attrezzo e regole fanno emergere il gesto adatto."]
  ],
  vf: [
    ["Prestazione e apprendimento sono la stessa cosa.", false, "La prestazione è ciò che vedi oggi; l'apprendimento è ciò che resta."],
    ["Un gesto che dura meno di due decimi di secondo non può essere corretto mentre avviene.", true, "Il feedback non fa in tempo: il gesto è ad anello aperto."],
    ["Secondo Schmidt nella memoria è salvato ogni singolo gesto possibile.", false, "C'è un programma generale con regole per adattarlo."],
    ["La pratica variata rinforza lo schema motorio.", true, "Variare forza, distanza e direzione rende il gesto adattabile."],
    ["Il sonno aiuta a consolidare i gesti praticati.", true, "Durante la notte il cervello consolida l'apprendimento."],
    ["Il focus interno sul corpo dà quasi sempre i risultati migliori.", false, "Di solito il focus esterno porta a gesti più fluidi."],
    ["L'immaginazione motoria può sostituire del tutto la pratica.", false, "Aiuta, soprattutto se unita alla pratica reale."],
    ["Allenare una mano può migliorare un po' anche l'altra.", true, "È il transfer bilaterale."]
  ],
  flash: [
    ["Apprendimento motorio", "Cambiamento relativamente stabile nel saper eseguire un gesto, dovuto a pratica ed esperienza."],
    ["Test di ritenzione", "Verifica del gesto dopo un periodo senza pratica."],
    ["Anello aperto", "Controllo senza correzioni durante il gesto: gesti rapidi."],
    ["Anello chiuso", "Controllo con feedback che corregge durante il gesto: gesti lenti e precisi."],
    ["Programma motorio generalizzato", "Programma con parti fisse (ordine, ritmo) e parametri variabili (durata, forza, segmento)."],
    ["Gradi di libertà", "I tanti modi in cui articolazioni e muscoli possono realizzare un gesto (Bernstein)."],
    ["Interferenza contestuale", "Alternare compiti diversi rende la seduta più difficile ma l'apprendimento più solido."],
    ["Focus esterno", "Attenzione sull'effetto del gesto, non sui movimenti del corpo."],
    ["Conoscenza della prestazione", "Feedback su come è stato eseguito il gesto."],
    ["Vincoli di Newell", "Individuo, compito e ambiente: insieme determinano il movimento."]
  ],
  abbina: [
    ["Adams", "Teoria del circuito chiuso"], ["Schmidt", "Teoria dello schema"], ["Bernstein", "Gradi di libertà"],
    ["Fitts e Posner", "Fasi cognitiva, associativa, autonoma"], ["Wulf", "Focus esterno"], ["Rizzolatti", "Neuroni specchio"],
    ["Newell", "Vincoli individuo-compito-ambiente"], ["Gibson", "Affordance"]
  ],
  completa: [
    "I gesti rapidi sono controllati ad anello {aperto}.",
    "Schmidt parla di programma motorio {generalizzato}.",
    "La seconda fase di Fitts e Posner è quella {associativa}.",
    "I gesti si conservano nella memoria {procedurale}.",
    "Pensare all'effetto del gesto è un focus {esterno}.",
    "L'apprendimento si verifica con test di ritenzione e di {transfer}."
  ],
  ordina: [
    ["Le fasi di Fitts e Posner", ["Cognitiva", "Associativa", "Autonoma"]],
    ["Il feedback che si riduce", ["Correzione dopo ogni prova", "Correzione ogni due o tre prove", "L'allievo si autovaluta e chiede il feedback", "Il gesto si autocorregge da solo"]]
  ],
  gruppi: ["Anello aperto o anello chiuso?", [
    ["Anello aperto", ["Smash", "Pugno nel pugilato", "Battuta al tennis"]],
    ["Anello chiuso", ["Equilibrio sulla trave", "Infilare un ago", "Camminare sulla slackline"]]
  ]]
};

SCHEMI["l-apprendimento-motorio"] = [
  { tipo: "compare", titolo: "Le teorie dell'apprendimento motorio", colonne: [
    { nome: "Adams (1971)", sotto: "circuito chiuso", voci: ["Traccia mnestica: avvia il gesto", "Traccia percettiva: come deve sentirsi", "Si impara riducendo l'errore", "Poco adatta ai gesti rapidi"] },
    { nome: "Schmidt (1975)", sotto: "teoria dello schema", voci: ["Programma motorio generalizzato", "Parti fisse e parametri variabili", "Schemi di richiamo e di riconoscimento", "La pratica variata rinforza lo schema"] },
    { nome: "Approccio ecologico", sotto: "Bernstein, Gibson, Newell", voci: ["Gradi di libertà", "Affordance", "Vincoli: individuo, compito, ambiente", "L'allievo esplora soluzioni"] }
  ] },
  { tipo: "flow", titolo: "Le fasi: due modelli a confronto", voci: [
    ["Cognitiva · coordinazione grezza", "Capisci il compito, pensi a ogni dettaglio, gesto rigido e con molti errori."],
    ["Associativa · coordinazione fine", "Colleghi le parti, errori in calo, gesto fluido in condizioni note."],
    ["Autonoma · disponibilità variabile", "Gesto automatico e adattabile, mente libera per le scelte di gioco."]
  ] },
  { tipo: "hub", titolo: "Come favorire l'apprendimento", centro: "Apprendere", voci: [
    ["Pratica variata e casuale", "Più difficile durante la seduta, più solida nel tempo."],
    ["Pratica distribuita", "Meglio più sedute brevi che una lunghissima."],
    ["Feedback ridotto", "Diminuirlo man mano e lasciare spazio all'autovalutazione."],
    ["Focus esterno", "Attenzione sull'effetto del gesto."],
    ["Osservazione e immaginazione", "Dimostrazioni, video, ripasso mentale del gesto."]
  ] },
  { tipo: "cycle", titolo: "Il controllo ad anello chiuso", voci: [
    ["Obiettivo", "Che cosa voglio ottenere con il gesto."],
    ["Esecuzione", "Il programma motorio arriva ai muscoli."],
    ["Feedback", "Vista, propriocettori e tatto informano su come sta andando."],
    ["Confronto e correzione", "Il cervello confronta con l'obiettivo e corregge."]
  ] }
];

LAB["l-apprendimento-motorio"] = [
  { t: "tool", tool: "reazione" },
  { t: "esperienza", titolo: "A blocchi o casuale?", dove: "in palestra", tempo: "2 lezioni a distanza di una settimana", obiettivo: "Verificare su di voi l'effetto dell'interferenza contestuale.", materiale: ["Palloni da basket o da pallavolo", "Coni per segnare tre distanze", "Foglio per i risultati"], passi: ["Dividete la classe in due gruppi con livello simile.", "Gruppo A, a blocchi: 10 tiri da vicino, poi 10 da media distanza, poi 10 da lontano.", "Gruppo B, casuale: gli stessi 30 tiri, ma la distanza cambia a ogni tiro.", "Annotate i canestri di ciascuno durante la seduta.", "Una settimana dopo, senza allenarsi in mezzo, rifate tutti lo stesso test casuale."], osserva: ["Quale gruppo ha segnato di più durante la prima seduta?", "Quale gruppo ha fatto meglio una settimana dopo? Come lo spieghi?"] },
  { t: "esperienza", titolo: "Focus interno o esterno?", dove: "in palestra", tempo: "20 minuti", obiettivo: "Sentire la differenza tra pensare al corpo e pensare all'effetto.", materiale: ["Palline da tennis o sacchetti", "Un cerchio a terra a 4 metri"], passi: ["A coppie: 10 lanci nel cerchio pensando al braccio («distendi il gomito, chiudi il polso»).", "Altri 10 lanci pensando solo alla traiettoria («disegna un arco che finisce nel cerchio»).", "Il compagno conta i centri e osserva quanto è fluido il gesto.", "Invertite i ruoli e cambiate l'ordine delle due prove."], osserva: ["Con quale istruzione hai fatto più centri?", "Quale istruzione ti ha fatto sentire più rigido?"] },
  { t: "esperienza", titolo: "La firma e il programma motorio", dove: "in classe", tempo: "10 minuti", obiettivo: "Riconoscere parti fisse e parametri del programma motorio generalizzato.", materiale: ["Fogli", "Penna", "Lavagna"], passi: ["Scrivi la tua firma normale sul foglio.", "Scrivila molto piccola, poi molto grande alla lavagna.", "Prova con la mano non dominante e infine con la penna tra le dita del piede, su un foglio a terra.", "Confronta le firme."], osserva: ["Che cosa resta uguale in tutte le firme?", "Quali parametri sono cambiati?"] }
];
