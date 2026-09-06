const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(`mongodb://localhost:${process.env.PORT_MONGO}/${process.env.DATABASE_NAME}`, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log("Connect database success");
  } catch (error) {
    console.log("MongoDB is unavailable. Public read APIs will use demo data.");
  }
}

module.exports = connectDatabase;
