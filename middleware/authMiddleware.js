// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mi_secreto_super_seguro';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado, token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token no válido' });
  }
};

module.exports = authMiddleware;