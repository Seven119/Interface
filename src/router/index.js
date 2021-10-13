import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../views/index.vue'
import myModels from '../views/userIndex/myModels.vue'
import login from '../views/login.vue'
import userIndex from '../views/userIndex.vue';

Vue.use(Router)

export default new Router({
  routes: [
    //主页
    {
      path: '/',
      name: 'index',
      component: index
    },
    //我的模型
    {
      path: '/userIndex/myModels',
      name: 'myModels',
      component: myModels
    },
    {
      path:'/userIndex',
      name:'userIndex',
      component:userIndex
    },
    //登录
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
