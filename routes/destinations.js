var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.post('/:id/destinations', destinationsCtrl.create);
router.delete('/:id/destinations/:index', destinationsCtrl.delete);

module.exports = router;