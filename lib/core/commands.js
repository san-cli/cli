const {actions} =require('../config/constants')
const program=require('commander')
const path=require('path')

const commands=()=>{
   Reflect.ownKeys(actions).forEach((action) => {
      program
         .command(action) // 配置命令名称
         .alias(actions[action].alias) // 配置命令别名
         .description(actions[action].description) // 配置命令描述
         .action(() => {
            if (action === "*") {
               console.log(actions[action].description)
            } else {
               require(path.resolve(__dirname, action))(...process.argv.slice(3))
            }
         })
   })
}

module.exports=commands