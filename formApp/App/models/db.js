var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appProje', { useNewUrlParser: true }).then(
        () => {
            console.log('mongodb bağlantısı  sağlandı ');

        })
    .catch((err) => {
        console.log('bağlantı hatası');
    });