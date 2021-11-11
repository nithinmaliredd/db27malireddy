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
exports.fan_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: fan detail: ' + req.params.id);
};
// Handle fan create on POST. 
exports.fan_create_post = async function (req, res) {
    console.log(req.body)
    let document = new fan();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
// Handle fan update form on PUT.
exports.fan_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: fan update PUT' + req.params.id);
};

