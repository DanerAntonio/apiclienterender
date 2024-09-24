const express = require('express');
const router = express.Router();
const Client = require('../models/clienteModel'); // Importar el modelo de Cliente

// Obtener todos los clientes
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Ruta para registrar un cliente
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        // Crear un nuevo cliente
        const newClient = new Client({ name, email, phone, address });

        // Guardar cliente en la base de datos
        await newClient.save();

        res.status(201).json({ message: 'Cliente registrado con éxito', client: newClient });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al registrar cliente' });
    }
});
// Actualizar un cliente
router.put('/:id', async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un cliente
router.delete('/:id', async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
