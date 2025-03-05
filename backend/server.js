const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("./config/db"); // Connects to MongoDB
const complaintRoutes = require("./routes/complaints");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/complaints", complaintRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));