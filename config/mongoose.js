const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/codeial_development', {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('err');
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;