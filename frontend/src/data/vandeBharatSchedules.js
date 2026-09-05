import { vandeBharatRoutes } from './vandeBharat';

export const generateRoute = (src, dest, srcName, destName, direction) => {
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
  if (key === 'NDLS-SVDK') {
    return [
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
      { stationCode: "UMB", stationName: "Ambala Cantt", arrivalTime: "08:10", departureTime: "08:12", platform: 2, distance: 199 },
      { stationCode: "LDH", stationName: "Ludhiana", arrivalTime: "09:19", departureTime: "09:21", platform: 3, distance: 313 },
      { stationCode: "JAT", stationName: "Jammu Tawi", arrivalTime: "12:38", departureTime: "12:40", platform: 1, distance: 577 },
      { stationCode: "SVDK", stationName: "SMVD Katra", arrivalTime: "14:00", departureTime: "14:00", platform: 1, distance: 655 }
    ];
  }
  if (key === 'SVDK-NDLS') {
    return [
      { stationCode: "SVDK", stationName: "SMVD Katra", arrivalTime: "15:00", departureTime: "15:00", platform: 1, distance: 0 },
      { stationCode: "JAT", stationName: "Jammu Tawi", arrivalTime: "16:13", departureTime: "16:15", platform: 1, distance: 78 },
      { stationCode: "LDH", stationName: "Ludhiana", arrivalTime: "19:32", departureTime: "19:34", platform: 1, distance: 342 },
      { stationCode: "UMB", stationName: "Ambala Cantt", arrivalTime: "20:48", departureTime: "20:50", platform: 1, distance: 456 },
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "23:00", departureTime: "23:00", platform: 2, distance: 655 }
    ];
  }
  if (key === 'MAS-MYS') {
    return [
      { stationCode: "MAS", stationName: "Chennai Central", arrivalTime: "05:50", departureTime: "05:50", platform: 1, distance: 0 },
      { stationCode: "KPD", stationName: "Katpadi Jn", arrivalTime: "07:21", departureTime: "07:25", platform: 1, distance: 130 },
      { stationCode: "SBC", stationName: "KSR Bengaluru", arrivalTime: "10:15", departureTime: "10:20", platform: 7, distance: 359 },
      { stationCode: "MYS", stationName: "Mysuru", arrivalTime: "12:20", departureTime: "12:20", platform: 1, distance: 497 }
    ];
  }
  if (key === 'MYS-MAS') {
    return [
      { stationCode: "MYS", stationName: "Mysuru", arrivalTime: "13:05", departureTime: "13:05", platform: 1, distance: 0 },
      { stationCode: "SBC", stationName: "KSR Bengaluru", arrivalTime: "14:50", departureTime: "14:55", platform: 7, distance: 138 },
      { stationCode: "KPD", stationName: "Katpadi Jn", arrivalTime: "17:33", departureTime: "17:35", platform: 2, distance: 367 },
      { stationCode: "MAS", stationName: "Chennai Central", arrivalTime: "19:20", departureTime: "19:20", platform: 1, distance: 497 }
    ];
  }
  
  if (key === 'NDLS-AADR') {
    return [
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "05:50", departureTime: "05:50", platform: 11, distance: 0 },
      { stationCode: "UMB", stationName: "Ambala Cantt Jn", arrivalTime: "08:00", departureTime: "08:02", platform: 2, distance: 199 },
      { stationCode: "CDG", stationName: "Chandigarh", arrivalTime: "08:38", departureTime: "08:45", platform: 1, distance: 266 },
      { stationCode: "ANSB", stationName: "Anandpur Sahib", arrivalTime: "10:00", departureTime: "10:02", platform: 1, distance: 373 },
      { stationCode: "UHL", stationName: "Una Himachal", arrivalTime: "10:32", departureTime: "10:34", platform: 1, distance: 410 },
      { stationCode: "AADR", stationName: "Amb Andaura", arrivalTime: "11:05", departureTime: "11:05", platform: 1, distance: 437 }
    ];
  }
  if (key === 'AADR-NDLS') {
    return [
      { stationCode: "AADR", stationName: "Amb Andaura", arrivalTime: "13:00", departureTime: "13:00", platform: 1, distance: 0 },
      { stationCode: "UHL", stationName: "Una Himachal", arrivalTime: "13:21", departureTime: "13:23", platform: 1, distance: 27 },
      { stationCode: "ANSB", stationName: "Anandpur Sahib", arrivalTime: "13:55", departureTime: "13:57", platform: 1, distance: 64 },
      { stationCode: "CDG", stationName: "Chandigarh", arrivalTime: "15:15", departureTime: "15:25", platform: 1, distance: 171 },
      { stationCode: "UMB", stationName: "Ambala Cantt Jn", arrivalTime: "16:00", departureTime: "16:02", platform: 2, distance: 238 },
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "18:25", departureTime: "18:25", platform: 11, distance: 437 }
    ];
  }
  if (key === 'BSP-NGP') {
    return [
      { stationCode: "BSP", stationName: "Bilaspur Jn", arrivalTime: "06:45", departureTime: "06:45", platform: 7, distance: 0 },
      { stationCode: "R", stationName: "Raipur Jn", arrivalTime: "08:01", departureTime: "08:03", platform: 2, distance: 111 },
      { stationCode: "DURG", stationName: "Durg", arrivalTime: "08:43", departureTime: "08:45", platform: 3, distance: 148 },
      { stationCode: "RJN", stationName: "Raj Nandgaon", arrivalTime: "09:02", departureTime: "09:03", platform: 2, distance: 178 },
      { stationCode: "DGG", stationName: "Dongargarh", arrivalTime: "09:21", departureTime: "09:22", platform: 2, distance: 209 },
      { stationCode: "G", stationName: "Gondia Jn", arrivalTime: "10:20", departureTime: "10:22", platform: 3, distance: 283 },
      { stationCode: "NGP", stationName: "Nagpur", arrivalTime: "12:15", departureTime: "12:15", platform: 5, distance: 413 }
    ];
  }
  if (key === 'NGP-BSP') {
    return [
      { stationCode: "NGP", stationName: "Nagpur", arrivalTime: "14:05", departureTime: "14:05", platform: 5, distance: 0 },
      { stationCode: "G", stationName: "Gondia Jn", arrivalTime: "15:58", departureTime: "16:00", platform: 3, distance: 130 },
      { stationCode: "DGG", stationName: "Dongargarh", arrivalTime: "16:57", departureTime: "16:58", platform: 2, distance: 204 },
      { stationCode: "RJN", stationName: "Raj Nandgaon", arrivalTime: "17:16", departureTime: "17:18", platform: 2, distance: 235 },
      { stationCode: "DURG", stationName: "Durg", arrivalTime: "17:35", departureTime: "17:37", platform: 3, distance: 265 },
      { stationCode: "R", stationName: "Raipur Jn", arrivalTime: "18:17", departureTime: "18:19", platform: 2, distance: 302 },
      { stationCode: "BSP", stationName: "Bilaspur Jn", arrivalTime: "19:35", departureTime: "19:35", platform: 7, distance: 413 }
    ];
  }
  
  if (key === 'HWH-NJP') {
    return [
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "05:55", departureTime: "05:55", platform: 6, distance: 0 },
      { stationCode: "BHP", stationName: "Bolpur Shantiniketan", arrivalTime: "07:25", departureTime: "07:27", platform: 1, distance: 146 },
      { stationCode: "MLDT", stationName: "Malda Town", arrivalTime: "10:22", departureTime: "10:25", platform: 1, distance: 328 },
      { stationCode: "BOE", stationName: "Barsoi Jn", arrivalTime: "11:28", departureTime: "11:30", platform: 2, distance: 416 },
      { stationCode: "KNE", stationName: "Kishanganj", arrivalTime: "12:15", departureTime: "12:17", platform: 2, distance: 473 },
      { stationCode: "NJP", stationName: "New Jalpaiguri", arrivalTime: "13:30", departureTime: "13:30", platform: 4, distance: 561 }
    ];
  }
  if (key === 'NJP-HWH') {
    return [
      { stationCode: "NJP", stationName: "New Jalpaiguri", arrivalTime: "15:05", departureTime: "15:05", platform: 4, distance: 0 },
      { stationCode: "KNE", stationName: "Kishanganj", arrivalTime: "16:15", departureTime: "16:17", platform: 2, distance: 87 },
      { stationCode: "BOE", stationName: "Barsoi Jn", arrivalTime: "17:00", departureTime: "17:02", platform: 2, distance: 145 },
      { stationCode: "MLDT", stationName: "Malda Town", arrivalTime: "18:05", departureTime: "18:08", platform: 1, distance: 233 },
      { stationCode: "BHP", stationName: "Bolpur Shantiniketan", arrivalTime: "21:05", departureTime: "21:07", platform: 1, distance: 415 },
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "22:35", departureTime: "22:35", platform: 6, distance: 561 }
    ];
  }
  if (key === 'VSKP-SC') {
    return [
      { stationCode: "VSKP", stationName: "Visakhapatnam", arrivalTime: "05:45", departureTime: "05:45", platform: 8, distance: 0 },
      { stationCode: "SLO", stationName: "Samalkot Jn", arrivalTime: "07:03", departureTime: "07:05", platform: 1, distance: 151 },
      { stationCode: "RJY", stationName: "Rajamundry", arrivalTime: "07:38", departureTime: "07:40", platform: 1, distance: 201 },
      { stationCode: "BZA", stationName: "Vijayawada Jn", arrivalTime: "09:40", departureTime: "09:45", platform: 6, distance: 350 },
      { stationCode: "KMT", stationName: "Khammam", arrivalTime: "11:09", departureTime: "11:10", platform: 2, distance: 450 },
      { stationCode: "WL", stationName: "Warangal", arrivalTime: "12:09", departureTime: "12:10", platform: 2, distance: 557 },
      { stationCode: "SC", stationName: "Secunderabad Jn", arrivalTime: "14:20", departureTime: "14:20", platform: 10, distance: 699 }
    ];
  }
  if (key === 'SC-VSKP') {
    return [
      { stationCode: "SC", stationName: "Secunderabad Jn", arrivalTime: "15:00", departureTime: "15:00", platform: 10, distance: 0 },
      { stationCode: "WL", stationName: "Warangal", arrivalTime: "16:50", departureTime: "16:51", platform: 2, distance: 142 },
      { stationCode: "KMT", stationName: "Khammam", arrivalTime: "17:50", departureTime: "17:51", platform: 2, distance: 249 },
      { stationCode: "BZA", stationName: "Vijayawada Jn", arrivalTime: "19:15", departureTime: "19:20", platform: 6, distance: 349 },
      { stationCode: "RJY", stationName: "Rajamundry", arrivalTime: "21:20", departureTime: "21:22", platform: 1, distance: 498 },
      { stationCode: "SLO", stationName: "Samalkot Jn", arrivalTime: "21:55", departureTime: "21:57", platform: 1, distance: 548 },
      { stationCode: "VSKP", stationName: "Visakhapatnam", arrivalTime: "23:30", departureTime: "23:30", platform: 8, distance: 699 }
    ];
  }
  
  if (key === 'CSMT-SUR') {
    return [
      { stationCode: "CSMT", stationName: "Mumbai Csmt", arrivalTime: "16:05", departureTime: "16:05", platform: 11, distance: 0 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "16:15", departureTime: "16:17", platform: 10, distance: 9 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "16:33", departureTime: "16:35", platform: 5, distance: 34 },
      { stationCode: "KYN", stationName: "Kalyan Jn", arrivalTime: "16:48", departureTime: "16:50", platform: 4, distance: 54 },
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "19:10", departureTime: "19:15", platform: 2, distance: 192 },
      { stationCode: "DD", stationName: "Daund Jn", arrivalTime: "20:13", departureTime: "20:15", platform: 3, distance: 270 },
      { stationCode: "KWV", stationName: "Kurduvadi", arrivalTime: "21:28", departureTime: "21:30", platform: 3, distance: 377 },
      { stationCode: "SUR", stationName: "Solapur Jn", arrivalTime: "22:40", departureTime: "22:40", platform: 4, distance: 455 }
    ];
  }
  if (key === 'SUR-CSMT') {
    return [
      { stationCode: "SUR", stationName: "Solapur Jn", arrivalTime: "06:05", departureTime: "06:05", platform: 4, distance: 0 },
      { stationCode: "KWV", stationName: "Kurduvadi", arrivalTime: "07:15", departureTime: "07:17", platform: 3, distance: 78 },
      { stationCode: "DD", stationName: "Daund Jn", arrivalTime: "08:30", departureTime: "08:32", platform: 3, distance: 185 },
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "09:30", departureTime: "09:35", platform: 2, distance: 263 },
      { stationCode: "KYN", stationName: "Kalyan Jn", arrivalTime: "11:55", departureTime: "11:57", platform: 4, distance: 401 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "12:10", departureTime: "12:12", platform: 5, distance: 421 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "12:28", departureTime: "12:30", platform: 10, distance: 446 },
      { stationCode: "CSMT", stationName: "Mumbai Csmt", arrivalTime: "12:40", departureTime: "12:40", platform: 11, distance: 455 }
    ];
  }
  
  if (key === 'CSMT-SNSI') {
    return [
      { stationCode: "CSMT", stationName: "Mumbai Csmt", arrivalTime: "06:20", departureTime: "06:20", platform: 14, distance: 0 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "06:30", departureTime: "06:32", platform: 10, distance: 9 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "06:49", departureTime: "06:51", platform: 5, distance: 34 },
      { stationCode: "KYN", stationName: "Kalyan Jn", arrivalTime: "07:11", departureTime: "07:13", platform: 4, distance: 54 },
      { stationCode: "NK", stationName: "Nasik Road", arrivalTime: "08:57", departureTime: "08:59", platform: 2, distance: 188 },
      { stationCode: "SNSI", stationName: "Sainagar Shirdi", arrivalTime: "11:30", departureTime: "11:30", platform: 2, distance: 343 }
    ];
  }
  if (key === 'SNSI-CSMT') {
    return [
      { stationCode: "SNSI", stationName: "Sainagar Shirdi", arrivalTime: "17:25", departureTime: "17:25", platform: 2, distance: 0 },
      { stationCode: "NK", stationName: "Nasik Road", arrivalTime: "19:55", departureTime: "19:57", platform: 2, distance: 155 },
      { stationCode: "KYN", stationName: "Kalyan Jn", arrivalTime: "21:45", departureTime: "21:47", platform: 4, distance: 289 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "22:05", departureTime: "22:07", platform: 5, distance: 309 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "22:20", departureTime: "22:22", platform: 10, distance: 334 },
      { stationCode: "CSMT", stationName: "Mumbai Csmt", arrivalTime: "22:45", departureTime: "22:45", platform: 14, distance: 343 }
    ];
  }

  if (key === 'RKMP-NZM') {
    return [
      { stationCode: "RKMP", stationName: "Rani Kamalapati", arrivalTime: "05:40", departureTime: "05:40", platform: 1, distance: 0 },
      { stationCode: "VGLJ", stationName: "Veerangana Laxmibai Jhansi", arrivalTime: "08:39", departureTime: "08:43", platform: 5, distance: 297 },
      { stationCode: "GWL", stationName: "Gwalior Jn", arrivalTime: "09:41", departureTime: "09:45", platform: 2, distance: 395 },
      { stationCode: "AGC", stationName: "Agra Cantt", arrivalTime: "11:01", departureTime: "11:05", platform: 2, distance: 513 },
      { stationCode: "NZM", stationName: "Delhi Hazrat Nizamuddin", arrivalTime: "13:16", departureTime: "13:16", platform: 4, distance: 700 }
    ];
  }
  if (key === 'NZM-RKMP') {
    return [
      { stationCode: "NZM", stationName: "Delhi Hazrat Nizamuddin", arrivalTime: "14:40", departureTime: "14:40", platform: 4, distance: 0 },
      { stationCode: "AGC", stationName: "Agra Cantt", arrivalTime: "16:50", departureTime: "16:55", platform: 2, distance: 187 },
      { stationCode: "GWL", stationName: "Gwalior Jn", arrivalTime: "18:05", departureTime: "18:08", platform: 2, distance: 305 },
      { stationCode: "VGLJ", stationName: "Veerangana Laxmibai Jhansi", arrivalTime: "19:10", departureTime: "19:15", platform: 5, distance: 403 },
      { stationCode: "RKMP", stationName: "Rani Kamalapati", arrivalTime: "22:15", departureTime: "22:15", platform: 1, distance: 700 }
    ];
  }

  if (key === 'SC-TPTY') {
    return [
      { stationCode: "SC", stationName: "Secunderabad Jn", arrivalTime: "06:10", departureTime: "06:10", platform: 1, distance: 0 },
      { stationCode: "NLDA", stationName: "Nalgonda", arrivalTime: "07:24", departureTime: "07:25", platform: 1, distance: 110 },
      { stationCode: "MRGA", stationName: "Miryalaguda", arrivalTime: "07:45", departureTime: "07:46", platform: 2, distance: 147 },
      { stationCode: "GNT", stationName: "Guntur Jn", arrivalTime: "09:39", departureTime: "09:40", platform: 6, distance: 282 },
      { stationCode: "OGL", stationName: "Ongole", arrivalTime: "11:03", departureTime: "11:05", platform: 3, distance: 414 },
      { stationCode: "NLR", stationName: "Nellore", arrivalTime: "12:19", departureTime: "12:20", platform: 3, distance: 530 },
      { stationCode: "TPTY", stationName: "Tirupati", arrivalTime: "14:35", departureTime: "14:35", platform: 6, distance: 661 }
    ];
  }
  if (key === 'TPTY-SC') {
    return [
      { stationCode: "TPTY", stationName: "Tirupati", arrivalTime: "15:15", departureTime: "15:15", platform: 6, distance: 0 },
      { stationCode: "NLR", stationName: "Nellore", arrivalTime: "17:30", departureTime: "17:31", platform: 3, distance: 131 },
      { stationCode: "OGL", stationName: "Ongole", arrivalTime: "18:45", departureTime: "18:47", platform: 3, distance: 247 },
      { stationCode: "GNT", stationName: "Guntur Jn", arrivalTime: "20:10", departureTime: "20:11", platform: 6, distance: 379 },
      { stationCode: "MRGA", stationName: "Miryalaguda", arrivalTime: "22:05", departureTime: "22:06", platform: 2, distance: 514 },
      { stationCode: "NLDA", stationName: "Nalgonda", arrivalTime: "22:26", departureTime: "22:27", platform: 1, distance: 551 },
      { stationCode: "SC", stationName: "Secunderabad Jn", arrivalTime: "23:45", departureTime: "23:45", platform: 1, distance: 661 }
    ];
  }

  if (key === 'MAS-CBE') {
    return [
      { stationCode: "MAS", stationName: "Mgr Chennai Ctl", arrivalTime: "14:15", departureTime: "14:15", platform: 3, distance: 0 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "17:43", departureTime: "17:45", platform: 4, distance: 334 },
      { stationCode: "ED", stationName: "Erode Jn", arrivalTime: "18:37", departureTime: "18:40", platform: 2, distance: 396 },
      { stationCode: "TUP", stationName: "Tiruppur", arrivalTime: "19:18", departureTime: "19:20", platform: 1, distance: 446 },
      { stationCode: "CBE", stationName: "Coimbatore Jn", arrivalTime: "20:15", departureTime: "20:15", platform: 2, distance: 497 }
    ];
  }
  if (key === 'CBE-MAS') {
    return [
      { stationCode: "CBE", stationName: "Coimbatore Jn", arrivalTime: "06:00", departureTime: "06:00", platform: 2, distance: 0 },
      { stationCode: "TUP", stationName: "Tiruppur", arrivalTime: "06:35", departureTime: "06:37", platform: 1, distance: 51 },
      { stationCode: "ED", stationName: "Erode Jn", arrivalTime: "07:15", departureTime: "07:18", platform: 2, distance: 101 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "08:05", departureTime: "08:07", platform: 4, distance: 163 },
      { stationCode: "MAS", stationName: "Mgr Chennai Ctl", arrivalTime: "11:50", departureTime: "11:50", platform: 3, distance: 497 }
    ];
  }

  if (key === 'AII-DEC') {
    return [
      { stationCode: "AII", stationName: "Ajmer Jn", arrivalTime: "06:10", departureTime: "06:10", platform: 1, distance: 0 },
      { stationCode: "KSG", stationName: "Kishangarh", arrivalTime: "06:30", departureTime: "06:32", platform: 1, distance: 27 },
      { stationCode: "JP", stationName: "Jaipur", arrivalTime: "07:42", departureTime: "07:47", platform: 1, distance: 135 },
      { stationCode: "GADJ", stationName: "Gandhinagar Jaipur", arrivalTime: "07:53", departureTime: "07:55", platform: 1, distance: 141 },
      { stationCode: "AWR", stationName: "Alwar", arrivalTime: "09:27", departureTime: "09:30", platform: 1, distance: 286 },
      { stationCode: "RE", stationName: "Rewari", arrivalTime: "10:23", departureTime: "10:25", platform: 3, distance: 360 },
      { stationCode: "GGN", stationName: "Gurgaon", arrivalTime: "11:04", departureTime: "11:06", platform: 2, distance: 411 },
      { stationCode: "DEC", stationName: "Delhi Cantt", arrivalTime: "11:30", departureTime: "11:35", platform: 2, distance: 428 }
    ];
  }
  if (key === 'AII-DEC') {
    return [
      { stationCode: "AII", stationName: "Ajmer Jn", arrivalTime: "06:10", departureTime: "06:10", platform: 1, distance: 0 },
      { stationCode: "KSG", stationName: "Kishangarh", arrivalTime: "06:30", departureTime: "06:32", platform: 1, distance: 27 },
      { stationCode: "JP", stationName: "Jaipur", arrivalTime: "07:42", departureTime: "07:47", platform: 1, distance: 135 },
      { stationCode: "GADJ", stationName: "Gandhinagar Jaipur", arrivalTime: "07:53", departureTime: "07:55", platform: 1, distance: 141 },
      { stationCode: "AWR", stationName: "Alwar", arrivalTime: "09:27", departureTime: "09:30", platform: 1, distance: 286 },
      { stationCode: "RE", stationName: "Rewari", arrivalTime: "10:23", departureTime: "10:25", platform: 3, distance: 360 },
      { stationCode: "GGN", stationName: "Gurgaon", arrivalTime: "11:04", departureTime: "11:06", platform: 2, distance: 411 },
      { stationCode: "DEC", stationName: "Delhi Cantt", arrivalTime: "11:30", departureTime: "11:35", platform: 2, distance: 428 }
    ];
  }
  if (key === 'DEC-AII') {
    return [
      { stationCode: "DEC", stationName: "Delhi Cantt", arrivalTime: "18:40", departureTime: "18:40", platform: 2, distance: 0 },
      { stationCode: "GGN", stationName: "Gurgaon", arrivalTime: "18:55", departureTime: "18:57", platform: 2, distance: 17 },
      { stationCode: "RE", stationName: "Rewari", arrivalTime: "19:40", departureTime: "19:42", platform: 3, distance: 68 },
      { stationCode: "AWR", stationName: "Alwar", arrivalTime: "20:30", departureTime: "20:32", platform: 1, distance: 142 },
      { stationCode: "GADJ", stationName: "Gandhinagar Jaipur", arrivalTime: "22:00", departureTime: "22:02", platform: 1, distance: 287 },
      { stationCode: "JP", stationName: "Jaipur", arrivalTime: "22:15", departureTime: "22:20", platform: 1, distance: 293 },
      { stationCode: "KSG", stationName: "Kishangarh", arrivalTime: "23:25", departureTime: "23:27", platform: 1, distance: 401 },
      { stationCode: "AII", stationName: "Ajmer Jn", arrivalTime: "23:55", departureTime: "23:55", platform: 1, distance: 428 }
    ];
  }
  if (key === 'KGQ-TVC') {
    return [
      { stationCode: "KGQ", stationName: "Kasaragod", arrivalTime: "14:30", departureTime: "14:30", platform: 3, distance: 0 },
      { stationCode: "CAN", stationName: "Kannur", arrivalTime: "15:28", departureTime: "15:30", platform: 3, distance: 86 },
      { stationCode: "CLT", stationName: "Kozhikode", arrivalTime: "16:28", departureTime: "16:30", platform: 3, distance: 175 },
      { stationCode: "SRR", stationName: "Shoranur Jn", arrivalTime: "17:28", departureTime: "17:30", platform: 6, distance: 261 },
      { stationCode: "TCR", stationName: "Thrissur", arrivalTime: "18:00", departureTime: "18:03", platform: 1, distance: 294 },
      { stationCode: "ERN", stationName: "Ernakulam Town", arrivalTime: "19:12", departureTime: "19:15", platform: 2, distance: 366 },
      { stationCode: "KTYM", stationName: "Kottayam", arrivalTime: "20:10", departureTime: "20:13", platform: 2, distance: 428 },
      { stationCode: "CNGR", stationName: "Chengannur", arrivalTime: "20:44", departureTime: "20:46", platform: 1, distance: 463 },
      { stationCode: "QLN", stationName: "Kollam Jn", arrivalTime: "21:32", departureTime: "21:34", platform: 1, distance: 524 },
      { stationCode: "TVC", stationName: "Thiruvananthapuram", arrivalTime: "22:40", departureTime: "22:40", platform: 1, distance: 588 }
    ];
  }
  if (key === 'TVC-KGQ') {
    return [
      { stationCode: "TVC", stationName: "Thiruvananthapuram", arrivalTime: "05:15", departureTime: "05:15", platform: 1, distance: 0 },
      { stationCode: "QLN", stationName: "Kollam Jn", arrivalTime: "06:05", departureTime: "06:07", platform: 1, distance: 64 },
      { stationCode: "CNGR", stationName: "Chengannur", arrivalTime: "06:53", departureTime: "06:55", platform: 1, distance: 125 },
      { stationCode: "KTYM", stationName: "Kottayam", arrivalTime: "07:27", departureTime: "07:30", platform: 2, distance: 160 },
      { stationCode: "ERN", stationName: "Ernakulam Town", arrivalTime: "08:25", departureTime: "08:28", platform: 2, distance: 222 },
      { stationCode: "TCR", stationName: "Thrissur", arrivalTime: "09:30", departureTime: "09:33", platform: 1, distance: 294 },
      { stationCode: "SRR", stationName: "Shoranur Jn", arrivalTime: "10:02", departureTime: "10:04", platform: 6, distance: 327 },
      { stationCode: "CLT", stationName: "Kozhikode", arrivalTime: "11:03", departureTime: "11:05", platform: 3, distance: 413 },
      { stationCode: "CAN", stationName: "Kannur", arrivalTime: "12:03", departureTime: "12:05", platform: 3, distance: 502 },
      { stationCode: "KGQ", stationName: "Kasaragod", arrivalTime: "13:20", departureTime: "13:20", platform: 3, distance: 588 }
    ];
  }

  if (key === 'HWH-PURI') {
    return [
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "06:10", departureTime: "06:10", platform: 21, distance: 0 },
      { stationCode: "KGP", stationName: "Kharagpur Jn", arrivalTime: "07:38", departureTime: "07:40", platform: 1, distance: 116 },
      { stationCode: "BLS", stationName: "Balasore", arrivalTime: "08:48", departureTime: "08:50", platform: 2, distance: 234 },
      { stationCode: "BHC", stationName: "Bhadrakh", arrivalTime: "09:30", departureTime: "09:32", platform: 2, distance: 296 },
      { stationCode: "JJKR", stationName: "Jajpur Keonjhar Road", arrivalTime: "09:50", departureTime: "09:52", platform: 4, distance: 340 },
      { stationCode: "CTC", stationName: "Cuttack", arrivalTime: "10:50", departureTime: "10:52", platform: 3, distance: 412 },
      { stationCode: "BBS", stationName: "Bhubaneswar", arrivalTime: "11:28", departureTime: "11:32", platform: 4, distance: 439 },
      { stationCode: "KUR", stationName: "Khurda Road Jn", arrivalTime: "11:50", departureTime: "11:52", platform: 4, distance: 458 },
      { stationCode: "PURI", stationName: "Puri", arrivalTime: "12:50", departureTime: "12:50", platform: 1, distance: 502 }
    ];
  }
  if (key === 'PURI-HWH') {
    return [
      { stationCode: "PURI", stationName: "Puri", arrivalTime: "13:50", departureTime: "13:50", platform: 1, distance: 0 },
      { stationCode: "KUR", stationName: "Khurda Road Jn", arrivalTime: "14:48", departureTime: "14:50", platform: 4, distance: 44 },
      { stationCode: "BBS", stationName: "Bhubaneswar", arrivalTime: "15:08", departureTime: "15:12", platform: 4, distance: 63 },
      { stationCode: "CTC", stationName: "Cuttack", arrivalTime: "15:48", departureTime: "15:50", platform: 3, distance: 90 },
      { stationCode: "JJKR", stationName: "Jajpur Keonjhar Road", arrivalTime: "16:48", departureTime: "16:50", platform: 4, distance: 162 },
      { stationCode: "BHC", stationName: "Bhadrakh", arrivalTime: "17:08", departureTime: "17:10", platform: 2, distance: 206 },
      { stationCode: "BLS", stationName: "Balasore", arrivalTime: "17:50", departureTime: "17:52", platform: 2, distance: 268 },
      { stationCode: "KGP", stationName: "Kharagpur Jn", arrivalTime: "19:00", departureTime: "19:02", platform: 1, distance: 386 },
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "20:30", departureTime: "20:30", platform: 21, distance: 502 }
    ];
  }

  if (key === 'ANVT-DDN') {
    return [
      { stationCode: "ANVT", stationName: "Anand Vihar Trm", arrivalTime: "17:50", departureTime: "17:50", platform: 1, distance: 0 },
      { stationCode: "MTC", stationName: "Meerut City", arrivalTime: "18:36", departureTime: "18:38", platform: 3, distance: 60 },
      { stationCode: "MOZ", stationName: "Muzaffarnagar", arrivalTime: "19:08", departureTime: "19:10", platform: 1, distance: 116 },
      { stationCode: "DBD", stationName: "Deoband", arrivalTime: "19:26", departureTime: "19:28", platform: 2, distance: 140 },
      { stationCode: "SRE", stationName: "Saharanpur", arrivalTime: "20:00", departureTime: "20:05", platform: 2, distance: 174 },
      { stationCode: "RK", stationName: "Roorkee", arrivalTime: "20:31", departureTime: "20:33", platform: 1, distance: 209 },
      { stationCode: "HW", stationName: "Haridwar Jn", arrivalTime: "21:11", departureTime: "21:15", platform: 1, distance: 250 },
      { stationCode: "DDN", stationName: "Dehradun", arrivalTime: "22:35", departureTime: "22:35", platform: 2, distance: 302 }
    ];
  }
  if (key === 'DDN-ANVT') {
    return [
      { stationCode: "DDN", stationName: "Dehradun", arrivalTime: "07:00", departureTime: "07:00", platform: 2, distance: 0 },
      { stationCode: "HW", stationName: "Haridwar Jn", arrivalTime: "08:20", departureTime: "08:24", platform: 1, distance: 52 },
      { stationCode: "RK", stationName: "Roorkee", arrivalTime: "09:02", departureTime: "09:04", platform: 1, distance: 93 },
      { stationCode: "SRE", stationName: "Saharanpur", arrivalTime: "09:30", departureTime: "09:35", platform: 2, distance: 128 },
      { stationCode: "DBD", stationName: "Deoband", arrivalTime: "10:07", departureTime: "10:09", platform: 2, distance: 162 },
      { stationCode: "MOZ", stationName: "Muzaffarnagar", arrivalTime: "10:25", departureTime: "10:27", platform: 1, distance: 186 },
      { stationCode: "MTC", stationName: "Meerut City", arrivalTime: "10:57", departureTime: "10:59", platform: 3, distance: 242 },
      { stationCode: "ANVT", stationName: "Anand Vihar Trm", arrivalTime: "11:45", departureTime: "11:45", platform: 1, distance: 302 }
    ];
  }

  if (key === 'NJP-GHY') {
    return [
      { stationCode: "NJP", stationName: "New Jalpaiguri", arrivalTime: "06:10", departureTime: "06:10", platform: 5, distance: 0 },
      { stationCode: "NCB", stationName: "New Cooch Behar", arrivalTime: "07:30", departureTime: "07:31", platform: 4, distance: 127 },
      { stationCode: "NOQ", stationName: "New Alipurduar", arrivalTime: "07:46", departureTime: "07:47", platform: 1, distance: 145 },
      { stationCode: "GOGH", stationName: "Gossaigaon Hat", arrivalTime: "08:17", departureTime: "08:18", platform: 1, distance: 190 },
      { stationCode: "KOJ", stationName: "Kokrajhar", arrivalTime: "08:39", departureTime: "08:40", platform: 1, distance: 224 },
      { stationCode: "NBQ", stationName: "New Bongaigaon", arrivalTime: "09:10", departureTime: "09:12", platform: 3, distance: 252 },
      { stationCode: "BPRD", stationName: "Barpeta Road", arrivalTime: "09:44", departureTime: "09:46", platform: 2, distance: 296 },
      { stationCode: "RNY", stationName: "Rangiya Jn", arrivalTime: "10:18", departureTime: "10:20", platform: 1, distance: 361 },
      { stationCode: "KYQ", stationName: "Kamakhya", arrivalTime: "11:14", departureTime: "11:16", platform: 2, distance: 402 },
      { stationCode: "GHY", stationName: "Guwahati", arrivalTime: "11:40", departureTime: "11:40", platform: 2, distance: 410 }
    ];
  }
  if (key === 'GHY-NJP') {
    return [
      { stationCode: "GHY", stationName: "Guwahati", arrivalTime: "16:30", departureTime: "16:30", platform: 2, distance: 0 },
      { stationCode: "KYQ", stationName: "Kamakhya", arrivalTime: "16:40", departureTime: "16:42", platform: 2, distance: 8 },
      { stationCode: "RNY", stationName: "Rangiya Jn", arrivalTime: "17:30", departureTime: "17:32", platform: 1, distance: 49 },
      { stationCode: "BPRD", stationName: "Barpeta Road", arrivalTime: "18:00", departureTime: "18:02", platform: 2, distance: 114 },
      { stationCode: "NBQ", stationName: "New Bongaigaon", arrivalTime: "18:40", departureTime: "18:42", platform: 3, distance: 158 },
      { stationCode: "KOJ", stationName: "Kokrajhar", arrivalTime: "19:10", departureTime: "19:12", platform: 1, distance: 186 },
      { stationCode: "GOGH", stationName: "Gossaigaon Hat", arrivalTime: "19:30", departureTime: "19:32", platform: 1, distance: 220 },
      { stationCode: "NOQ", stationName: "New Alipurduar", arrivalTime: "20:00", departureTime: "20:02", platform: 1, distance: 265 },
      { stationCode: "NCB", stationName: "New Cooch Behar", arrivalTime: "20:20", departureTime: "20:22", platform: 4, distance: 283 },
      { stationCode: "NJP", stationName: "New Jalpaiguri", arrivalTime: "22:00", departureTime: "22:00", platform: 5, distance: 410 }
    ];
  }

  if (key === 'CSMT-MAO') {
    return [
      { stationCode: "CSMT", stationName: "Mumbai Csmt", arrivalTime: "05:25", departureTime: "05:25", platform: 15, distance: 0 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "05:32", departureTime: "05:34", platform: 10, distance: 9 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "05:52", departureTime: "05:54", platform: 5, distance: 34 },
      { stationCode: "PNVL", stationName: "Panvel", arrivalTime: "06:25", departureTime: "06:27", platform: 7, distance: 69 },
      { stationCode: "KHED", stationName: "Khed", arrivalTime: "08:24", departureTime: "08:26", platform: 2, distance: 284 },
      { stationCode: "RN", stationName: "Ratnagiri", arrivalTime: "09:45", departureTime: "09:50", platform: 2, distance: 431 },
      { stationCode: "KKW", stationName: "Kankavali", arrivalTime: "11:02", departureTime: "11:04", platform: 2, distance: 587 },
      { stationCode: "THVM", stationName: "Thivim", arrivalTime: "12:03", departureTime: "12:05", platform: 1, distance: 701 },
      { stationCode: "MAO", stationName: "Madgaon (Goa)", arrivalTime: "13:10", departureTime: "13:10", platform: 2, distance: 765 }
    ];
  }
  if (key === 'MAO-CSMT') {
    return [
      { stationCode: "MAO", stationName: "Madgaon (Goa)", arrivalTime: "14:40", departureTime: "14:40", platform: 2, distance: 0 },
      { stationCode: "THVM", stationName: "Thivim", arrivalTime: "15:20", departureTime: "15:22", platform: 1, distance: 64 },
      { stationCode: "KKW", stationName: "Kankavali", arrivalTime: "16:20", departureTime: "16:22", platform: 2, distance: 178 },
      { stationCode: "RN", stationName: "Ratnagiri", arrivalTime: "17:45", departureTime: "17:50", platform: 2, distance: 334 },
      { stationCode: "KHED", stationName: "Khed", arrivalTime: "19:15", departureTime: "19:17", platform: 2, distance: 481 },
      { stationCode: "PNVL", stationName: "Panvel", arrivalTime: "21:15", departureTime: "21:17", platform: 7, distance: 696 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "21:45", departureTime: "21:47", platform: 5, distance: 731 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "22:05", departureTime: "22:07", platform: 10, distance: 756 },
      { stationCode: "CSMT", stationName: "Mumbai Csmt", arrivalTime: "22:25", departureTime: "22:25", platform: 15, distance: 765 }
    ];
  }

  if (key === 'PNBE-RNC') {
    return [
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "07:00", departureTime: "07:00", platform: 8, distance: 0 },
      { stationCode: "JHD", stationName: "Jehanabad", arrivalTime: "07:33", departureTime: "07:35", platform: 1, distance: 45 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "08:20", departureTime: "08:30", platform: 4, distance: 92 },
      { stationCode: "KQR", stationName: "Koderma", arrivalTime: "09:35", departureTime: "09:37", platform: 6, distance: 168 },
      { stationCode: "HZBN", stationName: "Hazaribagh Town", arrivalTime: "10:39", departureTime: "10:41", platform: 1, distance: 248 },
      { stationCode: "BRKA", stationName: "Barkakana", arrivalTime: "11:30", departureTime: "11:35", platform: 3, distance: 305 },
      { stationCode: "MESR", stationName: "Mesra", arrivalTime: "12:20", departureTime: "12:22", platform: 2, distance: 359 },
      { stationCode: "RNC", stationName: "Ranchi", arrivalTime: "13:05", departureTime: "13:05", platform: 3, distance: 379 }
    ];
  }
  if (key === 'RNC-PNBE') {
    return [
      { stationCode: "RNC", stationName: "Ranchi", arrivalTime: "16:15", departureTime: "16:15", platform: 3, distance: 0 },
      { stationCode: "MESR", stationName: "Mesra", arrivalTime: "16:35", departureTime: "16:37", platform: 2, distance: 20 },
      { stationCode: "BRKA", stationName: "Barkakana", arrivalTime: "17:30", departureTime: "17:35", platform: 3, distance: 74 },
      { stationCode: "HZBN", stationName: "Hazaribagh Town", arrivalTime: "18:30", departureTime: "18:32", platform: 1, distance: 131 },
      { stationCode: "KQR", stationName: "Koderma", arrivalTime: "19:30", departureTime: "19:32", platform: 6, distance: 211 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "20:45", departureTime: "20:55", platform: 4, distance: 287 },
      { stationCode: "JHD", stationName: "Jehanabad", arrivalTime: "21:30", departureTime: "21:32", platform: 1, distance: 334 },
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "22:15", departureTime: "22:15", platform: 8, distance: 379 }
    ];
  }

  if (key === 'SBC-DWR') {
    return [
      { stationCode: "SBC", stationName: "Ksr Bengaluru", arrivalTime: "05:45", departureTime: "05:45", platform: 8, distance: 0 },
      { stationCode: "YPR", stationName: "Yesvantpur Jn", arrivalTime: "05:55", departureTime: "05:57", platform: 3, distance: 6 },
      { stationCode: "TK", stationName: "Tumkur", arrivalTime: "06:36", departureTime: "06:38", platform: 4, distance: 70 },
      { stationCode: "DVG", stationName: "Davangere", arrivalTime: "09:30", departureTime: "09:32", platform: 1, distance: 326 },
      { stationCode: "HVR", stationName: "Smm Haveri", arrivalTime: "10:20", departureTime: "10:22", platform: 1, distance: 395 },
      { stationCode: "UBL", stationName: "Sss Hubli Jn", arrivalTime: "11:15", departureTime: "11:20", platform: 1, distance: 470 },
      { stationCode: "DWR", stationName: "Dharwar", arrivalTime: "12:00", departureTime: "12:00", platform: 1, distance: 490 }
    ];
  }
  if (key === 'DWR-SBC') {
    return [
      { stationCode: "DWR", stationName: "Dharwar", arrivalTime: "13:15", departureTime: "13:15", platform: 1, distance: 0 },
      { stationCode: "UBL", stationName: "Sss Hubli Jn", arrivalTime: "13:35", departureTime: "13:40", platform: 1, distance: 20 },
      { stationCode: "HVR", stationName: "Smm Haveri", arrivalTime: "14:35", departureTime: "14:37", platform: 1, distance: 95 },
      { stationCode: "DVG", stationName: "Davangere", arrivalTime: "15:35", departureTime: "15:37", platform: 1, distance: 164 },
      { stationCode: "TK", stationName: "Tumkur", arrivalTime: "18:20", departureTime: "18:22", platform: 4, distance: 420 },
      { stationCode: "YPR", stationName: "Yesvantpur Jn", arrivalTime: "19:15", departureTime: "19:17", platform: 3, distance: 484 },
      { stationCode: "SBC", stationName: "Ksr Bengaluru", arrivalTime: "19:30", departureTime: "19:30", platform: 8, distance: 490 }
    ];
  }

  if (key === 'JU-SBIB') {
    return [
      { stationCode: "JU", stationName: "Jodhpur Jn", arrivalTime: "06:05", departureTime: "06:05", platform: 1, distance: 0 },
      { stationCode: "PMY", stationName: "Pali Marwar", arrivalTime: "06:55", departureTime: "06:57", platform: 1, distance: 74 },
      { stationCode: "FA", stationName: "Falna", arrivalTime: "08:00", departureTime: "08:02", platform: 1, distance: 170 },
      { stationCode: "ABR", stationName: "Abu Road", arrivalTime: "09:05", departureTime: "09:10", platform: 2, distance: 269 },
      { stationCode: "PNU", stationName: "Palanpur Jn", arrivalTime: "10:02", departureTime: "10:04", platform: 1, distance: 322 },
      { stationCode: "MSH", stationName: "Mahesana Jn", arrivalTime: "10:49", departureTime: "10:51", platform: 5, distance: 387 },
      { stationCode: "SBIB", stationName: "Sabarmati Bg", arrivalTime: "12:05", departureTime: "12:05", platform: 2, distance: 449 }
    ];
  }
  if (key === 'SBIB-JU') {
    return [
      { stationCode: "SBIB", stationName: "Sabarmati Bg", arrivalTime: "16:45", departureTime: "16:45", platform: 2, distance: 0 },
      { stationCode: "MSH", stationName: "Mahesana Jn", arrivalTime: "17:35", departureTime: "17:37", platform: 5, distance: 62 },
      { stationCode: "PNU", stationName: "Palanpur Jn", arrivalTime: "18:25", departureTime: "18:27", platform: 1, distance: 127 },
      { stationCode: "ABR", stationName: "Abu Road", arrivalTime: "19:20", departureTime: "19:25", platform: 2, distance: 180 },
      { stationCode: "FA", stationName: "Falna", arrivalTime: "20:30", departureTime: "20:32", platform: 1, distance: 279 },
      { stationCode: "PMY", stationName: "Pali Marwar", arrivalTime: "21:35", departureTime: "21:37", platform: 1, distance: 375 },
      { stationCode: "JU", stationName: "Jodhpur Jn", arrivalTime: "22:45", departureTime: "22:45", platform: 1, distance: 449 }
    ];
  }
  if (key === 'GKP-PRYJ') {
    return [
      { stationCode: "GKP", stationName: "Gorakhpur Jn", arrivalTime: "06:05", departureTime: "06:05", platform: 2, distance: 0 },
      { stationCode: "BST", stationName: "Basti", arrivalTime: "06:52", departureTime: "06:54", platform: 1, distance: 65 },
      { stationCode: "AY", stationName: "Ayodhya Dham", arrivalTime: "08:15", departureTime: "08:17", platform: 1, distance: 165 },
      { stationCode: "LKO", stationName: "Lucknow", arrivalTime: "10:20", departureTime: "10:30", platform: 7, distance: 299 },
      { stationCode: "RBL", stationName: "Rae Bareli Jn", arrivalTime: "11:34", departureTime: "11:36", platform: 2, distance: 367 },
      { stationCode: "PRYJ", stationName: "Prayagraj Jn", arrivalTime: "13:35", departureTime: "13:35", platform: 1, distance: 499 }
    ];
  }
  if (key === 'PRYJ-GKP') {
    return [
      { stationCode: "PRYJ", stationName: "Prayagraj Jn", arrivalTime: "15:15", departureTime: "15:15", platform: 1, distance: 0 },
      { stationCode: "RBL", stationName: "Rae Bareli Jn", arrivalTime: "17:15", departureTime: "17:17", platform: 2, distance: 132 },
      { stationCode: "LKO", stationName: "Lucknow", arrivalTime: "18:25", departureTime: "18:35", platform: 7, distance: 200 },
      { stationCode: "AY", stationName: "Ayodhya Dham", arrivalTime: "20:30", departureTime: "20:32", platform: 1, distance: 334 },
      { stationCode: "BST", stationName: "Basti", arrivalTime: "21:50", departureTime: "21:52", platform: 1, distance: 434 },
      { stationCode: "GKP", stationName: "Gorakhpur Jn", arrivalTime: "22:45", departureTime: "22:45", platform: 2, distance: 499 }
    ];
  }

  if (key === 'ADI-OKHA') {
    return [
      { stationCode: "ADI", stationName: "Ahmedabad Jn", arrivalTime: "18:10", departureTime: "18:10", platform: 2, distance: 0 },
      { stationCode: "SBT", stationName: "Sabarmati Jn", arrivalTime: "18:17", departureTime: "18:19", platform: 1, distance: 6 },
      { stationCode: "SAU", stationName: "Sanand", arrivalTime: "18:33", departureTime: "18:35", platform: 1, distance: 29 },
      { stationCode: "VG", stationName: "Viramgam Jn", arrivalTime: "19:05", departureTime: "19:07", platform: 1, distance: 66 },
      { stationCode: "SUNR", stationName: "Surendranagar", arrivalTime: "19:43", departureTime: "19:45", platform: 1, distance: 131 },
      { stationCode: "WKR", stationName: "Wankaner Jn", arrivalTime: "20:31", departureTime: "20:33", platform: 3, distance: 206 },
      { stationCode: "RJT", stationName: "Rajkot Jn", arrivalTime: "21:15", departureTime: "21:20", platform: 1, distance: 247 },
      { stationCode: "JAM", stationName: "Jamnagar", arrivalTime: "22:25", departureTime: "22:30", platform: 1, distance: 332 },
      { stationCode: "DWK", stationName: "Dwarka", arrivalTime: "23:54", departureTime: "23:59", platform: 2, distance: 471 },
      { stationCode: "OKHA", stationName: "Okha", arrivalTime: "00:30", departureTime: "00:30", platform: 1, distance: 500 }
    ];
  }
  if (key === 'OKHA-ADI') {
    return [
      { stationCode: "OKHA", stationName: "Okha", arrivalTime: "03:40", departureTime: "03:40", platform: 1, distance: 0 },
      { stationCode: "DWK", stationName: "Dwarka", arrivalTime: "04:05", departureTime: "04:10", platform: 2, distance: 29 },
      { stationCode: "JAM", stationName: "Jamnagar", arrivalTime: "05:35", departureTime: "05:40", platform: 1, distance: 168 },
      { stationCode: "RJT", stationName: "Rajkot Jn", arrivalTime: "06:45", departureTime: "06:50", platform: 1, distance: 253 },
      { stationCode: "WKR", stationName: "Wankaner Jn", arrivalTime: "07:30", departureTime: "07:32", platform: 3, distance: 294 },
      { stationCode: "SUNR", stationName: "Surendranagar", arrivalTime: "08:20", departureTime: "08:22", platform: 1, distance: 369 },
      { stationCode: "VG", stationName: "Viramgam Jn", arrivalTime: "08:58", departureTime: "09:00", platform: 1, distance: 434 },
      { stationCode: "SAU", stationName: "Sanand", arrivalTime: "09:30", departureTime: "09:32", platform: 1, distance: 471 },
      { stationCode: "SBT", stationName: "Sabarmati Jn", arrivalTime: "09:45", departureTime: "09:47", platform: 1, distance: 494 },
      { stationCode: "ADI", stationName: "Ahmedabad Jn", arrivalTime: "10:00", departureTime: "10:00", platform: 2, distance: 500 }
    ];
  }

  if (key === 'MS-TEN') {
    return [
      { stationCode: "MS", stationName: "Chennai Egmore", arrivalTime: "15:10", departureTime: "15:10", platform: 4, distance: 0 },
      { stationCode: "TBM", stationName: "Tambaram", arrivalTime: "15:30", departureTime: "15:32", platform: 7, distance: 25 },
      { stationCode: "VM", stationName: "Villupuram Jn", arrivalTime: "17:00", departureTime: "17:02", platform: 5, distance: 159 },
      { stationCode: "VRI", stationName: "Vridhachalam Jn", arrivalTime: "17:32", departureTime: "17:34", platform: 3, distance: 212 },
      { stationCode: "TPJ", stationName: "Tiruchirappalli", arrivalTime: "19:00", departureTime: "19:05", platform: 3, distance: 336 },
      { stationCode: "DG", stationName: "Dindigul Jn", arrivalTime: "19:58", departureTime: "20:00", platform: 4, distance: 431 },
      { stationCode: "MDU", stationName: "Madurai Jn", arrivalTime: "20:45", departureTime: "20:50", platform: 2, distance: 497 },
      { stationCode: "VPT", stationName: "Virudunagar Jn", arrivalTime: "21:20", departureTime: "21:22", platform: 3, distance: 540 },
      { stationCode: "CVP", stationName: "Kovilpatti", arrivalTime: "21:48", departureTime: "21:50", platform: 1, distance: 589 },
      { stationCode: "TEN", stationName: "Tirunelveli", arrivalTime: "22:40", departureTime: "22:40", platform: 1, distance: 650 }
    ];
  }
  if (key === 'TEN-MS') {
    return [
      { stationCode: "TEN", stationName: "Tirunelveli", arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
      { stationCode: "CVP", stationName: "Kovilpatti", arrivalTime: "06:48", departureTime: "06:50", platform: 1, distance: 61 },
      { stationCode: "VPT", stationName: "Virudunagar Jn", arrivalTime: "07:15", departureTime: "07:17", platform: 3, distance: 110 },
      { stationCode: "MDU", stationName: "Madurai Jn", arrivalTime: "07:45", departureTime: "07:50", platform: 2, distance: 153 },
      { stationCode: "DG", stationName: "Dindigul Jn", arrivalTime: "08:35", departureTime: "08:37", platform: 4, distance: 219 },
      { stationCode: "TPJ", stationName: "Tiruchirappalli", arrivalTime: "09:30", departureTime: "09:35", platform: 3, distance: 314 },
      { stationCode: "VRI", stationName: "Vridhachalam Jn", arrivalTime: "11:00", departureTime: "11:02", platform: 3, distance: 438 },
      { stationCode: "VM", stationName: "Villupuram Jn", arrivalTime: "11:30", departureTime: "11:32", platform: 5, distance: 491 },
      { stationCode: "TBM", stationName: "Tambaram", arrivalTime: "13:00", departureTime: "13:02", platform: 7, distance: 625 },
      { stationCode: "MS", stationName: "Chennai Egmore", arrivalTime: "13:30", departureTime: "13:30", platform: 4, distance: 650 }
    ];
  }

  if (key === 'KCG-YPR') {
    return [
      { stationCode: "KCG", stationName: "Kacheguda", arrivalTime: "05:45", departureTime: "05:45", platform: 3, distance: 0 },
      { stationCode: "MBNR", stationName: "Mahbubnagar", arrivalTime: "06:54", departureTime: "06:55", platform: 2, distance: 106 },
      { stationCode: "KRNT", stationName: "Kurnool City", arrivalTime: "08:28", departureTime: "08:30", platform: 2, distance: 237 },
      { stationCode: "ATP", stationName: "Anantapur", arrivalTime: "10:43", departureTime: "10:45", platform: 4, distance: 402 },
      { stationCode: "DMM", stationName: "Dharmavaram Jn", arrivalTime: "11:10", departureTime: "11:15", platform: 1, distance: 436 },
      { stationCode: "HUP", stationName: "Hindupur", arrivalTime: "12:17", departureTime: "12:19", platform: 3, distance: 517 },
      { stationCode: "YPR", stationName: "Yesvantpur Jn", arrivalTime: "14:00", departureTime: "14:00", platform: 1, distance: 610 }
    ];
  }
  if (key === 'YPR-KCG') {
    return [
      { stationCode: "YPR", stationName: "Yesvantpur Jn", arrivalTime: "14:45", departureTime: "14:45", platform: 1, distance: 0 },
      { stationCode: "HUP", stationName: "Hindupur", arrivalTime: "16:15", departureTime: "16:17", platform: 3, distance: 93 },
      { stationCode: "DMM", stationName: "Dharmavaram Jn", arrivalTime: "17:15", departureTime: "17:20", platform: 1, distance: 174 },
      { stationCode: "ATP", stationName: "Anantapur", arrivalTime: "17:50", departureTime: "17:52", platform: 4, distance: 208 },
      { stationCode: "KRNT", stationName: "Kurnool City", arrivalTime: "20:00", departureTime: "20:02", platform: 2, distance: 373 },
      { stationCode: "MBNR", stationName: "Mahbubnagar", arrivalTime: "21:30", departureTime: "21:32", platform: 2, distance: 504 },
      { stationCode: "KCG", stationName: "Kacheguda", arrivalTime: "23:00", departureTime: "23:00", platform: 3, distance: 610 }
    ];
  }
  if (key === 'HWH-PNBE') {
    return [
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "15:50", departureTime: "15:50", platform: 9, distance: 0 },
      { stationCode: "DGR", stationName: "Durgapur", arrivalTime: "17:18", departureTime: "17:20", platform: 3, distance: 158 },
      { stationCode: "ASN", stationName: "Asansol Jn", arrivalTime: "17:44", departureTime: "17:47", platform: 4, distance: 200 },
      { stationCode: "JMT", stationName: "Jamtara", arrivalTime: "18:15", departureTime: "18:17", platform: 1, distance: 240 },
      { stationCode: "JSME", stationName: "Jasidih Jn", arrivalTime: "18:57", departureTime: "18:59", platform: 2, distance: 311 },
      { stationCode: "LKR", stationName: "Luckeesarai Jn", arrivalTime: "20:35", departureTime: "20:37", platform: 3, distance: 410 },
      { stationCode: "MKA", stationName: "Mokameh Jn", arrivalTime: "21:05", departureTime: "21:07", platform: 3, distance: 443 },
      { stationCode: "BKP", stationName: "Bakhtiyarpur Jn", arrivalTime: "21:31", departureTime: "21:33", platform: 2, distance: 486 },
      { stationCode: "PNC", stationName: "Patna Saheb", arrivalTime: "21:53", departureTime: "21:55", platform: 2, distance: 522 },
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "22:40", departureTime: "22:40", platform: 10, distance: 532 }
    ];
  }
  if (key === 'PNBE-HWH') {
    return [
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "08:00", departureTime: "08:00", platform: 10, distance: 0 },
      { stationCode: "PNC", stationName: "Patna Saheb", arrivalTime: "08:12", departureTime: "08:14", platform: 2, distance: 10 },
      { stationCode: "BKP", stationName: "Bakhtiyarpur Jn", arrivalTime: "08:45", departureTime: "08:47", platform: 2, distance: 46 },
      { stationCode: "MKA", stationName: "Mokameh Jn", arrivalTime: "09:10", departureTime: "09:12", platform: 3, distance: 89 },
      { stationCode: "LKR", stationName: "Luckeesarai Jn", arrivalTime: "09:40", departureTime: "09:42", platform: 3, distance: 122 },
      { stationCode: "JSME", stationName: "Jasidih Jn", arrivalTime: "11:00", departureTime: "11:02", platform: 2, distance: 221 },
      { stationCode: "JMT", stationName: "Jamtara", arrivalTime: "11:45", departureTime: "11:47", platform: 1, distance: 292 },
      { stationCode: "ASN", stationName: "Asansol Jn", arrivalTime: "12:20", departureTime: "12:23", platform: 4, distance: 332 },
      { stationCode: "DGR", stationName: "Durgapur", arrivalTime: "12:55", departureTime: "12:57", platform: 3, distance: 374 },
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "14:50", departureTime: "14:50", platform: 9, distance: 532 }
    ];
  }
  if (key === 'HWH-RNC') {
    return [
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "14:35", departureTime: "14:35", platform: 22, distance: 0 },
      { stationCode: "KGP", stationName: "Kharagpur Jn", arrivalTime: "16:06", departureTime: "16:08", platform: 2, distance: 116 },
      { stationCode: "TATA", stationName: "Tatanagar Jn", arrivalTime: "17:45", departureTime: "17:50", platform: 3, distance: 250 },
      { stationCode: "CNI", stationName: "Chandil Jn", arrivalTime: "18:34", departureTime: "18:35", platform: 2, distance: 286 },
      { stationCode: "PRR", stationName: "Purulia Jn", arrivalTime: "19:23", departureTime: "19:25", platform: 2, distance: 340 },
      { stationCode: "KSX", stationName: "Kotshila", arrivalTime: "20:04", departureTime: "20:05", platform: 1, distance: 376 },
      { stationCode: "MURI", stationName: "Muri", arrivalTime: "20:25", departureTime: "20:27", platform: 2, distance: 400 },
      { stationCode: "RNC", stationName: "Ranchi", arrivalTime: "22:00", departureTime: "22:00", platform: 3, distance: 462 }
    ];
  }
  if (key === 'RNC-HWH') {
    return [
      { stationCode: "RNC", stationName: "Ranchi", arrivalTime: "05:15", departureTime: "05:15", platform: 3, distance: 0 },
      { stationCode: "MURI", stationName: "Muri", arrivalTime: "06:15", departureTime: "06:17", platform: 2, distance: 62 },
      { stationCode: "KSX", stationName: "Kotshila", arrivalTime: "06:35", departureTime: "06:37", platform: 1, distance: 86 },
      { stationCode: "PRR", stationName: "Purulia Jn", arrivalTime: "07:15", departureTime: "07:17", platform: 2, distance: 122 },
      { stationCode: "CNI", stationName: "Chandil Jn", arrivalTime: "08:05", departureTime: "08:07", platform: 2, distance: 176 },
      { stationCode: "TATA", stationName: "Tatanagar Jn", arrivalTime: "08:50", departureTime: "08:55", platform: 3, distance: 212 },
      { stationCode: "KGP", stationName: "Kharagpur Jn", arrivalTime: "10:45", departureTime: "10:47", platform: 2, distance: 346 },
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "12:40", departureTime: "12:40", platform: 22, distance: 462 }
    ];
  }
  if (key === 'UDZ-JP') {
    return [
      { stationCode: "UDZ", stationName: "Udaipur City", arrivalTime: "07:50", departureTime: "07:50", platform: 3, distance: 0 },
      { stationCode: "RPZ", stationName: "Ranapratapnagar", arrivalTime: "07:57", departureTime: "07:59", platform: 1, distance: 5 },
      { stationCode: "MVJ", stationName: "Mavli Jn", arrivalTime: "08:29", departureTime: "08:31", platform: 1, distance: 43 },
      { stationCode: "COR", stationName: "Chittaurgarh", arrivalTime: "09:25", departureTime: "09:35", platform: 1, distance: 115 },
      { stationCode: "BHL", stationName: "Bhilwara", arrivalTime: "10:18", departureTime: "10:20", platform: 2, distance: 169 },
      { stationCode: "BJNR", stationName: "Bijainagar", arrivalTime: "11:03", departureTime: "11:05", platform: 1, distance: 235 },
      { stationCode: "AII", stationName: "Ajmer Jn", arrivalTime: "12:05", departureTime: "12:10", platform: 3, distance: 301 },
      { stationCode: "KSG", stationName: "Kishangarh", arrivalTime: "12:37", departureTime: "12:39", platform: 1, distance: 326 },
      { stationCode: "JP", stationName: "Jaipur", arrivalTime: "14:10", departureTime: "14:10", platform: 1, distance: 435 }
    ];
  }
  if (key === 'JP-UDZ') {
    return [
      { stationCode: "JP", stationName: "Jaipur", arrivalTime: "15:45", departureTime: "15:45", platform: 1, distance: 0 },
      { stationCode: "KSG", stationName: "Kishangarh", arrivalTime: "17:15", departureTime: "17:17", platform: 1, distance: 109 },
      { stationCode: "AII", stationName: "Ajmer Jn", arrivalTime: "17:45", departureTime: "17:50", platform: 3, distance: 134 },
      { stationCode: "BJNR", stationName: "Bijainagar", arrivalTime: "18:50", departureTime: "18:52", platform: 1, distance: 200 },
      { stationCode: "BHL", stationName: "Bhilwara", arrivalTime: "19:35", departureTime: "19:37", platform: 2, distance: 266 },
      { stationCode: "COR", stationName: "Chittaurgarh", arrivalTime: "20:25", departureTime: "20:35", platform: 1, distance: 320 },
      { stationCode: "MVJ", stationName: "Mavli Jn", arrivalTime: "21:25", departureTime: "21:27", platform: 1, distance: 392 },
      { stationCode: "RPZ", stationName: "Ranapratapnagar", arrivalTime: "21:55", departureTime: "21:57", platform: 1, distance: 430 },
      { stationCode: "UDZ", stationName: "Udaipur City", arrivalTime: "22:15", departureTime: "22:15", platform: 3, distance: 435 }
    ];
  }
  if (key === 'MAS-NS') {
    return [
      { stationCode: "MAS", stationName: "Mgr Chennai Central", arrivalTime: "05:30", departureTime: "05:30", platform: 2, distance: 0 },
      { stationCode: "RU", stationName: "Renigunta Jn", arrivalTime: "07:05", departureTime: "07:10", platform: 5, distance: 141 },
      { stationCode: "NLR", stationName: "Nellore", arrivalTime: "08:29", departureTime: "08:30", platform: 2, distance: 263 },
      { stationCode: "OGL", stationName: "Ongole", arrivalTime: "09:43", departureTime: "09:45", platform: 1, distance: 379 },
      { stationCode: "TEL", stationName: "Tenali Jn", arrivalTime: "11:08", departureTime: "11:10", platform: 2, distance: 486 },
      { stationCode: "BZA", stationName: "Vijayawada Jn", arrivalTime: "11:40", departureTime: "11:45", platform: 1, distance: 517 },
      { stationCode: "GDV", stationName: "Gudivada Jn", arrivalTime: "12:29", departureTime: "12:30", platform: 1, distance: 560 },
      { stationCode: "BVRT", stationName: "Bhimavaram Town", arrivalTime: "13:14", departureTime: "13:15", platform: 2, distance: 624 },
      { stationCode: "NS", stationName: "Narasapur", arrivalTime: "14:00", departureTime: "14:00", platform: 1, distance: 655 }
    ];
  }
  if (key === 'NS-MAS') {
    return [
      { stationCode: "NS", stationName: "Narasapur", arrivalTime: "14:45", departureTime: "14:45", platform: 1, distance: 0 },
      { stationCode: "BVRT", stationName: "Bhimavaram Town", arrivalTime: "15:25", departureTime: "15:27", platform: 2, distance: 31 },
      { stationCode: "GDV", stationName: "Gudivada Jn", arrivalTime: "16:15", departureTime: "16:17", platform: 1, distance: 95 },
      { stationCode: "BZA", stationName: "Vijayawada Jn", arrivalTime: "17:10", departureTime: "17:15", platform: 1, distance: 138 },
      { stationCode: "TEL", stationName: "Tenali Jn", arrivalTime: "17:45", departureTime: "17:47", platform: 2, distance: 169 },
      { stationCode: "OGL", stationName: "Ongole", arrivalTime: "19:10", departureTime: "19:12", platform: 1, distance: 276 },
      { stationCode: "NLR", stationName: "Nellore", arrivalTime: "20:25", departureTime: "20:27", platform: 2, distance: 392 },
      { stationCode: "RU", stationName: "Renigunta Jn", arrivalTime: "21:45", departureTime: "21:50", platform: 5, distance: 514 },
      { stationCode: "MAS", stationName: "Mgr Chennai Central", arrivalTime: "23:20", departureTime: "23:20", platform: 2, distance: 655 }
    ];
  }
  if (key === 'MAO-MAQ') {
    return [
      { stationCode: "MAO", stationName: "Madgaon", arrivalTime: "18:10", departureTime: "18:10", platform: 2, distance: 0 },
      { stationCode: "KAWR", stationName: "Karwar", arrivalTime: "18:55", departureTime: "18:57", platform: 1, distance: 82 },
      { stationCode: "UD", stationName: "Udupi", arrivalTime: "21:12", departureTime: "21:14", platform: 1, distance: 350 },
      { stationCode: "MAQ", stationName: "Mangaluru Central", arrivalTime: "22:45", departureTime: "22:45", platform: 1, distance: 437 }
    ];
  }
  if (key === 'MAQ-MAO') {
    return [
      { stationCode: "MAQ", stationName: "Mangaluru Central", arrivalTime: "08:30", departureTime: "08:30", platform: 1, distance: 0 },
      { stationCode: "UD", stationName: "Udupi", arrivalTime: "09:45", departureTime: "09:47", platform: 1, distance: 87 },
      { stationCode: "KAWR", stationName: "Karwar", arrivalTime: "12:00", departureTime: "12:02", platform: 1, distance: 355 },
      { stationCode: "MAO", stationName: "Madgaon", arrivalTime: "13:05", departureTime: "13:05", platform: 2, distance: 437 }
    ];
  }
  if (key === 'DLI-ASR') {
    return [
      { stationCode: "DLI", stationName: "Old Delhi", arrivalTime: "15:15", departureTime: "15:15", platform: 2, distance: 0 },
      { stationCode: "UMB", stationName: "Ambala Cant Jn", arrivalTime: "17:27", departureTime: "17:29", platform: 7, distance: 198 },
      { stationCode: "LDH", stationName: "Ludhiana Jn", arrivalTime: "18:36", departureTime: "18:38", platform: 2, distance: 311 },
      { stationCode: "PGW", stationName: "Phagwara Jn", arrivalTime: "19:06", departureTime: "19:08", platform: 2, distance: 347 },
      { stationCode: "JRC", stationName: "Jalandhar Cant", arrivalTime: "19:24", departureTime: "19:26", platform: 1, distance: 363 },
      { stationCode: "BEAS", stationName: "Beas", arrivalTime: "19:58", departureTime: "20:00", platform: 1, distance: 404 },
      { stationCode: "ASR", stationName: "Amritsar Jn", arrivalTime: "20:45", departureTime: "20:45", platform: 7, distance: 447 }
    ];
  }
  if (key === 'ASR-DLI') {
    return [
      { stationCode: "ASR", stationName: "Amritsar Jn", arrivalTime: "08:20", departureTime: "08:20", platform: 7, distance: 0 },
      { stationCode: "BEAS", stationName: "Beas", arrivalTime: "08:50", departureTime: "08:52", platform: 1, distance: 43 },
      { stationCode: "JRC", stationName: "Jalandhar Cant", arrivalTime: "09:25", departureTime: "09:27", platform: 1, distance: 84 },
      { stationCode: "PGW", stationName: "Phagwara Jn", arrivalTime: "09:45", departureTime: "09:47", platform: 2, distance: 100 },
      { stationCode: "LDH", stationName: "Ludhiana Jn", arrivalTime: "10:15", departureTime: "10:17", platform: 2, distance: 136 },
      { stationCode: "UMB", stationName: "Ambala Cant Jn", arrivalTime: "11:25", departureTime: "11:27", platform: 7, distance: 249 },
      { stationCode: "DLI", stationName: "Old Delhi", arrivalTime: "13:50", departureTime: "13:50", platform: 2, distance: 447 }
    ];
  }
  if (key === 'BNC-CBE') {
    return [
      { stationCode: "BNC", stationName: "Bangalore Cant", arrivalTime: "14:20", departureTime: "14:20", platform: 1, distance: 0 },
      { stationCode: "HSRA", stationName: "Hosur", arrivalTime: "15:05", departureTime: "15:07", platform: 2, distance: 56 },
      { stationCode: "DPJ", stationName: "Dharmapuri", arrivalTime: "16:22", departureTime: "16:24", platform: 1, distance: 148 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "17:52", departureTime: "17:55", platform: 4, distance: 214 },
      { stationCode: "ED", stationName: "Erode Jn", arrivalTime: "18:47", departureTime: "18:50", platform: 2, distance: 277 },
      { stationCode: "TUP", stationName: "Tiruppur", arrivalTime: "19:28", departureTime: "19:30", platform: 1, distance: 327 },
      { stationCode: "CBE", stationName: "Coimbatore Jn", arrivalTime: "20:40", departureTime: "20:40", platform: 1, distance: 377 }
    ];
  }
  if (key === 'CBE-BNC') {
    return [
      { stationCode: "CBE", stationName: "Coimbatore Jn", arrivalTime: "05:00", departureTime: "05:00", platform: 1, distance: 0 },
      { stationCode: "TUP", stationName: "Tiruppur", arrivalTime: "05:35", departureTime: "05:37", platform: 1, distance: 50 },
      { stationCode: "ED", stationName: "Erode Jn", arrivalTime: "06:20", departureTime: "06:25", platform: 2, distance: 100 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "07:15", departureTime: "07:18", platform: 4, distance: 163 },
      { stationCode: "DPJ", stationName: "Dharmapuri", arrivalTime: "08:45", departureTime: "08:47", platform: 1, distance: 229 },
      { stationCode: "HSRA", stationName: "Hosur", arrivalTime: "10:05", departureTime: "10:07", platform: 2, distance: 321 },
      { stationCode: "BNC", stationName: "Bangalore Cant", arrivalTime: "11:20", departureTime: "11:20", platform: 1, distance: 377 }
    ];
  }
  if (key === 'NED-CSMT') {
    return [
      { stationCode: "NED", stationName: "Huzur Sahib Nanded", arrivalTime: "05:00", departureTime: "05:00", platform: 1, distance: 0 },
      { stationCode: "PBN", stationName: "Parbhani Jn", arrivalTime: "05:40", departureTime: "05:42", platform: 3, distance: 58 },
      { stationCode: "J", stationName: "Jalna", arrivalTime: "07:20", departureTime: "07:22", platform: 1, distance: 174 },
      { stationCode: "CPSN", stationName: "Chhatrapati Sambhajinagar", arrivalTime: "08:13", departureTime: "08:15", platform: 1, distance: 262 },
      { stationCode: "MMR", stationName: "Manmad Jn", arrivalTime: "09:58", departureTime: "10:00", platform: 4, distance: 350 },
      { stationCode: "NK", stationName: "Nasik Road", arrivalTime: "10:58", departureTime: "11:00", platform: 3, distance: 423 },
      { stationCode: "KYN", stationName: "Kalyan Jn", arrivalTime: "13:08", departureTime: "13:10", platform: 5, distance: 557 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "13:28", departureTime: "13:30", platform: 6, distance: 578 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "13:45", departureTime: "13:47", platform: 6, distance: 602 },
      { stationCode: "CSMT", stationName: "Mumbai CSMT", arrivalTime: "14:05", departureTime: "14:05", platform: 8, distance: 611 }
    ];
  }
  if (key === 'CSMT-NED') {
    return [
      { stationCode: "CSMT", stationName: "Mumbai CSMT", arrivalTime: "15:30", departureTime: "15:30", platform: 8, distance: 0 },
      { stationCode: "DR", stationName: "Mumbai Dadar Central", arrivalTime: "15:40", departureTime: "15:42", platform: 6, distance: 9 },
      { stationCode: "TNA", stationName: "Thane", arrivalTime: "16:05", departureTime: "16:07", platform: 5, distance: 33 },
      { stationCode: "KYN", stationName: "Kalyan Jn", arrivalTime: "16:25", departureTime: "16:27", platform: 4, distance: 54 },
      { stationCode: "NK", stationName: "Nasik Road", arrivalTime: "18:25", departureTime: "18:27", platform: 2, distance: 188 },
      { stationCode: "MMR", stationName: "Manmad Jn", arrivalTime: "19:25", departureTime: "19:27", platform: 1, distance: 261 },
      { stationCode: "CPSN", stationName: "Chhatrapati Sambhajinagar", arrivalTime: "21:10", departureTime: "21:12", platform: 1, distance: 349 },
      { stationCode: "J", stationName: "Jalna", arrivalTime: "22:05", departureTime: "22:07", platform: 1, distance: 437 },
      { stationCode: "PBN", stationName: "Parbhani Jn", arrivalTime: "23:45", departureTime: "23:47", platform: 3, distance: 553 },
      { stationCode: "NED", stationName: "Huzur Sahib Nanded", arrivalTime: "00:30", departureTime: "00:30", platform: 1, distance: 611 }
    ];
  }
  if (key === 'AYC-ANVT') {
    return [
      { stationCode: "AYC", stationName: "Ayodhya Cantt", arrivalTime: "15:25", departureTime: "15:25", platform: 1, distance: 0 },
      { stationCode: "LKO", stationName: "Lucknow", arrivalTime: "17:10", departureTime: "17:15", platform: 4, distance: 128 },
      { stationCode: "CNB", stationName: "Kanpur Central", arrivalTime: "18:35", departureTime: "18:40", platform: 7, distance: 202 },
      { stationCode: "ALJN", stationName: "Aligarh Jn", arrivalTime: "21:33", departureTime: "21:35", platform: 4, distance: 511 },
      { stationCode: "KRJ", stationName: "Khurja Jn", arrivalTime: "22:03", departureTime: "22:05", platform: 2, distance: 554 },
      { stationCode: "ANVT", stationName: "Anand Vihar Trm", arrivalTime: "23:40", departureTime: "23:40", platform: 1, distance: 629 }
    ];
  }
  if (key === 'ANVT-AYC') {
    return [
      { stationCode: "ANVT", stationName: "Anand Vihar Trm", arrivalTime: "06:10", departureTime: "06:10", platform: 1, distance: 0 },
      { stationCode: "KRJ", stationName: "Khurja Jn", arrivalTime: "07:45", departureTime: "07:47", platform: 2, distance: 75 },
      { stationCode: "ALJN", stationName: "Aligarh Jn", arrivalTime: "08:15", departureTime: "08:17", platform: 4, distance: 118 },
      { stationCode: "CNB", stationName: "Kanpur Central", arrivalTime: "11:10", departureTime: "11:15", platform: 7, distance: 427 },
      { stationCode: "LKO", stationName: "Lucknow", arrivalTime: "12:35", departureTime: "12:40", platform: 4, distance: 501 },
      { stationCode: "AYC", stationName: "Ayodhya Cantt", arrivalTime: "14:25", departureTime: "14:25", platform: 1, distance: 629 }
    ];
  }
  if (key === 'DURG-VSKP') {
    return [
      { stationCode: "DURG", stationName: "Durg", arrivalTime: "05:45", departureTime: "05:45", platform: 1, distance: 0 },
      { stationCode: "R", stationName: "Raipur Jn", arrivalTime: "06:13", departureTime: "06:18", platform: 2, distance: 37 },
      { stationCode: "MSMD", stationName: "Mahasamund", arrivalTime: "06:50", departureTime: "06:52", platform: 2, distance: 91 },
      { stationCode: "KRAR", stationName: "Khariar Road", arrivalTime: "07:28", departureTime: "07:30", platform: 2, distance: 143 },
      { stationCode: "KBJ", stationName: "Kantabanji", arrivalTime: "08:13", departureTime: "08:15", platform: 2, distance: 207 },
      { stationCode: "TIG", stationName: "Titlagarh", arrivalTime: "08:45", departureTime: "08:50", platform: 3, distance: 240 },
      { stationCode: "KSNG", stationName: "Kesinga", arrivalTime: "09:00", departureTime: "09:02", platform: 1, distance: 253 },
      { stationCode: "RGDA", stationName: "Rayagada", arrivalTime: "10:50", departureTime: "10:52", platform: 1, distance: 380 },
      { stationCode: "PVP", stationName: "Parvatipuram", arrivalTime: "11:30", departureTime: "11:32", platform: 3, distance: 426 },
      { stationCode: "VZM", stationName: "Vizianagaram Jn", arrivalTime: "12:30", departureTime: "12:32", platform: 4, distance: 504 },
      { stationCode: "VSKP", stationName: "Visakhapatnam", arrivalTime: "13:45", departureTime: "13:45", platform: 1, distance: 565 }
    ];
  }
  if (key === 'VSKP-DURG') {
    return [
      { stationCode: "VSKP", stationName: "Visakhapatnam", arrivalTime: "14:30", departureTime: "14:30", platform: 1, distance: 0 },
      { stationCode: "VZM", stationName: "Vizianagaram Jn", arrivalTime: "15:45", departureTime: "15:47", platform: 4, distance: 61 },
      { stationCode: "PVP", stationName: "Parvatipuram", arrivalTime: "16:45", departureTime: "16:47", platform: 3, distance: 139 },
      { stationCode: "RGDA", stationName: "Rayagada", arrivalTime: "17:25", departureTime: "17:27", platform: 1, distance: 185 },
      { stationCode: "KSNG", stationName: "Kesinga", arrivalTime: "19:15", departureTime: "19:17", platform: 1, distance: 312 },
      { stationCode: "TIG", stationName: "Titlagarh", arrivalTime: "19:27", departureTime: "19:32", platform: 3, distance: 325 },
      { stationCode: "KBJ", stationName: "Kantabanji", arrivalTime: "20:02", departureTime: "20:04", platform: 2, distance: 358 },
      { stationCode: "KRAR", stationName: "Khariar Road", arrivalTime: "20:47", departureTime: "20:49", platform: 2, distance: 422 },
      { stationCode: "MSMD", stationName: "Mahasamund", arrivalTime: "21:25", departureTime: "21:27", platform: 2, distance: 474 },
      { stationCode: "R", stationName: "Raipur Jn", arrivalTime: "22:00", departureTime: "22:05", platform: 2, distance: 528 },
      { stationCode: "DURG", stationName: "Durg", arrivalTime: "22:35", departureTime: "22:35", platform: 1, distance: 565 }
    ];
  }
  if (key === 'KLBG-SMVB') {
    return [
      { stationCode: "KLBG", stationName: "Kalaburagi Junction", arrivalTime: "06:10", departureTime: "06:10", platform: 1, distance: 0 },
      { stationCode: "YG", stationName: "Yadgir", arrivalTime: "06:49", departureTime: "06:50", platform: 2, distance: 75 },
      { stationCode: "RC", stationName: "Raichur", arrivalTime: "07:38", departureTime: "07:40", platform: 2, distance: 145 },
      { stationCode: "MALM", stationName: "Mantralayam Road", arrivalTime: "07:58", departureTime: "08:00", platform: 1, distance: 173 },
      { stationCode: "GTL", stationName: "Guntakal Jn", arrivalTime: "09:00", departureTime: "09:05", platform: 3, distance: 266 },
      { stationCode: "ATP", stationName: "Anantapur", arrivalTime: "10:03", departureTime: "10:05", platform: 3, distance: 333 },
      { stationCode: "SSPN", stationName: "Satya Sai P Nilayam", arrivalTime: "11:13", departureTime: "11:15", platform: 3, distance: 395 },
      { stationCode: "YNK", stationName: "Yelhanka Jn", arrivalTime: "12:58", departureTime: "13:00", platform: 1, distance: 529 },
      { stationCode: "SMVB", stationName: "Smvt Bengaluru", arrivalTime: "14:10", departureTime: "14:10", platform: 2, distance: 547 }
    ];
  }
  if (key === 'SMVB-KLBG') {
    return [
      { stationCode: "SMVB", stationName: "Smvt Bengaluru", arrivalTime: "15:00", departureTime: "15:00", platform: 2, distance: 0 },
      { stationCode: "YNK", stationName: "Yelhanka Jn", arrivalTime: "15:20", departureTime: "15:22", platform: 1, distance: 18 },
      { stationCode: "SSPN", stationName: "Satya Sai P Nilayam", arrivalTime: "17:05", departureTime: "17:07", platform: 3, distance: 152 },
      { stationCode: "ATP", stationName: "Anantapur", arrivalTime: "18:15", departureTime: "18:17", platform: 3, distance: 214 },
      { stationCode: "GTL", stationName: "Guntakal Jn", arrivalTime: "19:15", departureTime: "19:20", platform: 3, distance: 281 },
      { stationCode: "MALM", stationName: "Mantralayam Road", arrivalTime: "20:20", departureTime: "20:22", platform: 1, distance: 374 },
      { stationCode: "RC", stationName: "Raichur", arrivalTime: "20:45", departureTime: "20:47", platform: 2, distance: 402 },
      { stationCode: "YG", stationName: "Yadgir", arrivalTime: "21:35", departureTime: "21:37", platform: 2, distance: 472 },
      { stationCode: "KLBG", stationName: "Kalaburagi Junction", arrivalTime: "22:30", departureTime: "22:30", platform: 1, distance: 547 }
    ];
  }
  if (key === 'MYS-MAS') {
    return [
      { stationCode: "MYS", stationName: "Mysuru Jn", arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
      { stationCode: "MYA", stationName: "Mandya", arrivalTime: "06:28", departureTime: "06:30", platform: 3, distance: 46 },
      { stationCode: "SBC", stationName: "Ksr Bengaluru", arrivalTime: "07:40", departureTime: "07:45", platform: 7, distance: 139 },
      { stationCode: "KJM", stationName: "Krishnarajapuram", arrivalTime: "08:04", departureTime: "08:06", platform: 2, distance: 153 },
      { stationCode: "KPD", stationName: "Katpadi Jn", arrivalTime: "10:38", departureTime: "10:40", platform: 2, distance: 371 },
      { stationCode: "MAS", stationName: "Mgr Chennai Central", arrivalTime: "12:30", departureTime: "12:30", platform: 2, distance: 500 }
    ];
  }
  if (key === 'MAS-MYS') {
    return [
      { stationCode: "MAS", stationName: "Mgr Chennai Central", arrivalTime: "17:00", departureTime: "17:00", platform: 2, distance: 0 },
      { stationCode: "KPD", stationName: "Katpadi Jn", arrivalTime: "18:40", departureTime: "18:42", platform: 2, distance: 129 },
      { stationCode: "KJM", stationName: "Krishnarajapuram", arrivalTime: "21:05", departureTime: "21:07", platform: 2, distance: 347 },
      { stationCode: "SBC", stationName: "Ksr Bengaluru", arrivalTime: "21:30", departureTime: "21:35", platform: 7, distance: 361 },
      { stationCode: "MYA", stationName: "Mandya", arrivalTime: "22:45", departureTime: "22:47", platform: 3, distance: 454 },
      { stationCode: "MYS", stationName: "Mysuru Jn", arrivalTime: "23:20", departureTime: "23:20", platform: 1, distance: 500 }
    ];
  }
  if (key === 'LJN-DDN') {
    return [
      { stationCode: "LJN", stationName: "Lucknow Jn", arrivalTime: "05:15", departureTime: "05:15", platform: 6, distance: 0 },
      { stationCode: "BE", stationName: "Bareilly", arrivalTime: "08:30", departureTime: "08:32", platform: 2, distance: 236 },
      { stationCode: "MB", stationName: "Moradabad", arrivalTime: "09:47", departureTime: "09:52", platform: 3, distance: 326 },
      { stationCode: "NBD", stationName: "Najibabad Jn", arrivalTime: "11:08", departureTime: "11:10", platform: 2, distance: 424 },
      { stationCode: "HW", stationName: "Haridwar Jn", arrivalTime: "12:05", departureTime: "12:10", platform: 1, distance: 493 },
      { stationCode: "DDN", stationName: "Dehradun", arrivalTime: "13:40", departureTime: "13:40", platform: 1, distance: 545 }
    ];
  }
  if (key === 'DDN-LJN') {
    return [
      { stationCode: "DDN", stationName: "Dehradun", arrivalTime: "14:25", departureTime: "14:25", platform: 1, distance: 0 },
      { stationCode: "HW", stationName: "Haridwar Jn", arrivalTime: "15:25", departureTime: "15:30", platform: 1, distance: 52 },
      { stationCode: "NBD", stationName: "Najibabad Jn", arrivalTime: "16:30", departureTime: "16:32", platform: 2, distance: 121 },
      { stationCode: "MB", stationName: "Moradabad", arrivalTime: "17:55", departureTime: "18:00", platform: 3, distance: 219 },
      { stationCode: "BE", stationName: "Bareilly", arrivalTime: "19:15", departureTime: "19:17", platform: 2, distance: 309 },
      { stationCode: "LJN", stationName: "Lucknow Jn", arrivalTime: "22:40", departureTime: "22:40", platform: 6, distance: 545 }
    ];
  }
  if (key === 'NZM-KURJ') {
    return [
      { stationCode: "NZM", stationName: "Delhi Hazrat Nizamuddin", arrivalTime: "06:00", departureTime: "06:00", platform: 7, distance: 0 },
      { stationCode: "AGC", stationName: "Agra Cantt", arrivalTime: "07:40", departureTime: "07:45", platform: 1, distance: 188 },
      { stationCode: "GWL", stationName: "Gwalior Jn", arrivalTime: "09:05", departureTime: "09:10", platform: 1, distance: 306 },
      { stationCode: "DAA", stationName: "Datia", arrivalTime: "09:59", departureTime: "10:01", platform: 2, distance: 378 },
      { stationCode: "VGLJ", stationName: "Veerangana Laxmibai Jhansi", arrivalTime: "10:30", departureTime: "10:35", platform: 1, distance: 403 },
      { stationCode: "LAR", stationName: "Lalitpur", arrivalTime: "11:35", departureTime: "11:45", platform: 1, distance: 493 },
      { stationCode: "TKMG", stationName: "Tikamgarh", arrivalTime: "12:21", departureTime: "12:23", platform: 1, distance: 545 },
      { stationCode: "MCSC", stationName: "Chhatarpur", arrivalTime: "13:16", departureTime: "13:18", platform: 1, distance: 628 },
      { stationCode: "KURJ", stationName: "Khajuraho", arrivalTime: "14:20", departureTime: "14:20", platform: 2, distance: 659 }
    ];
  }
  if (key === 'KURJ-NZM') {
    return [
      { stationCode: "KURJ", stationName: "Khajuraho", arrivalTime: "14:50", departureTime: "14:50", platform: 2, distance: 0 },
      { stationCode: "MCSC", stationName: "Chhatarpur", arrivalTime: "15:55", departureTime: "15:57", platform: 1, distance: 31 },
      { stationCode: "TKMG", stationName: "Tikamgarh", arrivalTime: "16:50", departureTime: "16:52", platform: 1, distance: 114 },
      { stationCode: "LAR", stationName: "Lalitpur", arrivalTime: "17:35", departureTime: "17:45", platform: 1, distance: 166 },
      { stationCode: "VGLJ", stationName: "Veerangana Laxmibai Jhansi", arrivalTime: "18:50", departureTime: "18:55", platform: 1, distance: 256 },
      { stationCode: "DAA", stationName: "Datia", arrivalTime: "19:20", departureTime: "19:22", platform: 2, distance: 281 },
      { stationCode: "GWL", stationName: "Gwalior Jn", arrivalTime: "20:10", departureTime: "20:15", platform: 1, distance: 353 },
      { stationCode: "AGC", stationName: "Agra Cantt", arrivalTime: "21:40", departureTime: "21:45", platform: 1, distance: 471 },
      { stationCode: "NZM", stationName: "Delhi Hazrat Nizamuddin", arrivalTime: "23:30", departureTime: "23:30", platform: 7, distance: 659 }
    ];
  }
  if (key === 'ROU-PURI') {
    return [
      { stationCode: "ROU", stationName: "Rourkela", arrivalTime: "14:00", departureTime: "14:00", platform: 5, distance: 0 },
      { stationCode: "JSG", stationName: "Jharsuguda Jn", arrivalTime: "15:18", departureTime: "15:20", platform: 1, distance: 102 },
      { stationCode: "SBPY", stationName: "Sambalpur City", arrivalTime: "16:05", departureTime: "16:10", platform: 1, distance: 147 },
      { stationCode: "RAIR", stationName: "Rairakhol", arrivalTime: "16:50", departureTime: "16:52", platform: 1, distance: 212 },
      { stationCode: "ANGL", stationName: "Angul", arrivalTime: "18:00", departureTime: "18:02", platform: 3, distance: 297 },
      { stationCode: "TLHD", stationName: "Talcher Road", arrivalTime: "18:13", departureTime: "18:15", platform: 2, distance: 309 },
      { stationCode: "DNKL", stationName: "Dhenkanal", arrivalTime: "18:45", departureTime: "18:47", platform: 2, distance: 357 },
      { stationCode: "CTC", stationName: "Cuttack", arrivalTime: "20:00", departureTime: "20:02", platform: 3, distance: 415 },
      { stationCode: "BBS", stationName: "Bhubaneswar", arrivalTime: "20:30", departureTime: "20:35", platform: 3, distance: 442 },
      { stationCode: "KUR", stationName: "Khurda Road Jn", arrivalTime: "20:55", departureTime: "20:57", platform: 3, distance: 461 },
      { stationCode: "PURI", stationName: "Puri", arrivalTime: "21:40", departureTime: "21:40", platform: 2, distance: 505 }
    ];
  }
  if (key === 'PURI-ROU') {
    return [
      { stationCode: "PURI", stationName: "Puri", arrivalTime: "05:00", departureTime: "05:00", platform: 2, distance: 0 },
      { stationCode: "KUR", stationName: "Khurda Road Jn", arrivalTime: "05:40", departureTime: "05:42", platform: 3, distance: 44 },
      { stationCode: "BBS", stationName: "Bhubaneswar", arrivalTime: "06:05", departureTime: "06:10", platform: 3, distance: 63 },
      { stationCode: "CTC", stationName: "Cuttack", arrivalTime: "06:40", departureTime: "06:42", platform: 3, distance: 90 },
      { stationCode: "DNKL", stationName: "Dhenkanal", arrivalTime: "07:35", departureTime: "07:37", platform: 2, distance: 148 },
      { stationCode: "TLHD", stationName: "Talcher Road", arrivalTime: "08:05", departureTime: "08:07", platform: 2, distance: 196 },
      { stationCode: "ANGL", stationName: "Angul", arrivalTime: "08:20", departureTime: "08:22", platform: 3, distance: 208 },
      { stationCode: "RAIR", stationName: "Rairakhol", arrivalTime: "09:30", departureTime: "09:32", platform: 1, distance: 293 },
      { stationCode: "SBPY", stationName: "Sambalpur City", arrivalTime: "10:15", departureTime: "10:20", platform: 1, distance: 358 },
      { stationCode: "JSG", stationName: "Jharsuguda Jn", arrivalTime: "11:15", departureTime: "11:17", platform: 1, distance: 403 },
      { stationCode: "ROU", stationName: "Rourkela", arrivalTime: "12:45", departureTime: "12:45", platform: 5, distance: 505 }
    ];
  }
  if (key === 'NJP-PNBE') {
    return [
      { stationCode: "NJP", stationName: "New Jalpaiguri", arrivalTime: "05:10", departureTime: "05:10", platform: 5, distance: 0 },
      { stationCode: "KNE", stationName: "Kishanganj", arrivalTime: "06:03", departureTime: "06:05", platform: 2, distance: 88 },
      { stationCode: "BOE", stationName: "Barsoi Jn", arrivalTime: "06:50", departureTime: "06:52", platform: 1, distance: 144 },
      { stationCode: "KIR", stationName: "Katihar Jn", arrivalTime: "07:40", departureTime: "07:45", platform: 4, distance: 184 },
      { stationCode: "NNA", stationName: "Naugachia", arrivalTime: "08:29", departureTime: "08:31", platform: 1, distance: 241 },
      { stationCode: "KGG", stationName: "Khagaria Jn", arrivalTime: "09:23", departureTime: "09:25", platform: 1, distance: 308 },
      { stationCode: "BGS", stationName: "Begu Sarai", arrivalTime: "09:56", departureTime: "09:58", platform: 1, distance: 348 },
      { stationCode: "PNC", stationName: "Patna Saheb", arrivalTime: "11:43", departureTime: "11:45", platform: 2, distance: 461 },
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "12:10", departureTime: "12:10", platform: 10, distance: 471 }
    ];
  }
  if (key === 'PNBE-NJP') {
    return [
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "13:00", departureTime: "13:00", platform: 10, distance: 0 },
      { stationCode: "PNC", stationName: "Patna Saheb", arrivalTime: "13:12", departureTime: "13:14", platform: 2, distance: 10 },
      { stationCode: "BGS", stationName: "Begu Sarai", arrivalTime: "14:50", departureTime: "14:52", platform: 1, distance: 123 },
      { stationCode: "KGG", stationName: "Khagaria Jn", arrivalTime: "15:25", departureTime: "15:27", platform: 1, distance: 163 },
      { stationCode: "NNA", stationName: "Naugachia", arrivalTime: "16:15", departureTime: "16:17", platform: 1, distance: 230 },
      { stationCode: "KIR", stationName: "Katihar Jn", arrivalTime: "17:35", departureTime: "17:40", platform: 4, distance: 287 },
      { stationCode: "BOE", stationName: "Barsoi Jn", arrivalTime: "18:25", departureTime: "18:27", platform: 1, distance: 327 },
      { stationCode: "KNE", stationName: "Kishanganj", arrivalTime: "19:15", departureTime: "19:17", platform: 2, distance: 383 },
      { stationCode: "NJP", stationName: "New Jalpaiguri", arrivalTime: "20:00", departureTime: "20:00", platform: 5, distance: 471 }
    ];
  }
  if (key === 'MDU-BNC') {
    return [
      { stationCode: "MDU", stationName: "Madurai Jn", arrivalTime: "05:15", departureTime: "05:15", platform: 5, distance: 0 },
      { stationCode: "DG", stationName: "Dindigul Jn", arrivalTime: "05:58", departureTime: "06:00", platform: 3, distance: 66 },
      { stationCode: "TPJ", stationName: "Tiruchirappalli", arrivalTime: "06:55", departureTime: "07:00", platform: 1, distance: 161 },
      { stationCode: "KRR", stationName: "Karur", arrivalTime: "07:58", departureTime: "08:00", platform: 2, distance: 236 },
      { stationCode: "NMKL", stationName: "Namakkal", arrivalTime: "08:28", departureTime: "08:30", platform: 2, distance: 270 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "09:07", departureTime: "09:10", platform: 4, distance: 322 },
      { stationCode: "KJM", stationName: "Krishnarajapuram", arrivalTime: "12:23", departureTime: "12:25", platform: 4, distance: 576 },
      { stationCode: "BNC", stationName: "Bangalore Cant", arrivalTime: "13:00", departureTime: "13:00", platform: 1, distance: 586 }
    ];
  }
  if (key === 'BNC-MDU') {
    return [
      { stationCode: "BNC", stationName: "Bangalore Cant", arrivalTime: "13:30", departureTime: "13:30", platform: 1, distance: 0 },
      { stationCode: "KJM", stationName: "Krishnarajapuram", arrivalTime: "13:40", departureTime: "13:42", platform: 4, distance: 10 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "16:55", departureTime: "17:00", platform: 4, distance: 264 },
      { stationCode: "NMKL", stationName: "Namakkal", arrivalTime: "17:35", departureTime: "17:37", platform: 2, distance: 316 },
      { stationCode: "KRR", stationName: "Karur", arrivalTime: "18:05", departureTime: "18:07", platform: 2, distance: 350 },
      { stationCode: "TPJ", stationName: "Tiruchirappalli", arrivalTime: "19:10", departureTime: "19:15", platform: 1, distance: 425 },
      { stationCode: "DG", stationName: "Dindigul Jn", arrivalTime: "20:15", departureTime: "20:17", platform: 3, distance: 520 },
      { stationCode: "MDU", stationName: "Madurai Jn", arrivalTime: "21:15", departureTime: "21:15", platform: 5, distance: 586 }
    ];
  }
  if (key === 'BSB-DGHR') {
    return [
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "06:20", departureTime: "06:20", platform: 4, distance: 0 },
      { stationCode: "DDU", stationName: "Pt Deen Dayal Upadhyaya Jn", arrivalTime: "06:55", departureTime: "07:00", platform: 4, distance: 17 },
      { stationCode: "SSM", stationName: "Sasaram", arrivalTime: "08:03", departureTime: "08:05", platform: 3, distance: 117 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "09:15", departureTime: "09:20", platform: 3, distance: 220 },
      { stationCode: "NWD", stationName: "Nawadah", arrivalTime: "10:15", departureTime: "10:17", platform: 1, distance: 279 },
      { stationCode: "KIUL", stationName: "Kiul Jn", arrivalTime: "11:25", departureTime: "11:30", platform: 5, distance: 349 },
      { stationCode: "JSME", stationName: "Jasidih Jn", arrivalTime: "12:58", departureTime: "13:00", platform: 1, distance: 447 },
      { stationCode: "DGHR", stationName: "Deoghar", arrivalTime: "13:40", departureTime: "13:40", platform: 3, distance: 454 }
    ];
  }
  if (key === 'DGHR-BSB') {
    return [
      { stationCode: "DGHR", stationName: "Deoghar", arrivalTime: "15:15", departureTime: "15:15", platform: 3, distance: 0 },
      { stationCode: "JSME", stationName: "Jasidih Jn", arrivalTime: "15:35", departureTime: "15:37", platform: 1, distance: 7 },
      { stationCode: "KIUL", stationName: "Kiul Jn", arrivalTime: "16:55", departureTime: "17:00", platform: 5, distance: 105 },
      { stationCode: "NWD", stationName: "Nawadah", arrivalTime: "17:55", departureTime: "17:57", platform: 1, distance: 175 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "19:00", departureTime: "19:05", platform: 3, distance: 234 },
      { stationCode: "SSM", stationName: "Sasaram", arrivalTime: "20:15", departureTime: "20:17", platform: 3, distance: 337 },
      { stationCode: "DDU", stationName: "Pt Deen Dayal Upadhyaya Jn", arrivalTime: "21:25", departureTime: "21:30", platform: 4, distance: 437 },
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "22:20", departureTime: "22:20", platform: 4, distance: 454 }
    ];
  }
  if (key === 'HWH-GAYA') {
    return [
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "06:45", departureTime: "06:45", platform: 6, distance: 0 },
      { stationCode: "DGR", stationName: "Durgapur", arrivalTime: "08:09", departureTime: "08:11", platform: 3, distance: 158 },
      { stationCode: "ASN", stationName: "Asansol Jn", arrivalTime: "08:33", departureTime: "08:35", platform: 4, distance: 200 },
      { stationCode: "DHN", stationName: "Dhanbad Jn", arrivalTime: "09:43", departureTime: "09:45", platform: 3, distance: 259 },
      { stationCode: "PNME", stationName: "Parasnath", arrivalTime: "10:13", departureTime: "10:15", platform: 3, distance: 306 },
      { stationCode: "KQR", stationName: "Koderma", arrivalTime: "10:58", departureTime: "11:00", platform: 4, distance: 382 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "12:30", departureTime: "12:30", platform: 1, distance: 458 }
    ];
  }
  if (key === 'GAYA-HWH') {
    return [
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "15:15", departureTime: "15:15", platform: 1, distance: 0 },
      { stationCode: "KQR", stationName: "Koderma", arrivalTime: "16:25", departureTime: "16:27", platform: 4, distance: 76 },
      { stationCode: "PNME", stationName: "Parasnath", arrivalTime: "17:15", departureTime: "17:17", platform: 3, distance: 152 },
      { stationCode: "DHN", stationName: "Dhanbad Jn", arrivalTime: "18:00", departureTime: "18:05", platform: 3, distance: 199 },
      { stationCode: "ASN", stationName: "Asansol Jn", arrivalTime: "19:10", departureTime: "19:12", platform: 4, distance: 258 },
      { stationCode: "DGR", stationName: "Durgapur", arrivalTime: "19:40", departureTime: "19:42", platform: 3, distance: 300 },
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "21:05", departureTime: "21:05", platform: 6, distance: 458 }
    ];
  }
  if (key === 'UBL-PUNE') {
    return [
      { stationCode: "UBL", stationName: "Sss Hubli Jn", arrivalTime: "05:00", departureTime: "05:00", platform: 1, distance: 0 },
      { stationCode: "DWR", stationName: "Dharwar", arrivalTime: "05:18", departureTime: "05:20", platform: 1, distance: 21 },
      { stationCode: "BGM", stationName: "Belagavi", arrivalTime: "07:05", departureTime: "07:10", platform: 1, distance: 142 },
      { stationCode: "GPB", stationName: "Ghatprabha", arrivalTime: "07:48", departureTime: "07:50", platform: 1, distance: 199 },
      { stationCode: "MRJ", stationName: "Miraj Jn", arrivalTime: "08:55", departureTime: "09:00", platform: 1, distance: 279 },
      { stationCode: "SLI", stationName: "Sangli", arrivalTime: "09:10", departureTime: "09:13", platform: 1, distance: 286 },
      { stationCode: "KOV", stationName: "Kirloskarvadi", arrivalTime: "09:38", departureTime: "09:40", platform: 2, distance: 319 },
      { stationCode: "STR", stationName: "Satara", arrivalTime: "10:47", departureTime: "10:50", platform: 1, distance: 413 },
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "13:30", departureTime: "13:30", platform: 2, distance: 558 }
    ];
  }
  if (key === 'PUNE-UBL') {
    return [
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "14:15", departureTime: "14:15", platform: 2, distance: 0 },
      { stationCode: "STR", stationName: "Satara", arrivalTime: "16:05", departureTime: "16:07", platform: 1, distance: 145 },
      { stationCode: "KOV", stationName: "Kirloskarvadi", arrivalTime: "17:15", departureTime: "17:17", platform: 2, distance: 239 },
      { stationCode: "SLI", stationName: "Sangli", arrivalTime: "17:45", departureTime: "17:47", platform: 1, distance: 272 },
      { stationCode: "MRJ", stationName: "Miraj Jn", arrivalTime: "18:05", departureTime: "18:10", platform: 1, distance: 279 },
      { stationCode: "GPB", stationName: "Ghatprabha", arrivalTime: "19:05", departureTime: "19:07", platform: 1, distance: 359 },
      { stationCode: "BGM", stationName: "Belagavi", arrivalTime: "20:00", departureTime: "20:05", platform: 1, distance: 416 },
      { stationCode: "DWR", stationName: "Dharwar", arrivalTime: "22:10", departureTime: "22:12", platform: 1, distance: 537 },
      { stationCode: "UBL", stationName: "Sss Hubli Jn", arrivalTime: "22:45", departureTime: "22:45", platform: 1, distance: 558 }
    ];
  }
  if (key === 'HWH-JMP') {
    return [
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "07:45", departureTime: "07:45", platform: 2, distance: 0 },
      { stationCode: "BHP", stationName: "Bolpur Shantiniketan", arrivalTime: "09:13", departureTime: "09:15", platform: 2, distance: 146 },
      { stationCode: "RPH", stationName: "Rampur Hat", arrivalTime: "10:00", departureTime: "10:02", platform: 2, distance: 207 },
      { stationCode: "DUMK", stationName: "Dumka", arrivalTime: "11:03", departureTime: "11:05", platform: 1, distance: 271 },
      { stationCode: "NNHT", stationName: "Nonihat", arrivalTime: "11:25", departureTime: "11:27", platform: 1, distance: 297 },
      { stationCode: "HSDA", stationName: "Hansdiha", arrivalTime: "11:46", departureTime: "11:48", platform: 1, distance: 314 },
      { stationCode: "MDLE", stationName: "Mandar Hill", arrivalTime: "12:12", departureTime: "12:14", platform: 1, distance: 337 },
      { stationCode: "BHLE", stationName: "Barahat Jn", arrivalTime: "12:27", departureTime: "12:29", platform: 1, distance: 350 },
      { stationCode: "BGP", stationName: "Bhagalpur", arrivalTime: "13:03", departureTime: "13:05", platform: 3, distance: 387 },
      { stationCode: "JMP", stationName: "Jamalpur Jn", arrivalTime: "14:05", departureTime: "14:05", platform: 1, distance: 440 }
    ];
  }
  if (key === 'JMP-HWH') {
    return [
      { stationCode: "JMP", stationName: "Jamalpur Jn", arrivalTime: "15:00", departureTime: "15:00", platform: 1, distance: 0 },
      { stationCode: "BGP", stationName: "Bhagalpur", arrivalTime: "16:00", departureTime: "16:02", platform: 3, distance: 53 },
      { stationCode: "BHLE", stationName: "Barahat Jn", arrivalTime: "16:35", departureTime: "16:37", platform: 1, distance: 90 },
      { stationCode: "MDLE", stationName: "Mandar Hill", arrivalTime: "16:50", departureTime: "16:52", platform: 1, distance: 103 },
      { stationCode: "HSDA", stationName: "Hansdiha", arrivalTime: "17:15", departureTime: "17:17", platform: 1, distance: 126 },
      { stationCode: "NNHT", stationName: "Nonihat", arrivalTime: "17:35", departureTime: "17:37", platform: 1, distance: 143 },
      { stationCode: "DUMK", stationName: "Dumka", arrivalTime: "18:00", departureTime: "18:02", platform: 1, distance: 169 },
      { stationCode: "RPH", stationName: "Rampur Hat", arrivalTime: "19:10", departureTime: "19:12", platform: 2, distance: 233 },
      { stationCode: "BHP", stationName: "Bolpur Shantiniketan", arrivalTime: "20:00", departureTime: "20:02", platform: 2, distance: 294 },
      { stationCode: "HWH", stationName: "Howrah Jn", arrivalTime: "21:40", departureTime: "21:40", platform: 2, distance: 440 }
    ];
  }
  if (key === 'BAM-TATA') {
    return [
      { stationCode: "BAM", stationName: "Brahmapur", arrivalTime: "05:15", departureTime: "05:15", platform: 3, distance: 0 },
      { stationCode: "BALU", stationName: "Balugaon", arrivalTime: "05:43", departureTime: "05:45", platform: 4, distance: 76 },
      { stationCode: "KUR", stationName: "Khurda Road Jn", arrivalTime: "06:40", departureTime: "06:50", platform: 5, distance: 147 },
      { stationCode: "BBS", stationName: "Bhubaneswar", arrivalTime: "07:15", departureTime: "07:20", platform: 1, distance: 166 },
      { stationCode: "CTC", stationName: "Cuttack", arrivalTime: "07:38", departureTime: "07:40", platform: 1, distance: 194 },
      { stationCode: "JKPR", stationName: "Jakhapura", arrivalTime: "08:23", departureTime: "08:25", platform: 1, distance: 258 },
      { stationCode: "HCNR", stationName: "Harichandanpur", arrivalTime: "09:18", departureTime: "09:20", platform: 1, distance: 331 },
      { stationCode: "KDJR", stationName: "Kendujhargarh", arrivalTime: "10:05", departureTime: "10:10", platform: 1, distance: 381 },
      { stationCode: "BSPX", stationName: "Banspani", arrivalTime: "11:23", departureTime: "11:25", platform: 1, distance: 438 },
      { stationCode: "CBSA", stationName: "Chaibasa", arrivalTime: "12:30", departureTime: "12:32", platform: 1, distance: 493 },
      { stationCode: "TATA", stationName: "Tatanagar", arrivalTime: "13:30", departureTime: "13:30", platform: 1, distance: 555 }
    ];
  }
  if (key === 'TATA-BAM') {
    return [
      { stationCode: "TATA", stationName: "Tatanagar", arrivalTime: "14:15", departureTime: "14:15", platform: 1, distance: 0 },
      { stationCode: "CBSA", stationName: "Chaibasa", arrivalTime: "15:15", departureTime: "15:17", platform: 1, distance: 62 },
      { stationCode: "BSPX", stationName: "Banspani", arrivalTime: "16:20", departureTime: "16:22", platform: 1, distance: 117 },
      { stationCode: "KDJR", stationName: "Kendujhargarh", arrivalTime: "17:30", departureTime: "17:35", platform: 1, distance: 174 },
      { stationCode: "HCNR", stationName: "Harichandanpur", arrivalTime: "18:15", departureTime: "18:17", platform: 1, distance: 224 },
      { stationCode: "JKPR", stationName: "Jakhapura", arrivalTime: "19:15", departureTime: "19:17", platform: 1, distance: 297 },
      { stationCode: "CTC", stationName: "Cuttack", arrivalTime: "20:05", departureTime: "20:07", platform: 1, distance: 361 },
      { stationCode: "BBS", stationName: "Bhubaneswar", arrivalTime: "20:30", departureTime: "20:35", platform: 1, distance: 389 },
      { stationCode: "KUR", stationName: "Khurda Road Jn", arrivalTime: "21:00", departureTime: "21:10", platform: 5, distance: 408 },
      { stationCode: "BALU", stationName: "Balugaon", arrivalTime: "22:00", departureTime: "22:02", platform: 4, distance: 479 },
      { stationCode: "BAM", stationName: "Brahmapur", arrivalTime: "22:45", departureTime: "22:45", platform: 3, distance: 555 }
    ];
  }
  if (key === 'BKN-DEC') {
    return [
      { stationCode: "BKN", stationName: "Bikaner Jn", arrivalTime: "05:40", departureTime: "05:40", platform: 6, distance: 0 },
      { stationCode: "SDGH", stationName: "Sri Dungargarh", arrivalTime: "06:29", departureTime: "06:31", platform: 1, distance: 74 },
      { stationCode: "RTGH", stationName: "Ratangarh Jn", arrivalTime: "07:10", departureTime: "07:12", platform: 1, distance: 138 },
      { stationCode: "CUR", stationName: "Churu", arrivalTime: "07:45", departureTime: "07:50", platform: 1, distance: 181 },
      { stationCode: "SDLP", stationName: "Sadulpur Jn", arrivalTime: "08:35", departureTime: "08:37", platform: 3, distance: 238 },
      { stationCode: "LHU", stationName: "Loharu", arrivalTime: "09:13", departureTime: "09:15", platform: 1, distance: 288 },
      { stationCode: "MHRG", stationName: "Mahendragarh", arrivalTime: "09:42", departureTime: "09:44", platform: 1, distance: 329 },
      { stationCode: "GGN", stationName: "Gurgaon", arrivalTime: "11:20", departureTime: "11:22", platform: 2, distance: 431 },
      { stationCode: "DEC", stationName: "Delhi Cantt", arrivalTime: "11:55", departureTime: "11:55", platform: 3, distance: 448 }
    ];
  }
  if (key === 'DEC-BKN') {
    return [
      { stationCode: "DEC", stationName: "Delhi Cantt", arrivalTime: "14:00", departureTime: "14:00", platform: 3, distance: 0 },
      { stationCode: "GGN", stationName: "Gurgaon", arrivalTime: "14:25", departureTime: "14:27", platform: 2, distance: 17 },
      { stationCode: "MHRG", stationName: "Mahendragarh", arrivalTime: "16:00", departureTime: "16:02", platform: 1, distance: 119 },
      { stationCode: "LHU", stationName: "Loharu", arrivalTime: "16:30", departureTime: "16:32", platform: 1, distance: 160 },
      { stationCode: "SDLP", stationName: "Sadulpur Jn", arrivalTime: "17:15", departureTime: "17:17", platform: 3, distance: 210 },
      { stationCode: "CUR", stationName: "Churu", arrivalTime: "18:05", departureTime: "18:10", platform: 1, distance: 267 },
      { stationCode: "RTGH", stationName: "Ratangarh Jn", arrivalTime: "18:45", departureTime: "18:47", platform: 1, distance: 310 },
      { stationCode: "SDGH", stationName: "Sri Dungargarh", arrivalTime: "19:20", departureTime: "19:22", platform: 1, distance: 374 },
      { stationCode: "BKN", stationName: "Bikaner Jn", arrivalTime: "20:30", departureTime: "20:30", platform: 6, distance: 448 }
    ];
  }
  if (key === 'SBC-ERS') {
    return [
      { stationCode: "SBC", stationName: "Ksr Bengaluru", arrivalTime: "05:10", departureTime: "05:10", platform: 1, distance: 0 },
      { stationCode: "KJM", stationName: "Krishnarajapuram", arrivalTime: "05:28", departureTime: "05:30", platform: 2, distance: 15 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "08:02", departureTime: "08:05", platform: 4, distance: 269 },
      { stationCode: "ED", stationName: "Erode Jn", arrivalTime: "08:52", departureTime: "08:55", platform: 2, distance: 331 },
      { stationCode: "TUP", stationName: "Tiruppur", arrivalTime: "09:28", departureTime: "09:30", platform: 2, distance: 382 },
      { stationCode: "CBE", stationName: "Coimbatore Jn", arrivalTime: "10:12", departureTime: "10:15", platform: 1, distance: 432 },
      { stationCode: "PGT", stationName: "Palakkad Jn", arrivalTime: "11:13", departureTime: "11:15", platform: 3, distance: 487 },
      { stationCode: "TCR", stationName: "Thrissur", arrivalTime: "12:28", departureTime: "12:30", platform: 1, distance: 564 },
      { stationCode: "ERS", stationName: "Ernakulam Jn", arrivalTime: "13:40", departureTime: "13:40", platform: 1, distance: 638 }
    ];
  }
  if (key === 'ERS-SBC') {
    return [
      { stationCode: "ERS", stationName: "Ernakulam Jn", arrivalTime: "14:15", departureTime: "14:15", platform: 1, distance: 0 },
      { stationCode: "TCR", stationName: "Thrissur", arrivalTime: "15:20", departureTime: "15:22", platform: 1, distance: 74 },
      { stationCode: "PGT", stationName: "Palakkad Jn", arrivalTime: "16:35", departureTime: "16:37", platform: 3, distance: 151 },
      { stationCode: "CBE", stationName: "Coimbatore Jn", arrivalTime: "17:35", departureTime: "17:40", platform: 1, distance: 206 },
      { stationCode: "TUP", stationName: "Tiruppur", arrivalTime: "18:25", departureTime: "18:27", platform: 2, distance: 256 },
      { stationCode: "ED", stationName: "Erode Jn", arrivalTime: "19:05", departureTime: "19:08", platform: 2, distance: 307 },
      { stationCode: "SA", stationName: "Salem Jn", arrivalTime: "19:55", departureTime: "20:00", platform: 4, distance: 369 },
      { stationCode: "KJM", stationName: "Krishnarajapuram", arrivalTime: "22:30", departureTime: "22:32", platform: 2, distance: 623 },
      { stationCode: "SBC", stationName: "Ksr Bengaluru", arrivalTime: "23:00", departureTime: "23:00", platform: 1, distance: 638 }
    ];
  }
  if (key === 'GTNR-SRE') {
    return [
      { stationCode: "GTNR", stationName: "Gomati Nagar", arrivalTime: "15:10", departureTime: "15:10", platform: 6, distance: 0 },
      { stationCode: "DAL", stationName: "Daliganj", arrivalTime: "15:28", departureTime: "15:38", platform: 3, distance: 9 },
      { stationCode: "STP", stationName: "Sitapur", arrivalTime: "16:33", departureTime: "16:35", platform: 1, distance: 90 },
      { stationCode: "SPN", stationName: "Shahjehanpur", arrivalTime: "18:05", departureTime: "18:10", platform: 3, distance: 182 },
      { stationCode: "BE", stationName: "Bareilly", arrivalTime: "19:04", departureTime: "19:09", platform: 2, distance: 252 },
      { stationCode: "MB", stationName: "Moradabad", arrivalTime: "20:35", departureTime: "20:40", platform: 2, distance: 343 },
      { stationCode: "NBD", stationName: "Najibabad Jn", arrivalTime: "21:52", departureTime: "21:54", platform: 2, distance: 441 },
      { stationCode: "RK", stationName: "Roorkee", arrivalTime: "22:40", departureTime: "22:42", platform: 3, distance: 501 },
      { stationCode: "SRE", stationName: "Saharanpur", arrivalTime: "23:50", departureTime: "23:50", platform: 2, distance: 535 }
    ];
  }
  if (key === 'SRE-GTNR') {
    return [
      { stationCode: "SRE", stationName: "Saharanpur", arrivalTime: "06:00", departureTime: "06:00", platform: 2, distance: 0 },
      { stationCode: "RK", stationName: "Roorkee", arrivalTime: "06:50", departureTime: "06:52", platform: 3, distance: 34 },
      { stationCode: "NBD", stationName: "Najibabad Jn", arrivalTime: "07:35", departureTime: "07:37", platform: 2, distance: 94 },
      { stationCode: "MB", stationName: "Moradabad", arrivalTime: "08:45", departureTime: "08:50", platform: 2, distance: 192 },
      { stationCode: "BE", stationName: "Bareilly", arrivalTime: "10:00", departureTime: "10:05", platform: 2, distance: 283 },
      { stationCode: "SPN", stationName: "Shahjehanpur", arrivalTime: "11:00", departureTime: "11:05", platform: 3, distance: 353 },
      { stationCode: "STP", stationName: "Sitapur", arrivalTime: "12:20", departureTime: "12:22", platform: 1, distance: 445 },
      { stationCode: "DAL", stationName: "Daliganj", arrivalTime: "13:25", departureTime: "13:35", platform: 3, distance: 526 },
      { stationCode: "GTNR", stationName: "Gomati Nagar", arrivalTime: "14:00", departureTime: "14:00", platform: 6, distance: 535 }
    ];
  }
  if (key === 'KOP-PUNE') {
    return [
      { stationCode: "KOP", stationName: "C Shahu M Raj Kolhapur Term", arrivalTime: "08:15", departureTime: "08:15", platform: 3, distance: 0 },
      { stationCode: "MRJ", stationName: "Miraj Jn", arrivalTime: "08:55", departureTime: "09:00", platform: 1, distance: 48 },
      { stationCode: "SLI", stationName: "Sangli", arrivalTime: "09:10", departureTime: "09:13", platform: 1, distance: 55 },
      { stationCode: "KOV", stationName: "Kirloskarvadi", arrivalTime: "09:38", departureTime: "09:40", platform: 2, distance: 88 },
      { stationCode: "KRD", stationName: "Karad", arrivalTime: "10:02", departureTime: "10:05", platform: 1, distance: 123 },
      { stationCode: "STR", stationName: "Satara", arrivalTime: "10:47", departureTime: "10:50", platform: 1, distance: 181 },
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "13:30", departureTime: "13:30", platform: 3, distance: 326 }
    ];
  }
  if (key === 'PUNE-KOP') {
    return [
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "14:15", departureTime: "14:15", platform: 3, distance: 0 },
      { stationCode: "STR", stationName: "Satara", arrivalTime: "16:20", departureTime: "16:22", platform: 1, distance: 145 },
      { stationCode: "KRD", stationName: "Karad", arrivalTime: "17:05", departureTime: "17:07", platform: 1, distance: 203 },
      { stationCode: "KOV", stationName: "Kirloskarvadi", arrivalTime: "17:30", departureTime: "17:32", platform: 2, distance: 238 },
      { stationCode: "SLI", stationName: "Sangli", arrivalTime: "17:55", departureTime: "17:57", platform: 1, distance: 271 },
      { stationCode: "MRJ", stationName: "Miraj Jn", arrivalTime: "18:15", departureTime: "18:20", platform: 1, distance: 278 },
      { stationCode: "KOP", stationName: "C Shahu M Raj Kolhapur Term", arrivalTime: "19:30", departureTime: "19:30", platform: 3, distance: 326 }
    ];
  }
  if (key === 'ADI-MMCT') {
    return [
      { stationCode: "ADI", stationName: "Ahmedabad Jn", arrivalTime: "06:05", departureTime: "06:05", platform: 7, distance: 0 },
      { stationCode: "BRC", stationName: "Vadodara Jn", arrivalTime: "06:55", departureTime: "06:58", platform: 1, distance: 100 },
      { stationCode: "ST", stationName: "Surat", arrivalTime: "08:15", departureTime: "08:20", platform: 2, distance: 229 },
      { stationCode: "VAPI", stationName: "Vapi", arrivalTime: "09:13", departureTime: "09:15", platform: 2, distance: 322 },
      { stationCode: "BVI", stationName: "Borivali", arrivalTime: "10:43", departureTime: "10:45", platform: 7, distance: 462 },
      { stationCode: "MMCT", stationName: "Mumbai Central", arrivalTime: "11:45", departureTime: "11:45", platform: 4, distance: 491 }
    ];
  }
  if (key === 'MMCT-ADI') {
    return [
      { stationCode: "MMCT", stationName: "Mumbai Central", arrivalTime: "15:55", departureTime: "15:55", platform: 4, distance: 0 },
      { stationCode: "BVI", stationName: "Borivali", arrivalTime: "16:20", departureTime: "16:22", platform: 6, distance: 29 },
      { stationCode: "VAPI", stationName: "Vapi", arrivalTime: "17:40", departureTime: "17:42", platform: 1, distance: 169 },
      { stationCode: "ST", stationName: "Surat", arrivalTime: "18:35", departureTime: "18:40", platform: 1, distance: 262 },
      { stationCode: "BRC", stationName: "Vadodara Jn", arrivalTime: "19:50", departureTime: "19:53", platform: 2, distance: 391 },
      { stationCode: "ADI", stationName: "Ahmedabad Jn", arrivalTime: "21:25", departureTime: "21:25", platform: 7, distance: 491 }
    ];
  }
  if (key === 'MS-NCJ') {
    return [
      { stationCode: "MS", stationName: "Chennai Egmore", arrivalTime: "05:00", departureTime: "05:00", platform: 4, distance: 0 },
      { stationCode: "TBM", stationName: "Tambaram", arrivalTime: "05:20", departureTime: "05:22", platform: 7, distance: 25 },
      { stationCode: "VM", stationName: "Villupuram Jn", arrivalTime: "06:52", departureTime: "06:55", platform: 5, distance: 159 },
      { stationCode: "TPJ", stationName: "Tiruchirappalli", arrivalTime: "08:55", departureTime: "09:00", platform: 4, distance: 336 },
      { stationCode: "DG", stationName: "Dindigul Jn", arrivalTime: "09:53", departureTime: "09:55", platform: 2, distance: 431 },
      { stationCode: "MDU", stationName: "Madurai Jn", arrivalTime: "10:38", departureTime: "10:40", platform: 5, distance: 497 },
      { stationCode: "CVP", stationName: "Kovilpatti", arrivalTime: "11:38", departureTime: "11:40", platform: 3, distance: 588 },
      { stationCode: "TEN", stationName: "Tirunelveli", arrivalTime: "12:38", departureTime: "12:40", platform: 5, distance: 653 },
      { stationCode: "NCJ", stationName: "Nagercoil Jn", arrivalTime: "13:50", departureTime: "13:50", platform: 1, distance: 727 }
    ];
  }
  if (key === 'NCJ-MS') {
    return [
      { stationCode: "NCJ", stationName: "Nagercoil Jn", arrivalTime: "14:20", departureTime: "14:20", platform: 1, distance: 0 },
      { stationCode: "TEN", stationName: "Tirunelveli", arrivalTime: "15:15", departureTime: "15:17", platform: 1, distance: 74 },
      { stationCode: "CVP", stationName: "Kovilpatti", arrivalTime: "16:05", departureTime: "16:07", platform: 1, distance: 139 },
      { stationCode: "MDU", stationName: "Madurai Jn", arrivalTime: "17:10", departureTime: "17:15", platform: 1, distance: 230 },
      { stationCode: "DG", stationName: "Dindigul Jn", arrivalTime: "18:05", departureTime: "18:07", platform: 2, distance: 296 },
      { stationCode: "TPJ", stationName: "Tiruchirappalli", arrivalTime: "19:20", departureTime: "19:25", platform: 3, distance: 391 },
      { stationCode: "VM", stationName: "Villupuram Jn", arrivalTime: "21:30", departureTime: "21:33", platform: 1, distance: 568 },
      { stationCode: "TBM", stationName: "Tambaram", arrivalTime: "22:50", departureTime: "22:52", platform: 5, distance: 702 },
      { stationCode: "MS", stationName: "Chennai Egmore", arrivalTime: "23:30", departureTime: "23:30", platform: 4, distance: 727 }
    ];
  }
  if (key === 'PUNE-AJNI') {
    return [
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "06:25", departureTime: "06:25", platform: 5, distance: 0 },
      { stationCode: "DDCC", stationName: "Daund Chord Line", arrivalTime: "07:13", departureTime: "07:15", platform: 2, distance: 73 },
      { stationCode: "ANG", stationName: "Ahilyanagar Jn", arrivalTime: "08:23", departureTime: "08:25", platform: 1, distance: 155 },
      { stationCode: "KPG", stationName: "Kopargaon", arrivalTime: "09:38", departureTime: "09:40", platform: 1, distance: 266 },
      { stationCode: "MMR", stationName: "Manmad Jn", arrivalTime: "10:32", departureTime: "10:35", platform: 2, distance: 308 },
      { stationCode: "JL", stationName: "Jalgaon Jn", arrivalTime: "12:18", departureTime: "12:20", platform: 3, distance: 467 },
      { stationCode: "BSL", stationName: "Bhusaval Jn", arrivalTime: "12:50", departureTime: "12:55", platform: 5, distance: 492 },
      { stationCode: "SEG", stationName: "Shegaon", arrivalTime: "14:13", departureTime: "14:15", platform: 2, distance: 594 },
      { stationCode: "AK", stationName: "Akola Jn", arrivalTime: "14:40", departureTime: "14:42", platform: 2, distance: 631 },
      { stationCode: "BD", stationName: "Badnera Jn", arrivalTime: "16:00", departureTime: "16:02", platform: 1, distance: 710 },
      { stationCode: "WR", stationName: "Wardha Jn", arrivalTime: "17:10", departureTime: "17:12", platform: 1, distance: 805 },
      { stationCode: "AJNI", stationName: "Ajni", arrivalTime: "18:30", departureTime: "18:30", platform: 1, distance: 880 }
    ];
  }
  if (key === 'AJNI-PUNE') {
    return [
      { stationCode: "AJNI", stationName: "Ajni", arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
      { stationCode: "WR", stationName: "Wardha Jn", arrivalTime: "07:00", departureTime: "07:02", platform: 1, distance: 75 },
      { stationCode: "BD", stationName: "Badnera Jn", arrivalTime: "08:10", departureTime: "08:12", platform: 1, distance: 170 },
      { stationCode: "AK", stationName: "Akola Jn", arrivalTime: "09:30", departureTime: "09:32", platform: 2, distance: 249 },
      { stationCode: "SEG", stationName: "Shegaon", arrivalTime: "10:00", departureTime: "10:02", platform: 2, distance: 286 },
      { stationCode: "BSL", stationName: "Bhusaval Jn", arrivalTime: "11:20", departureTime: "11:25", platform: 5, distance: 388 },
      { stationCode: "JL", stationName: "Jalgaon Jn", arrivalTime: "11:50", departureTime: "11:52", platform: 3, distance: 413 },
      { stationCode: "MMR", stationName: "Manmad Jn", arrivalTime: "13:40", departureTime: "13:45", platform: 2, distance: 572 },
      { stationCode: "KPG", stationName: "Kopargaon", arrivalTime: "14:35", departureTime: "14:37", platform: 1, distance: 614 },
      { stationCode: "ANG", stationName: "Ahilyanagar Jn", arrivalTime: "15:55", departureTime: "15:57", platform: 1, distance: 725 },
      { stationCode: "DDCC", stationName: "Daund Chord Line", arrivalTime: "17:05", departureTime: "17:07", platform: 2, distance: 807 },
      { stationCode: "PUNE", stationName: "Pune Jn", arrivalTime: "18:00", departureTime: "18:00", platform: 5, distance: 880 }
    ];
  }
  if (key === 'DNR-JBN') {
    return [
      { stationCode: "DNR", stationName: "Danapur", arrivalTime: "17:10", departureTime: "17:10", platform: 4, distance: 0 },
      { stationCode: "HJP", stationName: "Hajipur Jn", arrivalTime: "18:03", departureTime: "18:05", platform: 4, distance: 27 },
      { stationCode: "MFP", stationName: "Muzaffarpur Jn", arrivalTime: "18:45", departureTime: "18:50", platform: 5, distance: 81 },
      { stationCode: "SPJ", stationName: "Samastipur Jn", arrivalTime: "19:38", departureTime: "19:40", platform: 3, distance: 133 },
      { stationCode: "HPO", stationName: "Hasanpur Road", arrivalTime: "20:18", departureTime: "20:20", platform: 1, distance: 178 },
      { stationCode: "SLNA", stationName: "Salauna", arrivalTime: "20:36", departureTime: "20:38", platform: 1, distance: 193 },
      { stationCode: "KGG", stationName: "Khagaria Jn", arrivalTime: "21:00", departureTime: "21:02", platform: 2, distance: 218 },
      { stationCode: "SHC", stationName: "Saharsa Jn", arrivalTime: "22:00", departureTime: "22:10", platform: 1, distance: 272 },
      { stationCode: "DMH", stationName: "Dauram Madhpura", arrivalTime: "22:28", departureTime: "22:30", platform: 1, distance: 294 },
      { stationCode: "BNKI", stationName: "Banmankhi Jn", arrivalTime: "23:10", departureTime: "23:12", platform: 1, distance: 340 },
      { stationCode: "PRNA", stationName: "Purnea Jn", arrivalTime: "23:55", departureTime: "23:59", platform: 1, distance: 380 },
      { stationCode: "JBN", stationName: "Jogbani", arrivalTime: "01:00", departureTime: "01:00", platform: 1, distance: 420 }
    ];
  }
  if (key === 'JBN-DNR') {
    return [
      { stationCode: "JBN", stationName: "Jogbani", arrivalTime: "05:00", departureTime: "05:00", platform: 1, distance: 0 },
      { stationCode: "PRNA", stationName: "Purnea Jn", arrivalTime: "06:00", departureTime: "06:05", platform: 1, distance: 40 },
      { stationCode: "BNKI", stationName: "Banmankhi Jn", arrivalTime: "06:45", departureTime: "06:47", platform: 1, distance: 80 },
      { stationCode: "DMH", stationName: "Dauram Madhpura", arrivalTime: "07:30", departureTime: "07:32", platform: 1, distance: 126 },
      { stationCode: "SHC", stationName: "Saharsa Jn", arrivalTime: "07:55", departureTime: "08:05", platform: 1, distance: 148 },
      { stationCode: "KGG", stationName: "Khagaria Jn", arrivalTime: "09:10", departureTime: "09:12", platform: 2, distance: 202 },
      { stationCode: "SLNA", stationName: "Salauna", arrivalTime: "09:35", departureTime: "09:37", platform: 1, distance: 227 },
      { stationCode: "HPO", stationName: "Hasanpur Road", arrivalTime: "09:55", departureTime: "09:57", platform: 1, distance: 242 },
      { stationCode: "SPJ", stationName: "Samastipur Jn", arrivalTime: "10:45", departureTime: "10:47", platform: 3, distance: 287 },
      { stationCode: "MFP", stationName: "Muzaffarpur Jn", arrivalTime: "11:45", departureTime: "11:50", platform: 5, distance: 339 },
      { stationCode: "HJP", stationName: "Hajipur Jn", arrivalTime: "12:40", departureTime: "12:42", platform: 4, distance: 393 },
      { stationCode: "DNR", stationName: "Danapur", arrivalTime: "13:40", departureTime: "13:40", platform: 4, distance: 420 }
    ];
  }
  if (key === 'FZR-NDLS') {
    return [
      { stationCode: "FZR", stationName: "Firozpur Cant", arrivalTime: "07:55", departureTime: "07:55", platform: 1, distance: 0 },
      { stationCode: "FDK", stationName: "Faridkot", arrivalTime: "08:23", departureTime: "08:25", platform: 1, distance: 33 },
      { stationCode: "BTI", stationName: "Bathinda Jn", arrivalTime: "09:10", departureTime: "09:15", platform: 5, distance: 88 },
      { stationCode: "BNN", stationName: "Barnala", arrivalTime: "09:59", departureTime: "10:01", platform: 1, distance: 153 },
      { stationCode: "DUI", stationName: "Dhuri Jn", arrivalTime: "10:24", departureTime: "10:26", platform: 2, distance: 184 },
      { stationCode: "PTA", stationName: "Patiala", arrivalTime: "11:05", departureTime: "11:07", platform: 1, distance: 237 },
      { stationCode: "UMB", stationName: "Ambala Cant Jn", arrivalTime: "11:58", departureTime: "12:00", platform: 1, distance: 290 },
      { stationCode: "KKDE", stationName: "Kurukshetra Jn", arrivalTime: "12:28", departureTime: "12:30", platform: 2, distance: 332 },
      { stationCode: "PNP", stationName: "Panipat Jn", arrivalTime: "13:05", departureTime: "13:07", platform: 1, distance: 402 },
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "14:00", departureTime: "14:00", platform: 1, distance: 448 }
    ];
  }
  if (key === 'NDLS-FZR') {
    return [
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "15:00", departureTime: "15:00", platform: 1, distance: 0 },
      { stationCode: "PNP", stationName: "Panipat Jn", arrivalTime: "15:50", departureTime: "15:52", platform: 1, distance: 46 },
      { stationCode: "KKDE", stationName: "Kurukshetra Jn", arrivalTime: "16:20", departureTime: "16:22", platform: 2, distance: 116 },
      { stationCode: "UMB", stationName: "Ambala Cant Jn", arrivalTime: "17:00", departureTime: "17:05", platform: 1, distance: 158 },
      { stationCode: "PTA", stationName: "Patiala", arrivalTime: "17:55", departureTime: "17:57", platform: 1, distance: 211 },
      { stationCode: "DUI", stationName: "Dhuri Jn", arrivalTime: "18:35", departureTime: "18:37", platform: 2, distance: 264 },
      { stationCode: "BNN", stationName: "Barnala", arrivalTime: "19:00", departureTime: "19:02", platform: 1, distance: 295 },
      { stationCode: "BTI", stationName: "Bathinda Jn", arrivalTime: "20:00", departureTime: "20:05", platform: 5, distance: 360 },
      { stationCode: "FDK", stationName: "Faridkot", arrivalTime: "20:45", departureTime: "20:47", platform: 1, distance: 415 },
      { stationCode: "FZR", stationName: "Firozpur Cant", arrivalTime: "21:15", departureTime: "21:15", platform: 1, distance: 448 }
    ];
  }
  if (key === 'BSB-NDLS') {
    return [
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "06:00", departureTime: "06:00", platform: 1, distance: 0 },
      { stationCode: "PRYJ", stationName: "Prayagraj Jn", arrivalTime: "07:30", departureTime: "07:34", platform: 6, distance: 121 },
      { stationCode: "CNB", stationName: "Kanpur Central", arrivalTime: "09:26", departureTime: "09:30", platform: 1, distance: 316 },
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "14:05", departureTime: "14:05", platform: 12, distance: 757 }
    ];
  }
  if (key === 'NDLS-BSB') {
    return [
      { stationCode: "NDLS", stationName: "New Delhi", arrivalTime: "15:00", departureTime: "15:00", platform: 12, distance: 0 },
      { stationCode: "CNB", stationName: "Kanpur Central", arrivalTime: "19:30", departureTime: "19:34", platform: 1, distance: 441 },
      { stationCode: "PRYJ", stationName: "Prayagraj Jn", arrivalTime: "21:30", departureTime: "21:34", platform: 6, distance: 636 },
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "23:05", departureTime: "23:05", platform: 1, distance: 757 }
    ];
  }
  if (key === 'INDB-NGP') {
    return [
      { stationCode: "INDB", stationName: "Indore Jn Bg", arrivalTime: "06:10", departureTime: "06:10", platform: 1, distance: 0 },
      { stationCode: "UJN", stationName: "Ujjain Jn", arrivalTime: "06:50", departureTime: "06:55", platform: 2, distance: 63 },
      { stationCode: "BPL", stationName: "Bhopal Jn", arrivalTime: "09:10", departureTime: "09:15", platform: 4, distance: 246 },
      { stationCode: "NDPM", stationName: "Narmadapuram", arrivalTime: "10:22", departureTime: "10:23", platform: 2, distance: 319 },
      { stationCode: "ET", stationName: "Itarsi Jn", arrivalTime: "10:40", departureTime: "10:45", platform: 2, distance: 338 },
      { stationCode: "BZU", stationName: "Betul", arrivalTime: "11:58", departureTime: "12:00", platform: 1, distance: 445 },
      { stationCode: "NGP", stationName: "Nagpur", arrivalTime: "14:35", departureTime: "14:35", platform: 5, distance: 635 }
    ];
  }
  if (key === 'NGP-INDB') {
    return [
      { stationCode: "NGP", stationName: "Nagpur", arrivalTime: "15:20", departureTime: "15:20", platform: 5, distance: 0 },
      { stationCode: "BZU", stationName: "Betul", arrivalTime: "17:40", departureTime: "17:42", platform: 1, distance: 190 },
      { stationCode: "ET", stationName: "Itarsi Jn", arrivalTime: "19:00", departureTime: "19:05", platform: 2, distance: 297 },
      { stationCode: "NDPM", stationName: "Narmadapuram", arrivalTime: "19:22", departureTime: "19:24", platform: 2, distance: 316 },
      { stationCode: "BPL", stationName: "Bhopal Jn", arrivalTime: "20:30", departureTime: "20:35", platform: 4, distance: 389 },
      { stationCode: "UJN", stationName: "Ujjain Jn", arrivalTime: "22:50", departureTime: "22:55", platform: 2, distance: 572 },
      { stationCode: "INDB", stationName: "Indore Jn Bg", arrivalTime: "23:45", departureTime: "23:45", platform: 1, distance: 635 }
    ];
  }
  if (key === 'RKMP-REWA') {
    return [
      { stationCode: "RKMP", stationName: "Rani Kamlapati", arrivalTime: "15:30", departureTime: "15:30", platform: 2, distance: 0 },
      { stationCode: "NDPM", stationName: "Narmadapuram", arrivalTime: "16:18", departureTime: "16:20", platform: 2, distance: 68 },
      { stationCode: "ET", stationName: "Itarsi Jn", arrivalTime: "16:45", departureTime: "16:55", platform: 4, distance: 86 },
      { stationCode: "PPI", stationName: "Pipariya", arrivalTime: "17:28", departureTime: "17:30", platform: 1, distance: 153 },
      { stationCode: "NU", stationName: "Narsinghpur", arrivalTime: "18:28", departureTime: "18:30", platform: 1, distance: 247 },
      { stationCode: "JBP", stationName: "Jabalpur", arrivalTime: "19:45", departureTime: "19:55", platform: 4, distance: 331 },
      { stationCode: "KTE", stationName: "Katni", arrivalTime: "21:03", departureTime: "21:05", platform: 2, distance: 422 },
      { stationCode: "MYR", stationName: "Maihar", arrivalTime: "21:53", departureTime: "21:55", platform: 1, distance: 485 },
      { stationCode: "STA", stationName: "Satna", arrivalTime: "22:28", departureTime: "22:30", platform: 2, distance: 520 },
      { stationCode: "REWA", stationName: "Rewa", arrivalTime: "23:30", departureTime: "23:30", platform: 1, distance: 570 }
    ];
  }
  if (key === 'REWA-RKMP') {
    return [
      { stationCode: "REWA", stationName: "Rewa", arrivalTime: "05:30", departureTime: "05:30", platform: 1, distance: 0 },
      { stationCode: "STA", stationName: "Satna", arrivalTime: "06:20", departureTime: "06:25", platform: 2, distance: 50 },
      { stationCode: "MYR", stationName: "Maihar", arrivalTime: "06:55", departureTime: "06:57", platform: 1, distance: 85 },
      { stationCode: "KTE", stationName: "Katni", arrivalTime: "07:45", departureTime: "07:50", platform: 2, distance: 148 },
      { stationCode: "JBP", stationName: "Jabalpur", arrivalTime: "09:00", departureTime: "09:10", platform: 4, distance: 239 },
      { stationCode: "NU", stationName: "Narsinghpur", arrivalTime: "10:20", departureTime: "10:22", platform: 1, distance: 323 },
      { stationCode: "PPI", stationName: "Pipariya", arrivalTime: "11:20", departureTime: "11:22", platform: 1, distance: 417 },
      { stationCode: "ET", stationName: "Itarsi Jn", arrivalTime: "12:00", departureTime: "12:10", platform: 4, distance: 484 },
      { stationCode: "NDPM", stationName: "Narmadapuram", arrivalTime: "12:35", departureTime: "12:37", platform: 2, distance: 502 },
      { stationCode: "RKMP", stationName: "Rani Kamlapati", arrivalTime: "13:30", departureTime: "13:30", platform: 2, distance: 570 }
    ];
  }
  if (key === 'MTC-BSB') {
    return [
      { stationCode: "MTC", stationName: "Meerut City", arrivalTime: "06:35", departureTime: "06:35", platform: 1, distance: 0 },
      { stationCode: "HPU", stationName: "Hapur", arrivalTime: "07:08", departureTime: "07:10", platform: 3, distance: 29 },
      { stationCode: "MB", stationName: "Moradabad", arrivalTime: "08:35", departureTime: "08:40", platform: 1, distance: 134 },
      { stationCode: "BE", stationName: "Bareilly", arrivalTime: "09:56", departureTime: "09:58", platform: 1, distance: 224 },
      { stationCode: "LKO", stationName: "Lucknow", arrivalTime: "13:40", departureTime: "13:50", platform: 1, distance: 459 },
      { stationCode: "AY", stationName: "Ayodhya Dham", arrivalTime: "15:46", departureTime: "15:48", platform: 2, distance: 594 },
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "18:25", departureTime: "18:25", platform: 7, distance: 782 }
    ];
  }
  if (key === 'BSB-MTC') {
    return [
      { stationCode: "BSB", stationName: "Varanasi Jn", arrivalTime: "05:30", departureTime: "05:30", platform: 7, distance: 0 },
      { stationCode: "AY", stationName: "Ayodhya Dham", arrivalTime: "08:00", departureTime: "08:02", platform: 2, distance: 188 },
      { stationCode: "LKO", stationName: "Lucknow", arrivalTime: "10:00", departureTime: "10:10", platform: 1, distance: 323 },
      { stationCode: "BE", stationName: "Bareilly", arrivalTime: "13:50", departureTime: "13:52", platform: 1, distance: 558 },
      { stationCode: "MB", stationName: "Moradabad", arrivalTime: "15:10", departureTime: "15:15", platform: 1, distance: 648 },
      { stationCode: "HPU", stationName: "Hapur", arrivalTime: "16:40", departureTime: "16:42", platform: 3, distance: 753 },
      { stationCode: "MTC", stationName: "Meerut City", arrivalTime: "17:30", departureTime: "17:30", platform: 1, distance: 782 }
    ];
  }
  if (key === 'TATA-PNBE') {
    return [
      { stationCode: "TATA", stationName: "Tatanagar Jn", arrivalTime: "05:25", departureTime: "05:25", platform: 1, distance: 0 },
      { stationCode: "CNI", stationName: "Chandil Jn", arrivalTime: "06:08", departureTime: "06:10", platform: 2, distance: 37 },
      { stationCode: "MURI", stationName: "Muri", arrivalTime: "07:08", departureTime: "07:10", platform: 1, distance: 105 },
      { stationCode: "BKSC", stationName: "Bokaro Steel City", arrivalTime: "07:58", departureTime: "08:00", platform: 1, distance: 157 },
      { stationCode: "GMO", stationName: "Nsc Bose J Gomoh", arrivalTime: "08:53", departureTime: "08:55", platform: 3, distance: 189 },
      { stationCode: "PNME", stationName: "Parasnath", arrivalTime: "09:05", departureTime: "09:07", platform: 3, distance: 207 },
      { stationCode: "KQR", stationName: "Koderma", arrivalTime: "09:53", departureTime: "09:55", platform: 4, distance: 282 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "11:00", departureTime: "11:10", platform: 6, distance: 358 },
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "12:45", departureTime: "12:45", platform: 9, distance: 450 }
    ];
  }
  if (key === 'PNBE-TATA') {
    return [
      { stationCode: "PNBE", stationName: "Patna Jn", arrivalTime: "14:15", departureTime: "14:15", platform: 9, distance: 0 },
      { stationCode: "GAYA", stationName: "Gaya Jn", arrivalTime: "15:50", departureTime: "16:00", platform: 6, distance: 92 },
      { stationCode: "KQR", stationName: "Koderma", arrivalTime: "17:05", departureTime: "17:07", platform: 4, distance: 168 },
      { stationCode: "PNME", stationName: "Parasnath", arrivalTime: "17:55", departureTime: "17:57", platform: 3, distance: 243 },
      { stationCode: "GMO", stationName: "Nsc Bose J Gomoh", arrivalTime: "18:05", departureTime: "18:10", platform: 3, distance: 261 },
      { stationCode: "BKSC", stationName: "Bokaro Steel City", arrivalTime: "19:00", departureTime: "19:02", platform: 1, distance: 293 },
      { stationCode: "MURI", stationName: "Muri", arrivalTime: "19:50", departureTime: "19:52", platform: 1, distance: 345 },
      { stationCode: "CNI", stationName: "Chandil Jn", arrivalTime: "20:50", departureTime: "20:52", platform: 2, distance: 413 },
      { stationCode: "TATA", stationName: "Tatanagar Jn", arrivalTime: "21:35", departureTime: "21:35", platform: 1, distance: 450 }
    ];
  }

  // Generic fallback route
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

export const getVandeBharatSchedule = (trainNumber) => {
  for (const route of vandeBharatRoutes) {
    const t1 = route.numbers.split(' / ')[0]?.trim();
    const t2 = route.numbers.split(' / ')[1]?.trim();
    const src = route.codes.split(' – ')[0]?.trim();
    const dest = route.codes.split(' – ')[1]?.split('/')[0]?.trim();
    const srcName = route.name.split(' – ')[0]?.trim() || src;
    const destName = route.name.split(' – ')[1]?.trim() || dest;

    if (t1 === trainNumber) {
      return {
        trainNumber: t1,
        trainName: `Vande Bharat Exp (${srcName} - ${destName})`,
        route: generateRoute(src, dest, srcName, destName, 1)
      };
    }
    if (t2 === trainNumber) {
      return {
        trainNumber: t2,
        trainName: `Vande Bharat Return (${destName} - ${srcName})`,
        route: generateRoute(dest, src, destName, srcName, 2)
      };
    }
  }
  return null;
};
