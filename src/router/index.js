import Vue from 'vue'
import VueRouter from 'vue-router';

import Layout from '../pages/Layout.vue';
import Home from '../pages/Home.vue';
import Wedding from '../pages/Wedding.vue';
import Registry from '../pages/Registry.vue';
import Thanks from '../pages/Thanks.vue'
import RSVPLayout from '../pages/RSVPLayout.vue'
import RSVP from '../pages/RSVP.vue';
import Code from '../pages/Code.vue';
import Story from '../pages/Story.vue';

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
          component: RSVPLayout,
          children: [
            {
              path: '',
              component: RSVP
            },
            {
              path: ':code',
              component: Code
            },
          ]
        },
        {
          path: 'thanks',
          component: Thanks
        }
      ]
    },
    {
      path: '/story',
      component: Story
    }
  ]

Vue.use(VueRouter);
const router  = new VueRouter({
  routes: routes,
  mode: 'history'
});

export default router;
