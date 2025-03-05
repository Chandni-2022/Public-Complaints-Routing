import pymongo
from config import config

# Connect to MongoDB
def get_db_connection():
    client = pymongo.MongoClient(config.MONGO_URI)
    db = client["webscrap"]
    return db

# Save classified complaint
def save_complaint(tweetID, tweetName, complaint, location, department, hashtag, status,source):
    db = get_db_connection()
    complaints_collection = db["mockdata3"]

    complaint_data = {
        "tweetID": tweetID,
        "tweetName": tweetName,
        "complaint": complaint,
        "location": location,
        "department": department,
        "hashtag": hashtag,
        "status": status,
        "source":source,

    }

    complaints_collection.insert_one(complaint_data)
    return {"message": "Complaint saved successfully!"}