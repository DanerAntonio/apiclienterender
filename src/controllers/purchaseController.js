const Purchase = require('../models/purchase');

// Crear una compra
exports.createPurchase = async (req, res) => {
  try {
    const newPurchase = new Purchase(req.body);
    await newPurchase.save();
    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las compras
exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find().populate('clientId');
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una compra
exports.updatePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una compra
exports.deletePurchase = async (req, res) => {
  try {
    await Purchase.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Compra eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
