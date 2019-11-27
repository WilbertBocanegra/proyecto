const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const personas = new Schema({
    nombre:String,
    apaterno:String,
    amaterno:String,
    sexo:String,
    tipopersona:String,
    tiposangre:String,
    telefono:String,
    direccion:String,
    correo:String,
    curp:String,
    señasparticulares:String,
    rfc:String,
    matricula:String,
    contraseña:String,
    grado:String,
    grupo:String,
    turno:String,
    foto_ine:String,
    nombretutor:String
});

module.exports = mongoose.model('personas',personas);
