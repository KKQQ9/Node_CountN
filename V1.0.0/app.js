// 引入express模块
const express = require('express');
// 定义一个应用
const app = express();
// 设置导入文件
app.use(express.static('public'))
// 声明端口
let port = 3000;
// 监听端口
app.listen(port,()=>{
    console.log(`服务已启动,当前路径http://localhost:${port}`);
})