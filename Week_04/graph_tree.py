
import csv
import random
import json
import datetime

csvfile = open('temp.csv', 'r')
tree_jsonfile = open('tree.json', 'w')
reader = csv.DictReader(csvfile,  delimiter=' ', fieldnames=['count', 'name', 
                                                  
               ])

js = []
for row in reader:
    data = {}
    data['name'] = row['name']
    data['value'] = row['count']
    js.append(data)

json.dump(js, tree_jsonfile)
