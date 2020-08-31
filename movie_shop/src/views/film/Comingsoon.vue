<template>
  <div>
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
  margin-bottom: 50px;
  li {
     z-index:-1;
    padding: 10px;
    overflow: hidden;
     margin-left: 10px;
  flex: 1;
  position: relative;
    img {
      float: left;
      height:100px;
    }
  }
  h3 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
}

</style>
