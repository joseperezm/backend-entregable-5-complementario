const mongoose = require('mongoose');
const Product = require('./products-mongoose'); // Ajusta la ruta según tu estructura de proyecto
const productsData = require('./products.json'); // Ajusta la ruta al archivo JSON

mongoose.connect('mongodb+srv://coderhouse:ihOXSjjIqf0DM7xT@jjpm.envjeyh.mongodb.net/ecommerce?retryWrites=true&w=majority')
.then(async () => {
  console.log('Conectado a MongoDB Atlas para la migración');

  // Limpiar la colección de productos si es necesario
  await Product.deleteMany({});

  // Insertar productos en la base de datos
  await Product.insertMany(productsData);

  console.log('Migración de productos completada');
  process.exit();
}).catch(err => console.error('Error al conectar a MongoDB Atlas', err));
