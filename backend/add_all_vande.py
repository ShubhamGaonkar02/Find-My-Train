import json
import os
import re

raw_data = """
1New Delhi – Varanasi22435 / 22436NDLS – BSB
2New Delhi – SMVD Katra22439 / 22440NDLS – SVDK
3Mumbai Central – Ahmedabad22961 / 22962MMCT – ADI
4New Delhi – Amb Andaura22447 / 22448NDLS – AADR
5Chennai Central – Mysuru20607 / 20608MAS – MYS
6Nagpur – Bilaspur20825 / 20826NGP – BSP
7Howrah – New Jalpaiguri22301 / 22302HWH – NJP
8Secunderabad – Visakhapatnam20833 / 20834SC – VSKP
9Mumbai CSMT – Solapur22225 / 22226CSMT – SUR
10Mumbai CSMT – Sainagar Shirdi22223 / 22224CSMT – SNSI
11Rani Kamalapati – Nizamuddin20171 / 20172RKMP – NZM
12Secunderabad – Tirupati20701 / 20702SC – TPTY
13Chennai Central – Coimbatore20643 / 20644MAS – CBE
14Ajmer – Delhi Cantt20977 / 20978AII – DEC
15Thiruvananthapuram – Kasaragod20633 / 20634TVC – KGQ
16Howrah – Puri22895 / 22896HWH – PURI
17Anand Vihar – Dehradun22457 / 22458ANVT – DDN
18New Jalpaiguri – Guwahati22227 / 22228NJP – GHY
19Mumbai CSMT – Madgaon22229 / 22230CSMT – MAO
20Patna – Ranchi22349 / 22350PNBE – RNC
21KSR Bengaluru – Dharwad20661 / 20662SBC – DWR
22Jodhpur – Sabarmati12461 / 12462JU – SBIB
23Gorakhpur – Lucknow22549 / 22550GKP – LKO
24Ahmedabad – Okha22925 / 22926ADI – OKHA
25Chennai Egmore – Tirunelveli20665 / 20666MS – TEN
26Kacheguda – Yesvantpur20703 / 20704KCG – YPR
27Patna – Howrah22347 / 22348PNBE – HWH
28Ranchi – Howrah20897 / 20898RNC – HWH
29Udaipur City – Jaipur20979 / 20980UDZ – JP
30Jamnagar – Ahmedabad22925 / 22926JAM – ADI
31Bengaluru – Belagavi20661 / 20662SBC – BGM
32Chennai Central – Vijayawada20677 / 20678MAS – BZA
33Gwalior – New Delhi20171 / 20172GWL – NDLS
34Varanasi – Patna22348 / 22347BSB – PNBE
35Mangaluru Central – Madgaon20645 / 20646MAQ – MAO
36Old Delhi – Amritsar22487 / 22488DLI – ASR
37Coimbatore – Bengaluru Cantt20641 / 20642CBE – BNC
38Jalna – Mumbai CSMT20705 / 20706J – CSMT
39Ayodhya Dham – Anand Vihar22425 / 22426AY – ANVT
40Jammu Tawi – Srinagar22439 / 22440JAT – SVDK
41Visakhapatnam – Raipur20829 / 20830VSKP – R
42Kalaburagi – KSR Bengaluru22231 / 22232KLBG – SBC
43Mysore – Chennai Central20663 / 20664MYS – MAS
44Lucknow – Dehradun22545 / 22546LKO – DDN
45Khajuraho – Nizamuddin22470 / 22469KURJ – NZM
46Puri – Rourkela20835 / 20836PURI – ROU
47Dibrugarh – Guwahati22233 / 22234DBRG – GHY
48Madurai – Bengaluru20671 / 20672MDU – SBC
49Deoghar – Varanasi22500 / 22499DGHR – BSB
50Gaya – Howrah22303 / 22304GAYA – HWH
51Pune – Hubballi20669 / 20670PUNE – UBL
52Tatanagar – Brahmapur20892 / 20891TATA – BAM
53Bhagalpur – Howrah22309 / 22310BGP – HWH
54Delhi Cantt – Bikaner26471 / 26472DEC – BKN
55Ernakulam – Bengaluru26651 / 26652ERS – SBC
56Saharanpur – Lucknow26504 / 26503SRE – LKO
57Pune – Kolhapur20673 / 20674PUNE – KOP
58Ahmedabad – Mumbai Central22962 / 22961ADI – MMCT
59Nizamuddin – Gwalior22470 / 22469NZM – GWL
60Tirupati – Coimbatore20643 / 20644TPTY – CBE
61Chennai – Nagercoil20627 / 20628MAS – NCJ
62Pune – Nagpur (Ajni)26101 / 26102PUNE – AJNI
63Jogbani – Danapur26302 / 26301JBN – DNR
64New Delhi – Firozpur26462 / 26461NDLS – FZR
65Howrah – Bhagalpur22309 / 22310HWH – BGP
66Varanasi – Lucknow22415 / 22416BSB – LKO
67Indore – Nagpur20911 / 20912INDB – NGP
68Rewa – Bhopal20173 / 20174REWA – BPL
69Meerut City – Lucknow22490 / 22489MTC – LKO
70Patna – Tatanagar20893 / 20894PNBE – TATA
"""

# Regex pattern to match the lines
# Example: 1New Delhi – Varanasi22435 / 22436NDLS – BSB
# Breaking it down:
# ^\d+ -> matches the starting number
# (.+?) -> matches the station names (e.g., New Delhi – Varanasi)
# (\d{5}) \/ (\d{5}) -> matches the train numbers
# ([A-Z]+) – ([A-Z0-9]+)$ -> matches the station codes
pattern = re.compile(r'^\d+(.+?)(\d{5})\s*/\s*(\d{5})([A-Z]+)\s*–\s*([A-Z0-9/]+)$')

def process_line(line):
    # Some lines might have slight formatting differences, let's clean it up
    line = line.strip()
    if not line: return None
    
    # Custom parsing because regex might miss some edge cases
    # Extract numbers
    nums = re.findall(r'\d{5}', line)
    if len(nums) >= 2:
        train1 = nums[0]
        train2 = nums[1]
        
        # Everything before train1 is name
        name_part = line[line.find(train1)-1::-1].replace('–', '-', 1)[::-1] # reverse find to not mess up
        # wait, just split by train1
        parts = line.split(train1)
        name_str = parts[0]
        # remove leading digits
        name_str = re.sub(r'^\d+', '', name_str).strip()
        names = [n.strip() for n in name_str.split('–')]
        
        # Everything after train2 is codes
        code_str = line.split(train2)[1].strip()
        codes = [c.strip() for c in code_str.split('–')]
        
        if len(names) >= 2 and len(codes) >= 2:
            return {
                "name1": names[0],
                "name2": names[1],
                "t1": train1,
                "t2": train2,
                "code1": codes[0].replace('/', ''),
                "code2": codes[1].replace('/', '')
            }
    return None

trains_path = os.path.join(os.path.dirname(__file__), 'data', 'trains.json')
stations_path = os.path.join(os.path.dirname(__file__), 'data', 'stations.json')

with open(trains_path, 'r') as f:
    trains = json.load(f)

with open(stations_path, 'r') as f:
    stations = json.load(f)

station_codes = {s['stationCode'] for s in stations}
existing_trains = {t['trainNumber'] for t in trains}

new_stations_added = 0
new_trains_added = 0

for line in raw_data.strip().split('\n'):
    data = process_line(line)
    if not data: continue
    
    # Add missing stations
    if data['code1'] not in station_codes:
        stations.append({
            "stationCode": data['code1'],
            "stationName": data['name1'],
            "platforms": 2,
            "location": {"lat": 20.0, "lng": 77.0}
        })
        station_codes.add(data['code1'])
        new_stations_added += 1
        
    if data['code2'] not in station_codes:
        stations.append({
            "stationCode": data['code2'],
            "stationName": data['name2'],
            "platforms": 2,
            "location": {"lat": 20.0, "lng": 77.0}
        })
        station_codes.add(data['code2'])
        new_stations_added += 1

    # Add trains
    if data['t1'] not in existing_trains:
        trains.append({
            "id": data['t1'],
            "trainName": f"Vande Bharat Express ({data['name1']} - {data['name2']})",
            "trainNumber": data['t1'],
            "source": data['code1'],
            "destination": data['code2'],
            "duration": "08:00",
            "days": ["M", "T", "W", "F", "S", "S"],
            "route": [
                { "stationCode": data['code1'], "stationName": data['name1'], "arrivalTime": "06:00", "departureTime": "06:00", "platform": 1, "distance": 0 },
                { "stationCode": data['code2'], "stationName": data['name2'], "arrivalTime": "14:00", "departureTime": "14:00", "platform": 1, "distance": 600 }
            ]
        })
        existing_trains.add(data['t1'])
        new_trains_added += 1
        
    if data['t2'] not in existing_trains:
        trains.append({
            "id": data['t2'],
            "trainName": f"Vande Bharat Express ({data['name2']} - {data['name1']})",
            "trainNumber": data['t2'],
            "source": data['code2'],
            "destination": data['code1'],
            "duration": "08:00",
            "days": ["M", "T", "W", "F", "S", "S"],
            "route": [
                { "stationCode": data['code2'], "stationName": data['name2'], "arrivalTime": "15:00", "departureTime": "15:00", "platform": 1, "distance": 0 },
                { "stationCode": data['code1'], "stationName": data['name1'], "arrivalTime": "23:00", "departureTime": "23:00", "platform": 1, "distance": 600 }
            ]
        })
        existing_trains.add(data['t2'])
        new_trains_added += 1

with open(trains_path, 'w') as f:
    json.dump(trains, f, indent=2)

with open(stations_path, 'w') as f:
    json.dump(stations, f, indent=2)

print(f"Added {new_trains_added} trains and {new_stations_added} missing stations.")
