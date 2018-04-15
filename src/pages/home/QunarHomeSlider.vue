<template>
  <div class="slider-wrap">

    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of items" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>

      <!--
      <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1803/39/03048973b6839302.jpg_640x200_d3d1d43b.jpg" class="swiper-img" alt="">
      </swiper-slide>
      -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'QunarHomeSlider',

  props:{
    items:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      swiperOptions:{ 
        autoplay: 3000,  //自动播放
        loop: true,      //循环
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
 
  .slider-wrap >>> .swiper-pagination
    bottom .06rem

  .slider-wrap >>> .swiper-pagination-bullets .swiper-pagination-bullet
    margin .08rem
    width .12rem 
    height .12rem
    opacity 1 
    background rgba(255,255,255,.5)
  
  .slider-wrap >>> .swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active
    background rgba(255,255,255,1)
  
  .slider-wrap
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    .swiper-img
      width 100%


</style>
