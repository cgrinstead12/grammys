from pymongo import MongoClient
import pandas as pd

#setup user:password
mongo_uri = 'mongodb://grammy_user:Trilogyisthebest1@ds155841.mlab.com:55841/grammy_lab'
conn = MongoClient(mongo_uri)
db = conn.grammy_lab
collection_grammy = db.grammy_table

df = pd.read_csv("ml2018.csv")

#Drop Exisiting Mongo Collection
db.grammy_table.drop()

#Upload Data to Mongo
for index, row in df.iterrows():
    collection_grammy.insert_one({str(index): list(row.values)})

#Query Data from Mongo
df_grammy = pd.DataFrame()
collection = db.grammy_table.find()
for doc in collection:
    thevals = list(doc.values())[1] 
    df_grammy = df_grammy.append(pd.DataFrame([thevals]), ignore_index = True)