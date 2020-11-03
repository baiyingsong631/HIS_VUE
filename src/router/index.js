import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import abc from '@/components/abc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aa',
      name: 'hello',
      component: abc

    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
