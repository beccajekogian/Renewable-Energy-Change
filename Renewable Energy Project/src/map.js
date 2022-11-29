var data = [{
  type: "choroplethmapbox", locations: ["NY", "MA", "VT"], z: [-50, -10, -20],
  geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"
}];

var layout = {mapbox: {center: {lon: -74, lat: 43}, zoom: 3.5},
              width: 600, height:400};

var config = {mapboxAccessToken: "your access token"};

Plotly.newPlot('myDiv', data, layout, config);


var data = [
   {type: "scattermapbox", lon: [-86], lat: [34], marker: {size: 20, color: 'purple'}},
   {
    type: "choroplethmapbox",locations: ["AL"], z: [10], coloraxis: "coloraxis",           geojson: {type: "Feature", id: "AL", geometry: {type: "Polygon", coordinates: [[
    [-86, 35], [-85, 34], [-85, 32], [-85, 32], [-85, 32], [-85, 32], [-85, 31],
    [-86, 31], [-87, 31], [-87, 31], [-88, 30], [-88, 30], [-88, 30], [-88, 30],
    [-88, 34], [-88, 35]]]
   }}}];

var layout = {width: 600, height: 400, mapbox: {style: 'streets',
    center: {lon: -86, lat: 33}, zoom: 5}, marker: {line: {color: "blue"}},
    coloraxis: {showscale: false, colorscale: "Viridis"}};

Plotly.setPlotConfig({mapboxAccessToken: "your access token"});

Plotly.newPlot('myDiv', data, layout);

var data = [{
 type: "choroplethmapbox", name: "US states", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
z: [ 141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176 ],
zmin: 25, zmax: 280, colorbar: {y: 0, yanchor: "bottom", title: {text: "US states", side: "right"}}}
 ];

var layout = {mapbox: {style: "dark", center: {lon: -110, lat: 50}, zoom: 0.8}, width: 600, height: 400, margin: {t: 0, b: 0}};

var config = {mapboxAccessToken: "your access token"};

Plotly.newPlot('myDiv', data, layout, config);
