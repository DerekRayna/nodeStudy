userHandle = {
  // 用户注册请求处理函数
  reguser: (req, res) => {
    console.log(req)
    res.end('reguser ok')
  },
  // 用户登录请求处理函数
  login: (req, res) => {
    console.log(req)
    res.end('login ok')
  }
}

module.exports = userHandle
