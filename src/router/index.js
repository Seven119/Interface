import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../views/index.vue'
import userIndex from '../views/userIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //主页
    {
      path: '/index',
      name: 'index',
      component: index
    },
    //个人中心
    {
      path: '/',
      name: 'userIndex',
      component: userIndex
    }
  ]
})
