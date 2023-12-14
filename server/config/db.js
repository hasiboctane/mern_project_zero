const mongoose = require("mongoose");

const connectDB = async (dbUrl) => {
    try {
        const conn = await mongoose.connect(dbUrl, {
            dbName: "project_zero",
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB