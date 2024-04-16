import mongoose from 'mongoose'
require('dotenv').config();

// Función para conectar a la base de datos
async function conectarDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    
  }
}

module.exports = conectarDB;