var express = require('express');
var router = express.Router();
var distance = require('google-distance-matrix');
/* GET users listing. */
router.post('/', function(req, res, next) {
const origins = req.body.origins;
const destinations = req.body.destinations;
 
distance.matrix(origins, destinations, function (err, distances) {
  if(err) throw err;
    if (!err)
        res.json(distances.rows);
})
});

module.exports = router;
