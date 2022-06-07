<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/yan063/MiMail/tree/main/shopping"
        >GitHub地址</a
      ><span>|</span>
      <a href="https://github.com/yan063/MiMail/tree/main/shopping"
        >GitHub地址</a
      ><span>|</span>
      <a href="https://github.com/yan063/MiMail/tree/main/shopping"
        >GitHub地址</a
      ><span>|</span>
      <a href="https://github.com/yan063/MiMail/tree/main/shopping"
        >GitHub地址</a
      >
    </div>
    <div class="copyright">
      Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights
      Reserved.
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/config.scss";
.footer {
    // width: $min-width;
    font-size: $fontI;
  height: 234px;
  text-align: center;
  border: 4px solid $colorA;
  background-color: $colorB;
  .footer-logo {
    margin-top: 46px;    
    color: $colorD;
    img {
      height: 36px;
      width: 53px;
      margin-bottom:13px;
    }   
  }
  .footer-link {
      margin-top:31px;
    color: $colorD;    
    height: 46px;
    font-weight: 400;
    line-height: 28px;
    a {
      color: $colorD;
    }
    span{
        margin: 0 10px;
    }
  }
  .copyright{
      color: $colorD;
      .domain{
          color:$colorA;
      }
  }
}
</style>