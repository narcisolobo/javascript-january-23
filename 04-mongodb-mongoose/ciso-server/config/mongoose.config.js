const mongoose = require("mongoose");
const colors = require("colors");

/*
First arg = connection string
Second arg = options to configure
If version 6 of mongodb, you do not need
    useNewUrlParser: true,
    useUnifiedTopology: true,
*/
const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGO_URI, {
      retryWrites: true,
    })
    .then(() => console.log(colors.bgMagenta("DB Connection established.")))
    .catch((err) => console.log("Something went wrong...", err));
};

module.exports = connectDb;
