<template>
    <div>
      <swiper ref="myfilmheader" >
           <li class="swiper-slide" ><img src="https://ftp.bmp.ovh/imgs/2020/09/28731af0b8607de4.jpg" alt=""></li>
           <li class="swiper-slide" ><img src="https://ftp.bmp.ovh/imgs/2020/09/8acd8b117af13684.jpg" alt=""></li>
           <li class="swiper-slide" ><img src="https://ftp.bmp.ovh/imgs/2020/09/96f9bfed308aa6ec.jpg" alt=""></li>
           <li class="swiper-slide" ><img src="https://ftp.bmp.ovh/imgs/2020/09/b96b3bf73e9c9c46.jpg" alt=""></li>
      </swiper>
      <filmheader :class="isfixed?'fixed':''" > </filmheader>
        <router-view></router-view>
    </div>
</template>
<script>
import swiper from '@/views/film/swiper'
import filmheader from '@/views/film/Filmheader'
export default {
  mounted () {
    console.log(filmheader.data())
    window.onscroll = this.handlescroll
  },
  // data () {
  // return {
  data: function () {
    return { isfixed: false }
  },
  // }
  methods: {
    // 获取滚轮高度 和节点高度
    handlescroll () {
      // console.log(this)
      if (document.documentElement.scrollTop >= this.$refs.myfilmheader.$el.offsetHeight) {
        this.isfixed = true
      } else { this.isfixed = false }
      // console.log(this.$refs.myfilmheader.$el.offsetHeight, this)
    }
  },
  components: {
    swiper,
    filmheader
  },
  beforedestory () {
    window.onscroll = null
  }

}
</script>
