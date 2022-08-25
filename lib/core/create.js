const { promisify } = require("util")
const download = promisify(require("download-git-repo"))

const inquirer = require("inquirer")
const answerMap = require("../config/answerMap")
// 使用框架
const useFrame = ()=>{
    return inquirer.prompt([
        {
            type: "list",
            name: "frame",
            message: "chose frame：",
            default: 0,
            choices: [
               { value: 0, name: "(no frame)" },
               { value: 1, name: "Vue" },
               { value: 2, name: "React" },
            ],
         }
    ])
}

// 使用語言
const useLang = ()=>{
    return inquirer.prompt([
        {
            type: "list",
            name: "lang",
            message: "chose lang：",
            default: 1,
            choices: [
               { value: 1, name: "JavaScript" },
               { value: 2, name: "TypeScript" },
            ],
         }
    ])
}

const createProjectAction = async (projectName) => {
   let anwser2 = {lang:2}

   const anwser1 = await useFrame()
   if (anwser1.frame !== 0) {
      lang = await useLang()
   }

  
   const result = `${anwser1.frame}${anwser2.lang}`
   console.log("fetch...")
   await download(answerMap[result], projectName, { clone: true })
   console.log("success!")
}

module.exports = createProjectAction
