from pymongo import MongoClient
'''client = MongoClient('example.com',  username='', password='', authMechanism='MONGODB-CR')'''
uri = "mongodb://localhost:27017"
client = MongoClient(uri)
db = client.get_database('doctorDB')
collection = db.get_collection('doctorAuth')
for user in collection.find():
  print(user)
