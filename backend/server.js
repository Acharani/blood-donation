// 1. Import packages
const express = require("express");
const cors = require("cors");

// 2. Create app
const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json());

// 👉 Temporary storage
let donors = [];

// 4. Routes
app.get("/", (req, res) => {
  res.send("Backend working");
});

// ✅ Save donor
app.post("/donors", (req, res) => {
  console.log(req.body);
  donors.push(req.body);   // 🔥 store data
  res.send("Donor saved");
});

// ✅ ADD THIS (missing part)
app.get("/donors", (req, res) => {
  res.json("Donors route working");
});

// 5. Start server
app.listen(5000, () => {
  console.log("Server running on 5000");
});