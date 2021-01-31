import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HowItWorks from './views/HowItWorks.vue';
import Why from './views/Why.vue';
import Pricing from './views/Pricing.vue';
import Contact from './views/Contact.vue';
import Docs from './views/Docs.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/how',
      name: 'how',
      component: HowItWorks
    },
    {
      path: '/why',
      name: 'why',
      component: Why
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
