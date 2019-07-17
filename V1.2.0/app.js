// 引入express模块
const express = require('express');
// new line
// 导入自定义控制器
const calcController = require('./controllers/calc.controller');
// 定义一个应用
const app = express();
// 设置导入文件
app.use(express.static('public'))
// new line
app.get('/:num',calcController.showMsg);
// 声明端口
let port = 3000;
// 监听端口
app.listen(port,()=>{
    console.log(`服务已启动,当前路径http://localhost:${port}`);
})