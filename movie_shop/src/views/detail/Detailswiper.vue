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
  props: ['PerView', 'myclass'],
  mounted () {
    console.log(this.myclass)
    /* eslint-disable no-new */
    new Swiper(`.${this.myclass}`, {
      slidesPerView: this.PerView,
      spaceBetween: 0,
      freeMode: true
    })
  }

}
</script>

<style lang="scss" scoped>
  .swiper-wrapper{
    .swiper-slide{
      width:85px;
      height:150px;
      img{
        position:absolute;
            width:85px;
     bottom:30px;
    }
    }
  }
li, ol { list-style: none; }

</style>
