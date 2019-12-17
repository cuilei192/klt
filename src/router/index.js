import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../pages/index.vue'
import order from '../pages/KltPageOrder.vue'
import orderSearch from '../pages/PageOrderSearch.vue'
import login from '../pages/login.vue'
import smslogin from '../pages/smslogin.vue'
import forget from '../pages/forget.vue'
import country from '../pages/country.vue'
import phoneLook from '../pages/phoneLook.vue'
import emailLook from '../pages/emailLook.vue'
import phoneRegister from '../pages/phoneRegister.vue'
import agreement from '../pages/agreement.vue'
import emailRegister from '../pages/emailRegister.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'emailRegister',
      component: emailRegister
    },
    {
      path: '/',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/',
      name: 'phoneRegister',
      component: phoneRegister
    },
    {
      path: '/',
      name: 'emailLook',
      component: emailLook
    },
    {
      path: '/',
      name: 'phoneLook',
      component: phoneLook
    },
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
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'order',
      component: order
    },
    {
      path: '/',
      name: 'orderSearch',
      component: orderSearch
    }
  ]
})
