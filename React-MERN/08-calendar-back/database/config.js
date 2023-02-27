const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.DB_CNN);
    console.log('DB connected')
  } catch (error) {
    console.log(error);
    throw new Error('Error al conectar con la BD');
  }
}

module.exports = {
  dbConnection,
}