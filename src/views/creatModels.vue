<template>
  <div id="creatModels">
    <normalNav></normalNav>
    <rightNav></rightNav>
    <div>
      <ul class="form">
        <li>
          <div class=" modelName">
            模型名称
            <el-input
              type="text"
              placeholder="请输入模型名称"
              v-model="text"
              maxlength="20"
              show-word-limit
            ></el-input>
          </div>
        </li>
        <li>
          <div class="hyperParameter">
            超参数优化
            <img src="../assets/login/help.svg" class="icon" />
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in option1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </li>
        <li>
          <div class="crossValidation">
            交叉验证方法
            <img src="../assets/login/help.svg" class="icon" />
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in option2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </li>
        <li>
          <div class="descriptorBar">
            描述符栏
            <img src="../assets/login/help.svg" class="icon" />
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in option3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </li>
      </ul>
      <div class="upLoad">
        <div style="font-size:25px">
          数据集上传
        </div>
        <br />
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip" style="font-size:15px">
            只能上传excel/cvs文件，且不超过500kb
          </div>
        </el-upload>
      </div>
      <el-button type="primary" class="btn">完成并创建</el-button>
    </div>
  </div>
</template>

<script>
import normalNav from "../components/normalNav";
import rightNav from "../components/rightNav.vue";
export default {
  name: "creatModels",
  components: { normalNav, rightNav },
  data() {
    return {
      text: "",
      textarea: "",
      option1: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        }
      ],
      option2: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        }
      ],
      option3: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        }
      ]
    };
  }
};
</script>

<style>
.form {
  list-style-type: none;
  float: left;
}
.modelName {
  margin-left: 150px;
  margin-top: 100px;
  width: 650px;
  height: 140px;
  font-size: 25px;
}
.el-input {
  float: right;
  width: 350px;
}
.hyperParameter {
  margin-left: 150px;
  width: 650px;
  height: 140px;
  font-size: 25px;
}
.el-select {
  float: right;
  width: 350px;
}
.crossValidation {
  margin-left: 150px;
  width: 650px;
  height: 140px;
  font-size: 25px;
}
.descriptorBar {
  margin-left: 150px;
  width: 650px;
  height: 140px;
  font-size: 25px;
}
.icon {
  height: 25px;
}
.upLoad {
  float: right;
  margin-top: 100px;
  margin-right: 150px;
}
.btn {
  float: right;
  margin-right: -220px;
  margin-top: 530px;
  font-size: 20px;
}
</style>
