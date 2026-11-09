/* =========================================================
   LABORATORIO FITNESS — pagina #/fitness
   Lo studente inserisce i risultati dei test, vede la fascia di ogni
   prova, il profilo delle capacità e un livello fisico stimato.
   Tutto resta nel browser (localStorage): nessun dato esce dal dispositivo.
   ========================================================= */
(function () {
  "use strict";
  const F = window.FITNESS;
  const KEY = "ssm-fitness-v1";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const num = v => parseFloat(String(v).replace(",", "."));
  const f1 = v => (Math.round(v * 10) / 10).toLocaleString("it-IT");
  const ECG = `<svg class="ecg" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34 H70 L82 34 L90 14 L100 52 L110 6 L120 44 L128 34 H180 L190 34 L196 24 L204 40 L210 34 H300"/></svg>`;
  const ICO = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2.5-6 4 12L16 9l1.5 3H21"/></svg>`;

  /* banner animato (home e laboratorio di Test motori / Capacità condizionali) */
  window.fitBanner = (small) => `<a class="fitban${small ? " small" : ""}" href="#/fitness">
      <span class="fb-ic">${ICO}</span>
      <span class="fb-tx"><small>Laboratorio fitness</small><b>Scopri il tuo profilo fisico</b><span>Inserisci i risultati dei tuoi test e guarda in quale fascia sei, prova per prova.</span></span>
      <span class="fb-go">Inizia →</span>${ECG}
    </a>`;

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; } };
  const store = h => { try { localStorage.setItem(KEY, JSON.stringify(h)); return true; } catch (e) { return false; } };
  const parse = (t, raw) => {
    raw = String(raw || "").trim(); if (!raw) return NaN;
    if (t.tempo && raw.includes(":")) { const [m, s] = raw.split(":"); return num(m) * 60 + num(s || 0); }
    if (t.tempo) { const v = num(raw); return v < 30 ? v * 60 : v; } /* «4,5» = minuti, «270» = secondi */
    return num(raw);
  };
  const band = (t, sex, v) => {
    if (!(v > 0)) return -1;
    const s = t[sex]; let i = 0; while (i < 4 && v >= s[i]) i++;
    return t.basso ? 4 - i : i;
  };
  const show = (t, v) => t.tempo ? `${Math.floor(v / 60)}:${String(Math.round(v % 60)).padStart(2, "0")}` : f1(v);

  function radar(vals) {
    const keys = Object.keys(F.capacita), n = keys.length, cx = 160, cy = 150, R = 110;
    const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    const ring = k => keys.map((_, i) => pt(i, R * k / 5).join(",")).join(" ");
    const poly = keys.map((c, i) => pt(i, R * ((vals[c] == null ? -1 : vals[c]) + 1) / 5).join(",")).join(" ");
    return `<svg class="fit-radar" viewBox="-60 0 440 300" role="img" aria-label="Profilo delle capacità">
      ${[1, 2, 3, 4, 5].map(k => `<polygon points="${ring(k)}" class="rg${k === 3 ? " mid" : ""}"/>`).join("")}
      ${keys.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="rg"/>`; }).join("")}
      <polygon points="${poly}" class="rp"/>
      ${keys.map((c, i) => { const v = vals[c]; if (v == null) return ""; const [x, y] = pt(i, R * (v + 1) / 5); return `<circle cx="${x}" cy="${y}" r="5" class="rd"/>`; }).join("")}
      ${keys.map((c, i) => { const [x, y] = pt(i, R + 22); return `<text x="${x}" y="${y + 4}" text-anchor="${x < cx - 10 ? "end" : x > cx + 10 ? "start" : "middle"}" class="${vals[c] == null ? "off" : ""}">${esc(F.capacita[c].nome)}</text>`; }).join("")}
    </svg>`;
  }

  window.pageFitness = function (app) {
    let hist = load();
    const last = hist[hist.length - 1];
    let sex = (last && last.s) || "F";
    app.innerHTML = `
      <section class="band fit-band"><div class="wrap">
        <a class="crumb" href="#/">‹ Home</a>
        <p class="kicker">Laboratorio fitness</p>
        <h1>Il mio profilo fisico<em>test, fasce e consigli per migliorare</em></h1>
        <p class="lead" style="max-width:62ch">Inserisci i risultati dei test che hai fatto in palestra: per ogni prova vedi in quale fascia ti collochi rispetto agli studenti delle superiori, poi il profilo delle tue capacità e un livello fisico stimato.</p>
        ${ECG}
      </div></section>

      <section class="wrap section fit-wrap">
        <div class="card fit-who rv">
          <h2 class="fit-h"><span>1</span> Chi sei</h2>
          <p class="muted">Le fasce sono diverse per ragazze e ragazzi.</p>
          <div class="seg2 fit-sex"><button type="button" data-s="F">Ragazza</button><button type="button" data-s="M">Ragazzo</button></div>
        </div>

        <h2 class="fit-h rv"><span>2</span> I tuoi test <small>compila solo quelli che hai fatto</small></h2>
        <div class="fit-tests">${F.test.map((t, i) => `
          <article class="card ftest rv" data-k="${t.k}" style="--i:${i % 3}">
            <div class="ft-top"><b>${esc(t.nome)}</b><small>${esc(F.capacita[t.cap].nome)}</small></div>
            <label class="tf"><span>${esc(t.unita)}</span><input type="text" inputmode="decimal" placeholder="${esc(t.ph)}" data-k="${t.k}" autocomplete="off"></label>
            <div class="ft-bar" aria-hidden="true">${F.fasce.map((x, j) => `<i class="f${j}"></i>`).join("")}</div>
            <p class="ft-res" aria-live="polite">—</p>
            <details class="ft-how"><summary>Come si fa</summary><ol>${t.come.map(c => `<li>${esc(c)}</li>`).join("")}</ol></details>
          </article>`).join("")}</div>

        <h2 class="fit-h rv"><span>3</span> Il tuo profilo</h2>
        <div class="fit-out" id="fitOut"></div>

        <div class="fit-act fit-noprint">
          <button type="button" class="btn grad" id="fitSave">Salva il profilo di oggi</button>
          <button type="button" class="btn ghost" id="fitPrint">Stampa o salva in PDF</button>
          <span class="tnote" id="fitMsg" aria-live="polite"></span>
        </div>
        <div class="fit-hist" id="fitHist"></div>

        <div class="card fit-note rv">
          <p><b>Un test è una misura, non un voto.</b> Il giudizio riguarda la prova di quel giorno, non la persona: sonno, stanchezza, caldo o freddo cambiano il risultato. Ripeti i test nelle stesse condizioni e confrontati soprattutto con te stesso.</p>
          <p><b>I tuoi dati restano qui.</b> Risultati e profili salvati restano solo nel browser di questo dispositivo: non vengono inviati a nessuno, nemmeno al prof.</p>
          <p class="tnote">Fasce: media ± deviazioni standard di studenti delle superiori, 2017–2021. Fonte: N. Lovecchio, <i>Physical fitness</i>, guida per l'insegnante, Marietti Scuola. Stima del VO₂max dal test di Cooper: K. H. Cooper, JAMA 1968.</p>
        </div>
      </section>`;

    const vals = {};
    if (last && last.v) Object.assign(vals, last.v);

    const setSex = s => { sex = s; $$(".fit-sex button", app).forEach(b => b.classList.toggle("on", b.dataset.s === s)); draw(); };
    const results = () => F.test.map(t => ({ t, v: vals[t.k], b: band(t, sex, vals[t.k]) })).filter(r => r.b >= 0);

    function draw() {
      const rs = results();
      F.test.forEach(t => {
        const card = $(`.ftest[data-k="${t.k}"]`, app), b = band(t, sex, vals[t.k]);
        $$(".ft-bar i", card).forEach((x, j) => x.classList.toggle("on", j === b));
        $(".ft-res", card).innerHTML = b < 0 ? "—" : `Prova <b class="c${b}">${F.fasce[b]}</b>`;
        card.classList.toggle("done", b >= 0);
      });
      const cap = {};
      rs.forEach(({ t, b }) => { cap[t.cap] = Math.max(cap[t.cap] == null ? -1 : cap[t.cap], b); });
      const out = $("#fitOut", app);
      if (!rs.length) { out.innerHTML = `<div class="card fit-empty">Inserisci almeno un risultato per vedere il tuo profilo.</div>`; return; }
      const cs = Object.keys(cap), mean = cs.reduce((a, c) => a + cap[c], 0) / cs.length;
      const lv = Math.min(4, Math.round(mean));
      const best = cs.slice().sort((a, b) => cap[b] - cap[a])[0], worst = cs.slice().sort((a, b) => cap[a] - cap[b])[0];
      const coop = vals.cooper > 600 ? (vals.cooper - 504.9) / 44.73 : null;
      const prev = hist.length ? hist[hist.length - 1] : null;
      const trend = t => { if (!prev || !prev.r || prev.r[t.k] == null) return ""; const d = band(t, sex, vals[t.k]) - prev.r[t.k]; return d > 0 ? `<em class="up">▲ meglio di ${esc(prev.d)}</em>` : d < 0 ? `<em class="dn">▼ rispetto a ${esc(prev.d)}</em>` : `<em>= come ${esc(prev.d)}</em>`; };
      out.innerHTML = `
        <div class="fit-grid">
          <div class="card fit-lv rv in">
            <p class="kicker">Livello fisico stimato</p>
            <div class="lv-big c${lv}">${F.livelli[lv]}</div>
            <div class="lv-scale">${F.livelli.map((x, j) => `<i class="${j === lv ? "on c" + j : ""}" title="${esc(x)}"></i>`).join("")}</div>
            <p class="muted">Media di ${cs.length} ${cs.length === 1 ? "capacità" : "capacità"} su ${Object.keys(F.capacita).length}${cs.length < 3 ? ": inserisci più test per una stima più affidabile" : ""}.</p>
            ${coop ? `<p class="fit-vo">VO₂max stimato dal test di Cooper: <b>${f1(coop)} ml/kg/min</b></p>` : ""}
          </div>
          <div class="card fit-rad rv in">${radar(cap)}</div>
        </div>
        <div class="fit-grid">
          <div class="card fit-tip rv in"><p class="kicker">Il tuo punto di forza</p><h3>${esc(F.capacita[best].nome)}</h3><p class="muted">Prova ${F.fasce[cap[best]]}. Mantienila allenandola con regolarità.</p></div>
          <div class="card fit-tip rv in"><p class="kicker">Su che cosa lavorare</p><h3>${esc(F.capacita[worst].nome)}</h3><p>${esc(F.capacita[worst].consiglio)}</p><a class="chip" href="#/argomento/${F.capacita[worst].argomento}">Ripassa la teoria →</a></div>
        </div>
        <div class="card fit-tab rv in"><table><thead><tr><th>Test</th><th>Risultato</th><th>Fascia</th></tr></thead><tbody>
          ${rs.map(({ t, v, b }) => `<tr><td>${esc(t.nome)}</td><td>${show(t, v)} <small>${t.tempo ? "min:sec" : esc(t.unita.split(" ")[0])}</small></td><td><b class="c${b}">${F.fasce[b]}</b> ${trend(t)}</td></tr>`).join("")}
        </tbody></table></div>`;
    }

    function drawHist() {
      const el = $("#fitHist", app);
      if (!hist.length) { el.innerHTML = ""; return; }
      el.innerHTML = `<div class="card"><h3 style="margin-bottom:8px">I tuoi profili salvati</h3><p class="muted" style="margin-top:0">Solo su questo dispositivo.</p>
        <div class="fh-list">${hist.slice().reverse().map(h => `<div class="fh"><span>${esc(h.d)}</span>${F.test.filter(t => h.r && h.r[t.k] != null).map(t => `<em class="c${h.r[t.k]}">${esc(t.breve)} · ${F.fasce[h.r[t.k]]}</em>`).join("")}</div>`).join("")}</div>
        <button type="button" class="btn small ghost fit-noprint" id="fitDel">Cancella i miei dati da questo dispositivo</button></div>`;
      $("#fitDel", el).onclick = () => {
        if (!window.confirm("Cancellare tutti i profili salvati su questo dispositivo?")) return;
        hist = []; try { localStorage.removeItem(KEY); } catch (e) { /* niente */ }
        Object.keys(vals).forEach(k => delete vals[k]); $$("input[data-k]", app).forEach(i => { i.value = ""; });
        drawHist(); draw(); $("#fitMsg", app).textContent = "Dati cancellati.";
      };
    }

    $$("input[data-k]", app).forEach(inp => {
      const t = F.test.find(x => x.k === inp.dataset.k);
      if (vals[t.k] > 0) inp.value = show(t, vals[t.k]).replace(".", ",");
      inp.addEventListener("input", () => { const v = parse(t, inp.value); if (v > 0) vals[t.k] = v; else delete vals[t.k]; draw(); });
    });
    $$(".fit-sex button", app).forEach(b => b.addEventListener("click", () => setSex(b.dataset.s)));
    $("#fitSave", app).onclick = () => {
      const rs = results(); if (!rs.length) { $("#fitMsg", app).textContent = "Inserisci almeno un risultato."; return; }
      const r = {}, v = {}; rs.forEach(x => { r[x.t.k] = x.b; v[x.t.k] = x.v; });
      hist.push({ d: new Date().toLocaleDateString("it-IT"), s: sex, r, v }); hist = hist.slice(-20);
      $("#fitMsg", app).textContent = store(hist) ? "Profilo salvato su questo dispositivo." : "Non riesco a salvare: il browser blocca la memoria locale.";
      drawHist();
    };
    $("#fitPrint", app).onclick = () => window.print();
    setSex(sex); drawHist();
  };
})();
