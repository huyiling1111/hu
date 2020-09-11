<template>
    <div id="main">
      <Header title="我的喵喵" >  </Header >
        <Login> </Login>
    </div>
</template>

<script>
import Header from '@/views/center/Header'
import Login from '@/views/center/Login'
export default {
  components: {
    Header,
    Login
  },
  props: {
    title: {
      type: String,
      default: '喵喵电影'
    }
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e97508;
  border-bottom: 1px solid #e97508;
  position: relative;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>
