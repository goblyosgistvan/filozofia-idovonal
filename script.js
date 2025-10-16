// 1. Az adatok (a JSON-ból vagy közvetlenül ide írva)

// Korszakok mint csoportok a Vis.js számára
const groups = new vis.DataSet([
  {id: 1, content: 'Ókori görög'},
  {id: 2, content: 'Felvilágosodás'},
  {id: 3, content: 'Egzisztencializmus'}
]);

// Filozófusok mint elemek az idővonalon
const items = new vis.DataSet([
  // Az 'id' egyedi azonosító, 'content' a megjelenő név.
  // A 'start' a születés, az 'end' a halál dátuma.
  // A 'group' köti a filozófust a korszakhoz.
  // A 'type: range' jelzi, hogy egy időtartamot jelenítünk meg.
  {id: 1, content: 'Szókratész', start: '-0470', end: '-0399', group: 1, type: 'range'},
  {id: 2, content: 'Platón', start: '-0428', end: '-0348', group: 1, type: 'range'},
  {id: 3, content: 'Arisztotelész', start: '-0384', end: '-0322', group: 1, type: 'range'},
  
  {id: 4, content: 'Immanuel Kant', start: '1724-04-22', end: '1804-02-12', group: 2, type: 'range'},
  {id: 5, content: 'Voltaire', start: '1694-11-21', end: '1778-05-30', group: 2, type: 'range'},
  
  {id: 6, content: 'Søren Kierkegaard', start: '1813-05-05', end: '1855-11-11', group: 3, type: 'range'},
  {id: 7, content: 'Jean-Paul Sartre', start: '1905-06-21', end: '1980-04-15', group: 3, type: 'range'}
]);

// 2. Az idővonal beállításai
const container = document.getElementById('timeline');
const options = {
  // Nagyítható, mozgatható
  zoomable: true,
  zoomMin: 1000 * 60 * 60 * 24 * 365 * 5, // Minimum 5 évre lehessen nagyítani
  // Kezdő nézet
  start: '-0500',
  end: '2020',
};

// 3. Az idővonal létrehozása
const timeline = new vis.Timeline(container, items, groups, options);