from pymongo import MongoClient
'''client = MongoClient('example.com',  username='', password='', authMechanism='MONGODB-CR')'''
uri = "mongodb://localhost:27017"
client = MongoClient(uri)
db = client.get_database('doctorDB')
collection = db.get_collection('doctorSolution')
filter = {  "disease" : "nenju sali" }
newvalues = { "$set": { 'diagnosis': ['coughing and yellow discharge from mouth', 'breathing problem']} }
res = collection.update_one(filter, newvalues)


for user in collection.find():
  print(user)
