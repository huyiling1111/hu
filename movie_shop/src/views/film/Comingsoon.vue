<template>
  <div>
    <ul>
      <li v-for="data in comingList" :key="data.filmId" @click="handleClick(data.isPresale,data.filmId)">
        <div class="photo"><img :src="data.poster" /></div>
        <h3>{{ data.name}}</h3>
          <p>电影类型:{{data.category}}</p>
         <div class="buy">预购</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import { mapState } from 'vuex'
export default {
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAction')
      console.log(this.$store.state.comingList, 510)
    } else {
      console.log('使用缓存数据')
    }
  },
  computed: {
    ...mapState(['comingList'])
  },
  methods: {
    handleClick (data, id) {
      console.log(1)
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
     z-index:0;
    padding: 10px;
    overflow: hidden;
     margin-left: 10px;
  flex: 1;
  position: relative;
    .buy{
      width:35px;
      height:25px;
     border:1px solid orange;
     position:absolute;
      right:20px;
      top:20px;
       text-align: center;
      line-height:25px;
       font-size:13px;
      color:orange;
    }
  .photo{
    width:65px;
    height:100px;
     float: left;
      margin-right:10px;
    img {
      width:65px;
    }
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
}
}
</style>
