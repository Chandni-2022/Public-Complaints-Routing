const mongoose = require("mongoose");
const Complaint = require("./schema");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected for Seeding"))
    .catch(err => console.error("DB Connection Error:", err));

const complaints = [
    {
        tweetID: "123456",
        tweetName: "User123",
        complaint: "Water leakage in my area for 5 days",
        location: "New York",
        department: "Water Department",
        hashtag: "#watercrisis",
        status: "Pending",
        source:"twitter"
    },
    {
        tweetID: "789012",
        tweetName: "CitizenX",
        complaint: "Street lights not working for a week",
        location: "Los Angeles",
        department: "Electricity Board",
        hashtag: "#powerissue",
        status: "In Progress",
        source:"facebook"
    }
];

// Insert Data
const seedDB = async () => {
    try {
        await Complaint.deleteMany({});
        await Complaint.insertMany(complaints);
        console.log("Database Seeded Successfully!");
    } catch (error) {
        console.error("Error Seeding Database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();