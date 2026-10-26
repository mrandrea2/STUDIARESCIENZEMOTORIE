/* Studiare Scienze Motorie e Sportive — Prof. Andrea Bertelli
   App a pagina singola, senza dipendenze. */
(function () {
  "use strict";

  /* ================= Utility ================= */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const app = $("#app");
  const root = document.documentElement;
  const T = window.TOPICS || [];
  const G = window.GAMES || {};
  const C = window.CLASSI || {};
  const byId = Object.fromEntries(T.map(t => [t.id, t]));
  const ORD = { 1: "prima", 2: "seconda", 3: "terza", 4: "quarta", 5: "quinta" };
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const vib = p => { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* non supportato */ } };
  const setK = c => root.style.setProperty("--k", c ? `var(--c${c})` : "var(--corallo)");

  /* ---------- Memoria locale (solo su questo dispositivo) ---------- */
  const KEY = "ssm-progressi-v1";
  let mem = {};
  try { mem = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { mem = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* storage non disponibile */ } };
  const getBest = (tid, g) => (mem[tid] && mem[tid][g]) || 0;
  const setBest = (tid, g, v) => {
    mem[tid] = mem[tid] || {};
    if (v > (mem[tid][g] || 0)) { mem[tid][g] = v; save(); return true; }
    return false;
  };
  const GAME_KEYS = ["quiz", "vf", "flash", "abbina", "completa"];
  const passed = tid => GAME_KEYS.filter(g => getBest(tid, g) >= 70).length;
  let lastClass = (mem._pref && mem._pref.classe) || 0;
  const rememberClass = c => { lastClass = c; mem._pref = mem._pref || {}; mem._pref.classe = c; save(); };
  const topicClass = t => (t.classi.includes(lastClass) ? lastClass : t.classi.length === 5 ? 0 : t.classi[0]);

  /* ---------- Testo grande ---------- */
  const bigBtn = $("#bigBtn");
  const applyBig = on => { root.classList.toggle("big", on); bigBtn.setAttribute("aria-pressed", on); };
  applyBig(!!(mem._pref && mem._pref.big));
  bigBtn.addEventListener("click", () => {
    const on = !root.classList.contains("big");
    applyBig(on); mem._pref = mem._pref || {}; mem._pref.big = on; save(); vib(10);
  });

  /* ---------- Icone ---------- */
  const sv = (d, w = 2) => `<svg viewBox="0 0 24 24" fill="none" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    doc: sv('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
    slides: sv('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/>'),
    play: sv('<path d="M7 4.5v15l12-7.5z"/>'),
    audio: sv('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'),
    link: sv('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    game: sv('<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15.5 12h.01M18 14h.01"/>'),
    quiz: sv('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>'),
    vf: sv('<path d="m3 12 4 4 7-8"/><path d="m15 14 6 6M21 14l-6 6"/>'),
    cards: sv('<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>'),
    match: sv('<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/><path d="M10 7h3a2 2 0 0 1 2 2v5"/>'),
    gap: sv('<path d="M3 7h5M3 12h3M16 12h5M3 17h18"/><rect x="9" y="9.5" width="5" height="5" rx="1"/>'),
    book: sv('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21a2 2 0 0 1 2-2h13"/>'),
    back: sv('<path d="M15 18 9 12l6-6"/>', 2.4),
    arr: sv('<path d="m9 6 6 6-6 6"/>', 2.6),
    bolt: sv('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    calc: sv('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>'),
    flip: sv('<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>'),
    brain: sv('<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>'),
    search: sv('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>')
  };
  const star = on => `<svg viewBox="0 0 24 24"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill="${on ? "#FFC531" : "none"}" stroke="${on ? "#E0A400" : "#C9BFA9"}" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  const starsFor = p => (p >= 90 ? 3 : p >= 70 ? 2 : p >= 40 ? 1 : 0);

  /* ---------- Coriandoli ---------- */
  const cv = $("#confetti"), cx = cv.getContext && cv.getContext("2d");
  function confetti(n = 140) {
    if (reduce || !cx) return;
    const W = cv.width = innerWidth * devicePixelRatio, H = cv.height = innerHeight * devicePixelRatio;
    const cols = ["#E2563F", "#FFC531", "#2563EB", "#15803D", "#7C3AED", "#BE185D", "#101B33"];
    const ps = Array.from({ length: n }, () => ({
      x: W / 2 + (Math.random() - .5) * W * .3, y: H * .45, vx: (Math.random() - .5) * 26 * devicePixelRatio, vy: (-Math.random() * 22 - 10) * devicePixelRatio,
      s: (6 + Math.random() * 8) * devicePixelRatio, r: Math.random() * 6, vr: (Math.random() - .5) * .4, c: cols[(Math.random() * cols.length) | 0]
    }));
    let f = 0;
    (function tick() {
      cx.clearRect(0, 0, W, H);
      ps.forEach(p => {
        p.vy += .7 * devicePixelRatio; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .6); cx.restore();
      });
      if (++f < 150) requestAnimationFrame(tick); else cx.clearRect(0, 0, W, H);
    })();
  }

  /* ---------- Numeri che contano ---------- */
  function countUp(el, to, suffix = "") {
    if (!el) return;
    if (reduce) { el.textContent = to + suffix; return; }
    const t0 = performance.now(), d = 900;
    (function step(t) {
      const k = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ---------- Materiali ---------- */
  function matUrls(m) {
    switch (m.tipo) {
      case "pdf": case "video": case "audio":
        return { embed: `https://drive.google.com/file/d/${m.id}/preview`, open: `https://drive.google.com/file/d/${m.id}/view` };
      case "slides":
        return { embed: `https://docs.google.com/presentation/d/${m.id}/embed?start=false&loop=false`, open: `https://docs.google.com/presentation/d/${m.id}/present` };
      case "yt":
        return { embed: `https://www.youtube-nocookie.com/embed/${m.id}?rel=0&playsinline=1`, open: `https://www.youtube.com/watch?v=${m.id}` };
      case "form":
        return { embed: `https://docs.google.com/forms/d/e/${m.id}/viewform?embedded=true`, open: `https://docs.google.com/forms/d/e/${m.id}/viewform` };
      case "la":
        return { embed: `https://learningapps.org/watch?v=${m.id}`, open: `https://learningapps.org/watch?v=${m.id}` };
      default:
        return { embed: null, open: m.url };
    }
  }
  const TIPO = {
    pdf: ["Dispensa", I.doc], slides: ["Presentazione", I.slides], video: ["Video", I.play], yt: ["Video YouTube", I.play],
    audio: ["Podcast", I.audio], link: ["Link esterno", I.link], form: ["Quiz Google", I.quiz], la: ["LearningApps", I.game]
  };

  /* ---------- Visualizzatore ---------- */
  const viewer = $("#viewer"), vFrame = $("#viewerFrame");
  function openViewer(m) {
    const u = matUrls(m);
    if (!u.embed) { window.open(u.open, "_blank", "noopener"); return; }
    $("#viewerTitle").textContent = m.titolo;
    $("#viewerOpen").href = u.open;
    vFrame.src = u.embed;
    viewer.classList.toggle("audio", m.tipo === "audio");
    viewer.classList.add("open");
    document.body.style.overflow = "hidden";
    vib(8);
  }
  function closeViewer() {
    if (!viewer.classList.contains("open")) return;
    viewer.classList.remove("open");
    vFrame.src = "about:blank";
    document.body.style.overflow = "";
  }
  $("#viewerClose").addEventListener("click", closeViewer);
  viewer.addEventListener("click", e => { if (e.target === viewer) closeViewer(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeViewer(); });

  /* ================= Componenti ================= */
  const classLabel = cl => (cl.length === 5 ? "Tutte le classi" : "Classe " + cl.map(c => ORD[c]).join(" e "));

  function topicCard(t, i) {
    const m = t.materiali || [];
    const nDoc = m.filter(x => ["pdf", "slides"].includes(x.tipo)).length;
    const nVid = m.filter(x => ["video", "yt"].includes(x.tipo)).length;
    const nAud = m.filter(x => x.tipo === "audio").length;
    const p = passed(t.id);
    const k = topicClass(t);
    return `<a class="tcard" href="#/argomento/${t.id}" style="--k:${k ? `var(--c${k})` : "var(--corallo)"};--i:${i || 0}">
      <span class="n">${i != null ? i + 1 : I.brain}</span>
      <span><h3>${esc(t.titolo)}</h3><p>${esc(t.sottotitolo || "")}</p></span>
      <span class="arr-wrap">${I.arr.replace("<svg", '<svg class="arr"')}</span>
      <span class="chips">
        ${t.nuovo ? '<span class="chip new">Nuovo</span>' : ""}
        ${nDoc ? `<span class="chip">${nDoc} ${nDoc === 1 ? "dispensa" : "dispense"}</span>` : ""}
        ${nVid ? `<span class="chip">${nVid} video</span>` : ""}
        ${nAud ? `<span class="chip">${nAud} podcast</span>` : ""}
        ${G[t.id] ? '<span class="chip">5 giochi</span>' : ""}
        ${p ? `<span class="chip ok">★ ${p}/5</span>` : ""}
      </span>
      ${p ? `<span class="bar" aria-hidden="true"><i style="width:${p * 20}%"></i></span>` : ""}
    </a>`;
  }

  function classTiles() {
    return [1, 2, 3, 4, 5].map((c, i) => {
      const tot = C[c].temi.length;
      const done = C[c].temi.filter(id => passed(id) >= 3).length;
      return `<a class="ctile" href="#/classe/${c}" style="--k:var(--c${c});--i:${i}">
        <span class="num">${c}<sup>ª</sup></span>
        <b>Classe ${ORD[c]}</b>
        <small>${tot} argomenti${done ? ` · ${done} completati` : ""}</small>
        ${done ? `<span class="mini" style="width:${Math.round(done / tot * 100)}%"></span>` : ""}
      </a>`;
    }).join("") + `<a class="ctile wide" href="#/sfida" style="--i:5">
        <span class="num" style="color:var(--giallo)">${I.bolt.replace("<svg", '<svg style="width:52px;height:52px;stroke:#FFC531"')}</span>
        <span style="display:flex;flex-direction:column;margin-top:auto"><b>Sfida lampo</b><small>10 domande a tempo</small></span>
      </a>`;
  }

  const track = `<svg class="track" viewBox="0 0 400 300" aria-hidden="true">
    <g fill="none" stroke-linecap="round">
      ${[0, 1, 2, 3, 4].map(i => {
        const r = 150 - i * 22, x = 50 + i * 22, w = 300 - i * 44;
        return `<path d="M${x} 300 V160 a${r} ${r} 0 0 1 ${w} 0 V300" stroke="${["#E2563F", "#2563EB", "#FFC531", "#7C3AED", "#BE185D"][i]}" stroke-width="${i === 2 ? 5 : 3}" style="--len:900;animation-delay:${i * .15}s" opacity="${i === 2 ? 1 : .55}"/>`;
      }).join("")}
    </g>
    <g class="runner"><circle cx="200" cy="54" r="11" fill="#FFC531"/><circle cx="200" cy="54" r="20" fill="#FFC531" opacity=".25"/></g>
  </svg>`;

  /* ================= Pagine ================= */
  function pageHome() {
    setK(0);
    const nuovi = T.filter(t => t.nuovo);
    const nGiochi = Object.values(G).reduce((a, g) => a + g.quiz.length + g.vf.length + g.flash.length + g.abbina.length + g.completa.length, 0);
    app.innerHTML = `
      <section class="hero">
        ${track}
        <div class="wrap">
          <div>
            <p class="kicker">Liceo Galilei · indirizzo sportivo</p>
            <h1>Studiare Scienze motorie<span class="c">:</span><em>studio e gioco insieme</em></h1>
          </div>
          <p>Slide, video e podcast delle lezioni. Poi ripassi giocando e sfidi i compagni.</p>
          <div class="hero-stats"><span><b>${T.length}</b> argomenti</span><span><b>${nGiochi}</b> domande e carte</span><span><b>5</b> giochi</span></div>
          <div class="cta-row" style="margin-top:4px">
            <a class="btn cor" href="${lastClass ? `#/classe/${lastClass}` : "#/classi"}">${lastClass ? `Vai alla ${lastClass}ª` : "Scegli la classe"}</a>
            <a class="btn lite" href="#/sfida">${I.bolt} Sfida lampo</a>
          </div>
        </div>
      </section>

      <section class="wrap section">
        <div class="section-head"><h2>Scegli la tua classe:</h2></div>
        <div class="classes stagger">${classTiles()}</div>
      </section>

      <section class="wrap section">
        <div class="section-head"><div><p class="kicker" style="color:var(--corallo-scuro)">Novità</p><h2>Nuovi in terza:</h2></div></div>
        <div class="grid stagger">${nuovi.map((t, i) => topicCard(t, null).replace("--i:0", "--i:" + i)).join("")}</div>
      </section>

      <section class="wrap section">
        <div class="section-head"><h2>Inizia da qui:</h2></div>
        <div class="grid stagger">${topicCard(byId["metodo-di-studio"])}</div>
      </section>

      <section class="wrap section">
        <div class="section-head"><h2>Come funziona:</h2></div>
        <div class="how stagger">
          <div class="panel" style="--k:var(--c2);--i:0"><span class="n">${I.book}</span><div><h3>1. Studia</h3><p>Apri slide, dispense, video e podcast direttamente dal telefono.</p></div></div>
          <div class="panel" style="--k:var(--c3);--i:1"><span class="n">${I.cards}</span><div><h3>2. Ripassa</h3><p>Gira le flashcard: quelle che non sai tornano finché non le impari.</p></div></div>
          <div class="panel" style="--k:var(--c1);--i:2"><span class="n">${I.game}</span><div><h3>3. Gioca</h3><p>Quiz, vero o falso a tempo, coppie e frasi da completare. Conquista le stelle.</p></div></div>
        </div>
      </section>`;
  }

  function pageClassi() {
    setK(0);
    app.innerHTML = `
      <section class="band" style="--k:var(--notte)"><div class="wrap">
        <p class="kicker">Indice</p><h1>Le classi<span style="color:var(--corallo)">:</span><em>scegli la tua</em></h1>
      </div></section>
      <section class="wrap section"><div class="classes stagger">${classTiles()}</div></section>
      <section class="wrap section"><div class="grid stagger">${topicCard(byId["metodo-di-studio"])}</div></section>`;
  }

  function pageClasse(c) {
    c = Number(c);
    if (!C[c]) return pageClassi();
    rememberClass(c); setK(c);
    const ts = C[c].temi.map(id => byId[id]).filter(Boolean);
    const done = ts.filter(t => passed(t.id) >= 3).length;
    app.innerHTML = `
      <section class="band"><div class="wrap">
        <div class="crumbs"><a href="#/classi">${I.back}Classi</a></div>
        <div class="row">
          <div><p class="kicker">${ts.length} argomenti</p><h1>Classe ${ORD[c]}<em>${c === 3 ? "programma 2026/27" : "tutti gli argomenti"}</em></h1></div>
          ${ring(done, ts.length, "fatti")}
        </div>
        <div class="cta-row" style="margin-top:18px"><a class="btn lite" href="#/sfida/${c}">${I.bolt} Sfida della ${c}ª</a></div>
      </div></section>
      <section class="wrap section">
        ${c === 3 ? '<p class="note" style="margin:0 0 14px">Libro di testo: «Educare al movimento», DeAscuola.</p>' : ""}
        <div class="grid stagger">${ts.map((t, i) => topicCard(t, i)).join("")}</div>
      </section>
      <section class="wrap section"><div class="grid">${topicCard(byId["metodo-di-studio"])}</div></section>`;
    animateRing();
  }

  function ring(v, tot, label) {
    const R = 36, L = 2 * Math.PI * R;
    return `<div class="ring" aria-label="${v} su ${tot} ${label}">
      <svg viewBox="0 0 84 84"><circle class="bg" cx="42" cy="42" r="${R}"/><circle class="fg" cx="42" cy="42" r="${R}" stroke-dasharray="${L}" stroke-dashoffset="${L}" data-to="${L * (1 - v / tot)}"/></svg>
      <b><span>${v}/${tot}<small>${label}</small></span></b>
    </div>`;
  }
  function animateRing() {
    requestAnimationFrame(() => requestAnimationFrame(() => $$(".ring .fg").forEach(c => { c.style.strokeDashoffset = c.dataset.to; })));
  }

  function pageCerca(q) {
    setK(0);
    q = decodeURIComponent(q || "");
    app.innerHTML = `
      <section class="band" style="--k:var(--notte)"><div class="wrap">
        <p class="kicker">Ricerca</p><h1>Cerca<span style="color:var(--corallo)">:</span><em>un argomento o una parola</em></h1>
        <form class="searchbox" id="sf" role="search">${I.search}<input id="q" type="search" enterkeyhint="search" placeholder="es. cuore, forza, ormoni" value="${esc(q)}" aria-label="Cerca"></form>
      </div></section>
      <section class="wrap section"><div id="res"></div></section>`;
    const inp = $("#q"), res = $("#res");
    const run = () => {
      const n = inp.value.trim().toLowerCase();
      if (!n) { res.innerHTML = `<div class="chips">${["cuore", "muscoli", "forza", "ossa", "ormoni", "doping", "sonno", "test"].map(w => `<button class="chip" style="border:0;cursor:pointer;font-size:1rem;padding:10px 16px" data-w="${w}">${w}</button>`).join("")}</div>`;
        $$("[data-w]", res).forEach(b => b.onclick = () => { inp.value = b.dataset.w; run(); }); return; }
      const out = T.filter(t => {
        const g = G[t.id] || {};
        return [t.titolo, t.sottotitolo, ...(t.obiettivi || []), ...((t.sintesi || []).flat()), ...((g.flash || []).flat())].join(" ").toLowerCase().includes(n);
      });
      res.innerHTML = out.length ? `<p class="note" style="margin:0 0 12px">${out.length} ${out.length === 1 ? "argomento trovato" : "argomenti trovati"}</p><div class="grid stagger">${out.map((t, i) => topicCard(t).replace("--i:0", "--i:" + i)).join("")}</div>` : `<div class="empty">Nessun risultato per «${esc(inp.value)}». Prova con un'altra parola.</div>`;
    };
    $("#sf").addEventListener("submit", e => { e.preventDefault(); inp.blur(); history.replaceState(null, "", "#/cerca/" + encodeURIComponent(inp.value.trim())); });
    inp.addEventListener("input", run);
    run();
    if (!q && matchMedia("(min-width: 900px)").matches) inp.focus();
  }

  /* ---------- Pagina argomento ---------- */
  function pageTopic(id, tab, game) {
    const t = byId[id];
    if (!t) return pageHome();
    const k = topicClass(t);
    setK(k);
    tab = tab || "studia";
    const g = G[t.id];
    const hasExtra = (t.extra || []).length > 0;
    const p = passed(t.id);
    const tabs = [
      ["studia", "Studia", I.book],
      g ? ["ripassa", "Ripassa", I.cards] : null,
      g ? ["gioca", "Gioca", I.game] : null,
      hasExtra ? ["altri", "Altri", I.link] : null
    ].filter(Boolean);
    const inGame = (tab === "gioca" && game) || tab === "ripassa";

    app.innerHTML = `
      ${inGame ? "" : `<section class="band"><div class="wrap">
        <div class="crumbs"><a href="${k ? `#/classe/${k}` : "#/classi"}">${I.back}${k ? `Classe ${ORD[k]}` : "Classi"}</a></div>
        <div class="row">
          <div><p class="kicker">${esc(classLabel(t.classi))}</p><h1>${esc(t.titolo)}<em>${esc(t.sottotitolo || "")}</em></h1></div>
          ${g ? ring(p, 5, "giochi") : ""}
        </div>
        ${t.nuovo ? '<div class="chips"><span class="chip new">Nuovo argomento</span></div>' : ""}
      </div></section>`}
      <div class="seg-wrap" ${inGame ? 'style="margin-top:0"' : ""}><div class="wrap">
        <nav class="seg" aria-label="Sezioni">
          ${tabs.map(([key, l, ic]) => `<a href="#/argomento/${t.id}/${key}" class="${tab === key ? "on" : ""}">${ic}<span>${l}</span></a>`).join("")}
        </nav>
      </div></div>
      <section class="wrap"><div id="tabBody"></div></section>`;
    animateRing();

    const body = $("#tabBody");
    if (tab === "ripassa" && g) return gameFlash(body, t);
    if (tab === "gioca" && g) {
      if (game === "quiz") return gameQuiz(body, t);
      if (game === "vf") return gameVF(body, t);
      if (game === "abbina") return gameMatch(body, t);
      if (game === "completa") return gameCloze(body, t);
      return gamePicker(body, t);
    }
    if (tab === "altri" && hasExtra) return tabAltri(body, t);
    return tabStudia(body, t);
  }

  function matButton(m, i) {
    const [label, ic] = TIPO[m.tipo] || TIPO.link;
    const ext = !matUrls(m).embed;
    return `<button class="mat t-${m.tipo}" data-m="${i}">
      <span class="ico">${ic}</span>
      <span><b>${esc(m.titolo)}</b><small>${esc(m.nota || label)}</small></span>
      <span class="go">${ext ? I.link : I.arr}</span>
    </button>`;
  }

  function tabStudia(body, t) {
    const m = t.materiali || [];
    const groups = [["Lezioni e dispense", ["pdf", "slides"]], ["Video", ["video", "yt"]], ["Podcast", ["audio"]], ["Link utili", ["link"]]];
    const matHtml = groups.map(([name, tipi]) => {
      const items = m.map((x, i) => [x, i]).filter(([x]) => tipi.includes(x.tipo));
      if (!items.length) return "";
      return `<div class="mat-group"><h4>${name}</h4>${items.map(([x, i]) => matButton(x, i)).join("")}</div>`;
    }).join("");
    const sintesi = (t.sintesi || []).length ? `<div class="panel sintesi"><h3>In sintesi:</h3><dl>${t.sintesi.map(([a, b]) => `<div class="item"><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl></div>` : "";
    const domande = (t.domande || []).length ? `<div class="panel"><h3>Domande guida:</h3><ol class="domande" style="margin:0;padding-left:22px">${t.domande.map(d => `<li>${esc(d)}</li>`).join("")}</ol><p class="note">Rispondi sul quaderno dopo aver guardato i materiali.</p></div>` : "";
    const giochi = G[t.id] ? `<div class="panel" style="background:var(--notte);border:0;color:#fff"><h3 style="color:#fff">Hai studiato?</h3><p style="margin:0 0 16px;color:#D8DDEA">Mettiti alla prova: conquista le stelle in tutti e 5 i giochi.</p><div class="cta-row" style="margin:0"><a class="btn cor full" href="#/argomento/${t.id}/gioca">${I.game} Vai ai giochi</a><a class="btn lite full" href="#/argomento/${t.id}/ripassa">${I.cards} Flashcard</a></div></div>` : "";

    body.innerHTML = `<div class="two stagger">
      <div style="--i:0;display:grid;gap:14px;align-content:start">
        <div class="panel">
          <h3>Cosa imparerai:</h3>
          <ol class="goals">${(t.obiettivi || []).map(o => `<li>${esc(o)}</li>`).join("")}</ol>
          ${t.libro ? `<div class="book">${I.book}${esc(t.libro)}</div>` : ""}
        </div>
        ${m.length ? sintesi : ""}
        ${domande}
      </div>
      <div style="--i:1;display:grid;gap:14px;align-content:start">
        ${m.length ? `<div class="panel">${matHtml}</div>` : sintesi}
        ${!m.length ? `<div class="panel"><h3>Materiali delle lezioni</h3><p class="muted" style="margin:0">Le slide di questo argomento arriveranno durante l'anno. Intanto studia la sintesi e allenati con i giochi.</p></div>` : ""}
        ${t.calcolatori ? calcolatori() : ""}
        ${giochi}
      </div>
    </div>`;
    $$("[data-m]", body).forEach(b => b.addEventListener("click", () => openViewer(m[Number(b.dataset.m)])));
    if (t.calcolatori) bindCalcolatori(body);
  }

  function calcolatori() {
    return `<div class="panel"><h3>Calcolatori:</h3>
      <div class="calc">
        <div>
          <label for="cooper">Test di Cooper: metri in 12 minuti</label>
          <input id="cooper" type="number" inputmode="numeric" min="0" max="5000" placeholder="es. 2400">
          <div class="out" id="cooperOut"><b>—</b>VO₂max stimato (ml/kg/min)</div>
        </div>
        <div>
          <label for="eta">La tua età</label>
          <input id="eta" type="number" inputmode="numeric" min="8" max="99" placeholder="es. 16">
          <div class="out" id="etaOut"><b>—</b>Frequenza cardiaca massima stimata (bpm)</div>
        </div>
      </div>
      <p class="note">Sono stime: servono a confrontarti con te stesso nel tempo. VO₂max = (metri − 504,9) ÷ 44,73. FC max = 208 − 0,7 × età (Tanaka); la formula classica è 220 − età.</p>
    </div>`;
  }
  function bindCalcolatori(el) {
    const c = $("#cooper", el), e = $("#eta", el);
    c.addEventListener("input", () => {
      const v = Number(c.value);
      $("#cooperOut b", el).textContent = v > 600 ? ((v - 504.9) / 44.73).toFixed(1).replace(".", ",") : "—";
    });
    e.addEventListener("input", () => {
      const v = Number(e.value);
      $("#etaOut b", el).textContent = v >= 8 && v <= 99 ? Math.round(208 - 0.7 * v) + " · classica " + (220 - v) : "—";
    });
  }

  function tabAltri(body, t) {
    body.innerHTML = `<p class="note" style="margin:8px 0 14px">I quiz e i giochi già usati in classe, su Google Moduli e LearningApps.</p><div class="stagger">` +
      t.extra.map((m, i) => {
        const u = matUrls(m);
        return `<div class="embed" style="--i:${i}"><header><b>${esc(m.titolo)}</b><a class="btn small alt" href="${esc(u.open)}" target="_blank" rel="noopener">Apri ↗</a></header>
          ${u.embed ? `<iframe src="${esc(u.embed)}" loading="lazy" title="${esc(m.titolo)}" allowfullscreen></iframe>` : `<div style="padding:16px">${esc(m.nota || "")}</div>`}</div>`;
      }).join("") + "</div>";
  }

  /* ================= Giochi ================= */
  function gamePicker(body, t) {
    const g = G[t.id];
    const list = [
      ["quiz", "Quiz", I.quiz, `${g.quiz.length} domande con spiegazione`],
      ["vf", "Vero o falso", I.vf, "10 secondi per risposta"],
      ["abbina", "Abbina le coppie", I.match, "Termine e definizione"],
      ["completa", "Completa le frasi", I.gap, "Trova la parola giusta"],
      ["flash", "Flashcard", I.cards, `${g.flash.length} carte da memorizzare`]
    ];
    body.innerHTML = `<div class="game-pick stagger">${list.map(([key, n, ic, d], i) => {
      const b = getBest(t.id, key), s = starsFor(b);
      const href = key === "flash" ? `#/argomento/${t.id}/ripassa` : `#/argomento/${t.id}/gioca/${key}`;
      return `<a class="gcard g-${key}${i === 0 ? " big" : ""}" href="${href}" style="--i:${i}">
        <span class="gi">${ic}</span>
        <span style="display:flex;flex-direction:column;gap:4px;flex:1"><h3>${n}</h3><p>${d}</p>
        <span class="stars-mini">${[0, 1, 2].map(x => star(x < s)).join("")}</span></span>
      </a>`;
    }).join("")}</div>
    <p class="note" style="text-align:center">2 stelle (70%) per superare un gioco · 3 stelle dal 90%</p>`;
  }

  const stageTop = (t, right) => `<div class="stage-top"><a class="back" href="#/argomento/${t.id}/gioca">${I.back} Giochi</a>${right || ""}</div>`;

  function showResult(body, t, gameKey, pct, msg, again) {
    const nuovo = setBest(t.id, gameKey, pct);
    const s = starsFor(pct);
    const frase = pct >= 90 ? "Fenomenale!" : pct >= 70 ? "Ottimo lavoro!" : pct >= 40 ? "Buon inizio!" : "Non mollare!";
    const sub = pct >= 90 ? "Argomento padroneggiato." : pct >= 70 ? "Gioco superato: punta alle 3 stelle." : pct >= 40 ? "Ripassa i materiali e riprova." : "Riparti dalle flashcard, poi riprova.";
    body.innerHTML = `<div class="stage"><div class="qcard result">
      <div class="big" id="bigNum">0%</div>
      <div class="stars">${[0, 1, 2].map(i => star(i < s)).join("")}</div>
      <h2 style="margin:0 0 6px">${frase}</h2>
      <p style="margin:0 0 6px">${sub}<br><span class="muted">${msg || ""}</span></p>
      ${nuovo && pct > 0 ? '<span class="record">Nuovo record!</span>' : ""}
      <div class="cta-row">
        <button class="btn cor" id="again">Gioca ancora</button>
        <a class="btn alt" href="#/argomento/${t.id}/gioca">Altri giochi</a>
        <a class="btn alt" href="#/argomento/${t.id}">Torna allo studio</a>
      </div>
    </div></div>`;
    countUp($("#bigNum", body), pct, "%");
    if (pct >= 70) { confetti(pct >= 90 ? 200 : 110); vib([30, 60, 30]); }
    $("#again", body).onclick = () => again(body, t);
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  function plus(card, txt) {
    const s = document.createElement("span");
    s.className = "plus"; s.textContent = txt;
    card.appendChild(s); setTimeout(() => s.remove(), 1200);
  }
  function wrongFx(card) { vib([60, 40, 60]); card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake"); }
  const scrollToEl = el => setTimeout(() => el && el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" }), 120);
  const dotsHtml = (n, i, res) => `<div class="dots">${Array.from({ length: n }, (_, k) => `<i class="${k < i ? (res[k] ? "ok" : "no") : k === i ? "cur" : ""}"></i>`).join("")}</div>`;

  /* ---------- Quiz ---------- */
  function gameQuiz(body, t) {
    const qs = shuffle(G[t.id].quiz).map(([q, opts, ci, sp]) => ({ q, sp, o: shuffle(opts.map((x, i) => ({ x, ok: i === ci }))) }));
    let i = 0, score = 0; const res = [];
    function draw() {
      if (i >= qs.length) return showResult(body, t, "quiz", Math.round(score / qs.length * 100), `${score} risposte giuste su ${qs.length}.`, gameQuiz);
      const q = qs[i];
      body.innerHTML = `<div class="stage">
        ${stageTop(t, dotsHtml(qs.length, i, res))}
        <div class="qcard" id="qc">
          <span class="qn">Domanda ${i + 1} di ${qs.length}</span>
          <h2>${esc(q.q)}</h2>
          <div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}" data-l="${"ABCD"[k]}" style="--i:${k}">${esc(o.x)}</button>`).join("")}</div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn cor" id="next" hidden>${i + 1 < qs.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div></div>`;
      const card = $("#qc", body);
      $$(".opt", body).forEach(b => b.addEventListener("click", () => {
        const k = Number(b.dataset.k), ok = q.o[k].ok;
        $$(".opt", body).forEach((x, j) => { x.disabled = true; if (q.o[j].ok) x.classList.add("right"); else if (j !== k) x.classList.add("dim"); });
        if (ok) { score++; plus(card, "+1"); vib(25); } else { b.classList.add("wrong"); wrongFx(card); }
        res[i] = ok;
        const fb = $("#fb", body);
        fb.className = "feedback show " + (ok ? "ok" : "no");
        fb.innerHTML = `<b>${ok ? "Giusto!" : "Non proprio."}</b>${esc(q.sp)}`;
        const n = $("#next", body); n.hidden = false; scrollToEl(n);
      }));
      $("#next", body).onclick = () => { i++; draw(); window.scrollTo(0, 0); };
    }
    draw();
  }

  /* ---------- Vero o falso a tempo ---------- */
  function gameVF(body, t) {
    const qs = shuffle(G[t.id].vf);
    let i = 0, score = 0, timer = null; const res = [];
    const SEC = 10;
    function draw() {
      clearInterval(timer);
      if (i >= qs.length) return showResult(body, t, "vf", Math.round(score / qs.length * 100), `${score} su ${qs.length} corrette.`, gameVF);
      const [s, v, sp] = qs[i];
      let left = SEC, done = false;
      body.innerHTML = `<div class="stage">
        ${stageTop(t, `<span class="pill k" id="tm">${left} s</span>`)}
        <div class="tbar" id="tb"><i></i></div>
        <div class="qcard" id="qc">
          <span class="qn">Affermazione ${i + 1} di ${qs.length}</span>
          <h2>${esc(s)}</h2>
          <div class="vf-btns"><button class="v" data-v="1"><span>✓</span>Vero</button><button class="f" data-v="0"><span>✕</span>Falso</button></div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn cor" id="next" hidden>${i + 1 < qs.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div>
        <div style="display:flex;justify-content:center;margin-top:14px">${dotsHtml(qs.length, i, res)}</div>
      </div>`;
      const tm = $("#tm", body), tb = $("#tb", body), bar = $("#tb i", body), card = $("#qc", body);
      function answer(choice) {
        if (done) return; done = true; clearInterval(timer);
        const ok = choice === v;
        res[i] = ok;
        $$(".vf-btns button", body).forEach(b => { b.disabled = true; if ((b.dataset.v === "1") === v) b.classList.add("right"); });
        if (ok) { score++; plus(card, "+1"); vib(25); } else wrongFx(card);
        const fb = $("#fb", body);
        fb.className = "feedback show " + (ok ? "ok" : "no");
        fb.innerHTML = `<b>${choice === null ? "Tempo scaduto!" : ok ? "Esatto!" : "Sbagliato."}</b>È ${v ? "vero" : "falso"}: ${esc(sp)}`;
        const n = $("#next", body); n.hidden = false; scrollToEl(n);
      }
      $$(".vf-btns button", body).forEach(b => b.addEventListener("click", () => answer(b.dataset.v === "1")));
      requestAnimationFrame(() => { bar.style.transform = `scaleX(${(left - 1) / SEC})`; });
      timer = setInterval(() => {
        left--; tm.textContent = left + " s";
        bar.style.transform = `scaleX(${Math.max(0, left - 1) / SEC})`;
        tb.classList.toggle("mid", left <= 6 && left > 3); tb.classList.toggle("low", left <= 3);
        if (left <= 3 && left > 0) vib(15);
        if (left <= 0) answer(null);
      }, 1000);
      $("#next", body).onclick = () => { i++; draw(); window.scrollTo(0, 0); };
    }
    draw();
    stopOnLeave(() => clearInterval(timer));
  }

  /* ---------- Flashcard ---------- */
  function gameFlash(body, t) {
    const all = G[t.id].flash;
    let deck = shuffle(all.map((c, k) => k)), known = new Set(), pos = 0, round = 1;
    function draw() {
      if (!deck.length) {
        setBest(t.id, "flash", 100);
        body.innerHTML = `<div class="stage"><div class="qcard result">
          <div class="big">${all.length}/${all.length}</div>
          <div class="stars">${star(1)}${star(1)}${star(1)}</div>
          <h2 style="margin:0 0 6px">Tutte memorizzate!</h2>
          <p>${round > 1 ? `Ce l'hai fatta in ${round} giri.` : "Al primo giro, complimenti."} Ora mettiti alla prova con i giochi.</p>
          <div class="cta-row"><a class="btn cor" href="#/argomento/${t.id}/gioca">${I.game} Vai ai giochi</a><button class="btn alt" id="again">Ricomincia</button></div>
        </div></div>`;
        confetti(160); vib([30, 60, 30]);
        $("#again", body).onclick = () => gameFlash(body, t);
        return;
      }
      if (pos >= deck.length) { deck = shuffle(deck.filter(k => !known.has(k))); pos = 0; round++; return draw(); }
      const [f, b] = all[deck[pos]];
      body.innerHTML = `<div class="stage">
        <div class="stage-top"><span class="pill">Giro ${round} · ${pos + 1}/${deck.length}</span><span class="pill k">${known.size}/${all.length} imparate</span></div>
        <div class="tbar" style="margin-bottom:16px"><i style="transform:scaleX(${known.size / all.length});background:var(--verde)"></i></div>
        <div class="flash-wrap">
          <button class="flash" id="card" aria-label="Gira la carta">
            <span class="face front"><b>${esc(f)}</b><span class="hint">${I.flip} Tocca per girare</span></span>
            <span class="face back"><span>${esc(b)}</span><span class="hint">${I.flip} Tocca per tornare</span></span>
          </button>
        </div>
        <div class="flash-ctrl">
          <button class="btn no" id="no">Da ripassare</button>
          <button class="btn yes" id="yes">La so ✓</button>
        </div>
        <p class="note" style="text-align:center">Rispondi ad alta voce prima di girare. Puoi anche scorrere la carta: a destra «la so», a sinistra «da ripassare».</p>
      </div>`;
      const card = $("#card", body);
      let sx = null, moved = false;
      card.onclick = () => { if (moved) return; card.classList.toggle("flip"); vib(8); };
      const go = (yes) => {
        card.classList.remove("flip"); card.classList.add(yes ? "out-r" : "out-l"); vib(yes ? 20 : [20, 30, 20]);
        if (yes) known.add(deck[pos]);
        setTimeout(() => { pos++; draw(); }, reduce ? 0 : 280);
      };
      card.addEventListener("touchstart", e => { sx = e.touches[0].clientX; moved = false; }, { passive: true });
      card.addEventListener("touchmove", e => { if (sx == null) return; const dx = e.touches[0].clientX - sx; if (Math.abs(dx) > 10) { moved = true; card.style.transform = `translateX(${dx}px) rotate(${dx / 20}deg)${card.classList.contains("flip") ? " rotateY(180deg)" : ""}`; } }, { passive: true });
      card.addEventListener("touchend", e => {
        if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; card.style.transform = "";
        if (Math.abs(dx) > 90) go(dx > 0); setTimeout(() => { moved = false; }, 50);
      });
      $("#yes", body).onclick = () => go(true);
      $("#no", body).onclick = () => go(false);
      setBest(t.id, "flash", Math.round(known.size / all.length * 100));
    }
    draw();
  }

  /* ---------- Abbina le coppie ---------- */
  function gameMatch(body, t) {
    const pairs = shuffle(G[t.id].abbina).slice(0, 6);
    const L = shuffle(pairs.map((p, k) => ({ k, s: p[0] })));
    const R = shuffle(pairs.map((p, k) => ({ k, s: p[1] })));
    let sel = null, found = 0, errors = 0;
    const t0 = Date.now();
    body.innerHTML = `<div class="stage">
      ${stageTop(t, `<span class="pill k" id="err">Errori: 0</span>`)}
      <div class="tbar" style="margin-bottom:14px"><i id="mbar" style="transform:scaleX(0);background:var(--verde)"></i></div>
      <div class="qcard" id="qc">
        <span class="qn">Abbina le coppie</span>
        <h2 style="margin-bottom:16px">Tocca un termine, poi la sua definizione.</h2>
        <div class="match">
          <div class="col">${L.map((x, i) => `<button class="tile" data-side="L" data-k="${x.k}" style="--i:${i}">${esc(x.s)}</button>`).join("")}</div>
          <div class="col">${R.map((x, i) => `<button class="tile r" data-side="R" data-k="${x.k}" style="--i:${i + 6}">${esc(x.s)}</button>`).join("")}</div>
        </div>
      </div></div>`;
    const card = $("#qc", body);
    $$(".tile", body).forEach(b => b.addEventListener("click", () => {
      if (b.classList.contains("done")) return;
      vib(8);
      if (!sel || sel.dataset.side === b.dataset.side) {
        if (sel) sel.classList.remove("sel");
        sel = b; b.classList.add("sel"); return;
      }
      if (sel.dataset.k === b.dataset.k) {
        [sel, b].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); x.disabled = true; });
        found++; sel = null; vib(25);
        $("#mbar", body).style.transform = `scaleX(${found / pairs.length})`;
        if (found === pairs.length) {
          const sec = Math.round((Date.now() - t0) / 1000);
          const pct = Math.max(0, 100 - errors * 10);
          setTimeout(() => showResult(body, t, "abbina", pct, `Tutte le coppie in ${sec} secondi con ${errors} ${errors === 1 ? "errore" : "errori"}.`, gameMatch), 500);
        }
      } else {
        errors++;
        $("#err", body).textContent = "Errori: " + errors;
        const a = sel; a.classList.remove("sel"); sel = null;
        [a, b].forEach(x => { x.classList.add("err"); setTimeout(() => x.classList.remove("err"), 450); });
        vib([50, 30, 50]);
      }
    }));
  }

  /* ---------- Completa le frasi ---------- */
  function gameCloze(body, t) {
    const frasi = shuffle(G[t.id].completa);
    const words = [];
    const parsed = frasi.map(f => f.split(/(\{[^}]+\})/).map(part => {
      const m = part.match(/^\{([^}]+)\}$/);
      if (m) { words.push(m[1]); return { w: m[1] }; }
      return { s: part };
    }));
    const bank = shuffle(Array.from(new Set(words)));
    let n = 0;
    body.innerHTML = `<div class="stage">
      ${stageTop(t)}
      <div class="qcard cloze" id="qc">
        <span class="qn">Completa le frasi</span>
        <h2 style="margin-bottom:16px">Scegli la parola giusta per ogni spazio.</h2>
        <div class="stagger">${parsed.map((p, i) => `<p style="--i:${i}">${p.map(x => x.s != null ? esc(x.s) : `<select data-w="${esc(x.w)}" aria-label="Parola mancante ${++n}"><option value="">scegli…</option>${bank.map(b => `<option>${esc(b)}</option>`).join("")}</select>`).join("")}</p>`).join("")}</div>
        <div class="next-row"><button class="btn cor" id="check">Verifica</button></div>
      </div></div>`;
    $$("select", body).forEach(s => s.addEventListener("change", () => vib(8)));
    $("#check", body).onclick = () => {
      const sels = $$("select", body);
      let ok = 0;
      sels.forEach(s => {
        const right = s.value === s.dataset.w;
        if (right) ok++;
        s.classList.add(right ? "right" : "wrong");
        s.disabled = true;
        if (!right) s.insertAdjacentHTML("afterend", `<span class="sol">→ ${esc(s.dataset.w)}</span>`);
      });
      const pct = Math.round(ok / sels.length * 100);
      if (pct < 100) wrongFx($("#qc", body)); else vib(25);
      const nr = $("#check", body).parentElement;
      nr.innerHTML = `<button class="btn cor" id="fine">${ok}/${sels.length} giuste · vedi il risultato ${I.arr}</button>`;
      $("#fine", body).onclick = () => showResult(body, t, "completa", pct, `${ok} parole giuste su ${sels.length}.`, gameCloze);
      scrollToEl($("#fine", body));
    };
  }

  /* ================= Sfida lampo ================= */
  function pageSfida(c) {
    c = Number(c);
    if (!C[c]) {
      setK(0);
      app.innerHTML = `
        <section class="band" style="--k:var(--notte)"><div class="wrap">
          <p class="kicker" style="color:var(--giallo);opacity:1">Gioco a tempo</p>
          <h1>Sfida lampo<span style="color:var(--giallo)">:</span><em>quanto sei veloce?</em></h1>
          <p style="margin:14px 0 0;font-size:1.1rem;color:#D8DDEA;max-width:40ch">10 domande miste, 15 secondi per ognuna. Più rispondi in fretta, più punti fai. Le risposte giuste di fila fanno salire il moltiplicatore.</p>
        </div></section>
        <section class="wrap section">
          <h2 style="margin-bottom:16px">Scegli la classe:</h2>
          <div class="class-pick stagger">${[1, 2, 3, 4, 5].map((k, i) => {
            const rec = getBest("_sfida", "c" + k);
            return `<button data-c="${k}" style="--k:var(--c${k});--i:${i}">${k}ª<small>${rec ? "Record " + rec : "Nessun record"}</small></button>`;
          }).join("")}</div>
        </section>`;
      $$("[data-c]", app).forEach(b => b.onclick = () => { vib(10); location.hash = "#/sfida/" + b.dataset.c; });
      return;
    }
    setK(c);
    const pool = [];
    C[c].temi.concat(["metodo-di-studio"]).forEach(id => (G[id] ? G[id].quiz : []).forEach(q => pool.push({ id, q })));
    const qs = shuffle(pool).slice(0, 10).map(({ id, q: [q, opts, ci, sp] }) => ({ id, q, sp, o: shuffle(opts.map((x, i) => ({ x, ok: i === ci }))) }));
    let i = 0, pts = 0, streak = 0, best = 0, right = 0, timer = null;
    const SEC = 15;
    app.innerHTML = `<section class="wrap" style="padding-top:14px"><div id="sf"></div></section>`;
    const box = $("#sf");
    function draw() {
      clearInterval(timer);
      if (i >= qs.length) {
        const nuovo = setBest("_sfida", "c" + c, pts);
        const pct = Math.round(right / qs.length * 100);
        box.innerHTML = `<div class="stage"><div class="qcard result">
          <p class="kicker">Sfida lampo · classe ${ORD[c]}</p>
          <div class="big" id="bigNum">0</div><p class="muted" style="margin:4px 0 0;font-family:var(--sans);font-weight:800">punti</p>
          <div class="stars">${[0, 1, 2].map(k => star(k < starsFor(pct))).join("")}</div>
          <p><b>${right} giuste su ${qs.length}</b> · serie migliore: ${best}</p>
          ${nuovo && pts > 0 ? '<span class="record">Nuovo record di classe!</span>' : `<p class="muted">Il tuo record: ${getBest("_sfida", "c" + c)} punti</p>`}
          <div class="cta-row"><button class="btn cor" id="again">Gioca ancora</button><a class="btn alt" href="#/classe/${c}">Torna agli argomenti</a></div>
        </div></div>`;
        countUp($("#bigNum"), pts);
        if (pct >= 70) { confetti(pct >= 90 ? 220 : 120); vib([30, 60, 30]); }
        $("#again").onclick = () => pageSfida(c);
        window.scrollTo(0, 0);
        return;
      }
      const q = qs[i];
      let left = SEC, done = false;
      const mult = Math.min(1 + Math.floor(streak / 2) * 0.5, 3);
      box.innerHTML = `<div class="stage">
        <div class="stage-top">
          <a class="back" href="#/sfida">${I.back} Esci</a>
          ${streak >= 2 ? `<span class="streak">🔥 ×${String(mult).replace(".", ",")}</span>` : ""}
          <span class="pill"><span class="score" id="sc">${pts}</span> pt</span>
        </div>
        <div class="tbar" id="tb"><i></i></div>
        <div class="qcard" id="qc">
          <span class="qn">${i + 1}/${qs.length} · ${esc(byId[q.id].titolo)}</span>
          <h2>${esc(q.q)}</h2>
          <div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}" data-l="${"ABCD"[k]}" style="--i:${k}">${esc(o.x)}</button>`).join("")}</div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn cor" id="next" hidden>${i + 1 < qs.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div></div>`;
      const tb = $("#tb"), bar = $("#tb i"), card = $("#qc");
      function answer(k) {
        if (done) return; done = true; clearInterval(timer);
        const ok = k !== null && q.o[k].ok;
        const btns = $$(".opt", box);
        btns.forEach((x, j) => { x.disabled = true; if (q.o[j].ok) x.classList.add("right"); else if (j !== k) x.classList.add("dim"); });
        let gain = 0;
        if (ok) {
          gain = Math.round((50 + left * 10) * mult); pts += gain; streak++; right++; best = Math.max(best, streak);
          plus(card, "+" + gain); vib(25);
          const sc = $("#sc"); sc.textContent = pts; sc.classList.add("bump"); setTimeout(() => sc.classList.remove("bump"), 300);
        } else { if (k !== null) btns[k].classList.add("wrong"); streak = 0; wrongFx(card); }
        const fb = $("#fb");
        fb.className = "feedback show " + (ok ? "ok" : "no");
        fb.innerHTML = `<b>${k === null ? "Tempo scaduto!" : ok ? `Giusto! +${gain} punti` : "Sbagliato."}</b>${esc(q.sp)}`;
        const n = $("#next"); n.hidden = false; scrollToEl(n);
      }
      $$(".opt", box).forEach(b => b.addEventListener("click", () => answer(Number(b.dataset.k))));
      $("#next").onclick = () => { i++; draw(); window.scrollTo(0, 0); };
      requestAnimationFrame(() => { bar.style.transform = `scaleX(${(left - 1) / SEC})`; });
      timer = setInterval(() => {
        left--;
        bar.style.transform = `scaleX(${Math.max(0, left - 1) / SEC})`;
        tb.classList.toggle("mid", left <= 9 && left > 4); tb.classList.toggle("low", left <= 4);
        if (left <= 3 && left > 0) vib(15);
        if (left <= 0) answer(null);
      }, 1000);
    }
    draw();
    stopOnLeave(() => clearInterval(timer));
  }

  /* ================= Router ================= */
  let leaveFns = [];
  function stopOnLeave(fn) { leaveFns.push(fn); }

  function route() {
    leaveFns.forEach(f => f()); leaveFns = [];
    closeViewer();
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    const [a, b, c, d] = parts;
    let navKey = "home";
    if (a === "classi") { pageClassi(); navKey = "classi"; }
    else if (a === "classe") { pageClasse(b); navKey = "classi"; }
    else if (a === "argomento") { pageTopic(b, c, d); navKey = "classi"; }
    else if (a === "sfida") { pageSfida(b); navKey = "sfida"; }
    else if (a === "cerca") { pageCerca(b); navKey = "cerca"; }
    else pageHome();
    $$("[data-nav]").forEach(x => {
      const on = x.dataset.nav === navKey || (a === "classe" && x.dataset.nav === "c" + b) || (a === "argomento" && byId[b] && x.dataset.nav === "c" + topicClass(byId[b]));
      x.classList.toggle("on", on && !(x.closest(".nav") && navKey === "classi" && x.dataset.nav === "classi"));
    });
    app.classList.remove("page"); void app.offsetWidth; app.classList.add("page");
    const t = a === "argomento" && byId[b];
    document.title = (t ? t.titolo + " · " : "") + "Studiare Scienze Motorie e Sportive";
    const tabsEl = a === "argomento" && c && c !== "studia" && $(".seg-wrap");
    if (tabsEl && !(c === "gioca" && d) && c !== "ripassa") window.scrollTo(0, tabsEl.offsetTop - 60);
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
