# Studiare Scienze Motorie e Sportive

Sito didattico del **prof. Andrea Bertelli**, Liceo Statale «Galileo Galilei» di Verona, Liceo Scientifico a indirizzo sportivo.

È un sito statico: HTML, CSS e JavaScript, senza installazioni e senza compilazione. Funziona su Vercel, su GitHub Pages o aprendo `index.html` nel browser.

## Cosa c'è dentro

```
index.html          la pagina del sito
assets/style.css    la grafica (colori, caratteri, impaginazione)
assets/app.js       il funzionamento (pagine, giochi, livelli, suoni)
assets/logo-galilei.jpg  logo del Liceo Galilei
data/topics.js      ARGOMENTI E MATERIALI  ← è il file che modificherai più spesso
data/giochi-1.js    giochi: metodo di studio e classe prima
data/giochi-2.js    giochi: classe seconda e terza
data/giochi-3.js    giochi: classe quarta e quinta
data/giochi-extra.js  domande in più e i giochi «Metti in ordine» e «Dividi in gruppi»
data/schemi.js      SCHEMI RIASSUNTIVI di ogni argomento (flussi, cicli, confronti, barre)
data/lezioni/       LEZIONI UNICHE (slide integrate), un file per argomento
data/laboratori.js  LABORATORIO di ogni argomento: esperienze, strumenti, modelli 3D, link
assets/lab.js       il funzionamento degli strumenti interattivi del laboratorio
assets/illustrazioni.js  i disegni delle slide (SVG con etichette in italiano)
```

## Pubblicare: GitHub + Vercel

1. **GitHub.** Crea un nuovo repository (es. `studiare-scienze-motorie`), pubblico o privato. Clicca **Add file → Upload files** e trascina **il contenuto** della cartella: `index.html` e le cartelle `assets` e `data`, non la cartella esterna. Poi clicca **Commit changes**.
2. **Vercel.** Accedi con l'account GitHub, clicca **Add New → Project**, scegli il repository e clicca **Deploy**. Non serve cambiare nessuna impostazione: il preset è «Other» e non c'è un comando di build.
3. Dopo circa 30 secondi avrai un indirizzo tipo `studiare-scienze-motorie.vercel.app`. Puoi cambiarlo in **Settings → Domains**, oppure collegarlo a bit.ly/STUDIARESCIENZEMOTORIE aggiornando la destinazione del link breve.

Da quel momento ogni modifica salvata su GitHub aggiorna il sito da sola.

In alternativa, **GitHub Pages**: Settings → Pages → Branch `main` → Save.

## Aggiungere o cambiare un materiale

Apri `data/topics.js` su GitHub, clicca la matita e aggiungi una riga nell'elenco `materiali` dell'argomento:

```js
{ tipo: "pdf",   id: "ID_DEL_FILE_DRIVE", titolo: "Titolo che vedono gli studenti", nota: "Lezione del prof. Bertelli" },
{ tipo: "yt",    id: "CODICE_YOUTUBE",    titolo: "Video di ripasso" },
{ tipo: "slides",id: "ID_PRESENTAZIONE",  titolo: "Le mie slide" },
```

- **ID Drive**: è la parte del link tra `/d/` e `/view`.
  `drive.google.com/file/d/`**`1AbCdEf123`**`/view` → `id: "1AbCdEf123"`
- **Codice YouTube**: la parte dopo `v=`.
  `youtube.com/watch?v=`**`ub747pprmJ8`** → `id: "ub747pprmJ8"`
- Tipi: `pdf` (anche PPTX e DOCX su Drive), `video`, `audio`, `slides`, `yt`, `form`, `la` (LearningApps), `link`.

## Aggiungere domande ai giochi

Nei file `data/giochi-*.js`, ogni argomento ha cinque elenchi:

```js
quiz:     ["Domanda?", ["Risposta A", "Risposta B", "Risposta C", "Risposta D"], 1, "Spiegazione"],
//                                                                            ↑ numero della risposta giusta: 0 = prima, 1 = seconda…
vf:       ["Affermazione.", true, "Spiegazione"],
flash:    ["Fronte della carta", "Retro della carta"],
abbina:   ["Termine", "Definizione"],
completa: "Frase con la {parola} da trovare tra graffe."
```

Attenzione alle virgole tra una riga e l'altra e alle virgolette: se il sito diventa bianco dopo una modifica, di solito manca una virgola.

## Schemi riassuntivi

Ogni argomento ha la scheda **Schemi**. Li trovi in `data/schemi.js`: ogni schema ha un `tipo` (hub, flow, cycle, compare, bars) e un elenco di voci. In cima al file c'è la spiegazione di ogni tipo.

## Lezioni (slide integrate)

Gli argomenti con un file in `data/lezioni/` mostrano la scheda **Lezione** con le slide sfogliabili (frecce, swipe, indice, schermo intero; la slide raggiunta viene ricordata). Ci sono le lezioni di tutti i 22 argomenti, dalla prima alla quinta. Il pulsante «Leggi tutto» mostra tutte le slide una sotto l'altra, come un testo da studiare. Sotto le slide ci sono i video (YouTube e Drive) e le dispense del prof.

Per aggiungere una lezione: copia un file di `data/lezioni/`, cambia il nome dell'argomento tra parentesi quadre e aggiungi la riga `<script src="data/lezioni/NOME.js"></script>` in `index.html`. Tipi di slide: cover, cards, steps, list, split, key, stack, stats, formula, table, points, end, fonti.

Per mettere un'immagine accanto al testo aggiungi a una slide `fig: { svg: "cuore", cap: "Didascalia" }` (i nomi dei disegni sono in `assets/illustrazioni.js`) oppure `fig: { src: "indirizzo dell'immagine", svg: "disegno di riserva", cap: "...", credit: "autore e licenza" }`.

## Laboratorio

Ogni argomento ha la scheda **Laboratorio** (`data/laboratori.js`). Si possono aggiungere quattro tipi di voci:

```js
{ t: "esperienza", titolo: "…", dove: "in palestra", tempo: "20 minuti", obiettivo: "…", materiale: ["…"], passi: ["…"], osserva: ["…"] },
{ t: "tool", tool: "battito" },        // strumenti: battito, karvonen, cooper, imc, watson, reazione, respiro, attivita, met, rpe, sonno, idratazione, profondita, quota, supercomp, arousal, smart
{ t: "3d", uid: "codice-sketchfab", titolo: "…", autore: "…" },   // il codice è l'ultima parte dell'indirizzo del modello su Sketchfab
{ t: "link", url: "https://…", titolo: "…", testo: "…" }
```

I modelli 3D arrivano da Sketchfab e si caricano solo quando lo studente preme «Apri il modello 3D».

## Percorso guidato
Ogni argomento ha cinque passi con spunta e tempo stimato: video → lezione → schema → quiz → domanda aperta.
Le spunte si mettono da sole (aprendo il video, arrivando all'ultima slide, aprendo gli schemi,
finendo il quiz, confrontando una risposta aperta) e si possono anche togliere o mettere a mano.
Le domande aperte, con risposta modello e punti chiave, sono in `data/domande.js`.
I consigli «Come studiarlo» di ogni argomento sono in `data/consigli.js`.

## Nuovi argomenti, profilo fitness e orale
- `data/nuovi-argomenti.js`: giochi, schemi e laboratorio di «Le capacità coordinative» (prime) e «Il primo soccorso» (seconde).
- Laboratorio: «Il mio profilo fitness» (tabelle di N. Lovecchio, Marietti Scuola) in Test motori e Capacità condizionali;
  test della cicogna, metronomo per la RCP, simulazione della chiamata al 112.
- `data/orale.js`: la pagina «Verso l'orale» per le quinte (`#/orale`), con sei percorsi pluridisciplinari e la guida alla relazione PCTO.

## Accessibilità e studio ovunque
- Pulsante **Aa** in alto: testo più grande e modalità ad alta leggibilità (carattere Atkinson Hyperlegible, più spazio, niente corsivo).
- **Ascolta** nella barra delle slide: legge la lezione ad alta voce con la voce italiana del dispositivo.
- **Stampa la sintesi** (`#/stampa/<argomento>`): versione da stampare o salvare in PDF di ogni lezione, con domande di ripasso.
- **App installabile e offline**: `manifest.webmanifest` + `sw.js`. Il service worker salva tutti i file richiamati da `index.html`;
  video, PDF di Drive e modelli 3D restano solo online. Se cambi molti file, aumenta `VERSIONE` in `sw.js`.

## Metodo di studio

La pagina del metodo di studio e la home mostrano in evidenza i due link bit.ly/CERVELLOINGIOCO e bit.ly/SBLOCCAILTUOPOTENZIALE. Per cambiarli modifica `evidenza` nell'argomento «metodo-di-studio» in `data/topics.js`.

## Importante: condivisione dei file Drive

Gli studenti vedono un file nel visualizzatore solo se su Drive è condiviso come **«Chiunque abbia il link: Visualizzatore»**. Se invece è condiviso solo con galileivr.org, lo vedono solo dopo l'accesso con l'account della scuola.

Questi file sono nel Drive personale (Gmail) e non nella cartella del sito: controlla che siano condivisi.

- Il respiro e lo sport (apparato respiratorio)
- Oltre i limiti, Sport e disabilità, Lo spirito paralimpico, podcast Paralimpiadi
- Le slide del libro sulle capacità condizionali (forza, resistenza, velocità, flessibilità) sono nella cartella CAPACITÀ MOTORIE del sito

## Progressi degli studenti

Ogni gioco assegna fino a 3 stelle: 1 dal 40%, 2 dal 70%, 3 dal 90%. Con le stelle si sale di livello, da «Principiante» a «Leggenda». Nella pagina Trofei si vedono il livello, i record della Sfida lampo e i giorni di fila. La domanda del giorno cambia ogni giorno in automatico.

Tutto resta salvato **solo sul dispositivo dello studente**, nel browser. Il sito non raccoglie dati e non richiede l'accesso.

---
© Prof. Andrea Bertelli · Liceo Statale «Galileo Galilei» · Verona
