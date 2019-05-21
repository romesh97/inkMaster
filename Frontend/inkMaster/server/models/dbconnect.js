var mongoose = require('mongoose');
// const dbUri = 'mongodb://localhost:27017/inkMaster';

const dbUri = 'mongodb://127.0.0.1:27017/inkMaster';

module.exports.connect = () => {

  mongoose.connect(dbUri, { useNewUrlParser: true });

  mongoose.Promise = global.Promise;

  var db = mongoose.connection;

  db.on('error', (err) => {
    console.error.bind(console, 'MongoDB connection error:')
  });

  db.once('open', function() {
    console.info('[MongoDB] - Connection opened succesfully!');
  });

  require('./user');

}
