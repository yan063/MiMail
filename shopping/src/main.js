import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router"
// import env from './env'
import VueLazyload from "vue-lazyload"
import VueCookie from 'vue-cookie'
import store from './store'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.prototype.axios=axios;
Vue.config.productionTip = false
//设置mock开关----本地集成API形式的mock
const mock=false;
if(mock){
  require('./mock/api');
}

// JSONP/cors方式 根据不同环境选择不同的基地址
// axios.defaults.baseURL = env.baseURL;

// fastmock手动设置的基地址
// axios.defaults.baseURL ="https://www.fastmock.site/mock/4bf96c2273a99a62ad153e6ab42a4967/api/"

axios.defaults.baseURL='/api';//因为采用了接口代理，所以这里是虚拟的地址
axios.defaults.timeout=8000;
//可以尝试一下请求拦截处理
// 对接口错误信息进行拦截
axios.interceptors.response.use(function (response){
  let res=response.data;
  let hash=location.hash;
      if (res.status==0){
        return res.data
      }else if(res.status==10){
        if(hash!='#/index'){
          window.location.href='/#/login'
        }        
      }else{
        Message.warning(res.msg);
        return Promise.reject(res);
      }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);

});
// 路由懒加载，加载时的默认动画
Vue.use(VueLazyload,{
  loading: '/imgs/loading-svg/loading-bars.svg',

});
Vue.use(VueCookie);
Vue.prototype.$message=Message;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
