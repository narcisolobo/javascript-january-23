const express = require('express')
const app = express();

const cors = require('cors');
app.use(express.json(), cors());

const dotenv = require('dotenv');
dotenv.config();

const connectDb = require('./config/mongoose.config');
connectDb();

const albumRouter = require('./routes/album.routes');
app.use('/api/albums', albumRouter);

const colors = require('colors');
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(colors.bgCyan(`Listening on port ${PORT}`)));