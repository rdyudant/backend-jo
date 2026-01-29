const express = require('express')
const router = express.Router()
const controller = require('../controllers/jobOrder-controller')

router.get('/', controller.getAllJO)
router.post('/', controller.createJO)

module.exports = router