const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// router
app.use("/api", require("./routers/api.route"));

// server and database
const port = process.env.SERVER_PORT || 5001;
const dbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/";
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
    connectDB(dbUrl);
})