import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from 'components/Hello.vue'
import Work from 'components/Work.vue'
import About from 'components/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Hello,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/about',
    component: About,
  },
  ],
})
