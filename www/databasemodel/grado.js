const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grados = new Schema({
    nombre:String,
});

module.exports = mongoose.model('grados', grados);
