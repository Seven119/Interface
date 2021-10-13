<template>
  <div class="userIndex">
      <normalNav></normalNav>
      <el-button type="primary" class="creatModel" @click="creatModel()">创建模型</el-button>
      <el-select v-model="value" placeholder="请选择" class="selectDynamic">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <rightNav></rightNav>
      <div v-for="(item,index) in list" :key="item.key">
        <modelCard :key="item.key" :value="item" ::key="index" class="modelCard" ></modelCard>
      </div>
      <pagination></pagination>
    
      
  </div>
</template>

<script>
import normalNav from '../../components/normalNav';
import rightNav from '../../components/rightNav.vue';
import modelCard from '../../components/modelCard.vue';
import pagination from '../../components/pagination'
import Pagination from '../../components/pagination.vue';
export default {
    name: 'myModels',
    components: {normalNav, rightNav, modelCard, pagination, Pagination},
    data() {
      return {
        options: [{
          value: '选项1',
          label: '训练'
        }, {
          value: '选项2',
          label: '未训练'
        }],
        value: '',
        list:[
          {val:111,key:1},
          {val:222,key:2},
          {val:333,key:3},
          {val:444,key:4},
          {val:555,key:5}
        ]
      }
    },
    methods: {
      creatModel(){
        this.$router.push({path:'/creatModels'})
      }
    },
    
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