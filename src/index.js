const express = require('express');
const app = express();
const { mongoose, Pelicula, Socio, Prestamo } = require('./database');
const PORT = 3000;

app.use(express.json());

app.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await Pelicula.find({});
    
        res.json(peliculas);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las películas', error: error.message });
      }
});

app.get('/peliculasOrdenTitulo', async (req, res) => {
    try {
      const peliculas = await Pelicula.find({}).sort({ titulo: 1 }); // Orden ascendente por título
  
      res.json(peliculas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las películas', error: error.message });
    }
  });
  

app.post('/peliculas', async (req, res) => {
    try {
        const nuevaPelicula = new Pelicula(req.body);
    
        const peliculaGuardada = await nuevaPelicula.save();
    
        res.status(201).json(peliculaGuardada);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la película', error: error.message });
    }
});
  
app.get('/prestamos', async (req, res) => {
    try {
        const prestamos = await Prestamo.find({});
    
        res.json(prestamos);
        } catch (error) {
        res.status(500).json({ message: 'Error al obtener los prestamos', error: error.message });
        }
});

app.post('/prestamos', async (req, res) => {
    try {
        const nuevoPrestamo = new Prestamo(req.body);
    
        const prestamoGuardado = await nuevoPrestamo.save();
    
        res.status(201).json(prestamoGuardado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el prestamo', error: error.message });
    }
});


app.get('/socios', async (req, res) => {
    try {
        const socios = await Socio.find({});
    
        res.json(socios);
        } catch (error) {
        res.status(500).json({ message: 'Error al obtener los socios', error: error.message });
        }
});

app.post('/socios', async (req, res) => {
    try {
        const nuevoSocio = new Socio(req.body);
    
        const socioGuardado = await nuevoSocio.save();
    
        res.status(201).json(socioGuardado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el socio', error: error.message });
    }
});

app.listen(PORT)
console.log(`Server on port ${PORT}`)

