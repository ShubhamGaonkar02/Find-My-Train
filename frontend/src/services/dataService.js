import trainsData from '../data/trains.json';
import stationsData from '../data/stations.json';
import { vandeBharatRoutes } from '../data/vandeBharat';
import { rajdhaniRoutes } from '../data/rajdhani';
import { generateRoute as getVBRoute } from '../data/vandeBharatSchedules';

// Rajdhani routes maintained locally
const rajdhaniLocalRoutes = {
  'MMCT-NDLS': [
    { stationCode: "MMCT", stationName: "Mumbai Central", arrivalTime: "16:00", departureTime: "16:00", platform: 1, distance: 0 },
    { stationCode: "BVI", stationName: "Borivali", arrivalTime: "16:28", departureTime: "16:30", platform: 6, distance: 30 },
    { stationCode: "ST", stationName: "Surat", arrivalTime: "18:35", departureTime: "18:40", platform: 1, distance: 263 },
    { stationCode: "BRC", stationName: "Vadodara", arrivalTime: "19:43", departureTime: "19:53", platform: 2, distance: 392 },
    { stationCode: "RTM", stationName: "Ratlam", arrivalTime: "22:45", departureTime: "22:48", platform: 2, distance: 652 },
    { stationCode: "KOTA", stationName: "Kota", arrivalTime: "01:50", departureTime: "02:00", platform: 1, distance: 919 },
    { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "08:32", departureTime: "08:32", platform: 3, distance: 1386 }
  ],
  'NDLS-MMCT': [
    { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "16:55", departureTime: "16:55", platform: 3, distance: 0 },
    { stationCode: "KOTA", stationName: "Kota", arrivalTime: "22:15", departureTime: "22:25", platform: 1, distance: 467 },
    { stationCode: "RTM", stationName: "Ratlam", arrivalTime: "01:30", departureTime: "01:33", platform: 2, distance: 734 },
    { stationCode: "BRC", stationName: "Vadodara", arrivalTime: "04:38", departureTime: "04:48", platform: 2, distance: 994 },
    { stationCode: "ST", stationName: "Surat", arrivalTime: "06:18", departureTime: "06:23", platform: 1, distance: 1123 },
    { stationCode: "BVI", stationName: "Borivali", arrivalTime: "07:57", departureTime: "07:59", platform: 6, distance: 1356 },
    { stationCode: "MMCT", stationName: "Mumbai Central", arrivalTime: "08:35", departureTime: "08:35", platform: 1, distance: 1386 }
  ],
};

const generateRoute = (src, dest, srcName, destName, direction) => {
  const key = `${src}-${dest}`;

  // Check local Rajdhani overrides first
  if (rajdhaniLocalRoutes[key]) {
    return rajdhaniLocalRoutes[key];
  }

  // Delegate to vandeBharatSchedules.js for all Vande Bharat and other routes
  return getVBRoute(src, dest, srcName, destName, direction);
};

// Pre-compute the set of ALL Vande Bharat train numbers for quick lookup
const vandeBharatTrainNumbers = new Set();
vandeBharatRoutes.forEach(route => {
  const parts = route.numbers.split(' / ');
  if (parts[0]) vandeBharatTrainNumbers.add(parts[0].trim());
  if (parts[1]) vandeBharatTrainNumbers.add(parts[1].trim());
});

const getTrains = () => {
  // Start with non-VB trains from trains.json (skip any that are already in vandeBharat registry)
  const baseData = trainsData.filter(t => !vandeBharatTrainNumbers.has(t.trainNumber));
  const data = [...baseData];
  const existingIds = new Set(data.map(t => t.trainNumber));

  // Add all Vande Bharat trains with CORRECT routes from vandeBharatSchedules.js
  vandeBharatRoutes.forEach(route => {
    const parts = route.numbers.split(' / ');
    const t1 = parts[0]?.trim();
    const t2 = parts[1]?.trim();
    const codeParts = route.codes.split(' – ');
    const src = codeParts[0]?.trim();
    const destRaw = codeParts[1]?.trim() || '';
    const dest = destRaw.split('/')[0].trim();
    const nameParts = route.name.split(' – ');
    const srcName = nameParts[0]?.trim() || src;
    const destName = nameParts[1]?.trim() || dest;

    if (t1 && !existingIds.has(t1)) {
      data.push({
        id: t1,
        trainName: `${route.name} Vande Bharat`,
        trainNumber: t1,
        source: src,
        destination: dest,
        duration: "08:00",
        days: ["M", "T", "W", "F", "S", "S"],
        route: generateRoute(src, dest, srcName, destName, 1)
      });
      existingIds.add(t1);
    }
    if (t2 && !existingIds.has(t2)) {
      data.push({
        id: t2,
        trainName: `${route.name} Vande Bharat (Return)`,
        trainNumber: t2,
        source: dest,
        destination: src,
        duration: "08:00",
        days: ["M", "T", "W", "F", "S", "S"],
        route: generateRoute(dest, src, destName, srcName, 2)
      });
      existingIds.add(t2);
    }
  });

  // Add Rajdhani trains
  rajdhaniRoutes.forEach(route => {
    const parts = route.numbers.split(' / ');
    const t1 = parts[0]?.trim();
    const t2 = parts[1]?.trim();
    const codeParts = route.codes.split(' – ');
    const src = codeParts[0]?.trim();
    const dest = codeParts[1]?.trim();

    if (t1 && !existingIds.has(t1)) {
      data.push({
        id: t1,
        trainName: route.name,
        trainNumber: t1,
        source: src,
        destination: dest,
        duration: "16:00",
        days: ["Daily"],
        route: generateRoute(src, dest, src, dest, 1)
      });
      existingIds.add(t1);
    }
    if (t2 && !existingIds.has(t2)) {
      data.push({
        id: t2,
        trainName: `${route.name} Return`,
        trainNumber: t2,
        source: dest,
        destination: src,
        duration: "16:00",
        days: ["Daily"],
        route: generateRoute(dest, src, dest, src, 2)
      });
      existingIds.add(t2);
    }
  });

  return data;
};

const getStations = () => {
  const data = [...stationsData];
  const existingCodes = new Set(data.map(s => s.stationCode));

  const trains = getTrains();
  trains.forEach(train => {
    train.route.forEach(station => {
      if (!existingCodes.has(station.stationCode)) {
        data.push({
          stationCode: station.stationCode,
          stationName: station.stationName,
          platforms: station.platform || 2,
          location: { lat: 20, lng: 77 }
        });
        existingCodes.add(station.stationCode);
      }
    });
  });

  return data;
};

export const searchTrains = async (query) => {
  const trains = getTrains();
  const lowerQuery = query.toLowerCase();
  return trains.filter(t =>
    t.trainNumber.toLowerCase().includes(lowerQuery) ||
    t.trainName.toLowerCase().includes(lowerQuery)
  );
};

export const getTrainStatus = async (id) => {
  const trains = getTrains();
  const train = trains.find(t => t.trainNumber === id || t.id === id);

  if (!train) throw new Error('Train not found');

  const currentHour = new Date().getHours();
  const routeLength = train.route.length;
  let stationIndex = Math.floor((currentHour / 24) * routeLength);
  if (stationIndex >= routeLength) stationIndex = routeLength - 1;

  const currentStation = train.route[stationIndex];
  const nextStation = train.route[stationIndex + 1] || null;

  const isDelayed = Math.random() > 0.6;
  const delayMinutes = isDelayed ? Math.floor(Math.random() * 120) : 0;

  return {
    trainNumber: train.trainNumber,
    trainName: train.trainName,
    currentStation: currentStation.stationName,
    nextStation: nextStation ? nextStation.stationName : 'Destination Reached',
    status: isDelayed ? `Delayed by ${delayMinutes} mins` : 'On Time',
    delayMinutes: delayMinutes,
    lastUpdate: new Date().toISOString(),
    route: train.route
  };
};

export const searchStations = async (query = '') => {
  const stations = getStations();
  const lowerQuery = query.toLowerCase();

  if (!lowerQuery) return stations;

  return stations.filter(s =>
    s.stationCode.toLowerCase().includes(lowerQuery) ||
    s.stationName.toLowerCase().includes(lowerQuery)
  );
};

export const getTrainsBetweenStations = async (source, destination) => {
  const trains = getTrains();
  const results = [];

  for (const train of trains) {
    const srcIndex = train.route.findIndex(s => s.stationCode.toLowerCase() === source.toLowerCase());
    const destIndex = train.route.findIndex(s => s.stationCode.toLowerCase() === destination.toLowerCase());

    if (srcIndex !== -1 && destIndex !== -1 && srcIndex < destIndex) {
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
        duration: "Calculated Duration"
      });
    }
  }
  return results;
};
