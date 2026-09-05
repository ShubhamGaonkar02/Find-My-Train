const fs = require('fs');
const https = require('https');
const path = require('path');

const targetFile = path.join(__dirname, 'data', 'stations.json');

https.get('https://raw.githubusercontent.com/IamYVJ/Indian_Railway_Stations_JSON/master/stations.json', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      
      // Handle possible array schemas
      let externalStations = [];
      if (Array.isArray(parsed)) {
        externalStations = parsed;
      } else if (parsed.features) {
        externalStations = parsed.features.map(f => f.properties);
      } else if (parsed.data) {
        externalStations = parsed.data;
      } else {
        // sometimes it's an object where keys are station codes
        externalStations = Object.values(parsed);
      }
      
      const existingStations = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
      
      const stationMap = new Map();
      existingStations.forEach(s => stationMap.set(s.stationCode, s));
      
      let added = 0;
      externalStations.forEach(stn => {
        const code = stn.stnCode || stn.code || stn.stationCode;
        const name = stn.stnName || stn.name || stn.stationName;
        
        if (code && name && !stationMap.has(code)) {
          stationMap.set(code, {
            stationCode: code,
            stationName: name,
            platforms: 2, // default
            location: { lat: 20, lng: 80 } // default
          });
          added++;
        }
      });
      
      fs.writeFileSync(targetFile, JSON.stringify(Array.from(stationMap.values()), null, 2));
      console.log(`Successfully added ${added} new stations! Total stations: ${stationMap.size}`);
    } catch (e) {
      console.error('Error parsing JSON or updating:', e);
    }
  });
}).on('error', (e) => {
  console.error('Network Error:', e);
});
