/* APPROFONDIMENTI — laboratori esterni del prof. Bertelli.
   Compaiono come riquadri cliccabili (non come link) nella home e negli argomenti indicati in `temi`.
   Si aprono in una nuova scheda solo quando lo studente li tocca.
   Per aggiungerne uno: copia un blocco, cambia i testi e l'indirizzo.
   col: "a" (arancio-magenta) oppure "b" (verde-blu) · art: "atp" oppure "cellula". */
window.APPROF = [
  {
    id: "metabolismo-3d",
    url: "https://metabolismo3d.vercel.app/",
    col: "a", art: "atp",
    tag: "Laboratorio 3D",
    titolo: "Metabolismo 3D",
    sotto: "dal glucosio all'ATP",
    testo: "Entra nella cellula e segui una molecola di glucosio: glicolisi, ciclo di Krebs e catena respiratoria in un modello 3D da ruotare e ingrandire.",
    punti: ["Glicolisi", "Ciclo di Krebs", "ATP sintasi", "Perché serve l'ossigeno"],
    cta: "Apri il laboratorio",
    temi: ["i-metabolismi-energetici"]
  },
  {
    id: "cellule-in-equilibrio",
    url: "https://celluleinequilibrio.vercel.app/",
    col: "b", art: "cellula",
    tag: "Prevenzione dei tumori",
    titolo: "Cellule in equilibrio",
    sotto: "capire i tumori per prevenirli",
    testo: "Come nasce un tumore, come si cura e quali scelte di ogni giorno riducono il rischio: movimento, alimentazione, niente fumo, vaccini e screening.",
    punti: ["Dal DNA alla salute", "Cellula in 3D", "Laboratori", "Ripasso attivo"],
    cta: "Apri il percorso",
    temi: ["pnei-lifestyle-e-salute", "il-sistema-immunitario", "la-salute-dinamica"]
  }
];
