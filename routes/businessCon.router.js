var express = require('express');
var router = express.Router();
let businessConController = require('../controllers/businessCon.controller');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}
/* GET users listing. */

router.get('/list',requireAuth, businessConController.businessConList);

// Routers for edit
router.get('/edit/:id',requireAuth, businessConController.displayEditPage);
router.post('/edit/:id',requireAuth, businessConController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',requireAuth, businessConController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',requireAuth, businessConController.processAddPage);


// Route for Delete
router.get('/delete/:id',requireAuth, businessConController.performDelete);

module.exports = router;
