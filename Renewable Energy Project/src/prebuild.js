
const fs = require('fs');
const path = require('path');


// fs.copyFileSync(source, destination)
// fs.rmdirSync('Renewable Energy Project/public');
// fs.mkdirSync('Renewable Energy Project/public');

let style = 'styles.css';
//let headers = styles.css;

//
// if (fs.existsSync('../public/styles.css')){
//   // console.log(__dirname + "/../");
//   // let oldDirname = __dirname + '/../';
//   // console.log(oldDirname);
//   // let newDirName = __dirname;
//   console.log(__dirname + "hi");
//
//   fs.rename('../public/styles.css', 'styles.css', (err) => {
//       if (err) throw err;
//   });
//
//   console.log(__dirname + "no");
//
//   fs.rename('../public/headers.css', 'headers.css', (err) => {
//       if (err) throw err;
//   });
//   console.log(__dirname + "yes");
//
//   fs.readdir('../public', (err, files) => {
//     if (err) throw err;
//
//     for (let file of files) {
//       fs.unlink('../public/' + file, (err) => {
//         if (err) throw err;
//       });
//     }
//     console.log(`public stuff is deleted!`)
//
//   });
//
//   // fs.rmdirSync('../public');
//
// } else

  if (fs.existsSync('styles.css')){
    fs.rename('styles.css', '../public/styles.css', (err) => {
        if (err) throw err;
    });
  }
  else if (fs.existsSync('../public/styles.css')){
    fs.rename('../public/styles.css', 'styles.css', (err) => {
        if (err) throw err;
    });
  }

  if (fs.existsSync('headers.css')){
    fs.rename('headers.css', '../public/headers.css', (err) => {
        if (err) throw err;
    });
  } else if (fs.existsSync('../public/headers.css')){
    fs.rename('../public/headers.css', 'headers.css', (err) => {
        if (err) throw err;
    });
  }


  if (fs.existsSync('images')){
    fs.rename('images', '../public/images', (err) => {
        if (err) throw err;
    });
  } else if (fs.existsSync('../public/images')){
    fs.rename('../public/images','images', (err) => {
        if (err) throw err;
    });
  }

  if (fs.existsSync('about.html')){
    fs.rename('about.html', '../public/about.html', (err) => {
        if (err) throw err;
    });
  } else if (fs.existsSync('../public/about.html')){
    fs.rename('../public/about.html', 'about.html', (err) => {
        if (err) throw err;
    });
  }


if (fs.existsSync('../public/Spain.html') && !fs.existsSync('../public/about.html') && !fs.existsSync('../public/images') && !fs.existsSync('../public/headers.css')){
  fs.readdir('../public', (err, files) => {
    if (err) throw err;

    console.log(__dirname);

    for (let file of files) {
      if (file != '../public/about.html' && file != '../public/headers.css'){
      fs.unlink('../public/' + file, (err) => {
        if (err) throw err;
      });
    }
  }
    console.log(`public stuff is deleted!`)
  });
}
