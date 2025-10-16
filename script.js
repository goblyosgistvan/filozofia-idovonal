// DOM element ahol a Timeline megjelenik
var container = document.getElementById('visualization');

// Adatok létrehozása (DataSet)
var items = new vis.DataSet([
  
  // —————————————————————————————————————————————————————————— PERIÓDUSOK ——————————————————————————————————————————————————————————
  
  {
    id: "A",
    content: "Premodern kor",
    start: new Date(-600, 0, 1),
    end: new Date(1600, 0, 1),
    type: "background",
  },
  {
    id: "B",
    content: "Modern kor",
    start: new Date(1600, 0, 1),
    end: new Date(),
    type: "background",
    className: "negative",
  },

  // —————————————————————————————————————————————————————————— PERIÓDUSOK ——————————————————————————————————————————————————————————

  {
    id: 1,
    content: "Szolón reformjai Athénban",
    start: new Date(-594, 0, 1),
  },
  {
    id: 2,
    content: "A delphoi jósda befolyásának csúcsa",
    start: new Date(-580, 0, 1),
  },
  {
    id: 3,
    content: "II. Nabú-kudurri-uszur elfoglalja Jeruzsálemet",
    start: new Date(-587, 0, 1),
  },
  {
    id: 4,
    content: "Thalész napfogyatkozás-jóslata",
    start: new Date(-585, 5, 28), // i.e. 585. máj. 28.
  },
  {
    id: 5,
    content: "Az utolsó római király elűzése",
    start: new Date(-509, 0, 1),
    type: "point",
  },
]);

// —————————————————————————————————————————————————————————— KONFIGURÁCIÓ ——————————————————————————————————————————————————————————

// ————————————————————————————— Az idővonal kezdő és végpontja

var options = {
  
  start: new Date(-600, 0, 1), // Kezdőpont
  end: new Date(2040, 0, 1),   // Végpont
  
  // További opciók
  height: '500px',
  editable: false, // Elemek szerkeszthetősége
};

// Timeline létrehozása
var timeline = new vis.Timeline(container, items, options);
