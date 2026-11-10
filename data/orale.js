/* =========================================================
   VERSO L'ORALE — classe quinta
   Sei percorsi pluridisciplinari in cui le Scienze motorie
   si collegano alle altre discipline, la guida per costruire
   un collegamento e lo schema della relazione FSL (Formazione scuola-lavoro).
   Testi originali del prof. A. Bertelli, a partire dagli spunti
   della guida per l'insegnante del libro di testo.
   ========================================================= */
window.ORALE = {
  intro: "All'esame il colloquio parte da un materiale scelto dalla commissione: un'immagine, una frase, un grafico. Il tuo compito è riconoscere il tema e collegare le discipline con un ragionamento personale, non recitare un elenco. Qui trovi sei percorsi in cui il corpo e lo sport diventano un punto di vista sul mondo.",
  percorsi: [
    {
      id: "limite",
      titolo: "La scoperta del limite",
      idea: "Perché l'essere umano cerca il rischio e la vertigine? Dall'alpinismo all'apnea, lo sport è un laboratorio in cui si misura il confine tra coraggio e incoscienza, tra adattamento e danno.",
      argomenti: ["adattamenti-in-quota-e-in-profondita", "psicologia-dello-sport", "il-sistema-endocrino"],
      collegamenti: [
        ["Scienze", "Ipossia, adattamenti in quota, pressione in immersione."],
        ["Fisica", "Legge di Boyle, pressione idrostatica."],
        ["Filosofia", "Il superuomo e l'oltrepassare in Nietzsche; Kant e il sublime."],
        ["Italiano", "L'Ulisse di Dante: «fatti non foste a viver come bruti»."],
        ["Inglese", "Il viaggio estremo nella letteratura d'avventura (Conrad)."]
      ],
      domande: ["Che cosa succede al corpo oltre gli 8000 metri o a 100 metri di profondità?", "Perché alcuni cercano sensazioni forti (sensation seeking)? Che ruolo hanno adrenalina e dopamina?", "Il limite è un confine da rispettare o da spostare?"],
      spunti: ["Reinhold Messner e l'Everest senza ossigeno", "L'apnea profonda e il riflesso di immersione", "Roger Caillois: l'ilinx, il gioco della vertigine"]
    },
    {
      id: "benessere",
      titolo: "Sociologia del benessere",
      idea: "Nella società sedentaria il movimento diventa una scelta. Corpo, salute e stile di vita sono temi sociali, economici e politici: chi ha accesso allo sport? Che cosa significa stare bene?",
      argomenti: ["pnei-lifestyle-e-salute", "la-salute-dinamica", "adattamenti-fisiologici-allallenamento"],
      collegamenti: [
        ["Scienze", "Sedentarietà, malattie croniche, PNEI e stress."],
        ["Storia", "Il welfare state, il diritto alla salute nella Costituzione (art. 32)."],
        ["Filosofia", "Epicuro e il piacere come assenza di dolore; Foucault e il controllo dei corpi."],
        ["Educazione civica", "Agenda 2030, obiettivo 3: salute e benessere."],
        ["Inglese", "Il culto del corpo e dell'immagine nella società dei consumi."]
      ],
      domande: ["Perché l'OMS considera l'inattività fisica uno dei principali fattori di rischio?", "Benessere e prestazione coincidono sempre?", "Il fitness è una libertà o un'imposizione sociale?"],
      spunti: ["Le raccomandazioni ACSM e OMS: 150 minuti a settimana, forza 2–3 volte", "La «medicina dello stile di vita»", "Social network e immagine corporea"]
    },
    {
      id: "sportivizzazione",
      titolo: "La sportivizzazione della società",
      idea: "Lo sport moderno nasce in Inghilterra con la rivoluzione industriale: regole scritte, misura, record. Il sociologo Norbert Elias lo legge come parte del processo di civilizzazione, che trasforma la violenza in competizione regolata.",
      argomenti: ["dal-gioco-allo-sport", "disabilita-e-sport-le-paralimpiadi", "alimentazione-e-sport-integratori-e-doping"],
      collegamenti: [
        ["Storia", "Rivoluzione industriale, Olimpiadi moderne (1896), sport e regimi totalitari, Berlino 1936."],
        ["Filosofia", "Elias e il processo di civilizzazione; Huizinga, Homo ludens."],
        ["Italiano", "Il mito dello sport e della velocità nel Futurismo."],
        ["Inglese", "Il college sport e il fair play vittoriano."],
        ["Educazione civica", "Sport, diritti e inclusione: Convenzione ONU 2006, art. 30."]
      ],
      domande: ["Che differenza c'è tra gioco e sport?", "Perché i regimi del Novecento hanno usato lo sport?", "Il record e la misura cambiano il senso del gioco?"],
      spunti: ["Jesse Owens a Berlino 1936", "Pierre de Coubertin", "Il doping di Stato nella Germania Est"]
    },
    {
      id: "comunicazione",
      titolo: "Sport, media e sponsor",
      idea: "Lo sport è uno spettacolo globale: diritti TV, social, sponsor. La comunicazione cambia le regole, gli orari, perfino il corpo degli atleti. Chi racconta lo sport ne decide anche il significato.",
      argomenti: ["psicologia-dello-sport", "disabilita-e-sport-le-paralimpiadi", "alimentazione-e-sport-integratori-e-doping"],
      collegamenti: [
        ["Storia", "Radio, televisione e propaganda; sport e guerra fredda."],
        ["Italiano", "Il giornalismo sportivo: Gianni Brera, Gianni Mura."],
        ["Inglese", "Advertising e brand; il caso degli atleti testimonial."],
        ["Filosofia", "La società dello spettacolo (Debord); McLuhan, il medium è il messaggio."],
        ["Matematica", "Statistica e dati nella prestazione sportiva."]
      ],
      domande: ["Come cambia il racconto dell'atleta paralimpico: pietismo, eroismo o normalità?", "Gli sponsor influenzano le scelte degli atleti?", "Che effetto ha la pressione mediatica sull'arousal e sulla salute mentale?"],
      spunti: ["Simone Biles a Tokyo 2020 e la salute mentale", "Il pugno di Tommie Smith e John Carlos, Città del Messico 1968", "I dati e il «Moneyball»"]
    },
    {
      id: "linguaggio",
      titolo: "Il linguaggio del corpo",
      idea: "Il corpo comunica prima delle parole: gesti, postura, sguardo, distanza. Nello sport, nella danza e nella vita la comunicazione non verbale esprime emozioni e costruisce relazioni.",
      argomenti: ["il-sistema-nervoso", "l-apprendimento-motorio", "psicologia-dello-sport", "le-capacita-coordinative"],
      collegamenti: [
        ["Scienze", "Neuroni specchio, emozioni e sistema limbico."],
        ["Arte", "Il corpo in movimento: Boccioni, Degas, Matisse «La danza»."],
        ["Italiano", "Il corpo nella poesia del Novecento; D'Annunzio e il culto della forza."],
        ["Filosofia", "Merleau-Ponty: il corpo vissuto; Bergson e il movimento."],
        ["Inglese", "Body language nella comunicazione interculturale."]
      ],
      domande: ["Quali segnali non verbali usa un allenatore? E un avversario per fintare?", "Che cosa sono i neuroni specchio e che ruolo hanno nell'apprendimento per imitazione?", "Il gesto sportivo può essere arte?"],
      spunti: ["La haka degli All Blacks", "Il linguaggio dei segni e lo sport dei sordi", "Il gesto tecnico come «firma» dell'atleta"]
    },
    {
      id: "sostenibile",
      titolo: "Progresso, tecnologia e sostenibilità",
      idea: "Materiali, scarpe, dati e intelligenza artificiale hanno cambiato la prestazione. Ma dove finisce il progresso e inizia il vantaggio sleale? E quanto costano all'ambiente i grandi eventi sportivi?",
      argomenti: ["adattamenti-fisiologici-allallenamento", "test-motori", "alimentazione-e-sport-integratori-e-doping"],
      collegamenti: [
        ["Fisica", "Attrito, aerodinamica, restituzione elastica delle scarpe con piastra."],
        ["Scienze", "Monitoraggio del battito, VO₂max, sensori indossabili."],
        ["Storia", "Il mito del progresso tra Ottocento e Novecento."],
        ["Filosofia", "Il positivismo; Jonas e il principio responsabilità."],
        ["Educazione civica", "Agenda 2030, città sostenibili; l'eredità delle Olimpiadi Milano Cortina 2026."]
      ],
      domande: ["Il costume in poliuretano vietato nel 2010 era doping tecnologico?", "Misurare tutto aiuta sempre a migliorare?", "Come può un grande evento sportivo essere sostenibile?"],
      spunti: ["Le scarpe con piastra in carbonio e i record della maratona", "Le protesi di Oscar Pistorius e il dibattito sull'equità", "Mobilità attiva: andare a scuola a piedi o in bici"]
    }
  ],
  metodo: [
    ["Riconosci il tema", "Davanti al materiale chiediti: di che cosa parla davvero? Trova una parola chiave."],
    ["Parti da ciò che conosci meglio", "Una disciplina in cui ti senti sicuro: apri con un concetto preciso, non con un elenco."],
    ["Collega con un perché", "Ogni passaggio deve avere un motivo: «questo mi fa pensare a… perché…»."],
    ["Porta un esempio", "Un atleta, un fatto storico, un'esperienza tua: l'esempio rende concreto il ragionamento."],
    ["Chiudi con un'opinione", "La commissione apprezza un pensiero personale, motivato e rispettoso."]
  ],
  pcto: {
    intro: "Nella relazione sulla FSL (Formazione scuola-lavoro, il vecchio PCTO) racconti un'esperienza, che cosa hai imparato e come si collega al tuo percorso. Bastano 5–8 minuti.",
    parti: [
      ["Presentazione", "Dove, quando, quante ore, con quale ente o società sportiva."],
      ["Attività svolte", "Che cosa hai fatto concretamente: compiti, ruoli, strumenti."],
      ["Competenze", "Che cosa hai imparato: competenze tecniche, organizzative, relazionali."],
      ["Collegamenti", "Che cosa c'entra con le discipline studiate: allenamento, primo soccorso, comunicazione, inclusione…"],
      ["Riflessione", "Che cosa ti è piaciuto, che cosa cambieresti, che cosa ti porti per il futuro."]
    ],
    consiglio: "Prepara una slide o un'immagine per parte, con poche parole e una foto: ti aiuta a non perdere il filo."
  }
};
