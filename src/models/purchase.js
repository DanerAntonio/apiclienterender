const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    items: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
