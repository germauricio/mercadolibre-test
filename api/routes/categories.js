const router = require('express').Router();// eslint-disable-line
const categoriesController = require('../controllers/categoriesController');

router.get('/item/:id', categoriesController.getItemCategory);
router.get('/:id', categoriesController.show);

module.exports = router;
