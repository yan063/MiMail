<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data(){
return {
  res:{}
}
  },
  mounted(){
    // storage.setItem('a','111');
    // 本地加载JSON文件形式----需要把main.js里面的基地址删除,在public里面创建mock文件夹
    // axios.get('/mock/user/login.json').then(
    //   (res)=>{
    //     this.res=res;
    //   }
    // )
    // esay-mock的方式---需要自己部署  这里使用fastmock 需要手动在main.js设置baseURL
    axios.get('/user/login').then(
      (res)=>{
        this.res=res;
      }
    )
    // 本地集成API的方式需要在src下面创建mock
    // axios.get('/user/login').then(
    //   (res)=>{
    //     this.res=res;
    //   }
    // )
    
  }
}
</script>

<style>

</style>
