
const fs = require('fs');


// fs.copyFileSync(source, destination)
fs.rmdirSync('../public');
fs.mkdirSync('public');
