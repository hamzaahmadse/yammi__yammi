import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import( './views/dashboard.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/delivary',
      name: 'delivary',
      component: () => import( './views/delivary-area.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import( './views/customer.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import(/* webpackChunkName: "about" */ './views/Header.vue')
    },
    {
      path: '/online-shop',
      name: 'online-shop',
      component: () => import( './views/online-shop.vue')
    },
    {
      path: '/opening-time',
      name: 'opening-time',
      component: () => import( './views/opening-time.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import( './views/order.vue')
    },
    {
      path: '/party-service',
      name: 'party-service',
      component: () => import( './views/party-service.vue')
    },
    {
      path: '/pos-system',
      name: 'pos-system',
      component: () => import( './views/pos-system.vue')
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: () => import( './views/reservations.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import( './views/reviews.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import( './views/setting.vue')
    },
    {
      path: '/dinners',
      name: 'dinners',
      component: () => import( './views/dinners.vue')
    },
    {
      path: '/employeer',
      name: 'employeer',
      component: () => import( './views/employeer.vue')
    },
    {
      path: '/hotspot',
      name: 'hotspot',
      component: () => import( './views/hotspot.vue')
    },
    {
      path: '/manage-shop',
      name: 'manage-shop',
      component: () => import( './views/manage-shop.vue')
    },
    {
      path: '/menu-card',
      name: 'menu-card',
      component: () => import( './views/menu-card.vue')
    },
    {
      path: '/offer',
      name: 'offer',
      component: () => import( './views/offers.vue')
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import( './views/invoice.vue')
    },
    {
      path: '/income',
      name: 'income',
      component: () => import( './views/income.vue')
    }
  ]
})
