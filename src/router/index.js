import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../views/index.vue'
import myModels from '../views/userIndex/myModels.vue'
import login from '../views/login.vue'
import creatModels from '../views/creatModels.vue'
import userIndex from '../views/userIndex.vue'
import modelsInfo from '../views/modelsInfo.vue'
import teamWork from '../views/userIndex/teamWork.vue'
import recycleBin from '../views/userIndex/recycleBin.vue'
import userSetting from '../views/userIndex/userSetting.vue'

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
      path:'/userIndex/teamWork',
      name:'teamWork',
      component:teamWork
    },
    //回收站
    {
      path:'/userIndex/recycleBin',
      name:'recycleBin',
      component:recycleBin
    },
    //设置
    {
      path:'/userIndex/userSetting',
      name:'userSetting',
      component:userSetting
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
    },
    //模型创建
    {
      path:'/creatModels',
      name:'creatModels',
      component:creatModels
    }
  ]
})
