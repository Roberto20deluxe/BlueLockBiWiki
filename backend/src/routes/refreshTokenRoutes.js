const express = require('express')
const router = express.Router()
const authController = require("../controllers/authController")
const refreshTokenController = require("../controllers/refreshTokenController")

router.get('/token/verify', refreshTokenController.newAccessToken)
router.post('/token', authController.authenticateToken, refreshTokenController.storeRefreshToken)

module.exports = router;