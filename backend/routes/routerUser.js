const express = require('express');
const registerController = require('../controllers/registerController');
const UserController = require('../controllers/userController');
const router = express.Router();

router.post("/register", registerController.register);
router.post("/login", UserController.login);
router.get('/', UserController.allUsers);

module.exports = router;