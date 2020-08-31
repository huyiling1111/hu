<template>
  <div>
    <ul v-infinite-scroll="loadMore" infinite-scroll-distance="5">
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangepage(data.filmId)">
        <img :src="data.poster" />
        <h3>{{ data.name}}</h3>
        <p>观众评分{{data.grade}}</p>
        <p>主演:{{data.actors | actorfilter}}</p>
      </li>
      <div v-show="isshow">加载中...</div>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
// Vue.filter('imgfilter', data => {
//   return data.replace('w.h', '80.100')
// })
Vue.filter('actorfilter', function (data) {
  // console.log(data);
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      total: 0,
      isshow: true
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=422800&pageNum=1&pageSize=10&type=1&k=4381095',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598099661919458008793092"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films

      // console.log(res.data.data.films)
    })
  },
  methods: {
    handleChangepage (id) {
      this.$router.push(`/detail/${id}`)
      console.log(id)
    },
    loadMore () {
      console.log('到底了')
      this.loading = true // 禁用无限滚动
      this.current++
      if (this.datalist.length === this.total) {
        this.isshow = false
        return
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=422800&pageNum=${this.current}&pageSize=10&type=1&k=4381095`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598099661919458008793092"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist]
        console.log(this.current)
        this.loading = false
        this.total = this.datalist.length
        // console.log(res.data.data.films)
      })
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
    img {
      float: left;
      height: 100px;
    }
  }
}
li {
  margin-left: 10px;
  flex: 1;
  // position: relative;
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
  // overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
