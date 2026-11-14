# Istruzioni per Claude — sito «Studiare Scienze Motorie e Sportive»

Sito di studio del prof. Andrea Bertelli (Liceo Galilei, Verona) per le classi prime–quinte.
Repository GitHub `mrandrea2/STUDIARESCIENZEMOTORIE`, ramo `main`. Vercel pubblica da solo ogni push su
https://studiarescienzemotorie.vercel.app. Claude è autorizzato a fare commit e push direttamente su `main`.

## Regole del prof. (da rispettare sempre)
- Rispondere in italiano, brevi e pratici. Fare le modifiche e pubblicarle, poi riassumere in poche righe.
- È un sito **di studio prima che di ripasso**: i contenuti contano più degli effetti.
- **Mai inviare email** per conto del prof., nessuna eccezione.
- **Copyright:** non pubblicare slide, verifiche, immagini o clipart dei libri (Marietti, DeA, Zanichelli…).
  Si possono usare come spunto, riscritti. I numeri delle tabelle vanno bene citando la fonte
  (es. N. Lovecchio, «Physical fitness», Marietti Scuola). Non ridistribuire il PDF «METABOLISMI» del prof. Mischiati.
- **Solo le lezioni del sito** (slide in `data/lezioni/`): niente link a slide esterne (Drive, Canva, PDF di slide).
- **Video:** al massimo uno per argomento, di preferenza «La Biologia per tutti».
- Stile delle slide: fondo avorio, blu notte e rosso corallo, titoli in grassetto sans con i due punti,
  testo a sinistra e illustrazione a destra, niente elementi «da IA».
- **Privacy:** il sito non usa cookie, analytics né richieste automatiche a server esterni (font in locale,
  video e giochi esterni caricati solo al clic). Se si aggiunge qualcosa di esterno, aggiornare la pagina `#/privacy`.
- Si dice **FSL (Formazione scuola-lavoro)**, non più PCTO.
- Riquadri colorati: in Schemi e Laboratorio ogni riquadro ha un fondo diverso (tavolozza a 6 colori in
  `assets/style.css`, blocchi v9.x); Ripasso/Gioca su fondo arancio. Mantenere questo stile.

## Organizzazione delle classi (data/topics.js → CLASSI)
- Capacità coordinative: **terza**. L'apprendimento motorio (teorie): **quarta**, dopo il sistema nervoso.
- Cardio-circolatorio e respiratorio: solo **seconda**. Primo soccorso: seconda.
- Quinta: sezione «Percorsi per l'esame» che rimanda a `#/orale/<n>` (dati in `data/orale.js`).
- I riquadri «Cervello in gioco» e «Sblocca il tuo potenziale» del metodo di studio sono **senza link**.

## Struttura tecnica
- Sito statico in JavaScript puro, nessuna build. Router con hash (`#/classe/3`, `#/argomento/<id>/<scheda>`).
- `index.html` carica in ordine: dati (`data/*.js`, globali `window.TOPICS`, `CLASSI`, `GAMES`, `SCHEMI`, `LAB`,
  `LEZIONI`, `DOMANDE`, `CONSIGLI`, `ORALE`, `FITNESS`), `assets/illustrazioni.js` (`ILL`), `assets/fitness.js`,
  `assets/lab.js`, le lezioni `data/lezioni/<id>.js`, infine `assets/app.js`.
- Un argomento completo ha: voce in `TOPICS` (+ id in `CLASSI`), lezione `data/lezioni/<id>.js`, giochi in `GAMES`
  (quiz, vf, flash, abbina, completa, ordina, gruppi), `SCHEMI`, `LAB`, 4 domande in `domande.js`, 3 consigli in
  `consigli.js`. Modello recente da copiare: `l-apprendimento-motorio` (in `data/nuovi-argomenti.js`).
- Tipi di slide: cover, cards, steps, points (con `fig: {svg}` da `ILL`), split, list, end, fonti.
- Approfondimenti (laboratori esterni del prof.): `data/approfondimenti.js` (`window.APPROF`). Sono **riquadri
  cliccabili, mai link visibili**; compaiono (non in home) nelle pagine di classe indicate in `classi` e, tramite `temi`,
  in Lezione e Laboratorio dell'argomento. Metabolismo 3D: classi **seconde e terze**; Cellule in equilibrio: classi **quarte**.
  Ora: «Metabolismo 3D» (metabolismi energetici) e «Cellule in equilibrio» (PNEI, sistema immunitario, salute dinamica, sana alimentazione).
- Strumenti di studio in `assets/app.js`: **Ripasso mirato** `#/ripasso` (gli errori di quiz, V/F, sfida e simulazioni
  tornano dopo 1, 3 e 7 giorni; `mem._err`), **Simulazione di verifica** `#/argomento/<id>/gioca/verifica`
  (15 domande, correzione alla fine, voto indicativo in decimi, sufficienza al 60%), **Verso la verifica** `#/piano`
  (piano giorno per giorno dalla data della verifica; `mem._ver`), **Glossario** `#/glossario[/<classe>|<id>]`
  (creato da solo dalle flashcard `flash` di ogni argomento: per aggiungere una parola basta aggiungere una flashcard;
  modalità «Mettiti alla prova»), **Interrogazione** `#/interrogazione[/<classe>|<id>]` (tre domande di `domande.js`
  da esporre a voce con cronometro, poi risposta modello e punti chiave; `mem._int`).
- Progressi degli studenti solo nel browser (`localStorage` `ssm-progressi-v1`, profilo fitness `ssm-fitness-v1`).
- `sw.js` (app installabile e offline): rete prima, copia salvata se offline. **Aumentare `VERSIONE`**
  (ora `ssm-v21`) a ogni modifica importante. `README.md` descrive le funzioni: aggiornarlo se cambiano.

## Come lavorare
1. `gh repo clone mrandrea2/STUDIARESCIENZEMOTORIE` (o `git pull` se già clonato).
2. Prova locale: `python3 -m http.server 8766` e controllo con Playwright (telefono 390 px e computer 1280 px):
   nessun errore JS, niente che esce dallo schermo.
3. Controllo veloce dei dati: `node -e 'global.window={};require("./data/topics.js")'`.
4. Commit e push su `main`, con il trailer di attribuzione indicato dalla sessione.
