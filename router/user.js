const express = require('express')
const router = express.Router()
const userHandle = require('../routerHandle/user.js')

// 注册
router.get('/reguser', userHandle.reguser)
// 登录
router.get('/login', userHandle.login)


module.exports = router
