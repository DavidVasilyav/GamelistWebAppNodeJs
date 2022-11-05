const express = require('express');
const router = express.Router();
const favoritConroller = require('../controllers/favoritController')

router.post('/favorit/:id', favoritConroller.addToFavorit);
router.post('/userFav', favoritConroller.userFavorit);
router.delete('/delete/:id', favoritConroller.removeFromFavorit)

module.exports = router;
