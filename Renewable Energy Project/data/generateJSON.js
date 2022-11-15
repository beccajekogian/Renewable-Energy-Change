// "Google Drive"/"My Drive"/"Upper School"/"12 - Senior"/"Adv Topics Comp Sci"/?Renewable Energy Project"
const fs = require('fs');

let finalSet = {};

let rawdataset = fs.readFileSync('dataset.csv', 'utf8');

let dataSet = rawdataset.split("\n");

dataSet.forEach(function(data) {
  let info = data.split(',');

  let country = info[0].trim();

  if(country!="Entity"){
    let countryStats = {};
    let year = info[2].trim();
    let energy = info[3].trim();

    //country[data[0].trim()] = countryStats;
    if (!finalSet[country]) {
    finalSet[country] = {};
  }

    finalSet[country][year] = energy;
  }
});


fs.writeFileSync('data.json', JSON.stringify(finalSet), 'utf8');


/*
Africa:
  1970 = 10;
  1971 = 11;




*/
