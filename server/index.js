const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect DB
connectDB();

// ✅ CORS CONFIG (allow frontend domain)
app.use(
  cors({
    origin: [
      "https://twenty20-portfolio-app-ao85.vercel.app"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight requests
app.options("*", cors());

// Body parser
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ IMPORTANT: EXPORT APP (NO app.listen FOR VERCEL)
module.exports = app;
