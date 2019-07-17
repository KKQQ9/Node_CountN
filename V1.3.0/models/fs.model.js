const fs = require('fs');
// 读取
module.exports.read = function(num,callback){
    // ./data而不是../data，因为借助了controllers的位置
    fs.readFile(`./data/${num}.txt`,(err,data)=>{
        if(err){
        /**文件不存在
         * 1.计算
         * 2.存储
         * 3.渲染
         *  */
            callback(-1);
        }else{
        //直接渲染 //Buffer对象转数组 
            callback(data.toString().replace(/^\[|\]/ig,'').split(","))
        }
    });
}

// 存储
module.exports.save = function(num,result){
    // ./data而不是../data，因为借助了controllers的位置
    fs.writeFile(`./data/${num}.txt`,JSON.stringify(result),(err)=>{
        err ? console.log(`保存数据失败${err}`) : console.log("保存数据成功");
    });
}