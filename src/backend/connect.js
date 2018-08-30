const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = Promise;

mongoose
  .connect(
    config.get('database:host'),
    { useMongoClient: true }
  )
  .then(() => {
    console.log('MongoDB server started');
  })
  .catch(err => err);

module.exports = mongoose;
