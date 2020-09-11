<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.name">{{data.name}}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import Betterscroll from 'better-scroll'
export default {
  data () {
    return {
      datalist: [],
      mystyle: { height: '0px' }
    }
  },
  mounted () {
    this.mystyle.height = document.documentElement.clientHeight - 60 + 'px'
    var id = localStorage.getItem('name')
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=91262041`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598099661919458008793092","bc":"310100"}',
        'X-Host': ' mall.film-ticket.cinema.list'
      }
    }
    ).then(res => {
      this.datalist = res.data.data.cinemas
      console.log(res.data.data.cinemas)
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Betterscroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    }
    )
  }
}
</script>
<style lang="scss" scoped>
li {
  margin-top: 20px;
}
.cinema{
  height:300px;
  overflow: hidden;
}
</style>
