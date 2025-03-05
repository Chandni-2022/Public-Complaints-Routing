const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  tweetID: { type: String, required: true, unique: true },
  tweetName: { type: String, required: true },
  complaint: { type: String, required: true },
  location: { type: String, required: true },
  department: { type: String, required: true },
  hashtag: { type: String, required: true },
  status: { type: String, default: "Pending" },
  source: { type:String,default:"twitter"},
}, { timestamps: true });

module.exports = mongoose.model("Complaint", complaintSchema);