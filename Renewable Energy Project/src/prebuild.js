
const fs = require('fs');
const path = require('path');


// fs.copyFileSync(source, destination)
// fs.rmdirSync('../public');
// fs.mkdirSync('public');

let current_paths = "../src/";
let new_path = "../public/";
let style = 'styles.css';
//let headers = styles.css;


if (fs.existsSync('Renewable Energy Project/public/styles.css')){

  fs.rename('Renewable Energy Project/public/' + style, 'Renewable Energy Project/src/' + style, (err) => {
      if (err) throw err;
  });

  fs.readdir('Renewable Energy Project/public', (err, files) => {
    if (err) throw err;

    for (let file of files) {
      fs.unlink('Renewable Energy Project/public/' + file, (err) => {
        if (err) throw err;
      });
    }
    console.log(`${new_path} is deleted!`)

  });

} else if (fs.existsSync('Renewable Energy Project/src/styles.css')){

        fs.rename('Renewable Energy Project/src/' + style, 'Renewable Energy Project/public/' + style, (err) => {
            if (err) throw err;
        });

        fs.rename('Renewable Energy Project/src/headers.css', 'Renewable Energy Project/public/headers.css', (err) => {
            if (err) throw err;
        });

}
