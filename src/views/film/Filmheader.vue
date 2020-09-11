<template>
<ul>
 <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上演</router-link>
</ul>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    z-index:1;
    li{
        height:40px;
        flex:1;
        text-align:center;
        line-height: 40px;
    }
}
.fixed{
    position:fixed;
    left:0px;
    top:0px;
    width:100%;
    height:40px;
    background:white;
}
.active{
  color:red;
  border-bottom: 2px solid red;
}
</style>
<script>
export default {
  data: function () {
    return { ab: '1' }
  }
}
</script>
