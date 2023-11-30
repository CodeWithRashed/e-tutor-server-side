const createCourse = require('../../../api/v1/courses/controllers/createCourse')
const findAndDeleteCourse = require('../../../api/v1/courses/controllers/deleteCourse')
const findAllCourses = require('../../../api/v1/courses/controllers/findAllCourses')
const getCourseCount = require('../../../api/v1/courses/controllers/getCourseCount')
const getTeachersCourse = require('../../../api/v1/courses/controllers/getTeachersCourse')
const patchUpdateCourse = require('../../../api/v1/courses/controllers/patchUpdateCourse')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/api/get/courses', findAllCourses)
router.get('/api/get/courseCount', getCourseCount)
router.get('/api/get/teachersCourse', getTeachersCourse)
router.post("/api/add/course", createCourse)
router.patch("/api/update/course", patchUpdateCourse);
router.delete("/api/delete/course", findAndDeleteCourse);
module.exports = router