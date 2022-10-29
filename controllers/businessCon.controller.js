/*
Author : Uday Sidhu
Student Id: 301237202
*/ 
let businessCon = require('../models/businessCon.model');

exports.businessConList = function(req, res, next) {  
    
    businessCon.find((err, businessConList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessCon/list', {
                title: 'businessCon List', 
                List: businessConList
            })            
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    let newItem = businessCon();

    res.render('businessCon/add_edit', {
        title: 'Add Business Info',
        item: newItem
    })          
}


module.exports.processAddPage = (req, res, next) => {
    let newItem = businessCon({
        _id: req.body.id,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        phone: req.body.phone
            });
    

    businessCon.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            console.log(item);
            res.redirect('/businessCon/list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    businessCon.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.render('businessCon/add_edit', {
                title: 'Item Edit', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = businessCon({
        _id: req.body.id,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        phone:req.body.phone
       
    });

    console.log('=================EDIT===============');
    console.log(updatedItem);

    businessCon.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/businessCon/list');
        }
    });
}





module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    businessCon.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/businessCon/list');
        }
    });
}