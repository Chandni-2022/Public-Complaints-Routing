const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
    tweetID: { type: String, required: true },
    tweetName: { type: String, required: true },
    complaint: { type: String, required: true },
    location: { type: String, required: true },
    department: { type: String, required: true },
    hashtag: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Resolved", "In Progress"], default: "Pending" },
    sorce: { type: String,required:true }
}, { timestamps: true });

const Complaint = mongoose.model("Complaint", ComplaintSchema);

module.exports = Complaint;