// script.js

// 1. A Google Sheets publikált CSV linkje
const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSmNXKlWO1jsEytxJBiAFE0x3sU3sS98MJEbcMpR6JxZH38aCEpfnQ3CvZivwHALAnCHoXNdquW-W77/pub?output=csv';

// Az idővonal megjelenítésére szolgáló konténer
const container = document.getElementById('timeline');

// Az idővonal beállításai
const options = {
    zoomable: true,
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 5, // Minimum 5 év
    stack: true, // Elemek ne fedjék egymást
    start: '-0500',
    end: '2020',
};

function formatYear(year) {
  // A Vis.js tökéletesen kezeli az "ÉÉÉÉ-HH-NN" formátumot,
  // negatív (Kr.e.) és pozitív (Kr.u.) évekre egyaránt.
  // Az egyszerűség kedvéért minden év január 1-jét használjuk.
  return `${year}-01-01`;
}

// 2. Adatok betöltése és feldolgozása a Google Sheets-ből
Papa.parse(googleSheetURL, {
    download: true,
    header: true, // Fontos! Ez mondja meg, hogy az első sor a fejléc
    dynamicTyping: true, // Automatikusan számmá alakítja a számokat
    complete: function(results) {
        // A 'results.data' tartalmazza a sorokat objektumokként
        const adatok = results.data;
        
        // Üres tömbök a Vis.js számára
        let items = [];
        let groups = [];
        let groupMap = new Map(); // Segítségével elkerüljük a duplikált korszakokat

        // 3. Adatok átalakítása a Vis.js formátumára
        adatok.forEach((sor, index) => {
            if (sor.nev && sor.szuletett !== null && sor.meghalt !== null) {
                // Filozófusok hozzáadása az 'items'-hez
                items.push({
                    id: index + 1,
                    content: sor.nev,
                    start: sor.szuletett.toString(), // Dátumként string kell
                    end: sor.meghalt.toString(),
                    group: sor.korszak_id,
                    type: 'range'
                });

                // Korszakok (csoportok) gyűjtése, duplikáció nélkül
                if (!groupMap.has(sor.korszak_id)) {
                    groupMap.set(sor.korszak_id, sor.korszak_nev);
                    groups.push({
                        id: sor.korszak_id,
                        content: sor.korszak_nev
                    });
                }
            }
        });

        // 4. Az idővonal létrehozása a betöltött adatokkal
        const timeline = new vis.Timeline(
            container, 
            new vis.DataSet(items), 
            new vis.DataSet(groups), 
            options
        );
    },
    error: function(error) {
        console.error("Hiba a CSV betöltése közben:", error);
        container.innerHTML = "Hiba történt az adatok betöltése közben. Ellenőrizd a Google Sheets linket!";
    }
});
