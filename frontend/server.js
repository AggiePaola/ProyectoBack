// para que funcione poner en bash $ node server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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
        res.json(results[0]);
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
