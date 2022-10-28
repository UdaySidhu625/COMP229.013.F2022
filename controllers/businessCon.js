// create a reference to the model
let businessCon = require('../models/businessCon');

module.exports.businessConList = function(req, res, next) {  
    businessCon.find((err, businessConList) => {
        // console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessCon/list', {
                title: 'businessCon List', 
                businessConList: businessConList
            })            
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
            //show the edit view
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
        phone : req.body.phone
    });

    // console.log(updatedItem);

    businessCon.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log("Working");
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