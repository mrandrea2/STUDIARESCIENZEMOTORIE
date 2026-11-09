/* LABORATORIO — esperienze pratiche, strumenti interattivi, modelli 3D e link.
   I contenuti sono in data/laboratori.js; qui c'è solo il funzionamento. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const num = v => { const n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : NaN; };
  const f1 = n => n.toFixed(1).replace(".", ",");
  const f0 = n => String(Math.round(n));
  const sv = d => `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const IC = {
    exp: sv('<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-2.5L14 9V3"/><path d="M7.5 14h9"/>'),
    tool: sv('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>'),
    cube: sv('<path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>'),
    link: sv('<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
    clock: sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    pin: sv('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    heart: sv('<path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-4 5 5 0 0 1 9 4c-2 4.6-9 9-9 9z"/>')
  };
  const leaveFns = [];
  const onLeave = fn => leaveFns.push(fn);
  window.addEventListener("hashchange", () => { while (leaveFns.length) { try { leaveFns.pop()(); } catch (e) { /* niente */ } } });

  /* ---------- schede ---------- */
  function expHtml(x, i) {
    return `<article class="lab-card exp rv" style="--i:${i % 4}">
      <div class="lab-tag">${IC.exp}<span>Esperienza</span>${x.dove ? `<em>${IC.pin}${esc(x.dove)}</em>` : ""}${x.tempo ? `<em>${IC.clock}${esc(x.tempo)}</em>` : ""}</div>
      <h3>${esc(x.titolo)}</h3>
      ${x.obiettivo ? `<p class="lab-obj"><b>Obiettivo:</b> ${esc(x.obiettivo)}</p>` : ""}
      ${x.materiale && x.materiale.length ? `<div class="lab-mat"><b>Ti serve:</b>${x.materiale.map(m => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
      <ol class="lab-steps">${x.passi.map(p => `<li>${esc(p)}</li>`).join("")}</ol>
      ${x.osserva && x.osserva.length ? `<div class="lab-q"><b>Osserva e rispondi:</b><ul>${x.osserva.map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>` : ""}
      ${x.sicurezza ? `<p class="lab-safe"><b>Attenzione:</b> ${esc(x.sicurezza)}</p>` : ""}
    </article>`;
  }
  function m3dHtml(x, i) {
    return `<article class="lab-card m3d rv" style="--i:${i % 4}">
      <div class="lab-tag">${IC.cube}<span>Modello 3D</span></div>
      <h3>${esc(x.titolo)}</h3>
      ${x.testo ? `<p>${esc(x.testo)}</p>` : ""}
      <div class="m3d-box" data-uid="${esc(x.uid)}" data-t="${esc(x.titolo)}">
        <button class="m3d-go" type="button">${IC.cube}<span>Apri il modello 3D</span><small>Trascina per ruotare · pizzica per ingrandire</small></button>
      </div>
      <p class="m3d-cr">Modello: ${esc(x.autore || "")}${x.licenza ? ` · ${esc(x.licenza)}` : ""} · <a href="https://sketchfab.com/3d-models/${esc(x.uid)}" target="_blank" rel="noopener">Sketchfab ↗</a></p>
    </article>`;
  }
  function linkHtml(x, i) {
    return `<a class="lab-card lnk rv" style="--i:${i % 4}" href="${esc(x.url)}" target="_blank" rel="noopener">
      <div class="lab-tag">${IC.link}<span>${esc(x.tag || "Sito interattivo")}</span></div>
      <h3>${esc(x.titolo)}</h3>
      <p>${esc(x.testo || "")}</p>
      <span class="lnk-go">Apri ${IC.link}</span>
    </a>`;
  }
  function toolHtml(x, i) {
    const T = TOOLS[x.tool]; if (!T) return "";
    return `<article class="lab-card tool rv" style="--i:${i % 4}" data-tool="${esc(x.tool)}">
      <div class="lab-tag">${IC.tool}<span>Strumento interattivo</span></div>
      <h3>${esc(x.titolo || T.titolo)}</h3>
      ${T.testo ? `<p>${esc(x.testo || T.testo)}</p>` : ""}
      <div class="tool-body">${T.html()}</div>
    </article>`;
  }

  window.renderLab = function (body, t, items, extra) {
    const exp = items.filter(x => x.t === "esperienza"), tools = items.filter(x => x.t === "tool"), m3 = items.filter(x => x.t === "3d"), links = items.filter(x => x.t === "link");
    const sec = (title, sub, arr, fn, cls) => arr.length ? `<section class="lab-sec"><h2 class="lab-h">${title}</h2>${sub ? `<p class="muted lab-sub">${sub}</p>` : ""}<div class="lab-grid ${cls || ""}">${arr.map(fn).join("")}</div></section>` : "";
    body.innerHTML = `
      <div class="lab-intro rv"><p class="kicker">Laboratorio</p><h2>Metti le mani sulla teoria:</h2><p class="muted">Esperienze da fare in palestra, in classe o a casa, strumenti per misurarti e modelli 3D da esplorare.</p></div>
      ${items.some(x => x.t === "fitness") && window.fitBanner ? window.fitBanner(true) : ""}
      ${sec("Strumenti interattivi", "Misura, calcola, prova: i risultati restano solo sul tuo dispositivo.", tools, toolHtml, "two-col")}
      ${sec("Modelli 3D", "Ruota, ingrandisci, esplora. Si caricano solo quando li apri.", m3, m3dHtml, "two-col")}
      ${sec("Siti da esplorare", "", links, linkHtml, "two-col")}
      ${sec("Esperienze pratiche", "Lavora con un compagno e annota i risultati sul quaderno.", exp, expHtml, "two-col")}
      ${extra || ""}`;
    $$(".m3d-box", body).forEach(b => $(".m3d-go", b).addEventListener("click", () => {
      b.innerHTML = `<iframe title="${esc(b.dataset.t)}" src="https://sketchfab.com/models/${esc(b.dataset.uid)}/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark_link=0&dnt=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen loading="lazy"></iframe>`;
      b.classList.add("on");
    }));
    $$("[data-tool]", body).forEach(el => { const T = TOOLS[el.dataset.tool]; if (T && T.bind) T.bind($(".tool-body", el)); });
  };

  /* ---------- strumenti ---------- */
  const field = (id, label, ph, extra) => `<label class="tf"><span>${label}</span><input id="${id}" type="number" inputmode="decimal" placeholder="${ph}" ${extra || ""}></label>`;
  const out = (id, label) => `<div class="tout" id="${id}"><b>—</b><span>${label}</span></div>`;
  const live = (box, ids, fn) => { ids.forEach(id => $("#" + id, box).addEventListener("input", fn)); fn(); };
  const setOut = (box, id, v) => { $("#" + id + " b", box).textContent = v; };

  const TOOLS = {
    battito: {
      titolo: "Misura il tuo battito",
      testo: "Trova il polso (radiale o carotideo), premi Via e conta i battiti finché il cerchio non si ferma: 15 secondi.",
      html: () => `<div class="hb"><button class="hb-go" type="button"><span class="hb-ic">${IC.heart}</span><b>Via</b><small>15 secondi</small></button>
        <div class="tgrid">${field("hbR", "Battiti contati a riposo", "es. 18", 'min="0" max="80"')}${field("hbS", "Dopo 20 saltelli", "es. 32", 'min="0" max="80"')}${field("hbC", "Dopo 1 minuto di recupero", "es. 24", 'min="0" max="80"')}</div>
        <div class="hb-bars"></div></div>`,
      bind: box => {
        const go = $(".hb-go", box); let tm = null;
        go.addEventListener("click", () => {
          if (tm) return;
          let s = 15; go.classList.add("run"); $("b", go).textContent = s; $("small", go).textContent = "conta!";
          tm = setInterval(() => { s--; $("b", go).textContent = s; if (s <= 0) { clearInterval(tm); tm = null; go.classList.remove("run"); $("b", go).textContent = "Stop"; $("small", go).textContent = "scrivi i battiti ×4"; try { navigator.vibrate && navigator.vibrate(300); } catch (e) { /* */ } } }, 1000);
        });
        onLeave(() => tm && clearInterval(tm));
        const calc = () => {
          const v = ["hbR", "hbS", "hbC"].map(id => num($("#" + id, box).value) * 4);
          const lab = ["Riposo", "Dopo lo sforzo", "Recupero 1′"];
          $(".hb-bars", box).innerHTML = v.map((b, k) => isNaN(b) || b <= 0 ? "" : `<div class="hbb"><span>${lab[k]}</span><i style="--w:${Math.min(100, b / 2.1)}%"></i><b>${f0(b)} bpm</b></div>`).join("") +
            (!isNaN(v[1]) && !isNaN(v[2]) && v[1] > 0 && v[2] > 0 ? `<p class="tnote">In un minuto il battito è sceso di <b>${f0(v[1] - v[2])} bpm</b>: più scende in fretta, migliore è il recupero.</p>` : "");
        };
        live(box, ["hbR", "hbS", "hbC"], calc);
      }
    },
    karvonen: {
      titolo: "Le tue zone di frequenza cardiaca",
      testo: "Inserisci età e frequenza a riposo (misurala appena sveglio). Il calcolo usa la formula di Karvonen.",
      html: () => `<div class="tgrid">${field("kvE", "Età (anni)", "es. 16", 'min="8" max="90"')}${field("kvR", "FC a riposo (bpm)", "es. 65", 'min="30" max="120"')}</div>
        <div class="tgrid">${out("kvMax", "FC massima stimata (220 − età)")}${out("kvRis", "FC di riserva (FCmax − FCrip)")}</div><div class="kv-z"></div>`,
      bind: box => live(box, ["kvE", "kvR"], () => {
        const e = num($("#kvE", box).value), r = num($("#kvR", box).value);
        if (!(e >= 8 && e <= 90 && r >= 30 && r <= 120)) { setOut(box, "kvMax", "—"); setOut(box, "kvRis", "—"); $(".kv-z", box).innerHTML = ""; return; }
        const max = 220 - e, ris = max - r;
        setOut(box, "kvMax", max + " bpm"); setOut(box, "kvRis", ris + " bpm");
        const Z = [[50, 60, "Recupero attivo", "b2"], [60, 70, "Resistenza di base", "b"], [70, 80, "Aerobico intenso", "o2"], [80, 90, "Soglia", "o"], [90, 100, "Massimale", "n"]];
        $(".kv-z", box).innerHTML = Z.map(([a, b, l, c]) => `<div class="kvz ${c}"><span>${a}–${b}%</span><b>${Math.round(r + a / 100 * ris)}–${Math.round(r + b / 100 * ris)} bpm</b><em>${l}</em></div>`).join("") + `<p class="tnote">FC = FCrip + % × (FCmax − FCrip). È una stima: la FC massima reale può differire di oltre 10 battiti.</p>`;
      })
    },
    cooper: {
      titolo: "Test di Cooper: stima del VO₂max",
      testo: "Scrivi quanti metri hai percorso in 12 minuti di corsa.",
      html: () => `<div class="tgrid">${field("cpM", "Metri in 12 minuti", "es. 2400", 'min="0" max="5000"')}${out("cpV", "VO₂max stimato (mL/kg/min)")}</div><p class="tnote">VO₂max ≈ (metri − 504,9) ÷ 44,73. Confrontati con te stesso: ripeti il test fra 2–3 mesi.</p>`,
      bind: box => live(box, ["cpM"], () => { const m = num($("#cpM", box).value); setOut(box, "cpV", m > 800 && m < 5000 ? f1((m - 504.9) / 44.73) : "—"); })
    },
    imc: {
      titolo: "Calcola l'indice di massa corporea",
      testo: "Peso in kg diviso l'altezza in metri al quadrato.",
      html: () => `<div class="tgrid">${field("imP", "Peso (kg)", "es. 60", 'min="20" max="200"')}${field("imA", "Altezza (cm)", "es. 170", 'min="100" max="230"')}</div>
        <div class="tgrid">${out("imV", "IMC (kg/m²)")}</div>
        <div class="imc-scale"><span>&lt; 18,5</span><span>18,5–24,9</span><span>25–29,9</span><span>≥ 30</span></div>
        <p class="tnote">La scala vale per gli adulti. Per chi ha meno di 18 anni si usano le curve dei percentili per età e sesso: l'IMC da solo non dice nulla su muscoli, ossa e salute. Per qualsiasi dubbio, parlane con il medico.</p>`,
      bind: box => live(box, ["imP", "imA"], () => { const p = num($("#imP", box).value), a = num($("#imA", box).value) / 100; setOut(box, "imV", p > 20 && a > 1 ? f1(p / (a * a)) : "—"); })
    },
    watson: {
      titolo: "Quanta acqua c'è nel tuo corpo?",
      testo: "Formula di Watson per stimare l'acqua corporea totale.",
      html: () => `<div class="seg2" role="radiogroup"><button type="button" data-s="m" class="on">Maschio</button><button type="button" data-s="f">Femmina</button></div>
        <div class="tgrid">${field("waE", "Età", "es. 16")}${field("waA", "Altezza (cm)", "es. 170")}${field("waP", "Peso (kg)", "es. 60")}</div>
        <div class="tgrid">${out("waL", "Litri d'acqua nel corpo")}${out("waPc", "% del peso corporeo")}</div>`,
      bind: box => {
        let s = "m";
        const calc = () => {
          const e = num($("#waE", box).value), a = num($("#waA", box).value), p = num($("#waP", box).value);
          if (!(a > 100 && p > 20)) { setOut(box, "waL", "—"); setOut(box, "waPc", "—"); return; }
          const L = s === "m" ? 2.447 - 0.09156 * (e || 16) + 0.1074 * a + 0.3362 * p : -2.097 + 0.1069 * a + 0.2466 * p;
          setOut(box, "waL", f1(L) + " L"); setOut(box, "waPc", f0(L / p * 100) + "%");
        };
        $$(".seg2 button", box).forEach(b => b.addEventListener("click", () => { s = b.dataset.s; $$(".seg2 button", box).forEach(x => x.classList.toggle("on", x === b)); calc(); }));
        live(box, ["waE", "waA", "waP"], calc);
      }
    },
    reazione: {
      titolo: "Test del tempo di reazione",
      testo: "Tocca il riquadro appena diventa arancione. Cinque prove: conta la media.",
      html: () => `<button class="rx" type="button"><b>Tocca per iniziare</b><small>Aspetta il colore arancione</small></button><div class="rx-res"></div>`,
      bind: box => {
        const el = $(".rx", box), res = $(".rx-res", box); let state = "idle", t0 = 0, tm = null, times = [];
        const set = (cls, a, b) => { el.className = "rx " + cls; $("b", el).textContent = a; $("small", el).textContent = b; };
        const show = () => {
          if (!times.length) { res.innerHTML = ""; return; }
          const avg = times.reduce((x, y) => x + y, 0) / times.length;
          res.innerHTML = `<div class="rx-list">${times.map((v, k) => `<span>${k + 1}ª · ${v} ms</span>`).join("")}</div><p class="tnote">Media <b>${f0(avg)} ms</b> · migliore <b>${Math.min(...times)} ms</b>. Di solito a un segnale visivo si risponde in 200–300 ms; il sonno, la fatica e l'allenamento lo cambiano.</p>`;
        };
        el.addEventListener("pointerdown", e => {
          e.preventDefault();
          if (state === "idle" || state === "done") {
            if (state === "done" || times.length >= 5) times = [];
            show(); state = "wait"; set("wait", "Aspetta…", "non toccare ancora");
            tm = setTimeout(() => { state = "go"; t0 = performance.now(); set("go", "ORA!", "tocca!"); }, 1200 + Math.random() * 2600);
          } else if (state === "wait") {
            clearTimeout(tm); state = "idle"; set("early", "Troppo presto!", "tocca per riprovare");
          } else if (state === "go") {
            const ms = Math.round(performance.now() - t0); times.push(ms); show();
            if (times.length >= 5) { state = "done"; set("idle", ms + " ms", "Test finito · tocca per ricominciare"); }
            else { state = "idle"; set("idle", ms + " ms", `prova ${times.length + 1} di 5 · tocca per continuare`); }
          }
        });
        onLeave(() => clearTimeout(tm));
      }
    },
    respiro: {
      titolo: "Respira con me",
      testo: "Segui il cerchio: si gonfia quando inspiri, resta fermo quando trattieni, si sgonfia quando espiri.",
      html: () => `<div class="seg2 br-pat">${[["q", "Quadrata 4-4-4-4"], ["t", "Triangolare 4-4-4"], ["c", "Coerenza 5-5"], ["r", "Rilassante 4-7-8"]].map(([k, l], i) => `<button type="button" data-p="${k}"${i ? "" : ' class="on"'}>${l}</button>`).join("")}</div>
        <div class="br"><div class="br-c"><span class="br-t">Pronto?</span><b class="br-n"></b></div></div>
        <div class="br-ctl"><button type="button" class="btn small br-go">Inizia</button><span class="br-cy">0 cicli</span></div>`,
      bind: box => {
        const P = { q: [["Inspira", 4, 1], ["Trattieni", 4, 1], ["Espira", 4, 0], ["Trattieni", 4, 0]], t: [["Inspira", 4, 1], ["Trattieni", 4, 1], ["Espira", 4, 0]], c: [["Inspira", 5, 1], ["Espira", 5, 0]], r: [["Inspira", 4, 1], ["Trattieni", 7, 1], ["Espira", 8, 0]] };
        let pat = "q", run = false, tm = null, cy = 0;
        const c = $(".br-c", box), tx = $(".br-t", box), n = $(".br-n", box), btn = $(".br-go", box);
        const stop = () => { run = false; clearTimeout(tm); clearInterval(c._iv); btn.textContent = "Inizia"; tx.textContent = "Pronto?"; n.textContent = ""; c.style.transitionDuration = "1s"; c.style.transform = "scale(.55)"; };
        const phase = k => {
          if (!run) return;
          const ph = P[pat][k % P[pat].length]; const [lab, sec, big] = ph;
          if (k && k % P[pat].length === 0) { cy++; $(".br-cy", box).textContent = cy + (cy === 1 ? " ciclo" : " cicli"); }
          tx.textContent = lab; let left = sec; n.textContent = left;
          c.style.transitionDuration = sec + "s"; c.style.transform = big ? "scale(1)" : "scale(.55)";
          c.dataset.ph = lab === "Trattieni" ? "h" : big ? "i" : "e";
          clearInterval(c._iv); c._iv = setInterval(() => { left--; if (left > 0) n.textContent = left; }, 1000);
          tm = setTimeout(() => phase(k + 1), sec * 1000);
        };
        btn.addEventListener("click", () => { if (run) return stop(); run = true; cy = 0; $(".br-cy", box).textContent = "0 cicli"; btn.textContent = "Stop"; phase(0); });
        $$(".br-pat button", box).forEach(b => b.addEventListener("click", () => { pat = b.dataset.p; $$(".br-pat button", box).forEach(x => x.classList.toggle("on", x === b)); if (run) { stop(); } }));
        c.style.transform = "scale(.55)";
        onLeave(stop);
      }
    },
    attivita: {
      titolo: "Quanto ti muovi davvero?",
      testo: "Stima la tua settimana tipo e confrontala con le raccomandazioni dell'OMS per i ragazzi (5–17 anni).",
      html: () => `<div class="sl-f"><label>Minuti al giorno di attività moderata o vigorosa <b id="atM">30</b></label><input type="range" id="atMi" min="0" max="180" step="5" value="30"></div>
        <div class="sl-f"><label>Giorni a settimana con esercizi di forza e salti <b id="atF">1</b></label><input type="range" id="atFi" min="0" max="7" value="1"></div>
        <div class="sl-f"><label>Ore al giorno seduto davanti a uno schermo (fuori dalla scuola) <b id="atS">3</b></label><input type="range" id="atSi" min="0" max="10" value="3"></div>
        <div class="at-res"></div>`,
      bind: box => {
        const calc = () => {
          const m = +$("#atMi", box).value, f = +$("#atFi", box).value, s = +$("#atSi", box).value;
          $("#atM", box).textContent = m; $("#atF", box).textContent = f; $("#atS", box).textContent = s;
          const ok1 = m >= 60, ok2 = f >= 3, ok3 = s <= 2;
          $(".at-res", box).innerHTML = `<div class="chk ${ok1 ? "ok" : ""}"><b>${ok1 ? "✓" : "!"}</b><span>Almeno 60 minuti al giorno: ${ok1 ? "ci sei" : `ti mancano ${60 - m} minuti al giorno`}</span></div>
            <div class="chk ${ok2 ? "ok" : ""}"><b>${ok2 ? "✓" : "!"}</b><span>Forza per muscoli e ossa almeno 3 giorni: ${ok2 ? "ci sei" : `ne mancano ${3 - f}`}</span></div>
            <div class="chk ${ok3 ? "ok" : ""}"><b>${ok3 ? "✓" : "!"}</b><span>Limitare il tempo seduto davanti agli schermi: ${ok3 ? "bene" : "prova con una pausa attiva ogni ora"}</span></div>
            <p class="tnote">Ogni movimento conta: anche 5–10 minuti di pausa attiva, le scale o la bici per andare a scuola si sommano.</p>`;
        };
        $$("input[type=range]", box).forEach(r => r.addEventListener("input", calc)); calc();
      }
    },
    met: {
      titolo: "Calcolatore di MET e calorie",
      testo: "1 MET è il dispendio a riposo, circa 1 kcal per kg di peso all'ora.",
      html: () => `<label class="tf"><span>Attività</span><select id="mtA">${[["Seduto a studiare", 1.3], ["Camminare piano", 2.8], ["Camminata veloce", 4.3], ["Bici in città", 6], ["Pallavolo", 4], ["Calcio", 7], ["Basket", 6.5], ["Nuoto", 7], ["Corsa a 10 km/h", 9.8], ["Salto della corda", 11.8]].map(([l, v]) => `<option value="${v}">${l} · ${String(v).replace(".", ",")} MET</option>`).join("")}</select></label>
        <div class="tgrid">${field("mtP", "Peso (kg)", "es. 60")}${field("mtM", "Minuti", "es. 30")}</div>
        <div class="tgrid">${out("mtK", "kcal spese (circa)")}${out("mtI", "Intensità")}</div>`,
      bind: box => {
        const calc = () => {
          const met = num($("#mtA", box).value), p = num($("#mtP", box).value), m = num($("#mtM", box).value);
          setOut(box, "mtI", met < 3 ? "Leggera" : met < 6 ? "Moderata" : "Vigorosa");
          setOut(box, "mtK", p > 20 && m > 0 ? f0(met * p * m / 60) : "—");
        };
        $("#mtA", box).addEventListener("change", calc); live(box, ["mtP", "mtM"], calc);
      }
    },
    rpe: {
      titolo: "Quanta fatica senti? Scala di Borg CR10",
      testo: "Alla fine dell'allenamento tocca il numero che descrive meglio la fatica percepita.",
      html: () => `<div class="rpe">${[[0, "Riposo"], [1, "Molto leggero"], [2, "Leggero"], [3, "Moderato"], [4, "Un po' duro"], [5, "Duro"], [6, "Duro"], [7, "Molto duro"], [8, "Molto duro"], [9, "Quasi massimo"], [10, "Massimo"]].map(([n, l]) => `<button type="button" data-n="${n}" style="--h:${200 - n * 19}"><b>${n}</b><span>${l}</span></button>`).join("")}</div><p class="tnote rpe-out">Talk test: fino a 3–4 parli a frasi intere, a 5–6 con frasi brevi, da 7 in su solo con parole singole.</p>`,
      bind: box => $$(".rpe button", box).forEach(b => b.addEventListener("click", () => {
        $$(".rpe button", box).forEach(x => x.classList.toggle("on", x === b));
        const n = +b.dataset.n;
        $(".rpe-out", box).innerHTML = `Hai scelto <b>${n}</b>. ${n <= 2 ? "Intensità leggera: riscaldamento, defaticamento, recupero." : n <= 4 ? "Intensità moderata: respiro più marcato ma parli ancora bene. È la zona della resistenza di base." : n <= 6 ? "Intensità vigorosa: parli a fatica con frasi brevi." : "Intensità molto alta: sostenibile solo per poco tempo."} Moltiplica per i minuti di allenamento: ottieni il <b>carico interno</b> della seduta (es. ${n} × 60′ = ${n * 60} UA).`;
      }))
    },
    sonno: {
      titolo: "A che ora andare a dormire?",
      testo: "Il sonno è fatto di cicli di circa 90 minuti. Scrivi a che ora suona la sveglia.",
      html: () => `<label class="tf"><span>Sveglia alle</span><input id="snS" type="time" value="06:45"></label><div class="sn-res"></div>`,
      bind: box => {
        const calc = () => {
          const v = $("#snS", box).value; if (!v) return;
          const [h, m] = v.split(":").map(Number); const wake = h * 60 + m;
          const fmt = x => { x = ((x % 1440) + 1440) % 1440; return String(Math.floor(x / 60)).padStart(2, "0") + ":" + String(x % 60).padStart(2, "0"); };
          $(".sn-res", box).innerHTML = [6, 5].map(c => `<div class="sn-r ${c === 6 ? "best" : ""}"><b>${fmt(wake - c * 90 - 15)}</b><span>${c} cicli · ${c * 1.5} ore di sonno${c === 6 ? " · ideale per un adolescente" : ""}</span></div>`).join("") +
            `<p class="tnote">Abbiamo aggiunto 15 minuti per addormentarti. Gli adolescenti hanno bisogno di 8–10 ore: spegni gli schermi un'ora prima.</p>`;
        };
        $("#snS", box).addEventListener("input", calc); calc();
      }
    },
    idratazione: {
      titolo: "Quanto hai sudato?",
      testo: "Pesati prima e dopo l'allenamento, senza vestiti sudati.",
      html: () => `<div class="tgrid">${field("idA", "Peso prima (kg)", "es. 60,0")}${field("idB", "Peso dopo (kg)", "es. 59,2")}${field("idL", "Litri bevuti durante", "es. 0,5")}</div>
        <div class="tgrid">${out("idS", "Sudore perso (litri)")}${out("idP", "% di peso perso")}${out("idR", "Da bere nelle ore dopo")}</div><p class="tnote id-n">Già il 2% di peso perso con il sudore riduce prestazione e concentrazione.</p>`,
      bind: box => live(box, ["idA", "idB", "idL"], () => {
        const a = num($("#idA", box).value), b = num($("#idB", box).value), l = num($("#idL", box).value) || 0;
        if (!(a > 20 && b > 20 && a >= b)) { ["idS", "idP", "idR"].forEach(i => setOut(box, i, "—")); return; }
        const s = a - b + l, pc = (a - b) / a * 100;
        setOut(box, "idS", f1(s) + " L"); setOut(box, "idP", f1(pc) + "%"); setOut(box, "idR", f1((a - b) * 1.25) + "–" + f1((a - b) * 1.5) + " L");
        $(".id-n", box).innerHTML = pc >= 2 ? "<b>Oltre il 2%:</b> la prestazione è già calata. La prossima volta bevi di più prima e durante." : "Sotto il 2%: hai gestito bene i liquidi. Reintegra con il 125–150% di quanto perso, a piccoli sorsi.";
      })
    },
    profondita: {
      titolo: "Scendi in profondità: la legge di Boyle",
      testo: "Trascina il cursore e guarda che cosa succede all'aria nei polmoni di un apneista.",
      html: () => `<div class="sl-f"><label>Profondità <b id="pfD">0 m</b></label><input type="range" id="pfI" min="0" max="60" value="0"></div>
        <div class="pf"><div class="pf-w"><div class="pf-l"></div></div><div class="pf-d"><div class="tout"><b id="pfP">1 atm</b><span>pressione assoluta</span></div><div class="tout"><b id="pfV">6,0 L</b><span>volume dell'aria nei polmoni</span></div><p class="tnote pf-n"></p></div></div>`,
      bind: box => {
        const calc = () => {
          const d = +$("#pfI", box).value, P = 1 + d / 10, V = 6 / P;
          $("#pfD", box).textContent = d + " m"; $("#pfP", box).textContent = f1(P).replace(",0", "") + " atm"; $("#pfV", box).textContent = f1(V) + " L";
          $(".pf-l", box).style.transform = `scale(${Math.sqrt(1 / P)})`; $(".pf-w", box).style.setProperty("--d", d / 60);
          $(".pf-n", box).textContent = d === 0 ? "In superficie: 1 atmosfera, polmoni pieni." : d <= 10 ? "Nei primi 10 metri la pressione raddoppia: il volume si dimezza. È il tratto in cui il cambiamento è più forte." : d < 30 ? "Il riflesso d'immersione rallenta il cuore e restringe i vasi di braccia e gambe." : d < 40 ? "Con le bombole, da 30–40 m può comparire la narcosi da azoto." : "Negli apneisti esperti il blood shift sposta sangue nel torace e protegge i polmoni.";
        };
        $("#pfI", box).addEventListener("input", calc); calc();
      }
    },
    quota: {
      titolo: "Sali in quota: quanto ossigeno c'è?",
      testo: "La percentuale di ossigeno nell'aria resta circa il 21%, ma cala la pressione: ogni respiro porta meno ossigeno.",
      html: () => `<div class="sl-f"><label>Altitudine <b id="qtH">0 m</b></label><input type="range" id="qtI" min="0" max="8848" step="10" value="0"></div>
        <div class="qt-tags">${[["Verona", 59], ["Livigno", 1816], ["Cervinia", 2050], ["Quito", 2850], ["La Paz", 3640], ["Everest", 8848]].map(([l, h]) => `<button type="button" data-h="${h}">${l} <small>${h} m</small></button>`).join("")}</div>
        <div class="tgrid">${out("qtP", "pressione dell'aria (mmHg)")}${out("qtO", "ossigeno per respiro rispetto al mare")}</div><div class="qt-bar"><i></i></div><p class="tnote qt-n"></p>`,
      bind: box => {
        const r = $("#qtI", box);
        const calc = () => {
          const h = +r.value, P = 760 * Math.pow(1 - 2.25577e-5 * h, 5.25588), pc = P / 760 * 100;
          $("#qtH", box).textContent = h + " m"; setOut(box, "qtP", f0(P)); setOut(box, "qtO", f0(pc) + "%");
          $(".qt-bar i", box).style.width = pc + "%";
          $(".qt-n", box).textContent = h < 1500 ? "Nessun effetto rilevante a riposo." : h < 2500 ? "Quota media: il cuore e il respiro accelerano; è la quota dei raduni di allenamento in altura." : h < 4000 ? "Quota alta: serve acclimatarsi in modo graduale per evitare il mal di montagna." : "Quota estrema: senza acclimatamento o ossigeno è pericoloso.";
        };
        r.addEventListener("input", calc);
        $$(".qt-tags button", box).forEach(b => b.addEventListener("click", () => { r.value = b.dataset.h; calc(); }));
        calc();
      }
    },
    supercomp: {
      titolo: "Quando fare il prossimo allenamento?",
      testo: "Sposta il cursore: scegli dopo quanto tempo ripetere lo stimolo e guarda l'effetto su 4 allenamenti.",
      html: () => `<div class="sl-f"><label>Riposo tra un allenamento e l'altro <b id="scR">48 ore</b></label><input type="range" id="scI" min="6" max="144" step="6" value="48"></div><svg class="sc-svg" viewBox="0 0 400 200" aria-hidden="true"><line x1="10" y1="110" x2="390" y2="110" class="sc-base"/><path class="sc-p"/></svg><p class="tnote sc-n"></p>`,
      bind: box => {
        const r = $("#scI", box), p = $(".sc-p", box);
        const c = t => t <= 0 ? 0 : t < 24 ? -34 * Math.sin(Math.PI * t / 24) : t < 110 ? 20 * Math.sin(Math.PI * (t - 24) / 86) : 0;
        const calc = () => {
          const R = +r.value, N = 4, T = R * N + 60, sx = 380 / T; let d = "";
          for (let x = 0; x <= T; x += 1) {
            const k = Math.min(N - 1, Math.floor(x / R)); let base = 0; for (let j = 0; j < k; j++) base += c(R);
            const y = Math.max(8, Math.min(192, 110 - base - c(x - k * R)));
            d += (x ? " L" : "M") + (10 + x * sx).toFixed(1) + " " + y.toFixed(1);
          }
          p.setAttribute("d", d);
          $("#scR", box).textContent = R + " ore";
          $(".sc-n", box).textContent = R < 30 ? "Troppo presto: ti alleni prima di aver recuperato. La fatica si accumula e il livello scende (rischio di sovrallenamento)." : R <= 90 ? "Momento giusto: il nuovo stimolo cade nella supercompensazione e il livello sale, gradino dopo gradino." : "Troppo tardi: l'effetto si è già perso e torni al punto di partenza.";
        };
        r.addEventListener("input", calc); calc();
      }
    },
    arousal: {
      titolo: "Trova la tua attivazione ideale",
      testo: "La curva a U rovesciata: troppo poca o troppa attivazione peggiorano la prestazione.",
      html: () => `<svg class="ar-svg" viewBox="0 0 400 220" aria-hidden="true"><path class="ar-c" d="M20 190 C120 190 140 30 200 30 C260 30 280 190 380 190"/><line class="ar-ax" x1="20" y1="200" x2="380" y2="200"/><text x="20" y="216">bassa</text><text x="380" y="216" text-anchor="end">alta attivazione</text><circle class="ar-dot" r="10" cx="200" cy="30"/></svg>
        <div class="sl-f"><label>Attivazione <b id="arV">media</b></label><input type="range" id="arI" min="0" max="100" value="50"></div><p class="tnote ar-n"></p>`,
      bind: box => {
        const r = $("#arI", box), dot = $(".ar-dot", box), path = $(".ar-c", box);
        const calc = () => {
          const v = +r.value, L = path.getTotalLength ? path.getTotalLength() : 0;
          if (L) { const pt = path.getPointAtLength(L * v / 100); dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y); }
          $("#arV", box).textContent = v < 30 ? "bassa" : v <= 70 ? "ottimale" : "eccessiva";
          dot.setAttribute("class", "ar-dot " + (v < 30 ? "lo" : v <= 70 ? "ok" : "hi"));
          $(".ar-n", box).textContent = v < 30 ? "Apatia, riflessi lenti, poca energia. Per alzarla: musica ritmica, self-talk energico, riscaldamento dinamico, respiri rapidi." : v <= 70 ? "Zona ottimale: vigile ma lucido, movimenti fluidi, decisioni rapide. Ognuno ha la sua zona (modello IZOF di Hanin)." : "Ansia, rigidità muscolare, errori di precisione. Per abbassarla: respirazione lenta, rilassamento muscolare progressivo, immagini calmanti.";
        };
        r.addEventListener("input", calc); setTimeout(calc, 0);
      }
    },
    smart: {
      titolo: "Costruisci un obiettivo SMART",
      testo: "Riempi i cinque campi: il tuo obiettivo prende forma qui sotto.",
      html: () => `<div class="smart">${[["S", "Specifico · che cosa?", "es. correre i 1000 metri"], ["M", "Misurabile · quanto?", "es. in 4 minuti e 30"], ["A", "Accessibile · da dove parto?", "es. oggi li corro in 4 e 50"], ["R", "Rilevante · perché per me conta?", "es. per il test di classe"], ["T", "Temporizzato · entro quando?", "es. entro 8 settimane"]].map(([k, l, p]) => `<label class="tf"><span><b>${k}</b> ${l}</span><input type="text" data-k="${k}" placeholder="${p}"></label>`).join("")}</div><div class="smart-out"></div>`,
      bind: box => {
        const calc = () => {
          const v = {}; $$("[data-k]", box).forEach(i => v[i.dataset.k] = i.value.trim());
          const n = Object.values(v).filter(Boolean).length;
          $(".smart-out", box).innerHTML = n ? `<p class="smart-g">«Voglio <b>${esc(v.S || "…")}</b> <b>${esc(v.M || "…")}</b> <b>${esc(v.T || "…")}</b>. Parto da: ${esc(v.A || "…")}. È importante perché ${esc(v.R || "…")}.»</p><p class="tnote">${n}/5 criteri compilati. Ora spezzalo in obiettivi di processo: che cosa farai ogni settimana?</p>` : "";
        };
        $$("[data-k]", box).forEach(i => i.addEventListener("input", calc));
      }
    },

    /* ---------- equilibrio: test della cicogna ---------- */
    equilibrio: {
      titolo: "Test della cicogna",
      testo: "In piedi su una gamba, l'altro piede appoggiato al ginocchio, mani sui fianchi. Un compagno tocca «Via» e tocca di nuovo quando perdi l'equilibrio.",
      html: () => `<div class="seg2 eq-c"><button type="button" class="on" data-c="Occhi aperti">Occhi aperti</button><button type="button" data-c="Occhi chiusi">Occhi chiusi</button><button type="button" data-c="Sul cuscino">Su un cuscino</button></div>
        <button class="rx eq" type="button"><b>Via</b><small>tocca per far partire il tempo</small></button><div class="eq-res"></div>`,
      bind: box => {
        let cond = "Occhi aperti", t0 = 0, run = false, iv = null; const res = [];
        const el = $(".eq", box);
        $$(".eq-c button", box).forEach(b => b.addEventListener("click", () => { if (run) return; cond = b.dataset.c; $$(".eq-c button", box).forEach(x => x.classList.toggle("on", x === b)); }));
        const show = () => {
          const by = {}; res.forEach(r => { (by[r.c] = by[r.c] || []).push(r.s); });
          $(".eq-res", box).innerHTML = Object.keys(by).map(c => `<div class="kvz b"><span>${esc(c)}</span><b>migliore ${f1(Math.max(...by[c]))} s</b><em>${by[c].map(f1).join(" · ")} s</em></div>`).join("") + (res.length ? `<p class="tnote">Confronta occhi aperti e chiusi: quanto conta la vista? Senza vista lavorano solo l'orecchio interno e i propriocettori.</p>` : "");
        };
        el.addEventListener("pointerdown", e => {
          e.preventDefault();
          if (!run) { run = true; t0 = performance.now(); el.className = "rx eq go"; $("small", el).textContent = "tocca quando perdi l'equilibrio"; iv = setInterval(() => { $("b", el).textContent = f1((performance.now() - t0) / 1000) + " s"; }, 100); }
          else { run = false; clearInterval(iv); const s = (performance.now() - t0) / 1000; res.push({ c: cond, s }); el.className = "rx eq"; $("b", el).textContent = f1(s) + " s"; $("small", el).textContent = "tocca per una nuova prova"; show(); }
        });
        onLeave(() => clearInterval(iv));
      }
    },

    /* ---------- RCP: metronomo delle compressioni ---------- */
    rcp: {
      titolo: "Il ritmo delle compressioni",
      testo: "Allenati sul ritmo giusto: 100–120 compressioni al minuto. Avvia il metronomo e premi il cuscino (o tocca il riquadro) a tempo.",
      html: () => `<div class="seg2 rcp-m"><button type="button" class="on" data-m="30">30 compressioni : 2 ventilazioni</button><button type="button" data-m="0">Solo compressioni</button></div>
        <button class="rx rcp-pad" type="button"><b>Premi qui a tempo</b><small>misuro il tuo ritmo</small></button>
        <div class="br-ctl"><button type="button" class="btn small rcp-go">Avvia il metronomo · 110/min</button><span class="br-cy rcp-n"></span></div>
        <div class="tgrid">${out("rcpR", "Il tuo ritmo (compressioni al minuto)")}${out("rcpC", "Compressioni nel ciclo")}</div>`,
      bind: box => {
        let mode = 30, on = false, tm = null, n = 0, actx = null; const taps = [];
        const pad = $(".rcp-pad", box), go = $(".rcp-go", box);
        const beep = (f, d) => { try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = f; g.gain.setValueAtTime(.18, t); g.gain.exponentialRampToValueAtTime(.001, t + d); o.connect(g).connect(actx.destination); o.start(t); o.stop(t + d); } catch (e) { /* audio non disponibile */ } };
        const flash = () => { pad.classList.add("go"); setTimeout(() => pad.classList.remove("go"), 120); };
        const tick = () => {
          if (!on) return;
          n++; beep(n === mode ? 660 : 880, .07); flash(); setOut(box, "rcpC", mode ? `${n} / ${mode}` : String(n));
          if (mode && n >= mode) { $(".rcp-n", box).textContent = "2 ventilazioni"; tm = setTimeout(() => { n = 0; $(".rcp-n", box).textContent = ""; tick(); }, 4000); return; }
          tm = setTimeout(tick, 60000 / 110);
        };
        const stop = () => { on = false; clearTimeout(tm); n = 0; go.textContent = "Avvia il metronomo · 110/min"; $(".rcp-n", box).textContent = ""; setOut(box, "rcpC", "—"); };
        go.addEventListener("click", () => { if (on) return stop(); on = true; go.textContent = "Ferma"; tick(); });
        $$(".rcp-m button", box).forEach(b => b.addEventListener("click", () => { mode = Number(b.dataset.m); $$(".rcp-m button", box).forEach(x => x.classList.toggle("on", x === b)); if (on) { stop(); } }));
        pad.addEventListener("pointerdown", e => {
          e.preventDefault(); const t = performance.now(); taps.push(t); while (taps.length > 9) taps.shift();
          if (!on) flash();
          if (taps.length >= 4 && t - taps[0] < 8000) {
            const r = Math.round(60000 * (taps.length - 1) / (t - taps[0]));
            setOut(box, "rcpR", r);
            $("small", pad).textContent = r < 100 ? "troppo lento: accelera" : r > 120 ? "troppo veloce: rallenta" : "ritmo giusto!";
          }
        });
        onLeave(stop);
      }
    },

    /* ---------- la chiamata al 112 ---------- */
    chiamata: {
      titolo: "Simula la chiamata al 112",
      testo: "Al parco, un signore di circa 60 anni si accascia mentre corre. Non risponde. L'operatore del 112 ti fa alcune domande: scegli la risposta più utile.",
      html: () => `<div class="ch"></div>`,
      bind: box => {
        const Q = [
          ["«112, qual è l'emergenza?»", ["«Venite subito, è grave!»", "«Un uomo è crollato a terra e non risponde.»", "«Non lo so, chiamo dopo.»"], 1, "Detto in una frase: che cosa è successo."],
          ["«Dove vi trovate esattamente?»", ["«Al parco.»", "«Verona.»", "«Parco San Giacomo, ingresso di via Roma, vicino alla fontana.»"], 2, "Indirizzo preciso e un punto di riferimento: i soccorsi arrivano prima."],
          ["«Respira normalmente?»", ["«Guardo, ascolto e sento per 10 secondi: no, fa solo dei respiri strani.»", "«Credo di sì.»", "«Non lo tocco.»"], 0, "I respiri «strani» e rari (gasping) non sono respiro normale: è arresto cardiaco."],
          ["«C'è un defibrillatore vicino?»", ["«Non serve.»", "«Mando un ragazzo a prenderlo al bar del parco.»", "«Lo cerco io e intanto lo lascio solo.»"], 1, "Qualcuno va a prenderlo mentre tu resti con la persona."],
          ["«Inizi le compressioni, la guido io.»", ["Metto il telefono in vivavoce e comprimo al centro del torace.", "Gli do dell'acqua.", "Lo metto seduto."], 0, "Vivavoce: hai le mani libere e l'operatore ti dà il ritmo."],
          ["Arrivano i soccorritori. Tu…", ["Te ne vai.", "Racconti che cosa è successo e da quanto tempo fai le compressioni.", "Interrompi tutto e aspetti."], 1, "Le informazioni sui minuti trascorsi servono ai sanitari."]
        ];
        let i = 0, ok = 0; const el = $(".ch", box);
        const draw = () => {
          if (i >= Q.length) { el.innerHTML = `<div class="ch-end"><b>${ok} risposte utili su ${Q.length}</b><p class="tnote">Ricorda: dove, che cosa, quante persone, come stanno, il tuo numero. E non riattaccare per primo.</p><button type="button" class="btn small ch-re">Ricomincia</button></div>`; $(".ch-re", el).onclick = () => { i = 0; ok = 0; draw(); }; return; }
          const [q, o, c, sp] = Q[i];
          el.innerHTML = `<p class="ch-q"><span>${i + 1}/${Q.length}</span>${esc(q)}</p><div class="ch-o">${o.map((x, k) => `<button type="button" data-k="${k}">${esc(x)}</button>`).join("")}</div><p class="tnote ch-fb"></p>`;
          $$(".ch-o button", el).forEach(b => b.addEventListener("click", () => {
            const k = Number(b.dataset.k); if (k === c) ok++;
            $$(".ch-o button", el).forEach((x, j) => { x.disabled = true; x.classList.add(j === c ? "right" : j === k ? "wrong" : "dim"); });
            $(".ch-fb", el).innerHTML = `<b>${k === c ? "Giusto." : "Non proprio."}</b> ${esc(sp)} <button type="button" class="btn small ch-nx">Avanti</button>`;
            $(".ch-nx", el).onclick = () => { i++; draw(); };
          }));
        };
        draw();
      }
    }
  };

})();
