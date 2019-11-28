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
    hora:String,
    alumnos:{
        nombre:String,
        asistencia:{
            type:Boolean,
            default:false
        },
        calificacion:{
            type:String,
            default:'0'
        }
    }
});

module.exports = mongoose.model('clases', clases);