<template>
  <div>
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
      <i class="iconfont icon-dianying"></i>电影</router-link>
      <router-link to="/city" tag="li" activeClass="myactive">
      <i class="iconfont icon-dianying1"></i>电影院</router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
      <i class="iconfont icon-wode"></i>我的</router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.myactive {
  color: red;
}

ul {
  background:white;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0px;
  font-size: 14px;
  i{line-height:20px；
 }
  li {
    flex: 1;
    line-height: 50px;
     text-align: center;
    align-items: center;
  }
}
</style>
