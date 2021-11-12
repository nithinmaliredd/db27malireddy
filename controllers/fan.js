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
exports.fan_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fan delete DELETE ' + req.params.id);
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


