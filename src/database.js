const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://master:321@cluster0.lqxe26r.mongodb.net/sistemaAPI',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Database is connected'));


const peliculaSchema = new mongoose.Schema({
    titulo: String,
    genero: String,
    director: String,
    actores: [String]
  });

const socioSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String,
    direccion: String,
    telefono: Number
});
  
const prestamoSchema = new mongoose.Schema({
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    pelicula: String,
    socio: Number,
    numeroCinta: Number
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);
const Socio = mongoose.model('Socio', socioSchema);
const Prestamo = mongoose.model('Prestamo', prestamoSchema);

  module.exports = {
    mongoose,
    Pelicula,
    Socio,
    Prestamo
  };