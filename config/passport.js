/*
Author : Uday Sidhu
Student Id: 301237202
*/ 

const passport = require('passport');

module.exports = function() {
  const User = require('../models/users');
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  require('./local')();
};