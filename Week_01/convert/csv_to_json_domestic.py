
import csv
import random
import json

csvfile = open('2018-07-Domestic Exchange.csv', 'r')
jsonfile = open('domestic.json', 'w')
reader = csv.DictReader(csvfile)
nodes = []
edges = []
size_node = {}
size_start = 2

source = [{"id": AS9931, "label": CAT-ISP},
          {"id": AS7568, "label": CSL-IIG(CS Loxinfo) },
          {"id": AS58430, "label": TCCT-IIG},
          {"id": AS56309, "label": SiamData},
          {"id": AS4765, "label": Pacific Internet},
          {"id": AS4651, "label": CAT-IIG},
          {"id": AS45796, "label": BB Connect-IIG(UIH / BEENET) },
          {"id": AS45758, "label": Triple T Internet},
          {"id": AS45629, "label": JasTel-IIG},
          {"id": AS45458, "label": AWN-ISP(SBN)},
          {"id": AS45430, "label": AWN-IIG(SBN)},
          {"id": AS38794, "label": UIH(BeeNet)},
          {"id": AS38566, "label": NTT(TH)},
          {"id": AS38082, "label": TIG-IIG(TRUE)},
          {"id": AS38040, "label": TOT-IIG},
          {"id": AS24475, "label": ThaiREN},
          {"id": AS24187, "label": KIRZ},
          {"id": AS23884, "label": PROEN Internet},
          {"id": AS134509, "label": 1-TO-ALL},
          {"id": AS132876, "label": SYMC-IIG(Symphony)},
          {"id": AS10089, "label": DTAC-IIG},
          ]

colors = [
    "#C91F37", "#DC3023", "#9D2933", "#CF000F", "#E68364",
    "#F22613", "#CF3A24", "#C3272B", "#8F1D21", "#D24D57",
    "#F08F907", "#F47983", "#DB5A6B", "#C93756", "#F4D03F",
    "#FCC9B9", "#FFB3A7", "#F62459", "#F58F84", "#FFA400",
    "#875F9A", "#5D3F6A", "#89729E", "#763568", "#E08A1E",
    "#8D608C", "#A87CA0", "#5B3256", "#BF55EC", "#FFB61E",
    "#8E44AD", "#9B59B6", "#BE90D4", "#4D8FAC", "#FAA945",
    "#5D8CAE", "#22A7F0", "#19B5FE", "#59ABE3", "#48929B",
    "#317589", "#89C4F4", "#4B77BE", "#1F4788", "#FFA631",
    "#003171", "#044F67", "#264348", "#7A942E", "#FFB94E",
    "#8DB255", "#5B8930", "#6B9362", "#407A52", "#E29C45",
    "#006442", "#87D37C", "#26A65B", "#26C281", "#F9690E",
    "#049372", "#2ABB9B", "#16A085", "#36D7B7", "#CA6924",
    "#03A678", "#4DAF7C", "#D9B611", "#F3C13A", "#F5AB35",
    "#F7CA18", "#E2B13C", "#A17917", "#F5D76E", "#95A5A6",
    "#BFBFBF", "#F2F1EF", "#BDC3C7", "#ECF0F1", "#D2D7D3",
    "#757D75", "#EEEEEE", "#ABB7B7", "#6C7A89"
]
colors_count = len(colors)

for row in reader:
    if row['ASN'] not in size_node:
        node = {
            "color": colors[random.randint(0, colors_count-1)],
            "label": row['Name'],
            "attributes": {},
            "x": random.randint(-1000,1000),
            "y": random.randint(-1000,1000),
            "id": row['ASN'],
        }
        nodes.append(node)
        size_node[row['ASN']] = 6
    else:
        size_node[row['ASN']] += size_start
    if row['ASN-Source'] not in size_node:
        size_node[row['ASN-Source']] = size_start
    else:
        size_node[row['ASN-Source']] += size_start
    edge = {
        "sourceID": row['ASN-Source'],
        "attributes": {},
        "targetID": row['ASN'],
        "size": float(row['Bandwidth'])/10,
    }
    edges.append(edge)

for node in nodes:
    node["size"] = size_node[node['id']]

data = {
    "nodes": nodes,
    "edges": edges,
}

json.dump(data, jsonfile)
