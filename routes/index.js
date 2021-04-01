var express = require('express');
var router = express.Router();
const indexController= require('../controlers/indexController')
/* GET home page. */
// router.get('/',indexController.index)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
