const mongoose = require('mongoose');

// Definición del esquema del cliente
const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

// Exportar el modelo del cliente
module.exports = mongoose.model('Client', clientSchema);
