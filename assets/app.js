/* Studiare Scienze Motorie e Sportive — Prof. Andrea Bertelli
   Liceo Statale «Galileo Galilei» · Verona
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
  const PL = { 1: "prime", 2: "seconde", 3: "terze", 4: "quarte", 5: "quinte" };
  const PLC = { 1: "Prime", 2: "Seconde", 3: "Terze", 4: "Quarte", 5: "Quinte" };
  const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const finePointer = !!(window.matchMedia && matchMedia("(pointer: fine)").matches);

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const vib = p => { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* non supportato */ } };
  const kVars = c => (c ? `--k:var(--c${c});--kb:var(--c${c}b)` : "--k:var(--m);--kb:var(--p)");
  const setK = c => {
    root.style.setProperty("--k", c ? `var(--c${c})` : "var(--m)");
    root.style.setProperty("--kb", c ? `var(--c${c}b)` : "var(--p)");
  };
  const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };

  /* ---------- Memoria locale (solo su questo dispositivo) ---------- */
  const KEY = "ssm-progressi-v1";
  let mem = {};
  try { mem = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { mem = {}; }
  mem._pref = mem._pref || {};
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* storage non disponibile */ } };
  const getBest = (tid, g) => (mem[tid] && mem[tid][g]) || 0;
  const setBest = (tid, g, v) => {
    mem[tid] = mem[tid] || {};
    if (v > (mem[tid][g] || 0)) { mem[tid][g] = v; save(); return true; }
    return false;
  };
  const GAME_KEYS = ["quiz", "vf", "abbina", "completa", "ordina", "gruppi", "flash"];
  const MAXT = GAME_KEYS.length * 3;
  const S = window.SCHEMI || {};
  const starsFor = p => (p >= 90 ? 3 : p >= 70 ? 2 : p >= 40 ? 1 : 0);
  const topicStars = tid => GAME_KEYS.reduce((a, g) => a + starsFor(getBest(tid, g)), 0);
  const passed = tid => GAME_KEYS.filter(g => getBest(tid, g) >= 70).length;
  const totalStars = () => T.filter(t => G[t.id]).reduce((a, t) => a + topicStars(t.id), 0);
  const MAX_STARS = T.filter(t => G[t.id]).length * MAXT;

  let lastClass = mem._pref.classe || 0;
  const rememberClass = c => { lastClass = c; mem._pref.classe = c; save(); };
  const topicClass = t => (t.classi.includes(lastClass) ? lastClass : t.classi.length === 5 ? 0 : t.classi[0]);

  /* ---------- Livelli ---------- */
  const LEVELS = [[0, "Principiante"], [5, "Esordiente"], [15, "Allievo"], [30, "Atleta"], [55, "Agonista"], [90, "Campione"], [140, "Fuoriclasse"], [210, "Leggenda"]];
  const levelOf = s => { let i = 0; LEVELS.forEach((l, k) => { if (s >= l[0]) i = k; }); return i; };
  function updateLvl() {
    const s = totalStars(), l = levelOf(s);
    $("#lvlBtn").innerHTML = `<i>${l + 1}</i><b>★ ${s}</b>`;
    $("#lvlBtn").setAttribute("aria-label", `Livello ${l + 1}, ${LEVELS[l][1]}, ${s} stelle`);
  }

  /* ---------- Serie di giorni ---------- */
  function markActive() {
    const s = mem._streak || { last: "", n: 0 };
    const d = today();
    if (s.last === d) return;
    s.n = s.last === yesterday() ? s.n + 1 : 1;
    s.last = d; mem._streak = s; save();
  }
  const streakN = () => { const s = mem._streak; return s && (s.last === today() || s.last === yesterday()) ? s.n : 0; };

  /* ---------- Testo grande e suoni ---------- */
  const bigBtn = $("#bigBtn"), sndBtn = $("#sndBtn");
  const applyBig = on => { root.classList.toggle("big", on); bigBtn.setAttribute("aria-pressed", on); };
  applyBig(!!mem._pref.big);
  bigBtn.addEventListener("click", () => { const on = !root.classList.contains("big"); applyBig(on); mem._pref.big = on; save(); vib(10); });

  let sndOn = mem._pref.snd !== false, actx = null;
  const SPK = on => `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/>${on ? '<path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>' : '<path d="m17 9 5 6M22 9l-5 6"/>'}</svg>`;
  const applySnd = () => { sndBtn.innerHTML = SPK(sndOn); sndBtn.setAttribute("aria-pressed", sndOn); sndBtn.setAttribute("aria-label", sndOn ? "Suoni attivi" : "Suoni spenti"); };
  applySnd();
  sndBtn.addEventListener("click", () => { sndOn = !sndOn; mem._pref.snd = sndOn; save(); applySnd(); if (sndOn) sfx("tap"); });
  function tone(f, d, type = "sine", at = 0, vol = .16) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      const t = actx.currentTime + at, o = actx.createOscillator(), g = actx.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.connect(g).connect(actx.destination); o.start(t); o.stop(t + d + .02);
    } catch (e) { /* audio non disponibile */ }
  }
  function sfx(k) {
    if (!sndOn) return;
    if (k === "ok") { tone(660, .12, "triangle"); tone(990, .18, "triangle", .09); }
    else if (k === "no") { tone(190, .25, "sawtooth", 0, .09); tone(140, .3, "sawtooth", .1, .08); }
    else if (k === "win") { [523, 659, 784, 1047].forEach((f, i) => tone(f, .22, "triangle", i * .11)); }
    else if (k === "lvl") { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, .2, "square", i * .08, .07)); }
    else if (k === "tick") tone(1200, .05, "square", 0, .05);
    else if (k === "flip") tone(420, .07, "triangle", 0, .08);
    else tone(520, .05, "triangle", 0, .07);
  }

  /* ---------- Icone ---------- */
  const sv = (d, w = 2.2) => `<svg viewBox="0 0 24 24" fill="none" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
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
    back: sv('<path d="M15 18 9 12l6-6"/>', 2.6),
    arr: sv('<path d="m9 6 6 6-6 6"/>', 2.8),
    bolt: sv('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    flip: sv('<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>'),
    brain: sv('<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>'),
    search: sv('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    trophy: sv('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'),
    map: sv('<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14M7 10v4a3 3 0 0 0 3 3h4"/>'),
    order: sv('<path d="M4 6h10M4 12h7M4 18h4"/><path d="M18 4v16M15 17l3 3 3-3"/>'),
    groups: sv('<rect x="3" y="4" width="7.5" height="16" rx="2"/><rect x="13.5" y="4" width="7.5" height="16" rx="2"/><path d="M6.7 8h.1M6.7 12h.1M17.2 8h.1"/>'),
    calc: sv('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>')
  };
  const star = on => `<svg viewBox="0 0 24 24"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill="${on ? "#FFD23F" : "rgba(255,255,255,.12)"}" stroke="${on ? "#FFD23F" : "rgba(255,255,255,.35)"}" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

  /* ---------- Effetti ---------- */
  const cv = $("#confetti"), cx = cv.getContext && cv.getContext("2d");
  function confetti(n = 150) {
    if (reduce || !cx) return;
    const dpr = devicePixelRatio || 1, W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr;
    const cols = ["#FF5A1F", "#F0287A", "#9B3DF0", "#2F7BFF", "#14C8F0", "#FFD23F", "#1FD69A", "#ffffff"];
    const ps = Array.from({ length: n }, (_, i) => {
      const side = i % 2 ? 1 : -1;
      return { x: side > 0 ? W * .05 : W * .95, y: H * .75, vx: -side * (8 + Math.random() * 16) * dpr, vy: (-Math.random() * 24 - 14) * dpr, s: (6 + Math.random() * 9) * dpr, r: Math.random() * 6, vr: (Math.random() - .5) * .5, c: cols[(Math.random() * cols.length) | 0], circ: Math.random() < .3 };
    });
    let f = 0;
    (function tick() {
      cx.clearRect(0, 0, W, H);
      ps.forEach(p => {
        p.vy += .6 * dpr; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c;
        if (p.circ) { cx.beginPath(); cx.arc(0, 0, p.s / 2.4, 0, 7); cx.fill(); } else cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        cx.restore();
      });
      if (++f < 170) requestAnimationFrame(tick); else cx.clearRect(0, 0, W, H);
    })();
  }
  function countUp(el, to, suffix = "", d = 1000) {
    if (!el) return;
    if (reduce) { el.textContent = to + suffix; return; }
    const t0 = performance.now();
    (function step(t) {
      const k = Math.max(0, Math.min(1, (t - t0) / d)), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }
  function toast(icon, title, sub) {
    const el = document.createElement("div");
    el.className = "toast"; el.setAttribute("role", "status");
    el.innerHTML = `<i>${icon}</i><div>${esc(title)}<small>${esc(sub || "")}</small></div>`;
    document.body.appendChild(el);
    setTimeout(() => { el.style.transition = "transform .4s, opacity .4s"; el.style.opacity = "0"; el.style.transform = "translate(-50%,-140%)"; }, 3200);
    setTimeout(() => el.remove(), 3700);
  }
  let io = null;
  function reveal() {
    const els = $$(".rv:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver(en => en.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .08, rootMargin: "0px 0px -30px 0px" });
    els.forEach(e => io.observe(e));
  }
  function tilt() {
    if (!finePointer || reduce) return;
    $$(".tilt").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(700px) rotateX(${(.5 - y) * 10}deg) rotateY(${(x - .5) * 12}deg) translateY(-4px)`;
        el.style.setProperty("--mx", x * 100 + "%"); el.style.setProperty("--my", y * 100 + "%");
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
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
    pdf: ["Dispensa", I.doc], slides: ["Presentazione", I.slides], video: ["Video", I.play], yt: ["Video", I.play],
    audio: ["Podcast", I.audio], link: ["Link esterno", I.link], form: ["Quiz Google", I.quiz], la: ["LearningApps", I.game]
  };
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
    vib(8); sfx("tap");
  }
  function closeViewer() {
    if (!viewer.classList.contains("open")) return;
    viewer.classList.remove("open"); vFrame.src = "about:blank"; document.body.style.overflow = "";
  }
  $("#viewerClose").addEventListener("click", closeViewer);
  viewer.addEventListener("click", e => { if (e.target === viewer) closeViewer(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeViewer(); });

  /* ================= Componenti ================= */
  const classLabel = cl => (cl.length === 5 ? "Tutte le classi" : "Classi " + cl.map(c => PL[c]).join(" e "));

  function topicCard(t, i, n) {
    const m = t.materiali || [];
    const nDoc = m.filter(x => ["pdf", "slides"].includes(x.tipo)).length;
    const nVid = m.filter(x => ["video", "yt"].includes(x.tipo)).length;
    const st = G[t.id] ? topicStars(t.id) : 0;
    const k = topicClass(t);
    return `<a class="tcard rv" href="#/argomento/${t.id}" style="${kVars(k)};--i:${i || 0}">
      <span class="n">${n != null ? n : I.brain}</span>
      <span><h3>${esc(t.titolo)}</h3><p>${esc(t.sottotitolo || "")}</p></span>
      ${I.arr.replace("<svg", '<svg class="arr"')}
      <span class="meta">
        <span class="stars-row">${[0, 1, 2, 3, 4].map(x => star(st >= (x + 1) * MAXT / 5)).join("")}</span>
        <span class="chips">${nDoc ? `<span class="chip">${nDoc} dispense</span>` : ""}${nVid ? `<span class="chip">${nVid} video</span>` : ""}</span>
      </span>
    </a>`;
  }

  function classTiles() {
    return [1, 2, 3, 4, 5].map((c, i) => {
      const tot = C[c].temi.length;
      const st = C[c].temi.reduce((a, id) => a + (G[id] ? topicStars(id) : 0), 0), mx = tot * MAXT;
      return `<a class="ctile tilt rv" href="#/classe/${c}" style="${kVars(c)};--i:${i}">
        <span class="num">${c}</span>
        <span class="ord">${c}<sup>e</sup></span>
        <b>${PLC[c]}</b>
        <small>${tot} argomenti${st ? ` · ★ ${st}` : ""}</small>
        <span class="pbar"><i style="width:${Math.round(st / mx * 100)}%"></i></span>
      </a>`;
    }).join("") + `<a class="ctile tilt rv" href="#/argomento/metodo-di-studio" style="--k:#1F2760;--kb:#3A2A7A;--i:5">
        <span class="num" style="font-size:7rem;bottom:-16px">?!</span>
        <span class="ord" style="font-size:2.4rem">${I.brain.replace("<svg", '<svg style="width:46px;height:46px;stroke:#fff"')}</span>
        <b>Metodo di studio</b><small>Per tutte le classi</small>
      </a>`;
  }

  function ring(v, tot, label) {
    const R = 36, L = 2 * Math.PI * R;
    return `<div class="ring" aria-label="${v} su ${tot} ${label}">
      <svg viewBox="0 0 84 84"><circle class="bg" cx="42" cy="42" r="${R}"/><circle class="fg" cx="42" cy="42" r="${R}" stroke-dasharray="${L}" stroke-dashoffset="${L}" data-to="${L * (1 - Math.min(1, v / tot))}"/></svg>
      <b><span>${v}/${tot}<small>${label}</small></span></b>
    </div>`;
  }
  const animateRing = () => requestAnimationFrame(() => requestAnimationFrame(() => $$(".ring .fg").forEach(c => { c.style.strokeDashoffset = c.dataset.to; })));

  /* ================= Home ================= */
  const WORDS = ["il cuore", "i muscoli", "il respiro", "le ossa", "la mente", "lo sport", "l'energia"];
  function evidenzaCards() {
    const m = byId["metodo-di-studio"];
    return (m && m.evidenza || []).map((e, i) => `<a class="hl rv hl${i + 1}" href="${esc(e.url)}" target="_blank" rel="noopener" style="--i:${i}">
      <span class="hl-ic">${i ? I.bolt : I.brain}</span>
      <span class="hl-tx"><b>${esc(e.titolo)}</b><span>${esc(e.testo)}</span><small>${esc(e.corto)} ↗</small></span>
    </a>`).join("");
  }
  function pageHome() {
    setK(0);
    const lastT = mem._pref.last && byId[mem._pref.last];
    const s = totalStars(), l = levelOf(s), nx = LEVELS[l + 1];
    const streakTxt = "SCIENZE MOTORIE · LICEO GALILEI · MOVIMENTO · SALUTE · SPORT · ENERGIA · ";
    app.innerHTML = `
      <section class="hero">
        <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
        <div class="streaks" aria-hidden="true">${[0, 1, 2, 3, 4].map(() => `<div>${streakTxt.repeat(4)}${streakTxt.repeat(4)}</div>`).join("")}</div>
        <div class="wrap">
          <div class="logo-card"><img src="assets/logo-galilei.jpg" alt="Logo Liceo Galilei Verona" width="406" height="132"><span>LICEO SCIENTIFICO<br>INDIRIZZO SPORTIVO<small>Scienze motorie e sportive</small></span></div>
          <h1 aria-label="Studia il corpo in movimento">
            <span class="l">Studia</span>
            <span class="l" style="font-size:.6em;line-height:1.05"><span class="rot gt" id="rot"><span class="in">${WORDS[0]}</span></span></span>
            <span class="l">in <span class="gt">movimento.</span></span>
          </h1>
          <p class="lead">Lezioni, <b>schemi riassuntivi</b> e attività di ripasso di Scienze motorie e sportive, divisi per classe.</p>
          <div class="cta-row"><a class="btn grad" href="${lastClass ? `#/classe/${lastClass}` : "#/classi"}">${lastClass ? `Vai alle ${PL[lastClass]}` : "Scegli la tua classe"} ${I.arr}</a></div>
        </div>
      </section>

      <section class="wrap section">
        <div class="section-head rv"><div><p class="kicker">Prima di tutto</p><h2>Impara a <span class="gt">studiare</span>:</h2></div></div>
        <div class="hl-grid">${evidenzaCards()}</div>
      </section>

      <section class="wrap section">
        <div class="section-head rv"><h2>Scegli la tua <span class="gt">classe</span>:</h2></div>
        <div class="classes">${classTiles()}</div>
      </section>

      <section class="wrap section"><div class="home-two">
        <div class="rv" id="dailyBox">${dailyHtml()}</div>
        <div style="display:grid;gap:12px;align-content:start;margin-top:12px">
          ${lastT && !lastT.evidenza ? `<div class="rv" style="--i:1"><p class="kicker">Riprendi da qui</p>${topicCard(lastT, 0).replace("tcard rv", "tcard")}</div>` : ""}
          <a class="card rv" href="#/trofei" style="--i:2;text-decoration:none;display:grid;grid-template-columns:62px 1fr auto;gap:14px;align-items:center">
            <span style="width:62px;height:62px;border-radius:50%;background:var(--grad);display:grid;place-items:center;font-weight:900;font-size:1.6rem">${l + 1}</span>
            <span><b style="font-size:1.2rem;display:block">I miei progressi</b><span class="muted" style="font-weight:700;font-size:.92rem">Livello «${LEVELS[l][1]}» · ★ ${s}${nx ? ` · ancora ${nx[0] - s} per «${nx[1]}»` : ""}</span>
            <span class="xpbar" style="margin:8px 0 0;height:8px"><i style="width:${nx ? Math.round((s - LEVELS[l][0]) / (nx[0] - LEVELS[l][0]) * 100) : 100}%"></i></span></span>
            ${I.arr.replace("<svg", '<svg style="width:26px;height:26px;stroke:#fff"')}
          </a>
        </div>
      </div></section>`;
    bindDaily();
    let w = 0;
    const rot = $("#rot");
    if (!reduce) {
      const id = setInterval(() => {
        const cur = rot.querySelector(".in");
        if (cur) { cur.classList.remove("in"); cur.classList.add("out"); setTimeout(() => cur.remove(), 450); }
        w = (w + 1) % WORDS.length;
        const n = document.createElement("span"); n.className = "in"; n.textContent = WORDS[w]; rot.appendChild(n);
      }, 2200);
      stopOnLeave(() => clearInterval(id));
    }
  }

  /* ---------- Domanda del giorno ---------- */
  const POOL = []; T.forEach(t => (G[t.id] ? G[t.id].quiz : []).forEach(q => POOL.push({ id: t.id, q })));
  function dailyQ() {
    const d = today(); let h = 0; for (const ch of d) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const { id, q: [q, opts, ci, sp] } = POOL[h % POOL.length];
    return { id, q, opts, ci, sp };
  }
  function dailyHtml() {
    const D = dailyQ(), st = mem._daily && mem._daily.date === today() ? mem._daily : null, n = streakN();
    return `<div class="daily"><div class="in">
      <div class="top-row"><span class="badge">${I.bolt} Domanda del giorno</span>${n ? `<span class="fire">🔥 ${n} ${n === 1 ? "giorno" : "giorni"}</span>` : ""}</div>
      <h3>${esc(D.q)}</h3>
      <div class="opts">${D.opts.map((o, k) => `<button class="opt${st ? (k === D.ci ? " right" : k === st.pick ? " wrong" : " dim") : ""}" data-k="${k}" data-l="${"ABCD"[k]}" style="--i:${k}" ${st ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>
      <div class="feedback ${st ? "show " + (st.ok ? "ok" : "no") : ""}" id="dfb">${st ? `<b>${st.ok ? "Giusto! Torna domani." : "Non proprio. Domani un'altra!"}</b>${esc(D.sp)}` : ""}</div>
      <p class="src">Da: <a href="#/argomento/${D.id}">${esc(byId[D.id].titolo)}</a></p>
    </div></div>`;
  }
  function bindDaily() {
    const box = $("#dailyBox"); if (!box) return;
    const D = dailyQ();
    $$(".opt", box).forEach(b => b.addEventListener("click", () => {
      const k = Number(b.dataset.k), ok = k === D.ci;
      mem._daily = { date: today(), pick: k, ok }; markActive(); save();
      $$(".opt", box).forEach((x, j) => { x.disabled = true; if (j === D.ci) x.classList.add("right"); else if (j !== k) x.classList.add("dim"); });
      if (!ok) { b.classList.add("wrong"); sfx("no"); vib([60, 40, 60]); } else { sfx("ok"); vib(25); confetti(80); }
      const fb = $("#dfb", box);
      fb.className = "feedback show " + (ok ? "ok" : "no");
      fb.innerHTML = `<b>${ok ? "Giusto! Torna domani." : "Non proprio. Domani un'altra!"}</b>${esc(D.sp)}`;
      const n = streakN(), tr = $(".top-row", box);
      if (n && !$(".fire", tr)) tr.insertAdjacentHTML("beforeend", `<span class="fire">🔥 ${n} ${n === 1 ? "giorno" : "giorni"}</span>`);
    }));
  }

  /* ================= Classi ================= */
  function pageClassi() {
    setK(0);
    app.innerHTML = `
      <section class="band"><div class="wrap">
        <span class="ghost" aria-hidden="true">1–5</span>
        <p class="kicker">Indice</p><h1>Le classi<em>scegli la tua e inizia</em></h1>
      </div></section>
      <section class="wrap section" style="padding-top:6px"><div class="classes">${classTiles()}</div></section>
      <section class="wrap section"><a class="btn ghost full rv" href="#/cerca">${I.search} Cerca un argomento</a></section>`;
  }

  function pageClasse(c) {
    c = Number(c);
    if (!C[c]) return pageClassi();
    rememberClass(c); setK(c);
    const ts = C[c].temi.map(id => byId[id]).filter(Boolean);
    const st = ts.reduce((a, t) => a + (G[t.id] ? topicStars(t.id) : 0), 0);
    app.innerHTML = `
      <section class="band"><div class="wrap">
        <span class="ghost" aria-hidden="true">${c}</span>
        <a class="crumb" href="#/classi">${I.back}Classi</a>
        <div class="row">
          <div><p class="kicker">${ts.length} argomenti</p><h1>Classi ${PL[c]}<em>studia, ripassa, gioca</em></h1></div>
          ${ring(st, ts.length * MAXT, "stelle")}
        </div>
        <div class="cta-row"><a class="btn white" href="#/sfida/${c}">${I.bolt} Sfida delle ${PL[c]}</a></div>
      </div></section>
      <section class="wrap section" style="padding-top:10px">
        <div class="grid">${ts.map((t, i) => topicCard(t, i, i + 1)).join("")}</div>
      </section>
      <section class="wrap section"><div class="grid">${topicCard(byId["metodo-di-studio"])}</div></section>`;
    animateRing();
  }

  function pageCerca(q) {
    setK(0);
    q = decodeURIComponent(q || "");
    app.innerHTML = `
      <section class="band"><div class="wrap">
        <p class="kicker">Ricerca</p><h1>Cerca<em>un argomento o una parola</em></h1>
        <form class="searchbox" id="sf" role="search">${I.search}<input id="q" type="search" enterkeyhint="search" placeholder="es. cuore, forza, ormoni" value="${esc(q)}" aria-label="Cerca"></form>
      </div></section>
      <section class="wrap section"><div id="res"></div></section>`;
    const inp = $("#q"), res = $("#res");
    const run = () => {
      const n = inp.value.trim().toLowerCase();
      if (!n) {
        res.innerHTML = `<p class="kicker">Prova con</p><div class="chips">${["cuore", "muscoli", "forza", "ossa", "ormoni", "doping", "sonno", "test", "respiro", "Paralimpiadi"].map(w => `<button class="chip" data-w="${w}">${w}</button>`).join("")}</div>`;
        $$("[data-w]", res).forEach(b => b.onclick = () => { inp.value = b.dataset.w; run(); sfx("tap"); });
        return;
      }
      const out = T.filter(t => {
        const g = G[t.id] || {};
        return [t.titolo, t.sottotitolo, ...(t.obiettivi || []), ...((t.sintesi || []).flat()), ...((g.flash || []).flat())].join(" ").toLowerCase().includes(n);
      });
      res.innerHTML = out.length ? `<p class="note" style="margin:0 0 12px">${out.length} ${out.length === 1 ? "argomento trovato" : "argomenti trovati"}</p><div class="grid">${out.map((t, i) => topicCard(t, i)).join("")}</div>` : `<div class="empty">Nessun risultato per «${esc(inp.value)}». Prova con un'altra parola.</div>`;
      reveal();
    };
    $("#sf").addEventListener("submit", e => { e.preventDefault(); inp.blur(); history.replaceState(null, "", "#/cerca/" + encodeURIComponent(inp.value.trim())); });
    inp.addEventListener("input", run);
    run();
    if (!q && finePointer) inp.focus();
  }

  /* ================= Argomento ================= */
  function pageTopic(id, tab, game) {
    const t = byId[id];
    if (!t) return pageHome();
    const k = topicClass(t);
    setK(k);
    mem._pref.last = t.id; save();
    tab = tab || "studia";
    const g = G[t.id];
        if (t.evidenza) return pageMetodo(t);
    const tabs = [
      ["studia", "Studia", I.book],
      S[t.id] ? ["schemi", "Schemi", I.map] : null,
      g ? ["ripassa", "Ripassa", I.cards] : null,
      g ? ["gioca", "Gioca", I.game] : null
    ].filter(Boolean);
    const inGame = (tab === "gioca" && game) || tab === "ripassa";

    app.innerHTML = `
      ${inGame ? "" : `<section class="band"><div class="wrap">
        <span class="ghost" aria-hidden="true">${k || "?!"}</span>
        <a class="crumb" href="${k ? `#/classe/${k}` : "#/classi"}">${I.back}${k ? PLC[k] : "Classi"}</a>
        <div class="row">
          <div><p class="kicker">${esc(classLabel(t.classi))}</p><h1>${esc(t.titolo)}<em>${esc(t.sottotitolo || "")}</em></h1></div>
          ${g ? ring(topicStars(t.id), MAXT, "stelle") : ""}
        </div>
      </div></section>`}
      <div class="seg-wrap" ${inGame ? 'style="margin-top:0"' : ""}><div class="wrap">
        <nav class="seg${tabs.length > 3 ? " four" : ""}" aria-label="Sezioni">${tabs.map(([key, l, ic]) => `<a href="#/argomento/${t.id}/${key}" class="${tab === key ? "on" : ""}">${ic}<span>${l}</span></a>`).join("")}</nav>
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
      if (game === "ordina" && g.ordina) return gameOrder(body, t);
      if (game === "gruppi" && g.gruppi) return gameGroups(body, t);
      return gamePicker(body, t);
    }
    if (tab === "schemi" && S[t.id]) return tabSchemi(body, t);
    return tabStudia(body, t);
  }

  function matButton(m, i) {
    const [label, ic] = TIPO[m.tipo] || TIPO.link;
    const ext = !matUrls(m).embed;
    return `<button class="mat t-${m.tipo}" data-m="${i}"><span class="ico">${ic}</span><span><b>${esc(m.titolo)}</b><small>${esc(m.nota || label)}</small></span><span class="go">${ext ? I.link : I.arr}</span></button>`;
  }

  function tabStudia(body, t) {
    const m = t.materiali || [];
    const groups = [["Lezioni e dispense", ["pdf", "slides"]], ["Video", ["video", "yt"]], ["Podcast", ["audio"]], ["Link utili", ["link"]]];
    const matHtml = groups.map(([name, tipi]) => {
      const items = m.map((x, i) => [x, i]).filter(([x]) => tipi.includes(x.tipo));
      return items.length ? `<div class="mat-group"><h4>${name}</h4>${items.map(([x, i]) => matButton(x, i)).join("")}</div>` : "";
    }).join("");
    const sintesi = (t.sintesi || []).length ? `<div class="card sintesi rv"><h3>In sintesi:</h3><dl>${t.sintesi.map(([a, b]) => `<div class="item"><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl></div>` : "";
    const domande = (t.domande || []).length ? `<div class="card rv"><h3>Domande guida:</h3><ol class="domande">${t.domande.map(d => `<li>${esc(d)}</li>`).join("")}</ol><p class="note">Rispondi sul quaderno dopo aver guardato i materiali.</p></div>` : "";
    const giochi = G[t.id] ? `<div class="card play-card rv"><h3>Hai studiato?</h3><p>Ripassa con 7 attività diverse e conquista tutte le ${MAXT} stelle.</p><div class="cta-row" style="margin:0"><a class="btn white full" href="#/argomento/${t.id}/gioca">${I.game} Vai ai giochi</a><a class="btn ghost full" href="#/argomento/${t.id}/schemi">${I.map} Schemi riassuntivi</a></div></div>` : "";
    body.innerHTML = `<div class="two">
      <div class="col">
        <div class="card rv"><h3>Cosa imparerai:</h3><ol class="goals">${(t.obiettivi || []).map(o => `<li>${esc(o)}</li>`).join("")}</ol></div>
        ${m.length ? sintesi : ""}${domande}
      </div>
      <div class="col">
        ${m.length ? `<div class="card rv" style="--i:1">${matHtml}</div>` : sintesi}
        ${t.calcolatori ? calcolatori() : ""}
        ${giochi}
      </div>
    </div>`;
    $$("[data-m]", body).forEach(b => b.addEventListener("click", () => openViewer(m[Number(b.dataset.m)])));
    if (t.calcolatori) bindCalcolatori(body);
  }

  function calcolatori() {
    return `<div class="card rv"><h3>Calcolatori:</h3><div class="calc">
      <div><label for="cooper">Test di Cooper: metri in 12 minuti</label><input id="cooper" type="number" inputmode="numeric" min="0" max="5000" placeholder="es. 2400"><div class="out" id="cooperOut"><b>—</b>VO₂max stimato (ml/kg/min)</div></div>
      <div><label for="eta">La tua età</label><input id="eta" type="number" inputmode="numeric" min="8" max="99" placeholder="es. 16"><div class="out" id="etaOut"><b>—</b>Frequenza cardiaca massima stimata (bpm)</div></div>
    </div><p class="note">Sono stime: servono a confrontarti con te stesso nel tempo. VO₂max = (metri − 504,9) ÷ 44,73. FC max = 208 − 0,7 × età (Tanaka); la formula classica è 220 − età.</p></div>`;
  }
  function bindCalcolatori(el) {
    const c = $("#cooper", el), e = $("#eta", el);
    c.addEventListener("input", () => { const v = Number(c.value); $("#cooperOut b", el).textContent = v > 600 ? ((v - 504.9) / 44.73).toFixed(1).replace(".", ",") : "—"; });
    e.addEventListener("input", () => { const v = Number(e.value); $("#etaOut b", el).textContent = v >= 8 && v <= 99 ? Math.round(208 - 0.7 * v) + " · classica " + (220 - v) : "—"; });
  }

  /* ================= Giochi ================= */
  function gamePicker(body, t) {
    const g = G[t.id];
    const list = [
      ["quiz", "Quiz", I.quiz, `${g.quiz.length} domande con spiegazione`],
      ["vf", "Vero o falso", I.vf, "10 secondi per risposta"],
      ["abbina", "Abbina le coppie", I.match, "Termine e definizione"],
      ["completa", "Completa le frasi", I.gap, "Trova la parola giusta"],
      g.ordina ? ["ordina", "Metti in ordine", I.order, "Ricostruisci la sequenza"] : null,
      g.gruppi ? ["gruppi", "Dividi in gruppi", I.groups, "Ogni voce al suo posto"] : null,
      ["flash", "Flashcard", I.cards, `${g.flash.length} carte da imparare`]
    ].filter(Boolean);
    body.innerHTML = `<div class="game-pick">${list.map(([key, n, ic, d], i) => {
      const s = starsFor(getBest(t.id, key));
      const href = key === "flash" ? `#/argomento/${t.id}/ripassa` : `#/argomento/${t.id}/gioca/${key}`;
      return `<a class="gcard g-${key} rv${i === 0 ? " big" : ""}" href="${href}" style="--i:${i}"><span class="gi">${ic}</span><span style="display:flex;flex-direction:column;gap:4px;flex:1"><h3>${n}</h3><p>${d}</p><span class="stars-row">${[0, 1, 2].map(x => star(x < s)).join("")}</span></span></a>`;
    }).join("")}</div><p class="note" style="text-align:center">1 stella dal 40% · 2 stelle dal 70% · 3 stelle dal 90%</p>`;
    if ((t.extra || []).length) {
      body.insertAdjacentHTML("beforeend", `<div class="section-head" style="margin-top:26px"><h2 style="font-size:1.5rem">Altri giochi della classe:</h2></div>` + t.extra.map((m, i) => {
        const u = matUrls(m);
        return `<div class="embed rv" style="--i:${i}"><header><b>${esc(m.titolo)}</b><a class="btn small ghost" href="${esc(u.open)}" target="_blank" rel="noopener">Apri ↗</a></header>${u.embed ? `<iframe src="${esc(u.embed)}" loading="lazy" title="${esc(m.titolo)}" allowfullscreen></iframe>` : `<div style="padding:16px">${esc(m.nota || "")}</div>`}</div>`;
      }).join(""));
    }
  }

  const stageTop = (t, right) => `<div class="stage-top"><a class="back" href="#/argomento/${t.id}/gioca">${I.back} Giochi</a>${right || ""}</div>`;
  const dotsHtml = (n, i, res) => `<div class="dots">${Array.from({ length: n }, (_, k) => `<i class="${k < i ? (res[k] ? "ok" : "no") : k === i ? "cur" : ""}"></i>`).join("")}</div>`;
  function plus(card, txt) { const s = document.createElement("span"); s.className = "plus"; s.textContent = txt; card.appendChild(s); setTimeout(() => s.remove(), 1200); }
  function rightFx(card, txt) { plus(card, txt || "+1"); vib(25); sfx("ok"); }
  function wrongFx(card) { vib([60, 40, 60]); sfx("no"); card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake"); }
  const scrollToEl = el => setTimeout(() => el && el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" }), 140);

  function finish(t, gameKey, pct) {
    const before = levelOf(totalStars());
    const nuovo = setBest(t.id, gameKey, pct);
    markActive(); updateLvl();
    const after = levelOf(totalStars());
    if (after > before) setTimeout(() => { toast(after + 1, `Livello ${after + 1}: ${LEVELS[after][1]}!`, "Hai sbloccato un nuovo livello"); sfx("lvl"); confetti(220); }, 1300);
    return nuovo;
  }

  function showResult(body, t, gameKey, pct, msg, again) {
    const nuovo = finish(t, gameKey, pct);
    const s = starsFor(pct);
    const frase = pct >= 90 ? "Fenomenale!" : pct >= 70 ? "Ottimo lavoro!" : pct >= 40 ? "Buon inizio!" : "Non mollare!";
    const sub = pct >= 90 ? "Argomento padroneggiato." : pct >= 70 ? "Gioco superato: punta alle 3 stelle." : pct >= 40 ? "Ripassa e riprova: ci sei quasi." : "Riparti dalle flashcard, poi riprova.";
    body.innerHTML = `<div class="stage"><div class="qcard result">
      <div class="big" id="bigNum">0%</div>
      <div class="stars">${[0, 1, 2].map(i => star(i < s)).join("")}</div>
      <h2>${frase}</h2>
      <p style="margin:0 0 10px">${sub}<br><span class="muted">${msg || ""}</span></p>
      ${nuovo && pct > 0 ? '<span class="record">Nuovo record!</span>' : ""}
      <div class="cta-row"><button class="btn grad" id="again">Gioca ancora</button><a class="btn ghost" href="#/argomento/${t.id}/gioca">Altri giochi</a><a class="btn ghost" href="#/argomento/${t.id}">Torna allo studio</a></div>
    </div></div>`;
    countUp($("#bigNum", body), pct, "%");
    if (pct >= 70) { confetti(pct >= 90 ? 220 : 120); vib([30, 60, 30]); sfx("win"); }
    $("#again", body).onclick = () => again(body, t);
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  /* ---------- Quiz ---------- */
  function gameQuiz(body, t) {
    const qs = shuffle(G[t.id].quiz).map(([q, opts, ci, sp]) => ({ q, sp, o: shuffle(opts.map((x, i) => ({ x, ok: i === ci }))) }));
    let i = 0, score = 0; const res = [];
    function draw() {
      if (i >= qs.length) return showResult(body, t, "quiz", Math.round(score / qs.length * 100), `${score} risposte giuste su ${qs.length}.`, gameQuiz);
      const q = qs[i];
      body.innerHTML = `<div class="stage">${stageTop(t, dotsHtml(qs.length, i, res))}
        <div class="tbar prog"><i style="transform:scaleX(${i / qs.length})"></i></div>
        <div class="qcard" id="qc"><span class="qn">Domanda ${i + 1} di ${qs.length}</span><h2>${esc(q.q)}</h2>
          <div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}" data-l="${"ABCD"[k]}" style="--i:${k}">${esc(o.x)}</button>`).join("")}</div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn" id="next" hidden>${i + 1 < qs.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div></div>`;
      const card = $("#qc", body);
      $$(".opt", body).forEach(b => b.addEventListener("click", () => {
        const k = Number(b.dataset.k), ok = q.o[k].ok;
        $$(".opt", body).forEach((x, j) => { x.disabled = true; if (q.o[j].ok) x.classList.add("right"); else if (j !== k) x.classList.add("dim"); });
        if (ok) { score++; rightFx(card); } else { b.classList.add("wrong"); wrongFx(card); }
        res[i] = ok;
        const fb = $("#fb", body); fb.className = "feedback show " + (ok ? "ok" : "no");
        fb.innerHTML = `<b>${ok ? "Giusto!" : "Non proprio."}</b>${esc(q.sp)}`;
        const n = $("#next", body); n.hidden = false; scrollToEl(n);
      }));
      $("#next", body).onclick = () => { i++; sfx("tap"); draw(); window.scrollTo(0, 0); };
    }
    draw();
  }

  /* ---------- Vero o falso ---------- */
  function gameVF(body, t) {
    const qs = shuffle(G[t.id].vf);
    let i = 0, score = 0, timer = null; const res = [];
    const SEC = 10;
    function draw() {
      clearInterval(timer);
      if (i >= qs.length) return showResult(body, t, "vf", Math.round(score / qs.length * 100), `${score} su ${qs.length} corrette.`, gameVF);
      const [s, v, sp] = qs[i];
      let left = SEC, done = false;
      body.innerHTML = `<div class="stage">${stageTop(t, `<span class="pill k" id="tm">${left} s</span>`)}
        <div class="tbar" id="tb"><i></i></div>
        <div class="qcard" id="qc"><span class="qn">Affermazione ${i + 1} di ${qs.length}</span><h2>${esc(s)}</h2>
          <div class="vf-btns"><button class="v" data-v="1"><span>✓</span>Vero</button><button class="f" data-v="0"><span>✕</span>Falso</button></div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn" id="next" hidden>${i + 1 < qs.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div>
        <div style="display:flex;justify-content:center;margin-top:16px">${dotsHtml(qs.length, i, res)}</div></div>`;
      const tm = $("#tm", body), tb = $("#tb", body), bar = $("#tb i", body), card = $("#qc", body);
      function answer(choice) {
        if (done) return; done = true; clearInterval(timer);
        const ok = choice === v; res[i] = ok;
        $$(".vf-btns button", body).forEach(b => { b.disabled = true; if ((b.dataset.v === "1") === v) b.classList.add("right"); });
        if (ok) { score++; rightFx(card); } else wrongFx(card);
        const fb = $("#fb", body); fb.className = "feedback show " + (ok ? "ok" : "no");
        fb.innerHTML = `<b>${choice === null ? "Tempo scaduto!" : ok ? "Esatto!" : "Sbagliato."}</b>È ${v ? "vero" : "falso"}: ${esc(sp)}`;
        const n = $("#next", body); n.hidden = false; scrollToEl(n);
      }
      $$(".vf-btns button", body).forEach(b => b.addEventListener("click", () => answer(b.dataset.v === "1")));
      requestAnimationFrame(() => { bar.style.transform = `scaleX(${(left - 1) / SEC})`; });
      timer = setInterval(() => {
        left--; tm.textContent = left + " s";
        bar.style.transform = `scaleX(${Math.max(0, left - 1) / SEC})`;
        tb.classList.toggle("mid", left <= 6 && left > 3); tb.classList.toggle("low", left <= 3);
        if (left <= 3 && left > 0) { vib(15); sfx("tick"); }
        if (left <= 0) answer(null);
      }, 1000);
      $("#next", body).onclick = () => { i++; sfx("tap"); draw(); window.scrollTo(0, 0); };
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
        finish(t, "flash", 100);
        body.innerHTML = `<div class="stage"><div class="qcard result">
          <div class="big">${all.length}/${all.length}</div><div class="stars">${star(1)}${star(1)}${star(1)}</div>
          <h2>Tutte memorizzate!</h2><p>${round > 1 ? `Ce l'hai fatta in ${round} giri.` : "Al primo giro, complimenti."} Ora mettiti alla prova con i giochi.</p>
          <div class="cta-row"><a class="btn grad" href="#/argomento/${t.id}/gioca">${I.game} Vai ai giochi</a><button class="btn ghost" id="again">Ricomincia</button></div>
        </div></div>`;
        confetti(170); vib([30, 60, 30]); sfx("win");
        $("#again", body).onclick = () => gameFlash(body, t);
        return;
      }
      if (pos >= deck.length) { deck = shuffle(deck.filter(k => !known.has(k))); pos = 0; round++; return draw(); }
      const [f, b] = all[deck[pos]];
      body.innerHTML = `<div class="stage">
        <div class="stage-top"><span class="pill">Giro ${round} · ${pos + 1}/${deck.length}</span><span class="pill k">${known.size}/${all.length} imparate</span></div>
        <div class="tbar prog" style="margin-bottom:16px"><i style="transform:scaleX(${known.size / all.length})"></i></div>
        <div class="flash-wrap"><button class="flash" id="card" aria-label="Gira la carta">
          <span class="face front"><b>${esc(f)}</b><span class="hint">${I.flip} Tocca per girare</span></span>
          <span class="face back"><span>${esc(b)}</span><span class="hint">${I.flip} Tocca per tornare</span></span>
        </button></div>
        <div class="flash-ctrl"><button class="btn no" id="no">Da ripassare</button><button class="btn yes" id="yes">La so ✓</button></div>
        <p class="note" style="text-align:center">Rispondi ad alta voce prima di girare. Puoi anche scorrere la carta: a destra «la so», a sinistra «da ripassare».</p>
      </div>`;
      const card = $("#card", body);
      let sx = null, moved = false;
      card.onclick = () => { if (moved) return; card.classList.toggle("flip"); vib(8); sfx("flip"); };
      const go = yes => {
        card.classList.remove("flip"); card.classList.add(yes ? "out-r" : "out-l"); vib(yes ? 20 : [20, 30, 20]); sfx(yes ? "ok" : "tap");
        if (yes) known.add(deck[pos]);
        setTimeout(() => { pos++; draw(); }, reduce ? 0 : 280);
      };
      card.addEventListener("touchstart", e => { sx = e.touches[0].clientX; moved = false; }, { passive: true });
      card.addEventListener("touchmove", e => { if (sx == null) return; const dx = e.touches[0].clientX - sx; if (Math.abs(dx) > 10) { moved = true; card.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)${card.classList.contains("flip") ? " rotateY(180deg)" : ""}`; } }, { passive: true });
      card.addEventListener("touchend", e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; card.style.transform = ""; if (Math.abs(dx) > 90) go(dx > 0); setTimeout(() => { moved = false; }, 50); });
      $("#yes", body).onclick = () => go(true);
      $("#no", body).onclick = () => go(false);
      setBest(t.id, "flash", Math.round(known.size / all.length * 100));
    }
    draw();
  }

  /* ---------- Abbina ---------- */
  function gameMatch(body, t) {
    const pairs = shuffle(G[t.id].abbina).slice(0, 6);
    const L = shuffle(pairs.map((p, k) => ({ k, s: p[0] }))), R = shuffle(pairs.map((p, k) => ({ k, s: p[1] })));
    let sel = null, found = 0, errors = 0;
    const t0 = Date.now();
    body.innerHTML = `<div class="stage">${stageTop(t, `<span class="pill k" id="err">Errori: 0</span>`)}
      <div class="tbar prog"><i id="mbar" style="transform:scaleX(0)"></i></div>
      <div class="qcard" id="qc"><span class="qn">Abbina le coppie</span><h2 style="margin-bottom:16px">Tocca un termine, poi la sua definizione.</h2>
        <div class="match"><div class="mcol">${L.map((x, i) => `<button class="tile" data-side="L" data-k="${x.k}" style="--i:${i}">${esc(x.s)}</button>`).join("")}</div>
        <div class="mcol">${R.map((x, i) => `<button class="tile r" data-side="R" data-k="${x.k}" style="--i:${i + 6}">${esc(x.s)}</button>`).join("")}</div></div>
      </div></div>`;
    const card = $("#qc", body);
    $$(".tile", body).forEach(b => b.addEventListener("click", () => {
      if (b.classList.contains("done")) return;
      vib(8); sfx("tap");
      if (!sel || sel.dataset.side === b.dataset.side) { if (sel) sel.classList.remove("sel"); sel = b; b.classList.add("sel"); return; }
      if (sel.dataset.k === b.dataset.k) {
        [sel, b].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); x.disabled = true; });
        found++; sel = null; vib(25); sfx("ok");
        $("#mbar", body).style.transform = `scaleX(${found / pairs.length})`;
        if (found === pairs.length) {
          const sec = Math.round((Date.now() - t0) / 1000), pct = Math.max(0, 100 - errors * 10);
          setTimeout(() => showResult(body, t, "abbina", pct, `Tutte le coppie in ${sec} secondi con ${errors} ${errors === 1 ? "errore" : "errori"}.`, gameMatch), 500);
        }
      } else {
        errors++; $("#err", body).textContent = "Errori: " + errors;
        const a = sel; a.classList.remove("sel"); sel = null;
        [a, b].forEach(x => { x.classList.add("err"); setTimeout(() => x.classList.remove("err"), 450); });
        vib([50, 30, 50]); sfx("no");
      }
    }));
  }

  /* ---------- Completa ---------- */
  function gameCloze(body, t) {
    const frasi = shuffle(G[t.id].completa), words = [];
    const parsed = frasi.map(f => f.split(/(\{[^}]+\})/).map(part => { const m = part.match(/^\{([^}]+)\}$/); if (m) { words.push(m[1]); return { w: m[1] }; } return { s: part }; }));
    const bank = shuffle(Array.from(new Set(words)));
    let n = 0;
    body.innerHTML = `<div class="stage">${stageTop(t)}
      <div class="qcard cloze" id="qc"><span class="qn">Completa le frasi</span><h2 style="margin-bottom:16px">Scegli la parola giusta per ogni spazio.</h2>
        ${parsed.map((p, i) => `<p style="animation:rise .45s var(--ease) both;animation-delay:${i * 80}ms">${p.map(x => x.s != null ? esc(x.s) : `<select data-w="${esc(x.w)}" aria-label="Parola mancante ${++n}"><option value="">scegli…</option>${bank.map(b => `<option>${esc(b)}</option>`).join("")}</select>`).join("")}</p>`).join("")}
        <div class="next-row"><button class="btn" id="check">Verifica</button></div>
      </div></div>`;
    $$("select", body).forEach(s => s.addEventListener("change", () => { vib(8); sfx("tap"); }));
    $("#check", body).onclick = () => {
      const sels = $$("select", body); let ok = 0;
      sels.forEach(s => {
        const right = s.value === s.dataset.w; if (right) ok++;
        s.classList.add(right ? "right" : "wrong"); s.disabled = true;
        if (!right) s.insertAdjacentHTML("afterend", `<span class="sol">→ ${esc(s.dataset.w)}</span>`);
      });
      const pct = Math.round(ok / sels.length * 100);
      if (pct < 100) wrongFx($("#qc", body)); else rightFx($("#qc", body), "100%");
      const nr = $("#check", body).parentElement;
      nr.innerHTML = `<button class="btn" id="fine">${ok}/${sels.length} giuste · vedi il risultato ${I.arr}</button>`;
      $("#fine", body).onclick = () => showResult(body, t, "completa", pct, `${ok} parole giuste su ${sels.length}.`, gameCloze);
      scrollToEl($("#fine", body));
    };
  }

  /* ================= Metodo di studio ================= */
  function pageMetodo(t) {
    setK(0);
    app.innerHTML = `
      <section class="band"><div class="wrap">
        <span class="ghost" aria-hidden="true">?!</span>
        <a class="crumb" href="#/classi">${I.back}Classi</a>
        <p class="kicker">Per tutte le classi</p><h1>${esc(t.titolo)}<em>${esc(t.sottotitolo)}</em></h1>
      </div></section>
      <section class="wrap section" style="padding-top:6px">
        <div class="hl-grid">${evidenzaCards()}</div>
      </section>
      <section class="wrap section">
        <div class="card rv"><h3>Con queste due app imparerai a:</h3><ol class="goals">${t.obiettivi.map(o => `<li>${esc(o)}</li>`).join("")}</ol></div>
      </section>`;
  }

  /* ================= Schemi riassuntivi ================= */
  const PAL = ["var(--o)", "var(--m)", "var(--p)", "var(--b)", "var(--cy)", "var(--ok)", "var(--gold)", "var(--o)"];
  function schemaHtml(sc, n) {
    const head = `<div class="sc-head"><span class="sc-n">${n}</span><h3>${esc(sc.titolo)}:</h3></div>`;
    if (sc.tipo === "hub") {
      return `${head}<div class="hub"><div class="hub-c"><span>${esc(sc.centro)}</span></div>
        <div class="hub-v">${sc.voci.map(([a, b], i) => `<div class="hub-i" style="--c:${PAL[i % PAL.length]};--i:${i}"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("")}</div></div>`;
    }
    if (sc.tipo === "flow") {
      return `${head}<ol class="flow">${sc.voci.map(([a, b], i) => `<li style="--c:${PAL[i % PAL.length]};--i:${i}"><span class="fn">${i + 1}</span><div><b>${esc(a)}</b><span>${esc(b)}</span></div></li>`).join("")}</ol>`;
    }
    if (sc.tipo === "cycle") {
      const N = sc.voci.length, R = 118, cx = 160, cy = 160;
      const pts = sc.voci.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / N; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
      const arcs = pts.map((p, i) => {
        const a1 = -Math.PI / 2 + i * 2 * Math.PI / N + .32, a2 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / N - .32;
        const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1), x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
        return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} A${R} ${R} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}" marker-end="url(#ah)"/>`;
      }).join("");
      return `${head}<div class="cyc"><svg viewBox="0 0 320 320" class="cyc-svg" aria-hidden="true">
          <defs><marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 10 5 0 10z" fill="rgba(255,255,255,.7)"/></marker></defs>
          <g class="cyc-arcs" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3" stroke-linecap="round">${arcs}</g>
          ${pts.map(([x, y], i) => `<g class="cyc-node" style="--i:${i}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="24" style="fill:${PAL[i % PAL.length]}"/><text x="${x.toFixed(1)}" y="${(y + 7).toFixed(1)}" text-anchor="middle">${i + 1}</text></g>`).join("")}
          <circle cx="${cx}" cy="${cy}" r="58" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.15)"/>
          <text x="${cx}" y="${cy + 6}" text-anchor="middle" class="cyc-mid">↻</text>
        </svg>
        <ol class="flow mini">${sc.voci.map(([a, b], i) => `<li style="--c:${PAL[i % PAL.length]};--i:${i}"><span class="fn">${i + 1}</span><div><b>${esc(a)}</b><span>${esc(b)}</span></div></li>`).join("")}</ol></div>`;
    }
    if (sc.tipo === "compare") {
      return `${head}<div class="cmp" style="--n:${sc.colonne.length}">${sc.colonne.map((c, i) => `<div class="cmp-c" style="--c:${PAL[(i * 2) % PAL.length]};--i:${i}"><header><b>${esc(c.nome)}</b>${c.sotto ? `<small>${esc(c.sotto)}</small>` : ""}</header><ul>${c.voci.map(v => `<li>${esc(v)}</li>`).join("")}</ul></div>`).join("")}</div>`;
    }
    if (sc.tipo === "bars") {
      return `${head}<div class="bars">${sc.voci.map(([a, v, lab, d], i) => `<div class="bar-r" style="--c:${PAL[i % PAL.length]};--i:${i}"><div class="bar-l"><b>${esc(a)}</b><span>${esc(lab)}</span></div><div class="bar-t"><i style="--w:${v}%"></i></div>${d ? `<p>${esc(d)}</p>` : ""}</div>`).join("")}</div>`;
    }
    return "";
  }
  function tabSchemi(body, t) {
    const list = S[t.id] || [];
    body.innerHTML = `<p class="note" style="margin:8px 0 16px">${list.length} schemi per ripassare l'argomento a colpo d'occhio. Prova a spiegarli ad alta voce, poi mettiti alla prova.</p>
      <div class="schemi">${list.map((sc, i) => `<div class="card schema sc-${sc.tipo} rv" style="--i:${i % 2}">${schemaHtml(sc, i + 1)}</div>`).join("")}</div>
      ${G[t.id] ? `<div class="cta-row" style="justify-content:center"><a class="btn grad" href="#/argomento/${t.id}/gioca">${I.game} Mettiti alla prova</a></div>` : ""}`;
  }

  /* ---------- Metti in ordine ---------- */
  function gameOrder(body, t) {
    const rounds = shuffle(G[t.id].ordina).slice(0, 2);
    let r = 0, okTot = 0, allTot = 0;
    function draw() {
      if (r >= rounds.length) return showResult(body, t, "ordina", Math.round(okTot / allTot * 100), `${okTot} posizioni giuste su ${allTot}.`, gameOrder);
      const [title, steps] = rounds[r];
      let pool = shuffle(steps.map((s, i) => ({ s, i })));
      while (steps.length > 2 && pool.every((p, k) => p.i === k)) pool = shuffle(pool);
      const chosen = [];
      body.innerHTML = `<div class="stage">${stageTop(t, `<span class="pill k">${r + 1}/${rounds.length}</span>`)}
        <div class="qcard" id="qc"><span class="qn">Metti in ordine</span><h2>${esc(title)}</h2>
          <ol class="slots" id="slots">${steps.map((_, i) => `<li data-i="${i}"><span class="fn">${i + 1}</span><span class="sl"></span></li>`).join("")}</ol>
          <p class="note" style="margin:6px 0 10px">Tocca le voci nell'ordine giusto. Tocca una voce già messa per toglierla.</p>
          <div class="pool" id="pool">${pool.map((p, k) => `<button class="tile" data-i="${p.i}" style="--i:${k}">${esc(p.s)}</button>`).join("")}</div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn" id="check" disabled>Verifica</button></div>
        </div></div>`;
      const slots = $$("#slots li", body), check = $("#check", body), card = $("#qc", body);
      const paint = () => {
        slots.forEach((li, k) => { const c = chosen[k]; li.classList.toggle("full", c != null); $(".sl", li).textContent = c != null ? steps[c] : ""; });
        $$("#pool .tile", body).forEach(b => { b.disabled = chosen.includes(Number(b.dataset.i)); });
        check.disabled = chosen.length < steps.length;
      };
      $$("#pool .tile", body).forEach(b => b.addEventListener("click", () => { if (chosen.length < steps.length) { chosen.push(Number(b.dataset.i)); vib(8); sfx("tap"); paint(); } }));
      slots.forEach((li, k) => li.addEventListener("click", () => { if (li.classList.contains("locked") || chosen[k] == null) return; chosen.splice(k, 1); sfx("flip"); paint(); }));
      check.onclick = () => {
        let ok = 0;
        slots.forEach((li, k) => { const good = chosen[k] === k; if (good) ok++; li.classList.add("locked", good ? "right" : "wrong"); if (!good) li.insertAdjacentHTML("beforeend", `<small class="sol">→ ${esc(steps[k])}</small>`); });
        okTot += ok; allTot += steps.length;
        $$("#pool .tile", body).forEach(b => b.disabled = true);
        const fb = $("#fb", body), all = ok === steps.length;
        fb.className = "feedback show " + (all ? "ok" : "no");
        fb.innerHTML = `<b>${all ? "Sequenza perfetta!" : `${ok} su ${steps.length} al posto giusto`}</b>${all ? "Hai ricostruito tutto l'ordine." : "Guarda le correzioni in verde."}`;
        if (all) rightFx(card, "+" + ok); else wrongFx(card);
        check.parentElement.innerHTML = `<button class="btn" id="next">${r + 1 < rounds.length ? "Prossima sequenza" : "Vedi il risultato"} ${I.arr}</button>`;
        $("#next", body).onclick = () => { r++; draw(); window.scrollTo(0, 0); };
        scrollToEl($("#next", body));
      };
    }
    draw();
  }

  /* ---------- Dividi in gruppi ---------- */
  function gameGroups(body, t) {
    const [title, groups] = G[t.id].gruppi;
    const items = shuffle(groups.flatMap(([g, vs], gi) => vs.map(v => ({ v, gi }))));
    let i = 0, ok = 0;
    const res = [];
    function draw() {
      if (i >= items.length) return showResult(body, t, "gruppi", Math.round(ok / items.length * 100), `${ok} voci su ${items.length} nel gruppo giusto.`, gameGroups);
      const it = items[i];
      body.innerHTML = `<div class="stage">${stageTop(t, dotsHtml(items.length, i, res))}
        <div class="tbar prog"><i style="transform:scaleX(${i / items.length})"></i></div>
        <div class="qcard" id="qc"><span class="qn">Dividi in gruppi · ${i + 1} di ${items.length}</span><h2 style="font-size:1.15rem;color:var(--muted);margin:8px 0 14px">${esc(title)}</h2>
          <div class="gitem" id="gi">${esc(it.v)}</div>
          <div class="gbtns" style="--n:${groups.length}">${groups.map(([g], k) => `<button data-g="${k}" style="--c:${PAL[(k * 2) % PAL.length]};--i:${k}">${esc(g)}</button>`).join("")}</div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn" id="next" hidden>${i + 1 < items.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div></div>`;
      const card = $("#qc", body);
      $$(".gbtns button", body).forEach(b => b.addEventListener("click", () => {
        const k = Number(b.dataset.g), good = k === it.gi;
        $$(".gbtns button", body).forEach(x => { x.disabled = true; if (Number(x.dataset.g) === it.gi) x.classList.add("right"); });
        if (good) { ok++; rightFx(card); $("#gi", body).classList.add("ok"); } else { b.classList.add("wrong"); wrongFx(card); $("#gi", body).classList.add("no"); }
        res[i] = good;
        const fb = $("#fb", body); fb.className = "feedback show " + (good ? "ok" : "no");
        fb.innerHTML = `<b>${good ? "Giusto!" : "Non qui."}</b>«${esc(it.v)}» va in: ${esc(groups[it.gi][0])}.`;
        const n = $("#next", body); n.hidden = false; scrollToEl(n);
      }));
      $("#next", body).onclick = () => { i++; sfx("tap"); draw(); window.scrollTo(0, 0); };
    }
    draw();
  }

  /* ================= Sfida lampo ================= */
  function pageSfida(c) {
    c = Number(c);
    if (!C[c]) {
      setK(0);
      app.innerHTML = `
        <section class="band"><div class="wrap">
          <span class="ghost" aria-hidden="true">⚡</span>
          <p class="kicker">Gioco a tempo</p><h1>Sfida lampo<em>quanto sei veloce?</em></h1>
          <p>10 domande miste, 15 secondi per ognuna. Più rispondi in fretta, più punti fai. Le risposte giuste di fila fanno salire il moltiplicatore 🔥</p>
        </div></section>
        <section class="wrap section" style="padding-top:6px">
          <h2 class="rv" style="margin-bottom:16px">Scegli la classe:</h2>
          <div class="class-pick">${[1, 2, 3, 4, 5].map((k, i) => { const rec = getBest("_sfida", "c" + k); return `<button class="rv" data-c="${k}" style="${kVars(k)};--i:${i}">${k}<sup style="font-size:.4em">e</sup><small>${rec ? "Record " + rec : PLC[k]}</small></button>`; }).join("")}</div>
        </section>`;
      $$("[data-c]", app).forEach(b => b.onclick = () => { vib(10); sfx("tap"); location.hash = "#/sfida/" + b.dataset.c; });
      return;
    }
    setK(c);
    const pool = [];
    C[c].temi.forEach(id => (G[id] ? G[id].quiz : []).forEach(q => pool.push({ id, q })));
    const qs = shuffle(pool).slice(0, 10).map(({ id, q: [q, opts, ci, sp] }) => ({ id, q, sp, o: shuffle(opts.map((x, i) => ({ x, ok: i === ci }))) }));
    let i = 0, pts = 0, streak = 0, best = 0, right = 0, timer = null;
    const SEC = 15;
    app.innerHTML = `<section class="wrap" style="padding-top:14px"><div id="sf"></div></section>`;
    const box = $("#sf");
    function draw() {
      clearInterval(timer);
      if (i >= qs.length) {
        const nuovo = setBest("_sfida", "c" + c, pts);
        markActive();
        const pct = Math.round(right / qs.length * 100);
        box.innerHTML = `<div class="stage"><div class="qcard result">
          <p class="kicker" style="justify-content:center">Sfida lampo · ${PL[c]}</p>
          <div class="big" id="bigNum">0</div><p class="muted" style="margin:4px 0 0;font-weight:900">punti</p>
          <div class="stars">${[0, 1, 2].map(k => star(k < starsFor(pct))).join("")}</div>
          <p><b>${right} giuste su ${qs.length}</b> · serie migliore: ${best}</p>
          ${nuovo && pts > 0 ? '<span class="record">Nuovo record!</span>' : `<p class="muted">Il tuo record: ${getBest("_sfida", "c" + c)} punti</p>`}
          <div class="cta-row"><button class="btn grad" id="again">Gioca ancora</button><a class="btn ghost" href="#/classe/${c}">Torna agli argomenti</a></div>
        </div></div>`;
        countUp($("#bigNum"), pts, "", 1300);
        if (pct >= 70) { confetti(pct >= 90 ? 240 : 130); vib([30, 60, 30]); sfx("win"); }
        $("#again").onclick = () => pageSfida(c);
        window.scrollTo(0, 0);
        return;
      }
      const q = qs[i];
      let left = SEC, done = false;
      const mult = Math.min(1 + Math.floor(streak / 2) * 0.5, 3);
      box.innerHTML = `<div class="stage">
        <div class="stage-top"><a class="back" href="#/sfida">${I.back} Esci</a>${streak >= 2 ? `<span class="streak">🔥 ×${String(mult).replace(".", ",")}</span>` : ""}<span class="pill k"><span class="score" id="sc">${pts}</span> pt</span></div>
        <div class="tbar" id="tb"><i></i></div>
        <div class="qcard" id="qc"><span class="qn">${i + 1}/${qs.length} · ${esc(byId[q.id].titolo)}</span><h2>${esc(q.q)}</h2>
          <div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}" data-l="${"ABCD"[k]}" style="--i:${k}">${esc(o.x)}</button>`).join("")}</div>
          <div class="feedback" id="fb"></div>
          <div class="next-row"><button class="btn" id="next" hidden>${i + 1 < qs.length ? "Avanti" : "Vedi il risultato"} ${I.arr}</button></div>
        </div></div>`;
      const tb = $("#tb"), bar = $("#tb i"), card = $("#qc");
      function answer(k) {
        if (done) return; done = true; clearInterval(timer);
        const ok = k !== null && q.o[k].ok, btns = $$(".opt", box);
        btns.forEach((x, j) => { x.disabled = true; if (q.o[j].ok) x.classList.add("right"); else if (j !== k) x.classList.add("dim"); });
        let gain = 0;
        if (ok) {
          gain = Math.round((50 + left * 10) * mult); pts += gain; streak++; right++; best = Math.max(best, streak);
          rightFx(card, "+" + gain);
          const sc = $("#sc"); sc.textContent = pts; sc.classList.add("bump"); setTimeout(() => sc.classList.remove("bump"), 320);
        } else { if (k !== null) btns[k].classList.add("wrong"); streak = 0; wrongFx(card); }
        const fb = $("#fb"); fb.className = "feedback show " + (ok ? "ok" : "no");
        fb.innerHTML = `<b>${k === null ? "Tempo scaduto!" : ok ? `Giusto! +${gain} punti` : "Sbagliato."}</b>${esc(q.sp)}`;
        const n = $("#next"); n.hidden = false; scrollToEl(n);
      }
      $$(".opt", box).forEach(b => b.addEventListener("click", () => answer(Number(b.dataset.k))));
      $("#next").onclick = () => { i++; sfx("tap"); draw(); window.scrollTo(0, 0); };
      requestAnimationFrame(() => { bar.style.transform = `scaleX(${(left - 1) / SEC})`; });
      timer = setInterval(() => {
        left--; bar.style.transform = `scaleX(${Math.max(0, left - 1) / SEC})`;
        tb.classList.toggle("mid", left <= 9 && left > 4); tb.classList.toggle("low", left <= 4);
        if (left <= 3 && left > 0) { vib(15); sfx("tick"); }
        if (left <= 0) answer(null);
      }, 1000);
    }
    draw();
    stopOnLeave(() => clearInterval(timer));
  }

  /* ================= Trofei ================= */
  function pageTrofei() {
    setK(0);
    const s = totalStars(), l = levelOf(s), nx = LEVELS[l + 1], n = streakN();
    const pct = nx ? Math.round((s - LEVELS[l][0]) / (nx[0] - LEVELS[l][0]) * 100) : 100;
    app.innerHTML = `
      <section class="band"><div class="wrap">
        <span class="ghost" aria-hidden="true">★</span>
        <p class="kicker">I miei progressi</p><h1>Trofei<em>stelle, livelli e record</em></h1>
      </div></section>
      <section class="wrap section" style="padding-top:6px"><div class="two">
        <div class="col">
          <div class="card level-card rv">
            <div class="medal"><b>${l + 1}</b></div>
            <h2>${LEVELS[l][1]}</h2>
            <p class="muted" style="margin:6px 0 0;font-weight:700">★ <span id="stc">0</span> stelle su ${MAX_STARS}</p>
            <div class="xpbar"><i id="xp" style="width:0"></i></div>
            <p class="note" style="margin:0">${nx ? `Ancora ${nx[0] - s} stelle per diventare «${nx[1]}»` : "Hai raggiunto il livello massimo!"}</p>
            <div class="cta-row" style="justify-content:center"><span class="fire">🔥 ${n} ${n === 1 ? "giorno" : "giorni"} di fila</span></div>
          </div>
          <div class="card rv"><h3>Livelli:</h3><div class="ranks">${LEVELS.map(([min, name], k) => `<div class="rank${s >= min ? " got" : ""}${k === l ? " cur" : ""}"><i>${k + 1}</i><span>${name}</span><small>★ ${min}</small></div>`).join("")}</div></div>
        </div>
        <div class="col">
          <div class="card rv"><h3>Per classe:</h3><div class="cprog">${[1, 2, 3, 4, 5].map(c => {
            const ts = C[c].temi, st = ts.reduce((a, id) => a + (G[id] ? topicStars(id) : 0), 0), mx = ts.length * MAXT;
            return `<a href="#/classe/${c}" style="${kVars(c)}"><span class="ord">${c}</span><span><b>${PLC[c]}</b><span class="bar"><i style="width:${Math.round(st / mx * 100)}%"></i></span></span><small class="muted" style="font-weight:800">★ ${st}/${mx}</small></a>`;
          }).join("")}</div></div>
          <div class="card rv"><h3>Record Sfida lampo:</h3><div class="ranks">${[1, 2, 3, 4, 5].map(c => { const r = getBest("_sfida", "c" + c); return `<div class="rank${r ? " got" : ""}"><i>${c}</i><span>${PLC[c]}</span><small>${r ? r + " punti" : "—"}</small></div>`; }).join("")}</div>
            <a class="btn full" href="#/sfida" style="margin-top:14px">${I.bolt} Gioca la sfida</a></div>
          <div class="card rv"><h3>Azzera i progressi</h3><p class="muted" style="margin:0 0 14px">Stelle e record sono salvati solo su questo dispositivo. Azzerarli non si può annullare.</p><button class="btn ghost full" id="reset">Azzera tutto</button></div>
        </div>
      </div></section>`;
    countUp($("#stc"), s, "", 1200);
    requestAnimationFrame(() => requestAnimationFrame(() => { $("#xp").style.width = pct + "%"; }));
    let armed = false;
    $("#reset").onclick = e => {
      if (!armed) { armed = true; e.currentTarget.textContent = "Tocca di nuovo per confermare"; e.currentTarget.style.borderColor = "var(--no)"; setTimeout(() => { armed = false; const b = $("#reset"); if (b) { b.textContent = "Azzera tutto"; b.style.borderColor = ""; } }, 4000); return; }
      const pref = mem._pref; mem = { _pref: pref }; save(); updateLvl(); sfx("no"); pageTrofei(); reveal();
    };
  }

  /* ================= Router ================= */
  let leaveFns = [];
  function stopOnLeave(fn) { leaveFns.push(fn); }

  function route() {
    leaveFns.forEach(f => f()); leaveFns = [];
    closeViewer();
    const [a, b, c, d] = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    let navKey = "home";
    if (a === "classi") { pageClassi(); navKey = "classi"; }
    else if (a === "classe") { pageClasse(b); navKey = "classi"; }
    else if (a === "argomento") { pageTopic(b, c, d); navKey = "classi"; }
    else if (a === "sfida") { pageSfida(b); navKey = "sfida"; }
    else if (a === "trofei") { pageTrofei(); navKey = "trofei"; }
    else if (a === "cerca") { pageCerca(b); navKey = "cerca"; }
    else pageHome();
    const cl = a === "classe" ? Number(b) : a === "argomento" && byId[b] ? topicClass(byId[b]) : 0;
    $$(".bnav [data-nav]").forEach(x => x.classList.toggle("on", x.dataset.nav === navKey));
    $$(".nav [data-nav]").forEach(x => x.classList.toggle("on", x.dataset.nav === navKey || (cl && x.dataset.nav === "c" + cl)));
    app.classList.remove("page"); void app.offsetWidth; app.classList.add("page");
    const t = a === "argomento" && byId[b];
    document.title = (t ? t.titolo + " · " : "") + "Studiare Scienze Motorie e Sportive";
    const seg = a === "argomento" && c && c !== "studia" && $(".seg-wrap");
    if (seg && !(c === "gioca" && d) && c !== "ripassa") window.scrollTo(0, seg.offsetTop - 62); else window.scrollTo(0, 0);
    updateLvl(); reveal(); tilt();
  }
  window.addEventListener("hashchange", route);
  route();
})();
