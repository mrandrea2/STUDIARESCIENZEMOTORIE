/* DISEGNI DELLE SLIDE — illustrazioni originali in SVG, con le etichette in italiano.
   Si usano in una slide con: fig: { svg: "nome", cap: "didascalia" }
   Colori: blu notte #14213F, arancio #E8692F, blu #3A6BC4, azzurri chiari. */
window.ILL = (function () {
  const S = (body, vb) => `<svg class="ill" viewBox="${vb || "0 0 400 300"}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
  const lab = (x, y, t, cls, anchor) => `<text x="${x}" y="${y}"${cls ? ` class="${cls}"` : ""}${anchor ? ` text-anchor="${anchor}"` : ""}>${t}</text>`;
  const lead = (x1, y1, x2, y2) => `<path class="lt" d="M${x1} ${y1} L${x2} ${y2}"/><circle class="o" cx="${x1}" cy="${y1}" r="3.5"/>`;

  return {
    /* ---------- RESPIRATORIO ---------- */
    polmoni: S(`
      <path class="b2 sk" d="M180 92 C130 76 82 128 78 190 C75 236 96 256 124 252 L182 240 C190 196 190 140 180 92Z"/>
      <path class="b2 sk" d="M220 92 C270 76 318 128 322 190 C325 236 304 256 276 252 L238 246 C232 234 222 226 214 222 C220 176 222 140 220 92Z"/>
      <path class="lt" d="M88 160 Q134 150 184 128 M92 206 Q138 188 186 182 M316 182 Q268 160 222 150"/>
      <rect class="b3 sk" x="190" y="18" width="20" height="80" rx="7"/>
      <path class="lt" d="M192 32h16M192 44h16M192 56h16M192 68h16M192 80h16"/>
      <path class="ln dr" d="M200 96 C188 112 172 122 156 142 M200 96 C212 112 228 122 244 142 M166 130 L146 128 M156 142 L150 168 M234 130 L256 126 M244 142 L252 170"/>
      <path class="lo dr" d="M70 268 Q136 226 200 256 Q264 226 330 268"/>
      ${lead(200, 40, 250, 30)}${lab(256, 34, "Trachea")}
      ${lead(232, 128, 300, 92)}${lab(306, 92, "Bronchi")}
      ${lab(18, 82, "Polmone destro")}${lab(18, 100, "3 lobi", "sm")}
      ${lab(300, 288, "Diaframma", "to")}
      ${lab(330, 214, "Polmone")}${lab(330, 230, "sinistro", "")}${lab(330, 246, "2 lobi", "sm")}
    `),
    alveolo: S(`
      <path class="b3 sk" d="M150 60 C110 60 86 96 92 140 C98 190 140 214 186 206 C232 198 252 156 240 116 C228 76 192 60 150 60Z"/>
      ${lab(122, 140, "Alveolo")}${lab(122, 158, "aria · PO₂ alta", "sm")}
      <path d="M244 60 C300 90 300 210 230 240" fill="none" stroke="#C9D6EE" stroke-width="30" stroke-linecap="round"/>
      <path d="M244 60 C300 90 300 210 230 240" fill="none" stroke="#3A6BC4" stroke-width="2" stroke-dasharray="2 10"/>
      ${lab(296, 72, "Capillare")}${lab(296, 88, "sangue", "sm")}
      <g class="fi" style="--k:0"><path class="lo" d="M206 112 L262 112"/><path class="o" d="M268 112 l-10 -7 v14z"/><text x="214" y="104" class="to">O₂</text></g>
      <g class="fi" style="--k:2"><path class="lbl" d="M262 168 L206 168"/><path class="b" d="M200 168 l10 -7 v14z"/><text x="216" y="190" class="tb">CO₂</text></g>
      ${lab(40, 258, "La parete è sottilissima: i gas passano per diffusione", "sm")}
    `),
    diaframma: S(`
      <g>
        <path class="b3 sk" d="M40 70 Q100 40 160 70 L166 220 Q100 236 34 220Z"/>
        <path class="b2" d="M58 100 Q100 84 142 100 L144 190 Q100 200 56 190Z"/>
        <path class="lo" d="M40 196 Q100 170 160 196"/>
        <path class="ln" d="M100 120 v48 M90 158 l10 12 l10 -12"/>
        ${lab(100, 30, "Inspirazione", "", "middle")}
        ${lab(100, 256, "il diaframma si contrae", "sm", "middle")}${lab(100, 272, "e scende", "sm", "middle")}
      </g>
      <g>
        <path class="b3 sk" d="M240 78 Q300 58 360 78 L362 220 Q300 236 238 220Z"/>
        <path class="b2" d="M262 108 Q300 96 338 108 L338 150 Q300 158 262 150Z"/>
        <path class="lo" d="M240 168 Q300 120 360 168"/>
        <path class="ln" d="M300 210 v-40 M290 180 l10 -12 l10 12"/>
        ${lab(300, 30, "Espirazione", "", "middle")}
        ${lab(300, 256, "si rilassa e risale", "sm", "middle")}${lab(300, 272, "a riposo è passiva", "sm", "middle")}
      </g>
    `),

    /* ---------- CARDIOCIRCOLATORIO ---------- */
    cuore: S(`
      <path class="iv sk" d="M200 270 C110 220 70 170 74 118 C78 78 112 56 146 64 C170 70 190 86 200 104 C210 86 230 70 254 64 C288 56 322 78 326 118 C330 170 290 220 200 270Z"/>
      <path class="b2" d="M96 120 C100 92 130 80 160 92 L190 112 L190 150 L100 150Z"/>
      <path class="b" d="M100 160 L190 160 L190 236 C150 218 112 196 100 160Z" opacity=".85"/>
      <path class="o2" d="M210 112 L240 92 C270 80 300 92 304 120 L300 150 L210 150Z"/>
      <path class="o" d="M210 160 L300 160 C290 196 250 220 210 240Z"/>
      <path class="ln" d="M200 104 L200 262"/>
      <path class="lt" d="M100 155 H190 M210 155 H300"/>
      ${lab(124, 134, "Atrio dx", "sm")}${lab(150, 196, "Ventricolo", "tw sm", "middle")}${lab(150, 212, "destro", "tw sm", "middle")}
      ${lab(224, 134, "Atrio sx", "sm")}${lab(250, 190, "Ventricolo", "tw sm", "middle")}${lab(250, 206, "sinistro", "tw sm", "middle")}
      ${lab(60, 36, "povero di O₂", "tb")}${lab(240, 36, "ricco di O₂", "to")}
      ${lab(200, 292, "Il setto divide il cuore in due pompe", "sm", "middle")}
    `),
    circolazione: S(`
      <rect class="b2 sk" x="150" y="18" width="100" height="54" rx="18"/>${lab(200, 50, "Polmoni", "", "middle")}
      <rect class="iv sk" x="162" y="124" width="76" height="56" rx="14"/>${lab(200, 157, "Cuore", "", "middle")}
      <rect class="o2 sk" x="120" y="232" width="160" height="54" rx="18"/>${lab(200, 264, "Muscoli e organi", "", "middle")}
      <path class="lbl dr" d="M176 124 C150 110 150 90 166 72"/>
      <path class="lo dr" d="M234 72 C250 90 250 110 224 124"/>
      <path class="lo dr" d="M232 180 C280 196 290 214 262 232"/>
      <path class="lbl dr" d="M138 232 C110 214 120 196 168 180"/>
      ${lab(20, 96, "Piccola", "tb")}${lab(20, 112, "circolazione", "tb")}
      ${lab(296, 210, "Grande", "to")}${lab(296, 226, "circolazione", "to")}
      ${lab(300, 108, "arterie: dal cuore", "sm")}${lab(300, 124, "vene: al cuore", "sm")}
    `),
    vasi: S(`
      <g class="fi" style="--k:0"><circle class="iv sk" cx="80" cy="110" r="54"/><circle class="o2" cx="80" cy="110" r="44"/><circle class="o" cx="80" cy="110" r="26"/>
        ${lab(80, 196, "Arteria", "", "middle")}${lab(80, 214, "parete spessa", "sm", "middle")}${lab(80, 230, "ed elastica", "sm", "middle")}</g>
      <g class="fi" style="--k:1"><path class="iv sk" d="M150 80 C180 60 230 60 250 84 C270 110 260 140 240 146 C210 156 170 150 152 136 C136 122 136 92 150 80Z"/><path class="b" d="M162 92 C186 78 226 80 240 96 C252 112 244 130 230 134 C206 140 176 138 164 126 C154 116 154 100 162 92Z" opacity=".85"/>
        ${lab(200, 196, "Vena", "", "middle")}${lab(200, 214, "parete sottile", "sm", "middle")}${lab(200, 230, "con valvole", "sm", "middle")}</g>
      <g class="fi" style="--k:2"><circle class="iv sk" cx="330" cy="110" r="16"/><circle class="o" cx="330" cy="110" r="7"/>
        ${lab(330, 196, "Capillare", "", "middle")}${lab(330, 214, "un solo strato", "sm", "middle")}${lab(330, 230, "di cellule", "sm", "middle")}</g>
      ${lab(200, 280, "Sezioni non in scala", "sm", "middle")}
    `),
    sangue: S(`
      <rect class="b3" x="70" y="30" width="110" height="240" rx="14"/>
      <rect class="o" x="76" y="152" width="98" height="112" rx="6"/>
      <rect class="w" x="76" y="146" width="98" height="6"/>
      <path d="M76 36 h98 v110 h-98z" fill="#F7E3A6"/>
      <path class="ln" d="M70 30 v240 M180 30 v240 M70 270 h110"/>
      ${lead(178, 90, 214, 80)}${lab(220, 76, "Plasma · 55%")}${lab(220, 94, "acqua, proteine, sali, nutrienti", "sm")}
      ${lead(178, 149, 214, 150)}${lab(220, 148, "Globuli bianchi e piastrine")}${lab(220, 166, "difesa e coagulazione", "sm")}
      ${lead(178, 210, 214, 222)}${lab(220, 218, "Globuli rossi · 45%")}${lab(220, 236, "emoglobina: trasportano O₂", "sm")}
      ${lab(125, 292, "Sangue centrifugato", "sm", "middle")}
    `, "0 0 440 300"),
    polso: S(`
      <path class="iv sk" d="M60 250 L120 120 C130 98 150 90 172 92 L300 100 C322 102 334 118 330 138 L322 170 C318 188 300 196 284 194 L180 186 L150 260Z"/>
      <path class="lt" d="M172 92 L176 186"/>
      <path class="lo dr" d="M120 210 C140 170 160 150 196 140 L300 138"/>
      <circle class="o" cx="220" cy="140" r="9"/><circle class="o" cx="220" cy="140" r="18" opacity=".25"/>
      ${lab(206, 70, "Polso radiale", "to")}${lab(206, 86, "lato del pollice", "sm")}
      ${lab(30, 286, "Indice e medio, mai il pollice: ha un suo battito", "sm")}
    `),
    fczone: S(`
      ${[["Rigenerativo", "50–60%", 60, "b2"], ["Aerobico", "60–70%", 100, "b"], ["Soglia", "70–80%", 140, "o2"], ["Anaerobico", "80–90%", 180, "o"], ["Massimale", "90–100%", 220, "n"]].map(([a, b, h, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${30 + k * 72}" y="${250 - h}" width="56" height="${h}" rx="8"/>${lab(58 + k * 72, 242 - h, b, "sm", "middle")}${lab(58 + k * 72, 274, a, "sm", "middle")}`).join("")}
      ${lab(30, 26, "% della frequenza cardiaca massima")}
    `),

    /* ---------- METABOLISMI ---------- */
    atp: S(`
      <rect class="iv sk" x="40" y="96" width="250" height="110" rx="20"/>
      <rect class="sk" x="290" y="128" width="22" height="46" rx="6" fill="#14213F"/>
      <rect class="o gr" style="--k:0" x="54" y="110" width="70" height="82" rx="10"/>
      <rect class="o gr" style="--k:1" x="132" y="110" width="70" height="82" rx="10"/>
      <rect class="o2 gr" style="--k:2" x="210" y="110" width="66" height="82" rx="10"/>
      ${lab(89, 157, "P", "tw", "middle")}${lab(167, 157, "P", "tw", "middle")}${lab(243, 157, "P", "", "middle")}
      ${lab(40, 64, "ATP = adenosina + 3 fosfati")}
      <path class="lo dr" d="M243 206 C250 240 290 250 330 236"/>
      ${lab(250, 278, "staccando un fosfato", "sm")}${lab(250, 294, "il muscolo si contrae", "sm")}
      ${lab(40, 240, "Scorta nel muscolo:", "sm")}${lab(40, 256, "pochi secondi", "to")}
    `),
    sistemi: S(`
      <path class="ln" d="M40 30 V250 H380"/>
      ${lab(44, 22, "% di energia fornita", "sm")}${lab(210, 292, "durata dello sforzo →", "sm", "middle")}
      <path class="lo dr" d="M44 60 C70 60 90 80 110 180 C120 230 140 246 200 248"/>
      <path class="lbl dr" d="M44 240 C90 230 110 90 150 92 C190 94 200 200 260 240 C300 250 340 248 376 248"/>
      <path class="dr" fill="none" stroke="#14213F" stroke-width="4" stroke-linecap="round" d="M44 246 C120 246 140 200 180 150 C220 100 260 66 376 56"/>
      ${lab(70, 54, "Alattacido", "to")}${lab(150, 84, "Lattacido", "tb")}${lab(300, 48, "Aerobico")}
      ${["10 s", "1 min", "2 min", "5 min+"].map((t, k) => lab([80, 150, 230, 330][k], 268, t, "sm", "middle")).join("")}
    `),
    mitocondrio: S(`
      <ellipse class="o2 sk" cx="200" cy="140" rx="160" ry="86"/>
      <ellipse class="iv" cx="200" cy="140" rx="142" ry="70"/>
      <path class="lo dr" d="M70 140 C80 90 96 90 100 140 C104 190 120 190 126 140 C132 90 148 90 154 140 C160 190 176 190 182 140 C188 90 204 90 210 140 C216 190 232 190 238 140 C244 90 260 90 266 140 C272 190 288 190 294 140 C300 90 316 90 330 140"/>
      ${lab(200, 254, "Mitocondrio: la «centrale» della cellula", "", "middle")}
      ${lab(200, 274, "O₂ + glucidi o grassi → tanto ATP + CO₂ + H₂O", "sm", "middle")}
      ${lab(40, 40, "Ciclo di Krebs e catena respiratoria", "sm")}
    `),

    /* ---------- TEORIA DELL'ALLENAMENTO ---------- */
    supercomp: S(`
      <path class="ln" d="M30 30 V250 H385"/>
      <path class="ld" d="M30 150 H385"/>${lab(384, 170, "livello iniziale", "sm", "end")}
      <path class="lo dr" d="M30 150 C60 150 70 230 110 232 C150 234 160 150 200 110 C230 82 260 96 290 130 C310 150 340 150 385 150"/>
      ${lab(70, 270, "Carico", "", "middle")}${lab(70, 286, "fatica", "sm", "middle")}
      ${lab(150, 270, "Recupero", "", "middle")}
      ${lab(220, 62, "Supercompensazione", "to", "middle")}
      ${lab(330, 270, "Ritorno", "", "middle")}${lab(330, 286, "se non ti alleni", "sm", "middle")}
      <circle class="n" cx="210" cy="104" r="6"/>
      ${lab(196, 92, "nuovo carico qui", "sm", "end")}
    `),
    soglie: S(`
      ${[["Debole", "nessun effetto", 50, "b3"], ["Medio", "mantiene", 100, "b2"], ["Forte", "migliora", 170, "o"], ["Eccessivo", "danneggia", 220, "n"]].map(([a, b, h, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${40 + k * 88}" y="${250 - h}" width="68" height="${h}" rx="10"/>${lab(74 + k * 88, 270, a, "", "middle")}${lab(74 + k * 88, 288, b, "sm", "middle")}`).join("")}
      ${lab(40, 26, "Intensità dello stimolo allenante")}
    `),
    seduta: S(`
      ${[["Riscaldamento", "15–20′", 40, 90, "b2"], ["Parte centrale", "obiettivo", 130, 170, "o"], ["Defaticamento", "10′", 300, 70, "b"]].map(([a, b, x, w, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${x}" y="110" width="${w}" height="70" rx="12"/>${lab(x + w / 2, 96, a, "", "middle")}${lab(x + w / 2, 152, b, k === 1 ? "tw" : "", "middle")}`).join("")}
      <path class="ln" d="M40 210 H370 M360 202 l10 8 -10 8"/>${lab(40, 232, "tempo", "sm")}
      ${lab(40, 40, "Le tre parti di una seduta")}
      ${lab(40, 272, "Parti sempre graduale e chiudi con calma", "sm")}
    `),

    /* ---------- CAPACITÀ CONDIZIONALI ---------- */
    forza: S(`
      ${[["Resistente", "30–60%", "15–30 rip.", 70, "b2"], ["Esplosiva", "30–70%", "6–10 rip. veloci", 110, "b"], ["Ipertrofia", "70–85%", "6–12 rip.", 150, "o"], ["Massima", "85–100%", "1–5 rip.", 190, "n"]].map(([a, b, r, h, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${34 + k * 90}" y="${240 - h}" width="76" height="${h}" rx="10"/>${lab(72 + k * 90, 230 - h, b, "", "middle")}${lab(72 + k * 90, 262, a, "", "middle")}${lab(72 + k * 90, 280, r, "sm", "middle")}`).join("")}
      ${lab(34, 20, "% del massimale (1RM)", "sm")}
    `),
    regimi: S(`
      ${[["Concentrico", "il muscolo si accorcia", "M60 70 L60 170"], ["Eccentrico", "si allunga frenando", "M200 70 L200 190"], ["Isometrico", "lunghezza costante", "M340 110 L340 150"]].map(([a, b, d], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${["o", "b", "g"][k]}" x="${30 + k * 140}" y="120" width="60" height="${[30, 70, 46][k]}" rx="12"/><path class="ln" d="${d}"/>${lab(60 + k * 140, 230, a, "", "middle")}${lab(60 + k * 140, 248, b, "sm", "middle")}</g>`).join("")}
      ${lab(200, 40, "Pliometrico = eccentrico + concentrico rapido", "sm", "middle")}${lab(200, 58, "(es. balzi, salto in basso)", "sm", "middle")}
    `),
    resistenza: S(`
      <path class="ln" d="M30 150 H380"/>
      ${[["Breve", "45″–2′", 30, 90, "o"], ["Media", "2′–8′", 120, 100, "o2"], ["Lunga", "oltre 8′", 220, 160, "b"]].map(([a, b, x, w, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${x}" y="122" width="${w}" height="56" rx="10"/>${lab(x + w / 2, 110, a, "", "middle")}${lab(x + w / 2, 156, b, k === 1 ? "" : "tw", "middle")}`).join("")}
      ${lab(30, 214, "← più lattacido", "to")}${lab(380, 214, "più aerobico →", "tb", "end")}
      ${lab(30, 50, "Resistenza secondo la durata")}
    `),
    velocita: S(`
      <path class="ln" d="M30 160 H380"/>
      <circle class="o" cx="40" cy="160" r="9"/>${lab(40, 136, "Segnale", "", "middle")}
      <rect class="b2 gr" x="52" y="146" width="90" height="28" rx="6"/>${lab(97, 200, "Tempo di reazione", "sm", "middle")}${lab(97, 216, "0,1–0,2 s", "tb", "middle")}
      <circle class="n" cx="150" cy="160" r="9"/>${lab(150, 136, "Via", "", "middle")}
      <rect class="o gr" style="--k:1" x="160" y="146" width="210" height="28" rx="6"/>${lab(265, 200, "Velocità di azione e di spostamento", "sm", "middle")}${lab(265, 216, "rapidità del gesto + frequenza", "to", "middle")}
      ${lab(30, 60, "Velocità = reagire presto + muoversi rapido")}
    `),
    flessibilita: S(`
      <path class="b3" d="M200 230 L200 60 A170 170 0 0 1 362 175 Z"/>
      <path class="o2" d="M200 230 L200 60 A170 170 0 0 1 320 110 Z"/>
      <path class="ln" d="M200 230 L200 60"/>
      <path class="lo dr" d="M200 230 L320 110"/>
      <path class="lbl" d="M200 230 L362 175" stroke-dasharray="6 6"/>
      <circle class="n" cx="200" cy="230" r="10"/>
      ${lab(210, 52, "Partenza")}${lab(330, 100, "Attiva", "to")}${lab(330, 116, "solo i tuoi muscoli", "sm")}
      ${lab(290, 206, "Passiva", "tb")}${lab(290, 222, "con un aiuto esterno", "sm")}
      ${lab(30, 276, "Escursione articolare (ROM): la passiva è sempre più ampia", "sm")}
    `, "0 0 480 300"),

    /* ---------- GIOCO E SPORT ---------- */
    caillois: S(`
      ${[["Agon", "competizione", "o"], ["Alea", "fortuna", "b"], ["Mimicry", "imitazione", "o2"], ["Ilinx", "vertigine", "b2"]].map(([a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="${k % 2 ? 206 : 30}" y="${k > 1 ? 162 : 40}" width="164" height="108" rx="14"/>${lab((k % 2 ? 206 : 30) + 82, (k > 1 ? 162 : 40) + 54, a, k < 2 ? "tw" : "", "middle")}${lab((k % 2 ? 206 : 30) + 82, (k > 1 ? 162 : 40) + 74, b, k < 2 ? "tw" : "sm", "middle")}</g>`).join("")}
      ${lab(200, 26, "I quattro tipi di gioco secondo Caillois", "sm", "middle")}
    `),
    giocosport: S(`
      ${[["Gioco libero", "regole inventate", "b2"], ["Gioco con regole", "accordo tra i giocatori", "b"], ["Gioco-sport", "regole semplificate", "o2"], ["Sport", "regole ufficiali, federazioni", "o"]].map(([a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="${30 + k * 20}" y="${236 - k * 62}" width="${340 - k * 40}" height="50" rx="12"/>${lab(200, 258 - k * 62, a, k % 2 ? "tw" : "", "middle")}${lab(200, 276 - k * 62, b, k % 2 ? "tw" : "sm", "middle")}</g>`).join("")}
      ${lab(200, 26, "Più regole, più organizzazione", "sm", "middle")}
    `),

    /* ---------- DIGERENTE ---------- */
    digerente: S(`
      <path class="iv sk" d="M160 20 C150 20 140 30 140 44 C140 60 150 70 160 70 L150 84 C120 92 108 120 108 160 L108 288 H292 V160 C292 120 280 92 250 84 L240 70 C250 70 260 60 260 44 C260 30 250 20 240 20Z" opacity=".55"/>
      <path class="lo dr" d="M200 56 L200 120"/>
      <path class="o2 sk" d="M200 120 C230 110 262 120 262 140 C262 166 230 176 206 168 C194 164 192 150 200 146"/>
      <path class="b2 sk" d="M140 128 C150 112 196 110 198 124 L190 150 C176 150 150 146 140 128Z"/>
      <path class="lbl dr" d="M150 204 L150 180 Q150 170 160 170 L246 170 Q256 170 256 180 L256 262 L150 262 L150 228"/>
      <path class="ln dr" d="M170 196 C190 186 210 206 230 196 C240 190 236 212 220 214 C200 216 186 226 200 236 C214 246 236 234 236 248 C236 254 190 252 180 244"/>
      ${lab(270, 56, "Esofago", "to")}${lead(200, 80, 266, 52)}
      ${lab(272, 136, "Stomaco")}
      ${lab(20, 128, "Fegato", "tb")}${lead(146, 132, 74, 124)}
      ${lab(270, 210, "Intestino crasso", "tb")}
      ${lab(20, 224, "Intestino tenue")}${lead(178, 220, 132, 220)}
    `),
    villo: S(`
      <rect class="o2" x="20" y="226" width="360" height="40" rx="8"/>
      ${[0, 1, 2, 3, 4].map(k => `<g class="gr" style="--k:${k}"><path class="iv sk" d="M${54 + k * 72} 228 L${54 + k * 72} 92 C${54 + k * 72} 60 ${98 + k * 72} 60 ${98 + k * 72} 92 L${98 + k * 72} 228Z"/><path class="lt" stroke="#E8692F" d="M${64 + k * 72} 226 V96 C${64 + k * 72} 80 ${88 + k * 72} 80 ${88 + k * 72} 96 V226"/><path class="lt" stroke="#3A6BC4" d="M${76 + k * 72} 226 V88"/></g>`).join("")}
      ${lab(20, 30, "Villi intestinali")}${lab(20, 48, "milioni di «dita» che moltiplicano la superficie", "sm")}
      ${lab(200, 288, "capillari (arancio) e vaso linfatico (blu) raccolgono i nutrienti", "sm", "middle")}
    `),

    /* ---------- ALIMENTAZIONE ---------- */
    piramide: S(`
      ${[["Dolci, carni lavorate", "raramente", "n", 6], ["Carne, uova, pesce, legumi", "ogni settimana", "o", 5], ["Latticini, frutta secca, olive", "ogni giorno", "o2", 4], ["Olio EVO, erbe, spezie", "ogni giorno", "b2", 3], ["Frutta, verdura, cereali integrali", "a ogni pasto", "b", 2], ["Acqua · attività fisica · convivialità", "base dello stile di vita", "b3", 1]].map(([a, b, c, s], k) => {
        const y = 22 + k * 44, half = 30 + k * 30;
        return `<path class="${c} fi" style="--k:${5 - k}" d="M${200 - half} ${y + 40} L${200 - half + 24} ${y} L${200 + half - 24} ${y} L${200 + half} ${y + 40}Z"/>${k > 1 ? lab(200, y + 18, a, k === 4 ? "tw" : "", "middle") + lab(200, y + 34, b, k === 4 ? "tw" : "sm", "middle") : ""}`;
      }).join("")}
      ${lab(256, 34, "Dolci, carni lavorate: raramente", "sm")}${lab(270, 74, "Carne, uova, pesce,", "sm")}${lab(270, 88, "legumi: ogni settimana", "sm")}
    `, "0 0 460 290"),
    pasti: S(`
      ${[["Colazione", 20, "o"], ["Spuntino", 5, "o2"], ["Pranzo", 40, "b"], ["Merenda", 5, "o2"], ["Cena", 30, "b2"]].map(([a, p, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${36 + k * 70}" y="${246 - p * 4.4}" width="52" height="${p * 4.4}" rx="8"/>${lab(62 + k * 70, 236 - p * 4.4, p + "%", "", "middle")}${lab(62 + k * 70, 270, a, "sm", "middle")}`).join("")}
      ${lab(30, 24, "Come dividere l'energia della giornata")}
    `),
    imc: S(`
      ${[["Sottopeso", "< 18,5", "b2", 60], ["Normopeso", "18,5–24,9", "b", 110], ["Sovrappeso", "25–29,9", "o2", 80], ["Obesità", "≥ 30", "o", 90]].map(([a, b, c, w], k, arr) => {
        const x = 20 + arr.slice(0, k).reduce((s, v) => s + v[3], 0) * 1.0 + k * 0;
        return `<rect class="${c} fi" style="--k:${k}" x="${x}" y="140" width="${w}" height="44" rx="${k === 0 || k === 3 ? 10 : 0}"/>${lab(x + w / 2, 128, b, "sm", "middle")}${lab(x + w / 2, 208, a, "", "middle")}`;
      }).join("")}
      <path class="n" d="M140 112 l-9 -14 h18z"/>
      ${lab(20, 50, "IMC = peso (kg) ÷ altezza² (m)")}
      ${lab(20, 76, "es. 60 kg, 1,70 m → 60 ÷ 2,89 = 20,8", "sm")}
      ${lab(20, 260, "Nei ragazzi si usano i percentili per età e sesso", "sm")}
    `, "0 0 380 290"),
    acqua: S(`
      <path class="iv sk" d="M200 20 C222 20 236 36 236 58 C236 80 222 94 200 94 C178 94 164 80 164 58 C164 36 178 20 200 20Z"/>
      <path class="iv sk" d="M150 104 H250 C266 104 276 116 276 132 V200 H250 V290 H150 V200 H124 V132 C124 116 134 104 150 104Z"/>
      <path class="b gr" d="M150 160 H250 V290 H150Z M124 160 H150 V200 H124Z M250 160 H276 V200 H250Z" opacity=".8"/>
      ${lab(300, 170, "circa 60%", "tb")}${lab(300, 188, "del peso è acqua", "sm")}
      ${lab(20, 230, "neonato 75–80%", "sm")}${lab(20, 248, "anziano 50%", "sm")}
      ${lab(20, 40, "Sete = hai già perso", "sm")}${lab(20, 56, "acqua: gioca d'anticipo", "sm")}
    `, "0 0 420 300"),
    piatto: S(`
      <circle class="iv sk" cx="200" cy="150" r="124"/>
      <path class="b fi" style="--k:0" d="M200 150 L200 36 A114 114 0 0 1 300 205 Z"/>
      <path class="o2 fi" style="--k:1" d="M200 150 L300 205 A114 114 0 0 1 120 233 Z"/>
      <path class="o fi" style="--k:2" d="M200 150 L120 233 A114 114 0 0 1 200 36 Z"/>
      ${lab(250, 120, "Verdura", "tw", "middle")}${lab(250, 136, "e frutta ½", "tw", "middle")}
      ${lab(206, 206, "Cereali", "", "middle")}${lab(206, 222, "integrali ¼", "", "middle")}
      ${lab(150, 126, "Proteine ¼", "tw", "middle")}
      ${lab(360, 40, "+ acqua", "tb", "end")}${lab(360, 56, "+ olio EVO", "sm", "end")}
    `),

    /* ---------- ALIMENTAZIONE E SPORT ---------- */
    disidratazione: S(`
      ${[["1%", "temperatura ↑", 30, "b2"], ["2%", "prestazione ↓", 60, "o2"], ["3–5%", "crampi, nausea", 110, "o"], ["7%+", "pericolo", 170, "n"]].map(([a, b, h, c], k) =>
        `<rect class="${c} gr" style="--k:${k}" x="${40 + k * 88}" y="${240 - h}" width="68" height="${h}" rx="10"/>${lab(74 + k * 88, 230 - h, a, "", "middle")}${lab(74 + k * 88, 262, b, "sm", "middle")}`).join("")}
      ${lab(40, 30, "Peso perso con il sudore")}
    `),
    borraccia: S(`
      <path class="ln" d="M30 160 H380"/>
      ${[["Prima", "5–10 mL/kg", "2–4 ore prima", 70], ["Durante", "0,4–0,8 L/ora", "a piccoli sorsi", 200], ["Dopo", "125–150%", "di quanto perso", 330]].map(([a, b, c, x], k) =>
        `<g class="fi" style="--k:${k}"><circle class="${["b2", "o", "b"][k]}" cx="${x}" cy="160" r="22"/>${lab(x, 166, k + 1, k ? "tw" : "", "middle")}${lab(x, 112, a, "", "middle")}${lab(x, 204, b, "to", "middle")}${lab(x, 222, c, "sm", "middle")}</g>`).join("")}
      ${lab(30, 50, "Idratazione: prima, durante, dopo")}
      ${lab(30, 276, "Oltre 60′: bevande con 6–8% di carboidrati e sali", "sm")}
    `),
    wada: S(`
      <path class="n" d="M200 20 L320 60 V140 C320 210 270 260 200 284 C130 260 80 210 80 140 V60Z"/>
      <path class="w" d="M200 44 L298 76 V140 C298 196 258 238 200 258 C142 238 102 196 102 140 V76Z"/>
      <path class="lo dr" d="M150 150 L186 186 L254 112"/>
      ${lab(200, 230, "Sport pulito", "", "middle")}
    `),

    /* ---------- TEST MOTORI ---------- */
    navetta: S(`
      <path class="lo" d="M60 60 V250 M340 60 V250"/>
      <path class="ld" d="M60 150 H340"/>
      ${lab(200, 140, "20 metri", "", "middle")}
      <circle class="n" cx="110" cy="190" r="12"/>
      <path class="lbl dr" d="M126 190 H320 M310 182 l10 8 -10 8"/>
      <path class="lbl dr" d="M320 220 H80 M90 212 l-10 8 10 8"/>
      ${lab(200, 40, "Test navetta (Léger)", "", "middle")}
      ${lab(200, 280, "andata e ritorno al «bip», che accelera ogni minuto", "sm", "middle")}
    `),
    salto: S(`
      <path class="ln" d="M20 250 H380"/>
      <path class="lo" d="M60 240 V260"/>
      ${[60, 100, 140, 180, 220, 260, 300, 340].map((x, k) => `<path class="lt" d="M${x} 250 v8"/>${lab(x, 278, k * 0.5 + " m", "sm", "middle")}`).join("")}
      <path class="ld" d="M70 230 C120 90 220 90 270 230"/>
      <circle class="n" cx="70" cy="214" r="12"/><circle class="o" cx="270" cy="214" r="12"/>
      ${lab(200, 50, "Salto in lungo da fermo", "", "middle")}${lab(200, 70, "si misura al tallone più arretrato", "sm", "middle")}
    `),
    sitreach: S(`
      <rect class="b2 sk" x="200" y="150" width="150" height="100" rx="6"/>
      <rect class="iv sk" x="180" y="140" width="190" height="12" rx="3"/>
      ${[0, 1, 2, 3, 4, 5].map(k => `<path class="lt" d="M${200 + k * 30} 140 v-6"/>`).join("")}
      <path class="ln" d="M40 250 H200 M60 250 C70 200 100 160 150 150 L230 140"/>
      <circle class="n" cx="70" cy="200" r="14"/>
      <path class="o" d="M230 132 l18 8 -18 8z"/>
      ${lab(40, 40, "Sit and reach")}${lab(40, 58, "busto avanti, ginocchia tese, 2 secondi fermi", "sm")}
      ${lab(270, 120, "cm", "to", "middle")}
    `),

    /* ---------- SALUTE DINAMICA ---------- */
    oms: S(`
      <g class="fi" style="--k:0"><circle class="o" cx="110" cy="120" r="78"/><text x="110" y="122" class="tw" text-anchor="middle" style="font-size:44px">60′</text><text x="110" y="148" class="tw" text-anchor="middle">al giorno</text>
        ${lab(110, 228, "Ragazzi 5–17 anni", "", "middle")}${lab(110, 246, "moderata o vigorosa", "sm", "middle")}${lab(110, 262, "+ forza 3 volte a settimana", "sm", "middle")}</g>
      <g class="fi" style="--k:1"><circle class="b" cx="290" cy="120" r="78"/><text x="290" y="122" class="tw" text-anchor="middle" style="font-size:40px">150′</text><text x="290" y="148" class="tw" text-anchor="middle">a settimana</text>
        ${lab(290, 228, "Adulti", "", "middle")}${lab(290, 246, "moderata (o 75′ vigorosa)", "sm", "middle")}${lab(290, 262, "+ forza 2 volte a settimana", "sm", "middle")}</g>
    `),
    prevenzione: S(`
      ${[["Primaria", "evita che la malattia compaia", "b", 0], ["Secondaria", "la scopre presto e ne ferma l'evoluzione", "o2", 1], ["Terziaria", "riduce le complicanze e aiuta il recupero", "o", 2]].map(([a, b, c, k]) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="${30 + k * 20}" y="${40 + k * 80}" width="${340 - k * 40}" height="66" rx="14"/>${lab(56 + k * 20, 70 + k * 80, a, k === 1 ? "" : "tw")}${lab(56 + k * 20, 90 + k * 80, b, k === 1 ? "sm" : "tw sm")}</g>`).join("")}
      ${lab(200, 26, "L'attività fisica aiuta in tutti e tre i livelli", "sm", "middle")}
    `),
    fitness: S(`
      ${(() => { const P = [[200, 40], [318, 126], [272, 262], [128, 262], [82, 126]]; const L = ["Cardiorespiratoria", "Forza e resistenza", "Flessibilità", "Equilibrio", "Velocità"]; const pos = [[200, 28, "middle"], [326, 130, "start"], [280, 286, "middle"], [120, 286, "middle"], [74, 130, "end"]];
        return `<path class="b3 sk" d="M${P.map(p => p.join(" ")).join(" L")}Z"/><path class="o2" d="M200 80 L280 132 L252 228 L148 228 L120 132Z" opacity=".9"/>` + P.map((p, k) => `<circle class="${k % 2 ? "b" : "o"} fi" style="--k:${k}" cx="${p[0]}" cy="${p[1]}" r="12"/>` + lab(pos[k][0], pos[k][1], L[k], "", pos[k][2])).join("") + lab(200, 166, "Physical", "", "middle") + lab(200, 184, "fitness", "", "middle"); })()}
    `, "-50 0 500 300"),
    sonnociclo: S(`
      <path class="ln" d="M40 40 V250 H380"/>
      ${["Veglia", "REM", "N1", "N2", "N3"].map((t, k) => lab(34, 64 + k * 44, t, "sm", "end")).join("")}
      <path class="lo dr" d="M42 60 L60 104 L74 148 L90 192 L120 236 L150 236 L166 192 L180 104 L196 104 L206 148 L222 192 L238 236 L258 236 L268 192 L280 104 L300 104 L308 148 L322 192 L334 192 L342 104 L366 104 L376 60"/>
      ${lab(210, 274, "ore di sonno →  cicli di circa 90 minuti", "sm", "middle")}
      ${lab(120, 230, "sonno profondo", "tb", "middle")}${lab(340, 96, "più REM", "to", "middle")}
    `, "0 0 400 290"),

    /* ---------- SCHELETRICO ---------- */
    osso: S(`
      <path class="iv sk" d="M150 30 C120 30 110 60 130 76 L150 92 L150 210 L130 226 C110 242 120 272 150 272 C164 272 172 262 180 254 C188 262 196 272 210 272 C240 272 250 242 230 226 L210 210 L210 92 L230 76 C250 60 240 30 210 30 C196 30 188 40 180 48 C172 40 164 30 150 30Z"/>
      <rect class="o2" x="160" y="100" width="40" height="104" rx="10"/>
      <path class="b2" d="M140 46 Q180 30 220 46 L210 82 L150 82Z" opacity=".9"/><path class="b2" d="M140 256 Q180 272 220 256 L210 220 L150 220Z" opacity=".9"/>
      ${lead(205, 60, 270, 50)}${lab(276, 46, "Epifisi")}${lab(276, 62, "osso spugnoso, midollo rosso", "sm")}
      ${lead(210, 150, 270, 150)}${lab(276, 146, "Diafisi")}${lab(276, 162, "osso compatto", "sm")}
      ${lead(180, 150, 100, 150)}${lab(20, 140, "Cavità")}${lab(20, 156, "midollare", "")}${lab(20, 172, "midollo giallo", "sm")}
      ${lead(206, 92, 270, 104)}${lab(276, 106, "Metafisi", "to")}${lab(276, 122, "cartilagine di crescita", "sm")}
    `, "0 0 480 300"),
    colonna: S(`
      ${Array.from({ length: 24 }, (_, k) => { const y = 24 + k * 10.4; const x = 200 + 22 * Math.sin((k / 24) * 2 * Math.PI * 1.05 + 0.4); const c = k < 7 ? "b" : k < 19 ? "o2" : "o"; const w = 18 + k * 0.9; return `<rect class="${c}" x="${x - w / 2}" y="${y}" width="${w}" height="8" rx="3"/>`; }).join("")}
      <path class="iv sk" d="M178 276 L222 276 L210 300 L190 300Z"/>
      ${lab(250, 60, "Cervicale · 7", "tb")}${lab(260, 150, "Toracica · 12")}${lab(250, 236, "Lombare · 5", "to")}${lab(240, 290, "Sacro e coccige", "sm")}
      ${lab(20, 60, "lordosi", "sm")}${lab(20, 150, "cifosi", "sm")}${lab(20, 236, "lordosi", "sm")}
    `, "0 0 400 310"),
    tipiossa: S(`
      ${[["Lunghe", "femore", "M40 70 h18 v110 h-18z M34 60 h30 v14 h-30z M34 176 h30 v14 h-30z"], ["Corte", "carpo", "M118 110 h40 v40 h-40z"], ["Piatte", "scapola", "M190 80 L260 90 L240 180 Z"], ["Irregolari", "vertebre", "M290 110 h40 v30 h-40z M300 140 l-10 20 M320 140 l10 20 M310 110 v-20"], ["Sesamoidi", "rotula", "M430 120 a18 22 0 1 0 0.1 0z"]].map(([a, b, d], k) =>
        `<g class="fi" style="--k:${k}"><path class="${k % 2 ? "o2" : "b2"} sk" d="${d}"/>${lab([50, 138, 222, 312, 412][k], 230, a, "", "middle")}${lab([50, 138, 222, 312, 412][k], 248, b, "sm", "middle")}</g>`).join("")}
    `, "0 0 460 280"),
    rimodella: S(`
      <rect class="iv sk" x="40" y="150" width="320" height="80" rx="10"/>
      <g class="fi" style="--k:0"><circle class="o" cx="120" cy="150" r="30"/>${lab(120, 155, "OC", "tw", "middle")}${lab(120, 100, "Osteoclasti", "to", "middle")}${lab(120, 116, "riassorbono", "sm", "middle")}</g>
      <path class="o2" d="M90 150 Q120 190 150 150Z"/>
      <g class="fi" style="--k:1"><circle class="b" cx="270" cy="140" r="24"/><circle class="b" cx="300" cy="140" r="20"/>${lab(285, 145, "OB", "tw", "middle")}${lab(285, 96, "Osteoblasti", "tb", "middle")}${lab(285, 112, "costruiscono", "sm", "middle")}</g>
      ${lab(200, 266, "Il movimento e il carico stimolano gli osteoblasti", "sm", "middle")}
    `),

    /* ---------- ARTICOLAZIONI ---------- */
    diartrosi: S(`
      <path class="iv sk" d="M140 20 L260 20 L260 100 C260 130 230 140 200 140 C170 140 140 130 140 100Z"/>
      <path class="iv sk" d="M140 290 L260 290 L260 210 C260 186 230 176 200 176 C170 176 140 186 140 210Z"/>
      <path class="b2" d="M146 112 C160 136 240 136 254 112 L254 118 C240 144 160 144 146 118Z"/>
      <path class="b2" d="M146 200 C160 180 240 180 254 200 L254 194 C240 172 160 172 146 194Z"/>
      <path fill="#C9E7F7" d="M150 128 C170 150 230 150 250 128 L250 186 C230 168 170 168 150 186Z" opacity=".8"/>
      <path class="lo dr" d="M128 90 C112 150 112 170 128 230 M272 90 C288 150 288 170 272 230"/>
      ${lead(250, 124, 300, 100)}${lab(306, 100, "Cartilagine", "tb")}
      ${lead(200, 158, 300, 160)}${lab(306, 156, "Liquido")}${lab(306, 172, "sinoviale", "")}
      ${lead(280, 200, 310, 230)}${lab(316, 234, "Capsula", "to")}
      ${lab(20, 156, "Diartrosi", "")}${lab(20, 172, "mobile", "sm")}
    `, "0 0 420 300"),
    tipiart: S(`
      ${[["Sinartrosi", "immobili", "cranio", "M30 120 l20 -10 l20 14 l20 -12 l20 10 l20 -8"], ["Anfiartrosi", "poco mobili", "vertebre", "M150 100 h80 M150 140 h80"], ["Diartrosi", "mobili", "spalla, anca", "M296 96 a24 24 0 1 0 48 0 M296 150 a24 24 0 0 1 48 0"]].map(([a, b, c, d], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${["b3", "b2", "o2"][k]}" x="${20 + k * 128}" y="60" width="120" height="120" rx="16"/><path class="ln" d="${d}"/>${lab(80 + k * 128, 206, a, "", "middle")}${lab(80 + k * 128, 224, b, "to", "middle")}${lab(80 + k * 128, 242, c, "sm", "middle")}</g>`).join("")}
    `, "0 0 400 270"),
    movimenti: S(`
      ${[["Flessione", "M60 200 L60 120 L110 80"], ["Estensione", "M160 200 L160 120 L160 50"], ["Abduzione", "M260 200 L260 120 M260 120 L310 90"], ["Rotazione", "M350 120 a24 24 0 1 1 -0.1 0"]].map(([a, d], k) =>
        `<g class="fi" style="--k:${k}"><path class="lo" d="${d}"/><circle class="n" cx="${[60, 160, 260, 350][k]}" cy="120" r="7"/>${lab([60, 160, 270, 350][k], 240, a, "", "middle")}</g>`).join("")}
      <path class="ld" d="M60 120 L60 50 M260 120 L260 50"/>
      ${lab(200, 28, "Movimenti attorno a un'articolazione", "sm", "middle")}
    `),

    /* ---------- MUSCOLARE ---------- */
    sarcomero: S(`
      <path class="ln" d="M40 60 V240 M360 60 V240"/>${lab(40, 50, "Z", "", "middle")}${lab(360, 50, "Z", "", "middle")}
      ${[90, 130, 170, 210].map(y => `<path class="lbl" d="M40 ${y} H170 M360 ${y} H230"/>`).join("")}
      ${[110, 150, 190].map(y => `<path d="M130 ${y} H270" stroke="#E8692F" stroke-width="9" stroke-linecap="round"/>`).join("")}
      ${lab(100, 270, "actina (sottile)", "tb", "middle")}${lab(300, 270, "miosina (spessa)", "to", "middle")}
      <path class="ln dr" d="M150 30 L180 30 M250 30 L220 30"/><path class="n" d="M180 24 l10 6 -10 6z M220 24 l-10 6 10 6z"/>
      ${lab(200, 20, "contrazione: l'actina scorre verso il centro", "sm", "middle")}
    `, "0 0 400 290"),
    muscolo: S(`
      <path class="o sk" d="M30 150 C30 80 120 70 160 110 C130 150 130 150 160 190 C120 230 30 220 30 150Z"/>
      ${lab(90, 255, "Muscolo", "", "middle")}
      <path class="ld" d="M160 110 L200 80 M160 190 L200 220"/>
      <g class="fi" style="--k:1"><rect class="o2 sk" x="200" y="80" width="70" height="140" rx="30"/>${[100, 130, 160, 190].map(y => `<circle class="o" cx="235" cy="${y}" r="11"/>`).join("")}${lab(235, 255, "Fascio", "", "middle")}</g>
      <g class="fi" style="--k:2"><rect class="iv sk" x="300" y="110" width="40" height="80" rx="18"/>${[125, 145, 165, 180].map(y => `<path class="lt" stroke="#E8692F" d="M308 ${y} H332"/>`).join("")}${lab(320, 255, "Fibra", "", "middle")}${lab(320, 273, "miofibrille", "sm", "middle")}</g>
      ${lab(200, 30, "Dal muscolo alla fibra", "sm", "middle")}
    `, "0 0 400 290"),
    agonista: S(`
      <path class="iv sk" d="M70 60 L110 50 L120 170 L84 176Z"/>
      <path class="iv sk" d="M110 170 L120 160 L300 120 L306 148 L128 194Z"/>
      <circle class="n" cx="112" cy="174" r="9"/>
      <path class="o" d="M112 64 C150 80 150 140 128 166 L116 162 C130 130 126 92 104 74Z"/>
      <path class="b" d="M70 70 C52 100 56 150 80 176 L92 170 C76 140 74 106 84 74Z"/>
      ${lab(160, 92, "Bicipite", "to")}${lab(160, 108, "agonista: si accorcia", "sm")}
      ${lab(14, 230, "Tricipite", "tb")}${lab(14, 246, "antagonista: si allunga", "sm")}
      ${lab(220, 200, "Flessione del gomito", "")}
    `, "0 0 380 270"),
    fibre: S(`
      ${[["Tipo I", "lente, rosse", "resistenti", "o", 200], ["Tipo IIa", "veloci", "intermedie", "o2", 150], ["Tipo IIx", "veloci, bianche", "si stancano presto", "b3", 100]].map(([a, b, c, cl, h], k) =>
        `<rect class="${cl} sk gr" style="--k:${k}" x="${40 + k * 120}" y="${240 - h}" width="80" height="${h}" rx="12"/>${lab(80 + k * 120, 262, a, "", "middle")}${lab(80 + k * 120, 278, b, "sm", "middle")}${lab(80 + k * 120, 294, c, "sm", "middle")}`).join("")}
      ${lab(40, 26, "Resistenza alla fatica", "sm")}
    `, "0 0 400 300"),

    /* ---------- NERVOSO ---------- */
    neurone: S(`
      <circle class="o2 sk" cx="80" cy="150" r="34"/><circle class="o" cx="80" cy="150" r="12"/>
      <path class="ln" d="M52 132 L20 100 M30 112 L14 120 M56 170 L24 204 M48 140 L10 150 M66 120 L54 84 M60 98 L44 92"/>
      <path class="ln" d="M114 150 H340"/>
      ${[130, 180, 230, 280].map((x, k) => `<rect class="b2 sk fi" style="--k:${k}" x="${x}" y="140" width="40" height="20" rx="10"/>`).join("")}
      <path class="ln" d="M340 150 L370 120 M340 150 L376 150 M340 150 L370 180"/>
      <circle class="b" cx="372" cy="120" r="6"/><circle class="b" cx="378" cy="150" r="6"/><circle class="b" cx="372" cy="180" r="6"/>
      <path class="lo dr" d="M130 120 H330 M318 112 l12 8 -12 8"/>
      ${lab(80, 220, "Corpo cellulare", "", "middle")}${lab(22, 70, "Dendriti", "sm")}${lab(230, 200, "Assone con guaina mielinica", "", "middle")}${lab(360, 222, "Terminali", "sm", "middle")}${lab(230, 104, "impulso nervoso", "to", "middle")}
    `, "0 0 400 260"),
    sn: S(`
      <rect class="n" x="140" y="20" width="120" height="56" rx="14"/>${lab(200, 46, "SNC", "tw", "middle")}${lab(200, 64, "encefalo + midollo", "tw sm", "middle")}
      <path class="ln" d="M200 76 V110 M200 110 H90 M200 110 H310 M90 110 V130 M310 110 V130"/>
      <rect class="o" x="30" y="130" width="120" height="56" rx="14"/>${lab(90, 156, "SNP somatico", "tw", "middle")}${lab(90, 174, "volontario", "tw sm", "middle")}
      <rect class="b" x="250" y="130" width="120" height="56" rx="14"/>${lab(310, 156, "SNP autonomo", "tw", "middle")}${lab(310, 174, "automatico", "tw sm", "middle")}
      <path class="ln" d="M310 186 V210 M310 210 H250 M310 210 H370 M250 210 V226 M370 210 V226"/>
      <rect class="o2" x="196" y="226" width="110" height="50" rx="12"/>${lab(251, 248, "Simpatico", "", "middle")}${lab(251, 266, "attacco o fuga", "sm", "middle")}
      <rect class="b2" x="314" y="226" width="80" height="50" rx="12"/>${lab(354, 248, "Para-", "", "middle")}${lab(354, 266, "simpatico", "sm", "middle")}
    `, "0 0 400 290"),
    riflesso: S(`
      <path class="iv sk" d="M60 40 L120 40 L130 170 L80 180Z"/><path class="iv sk" d="M80 180 L130 170 L150 280 L110 286Z"/>
      <circle class="b2 sk" cx="122" cy="176" r="12"/>
      <path class="n" d="M170 150 l-36 20 6 10 36 -20z"/>${lab(180, 146, "martelletto", "sm")}
      <rect class="b3 sk" x="290" y="40" width="80" height="80" rx="40"/>${lab(330, 85, "midollo", "", "middle")}
      <path class="lbl dr" d="M120 190 C200 210 280 160 300 110"/>${lab(250, 236, "neurone sensitivo", "tb", "middle")}
      <path class="lo dr" d="M318 112 C330 200 200 120 110 90"/>${lab(230, 70, "neurone motorio", "to", "middle")}
      ${lab(30, 300, "Il riflesso rotuleo non passa dal cervello: risposta in pochi millisecondi", "sm")}
    `, "0 0 400 310"),

    /* ---------- ENDOCRINO ---------- */
    ghiandole: S(`
      <path class="iv sk" d="M200 14 C222 14 236 30 236 52 C236 74 222 88 200 88 C178 88 164 74 164 52 C164 30 178 14 200 14Z" opacity=".7"/>
      <path class="iv sk" d="M150 98 H250 C268 98 278 110 278 128 V230 H122 V128 C122 110 132 98 150 98Z" opacity=".7"/>
      ${[[200, 40, "Ipotalamo e ipofisi", 230, 34, "o"], [196, 62, "Epifisi", 120, 62, "b", "end"], [200, 102, "Tiroide", 240, 102, "o"], [200, 132, "Timo", 140, 132, "b", "end"], [176, 186, "Surrenali", 140, 186, "b", "end"], [214, 196, "Pancreas", 250, 196, "o"], [200, 224, "Gonadi", 240, 228, "o"]].map(([x, y, t, lx, ly, c, an], k) =>
        `<g class="fi" style="--k:${k}"><circle class="${c}" cx="${x}" cy="${y}" r="9"/><path class="lt" d="M${x} ${y} L${lx} ${ly}"/>${lab(an ? lx - 4 : lx + 4, ly + 5, t, "", an || "")}</g>`).join("")}
    `, "0 0 400 250"),
    feedback: S(`
      <rect class="n" x="140" y="20" width="120" height="50" rx="12"/>${lab(200, 50, "Ipotalamo", "tw", "middle")}
      <rect class="o" x="140" y="110" width="120" height="50" rx="12"/>${lab(200, 140, "Ipofisi", "tw", "middle")}
      <rect class="b" x="140" y="200" width="120" height="50" rx="12"/>${lab(200, 230, "Ghiandola", "tw", "middle")}
      <path class="ln" d="M200 70 V108 M192 98 l8 10 8 -10 M200 160 V198 M192 188 l8 10 8 -10"/>
      <path class="lbl dr" d="M262 226 C340 220 340 60 262 46"/><path class="b" d="M262 46 l12 -6 0 12z"/>
      ${lab(320, 140, "−", "tb", "middle")}${lab(300, 280, "Feedback negativo: l'ormone", "sm", "middle")}${lab(300, 296, "frena chi lo ha fatto produrre", "sm", "middle")}
      ${lab(60, 92, "ormone di", "sm", "middle")}${lab(60, 108, "rilascio", "sm", "middle")}${lab(60, 182, "ormone", "sm", "middle")}${lab(60, 198, "stimolante", "sm", "middle")}
    `, "0 0 400 300"),
    glicemia: S(`
      <path class="ln" d="M60 230 L340 230"/><path class="n" d="M190 230 l10 -24 10 24z"/>
      <g class="fi" style="--k:0"><rect class="b" x="40" y="160" width="130" height="50" rx="12"/>${lab(105, 190, "Insulina", "tw", "middle")}${lab(105, 140, "abbassa la glicemia", "sm", "middle")}${lab(105, 124, "dopo i pasti", "tb", "middle")}</g>
      <g class="fi" style="--k:1"><rect class="o" x="230" y="160" width="130" height="50" rx="12"/>${lab(295, 190, "Glucagone", "tw", "middle")}${lab(295, 140, "alza la glicemia", "sm", "middle")}${lab(295, 124, "a digiuno e sotto sforzo", "to", "middle")}</g>
      ${lab(200, 40, "Il pancreas tiene in equilibrio", "", "middle")}${lab(200, 60, "lo zucchero nel sangue: circa 70–100 mg/dL a digiuno", "sm", "middle")}
    `, "0 0 400 260"),

    /* ---------- IMMUNITARIO ---------- */
    difese: S(`
      ${[["Barriere", "pelle, mucose, muco, acidità", "b3"], ["Immunità innata", "macrofagi, neutrofili, NK: rapida, aspecifica", "b2"], ["Immunità acquisita", "linfociti T e B, anticorpi, memoria", "o"]].map(([a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="${30 + k * 18}" y="${30 + k * 82}" width="${340 - k * 36}" height="70" rx="16"/>${lab(50 + k * 18, 60 + k * 82, (k + 1) + "ª linea · " + a, k === 2 ? "tw" : "")}${lab(50 + k * 18, 82 + k * 82, b, k === 2 ? "tw sm" : "sm")}</g>`).join("")}
    `, "0 0 400 280"),
    anticorpo: S(`
      <path class="o sk" d="M190 270 V160 L120 80 L140 64 L200 138 Z"/><path class="o sk" d="M210 270 V160 L280 80 L260 64 L200 138Z"/>
      <path class="o2 sk" d="M120 80 L100 56 L120 40 L140 64Z M280 80 L300 56 L280 40 L260 64Z"/>
      <g class="fi" style="--k:1"><circle class="b" cx="104" cy="34" r="16"/><circle class="b" cx="296" cy="34" r="16"/></g>
      ${lab(14, 120, "Antigene", "tb")}${lab(14, 136, "la «chiave»", "sm")}${lab(14, 152, "del microbo", "sm")}${lab(250, 210, "Anticorpo")}${lab(250, 226, "prodotto dai linfociti B", "sm")}
    `),
    memoria: S(`
      <path class="ln" d="M40 30 V240 H380"/>${lab(46, 24, "anticorpi nel sangue", "sm")}${lab(380, 262, "tempo →", "sm", "end")}
      <path class="lbl dr" d="M42 236 C80 236 100 200 130 196 C160 194 170 230 200 234"/>
      <path class="lo dr" d="M220 236 C240 236 250 60 290 56 C330 54 340 150 378 170"/>
      <path class="ld" d="M60 240 V60 M230 240 V60"/>${lab(60, 56, "1° contatto", "sm", "middle")}${lab(230, 56, "2° contatto", "sm", "middle")}
      ${lab(130, 186, "risposta primaria", "tb", "middle")}${lab(290, 46, "secondaria: rapida e forte", "to", "middle")}
    `, "0 0 400 270"),
    curvaj: S(`
      <path class="ln" d="M40 30 V240 H380"/>${lab(46, 24, "rischio di infezioni", "sm")}${lab(380, 262, "carico di allenamento →", "sm", "end")}
      <path class="lo dr" d="M50 130 C110 210 170 210 230 180 C290 150 330 80 370 40"/>
      ${lab(60, 120, "sedentario", "sm")}${lab(170, 222, "moderato: difese più forti", "tb", "middle")}${lab(360, 70, "eccessivo", "to", "end")}
    `, "0 0 400 270"),

    /* ---------- PNEI ---------- */
    pnei: S(`
      <circle class="o" cx="200" cy="60" r="52"/>${lab(200, 58, "Psiche e", "tw", "middle")}${lab(200, 76, "sist. nervoso", "tw sm", "middle")}
      <circle class="b" cx="90" cy="220" r="52"/>${lab(90, 218, "Sistema", "tw sm", "middle")}${lab(90, 236, "endocrino", "tw sm", "middle")}
      <circle class="n" cx="310" cy="220" r="52"/>${lab(310, 218, "Sistema", "tw sm", "middle")}${lab(310, 236, "immunitario", "tw sm", "middle")}
      <path class="ld" d="M176 98 L112 182 M224 98 L288 182 M134 222 H266"/>
      ${lab(116, 130, "ormoni", "to", "end")}${lab(284, 130, "citochine", "tb")}${lab(200, 214, "segnali", "sm", "middle")}
      ${lab(200, 296, "Un'unica rete: stress, sonno, cibo e movimento la influenzano", "sm", "middle")}
    `, "0 0 400 305"),
    stress: S(`
      ${[["Stress percepito", "n"], ["Ipotalamo → CRH", "o"], ["Ipofisi → ACTH", "o2"], ["Surreni → cortisolo e adrenalina", "b"]].map(([a, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="60" y="${18 + k * 62}" width="280" height="46" rx="12"/>${lab(200, 46 + k * 62, a, c === "o2" ? "" : "tw", "middle")}</g>${k < 3 ? `<path class="ln" d="M200 ${64 + k * 62} v14"/>` : ""}`).join("")}
      ${lab(30, 284, "Acuto: utile, ti prepara all'azione · Cronico: abbassa le difese", "sm")}
    `, "0 0 400 295"),

    /* ---------- QUOTA E PROFONDITÀ ---------- */
    montagna: S(`
      <path class="b3" d="M0 300 L120 120 L170 170 L250 40 L400 300Z"/><path class="w" d="M228 76 L250 40 L272 76 L258 70 L250 82 L240 70Z"/>
      ${[[40, 280, "0 m · 760 mmHg · O₂ 100%"], [150, 196, "2000 m · ~80%"], [210, 120, "4000 m · ~62%"], [256, 34, "8848 m · ~33%"]].map(([x, y, t], k) => `<g class="fi" style="--k:${k}"><circle class="o" cx="${x}" cy="${y}" r="6"/>${lab(x + 12, y + 4, t, "sm")}</g>`).join("")}
      ${lab(14, 30, "Più sali, meno ossigeno a ogni respiro", "")}
    `, "0 0 400 300"),
    boyle: S(`
      <rect x="0" y="0" width="400" height="300" fill="#C9E7F7"/><rect x="0" y="0" width="400" height="14" fill="#9DD0EE"/>
      ${[[0, 1, 6], [10, 2, 3], [20, 3, 2], [30, 4, 1.5]].map(([d, p, v], k) => { const r = 30 * Math.sqrt(v / 6) + 6; return `<g class="fi" style="--k:${k}"><circle class="o2 sk" cx="${60 + k * 95}" cy="${70 + k * 38}" r="${r}"/>${lab(60 + k * 95, 76 + k * 38 + r + 22, d + " m", "", "middle")}${lab(60 + k * 95, 94 + k * 38 + r + 22, p + " atm · " + String(v).replace(".", ",") + " L", "sm", "middle")}</g>`; }).join("")}
      ${lab(200, 290, "Legge di Boyle: pressione × volume = costante", "", "middle")}
    `, "0 0 400 300"),

    /* ---------- PSICOLOGIA ---------- */
    arousal: S(`
      <path class="ln" d="M40 30 V240 H380"/>${lab(46, 24, "prestazione", "sm")}${lab(380, 262, "attivazione (arousal) →", "sm", "end")}
      <path class="lo dr" d="M44 230 C130 230 150 50 210 50 C270 50 290 230 376 230"/>
      <rect class="b3" x="160" y="40" width="100" height="196" opacity=".5"/>
      ${lab(80, 200, "apatia", "tb", "middle")}${lab(210, 34, "zona ottimale", "to", "middle")}${lab(340, 200, "ansia", "tb", "middle")}
    `, "0 0 400 270"),
    nideffer: S(`
      <path class="ln" d="M200 20 V280 M40 150 H360"/>
      ${lab(200, 14, "Ampia", "sm", "middle")}${lab(200, 296, "Stretta", "sm", "middle")}${lab(36, 146, "Esterna", "sm", "end")}${lab(364, 146, "Interna", "sm")}
      ${[[120, 80, "Leggere il gioco", "visione del campo", "b2"], [280, 80, "Pianificare", "tattica, strategia", "o2"], [120, 220, "Eseguire", "palla, bersaglio", "o"], [280, 220, "Ascoltarsi", "respiro, sensazioni", "b"]].map(([x, y, a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="${x - 74}" y="${y - 40}" width="148" height="80" rx="14"/>${lab(x, y - 4, a, c === "o" || c === "b" ? "tw" : "", "middle")}${lab(x, y + 16, b, c === "o" || c === "b" ? "tw sm" : "sm", "middle")}</g>`).join("")}
    `, "0 0 400 300"),
    flow: S(`
      <path class="ln" d="M40 30 V250 H370"/>${lab(46, 24, "difficoltà della sfida", "sm")}${lab(370, 272, "abilità →", "sm", "end")}
      <path class="o2" d="M40 250 L40 200 L330 30 L370 30 L370 70 L80 250Z" opacity=".85"/>
      ${lab(220, 130, "FLOW", "to", "middle")}${lab(100, 90, "ansia", "tb", "middle")}${lab(300, 220, "noia", "tb", "middle")}
    `, "0 0 400 280"),

    /* ---------- ADATTAMENTI ---------- */
    adattamenti: S(`
      ${[["Cuore", "più gittata, FC a riposo più bassa", "o"], ["Sangue", "più plasma ed emoglobina", "o2"], ["Muscolo", "più mitocondri, capillari, miofibrille", "b"], ["Ossa e tendini", "più densi e resistenti", "b2"], ["Metabolismo", "più sensibilità all'insulina, più grassi usati", "n"]].map(([a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="30" y="${18 + k * 54}" width="44" height="44" rx="12"/>${lab(88, 36 + k * 54, a)}${lab(88, 54 + k * 54, b, "sm")}</g>`).join("")}
    `, "0 0 400 290"),

    /* ---------- PARALIMPIADI ---------- */
    storia: S(`
      <path class="ln" d="M30 150 H370"/>
      ${[["1948", "Stoke Mandeville", "Guttmann"], ["1960", "Roma", "1ª Paralimpiade"], ["1989", "nasce l'IPC", ""], ["1992", "Barcellona", "stessi impianti"], ["oggi", "evento mondiale", ""]].map(([a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><circle class="${k % 2 ? "b" : "o"}" cx="${50 + k * 75}" cy="150" r="14"/>${lab(50 + k * 75, k % 2 ? 196 : 112, a, k % 2 ? "tb" : "to", "middle")}${lab(50 + k * 75, k % 2 ? 214 : 94, b, "sm", "middle")}${c ? lab(50 + k * 75, k % 2 ? 230 : 78, c, "sm", "middle") : ""}</g>`).join("")}
    `, "0 0 400 260"),
    icf: S(`
      <rect class="o" x="130" y="20" width="140" height="50" rx="12"/>${lab(200, 50, "Condizione di salute", "tw", "middle")}
      ${[["Funzioni e strutture", 20], ["Attività", 140], ["Partecipazione", 260]].map(([a, x], k) => `<g class="fi" style="--k:${k}"><rect class="b" x="${x}" y="120" width="120" height="50" rx="12"/>${lab(x + 60, 150, a, "tw sm", "middle")}</g>`).join("")}
      <path class="ln" d="M200 70 V96 M80 96 H320 M80 96 V120 M200 96 V120 M320 96 V120 M80 170 V196 M320 170 V196 M80 196 H320 M200 170 V196"/>
      <rect class="o2" x="40" y="210" width="150" height="50" rx="12"/>${lab(115, 240, "Fattori ambientali", "", "middle")}
      <rect class="o2" x="210" y="210" width="150" height="50" rx="12"/>${lab(285, 240, "Fattori personali", "", "middle")}
      ${lab(200, 290, "ICF (OMS, 2001): la disabilità nasce dall'interazione", "sm", "middle")}
    `, "0 0 400 300"),
    modelli: S(`
      <g class="fi" style="--k:0"><rect class="b3" x="20" y="60" width="160" height="150" rx="16"/>${lab(100, 96, "Modello medico", "", "middle")}${lab(100, 130, "la disabilità è", "sm", "middle")}${lab(100, 146, "un problema della", "sm", "middle")}${lab(100, 162, "persona da curare", "sm", "middle")}</g>
      <path class="lo dr" d="M190 135 H226 M216 125 l12 10 -12 10"/>
      <g class="fi" style="--k:1"><rect class="o" x="236" y="60" width="160" height="150" rx="16"/>${lab(316, 96, "Modello sociale", "tw", "middle")}${lab(316, 130, "la disabilità nasce", "tw sm", "middle")}${lab(316, 146, "dalle barriere", "tw sm", "middle")}${lab(316, 162, "dell'ambiente", "tw sm", "middle")}</g>
      ${lab(208, 250, "Oggi: approccio bio-psico-sociale", "", "middle")}
    `, "0 0 420 270"),

    /* ---------- CAPACITÀ COORDINATIVE ---------- */
    capacita: S(`
      <rect class="n" x="125" y="16" width="170" height="44" rx="12"/>${lab(210, 44, "Capacità motorie", "tw", "middle")}
      <path class="ln" d="M210 60 V80 M100 80 H320 M100 80 V100 M320 80 V100"/>
      <g class="fi" style="--k:0"><rect class="b" x="20" y="100" width="160" height="52" rx="12"/>${lab(100, 124, "Condizionali", "tw", "middle")}${lab(100, 142, "quantitative · muscoli", "tw sm", "middle")}
        ${["Forza", "Resistenza", "Velocità"].map((a, k) => `<rect class="b2" x="38" y="${168 + k * 40}" width="124" height="32" rx="9"/>${lab(100, 189 + k * 40, a, "", "middle")}`).join("")}</g>
      <g class="fi" style="--k:1"><rect class="o" x="240" y="100" width="160" height="52" rx="12"/>${lab(320, 124, "Coordinative", "tw", "middle")}${lab(320, 142, "qualitative · nervi", "tw sm", "middle")}
        <rect class="o2" x="258" y="168" width="124" height="44" rx="9"/>${lab(320, 186, "Generali", "", "middle")}${lab(320, 203, "apprendimento…", "sm", "middle")}
        <rect class="o2" x="258" y="220" width="124" height="44" rx="9"/>${lab(320, 238, "Speciali", "", "middle")}${lab(320, 255, "equilibrio, ritmo…", "sm", "middle")}</g>
      ${lab(210, 296, "Mobilità articolare: capacità «di confine»", "sm", "middle")}
    `, "0 0 420 306"),
    controllo: S(`
      ${[["Percettivo", "i sensi", 20, "b"], ["Elaborativo", "il cervello", 150, "n"], ["Effettore", "i muscoli", 280, "o"]].map(([a, b, x, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${c}" x="${x}" y="70" width="110" height="70" rx="14"/>${lab(x + 55, 100, a, "tw", "middle")}${lab(x + 55, 120, b, "tw sm", "middle")}</g>`).join("")}
      <path class="ln" d="M132 105 h14 M140 98 l8 7 -8 7 M262 105 h14 M270 98 l8 7 -8 7"/>
      <path class="lbl dr" d="M335 142 C335 220 300 236 205 236 C110 236 75 220 75 142"/>
      <path class="b" d="M75 140 l-8 13 h16z"/>
      <rect class="b2" x="130" y="214" width="150" height="44" rx="12"/>${lab(205, 234, "Controllo", "", "middle")}${lab(205, 250, "feedback: com'è andata?", "sm", "middle")}
      ${lab(200, 36, "Dal segnale al gesto, e ritorno", "", "middle")}
    `, "0 0 400 280"),
    equilibrio: S(`
      <g class="fi" style="--k:0">
        <circle class="n" cx="100" cy="56" r="14"/><path class="ln" d="M100 70 V150 M100 92 L70 120 M100 92 L130 120 M100 150 L94 228 M100 150 L106 228"/>
        <circle class="o" cx="100" cy="146" r="7"/><path class="ld" d="M100 146 V244"/>
        <rect class="b2" x="86" y="232" width="28" height="12" rx="4"/>
        ${lab(100, 270, "Base stretta", "", "middle")}${lab(100, 287, "baricentro alto: instabile", "sm", "middle")}
      </g>
      <g class="fi" style="--k:1">
        <circle class="n" cx="300" cy="86" r="14"/><path class="ln" d="M300 100 V164 M300 118 L262 138 M300 118 L338 138 M300 164 L262 196 L250 232 M300 164 L338 196 L350 232"/>
        <circle class="o" cx="300" cy="166" r="7"/><path class="ld" d="M300 166 V244"/>
        <rect class="b" x="236" y="232" width="128" height="12" rx="4"/>
        ${lab(300, 270, "Base larga, ginocchia flesse", "", "middle")}${lab(300, 287, "baricentro basso: stabile", "sm", "middle")}
      </g>
      <circle class="o" cx="186" cy="30" r="6"/>${lab(198, 35, "baricentro")}
    `, "0 0 400 300"),
    fasi: S(`
      ${[["Coordinazione grezza", "rigido, errori", "b2"], ["Coordinazione fine", "preciso, fluido", "b"], ["Disponibilità variabile", "adattabile", "o"]].map(([a, b, c], k) =>
        `<g class="gr" style="--k:${k}"><rect class="${c}" x="${30 + k * 122}" y="${190 - k * 60}" width="110" height="${70 + k * 60}" rx="10"/></g>${lab(85 + k * 122, 176 - k * 60, (k + 1) + "", k === 2 ? "to" : "tb", "middle")}${lab(85 + k * 122, 284, a.split(" ")[0], "", "middle")}${lab(85 + k * 122, 300, a.split(" ").slice(1).join(" "), "", "middle")}${lab(85 + k * 122, 318, b, "sm", "middle")}`).join("")}
      <path class="lo dr" d="M40 120 C140 110 240 70 380 30"/>
      ${lab(30, 30, "Le fasi dell'apprendimento motorio")}
    `, "0 0 410 330"),

    anello: S(`
      ${lab(20, 28, "Anello aperto", "to")}${lab(150, 28, "gesti rapidi: nessuna correzione", "sm")}
      ${[["Programma", "o2"], ["Muscoli", "b2"], ["Gesto", "b2"]].map(([t, c], k) => `<g class="fi" style="--k:${k}"><rect class="${c}" x="${20 + k * 130}" y="44" width="104" height="48" rx="10"/>${lab(72 + k * 130, 74, t, "", "middle")}</g>`).join("")}
      <path class="ln" d="M126 68 H146 M138 61 l8 7 -8 7 M256 68 H276 M268 61 l8 7 -8 7"/>
      ${lab(20, 150, "Anello chiuso", "tb")}${lab(150, 150, "gesti lenti e di precisione", "sm")}
      ${[["Confronto", "o2"], ["Muscoli", "b2"], ["Gesto", "b2"]].map(([t, c], k) => `<g class="fi" style="--k:${k + 3}"><rect class="${c}" x="${20 + k * 130}" y="166" width="104" height="48" rx="10"/>${lab(72 + k * 130, 196, t, "", "middle")}</g>`).join("")}
      <path class="ln" d="M126 190 H146 M138 183 l8 7 -8 7 M256 190 H276 M268 183 l8 7 -8 7"/>
      <path class="lbl dr" d="M332 214 V250 H72 V222"/><path class="b" d="M72 216 l-7 11 h14z"/>
      ${lab(202, 270, "feedback: occhi, propriocettori, tatto", "sm", "middle")}
    `, "0 0 400 284"),

    /* ---------- PRIMO SOCCORSO ---------- */
    catena: S(`
      ${[["1", "Allarme", "chiama il 112"], ["2", "RCP", "compressioni subito"], ["3", "DAE", "defibrillatore"], ["4", "Soccorso", "avanzato"]].map(([n, a, b], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${k % 2 ? "b" : "o"}" x="${14 + k * 98}" y="60" width="82" height="82" rx="41" fill-opacity=".14"/><rect fill="none" stroke="${k % 2 ? "#3A6BC4" : "#E8692F"}" stroke-width="7" x="${14 + k * 98}" y="60" width="82" height="82" rx="41"/>${lab(55 + k * 98, 110, n, k % 2 ? "tb" : "to", "middle")}${lab(55 + k * 98, 172, a, "", "middle")}${lab(55 + k * 98, 190, b, "sm", "middle")}</g>`).join("")}
      ${lab(200, 32, "La catena della sopravvivenza", "", "middle")}
      ${lab(200, 232, "Ogni minuto senza RCP riduce del 10% le probabilità", "sm", "middle")}${lab(200, 250, "di sopravvivere a un arresto cardiaco", "sm", "middle")}
    `, "0 0 400 266"),
    rcp: S(`
      <path class="b3 sk" d="M40 220 C40 196 70 186 120 186 L300 186 C340 186 366 196 366 220 Z"/>
      <circle class="b3 sk" cx="56" cy="196" r="26"/>
      <rect class="g" x="20" y="222" width="370" height="10" rx="5"/>${lab(390, 252, "piano rigido", "sm", "end")}
      <path class="sk o2" d="M178 186 L172 120 C172 108 196 104 200 116 L206 186Z"/>
      <path class="sk o2" d="M150 120 C150 100 230 100 230 120 L222 132 L158 132Z"/>
      <path class="ln" d="M190 104 V40"/><path class="ln" d="M180 40 H200"/>
      <path class="lo" d="M250 120 V170 M240 160 l10 12 10 -12"/>
      ${lab(268, 140, "5–6 cm")}${lab(268, 158, "metà inferiore", "sm")}${lab(268, 172, "dello sterno", "sm")}
      ${lab(206, 40, "100–120 al minuto", "to")}${lab(206, 60, "braccia tese, spalle", "sm")}${lab(206, 76, "sopra le mani", "sm")}
      ${lab(206, 100, "rapporto 30 : 2", "sm")}
    `, "0 0 400 270"),
    pls: S(`
      <rect class="g" x="20" y="226" width="360" height="8" rx="4"/>
      <circle class="b3 sk" cx="80" cy="170" r="24"/>
      <path class="b3 sk" d="M104 152 C140 140 220 140 262 156 L262 206 C220 220 140 220 104 204Z"/>
      <path class="sk b3" d="M262 166 L330 196 L320 226 L262 214Z"/>
      <path class="sk b2" d="M260 176 L300 140 L340 150 L328 168 L300 166 L268 200Z"/>
      <path class="sk b2" d="M150 156 C120 130 92 126 70 140 L80 156 C96 150 118 152 136 170Z"/>
      ${lead(76, 196, 76, 254)}${lab(40, 272, "bocca verso terra:", "sm")}${lab(40, 288, "la saliva esce", "sm")}
      ${lead(110, 148, 110, 92)}${lab(80, 84, "mano sotto la guancia", "sm")}
      ${lead(318, 156, 340, 92)}${lab(300, 84, "gamba piegata:", "sm")}${lab(300, 100, "il corpo non rotola", "sm")}
      ${lab(20, 36, "Posizione laterale di sicurezza", "to")}${lab(20, 56, "se respira ma non è cosciente", "sm")}
    `, "0 0 400 300"),
    rice: S(`
      ${[["R", "Rest", "riposo"], ["I", "Ice", "ghiaccio"], ["C", "Compression", "compressione"], ["E", "Elevation", "arto in alto"]].map(([a, b, c], k) =>
        `<g class="fi" style="--k:${k}"><rect class="${["n", "b", "o", "b2"][k]}" x="${18 + k * 96}" y="70" width="84" height="110" rx="14"/>${lab(60 + k * 96, 138, a, k === 3 ? "" : "tw", "middle")}${lab(60 + k * 96, 208, b, "", "middle")}${lab(60 + k * 96, 226, c, "sm", "middle")}</g>`).join("")}
      ${lab(200, 40, "Dopo un trauma a muscoli e articolazioni", "", "middle")}
      ${lab(200, 266, "Ghiaccio mai a contatto diretto con la pelle", "sm", "middle")}
    `, "0 0 400 280"),
    pressione: S(`
      <circle class="b3 sk" cx="200" cy="44" r="24"/>
      <path class="b3 sk" d="M170 70 H230 L250 170 H150Z"/>
      <path class="b3 sk" d="M170 76 L120 150 L108 220 M230 76 L280 150 L292 220" fill="none"/>
      <path class="b3 sk" d="M160 170 L150 290 M240 170 L250 290" fill="none"/>
      ${[[134, 128, "Omerale", 30, 120], [174, 186, "Femorale", 30, 214]].map(([x, y, t, lx, ly], k) => `<g class="fi" style="--k:${k}"><circle class="o" cx="${x}" cy="${y}" r="9"/>${lab(lx, ly, t)}</g>`).join("")}
      <path class="lt" d="M126 128 L98 120 M166 186 L104 210"/>
      ${lab(390, 100, "1. Premi sulla ferita", "", "end")}${lab(390, 118, "con garza e mano", "sm", "end")}${lab(390, 160, "2. Se non basta:", "", "end")}${lab(390, 178, "premi l'arteria contro", "sm", "end")}${lab(390, 194, "l'osso, a monte", "sm", "end")}
    `, "0 0 400 300")
  };
})();
