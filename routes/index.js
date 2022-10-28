var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/', indexController.home);

// Renders the projects page
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
