// "Google Drive"/"My Drive"/"Upper School"/"12 - Senior"/"Adv Topics Comp Sci"/?Renewable Energy Project"
const fs = require('fs');

let finalSet = {};

let rawdataset = fs.readFileSync('dataset.csv', 'utf8');

let dataSet = rawdataset.split("\n");

dataSet.forEach(function(data) {
  let info = data.split(',');
  let country = info[0].trim();



  if (info[0].trim() != "Entity"){
    let countryStats = {};
    let year = info[2].trim();
    let energy = info[3].trim();

    // if (info[1].trim()){
      let code = info[1].trim();
    // } else {
    //   let code = " ";
    // }


    if (!finalSet[country]) {
    finalSet[country] = {};
  }

    finalSet[country][year] = energy;
    finalSet[country]['code'] = code;
}
});

fs.writeFileSync('data.json', JSON.stringify(finalSet), 'utf8');


/*
Africa:
  1970 = 10;
  1971 = 11;




*/
