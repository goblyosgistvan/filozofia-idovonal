// DOM element ahol a Timeline megjelenik
var container = document.getElementById('visualization');

// Adatok létrehozása (DataSet)
var items = new vis.DataSet([
  // Két háttérperiódus
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

  // Események ezekben az időszakokban
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

// Konfigurációs opciók
var options = {
  // Az idővonal kezdő és végpontja
  start: new Date(-620, 0, 1), // Kezdődjön i.e. 620-nál
  end: new Date(-480, 0, 1),   // Érjen véget i.e. 480-nál
  
  // További opciók
  height: '300px',
  editable: true, // Elemek szerkeszthetősége
};

// Timeline létrehozása
var timeline = new vis.Timeline(container, items, options);
