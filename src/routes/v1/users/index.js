const createUser = require("../../../api/v1/users/controllers/createUser");
const getAllUser = require("../../../api/v1/users/controllers/getAllUsers");
const getUser = require("../../../api/v1/users/controllers/getUser");
const getUserCount = require("../../../api/v1/users/controllers/getUserCount");
const getUserRole = require("../../../api/v1/users/controllers/getUserRole");
const patchUpdateUser = require("../../../api/v1/users/controllers/patchUpdateUser");
const updateUser = require("../../../lib/user/updateUser");

const router = require("express").Router();

router.get("/api/get/user", getUser)
router.get("/api/get/users", getAllUser)
router.get("/api/get/usersCount", getUserCount)
router.get("/api/get/userRole", getUserRole)
router.post("/api/add/user", createUser);
router.patch("/api/update/user", patchUpdateUser);

module.exports = router;
