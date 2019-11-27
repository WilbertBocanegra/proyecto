const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const personas = ({
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
    grado:String,
    grupo:String,
    turno:String,
    matricula:String,
    contraseña:String
});

module.exports = mongoose.model('personas',personas);
