const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')


router.get('/', gameController.allGames);
router.post('/newGame', gameController.addGame);
router.delete('/delete', gameController.removeGame)

module.exports = router;
