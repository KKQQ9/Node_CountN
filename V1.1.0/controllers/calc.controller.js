/**
 * `Controllers`只涉及逻辑处理，不涉及计算处理
 */
// 导出模块
module.exports.showMsg = function(req,res){
    let num = req.params.num;
    console.log(num);
}