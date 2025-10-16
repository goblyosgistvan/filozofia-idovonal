// script.js (Kiegészített verzió)

// 1. Megkeressük a HTML elemet
const container = document.getElementById('timeline');

// --- ÚJ RÉSZ: Jelenlegi dátum és év változók ---
const now = new Date();
const currentYear = now.getFullYear();
// Formázzuk a mai napot 'ÉÉÉÉ-HH-NN' formátumra a vonalhoz
const currentDate = `${currentYear}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
// A timeline felső határa legyen a jelenlegi év + 5, hogy legyen hely a jelölőnek
const endYear = currentYear + 5;

// 2. Létrehozzuk az "elemeket"
const items = new vis.DataSet([
    // A háttérsávok maradnak
    {
        id: 'premodern',
        content: 'Premodern kor',
        start: '-0600-01-01', 
        end: '1600-01-01',
        type: 'background',
        className: 'premodern-bg'
    },
    {
        id: 'modern',
        content: 'Modern kor',
        start: '1600-01-01',
        end: `${endYear}-01-01`, 
        type: 'background',
        className: 'modern-bg'
    },
    
    // --- ÚJ ELEM: Az évszám címke ---
    // Ez egy 'point' típusú elem, ami egyetlen időponthoz kötődik.
    {
        id: 'currentYearLabel',
        content: `<strong>${currentYear}</strong>`, // A jelenlegi év, félkövéren
        start: currentDate, // Pontosan a mai naphoz igazítjuk
        type: 'point',
        className: 'current-year-label' // Saját CSS osztály a formázáshoz
    }
]);

// 3. Beállítások az idővonalhoz
const options = {
    height: '400px',
    stack: false,
    min: '-0600-01-01',
    max: `${endYear}-01-01`,
    start: '-0600-01-01',
    end: `${endYear}-01-01`,
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 10
};

// 4. Létrehozzuk az idővonalat
const timeline = new vis.Timeline(container, items, null, options);

// --- ÚJ RÉSZ: Függőleges vonal hozzáadása ---
// A timeline létrehozása UTÁN adjuk hozzá a 'custom time' vonalat.
timeline.addCustomTime(now, 'currentYearLine');
