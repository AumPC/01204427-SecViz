
import csv
import random
import json
import math

csvfile = open('2018-07-Domestic Exchange.csv', 'r')
jsonfile = open('domestic.json', 'w')
reader = csv.DictReader(csvfile)
nodes = []
edges = []
size_node = {}
size_plus = 20
size_start = 80

source = [
    ["AS63529", "BKNIX (Bangkok Neutral Internet eXchange)"],
    ["AS4652", "CAT-IX (Bangrak/ Nonthaburi)"],
    ["AS45788", "BB Connect-IX (UIH/ BEENET)"],
    ["AS45667", "TCCT-IX "],
    ["AS45642", "JasTel-IX"],
    ["AS45458", "AWN-IX (SBN)"],
    ["AS45265", "CSL-IX"],
    ["AS38081", "TIG-IX"],
    ["AS37930", "TOT-IX"],
    ["AS133543", "DTAC-IX"],
    ["AS132880", "SYMC-IX"],
]

connect_type = {
    "IPv4": "#82CF61",
    "IPv6 Dual Stack": "#FFC94D",
    "IPv6 Native": "#C371FC",
    "Peering/ IPv6 Native": "#71FCE5"
}

colors = [
    "#99b433", "#00a300", "#1e7145", "#7e3878", "#603cba",
    "#1d1d1d", "#00aba9", "#2d89ef", "#2b5797", "#e3a21a",
    "#ee1111", "#b91d47", "#7F8C8D", "#76D7C4", 
]
colors_count = len(colors)

for row in source:
    node = {
        "color": colors[random.randint(0, colors_count-1)],
        "label": row[1],
        "x": random.randint(-1000, 1000),
        "y": random.randint(-1000, 1000),
        "id": row[0],
    }
    nodes.append(node)
    size_node[row[0]] = size_start

i = 1
for row in reader:
    if row['ASN'] not in size_node:
        node = {
            "color": colors[random.randint(0, colors_count-1)],
            "label": row['Name'],
            "x": random.randint(-1000, 1000),
            "y": random.randint(-1000, 1000),
            "id": row['ASN'],
        }
        nodes.append(node)
        size_node[row['ASN']] = size_start
    else:
        size_node[row['ASN']] += size_plus
    if row['ASN-Source'] not in size_node:
        size_node[row['ASN-Source']] = size_plus
    else:
        size_node[row['ASN-Source']] += size_plus
    edge = {
        "sourceID": row['ASN-Source'],
        "targetID": row['ASN'],
        "width": math.sqrt(float(row['Bandwidth'])),
        "color": connect_type[row['Connectivity Type']],
        "label": row['Connectivity Type'],
    }
    edges.append(edge)

for node in nodes:
    node["size"] = math.sqrt(size_node[node['id']])

data = {
    "nodes": nodes,
    "edges": edges,
}

json.dump(data, jsonfile)
