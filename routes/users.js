var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('showing all of user list!');
});
router.get('/blocked', function(req, res, next) {
  const blockedUsers = [{
    uuid: Math.random().toString(),
    name: "Budi",
    address: "Jl.Mangga"
  },
  {
    uuid: Math.random().toString(),
    name: "Joko",
    address: "Jl.Mangga"
  }]
  res.status(200).json({payload: blockedUsers});
});
module.exports = router;