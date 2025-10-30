const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB Atlas
mongoose.connect("your-mongodb-connection-string")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Simple Route
app.get("/", (req, res) => {
  res.send("Hello from AWS EC2 Instance!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
