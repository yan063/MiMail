<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(i, j) in item" :key="j">
                    <a :href="i ? '/#/product/' + i.id : ''">
                      <img v-lazy="i ? i.img : '/imgs/item-box-1.png'" alt="" />
                      {{ i ? i.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"
              ><img v-lazy="item.img" alt=""
            /></a>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          >
          <!-- 导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href=""><img v-lazy="'/imgs/mix-alpha.jpg'" alt="" /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in phoneList" :key="index">
              <div class="item" v-for="(i, j) in item" :key="j">
                <span v-bind:class="{'new-pro':j%2==0}">新品{{j}}</span>
                <div class="item-img">
                  <img v-lazy="i.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{i.name}}</h3>
                  <p>{{i.subtitle}}</p>
                  <p class="price" @click="addCart">{{i.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
      <modal 
    modalType="middle"
      title='提示'
      btnType="1"
      sureText="查看购物车"
      :showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal=false"
      >
      <template v-slot:body>
          <p>商品添加成功！</p>
      </template>
      </modal>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar.vue";
import Modal from "./../components/Modal.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal,
  },
  data() {
    return {
     
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
       showModal:false,
    };
  },
  mounted(){
      this.init();
  },
  methods:{
      init(){
          this.axios.get('/products',{
              params:{
                  categoryId:100012,
                  pageSize:14
              }
          }).then(res=>{              
              res.list=res.list.slice(6,14);
              this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)];
          })

      },
      goToCart(){
        this.$router.push('/cart');
      },
      addCart(){
        this.showModal=true; 
      }
  }
};
</script>
<style lang="scss" >
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            font-size: 16px;
            padding-left: 30px;
            color: #ffffff;
            display: block;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            position: absolute;
            top: 0px;
            width: 964px;
            height: 451px;
            margin-left: 264px;
            background-color: $colorG;
            ul {
              padding: 13px 0 0 23px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              li {
                // width: 25%;
                flex: 1;
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 35px;
                  height: 42px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-bottom: 50px;
    margin: 14px 14px 31px 0px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .product-box {
    margin-top: 50px;
    background-color: $colorJ;
    h2 {
      padding: 30px 0 20px 0;
      font-size: 22px;
      color: #333333;
      height: 21px;
    }
    .wrapper {
      padding-bottom: 50px;
      display: flex;
      .banner-left {
        width: 224px;
        height: 619px;
      }
      .list-box {
        .list {
          @include flex();
          .item {
            width: 236px;
            height: 302px;
            margin-left: 16px;
            margin-bottom: 14px;
            background-color: #ffffff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
            //   background-color: #7ecf68;
              color: #ffffff;
              font-size: 14px;
              line-height: 24px;
              &.new-pro{
                  background-color:#7ecf68;
              }
              &.kill-pro{
                  background-color:#E82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: #333333;
              }
              p {
                font-size: 12px;
                color: #999999;
                font-weight: bold;
                line-height: 13px;
                margin:6px auto 13px;
              }
              .price {                  
                font-size: 14px;
                font-weight: bold;
                color: #f20a0a;
               cursor:  pointer;
               &:after{
                   @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                   content:"";
                   margin-left:5px ;
                   vertical-align: middle;

               }
              }
            }
          }
        }
      }
    }
  }
}
</style>
