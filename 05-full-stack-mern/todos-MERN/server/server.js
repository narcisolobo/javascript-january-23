const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config');
connectDb();

// require('./server/routes/person.routes')(app) <- PLATFORM
const todoRouter = require('./routes/todo.routes');
app.use('/api', todoRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
