var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index.controller');


router.get('/', indexController.home);


router.get('/projects', indexController.projects);

router.get('/services', indexController.services);





router.get('/about', function(req, res, next) {
  res.render(
    'about', 
    { 
      title: 'About Me',
     
    }
  );
});

router.get('/contact', function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact',
      
    }
  );
});

module.exports = router;
