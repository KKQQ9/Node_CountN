/**
 * `Controllers`只涉及逻辑处理，不涉及计算处理
 */
/**
 * 导入`calcModel`&`fsModel`
 */
const calcModel = require('../models/calc.model');
const fsModel = require('../models/fs.model');
// 导出模块
module.exports.showMsg = function(req,res){
    let num = req.params.num;
    let start = new Date();
    fsModel.read(num,function(result){
        if(result === -1){
            // 此处必须使用var变量而不能用let 因为若result不进行变量提升则render的时候返回result空
            var  result = calcModel(num);
            fsModel.save(num,result);
        }
        res.render('appView',{
            result,
            t : new Date() - start,
        });
    });
}