const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const animalSchema = new Schema(
  {
    name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    description: { type: String, required: true },
    spawning: { type: String, required: true },
    behavior: { type: String, require: true },
    image: { type: String, require: true }
  },
  {
    // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
    timestamps: true,
  }
);

// Creamos y exportamos el modelo animal
const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;