var express     = require('express');
var router      = express.Router();

/* GET */
router.get('/', function(req, res) {
  res.json({ method: "GET", status: "200"});
});

/* POST */
router.post('/', function(req, res) {
  res.json({ method: "POST", status: "200"});
});

/* PUT */
router.put('/:id', function(req, res) {
  res.json({ method: "PUT", status: "200", params: { id: req.params.id } });
});

/* DELETE */
router.delete('/:id', function(req, res) {
  res.json({ method: "DELETE", status: "200", params: { id: req.params.id } });
});

module.exports = router;


