<template>
    <div class="normalNav">
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
                    <div id="Login">
                        <img src="../assets/nav/touxiang.jpg" alt="" height="50px" width="50px">
                    </div>
                </el-col>
            </el-row>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
nav{
  height: 50px;
  width: 100%;
}
#logo{
  margin-top: 5px;
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
</style>