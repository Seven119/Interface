<template>
  <section class="workbench">
    <normalNav></normalNav>
    <div class="content">
      <div class="header-content" style="margin-top:100px">
        <div class="header">
          <span>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </span>
          <span>
            团队人数
          </span>
          <span>
            项目总数
          </span>
          <span>
            <el-input
              v-model="input"
              placeholder="请输入内容"
              style="width:500px"
            ></el-input>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-2-of-4">
          <div class="feature-box">
            <h5 class="heading-tertiary u-margin-bottom-small">
              正在进行的项目
            </h5>

            <div style="margin: 20px 0;"></div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              v-model="textarea2"
            >
            </el-input>
          </div>
        </div>

        <div class="col-2-of-4" style="margin-top:30px">
          <div class="feature-box">
            <h5 class="heading-tertiary u-margin-bottom-small">待处理项目</h5>
            <div style="margin: 20px 0;"></div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              v-model="textarea2"
            >
            </el-input>
          </div>
        </div>

        <div class="col-2-of-4" style="margin-top:-170px">
          <div class="feature-box">
            <h5 class="heading-tertiary u-margin-bottom-small">项目动态</h5>
            <div style="margin: 20px 0;"></div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              v-model="textarea2"
            >
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import normalNav from "../../components/normalNav";
export default {
  name: "teamWork",
  components: { normalNav },

  data() {
    return {
      input: "",
      textarea2: ""
    };
  }
};
</script>

<style scoped>
.header-content {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
}

.user-info {
  margin-left: 12px;
  line-height: 33px;
}

.row {
  max-width: 114rem;
  width: 90%;
  margin: 0 auto;
}
.row:not(:last-child) {
  margin-bottom: 8rem;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row [class^="col-"] {
  float: left;
}
.row [class^="col-"]:not(:last-child) {
  margin-right: 6rem;
}
.row .col-1-of-2 {
  width: calc((100% - 6rem) / 2);
}
.row .col-1-of-3 {
  width: calc((100% - 6rem * 2) / 3);
}
.row .col-2-of-3 {
  width: calc(2 * ((100% - 6rem * 2) / 3) + 6rem);
}
.row .col-1-of-4 {
  width: calc((100% - 6rem * 3) / 4);
}
.row .col-2-of-4 {
  width: calc(2 * ((100% - 6rem * 3) / 4) + 6rem);
}
.row .col-3-of-4 {
  width: calc(3 * ((100% - 6rem * 3) / 4) + 2 * 6rem);
}



.content {
  background-color: rgb(236, 236, 236);
  width: 95%;
  margin: auto;
  height: 1098px;
  margin-top: -50px;
}
.header {
  width: 90%;
  margin: auto;
}
.feature-box {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 9rem;
  text-align: center;
  border-radius: 3px;
}
</style>
