const fs = require('fs');
const orangeCss = fs.readFileSync('css/colors/orange.css', 'utf8');

const colors = {
    gold: '#C5A059',
    blue: '#1E69B8',
    green: '#8dc63f',
    yellow: '#fdcb03',
    pink: '#da5581',
    maroon: '#9A5B5B',
    brown: '#A67D5D',
    purple: '#8B6D9C'
};

for (const [name, hex] of Object.entries(colors)) {
    // orange hex in uppercase or lowercase might be present. 
    // Usually it's #e75b1e in orange.css.
    let newCss = orangeCss.replace(/#e75b1e/gi, hex);
    fs.writeFileSync(`css/colors/${name}.css`, newCss);
}
console.log('Color CSS generated.');
