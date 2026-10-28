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
