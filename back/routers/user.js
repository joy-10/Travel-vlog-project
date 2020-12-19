const express = require("express")
const router = express.Router()
const {signup,signin,account} = require('../controllers/user')
const {isAuthenticated,isAdmin} = require('../middleware/iswho')

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/account',isAuthenticated,account)


module.exports = router