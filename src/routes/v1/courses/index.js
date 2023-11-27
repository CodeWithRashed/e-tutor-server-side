const findAll = require('../../../api/v1/search/controllers/findAll')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/courses', findAll)


module.exports = router