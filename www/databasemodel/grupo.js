const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grupos = new Schema({
    nombre:String,
});

module.exports = mongoose.model('grupos', grupos);
