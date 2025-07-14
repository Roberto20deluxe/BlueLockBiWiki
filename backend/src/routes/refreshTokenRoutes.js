const express = require('express')
const router = express.Router()
const TokenController = require("../controllers/TokenController")

router.get('/token/verify', TokenController.newAccessToken)

module.exports = router;