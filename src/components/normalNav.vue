<template>
    <div class="normalNav">
        <!-- 导航栏 -->
        <nav>
            <el-row :gutter="24" >
                <el-col :span="18">
                    <div id="Logo">
                        <img src="../assets/nav/logo.png" height="50px" alt="" id="logo">
                    </div>
                </el-col>
                <el-col :span="2" align="middle">
                    <div id="changeLanguage">
                        <a>中文/EN</a>
                    </div>
                </el-col>
                <el-col :span="4" align="middle">
                    <div id="Login" @click="goUserIndex()">
                        <!-- <img src="../assets/nav/touxiang.jpg" alt="" height="50px" width="50px"> -->
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </div>
                </el-col>
            </el-row>
        </nav>
    </div>
</template>

<script>
export default {
  methods:{
    goUserIndex(){
      this.$router.push({path:'/userIndex'})
    }
  }
}
</script>

<style>
nav{
  height: 50px;
  width: 100%;
  /* background-color: antiquewhite; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
#Logo{
  text-align: left;
  line-height: 50px;
}
#logo{
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
  margin-top: 5px;
  border-radius: 10px;
}
</style>