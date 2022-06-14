<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo ">
        <a href="/#/index"></a>
      </div>
      <div class="title ">
        <h2>
          {{title}} <slot name='tip'></slot>
        </h2>
      </div>
      <div class="username ">
          <a href="javascript:;">{{username}}</a></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "order-header",
  props: {
      title:String,
  },
  computed:{
      ...mapState(['username'])
  }
};
</script>
<style scoped lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.order-header {
  height: 112px;
  border-bottom: 2px solid #ff6600;
  padding: 30px 0; 
  box-sizing:border-box ;
  .container {
    .header-logo {
      float: left;
        }
    .title,
    .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      margin-left: 54px;
      float: left;
      h2 {
        font-size: 28px;
        color: #333333;
      }
      span {
        color: #999999;
        margin-left: 54px;
        font-size: 14px;
        font-weight: 200;
      }
    }
    .username {
      float: right;
      a {
        color: #666666;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>