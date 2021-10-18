<template>
<!-- 右侧导航栏 -->
  <div id="rightNav">
        <img src="../assets/rightNav/侧边栏.png" style="height:250px; width:40px" class="jiantou" @click="drawer = true">

        <el-drawer
            :visible.sync="drawer"
            :direction="direction"
            class="elDrawer">
            <div id="rightNavImg">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size='80'></el-avatar>
            </div>
            <div id="rightNavLink">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#409EFF"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="1" >
                        <i class="el-icon-user" style="color: white"></i>
                        <span slot="title" @click="goMyModels()">我的模型</span>
                    </el-menu-item>
                    <el-menu-item index="2" >
                        <i class="el-icon-menu" style="color: white"></i>
                        <span slot="title" @click="goTeamWork()">团队协作</span>
                    </el-menu-item>
                    <el-menu-item index="3" >
                        <i class="el-icon-delete" style="color: white"></i>
                        <span slot="title" @click="goRecycleBin()">回收站</span>
                    </el-menu-item>
                    <el-menu-item index="4" >
                        <i class="el-icon-setting" style="color: white"></i>
                        <span slot="title" @click="goUserSetting()">设置</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-drawer>
  </div>
</template>

<script>
export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      goTeamWork(){
          this.$router.push({path:'../userIndex/teamWork'})
      },
      goRecycleBin(){
          this.$router.push({path:'../userIndex/recycleBin'})
      },
      goMyModels(){
          this.$router.push({path:'../userIndex/myModels'})
      },
      goUserSetting(){
          this.$router.push({path:'../userIndex/userSetting'})
      }
    }
}
</script>

<style>
#rightNav{
    z-index: 100;
    float: right;
    height: 850px;
    width: 50px;
    /* background-color: #409EFF; */
}
#rightNavImg{
    text-align: center;
    margin-top: 130px;
    margin-bottom: 50px;
}
#rightNavLink{
    /* margin-left: 50px; */
    margin-top: 70px;
}
.el-menu-item{
    height: 85px;
    font-size: 20px;
    text-align: center;
    padding-top: 14px;
}
.el-drawer{
    background-color: #409EFF;
}
.el-drawer.rtl{
    width: 25% !important;
}
.jiantou{
    margin-left:30px;
    margin-top:250px
}
</style>