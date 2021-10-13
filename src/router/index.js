import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../views/index.vue'
import myModels from '../views/userIndex/myModels.vue'
import login from '../views/login.vue'
import userIndex from '../views/userIndex.vue'
import modelsInfo from '../views/modelsInfo.vue'
import teamWork from '../views/userIndex/teamWork.vue'

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
    //团队协作
    {
      path:'/userindex/teamWork',
      name:'teamWork',
      component:teamWork
    },
    //用户个人中心
    {
      path:'/userIndex',
      name:'userIndex',
      component:userIndex
    },
    //模型介绍
    {
      path:'/modelsInfo',
      name:'modelsInfo',
      component:modelsInfo
    },
    //登录
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
