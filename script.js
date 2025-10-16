// DOM element ahol a Timeline megjelenik
var container = document.getElementById('visualization');

// 1. LÉPÉS: CSOPORTOK DEFINIÁLÁSA
// Létrehozunk két csoportot: egyet a nagy periódusoknak, egyet a korszakoknak.
var groups = new vis.DataSet([
  {
    id: 'periodusok',
    content: 'Periódusok' // Ez lesz a sáv neve
  },
  {
    id: 'korszakok',
    content: 'Korszakok' // Ez lesz a másik sáv neve
  }
]);

// 2. LÉPÉS: ELEMEK HOZZÁRENDELÉSE A CSOPORTOKHOZ
var items = new vis.DataSet([
  // —————————————————————————————————————————————————————————— PERIÓDUSOK ——————————————————————————————————————————————————————————
  {
    id: "A",
    group: 'periodusok', // Hozzárendelés a 'periodusok' csoporthoz
    content: "Premodern kor",
    start: new Date(-600, 0, 1),
    end: new Date(1600, 0, 1),
    type: "background",
  },
  {
    id: "B",
    group: 'periodusok', // Hozzárendelés a 'periodusok' csoporthoz
    content: "Modern kor",
    start: new Date(1600, 0, 1),
    end: new Date(),
    type: "background",
    className: "negative",
  },

  // —————————————————————————————————————————————————————————— KORSZAKOK ——————————————————————————————————————————————————————————
  {
    id: "a",
    group: 'korszakok', // Hozzárendelés a 'korszakok' csoporthoz
    content: "Antikvitás",
    start: new Date(-600, 0, 1),
    end: new Date(476, 0, 1),
    type: "background",
    className: "antikvitas-stilus", // Az új CSS stílus használata
  },
]);

// Konfigurációs opciók
var options = {
  start: new Date(-700, 0, 1),
  end: new Date(2100, 0, 1),
  stack: false, // Fontos: a háttérelemek így nem próbálják egymást elkerülni
  height: '400px',
};

// 3. LÉPÉS: TIMELINE LÉTREHOZÁSA A CSOPORTOKKAL
// A Timeline konstruktornak átadjuk a groups adathalmazt is.
var timeline = new vis.Timeline(container, items, groups, options);
