const createCourse = require('../../../api/v1/courses/controllers/createCourse')
const findAllCourses = require('../../../api/v1/courses/controllers/findAllCourses')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/api/get/courses', findAllCourses)
router.post("/api/add/course", createCourse)

module.exports = router