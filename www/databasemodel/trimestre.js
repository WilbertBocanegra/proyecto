const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trimestre = new Schema({
    nombre:String,
    fecha_inicio:String,
    fecha_final:String,
    ciclo:String
});

module.exports = mongoose.model('trimestre',trimestre);
