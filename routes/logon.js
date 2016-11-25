var express = require('express');
var router = express.Router();

router.get('/g', function(req, res, next) {
  res.send(req.query.username);
});

module.exports = router;