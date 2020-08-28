<template>
  <div>
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
      <i class="iconfont icon-dianying"></i>film</router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
      <i class="iconfont icon-dianying1"></i>cinema</router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
      <i class="iconfont icon-wode"></i>center</router-link>
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
  i{margin-right:3px;}
  li {
    flex: 1;
    line-height: 50px;
     text-align: center;
    align-items: center;
  }
}
</style>
