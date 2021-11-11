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

// for a specific fan.
exports.fan_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: fan detail: ' + req.params.id);
};
// Handle fan create on POST.
exports.fan_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: fan create POST');
};
// Handle fan delete form on DELETE.
exports.fan_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fan delete DELETE ' + req.params.id);
};
// Handle fan update form on PUT.
exports.fan_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: fan update PUT' + req.params.id);
};