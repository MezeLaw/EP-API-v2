const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error('Error al obtener los usuarios:', err);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.create({ name, email });
        res.json(user);
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

module.exports = router;
