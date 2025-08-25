// para que funcione poner en bash $ node server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/imagenes', express.static('public/imagenes'));


// Configuración de la conexión a MySQL
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devices_db'
});

// Obtener todos los dispositivos
app.get('/devices', (req, res) => {
    db.query('SELECT * FROM devices', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Obtener un dispositivo por id
app.get('/devices/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM devices WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results[0] && results[0].reviews) {
            try {
                results[0].reviews = JSON.parse(results[0].reviews);
            } catch (e) {
                results[0].reviews = [];
            }
        }
        res.json(results[0]);
    });
});
// Actualizar un dispositivo
app.put('/devices/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, marca, descripcion, imagen, precio, reviews } = req.body;

    const sql = 'UPDATE devices SET nombre=?, marca=?, descripcion=?, imagen=?, precio=?, reviews=? WHERE id=?';
    const values = [nombre, marca, descripcion, imagen, precio, JSON.stringify(reviews), id];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Dispositivo actualizado', device: req.body });
    });
});



// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
