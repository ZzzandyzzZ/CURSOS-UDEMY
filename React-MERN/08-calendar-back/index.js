const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
dbConnection();

app.use(express.static('public'));

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})
