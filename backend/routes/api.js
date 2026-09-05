const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const readDataRaw = (filename) => {
  const filePath = path.join(__dirname, '../data', filename);
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const vandeBharatRaw = [
  { id: 1, name: "New Delhi – Varanasi", numbers: "22435 / 22436", codes: "NDLS – BSB" },
  { id: 2, name: "New Delhi – SMVD Katra", numbers: "22439 / 22440", codes: "NDLS – SVDK" },
  { id: 3, name: "Mumbai Central – Ahmedabad", numbers: "22961 / 22962", codes: "MMCT – ADI" },
  { id: 4, name: "New Delhi – Amb Andaura", numbers: "22447 / 22448", codes: "NDLS – AADR" },
  { id: 5, name: "Chennai Central – Mysuru", numbers: "20607 / 20608", codes: "MAS – MYS" },
  { id: 6, name: "Nagpur – Bilaspur", numbers: "20825 / 20826", codes: "NGP – BSP" },
  { id: 7, name: "Howrah – New Jalpaiguri", numbers: "22301 / 22302", codes: "HWH – NJP" },
  { id: 8, name: "Secunderabad – Visakhapatnam", numbers: "20833 / 20834", codes: "SC – VSKP" },
  { id: 9, name: "Mumbai CSMT – Solapur", numbers: "22225 / 22226", codes: "CSMT – SUR" },
  { id: 10, name: "Mumbai CSMT – Sainagar Shirdi", numbers: "22223 / 22224", codes: "CSMT – SNSI" },
  { id: 11, name: "Rani Kamalapati – Nizamuddin", numbers: "20171 / 20172", codes: "RKMP – NZM" },
  { id: 12, name: "Secunderabad – Tirupati", numbers: "20701 / 20702", codes: "SC – TPTY" },
  { id: 13, name: "Chennai Central – Coimbatore", numbers: "20643 / 20644", codes: "MAS – CBE" },
  { id: 14, name: "Ajmer – Delhi Cantt", numbers: "20977 / 20978", codes: "AII – DEC" },
  { id: 15, name: "Thiruvananthapuram – Kasaragod", numbers: "20633 / 20634", codes: "TVC – KGQ" },
  { id: 16, name: "Howrah – Puri", numbers: "22895 / 22896", codes: "HWH – PURI" },
  { id: 17, name: "Anand Vihar – Dehradun", numbers: "22457 / 22458", codes: "ANVT – DDN" },
  { id: 18, name: "New Jalpaiguri – Guwahati", numbers: "22227 / 22228", codes: "NJP – GHY" },
  { id: 19, name: "Mumbai CSMT – Madgaon", numbers: "22229 / 22230", codes: "CSMT – MAO" },
  { id: 20, name: "Patna – Ranchi", numbers: "22349 / 22350", codes: "PNBE – RNC" },
  { id: 21, name: "KSR Bengaluru – Dharwad", numbers: "20661 / 20662", codes: "SBC – DWR" },
  { id: 22, name: "Jodhpur – Sabarmati", numbers: "12461 / 12462", codes: "JU – SBIB" },
  { id: 23, name: "Gorakhpur – Lucknow", numbers: "22549 / 22550", codes: "GKP – LKO" },
  { id: 24, name: "Ahmedabad – Okha", numbers: "22925 / 22926", codes: "ADI – OKHA" },
  { id: 25, name: "Chennai Egmore – Tirunelveli", numbers: "20665 / 20666", codes: "MS – TEN" },
  { id: 26, name: "Kacheguda – Yesvantpur", numbers: "20703 / 20704", codes: "KCG – YPR" },
  { id: 27, name: "Patna – Howrah", numbers: "22347 / 22348", codes: "PNBE – HWH" },
  { id: 28, name: "Ranchi – Howrah", numbers: "20897 / 20898", codes: "RNC – HWH" },
  { id: 29, name: "Udaipur City – Jaipur", numbers: "20979 / 20980", codes: "UDZ – JP" },
  { id: 30, name: "Jamnagar – Ahmedabad", numbers: "22925 / 22926", codes: "JAM – ADI" },
  { id: 31, name: "Bengaluru – Belagavi", numbers: "20661 / 20662", codes: "SBC – BGM" },
  { id: 32, name: "Chennai Central – Vijayawada", numbers: "20677 / 20678", codes: "MAS – BZA" },
  { id: 33, name: "Gwalior – New Delhi", numbers: "20171 / 20172", codes: "GWL – NDLS" },
  { id: 34, name: "Varanasi – Patna", numbers: "22348 / 22347", codes: "BSB – PNBE" },
  { id: 35, name: "Mangaluru Central – Madgaon", numbers: "20645 / 20646", codes: "MAQ – MAO" },
  { id: 36, name: "Old Delhi – Amritsar", numbers: "22487 / 22488", codes: "DLI – ASR" },
  { id: 37, name: "Coimbatore – Bengaluru Cantt", numbers: "20641 / 20642", codes: "CBE – BNC" },
  { id: 38, name: "Jalna – Mumbai CSMT", numbers: "20705 / 20706", codes: "J – CSMT" },
  { id: 39, name: "Ayodhya Dham – Anand Vihar", numbers: "22425 / 22426", codes: "AY – ANVT" },
  { id: 40, name: "Jammu Tawi – Srinagar", numbers: "22439 / 22440", codes: "JAT – SVDK/SINA" },
  { id: 41, name: "Visakhapatnam – Raipur", numbers: "20829 / 20830", codes: "VSKP – R" },
  { id: 42, name: "Kalaburagi – KSR Bengaluru", numbers: "22231 / 22232", codes: "KLBG – SBC" },
  { id: 43, name: "Mysore – Chennai Central", numbers: "20663 / 20664", codes: "MYS – MAS" },
  { id: 44, name: "Lucknow – Dehradun", numbers: "22545 / 22546", codes: "LKO – DDN" },
  { id: 45, name: "Khajuraho – Nizamuddin", numbers: "22470 / 22469", codes: "KURJ – NZM" },
  { id: 46, name: "Puri – Rourkela", numbers: "20835 / 20836", codes: "PURI – ROU" },
  { id: 47, name: "Dibrugarh – Guwahati", numbers: "22233 / 22234", codes: "DBRG – GHY" },
  { id: 48, name: "Madurai – Bengaluru", numbers: "20671 / 20672", codes: "MDU – SBC" },
  { id: 49, name: "Deoghar – Varanasi", numbers: "22500 / 22499", codes: "DGHR – BSB" },
  { id: 50, name: "Gaya – Howrah", numbers: "22303 / 22304", codes: "GAYA – HWH" },
  { id: 51, name: "Pune – Hubballi", numbers: "20669 / 20670", codes: "PUNE – UBL" },
  { id: 52, name: "Tatanagar – Brahmapur", numbers: "20892 / 20891", codes: "TATA – BAM" },
  { id: 53, name: "Bhagalpur – Howrah", numbers: "22309 / 22310", codes: "BGP – HWH" },
  { id: 54, name: "Delhi Cantt – Bikaner", numbers: "26471 / 26472", codes: "DEC – BKN" },
  { id: 55, name: "Ernakulam – Bengaluru", numbers: "26651 / 26652", codes: "ERS – SBC" },
  { id: 56, name: "Saharanpur – Lucknow", numbers: "26504 / 26503", codes: "SRE – LKO" },
  { id: 57, name: "Pune – Kolhapur", numbers: "20673 / 20674", codes: "PUNE – KOP" },
  { id: 58, name: "Ahmedabad – Mumbai Central", numbers: "22962 / 22961", codes: "ADI – MMCT" },
  { id: 59, name: "Nizamuddin – Gwalior", numbers: "22470 / 22469", codes: "NZM – GWL" },
  { id: 60, name: "Tirupati – Coimbatore", numbers: "20643 / 20644", codes: "TPTY – CBE" },
  { id: 61, name: "Chennai – Nagercoil", numbers: "20627 / 20628", codes: "MAS – NCJ" },
  { id: 62, name: "Pune – Nagpur (Ajni)", numbers: "26101 / 26102", codes: "PUNE – AJNI" },
  { id: 63, name: "Jogbani – Danapur", numbers: "26302 / 26301", codes: "JBN – DNR" },
  { id: 64, name: "New Delhi – Firozpur", numbers: "26462 / 26461", codes: "NDLS – FZR" },
  { id: 65, name: "Howrah – Bhagalpur", numbers: "22309 / 22310", codes: "HWH – BGP" },
  { id: 66, name: "Varanasi – Lucknow", numbers: "22415 / 22416", codes: "BSB – LKO" },
  { id: 67, name: "Indore – Nagpur", numbers: "20911 / 20912", codes: "INDB – NGP" },
  { id: 68, name: "Rewa – Bhopal", numbers: "20173 / 20174", codes: "REWA – BPL" },
  { id: 69, name: "Meerut City – Lucknow", numbers: "22490 / 22489", codes: "MTC – LKO" },
  { id: 70, name: "Patna – Tatanagar", numbers: "20893 / 20894", codes: "PNBE – TATA" }
];

const generateRoute = (src, dest, srcName, destName, direction) => {
  const key = `${src}-${dest}`;
  
  if (key === 'NDLS-BSB') {
    return [
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
      { stationCode: "CNB", stationName: "Kanpur Central", arrivalTime: "10:08", departureTime: "10:10", platform: 4, distance: 440 },
      { stationCode: "PRYJ", stationName: "Prayagraj Jn", arrivalTime: "12:08", departureTime: "12:10", platform: 6, distance: 635 },
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "14:00", departureTime: "14:00", platform: 1, distance: 759 }
    ];
  }
  if (key === 'BSB-NDLS') {
    return [
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "15:00", departureTime: "15:00", platform: 1, distance: 0 },
      { stationCode: "PRYJ", stationName: "Prayagraj Jn", arrivalTime: "16:30", departureTime: "16:32", platform: 6, distance: 124 },
      { stationCode: "CNB", stationName: "Kanpur Central", arrivalTime: "18:30", departureTime: "18:32", platform: 4, distance: 319 },
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "23:00", departureTime: "23:00", platform: 1, distance: 759 }
    ];
  }
  if (key === 'MMCT-ADI') {
    return [
      { stationCode: "MMCT", stationName: "Mumbai Central", arrivalTime: "05:55", departureTime: "05:55", platform: 1, distance: 0 },
      { stationCode: "BVI", stationName: "Borivali", arrivalTime: "06:23", departureTime: "06:25", platform: 6, distance: 30 },
      { stationCode: "VAPI", stationName: "Vapi", arrivalTime: "07:56", departureTime: "07:58", platform: 1, distance: 168 },
      { stationCode: "ST", stationName: "Surat", arrivalTime: "08:55", departureTime: "08:58", platform: 1, distance: 263 },
      { stationCode: "BRC", stationName: "Vadodara", arrivalTime: "10:13", departureTime: "10:16", platform: 2, distance: 392 },
      { stationCode: "ADI", stationName: "Ahmedabad", arrivalTime: "11:25", departureTime: "11:25", platform: 1, distance: 492 }
    ];
  }
  if (key === 'ADI-MMCT') {
    return [
      { stationCode: "ADI", stationName: "Ahmedabad", arrivalTime: "15:00", departureTime: "15:00", platform: 1, distance: 0 },
      { stationCode: "BRC", stationName: "Vadodara", arrivalTime: "15:53", departureTime: "15:56", platform: 2, distance: 100 },
      { stationCode: "ST", stationName: "Surat", arrivalTime: "17:20", departureTime: "17:23", platform: 1, distance: 229 },
      { stationCode: "VAPI", stationName: "Vapi", arrivalTime: "18:33", departureTime: "18:35", platform: 2, distance: 324 },
      { stationCode: "BVI", stationName: "Borivali", arrivalTime: "20:00", departureTime: "20:02", platform: 7, distance: 462 },
      { stationCode: "MMCT", stationName: "Mumbai Central", arrivalTime: "20:45", departureTime: "20:45", platform: 1, distance: 492 }
    ];
  }
  
  // Generic route
  const mid1Code = `${src}_C`;
  const mid2Code = `${dest}_JN`;
  const arr1 = direction === 1 ? "06:00" : "15:00";
  const dep1 = direction === 1 ? "06:00" : "15:00";
  const arr2 = direction === 1 ? "08:15" : "17:15";
  const dep2 = direction === 1 ? "08:18" : "17:18";
  const arr3 = direction === 1 ? "11:45" : "20:45";
  const dep3 = direction === 1 ? "11:50" : "20:50";
  const arr4 = direction === 1 ? "14:00" : "23:00";
  const dep4 = direction === 1 ? "14:00" : "23:00";

  return [
    { stationCode: src, stationName: srcName, arrivalTime: arr1, departureTime: dep1, platform: 1, distance: 0 },
    { stationCode: mid1Code, stationName: `${srcName} City`, arrivalTime: arr2, departureTime: dep2, platform: 2, distance: 150 },
    { stationCode: mid2Code, stationName: `${destName} Junction`, arrivalTime: arr3, departureTime: dep3, platform: 3, distance: 350 },
    { stationCode: dest, stationName: destName, arrivalTime: arr4, departureTime: dep4, platform: 1, distance: 500 }
  ];
};

const readData = (filename) => {
  const data = readDataRaw(filename);
  if (filename === 'trains.json') {
    const existingIds = new Set(data.map(t => t.trainNumber));
    vandeBharatRaw.forEach(route => {
      const parts = route.numbers.split(' / ');
      const t1 = parts[0]?.trim();
      const t2 = parts[1]?.trim();
      const codeParts = route.codes.split(' – ');
      const src = codeParts[0]?.trim();
      const destRaw = codeParts[1]?.trim() || '';
      const dest = destRaw.split('/')[0];
      const nameParts = route.name.split(' – ');
      const srcName = nameParts[0]?.trim() || src;
      const destName = nameParts[1]?.trim() || dest;
      
      if (t1 && !existingIds.has(t1)) {
        data.push({
          id: t1, trainName: `Vande Bharat Exp (${srcName} - ${destName})`, trainNumber: t1, source: src, destination: dest,
          duration: "08:00", days: ["M", "T", "W", "F", "S", "S"],
          route: generateRoute(src, dest, srcName, destName, 1)
        });
        existingIds.add(t1);
      }
      if (t2 && !existingIds.has(t2)) {
        data.push({
          id: t2, trainName: `Vande Bharat Return (${destName} - ${srcName})`, trainNumber: t2, source: dest, destination: src,
          duration: "08:00", days: ["M", "T", "W", "F", "S", "S"],
          route: generateRoute(dest, src, destName, srcName, 2)
        });
        existingIds.add(t2);
      }
    });
  } else if (filename === 'stations.json') {
    const existingCodes = new Set(data.map(s => s.stationCode));
    vandeBharatRaw.forEach(route => {
      const codeParts = route.codes.split(' – ');
      const src = codeParts[0]?.trim();
      const destRaw = codeParts[1]?.trim() || '';
      const dest = destRaw.split('/')[0];
      const nameParts = route.name.split(' – ');
      const srcName = nameParts[0]?.trim() || src;
      const destName = nameParts[1]?.trim() || dest;
      
      if (src && !existingCodes.has(src)) {
        data.push({ stationCode: src, stationName: srcName, platforms: 2, location: { lat: 20, lng: 77 } });
        existingCodes.add(src);
      }
      if (dest && !existingCodes.has(dest)) {
        data.push({ stationCode: dest, stationName: destName, platforms: 2, location: { lat: 20, lng: 77 } });
        existingCodes.add(dest);
      }
      
      // Generic intermediate stations
      const mid1Code = `${src}_C`;
      const mid2Code = `${dest}_JN`;
      
      if (!existingCodes.has(mid1Code)) {
        data.push({ stationCode: mid1Code, stationName: `${srcName} City`, platforms: 2, location: { lat: 20, lng: 77 } });
        existingCodes.add(mid1Code);
      }
      if (!existingCodes.has(mid2Code)) {
        data.push({ stationCode: mid2Code, stationName: `${destName} Junction`, platforms: 3, location: { lat: 20, lng: 77 } });
        existingCodes.add(mid2Code);
      }
    });
  }
  return data;
};

// ========================
// TRAIN ROUTES
// ========================

// 1. Search train by name or number
router.get('/trains/search', (req, res) => {
  const query = req.query.q?.toLowerCase();
  if (!query) return res.status(400).json({ error: 'Search query is required' });

  const trains = readData('trains.json');
  const results = trains.filter(t => 
    t.trainNumber.includes(query) || 
    t.trainName.toLowerCase().includes(query)
  );

  res.json(results);
});

// 2. Get specific train details and simulate live status
router.get('/trains/:id/status', (req, res) => {
  const { id } = req.params;
  const trains = readData('trains.json');
  const train = trains.find(t => t.trainNumber === id || t.id === id);

  if (!train) return res.status(404).json({ error: 'Train not found' });

  // Simulate live status based on current time (mock logic)
  const currentHour = new Date().getHours();
  // Pick a random station as the current or last passed station for simulation
  const routeLength = train.route.length;
  let stationIndex = Math.floor((currentHour / 24) * routeLength);
  if (stationIndex >= routeLength) stationIndex = routeLength - 1;

  const currentStation = train.route[stationIndex];
  const nextStation = train.route[stationIndex + 1] || null;

  // Mock delay
  const isDelayed = Math.random() > 0.6;
  const delayMinutes = isDelayed ? Math.floor(Math.random() * 120) : 0;

  const liveStatus = {
    trainNumber: train.trainNumber,
    trainName: train.trainName,
    currentStation: currentStation.stationName,
    nextStation: nextStation ? nextStation.stationName : 'Destination Reached',
    status: isDelayed ? `Delayed by ${delayMinutes} mins` : 'On Time',
    delayMinutes: delayMinutes,
    lastUpdate: new Date().toISOString(),
    route: train.route
  };

  res.json(liveStatus);
});

// ========================
// STATION ROUTES
// ========================

// 1. Search stations
router.get('/stations/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const stations = readData('stations.json');
  
  if(!query) return res.json(stations);

  const results = stations.filter(s => 
    s.stationCode.toLowerCase().includes(query) || 
    s.stationName.toLowerCase().includes(query)
  );

  res.json(results);
});

// ========================
// ROUTE ROUTES
// ========================

// 1. Find trains between stations
router.get('/routes', (req, res) => {
  const { source, destination } = req.query;
  if (!source || !destination) {
    return res.status(400).json({ error: 'Source and destination are required' });
  }

  const trains = readData('trains.json');
  const results = [];

  for (const train of trains) {
    const srcIndex = train.route.findIndex(s => s.stationCode.toLowerCase() === source.toLowerCase());
    const destIndex = train.route.findIndex(s => s.stationCode.toLowerCase() === destination.toLowerCase());

    if (srcIndex !== -1 && destIndex !== -1 && srcIndex < destIndex) {
      // Train passes through source and then destination
      const srcStation = train.route[srcIndex];
      const destStation = train.route[destIndex];
      results.push({
        trainNumber: train.trainNumber,
        trainName: train.trainName,
        departureTime: srcStation.departureTime,
        arrivalTime: destStation.arrivalTime,
        source: srcStation.stationName,
        destination: destStation.stationName,
        days: train.days,
        duration: "Calculated Duration" // In a real app we'd calculate time diff
      });
    }
  }

  res.json(results);
});

module.exports = router;
