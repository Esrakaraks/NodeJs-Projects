var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var usersSchema = new Schema({
    ad: String,
    soyad: String,
    email: String,
    kullniciAdi: { type: String, required: true, unique: true },
    sifre: { type: String, required: true }
});

var User = mongoose.model(users, 'usersSchema');

module.exports = User;