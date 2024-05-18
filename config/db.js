const mongoose = require("mongoose");
require("dotenv").config(); 

const db = process.env.MONGO_URI; 

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Something went wrong with the database connection", error);
    process.exit(1);
  }
};

module.exports = connectDB;
