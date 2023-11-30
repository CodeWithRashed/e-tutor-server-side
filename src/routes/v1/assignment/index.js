const createAssignment = require('../../../api/v1/assignment/controllers/createAssignment')
const getAssignments = require('../../../api/v1/assignment/controllers/getAssignments')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/api/get/assignments', getAssignments)
router.post("/api/add/assignment", createAssignment)

module.exports = router