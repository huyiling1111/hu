<template>
  <div v-if="datalist">
    <img :src="datalist.poster" class="poster" />
    <!-- <h2>{{datalist.name}}</h2> -->
    <div class="actors-title-bar">
    <span>演职人员</span>
      </div>
    <swiper PerView="4" class="actorsclass" myclass="actorsclass">
      <div class="swiper-slide" v-for="item in datalist.actors" :key="item.name">
        <img  :src="item.avatarAddress" />
        <p>{{item.name.substring(0, 3)}}</p>
      </div>
    </swiper>
    <div id="line"></div>
    <div class="stage-photo">
    <div class="stage-photo-title">剧照</div>
    <swiper PerView="3" class="photosclass" myclass="photosclass">
      <div class="swiper-slide swiper-slide-photo" v-for="item in datalist.photos" :key="item">
        <img :src="item" style="width:100px;min-width=100px"/>
      </div>
    </swiper>
    </div>
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
.actors-title-bar{
  box-sizing: border-box;
 width: 100%;
padding: 15px;
}
.swiper-slide {
  // position: relative;
  width: 100%;
  height:150px;
  margin-left: 10px;
  p {
    position: absolute;
    bottom: 0px;
    left: 20px;
    margin:0 auto;
    font-size:13px
  }
}
.poster {
  width: 100%;
}
#line {
  margin-top:20px;
width:100%;
height:10px;
background:rgb(243, 239, 239)

}
.stage-photo{
  box-sizing: border-box;
      margin-top: 10px;
      margin-bottom: 10px;
      padding:0px;
 .stage-photo-title{
        margin-left:20px;
        margin-bottom:20px;
      }
.swiper-slide-photo{width:120px;height:110px;

img{height:110px}
}
.photosclass{
  margin-right:0px；
}
}
</style>
