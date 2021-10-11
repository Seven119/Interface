import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../views/index.vue'
import userIndex from '../views/userIndex.vue'
import login from '../views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //主页
    {
      path: '/',
      name: 'index',
      component: index
    },
    //个人中心
    {
      path: '/userIndex',
      name: 'userIndex',
      component: userIndex
    },
    //登录
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
