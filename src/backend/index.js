const app = require('express')();
// const passport = require('passport');
// const mongoose = require('mongoose');
// const UserSchema = require('./Models/User');
const config = require('./config');

require('./connect');

// const User = mongoose.model('Users', UserSchema);

app.listen(config.get('server:port'), () => {
  console.log(`Server listen port: ${config.get('server:port')}`);
});
