var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var usersSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    collection: 'kullanicilar'
});

var User = mongoose.model('usersSchema', usersSchema);

module.exports = User;