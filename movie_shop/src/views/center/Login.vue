<template>
  <div class="login_body">
    <div>
      <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input class="login_text" type="password" placeholder="请输入您的密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #c5afaf;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
</style>
