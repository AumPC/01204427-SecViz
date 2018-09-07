import glob
import random
import json
import datetime

topmost = [ "RMUn6owxz3Npjow@ku.ac.th",
 "RMUjtMPNJ6aT3TB@ku.ac.th", "RMUpKGYn9d5by4N@ku.ac.th", 
            "RMUpKmcaiQtXA57@ku.ac.th", "RMUkdLcDsnd6MSH@ku.ac.th", 
            # "RMUoaSzP7ZJYyJK@ku.ac.th", 
            # "RMUpKbutiWofd2x@ku.ac.th", "RMUnr8aAbM8vujj@ku.ac.th", "RMUnqxsXa4zFxGv@ku.ac.th", 
            # "RMUoaSzN7LdQ68x@ku.ac.th", 
            ]

jsonfile = open('topmost_timeline.json', 'w')
file_data = open('./data/web-anon-201704100300.0.txt', 'r', encoding='utf8', errors='ignore')

lists = []
ip_src = []
ip_dest = []
port_dest = []
hostname = []
time_sec = []

for row in file_data:
    col = row.split(' ')
    if col[4] in topmost:
        time = datetime.datetime.fromtimestamp(int(col[0])/1000000.0)
        time_temp = time.strftime('%H:%M:%S')
        temp = [time_temp, col[4], col[10], col[11], col[14], col[16]]
        if time_temp not in time_sec:
            time_sec.append(time_temp)
        if col[10] not in ip_src:
            ip_src.append(col[10])
        if col[11] not in ip_dest:
            ip_dest.append(col[11])
        if col[16] not in hostname:
            hostname.append(col[16])
        if col[14] not in port_dest:
            port_dest.append(col[14])
        lists.append(temp)
# hostname_egress_json = []
# hostname_ingress_json = []

# for key, value in sorted(hostname_egress.items(), key=lambda k: k[1]['total'], reverse=True):
#     data = { "name": key, "value": hostname_egress[key]['total'], "children":[]}
#     hostname_egress_json.append(data)

ip_dest = sorted(ip_dest, key=lambda x: int(x.split('.')[0]))
port_dest.sort(key=float)
hostname = sorted(hostname, key=lambda x: x.split('.')[0])

data = {
    "lists": lists,
    "ip_src": ["158.108.230.26", "158.108.238.46", "158.108.232.95",  "158.108.118.79", "10.34.14.230"],
    "ip_dest": ip_dest,
    "port_dest": port_dest,
    "hostname": hostname,
    "time" : time_sec
}
json.dump(data, jsonfile)
