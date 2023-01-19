const express = require('express');
const app = express()

const { Band, bands } = require('./models/band.model');

app.get('/api/bands', (req, res) => {
  res.status(200).json(bands);
});

app.post('/api/bands', (req, res) => {
  const newBand = new Band();
  bands.push(newBand);
  res.status(201).json(newBand);
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});