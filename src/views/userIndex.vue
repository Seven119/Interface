<template>
  <div class="userIndex">
      <normalNav></normalNav>
      <el-button type="primary" class="creatModel">创建模型</el-button>
      <el-select v-model="value" placeholder="请选择" class="selectDynamic">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <rightNav></rightNav>
      
      <modelCard class="modelCard"></modelCard>
  </div>
</template>

<script>
import normalNav from '../components/normalNav';
import rightNav from '../components/rightNav.vue';
import modelCard from '../components/modelCard.vue'
export default {
    name: 'userIndex',
    components: {normalNav, rightNav, modelCard},
    data() {
      return {
        options: [{
          value: '选项1',
          label: '训练'
        }, {
          value: '选项2',
          label: '未训练'
        }],
        value: ''
      }
    }
}
</script>

<style>
.creatModel{
  /* float: left; */
  margin-top: 50px;
  margin-left: 400px;
  font-size: 20px;
  padding: 25px 40px;
}
.selectDynamic{
  margin-left: 150px;
}
.el-input__inner{
  border: 1px solid #409EFF;
}
.modelCard{
  margin-top: 100px;

}
</style>