import glob
import random
import json

path = './data/*.txt'
files = glob.glob(path)

jsonfile = open('web_log_tree.json', 'w')
jsonfile2 = open('file_tyep_tree.json', 'w')

hostname_egress = {}
hostname_ingress = {}
ingress = 0
egress = 0

type_egress = {"Undefine":0}

for filename in files:
    time = filename.split('web-anon-')[1].split('.0')[0]
    file_data = open(filename, 'r', encoding='utf8', errors='ignore')
    print(filename)
    for row in file_data:
        col = row.split(' ')
        if col[10][0:7] == "158.108" or col[10][0:3] == "10." or col[10][0:5] == "2406:" :
            egress += 1
            if col[16] not in hostname_egress:
                hostname_egress[col[16]] = {}
                hostname_egress[col[16]]['total'] = 0
            if time not in hostname_egress[col[16]]:
                hostname_egress[col[16]][time] = 0
            hostname_egress[col[16]][time] += 1
            hostname_egress[col[16]]['total'] += 1

            temp = col[17].split('?')[0].split(';')[0].split('/')[-1].split('.')
            if(len(temp) > 1):
                if '&' in temp[-1] or '=' in temp[-1] or ':' in temp[-1] or '%' in temp[-1]:
                    type_egress["Undefine"] += 1
                else :
                    if temp[-1] not in type_egress:
                        type_egress[temp[-1]] = 0
                    type_egress[temp[-1]] += 1
            else :
                type_egress["Undefine"] += 1
        if col[11][0:7] == "158.108" or col[11][0:5] == "2406:":
            ingress += 1
            if col[16] not in hostname_ingress:
                hostname_ingress[col[16]] = {}
                hostname_ingress[col[16]]['total'] = 0
            if time not in hostname_ingress[col[16]]:
                hostname_ingress[col[16]][time] = 0
            hostname_ingress[col[16]][time] += 1
            hostname_ingress[col[16]]['total'] += 1

data = sorted(hostname_egress.items(), key=lambda k: k[1]['total'])
hostname_egress_json = []
hostname_ingress_json = []

type_egress_json = {}

for key, value in sorted(hostname_egress.items(), key=lambda k: k[1]['total'], reverse=True):
    data = { "name": key, "value": hostname_egress[key]['total'], "children":[]}
    hostname_egress_json.append(data)
for key, value in sorted(hostname_ingress.items(), key=lambda k: k[1]['total'], reverse=True):
    data = { "name": key, "value": hostname_ingress[key]['total'], "children":[]}
    hostname_ingress_json.append(data)

# for key, value in sorted(type_egress.items(), key=lambda k: k[1]['total'], reverse=True):
#     type_egress_json[key] = value
# for key, value in sorted(hostname_ingress.items(), key=lambda k: k[1]['total'], reverse=True):
#     hostname_ingress_json[key] = value

# for host in hostname_egress_json:
#     temp = hostname_egress_json[host]
#     data = {}
#     data[]
#     print(temp)


print("Egress" ,egress)
print("INgress", ingress)

data = {
    "hostname_egress": hostname_egress_json,
    "hostname_ingress": hostname_ingress_json
}

json.dump(data, jsonfile)
json.dump(type_egress, jsonfile2)
