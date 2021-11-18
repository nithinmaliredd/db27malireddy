var fan = require('../models/fan');
// List of all fan
exports.fan_list = async function (req, res) {
    try {
        thefan = await fan.find();
        res.send(thefan);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function (req, res) {
    try {
        thefan = await fan.find();
        res.render('fan', { title: 'fan Search Results', results: thefan });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};



// for a specific fan. 
exports.fan_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await fan.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 


// Handle fan create on POST. 
exports.fan_create_post = async function (req, res) {
    console.log(req.body)
    let document = new fan();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"fan_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand; 
    document.material = req.body.material; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle fan delete form on DELETE.
exports.fan_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await fan.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


//Handle fan update form on PUT. 
// Handle fan update form on PUT. 
exports.fan_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await fan.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.fan_type)  
               toUpdate.fan_type = req.body.fan_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle fan delete on DELETE.
exports.fan_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await fan.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };



   exports.fan_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await fan.findById(req.query.id)
        res.render('fandetail',
            { title: 'fan Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.fan_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('fancreate', { title: 'fan Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Handle building the view for updating a costume. 
// query provides the id 
exports.fan_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await fan.findById(req.query.id)
        res.render('fanupdate', { title: 'fan Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.fan_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await fan.findById(req.query.id)
        res.render('fandelete', {
            title: 'fan Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

