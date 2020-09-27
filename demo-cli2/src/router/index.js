import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First.vue'
import A from '@/components/A.vue'
import B from '@/components/B.vue'
import a from '@/components/Atoa.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First,
      children: [{
          path: '/a',
          component: A
        },
        {
          path: '/b',
          component: B
        },
        {
          path: '/Atoa',
          component: a
        }
      ]
    }
    // {
    //   path: '/first',
    //   name: 'First',
    //   component: First
    // }, {
    //   path: '/a',
    //   name: 'A',
    //   component: A,
    //   children: [{
    //     path: '/Atoa',
    //     component: a
    //   }]
    // },
    // {
    //   path: '/b',
    //   name: 'B',
    //   component: B
    // }
  ]
})
