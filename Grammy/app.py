from flask import Flask, render_template, jsonify
from flask_pymongo import MongoClient
import time
from splinter import Browser
from bs4 import BeautifulSoup
import requests
import pandas as pd
import numpy as np
from pprint import pprint
import pymongo
from pymongo import MongoClient
import json
from bson.json_util import dumps
from selenium import webdriver
from bs4 import BeautifulSoup as bs
import time
from zipfile import ZipFile
import os
import time
import shutil
from datetime import datetime as dt
from pymongo import MongoClient
from flask_pymongo import PyMongo

app = Flask(__name__)
print(app)
url = 'mongodb://g1:g123456@ds119223.mlab.com:19223/grammydb'
client = MongoClient(url)
db = client['grammydb']

app.config["MONGO_URI"] = "mongodb://g1:g123456@ds119223.mlab.com:19223/grammydb"
mongo = PyMongo(app)

#("/") is the url
@app.route("/")
def index():
  
  jsongrammy = []
  collection = db.predict_ml_2018
  dbgrammy = collection.find()
  l = list(dbgrammy)
  for i in l:
    v = list(i.values())[1]
    jsongrammy.append(
       {
          "album_url" : v[0],
          "artist": v[1],
          "artist_followers" : v[2],
          "artist_image_url_l": v[3],
          "artist_image_url_s": v[4],
          "artist_popularity": v[5],
          "duration_ms": v[6],
          "features.acousticness": v[7],
          "features.analysis_url": v[8],
          "features.danceability": v[9],
          "features.duration_ms": v[10],
          "features.energy": v[11],
          "features.id": v[12],
          "features.instrumentalness": v[13],
          "features.key": v[14],
          "features.liveness": v[15],
          "features.loudness": v[16],
          "features.mode": v[17],
          "features.speechiness": v[18],
          "features.tempo": v[19],
          "features.time_signature": v[20],
          "features.track_href": v[21],
          "features.type": v[22],
          "features.uri": v[23],
          "features.valence": v[24],
          "lyric_total_word_count": v[25],
          "lyric_unique_word_count": v[26],
          "popularity": v[27],
          "release_date": v[28],
          "release_year": v[29],
          "song_id": v[30],
          "song_name": v[31],
          "track": v[32],
          "Predict_Prob": v[33],
          "Predict Result": v[34],
          "Rank": v[35]
       }
      )
    return render_template("index.html", jsongrammy=jsongrammy)

@app.route("/grammys")
def returnRoute():
  jsongrammy=[]
  collection = db.predict_ml_2018
  dbgrammy = collection.find()
  l = list(dbgrammy)
  for i in l:
    v = list(i.values())[1]
    jsongrammy.append(
      {
          "album_url" : v[0],
          "artist": v[1],
          "artist_followers" : v[2],
          "artist_image_url_l": v[3],
          "artist_image_url_s": v[4],
          "artist_popularity": v[5],
          "duration_ms": v[6],
          "features.acousticness": v[7],
          "features.analysis_url": v[8],
          "features.danceability": v[9],
          "features.duration_ms": v[10],
          "features.energy": v[11],
          "features.id": v[12],
          "features.instrumentalness": v[13],
          "features.key": v[14],
          "features.liveness": v[15],
          "features.loudness": v[16],
          "features.mode": v[17],
          "features.speechiness": v[18],
          "features.tempo": v[19],
          "features.time_signature": v[20],
          "features.track_href": v[21],
          "features.type": v[22],
          "features.uri": v[23],
          "features.valence": v[24],
          "lyric_total_word_count": v[25],
          "lyric_unique_word_count": v[26],
          "popularity": v[27],
          "release_date": v[28],
          "release_year": v[29],
          "song_id": v[30],
          "song_name": v[31],
          "track": v[32],
          "Predict_Prob": v[33],
          "Predict Result": v[34],
          "Rank": v[35]
       }
      )
  return jsonify(jsongrammy)  

@app.route("/historical")
def returnRoutes():
  jsongrammy_1=[]
  collection_1 = db.historical
  dbgrammy_1 = collection_1.find()
  l = list(dbgrammy_1)
  for i in l:
    v = list(i.values())[1]
    jsongrammy_1.append(
      {
            "artist": v[0],
            "artist_followers" : v[1],
            "artist_popularity": v[2],
            "duration_ms": v[3],
            "acousticness": v[4],
            "analysis_url": v[5],
            "danceability": v[6],
            "duration_ms.1": v[7],
            "energy": v[8],
            "id": v[9],
            "instrumentalness": v[10],
            "key": v[11],
            "liveness": v[12],
            "loudness": v[13],
            "mode": v[14],
            "speechiness": v[15],
            "tempo": v[16],
            "time_signature": v[17],
            "track_href": v[18],
            "type": v[19],
            "uri": v[20],
            "valence": v[21],
            "lyric_total_word_count": v[22],
            "lyric_unique_word_count": v[23],
            "popularity": v[24],
            "release_date": v[25],
            "release_year": v[26],
            "song_id": v[27],
            "song_name": v[28],
            "track": v[29],
            "win/loss": v[30],
            "Category": v[31],
            "win_loss": v[32]
       }
      )
  return jsonify(jsongrammy_1)  

@app.route('/model_factors')
def model_factors():
  
  return render_template('charts.html')

@app.route('/data')
def data_factors():
  
  return render_template('data.html')

if __name__ == "__main__":
  app.run(debug=True)