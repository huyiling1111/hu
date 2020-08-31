<template>
<mt-index-list>
  <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index" >
      <!-- 上面的data变量可以被下面引用 -->
      <div  v-for="city in data.list" :key="city.name" @click="onclick(city.cityId)">
          <!-- 点击对应城市，传入cityid参数保存，根据id获取数据再push到cimena页面 -->
    <mt-cell :title="city.name"></mt-cell>
    </div>

  </mt-index-section>

</mt-index-list>

</template>
<script>
import axios from 'axios'
export default {
  data () {
    return { datalist: [] }
  },
  mounted () {
    // 获取城市列表数据
    axios({
      url: 'https://m.maizuo.com/gateway?k=4926834',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598099661919458008793092","bc":"310100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.datalist = this.clickHandle(res.data.data.cities)
      console.log(this.datalist)
    }
    )
  },
  methods: {
    // 这里的datalist参数是由res.data.data.cities传入
    clickHandle (data) {
    //   console.log(data)
      var arr1 = []
      for (var i = 65; i <= 90; i++) {
        arr1.push(String.fromCharCode(i))
      }
      //   console.log(arr1)
      var newarr = []
      for (var j = 0; j < arr1.length; j++) {
        var newdata = data.filter(item => item.pinyin.substring(0, 1) === arr1[j].toLowerCase())
        if (newdata.length > 0) {
          newarr.push({ index: arr1[j], list: newdata })
        }
      }
      return newarr
    },
    // 点击事件跳转到cimena页面
    onclick (id) {
      console.log(id)
      // 存储
      localStorage.setItem('name', id)
      this.$router.push('/cinema')
    }

  }
}
</script>
<style lang="scss" scoped>
</style>
https://m.maizuo.com/gateway?cityId=210300&ticketFlag=1&k=1624835  cityid  cimena页面
