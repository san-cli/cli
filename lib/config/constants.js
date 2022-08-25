const {version} = require('../../package.json')
const actions = {
    create: {
       alias: "c",
       description: "create a project",
       examples: ["san-cli create <project-name>"],
    },
    "*": {
       alias: "",
       description: "command not found",
       examples: [],
    },
 }

module.exports={
    version,
    actions
}