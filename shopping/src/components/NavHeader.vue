<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart" @click="goToCart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product/' + item.id" target="_black">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redimi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_black">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>

                <li class="product">
                  <a href="" target="_black">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米全面屏</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_black">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="" />
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_black">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_black">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_black">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="" />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
      username: "",
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            // pageSize:6
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang='scss' scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    background-color: #333333;
    line-height: 39px;
    .container {
      font-size: 12px;
      @include flex();
      a {
        color: #ffffff;
        display: inline-block;
        margin-right: 17px;
      }
      .topbar-user {
        a {
          color: #ffffff;
          display: inline-block;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: #ffffff;
          .icon-cart {
            @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
            margin-right: 4px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      .header-logo {
        width: 55px;
        height: 55px;
        display: inline-block;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: ""; //设置占位
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: margin 0.2s;
          }
          &:after {
            content: ""; //设置占位
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
            transition: margin 0.2s;
          }
          &:hover:before {
            display: inline-block;
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              border-top: 1px solid #e5e5e5;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            z-index: 10;
            height: 0;
            opacity: 0;
            overflow: hidden;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              font-size: $fontK;
              text-align: center;
              line-height: 12px;
              height: 220px;
              &:before {
                content: "";
                height: 99px;
                right: 0;
                margin-top: 29px;
                position: absolute;
                border-left: 1px solid $colorF;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                margin-top: 19px;
                font-weight: bold;
                color: $colorB;
              }
              .pro-price {
                margin-top: 8px;
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            width: 263px;
            height: 50px;
            border: none;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>