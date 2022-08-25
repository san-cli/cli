const {
    vueTsRepo,
    vueJSRepo,
    reactJSRepo,
    reactTsRepo,
    tsRepo,
 } = require("../config/repo")
 
 const answerMap={
     '01':tsRepo,
     '11':vueJSRepo,
     '12':vueTsRepo,
     '21':reactJSRepo,
     '22':reactTsRepo
 }

 module.exports=answerMap