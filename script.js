// script.js

// 1. Megkeressük a HTML elemet, ahova az idővonalat tesszük.
const container = document.getElementById('timeline');

// 2. Létrehozzuk az "elemeket". Most ez a két háttérsáv lesz.
// A Vis.js-ben a 'background' típusú elemek pont erre valók.
const items = new vis.DataSet([
    {
        id: 'premodern',
        content: 'Premodern kor', // Ez lesz a felirat
        start: '-1000-01-01',     // Kezdődjön jó korán, hogy mindent lefedjen
        end: '1600-01-01',        // Eddig tart
        type: 'background',
        className: 'premodern-bg' // Ezzel a CSS osztállyal fogjuk megszínezni
    },
    {
        id: 'modern',
        content: 'Modern kor',
        start: '1600-01-01',      // Pontosan ott kezdődik, ahol a másik véget ért
        end: '2100-01-01',        // Tartsan a jövőig, hogy mindig látszódjon
        type: 'background',
        className: 'modern-bg'
    }
]);

// 3. Beállítások az idővonalhoz (opciók)
const options = {
    // Kezdő nézet, ami jól mutatja a 1600-as elválasztást
    start: '1400-01-01',
    end: '1800-01-01',
    
    // Alapvető beállítások
    height: '400px',
    stack: false, // Fontos: a háttérelemek ne akarjanak egymás alá rendeződni
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 10 // Legalább 10 évre lehessen nagyítani
};

// 4. Létrehozzuk az idővonalat a fenti adatokkal és beállításokkal.
// Figyeld meg, hogy most nincs szükség "groups"-ra.
const timeline = new vis.Timeline(container, items, options);
