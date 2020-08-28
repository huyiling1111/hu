<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
   <!-- 如果需要分页器 -->
      <div class="swiper-pagination film-swiper-pagination"></div>

      <!-- 如果需要导航按钮  -->
       <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

       <!-- 如果需要滚动条  -->
      <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper' // js
import 'swiper/dist/css/swiper.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      // direction: 'vertical'
      loop: true,
      autoplay: 2000,
      // 如果需要分页器
      pagination: '.swiper-pagination'
    })
  }
}
</script>
<style lang="scss" scoped>
  .swiper-wrapper{
    img{
      width:100%;
    }
  }
li, ol { list-style: none; }
.film-swiper-pagination{
  text-align:right;
}
</style>
