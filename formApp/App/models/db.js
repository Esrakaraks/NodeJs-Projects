var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/udemy', { useNewUrlParser: true }).then(
        () => {
            console.log('mongodb bağlantısı  sağlandı ');

        })
    .catch((err) => {
        console.log('bağlantı hatası');
    });