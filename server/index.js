const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Beispielroute
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// MongoDB Verbindung
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`)))
  .catch(err => console.error('MongoDB-Verbindung fehlgeschlagen', err));