var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/getCode', function(req, res, next) {
  res.json({ Result: -1 });
});

module.exports = router;
