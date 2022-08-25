const getReportName=(name)=>{
    return `direct:https://github.com/san-cli/${name}.git#main`
}

const vueTsRepo=getReportName('vue-ts')
const vueJSRepo=getReportName('vue-js')
const reactJSRepo=getReportName('react-js')
const reactTsRepo=getReportName('react-ts')
const tsRepo=getReportName('ts')

const repoMap={
    '02':tsRepo,
    '11':vueJSRepo,
    '12':vueTsRepo,
    '21':reactJSRepo,
    '22':reactTsRepo
}

module.exports=repoMap