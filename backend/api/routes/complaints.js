const express = require("express");
const Complaint = require("../models/complaintModel");
const axios = require("axios");

const router = express.Router();

// 📌 Submit a Complaint (POST)
router.post("/", async (req, res) => {
  try {
    const { tweetName, complaint, location, source } = req.body;

    // Call ML Model for classification
    const mlResponse = await axios.post(process.env.ML_API_URL, { complaint });
    const { department, hashtag, status } = mlResponse.data;

    // Save complaint to MongoDB
    const newComplaint = new Complaint({
      tweetID: Math.random().toString(36).substr(2, 9), // Generate random ID
      tweetName,
      complaint,
      location,
      department,
      hashtag,
      status: status || "Pending",
      source,
    });

    await newComplaint.save();
    res.status(201).json({ success: true, message: "Complaint submitted!", data: newComplaint });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// 📌 Get Complaints (with filters)
router.get("/", async (req, res) => {
  try {
    const { department, status, location, hashtag, source } = req.query;
    let filter = {};

    if (department) filter.department = department;
    if (status) filter.status = status;
    if (location) filter.location = location;
    if (hashtag) filter.hashtag = hashtag;
    if (source) filter.source = source;

    const complaints = await Complaint.find(filter);
    res.status(200).json({ success: true, data: complaints });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;