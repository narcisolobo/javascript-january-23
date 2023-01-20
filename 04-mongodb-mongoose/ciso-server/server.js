const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const connectDb = require('./config/mongoose.config');
connectDb();

app.use(express.json());

const albumRouter = require('./routes/album.routes');
app.use('/api/albums', albumRouter);

const colors = require("colors");

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(colors.bgGreen(`Listening on port: ${PORT}`))
);
