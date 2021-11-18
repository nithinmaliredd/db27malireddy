var express = require('express');
const fan_controlers= require('../controllers/fan');
var router = express.Router();


/* GET costumes */
router.get('/', fan_controlers.fan_view_all_Page);

 router.get('/detail', fan_controlers.fan_view_one_Page);

/* GET create costume page */
router.get('/create', fan_controlers.fan_create_Page);


router.get('/update', fan_controlers.fan_update_Page); 

router.get('/delete', fan_controlers.fan_delete_Page); 

module.exports = router;