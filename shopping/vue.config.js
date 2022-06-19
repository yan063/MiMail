module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            "api":{
                target:'http://mall-pre.springboot.cn',//
                changeOrigin:true,
                pathRewrite:{
                    "api":""
                }
            }

        }
    }
    ,
    // lintOnSave:false;关闭link校验
    // publicPath:'/app',//打包前需要确认项目是否在根目录下，如果不在，可以加一个publicPath为二级目录，以便项目可以访问
    // outputDir:"dest",//打包后的项目目录名字
    // indexPath:'index2.html',//打包后页面的名字
    // filenameHashing:false,//浏览器带有缓存，设置为false,将关闭缓存，一般为true
    productionSourceMap:true,
    chainWebpack:(config)=>{//删除路由懒加载的预加载
        config.plugins.delete('prefetch');
    }

}