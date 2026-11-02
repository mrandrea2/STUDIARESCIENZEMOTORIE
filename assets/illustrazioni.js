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
    `)
  };
})();
