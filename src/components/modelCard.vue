<template>
<!-- 模型卡片 -->
  <div id="modelCard">
      <div id="modelCardImg" @click="goModelsInfo()">
          <img src="../assets/rightNav/箭头_向右两次.svg" style="height:200px; width:300px">
      </div>
      <div id="modelCardInfo">
        <div id="modelName" @click="goModelsInfo()">模型12345
        <div id="modelCardIcon">
            <i class="el-icon-delete" id="delete" style="color: #409EFF"></i>
            <i class="el-icon-share" style="color: #409EFF"></i>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
      goModelsInfo(){
        this.$router.push({path:'../modelsInfo'});
      }
    }
}
</script>

<style>
#modelCard{
    height: 260px;
    width: 300px;
    border: 1px solid #409EFF;
    /* background-color: rgb(190, 188, 188); */
}
#modelCardImg{
    background-color: #409EFF;
}
#modelName{
    margin-left: 15px;
    margin-top: 8px;
}
#modelCardIcon{
    float: right;
    font-size: 22px;
    margin-right: 15px;
    margin-top: -3px;
}
#delete{
    margin-right: 10px;
}


</style>