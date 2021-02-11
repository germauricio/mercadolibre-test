const router = require('express').Router();
const itemsController = require('../controllers/itemsController');

router.post('/:id', itemsController.index);


module.exports = router;
