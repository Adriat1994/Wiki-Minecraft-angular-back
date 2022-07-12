const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const biomeSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    features: { type: String, required: true },
    description: { type: String, required: true },    
    image: { type: String, require: true }
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo bioma
const Biome = mongoose.model('Biome', biomeSchema);
module.exports = Biome;