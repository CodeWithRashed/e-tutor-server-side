
const { createAuthCookie, removeCookie } = require('../../../api/v1/authentication/controllers')

const router = require('express').Router()


router.post('/jwt', createAuthCookie)
router.post('/logout', removeCookie)

module.exports = router