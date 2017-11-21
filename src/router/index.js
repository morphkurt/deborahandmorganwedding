import Vue from 'vue'
import VueRouter from 'vue-router';

import Layout from '../pages/Layout.vue';
import Home from '../pages/Home.vue';
import Wedding from '../pages/Wedding.vue';
import Registry from '../pages/Registry.vue';
import RSVP from '../pages/RSVP.vue';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'wedding',
          component: Wedding
        },
        {
          path: 'registry',
          component: Registry
        },
        {
          path: 'rsvp',
          component: RSVP
        }
      ]
    },
  ]

Vue.use(VueRouter);
const router  = new VueRouter({
  routes: routes,
  mode: 'history'
});

export default router;
