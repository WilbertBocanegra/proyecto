const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiposangre = new Schema({
    nombre:String,
});

module.exports = mongoose.model('tiposangre',tiposangre);
