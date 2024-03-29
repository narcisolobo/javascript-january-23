const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect("mongodb://localhost/todosMernDb", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      retryWrites: true,
    })
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};

module.exports = connectDb;
