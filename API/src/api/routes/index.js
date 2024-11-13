const express = require('express')
const router = express.Router()
const users = require('./users')
const students = require('./students')
const professionals = require('./professionals')

router.use(express.json())
router.use('/users', users)
router.use('/students', students)
router.use('/professionals', professionals)

module.exports = router