// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import 'lib-flexible/flexible.js'
// import SlideVerify from 'vue-monoplasty-slide-verify';

// import PuzzleVerification from 'vue-puzzle-verification'


Vue.config.productionTip = false;
Vue.prototype.$http = axios; //全局注册，使用方法为:this.$http

Vue.use(Mint);
Vue.use(Vuex);
// Vue.use(SlideVerify);
// Vue.use(PuzzleVerification);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
