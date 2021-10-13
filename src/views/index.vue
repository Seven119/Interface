<template>
  <div>
    <!-- 导航栏 -->
    <nav>
      <el-row :gutter="24" >
        <el-col :span="18">
          <img src="../assets/nav/logo.png" height="50px" alt="" id="logo">
        </el-col>
        <el-col :span="2" align="middle">
          <div id="changeLanguage">
            <a>中文/EN</a>
          </div>
        </el-col>
        <el-col :span="4" align="middle">
          <div id="Login" @click="goLogin()">
            <a>登录</a>
          </div>
        </el-col>
      </el-row>
    </nav>

    <!-- TODO小鲸鱼 -->
    <div class="fish1" :model="fishForm" ref="fishForm">
      <fish></fish>
    </div>

    <!-- TODO产品介绍 -->
    <div></div>

    <!-- TODO成员介绍 -->
    <div></div>

    <!-- TODOfooter -->
    <footer></footer>

  </div>
  
</template>

<script>
import fish from '../components/fish.vue'
export default {
    name:'index',
    components: {fish},
    data(){
      return{
        reportUrl:'index.html'
      }
    },
    methods:{
      goLogin(){
        this.$router.push({path:'/login'})
      }
    }
}
</script>

<style>
nav{
  height: 50px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
#logo{
  /* margin-top: 5px; */
  margin-left: 40px;
}
#changeLanguage{
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 80px;
  border-radius: 10px;
}
#changeLanguage:hover{
  color: white;
  background-color: #46A1DE;
}
#Login{
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 80px;
  border-radius: 10px;
}
#Login:hover{
  color: white;
  background-color: #46A1DE;
}

</style>