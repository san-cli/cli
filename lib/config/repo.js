const githubName='direct:https://github.com/'
const getReportName=(name)=>{
    return `direct:https://github.com/san-cli/${name}.git`
}
const vueTsRepo=getReportName('vue-ts')
const vueJSRepo=getReportName('vue-js')
const reactJSRepo=getReportName('react-js')
const reactTsRepo=getReportName('react-ts')
const tsRepo=getReportName('ts')



module.exports={
    vueTsRepo,
    vueJSRepo,
    reactJSRepo,
    reactTsRepo,
    tsRepo
}