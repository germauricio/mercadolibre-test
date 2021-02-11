const router = require('express').Router();
const itemsController = require('../controllers/itemsController');

router.get('/', itemsController.index);
router.get('/:id', itemsController.show);


module.exports = router;
