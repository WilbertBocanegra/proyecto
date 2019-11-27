const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asignaturas = new Schema({
    nombre:String,
    descripcion:String
});

module.exports = mongoose.model('asignaturas', asignaturas);
