const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const passport = require('passport');

//DATABASE
const mongoose = require('mongoose');
const db = require('./models/dbconnect')
db.connect(); //make connection to Database

let Users = require('./models/user');

//========================= COMMENTED OLD =============================
// const User = mongoose.model('User');

//AUTHENTICATION
app.use(passport.initialize());

//TELL APP TO PARSE
app.use(bodyParser.urlencoded({ extended: false }));

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


//====GET ALL USERS END POINT===//

app.get('/users', cors(), function(req, res) {

  User.find({}, function(err, docs){

    if (err) return console.error(err);
    var results = [];
    results = docs;

    res.json(results);
  });

});

app.listen(port, () => console.log(`[Server] - Listening on port ${port}`));
