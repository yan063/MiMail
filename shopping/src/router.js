import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home"
import Index from "./pages/index"
// import Product from "./pages/product"
// import Detail from "./pages/detail"
// import Order from "./pages/order"
// import OrderList from "./pages/orderList"
// import OrderPay from "./pages/orderPay"
// import OrderConfirm from "./pages/orderConfirm"
// import OrderAlipay from "./pages/orderAlipay"
// import Login from "./pages/login"
// import Register from "./pages/register"
// import Cart from "./pages/cart"

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        redirect: 'index',//默认页面
        component: Home,
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index,

            }, {
                path: '/product/:id',
                name: 'product',
                component: () => import('./pages/product.vue'),
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: () => import('./pages/detail.vue'),
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        // component:resolve=>require(['./pages/login.vue'],resolve),
        component: () => import('./pages/login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./pages/register.vue'),
    },
    {
        path: '/cart',//购物车界面
        name: 'cart',
        // component:Cart,
        component: () => import('./pages/cart.vue'),
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('./pages/order.vue'),
        children: [
            {
                path: 'confirm',
                name: 'order-confirm',
                // component:OrderConfirm,
                component: () => import('./pages/orderConfirm.vue'),

            }, {
                path: 'list',
                name: 'order-list',
                // component:OrderList,
                component: () => import('./pages/orderList.vue'),

            },
            {
                path: 'pay',
                name: 'order-pay',
                // component:OrderPay,
                component: () => import('./pages/orderPay.vue'),

            },
            {
                path: 'alipay',
                name: 'alipay',
                // component:OrderAlipay,
                component: () => import('./pages/orderAlipay.vue'),

            }
        ]
    }

    ]

})