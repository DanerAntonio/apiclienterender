const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Cargar variables de entorno
dotenv.config();

// Verificar la carga de la variable de entorno
console.log('MONGO_URI:', process.env.MONGO_URI); // Añade esta línea para depuración

// Crear la aplicación de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});

// Rutas de clientes
const purchaseRoutes = require('./src/routes/purchaseRoutes');
app.use('/api/purchase', purchaseRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
