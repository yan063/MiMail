import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home"
import Index from "./pages/index"
import Product from "./pages/product"
import Detail from "./pages/detail"
import Order from "./pages/order"
import OrderList from "./pages/orderList"
import OrderPay from "./pages/orderPay"
import OrderConfirm from "./pages/orderConfirm"
import OrderAlipay from "./pages/orderAlipay"
import Login from "./pages/login"
import Register from "./pages/register"
import Cart from "./pages/cart"

Vue.use(Router);

 export default new Router({
     routes:[{
        path:'/',
        name:'home',
        redirect:'index',//默认页面
        component:Home,
        children:[
            {
                path:'/index',
                name:'index',
                component:Index,

            },{
                path:'/product/:id',
                name:'product',
                component:Product,
            },
            {
                path:'/detail/:id',
                name:'detail',
                component:Detail,
            }
        ]
     },{
        path:'/login',
        name:'login',
        component:Login,
     },
     {
        path:'/register',
        name:'register',
        component:Register,
     },
     {
        path:'/cart',//购物车界面
        name:'cart',
        component:Cart,
     },
     {
        path:'/order',
        name:'order',
        component:Order,
        children:[
            {
                path:'confirm',
                name:'order-confirm',
                component:OrderConfirm,
            },{
                path:'list',
                name:'order-list',
                component:OrderList,
            },
            {
                path:'pay',
                name:'order-pay',
                component:OrderPay,
            },
            {
                path:'alipay',
                name:'alipay',
                component:OrderAlipay,
            }
        ]         
     }

     ]

 })