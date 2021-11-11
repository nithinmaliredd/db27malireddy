var express = require('express');
const fan_controlers= require('../controllers/fan');
var router = express.Router();

/* GET fan */ 
router.get('/', fan_controlers.fan_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fan', { title: 'Search Results fan' });
});

module.exports = router;