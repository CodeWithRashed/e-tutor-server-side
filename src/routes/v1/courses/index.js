const createCourse = require('../../../api/v1/courses/controllers/createCourse')
const findAllCourses = require('../../../api/v1/courses/controllers/findAllCourses')
const getCourseCount = require('../../../api/v1/courses/controllers/getCourseCount')
const patchUpdateCourse = require('../../../api/v1/courses/controllers/patchUpdateCourse')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/api/get/courses', findAllCourses)
router.get('/api/get/courseCount', getCourseCount)
router.post("/api/add/course", createCourse)
router.patch("/api/update/course", patchUpdateCourse);
module.exports = router