const fs = require('fs');
const path = require('path');

const rawText = `
1. 12461/62 JODHPUR SABARMATI
2. 20171/72 RANI KAMLAPATI H. NIZAMUDDIN
3. 20173/74 REWA RANI KAMLAPATI
4. 20607/08 CHENNAI CENTRAL MYSURU
5. 20631/32 MANGLORE TIRUANANTPURAM
6. 20633/34 TIRUANANTPURAM KASARGOD
7. 20641/42 COIMBATORE BENGALURU
8. 20643/44 CHENNAI CENTRAL COIMBATORE
9. 20645/46 MANGLORE MADGAON
10. 20661/62 BENGALURU DHARWAD
11. 20663/64 MYSURU CHENNAI CENTRAL
12. 20665/66 TIRUNELVELI CHENNAI EGMORE
13. 20677/78 CHENNAI CENTRAL VIJAYWADA
14. 20701/02 SECUNDERABAD TIRUPATI
15. 20703/04 KACHEGUDA YESVANTPUR
16. 20705/06 JALNA MUMBAI CSMT
17. 20707/08 SECUNDERABAD VISAKHAPATNAM
18. 20825/26 BILASPUR NAGPUR
19. 20833/34 VISAKHAPATNAM SECUNDERABAD
20. 20835/36 PURI ROURKELA
21. 20841/42 BHUBANESWAR VISAKHAPATNAM
22. 20887/88 RANCHI VARANASI
23. 20897/98 RANCHI HOWRAH
24. 20901/02 MUMBAI CENTRAL GANDHINAGAR CAPITAL
25. 20911/12 INDORE NAGPUR
26. 20977/78 AJMER CHANDIGARH
27. 20979/80 UDAIPUR JAIPUR
28. 22223/24 MUMBAI CSMT SAINAGAR SHIRDI
29. 22225/26 SOLAPUR MUMBAI CSMT
30. 22227/28 NEW JALPAIGURI GUWAHATI
31. 22229/30 MUMBAI CSMT MADGAON
32. 22231/32 KALABURAGI SMVT BENGALURU
33. 22233/34 NEW JALPAIGURI PATNA
34. 22301/02 HOWRAH NEW JALPAIGURI
35. 22345/46 PATNA GOMTINAGAR
36. 22347/48 PATNA HOWRAH
37. 22349/50 PATNA RANCHI
38. 22415/16 NEW DELHI VARANASI
39. 22425/26 ANAND VIHAR AYODHYA CANT.
40. 22435/36 VARANASI NEW DELHI
41. 22439/40 NEW DELHI SMVD KATRA
42. 22447/48 NEW DELHI AMB ANDAURA
43. 22457/58 DEHRADUN ANAND VIHAR
44. 22469/70 H. NIZAMUDDIN KHAJURAHO
45. 22477/78 SMVD KATRA NEW DELHI
46. 22487/88 AMRITSAR DELHI
47. 22547/48 LUCKNOW JN. DEHRADUN
48. 22549/50 GORAKHPUR PRAYAGRAJ
49. 22895/96 HOWRAH PURI
50. 22925/26 OKHA AHMEDABAD
51. 22961/62 AHMEDABAD MUMBAI CENTRAL
`;

const stationCodeMap = {
  "JODHPUR": "JU", "SABARMATI": "SBIB", "RANI KAMLAPATI": "RKMP", "H. NIZAMUDDIN": "NZM",
  "REWA": "REWA", "CHENNAI CENTRAL": "MAS", "MYSURU": "MYS", "MANGLORE": "MAQ",
  "TIRUANANTPURAM": "TVC", "KASARGOD": "KGQ", "COIMBATORE": "CBE", "BENGALURU": "SBC",
  "MADGAON": "MAO", "DHARWAD": "DWR", "TIRUNELVELI": "TEN", "CHENNAI EGMORE": "MS",
  "VIJAYWADA": "BZA", "SECUNDERABAD": "SC", "TIRUPATI": "TPTY", "KACHEGUDA": "KCG",
  "YESVANTPUR": "YPR", "JALNA": "J", "MUMBAI CSMT": "CSMT", "VISAKHAPATNAM": "VSKP",
  "BILASPUR": "BSP", "NAGPUR": "NGP", "PURI": "PURI", "ROURKELA": "ROU",
  "BHUBANESWAR": "BBS", "RANCHI": "RNC", "VARANASI": "BSB", "HOWRAH": "HWH",
  "MUMBAI CENTRAL": "MMCT", "GANDHINAGAR CAPITAL": "GNC", "INDORE": "INDB",
  "AJMER": "AII", "CHANDIGARH": "CDG", "UDAIPUR": "UDZ", "JAIPUR": "JP",
  "SAINAGAR SHIRDI": "SNSI", "SOLAPUR": "SUR", "NEW JALPAIGURI": "NJP", "GUWAHATI": "GHY",
  "KALABURAGI": "KLBG", "SMVT BENGALURU": "SMVB", "PATNA": "PNBE", "GOMTINAGAR": "GTNR",
  "NEW DELHI": "NDLS", "ANAND VIHAR": "ANVT", "AYODHYA CANT.": "AYC", "SMVD KATRA": "SVDK",
  "AMB ANDAURA": "AADR", "DEHRADUN": "DDN", "KHAJURAHO": "KURJ", "AMRITSAR": "ASR",
  "DELHI": "DLI", "LUCKNOW JN.": "LJN", "GORAKHPUR": "GKP", "PRAYAGRAJ": "PRYJ",
  "OKHA": "OKHA", "AHMEDABAD": "ADI"
};

function getCode(name) {
  return stationCodeMap[name] || name.substring(0, 4).toUpperCase();
}

function parseName(str) {
  // Try to find the separation
  // The first part is the numbers
  const parts = str.trim().split(' ');
  const numPair = parts[1]; // like 12461/62
  
  // The rest is the source and destination. We need to split them somehow.
  // Many have " " between them. Let's look for known station names.
  let rest = parts.slice(2).join(' ');
  let src = "";
  let dest = "";
  
  // Let's try matching station map keys
  const keys = Object.keys(stationCodeMap).sort((a,b) => b.length - a.length);
  for(let key of keys) {
    if (rest.startsWith(key)) {
      src = key;
      dest = rest.substring(key.length).trim();
      break;
    }
  }
  
  if (!src) {
    // just split by space if we couldn't match
    src = parts[2];
    dest = parts.slice(3).join(' ');
  }

  const [t1, t2Suffix] = numPair.split('/');
  const prefix = t1.substring(0, t1.length - t2Suffix.length);
  const t2 = prefix + t2Suffix;
  
  return { t1, t2, src, dest };
}

const trainsFile = path.join(__dirname, 'data', 'trains.json');
let trains = JSON.parse(fs.readFileSync(trainsFile, 'utf8'));

const lines = rawText.trim().split('\n');
lines.forEach(line => {
  if (!line) return;
  const { t1, t2, src, dest } = parseName(line);
  
  // Check if train exists
  if (!trains.find(t => t.trainNumber === t1)) {
    trains.push({
      id: t1,
      trainName: "Vande Bharat Express",
      trainNumber: t1,
      source: getCode(src),
      destination: getCode(dest),
      duration: "06:00",
      days: ["M", "T", "W", "F", "S", "S"],
      route: [
        { stationCode: getCode(src), stationName: src, arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
        { stationCode: getCode(dest), stationName: dest, arrivalTime: "12:00", departureTime: "12:00", platform: 1, distance: 500 }
      ]
    });
  }
  
  if (!trains.find(t => t.trainNumber === t2)) {
    trains.push({
      id: t2,
      trainName: "Vande Bharat Return",
      trainNumber: t2,
      source: getCode(dest),
      destination: getCode(src),
      duration: "06:00",
      days: ["M", "T", "W", "F", "S", "S"],
      route: [
        { stationCode: getCode(dest), stationName: dest, arrivalTime: "15:00", departureTime: "15:00", platform: 1, distance: 0 },
        { stationCode: getCode(src), stationName: src, arrivalTime: "21:00", departureTime: "21:00", platform: 1, distance: 500 }
      ]
    });
  }
});

fs.writeFileSync(trainsFile, JSON.stringify(trains, null, 2));
console.log("Added trains successfully!");

// Now let's update stations.json for missing stations
const stationsFile = path.join(__dirname, 'data', 'stations.json');
let stations = JSON.parse(fs.readFileSync(stationsFile, 'utf8'));
const stationCodes = new Set(stations.map(s => s.stationCode));

Object.keys(stationCodeMap).forEach(name => {
  const code = stationCodeMap[name];
  if (!stationCodes.has(code)) {
    stations.push({
      stationCode: code,
      stationName: name,
      platforms: 2,
      location: { lat: 20.0, lng: 77.0 } // mock location
    });
    stationCodes.add(code);
  }
});

fs.writeFileSync(stationsFile, JSON.stringify(stations, null, 2));
console.log("Updated stations successfully!");
