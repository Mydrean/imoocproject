import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import $ from 'jquery'

import router from './assets/js/router.js'
import Css from './assets/css/base.css'

import './assets/font/iconfont.css'

import animate from 'animate.css'

//引用MintUI框架
import Mint from 'mint-ui';
Vue.use(Mint);
//引用样式
import 'mint-ui/lib/style.css';

//引用element插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//搜索框
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

//引用vue-awesome-swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//动态加载
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

//AJAX
import axios from 'axios';
Vue.prototype.$http = axios;




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
