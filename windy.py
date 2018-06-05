# -*- coding: utf-8 -*-
"""
Created on Thu May 31 18:21:47 2018

@author: tlynch
"""



d = {
'timestamp': "12:26 pm on May 31, 2018",
'x0': -130.103438,
'y0': 20.191999,
'x1': -60.885558,
'y1': 52.807669,
'gridWidth': 501.0,
'gridHeight': 237.0}

col1 = np.zeros_like(np.arange(501*237))
col2 = np.zeros_like(np.arange(501*237))

fields = np.vstack((col1, col2))


fields[0:2, 500:550] = np.full((2,50), 8)


x = fields.tolist()

d.update({"field" : x})

def write_to_javascript():
    s = 'var x = {{temp}};'.replace("{{temp}}", str(d))
    for key in d:
        print("'" + key + "'", key)
        s = s.replace("'" + key + "'", key)
    
    
    
import json
with open('H:\T\d3\windy\wind-data1.js', 'w') as outfile:
    x = json.dumps(d, separators=(',',':'))