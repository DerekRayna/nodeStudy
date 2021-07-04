const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '795462',
  database: 'nodesudt'
})

// 测试mysql连接是否成功
// db.query('SELECT 1', (err, results) => {
//   if (err) return console.log(err.message)
//   console.log(results)
// })
// 查询
// const sqlStr = 'select * from user'
// db.query(sqlStr, (err, results) => {
//   if (err) return console.log(err.message)
//   console.log(results)
// })

// 插入
// const user = {name: 'Spider-Man', id: 3}
// const sqlStr = 'insert into user (name, id) value (?, ?)'

// db.query(sqlStr, [user.name, user.id], (err, results) => {
//   if(err) return console.log(err.message)
//   if (results) {
//     console.log(results, '插入数据成功')
//   }
// })
