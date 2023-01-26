const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      retryWrites: true,
    })
    .then(() => console.log(colors.bgGreen("Established a connection to the database")))
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};

module.exports = connectDb;