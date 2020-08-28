<template>
  <div>
   comingsoon
    <ul>
      <li v-for="data in $store.state.comingList" :key="data.filmId" @click="handleClick(data.isPresale,data.filmId)">
        <img :src="data.poster" />
        <h3>{{ data.name}}</h3>
        <p>观众评分{{data.grade}}</p>
        <p>主演:{{data.actors | actorfilter}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    handleClick (data, id) {
      if (!data) {
        console.log(1)
        MessageBox({
          title: '提示',
          message: '没有排期，看看其他电影吧',
          showCancelButton: true
        }).then(res => {
          // console.log(res);
          if (res === 'confirm') {
            console.log('回到首页')
            this.$router.push('/film/nowplaying')
          }
        })
      }
      this.$router.push(`/detail/${id}`)
      console.log(2)
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  li {
    padding: 10px;
    overflow: hidden;
    img {
      float: left;
      height:100px;
    }
  }
}
</style>
