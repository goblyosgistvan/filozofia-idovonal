// script.js (Javított verzió a határokkal)

// 1. Megkeressük a HTML elemet, ahova az idővonalat tesszük.
const container = document.getElementById('timeline');

// --- ÚJ RÉSZ: Dinamikus végdátum meghatározása ---
// Lekérjük az aktuális évet (pl. 2024), és hozzáadunk egyet, hogy legyen egy kis mozgástér.
const endYear = new Date().getFullYear() + 1; 


// 2. Létrehozzuk az "elemeket", azaz a két háttérsávot.
// A dátumokat frissítjük az új határokhoz.
const items = new vis.DataSet([
    {
        id: 'premodern',
        content: 'Premodern kor',
        // MÓDOSÍTÁS: A start mostantól i.e. 600
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
    }
]);

// 3. Beállítások az idővonalhoz (opciók)
const options = {
    height: '400px',
    stack: false,
    
    // --- MÓDOSÍTÁS: A határok beállítása ---
    // A legkorábbi dátum, amihez görgetni lehet (i.e. 6. század eleje)
    min: '-0600-01-01',
    // A legkésőbbi dátum, amihez görgetni lehet
    max: `${endYear}-01-01`,

    // Kezdeti nézet: alapból mutassa a teljes idővonalat
    start: '-0600-01-01',
    end: `${endYear}-01-01`,

    // A minimális nagyítás továbbra is hasznos
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 10 
};

// 4. Létrehozzuk az idővonalat a fenti adatokkal és beállításokkal.
const timeline = new vis.Timeline(container, items, options);
