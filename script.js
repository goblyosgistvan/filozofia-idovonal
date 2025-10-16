// script.js

const container = document.getElementById('timeline');

const now = new Date();
const currentYear = now.getFullYear();
const currentDate = `${currentYear}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const endYear = currentYear + 5;

const items = new vis.DataSet([
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
    {
        id: 'currentYearLabel',
        content: `<strong>${currentYear}</strong>`,
        start: currentDate,
        type: 'point',
        className: 'current-year-label'
    }
]);

const options = {
    height: '400px',
    stack: false,
    min: '-0600-01-01',
    max: `${endYear}-01-01`,
    start: '-0600-01-01',
    end: `${endYear}-01-01`,
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 10
};

const timeline = new vis.Timeline(container, items, null, options);
timeline.addCustomTime(now, 'currentYearLine');
