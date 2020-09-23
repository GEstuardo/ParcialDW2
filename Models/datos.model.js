const { text } = require("body-parser");
//importamos mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definimos el esquema que quermos utilizar
let parcial2Schema = new Schema({
  dpi: { type: Number, required: true, max: 13 },
  nit: { type: Number, required: true },
  name1: {type: String, required: true },
  name2: {type: String, required: true },
  apellido1: {type: String, required: true },
  apellido2: {type: String, required: true },
  nac: {type: String, required: true },
  apellido3: {type: Date, required: true },
  nominal: {type: String, required: true },
  funcional: {type: String, required: true },
  area: {type: String, required: true },
  email: {type: String, required: true },
  email2: {type: String, required: true },
  telefono1: {type: String, required: true },
  telefono2: {type: String, required: true }, 


});

// exportamos el modelo para usar desde otros módulos
module.exports = mongoose.model("Parcial2", parcial2Schema);
