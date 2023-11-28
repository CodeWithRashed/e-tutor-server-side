const createCourse = require('../../../api/v1/courses/controllers/createCourse')
const findAll = require('../../../api/v1/search/controllers/findAll')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/courses', findAll)
router.post("/api/add/course", createCourse)

module.exports = router