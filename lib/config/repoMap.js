const getReportUrl=(name)=>{
    return `direct:https://github.com/san-cli/${name}.git#main`
}

const vueTsRepo=getReportUrl('vue-ts')
const vueJSRepo=getReportUrl('vue-js')
const reactJSRepo=getReportUrl('react-js')
const reactTsRepo=getReportUrl('react-ts')
const tsRepo=getReportUrl('ts')

const repoMap={
    '02':tsRepo,
    '11':vueJSRepo,
    '12':vueTsRepo,
    '21':reactJSRepo,
    '22':reactTsRepo
}

module.exports=repoMap