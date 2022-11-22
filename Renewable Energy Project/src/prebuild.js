
const fs = require('fs');
const path = require('path');


// fs.copyFileSync(source, destination)
// fs.rmdirSync('../public');
// fs.mkdirSync('public');


const directory = '../public/'


if (fs.existsSync('public')){
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (let file of files) {
    fs.unlink(directory + file, (err) => {
      if (err) throw err;
    });
  }
});
} else {
  console.log("hi")
}

// //
// // if (fs.existsSync('public')){
// //
// //   fs.rmdir('Renewable Energy Project/public', () => {
// //   console.log("Folder Deleted!");
// //   });
// //
// // } else{
// //
// //
// //   const fs = require('fs');
// //   // const path = require('path');
// //
// //   fs.mkdir(path.join(__dirname, 'test'), (err) => {
// //       if (err) {
// //           return console.error(err);
// //       }
// //       console.log('Directory created successfully!');
// //   });
//
//   //
//   // fs.mkdir(dir, { recursive: true }, err => {
//   //   if (err) {
//   //     throw err
//   //   }
//   //
//   //   console.log(`${dir} is added!`)
//   // })
//
//   // fs.mkdirSync('../public');
//   fs.rename('src/styles.css', 'public/styles.css')
//   // function (err) {
//   //   //if (err) throw err
//   //   console.log('Successfully renamed - AKA moved!')
//   // });
//
// }
//
// ///fs.unlinkSync('../public');
//
// // delete directory recursively
//
