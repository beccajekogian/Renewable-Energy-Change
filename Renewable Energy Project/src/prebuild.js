
const fs = require('fs');


// fs.copyFileSync(source, destination)
// fs.rmdirSync('../public');
// fs.mkdirSync('public');


const dir = 'public'

fs.unlinkSync('../public');

// delete directory recursively
fs.rmdir(dir, { recursive: true }, err => {
  if (err) {
    throw err
  }

  console.log(`${dir} is deleted!`)
})


fs.mkdir(dir, { recursive: true }, err => {
  if (err) {
    throw err
  }

  console.log(`${dir} is added!`)
})
