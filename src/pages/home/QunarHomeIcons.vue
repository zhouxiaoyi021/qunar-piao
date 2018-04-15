<template>
  <div class="mp-icons-wrap">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(iconList, index) of pages" :key="index">
        <div class="icon" v-for="icon of iconList" :key="icon.id">
          <div class="icon-img-wrap">
            <img class="icon-img" :src="icon.imgUrl" />
          </div>
          <div class="keywords">{{icon.title}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    
    
    <!--
    <div class="icon">
      <div class="icon-img-wrap">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
      </div>
      <div class="keywords">景点门票</div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name:'QunarIcons',
  data(){
    return {
      swiperOptions:{ 
        loop: false, 
        pagination: '.swiper-pagination'
      }
    }
  },
  props:{
    items:{
      type: Array,
      default(){
        return []
      }
    }
  },
  computed:{
    pages(){
      const iconPages = []
      this.items.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!iconPages[page]){
          iconPages[page] = []
        }
        iconPages[page].push(item)
      })

      return iconPages
    }
  }
}
</script>

<style lang="stylus" scoped>

  @import '~styles/variables.styl'

  @import '~styles/mixins.styl'
  .mp-icons-wrap >>> .swiper-pagination
    bottom  0;

  .mp-icons-wrap >>> .swiper-pagination-bullets .swiper-pagination-bullet
    margin  .08rem
    width  .12rem 
    height  .12rem
    opacity  1 
    background  rgba(141,141,141,1)


  .mp-icons-wrap >>> .swiper-container{
    position  static
    height  0 
    padding-bottom  49.33334%
  }

  .mp-icons-wrap >>> .swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active
    background  $bgColor

  .mp-icons-wrap
    position  relative 
    height  3.7rem
    padding-top  .1rem
    background #fff
    
    .icon
      position  relative
      float  left
      width  25%
      height  1.3rem
      padding-top  .3rem
      text-align  center
      overflow  hidden
      .icon-img-wrap
        display  inline-block
        background  #f0f5f8
        border-radius  20px
        width  .66rem
        height  .66rem
        .icon-img
          width  100%
      .keywords
        margin-top  .2rem
        color  #212121
        font-size  .28rem
        ellipsis()
</style>
