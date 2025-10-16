// --- ITT SZERKESZTHETED AZ IDŐVONALAT! ---

const timelineData = [
    // Háttérben lévő nagy korszakok
    { label: "Premodern kor", start: -800, end: 1500, row: 1, type: 'era' },
    { label: "Modern kor", start: 1500, end: 2000, row: 2, type: 'era' },
    
    // Konkrét fogalmak, irányzatok (lekerekített)
    { label: "Antikvitás", start: -800, end: 476, row: 2, type: 'concept' },
    { label: "Középkor", start: 476, end: 1500, row: 1, type: 'concept' },
    { label: "Kereszténység", start: 30, end: 1500, row: 3, type: 'concept' },

    // Események, vertikális vonalak
    { label: "Paradigmaváltás", start: 1500, end: 1501, row: 1, type: 'event' }
];

// --- INNENTŐL A KÓD AUTOMATIKUSAN MŰKÖDIK ---

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('timeline-container');
    
    // Az idővonal határainak és egyéb beállításainak meghatározása
    const years = timelineData.flatMap(d => [d.start, d.end]);
    const minYear = -1000; // Kézzel beállítjuk a kezdő évet
    const maxYear = 2100; // Kézzel beállítjuk a vég évet
    const totalYears = maxYear - minYear;
    const totalRows = 5; // Hány sávos legyen az idővonal

    // CSS változók beállítása a grid konténerhez
    container.style.setProperty('--total-years', totalYears);
    container.style.setProperty('--total-rows', totalRows);
    
    // Idővonal elemek létrehozása
    timelineData.forEach(item => {
        const element = document.createElement('div');
        element.className = `timeline-item item-${item.type}`;
        element.innerText = item.label;

        // Elem pozíciójának kiszámítása a gridben
        const startCol = item.start - minYear + 1;
        const endCol = item.end - minYear + 1;

        element.style.setProperty('--row', item.row);
        element.style.setProperty('--start-col', startCol);
        element.style.setProperty('--end-col', endCol);
        
        container.appendChild(element);
    });

    // Időskála és segédvonalak létrehozása
    const axis = document.createElement('div');
    axis.className = 'timeline-axis';
    container.appendChild(axis);

    const step = 500; // Hány évenként legyen egy jelölés
    for (let year = minYear; year <= maxYear; year += step) {
        if (year < minYear + step/2 || year > maxYear - step/2) continue;
        
        // Címke az tengelyen
        const label = document.createElement('div');
        label.className = 'axis-label';
        label.innerText = year === 0 ? '0000' : year.toString().padStart(4, '0');
        const pos = year - minYear + 1;
        label.style.setProperty('--pos', pos);
        axis.appendChild(label);

        // Függőleges segédvonal
        const line = document.createElement('div');
        line.className = 'grid-line';
        const posPercent = ((year - minYear) / totalYears) * 100;
        line.style.setProperty('--pos-percent', `${posPercent}%`);
        container.appendChild(line);
    }
});
