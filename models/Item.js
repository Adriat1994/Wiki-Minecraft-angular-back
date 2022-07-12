const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const itemSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    description: { type: String, required: true },
    obtaining: { type: String, required: true },
    stack: { type: String, require: true },
    image: { type: String, require: true }
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo item
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;