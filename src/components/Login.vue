<template>
<div>
  <el-dialog title="用户登录" :visible.sync="isShow" :before-close="handleClose">
    <div class="login">
      <div class="login-form">
        <div class="card-block">
          <h1>Vue-Admin-Login</h1>
          <p class="text-muted">任意用户名/密码登录</p>
          <div class="input-group m-b-1">
            <span class="input-group-addon"><i class="user icon"></i></span>
            <input type="text" class="form-control" placeholder="Username" v-model="form.username">
          </div>
          <div class="input-group m-b-2">
            <span class="input-group-addon"><i class="lock icon"></i></span>
            <input type="password" class="form-control" placeholder="Password" v-model="form.password"
                    @keyup.enter="login">
          </div>
          <div class="row">
            <el-row>
              <el-col :span="12">
                <el-button type="primary" class="btn btn-primary p-x-2" @click="login">登录</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="button" class="btn btn-link forgot" style="float:right;">忘记密码?</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="login-register">
        <div class="card-block">
          <h2>注册</h2>
          <p>平台暂时只支持使用公司邮箱注册.</p>
          <el-button type="info" class="btn btn-primary active m-t-1"> 马上注册</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'login',
  props: ['isShow'],
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {},
  methods: {
    login () {
      // 带参数调用 vuex的actions
      this.$store.dispatch('Login', this.form)
    },
    // Dialog 关闭前的回调
    handleClose (done) {
      this.$emit('close')
      done()
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  border: 1px solid #cfd8dc;
}
.login .el-button {
  border-radius: 0;
}
.login .el-button.forgot, .login .el-button.forgot:hover {
  border: none;
}
.login .login-form {
  background-color: #FFFFFF;
  display: inline-block;
  width: 60%;
  display: table-cell;
}
.login .login-form .card-block {
  margin: 35px;
}
.login .login-form .card-block p {
  margin: 15px 0;
}
.input-group {
  width: 100%;
  display: table;
  border-collapse: separate;
  margin-bottom: 20px !important;
}
.input-group, .input-group-btn, .input-group-btn > .btn, .navbar {
  position: relative;
}
.input-group-addon:not(:last-child) {
  border-right: 0;
}
.input-group-addon, .input-group-btn {
  min-width: 40px;
  white-space: nowrap;
  vertical-align: middle;
  width: 1%;
}
.btn-link:focus, .btn-link:hover {
  color: #167495;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link, .btn-link:active, .btn-link:focus, .btn-link:hover {
  border-color: transparent;
}
.btn.focus, .btn:focus, .btn:hover {
  text-decoration: none;
}
.input-group-addon {
  padding: .5rem .75rem;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: #607d8b;
  text-align: center;
  background-color: #cfd8dc;
  border: 1px solid rgba(0, 0, 0, .15);
}
.input-group .form-control, .input-group-addon, .input-group-btn {
  display: table-cell;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.form-control {
  width: 100%;
  padding: .5rem .75rem;
  font-size: .875rem;
  line-height: 1.75rem;
  color: #607d8b;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .15);
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.login .login-form .card-block .row {
  display: block;
  margin: 15px 0;
}
.login .login-register {
  display: table-cell;
  background-color: #20a8d8;
  width: 40%;
  color: #fff;
}
.login .login-register .card-block {
  text-align: center !important;
  margin: 30px;
}
.login .login-register .card-block p {
  text-align: left !important;
  margin: 15px 0;
  height: 100px;
}
</style>
