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


router.get('/list',requireAuth, businessConController.businessConList);


router.get('/edit/:id([0-9a-fA-F]{24})',requireAuth, businessConController.displayEditPage);
router.post('/edit/:id',requireAuth, businessConController.processEditPage);


router.get('/add',requireAuth, businessConController.displayAddPage);

router.post('/add',requireAuth, businessConController.processAddPage);


router.get('/delete/:id',requireAuth, businessConController.performDelete);

module.exports = router;
