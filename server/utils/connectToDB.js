const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.m1r5e.mongodb.net/my_blog",
      {
        useNewUrlParser: true,
        // useFindAndModify: false,
      },
    );
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = connectToDB;
