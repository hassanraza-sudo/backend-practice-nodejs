const mongoose = require("mongoose");

const uri =
  "mongodb+srv://hassan:hassan@testdb.wcepo.mongodb.net/?retryWrites=true&w=majority&appName=testdb";

function connectDB() {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB Atlas!"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
}
module.exports = connectDB;
