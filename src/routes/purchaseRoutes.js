const express = require('express');
const router = express.Router();
const Purchase = require('../models/purchase'); // Asegúrate de que el modelo está correcto

// Ruta para registrar una compra
router.post('/', async (req, res) => {
    try {
        const { clientId, productId, quantity, price } = req.body;

        // Mostrar en consola los datos recibidos para verificar
        console.log('Datos recibidos:', { clientId, productId, quantity, price });

        // Validar los campos (opcional)
        if (!clientId || !productId || !quantity || !price) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        // Crear una nueva compra
        const newPurchase = new Purchase({
            clientId,
            productId,
            quantity,
            price,
        });

        // Guardar la compra en la base de datos
        await newPurchase.save();

        res.status(201).json({ message: 'Compra registrada con éxito', purchase: newPurchase });
    } catch (error) {
        console.error('Error al registrar la compra:', error.message);
        res.status(500).json({ error: 'Error al registrar la compra' });
    }
});

module.exports = router;
