const bcrypt = require('bcrypt');
const User = require('../models/user'); // Reemplaza './models/User' con la ruta correcta a tu modelo de usuario

// Función para crear un usuario con la contraseña encriptada
async function createUser({ name, lastname, dni, email, password }) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, lastname, dni, email, password: hashedPassword });
        return user;
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        throw new Error('Error al crear el usuario');
    }
}

module.exports = {
    createUser
};
