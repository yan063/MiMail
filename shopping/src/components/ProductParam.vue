<template>
  <div class="nav-bar" :class="{ is_Fixed: isFixed }">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductParam",
  props:{
      title:String,
  },
  data() {
    return {
      isFixed: false,
    //   title:'',
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    },
  },
  destoryed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
};
</script>
<style scoped lang='scss'>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.nav-bar {
  height: 69px;
  background-color: $colorG;
  &.is_Fixed {
    position: fixed;
    width: 100%;
    top: 0px;
    box-shadow:0 5px 5px $colorE;
    z-index:2;   
  }
  .container {
    @include flex();
    .pro-title {
      font-size: 18px;
      color: #333333;
      line-height: 60px;
      font-weight: bold;
    }
    .pro-param {
      color: #666666;
      a {
        font-size: 14px;
        color: #666666;
      }
      span {
        margin: 0 11px;
      }
    }
  }
}
</style>
