const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clases = new Schema({
    nombre:String,
    asignatura:String,
    profesor:String,
    grupo:String,
    grado:String,
    turno:String,
    aula:String,
    hora:String
});

module.exports = mongoose.model('clases', clases);
