<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <el-row>
          <el-col :span="5">
              <img src="http://q1x2lsqiy.bkt.clouddn.com/logo.jpg" style="width: 50px;float: right">
          </el-col>
          <el-col :span="19">
              <h3 class="title" style="float: left;margin-right: 10px">中信银行贵金属理财宝</h3>
          </el-col>
        </el-row>
      </div>

      <el-form-item prop="username">
        <el-input

          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
          prefix-icon="el-icon-user"
        />
      </el-form-item>

      <el-form-item prop="password">

        <el-input
          ref="password"
          v-model="loginForm.password"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          prefix-icon="el-icon-lock"
          show-password
        />

      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="loginIn">登录</el-button>

      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> -->

    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    loginIn() {
      console.log(this.loginForm)
      this.$axios({
        method: 'post',
        url: 'api/user/login',
        params: {
          name: this.loginForm.username,
          password: this.loginForm.password
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 2) {
          this.$store.commit('setname',this.loginForm.username)
          this.$router.push('/home')
          this.$message({
            type: 'success',
            message: `登录成功`
          });

        } else if (res.data.code == 1) {
          this.$store.commit('setname',this.loginForm.username)
          this.$router.push('/administrators')
          this.$message({
            type: 'success',
            message: `登录成功`
          });
        } else {
          this.$message({
            type: 'error',
            message: `登录失败${res.data.msg}`
          });
        }
      })

    }
  }
}
</script>

<style>
.login-container {
  /*background-color: #2d3a4b;*/
  background-image: url(http://q1x2lsqiy.bkt.clouddn.com/login_back.jpg) ;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100%;
  width: 100%;
  position: relative;
}
.login-form {
  position: absolute;
  width: 520px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title-container {
  font-size: 26px;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
</style>
