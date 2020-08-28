<template>
  <div v-if="datalist">
    <img :src="datalist.poster" class="poster" />
    <h2>{{datalist.name}}</h2>
    <h3>演职人员</h3>
    <swiper PerView="4" class="actorsclass" myclass="actorsclass">
      <div class="swiper-slide" v-for="item in datalist.actors" :key="item.name">
        <img :src="item.avatarAddress" />
        <p>{{item.name}}</p>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper PerView="3" class="photosclass" myclass="photosclass">
      <div class="swiper-slide" v-for="item in datalist.photos" :key="item">
        <img :src="item" />
      </div>
    </swiper>
  </div>
</template>
<script>
import swiper from '@/views/detail/Detailswiper'
import axios from 'axios'
// import bus from '@/bus/index'
export default {
  components: {
    swiper
  },
  props: ['$route.params.myid'],
  data () {
    return { datalist: null }
  },
  created () {
    console.log('tabber隐藏')
    // this.$store.state.isshow = false
    // console.log(this.$store.state)
    // bus.$emit('Tabberisshow', false)
    this.$store.commit('HideTabber', false)
  },
  mounted () {
    console.log('要获取信息', this.$route.params.myid)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=9153668`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598099661919458008793092","bc":"422800"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.datalist = res.data.data.film
      console.log(res.data.data.film)
    })
  },
  beforeDestroy () {
    console.log('tabber显示')
    // this.$store.state.isshow = true
    // bus.$emit('Tabberisshow', true)
    this.$store.commit('ShowTabber', true)
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  position: relative;
  box-sizing: border-box;
  width: 85px;
  p {
    position: absolute;
    bottom: 0px;
    left: 20px;
    text-align: center;
  }
}
.poster {
  width: 100%;
}
</style>
