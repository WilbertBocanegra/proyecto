const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calificaciones = new Schema({
    nombre:String,
    clase:String,
    trimestre:String,
    calificacion:{
        type:String,
        default:'0'
    },
    asistencia:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('calificaciones', calificaciones);
