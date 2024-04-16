import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './user.model.js';

// Función para iniciar sesión
export const login = async (req, res) => {
    try {
        // Buscar al usuario administrador por correo electrónico
        const user = await User.findOne({ email: 'anniemolina@gmail.com.com', rol: 'admin' });

        // Verificar si se encontró el usuario
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verificar la contraseña
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Generar un token JWT
        const token = jwt.sign({ userId: user._id }, 'secreto_del_token');

        // Enviar el token como parte de la respuesta
        res.json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
