import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../pages/index.vue'
import order from '../pages/KltPageOrder.vue'
import orderSearch from '../pages/PageOrderSearch.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'country',
      component: country
    },
    {
      path: '/',
      name: 'forget',
      component: forget
    },
    {
      path: '/',
      name: 'smslogin',
      component: smslogin
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
/*    {
      path: '/',
      name: 'home',
      component: home
    }*/
/*    {
      path: '/',
      name: 'order',
      component: order
    }*/
    {
      path: '/',
      name: 'orderSearch',
      component: orderSearch
    }
  ]
})
