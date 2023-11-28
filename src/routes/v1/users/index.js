const createUser = require("../../../api/v1/users/controllers/createUser");
const getAllUser = require("../../../api/v1/users/controllers/getAllUsers");
const getUser = require("../../../api/v1/users/controllers/getUser");

const router = require("express").Router();

router.get("/api/get/user", getUser)
router.get("/api/get/users", getAllUser)
router.post("/api/add/user", createUser);

module.exports = router;
