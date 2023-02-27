const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('./database/config');

const { PORT } = process.env;

const app = express();
dbConnection();

app.use(cors());

app.use(express.static('public'));

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})
