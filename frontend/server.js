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


//conexion a MySQL
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devices_db'
});

//obtener toda la data
app.get('/devices', (req, res) => {
    db.query('SELECT * FROM devices', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// GET
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
// POST 
app.post('/devices', (req, res) => {
    const { nombre, marca, descripcion, imagen, precio, reviews } = req.body;

    const sql = 'INSERT INTO devices (nombre, marca, descripcion, imagen, precio, reviews) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [nombre, marca, descripcion, imagen, precio, JSON.stringify(reviews || [])];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
            message: 'Dispositivo creado',
            device: { id: result.insertId, nombre, marca, descripcion, imagen, precio, reviews }
        });
    });
});
// Delete desde postman
app.delete('/devices/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM devices WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Dispositivo no encontrado' });
        }

        res.json({ message: 'Dispositivo eliminado', id });
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
