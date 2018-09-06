
import csv
import random
import json
import datetime

csvfile = open('user_irr_data.csv', 'r')
tree_jsonfile = open('user_irr.json', 'w')
reader = csv.DictReader(csvfile,  delimiter=' ', fieldnames=['count', 'name'])

js = []
total = 0

for row in reader:
    data = {}
    total += int(row['count'])
    data['name'] = row['name']
    data['value'] = int(row['count'])
    js.append(data)

for j in js:
    j['value'] = j['value']/total

json.dump(js, tree_jsonfile)