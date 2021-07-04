const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt')

const userRouter = require('./router/user.js') // 导入用户路由

require('./db'); // 连接数据库

const app = express() // express服务实例
app.use(cors()) // 注册跨域解决中间件
app.use(express.urlencoded({extended: false})) // 注册post请求表单（application/x-www-form-urlencoded）格式数据解析中间件
app.use(express.static('./public')); // 注册静态资源托管中间件

app.use('/api/user', userRouter)

app.listen(8081, () => {
  console.log('api server running at http://localhost:8081')
})
