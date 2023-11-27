const createUser = require("../../../api/v1/users/controllers/createUser");

const router = require("express").Router();

router.post("/api/add/user", createUser);

module.exports = router;
