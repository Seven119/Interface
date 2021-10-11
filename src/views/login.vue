<template>
  <div>
    <nav>
      <el-row :gutter="24">
        <el-col :span="18">
          <img src="../assets/nav/logo.png" height="50px" alt="" id="logo" />
        </el-col>
      </el-row>
    </nav>
    <div id="login">
      <el-row>
        <el-col span="13">
          <img src="../assets/login/login.jpg" height="450px" width="450px" />
        </el-col>
        <el-col span="9">
          <div id="word">欢迎登录</div>
          <el-form ref="form" :rules="rules" :model="form">
            <el-form-item prop="username">
              <el-input
                class="name"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user-solid"
                v-model="form.username"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                class="password"
                placeholder="请输入密码"
                prefix-icon="el-icon-key"
                v-model="form.password"
              >
              </el-input>
            </el-form-item>
            <div>
              <el-row>
                <el-col span="16">
                  <el-checkbox v-model="checked" style="margin-left:70px"
                    >记住密码</el-checkbox
                  >
                </el-col>

                <el-col span="5" class="forgetPass">
                  忘记密码
                </el-col>
                <el-col span="1">
                  <img src="../assets/login/help.svg" style="height:15px" />
                </el-col>
              </el-row>
            </div>
            <el-form-item>
              <el-button
                class="btn-login"
                type="primary"
                @click="submitForm('form')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "用户名为3-10位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 8, max: 20, message: "密码为8-20位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      if (that.checked) {
        localStorage.setItem("username", that.form.username);
        localStorage.setItem("password", that.form.password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
    }
  }
};
</script>

<style>
nav {
  height: 50px;
  width: 100%;
}
#logo {
  margin-top: 5px;
  margin-left: 40px;
}
#login {
  height: 450px;
  width: 850px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
#word {
  font-size: 30px;
  font-weight: 500;
  margin-left: 120px;
  margin-top: 50px;
  border: 0 0 1px 0;
}
.name {
  width: 250px;
  margin-left: 70px;
  margin-top: 60px;
}
.password {
  width: 250px;
  margin-left: 70px;
  margin-top: 20px;
}
.btn-login {
  margin-left: 150px;
  margin-top: 30px;
}
.forgetPass {
  font-size: 14px;
}
</style>
