/*
Author : Uday Sidhu
Student Id: 301237202
*/ 
exports.home = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Home', 
        
      }
    );
  }

exports.projects = function(req, res, next) {
    res.render('projects',  { 
      title: 'Projects', 
      
    });
  }