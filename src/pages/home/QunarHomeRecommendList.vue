<template>
  <div class="mp-list">
    <div class="mp-list-title">
      <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt=""><span class="mp-title">本周热门榜单</span>

      <a class="mp-title-more" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=北京">全部榜单<span class="iconfont mp-more-icon">&#xe664;</span></a>

    </div>
    <ul class="mp-hotsale-list">
      <li class="mp-hotsale-item" v-for="(item,index) of items" :key="item.id">
        <a href="javascript:;" class="mp-fulllink">
          <div class="mp-hotsale-img-icon">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="mp-hotsale-tag" v-if="index < 3">
            <img v-if="index === 0" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png" alt="">
            <img v-else-if="index === 1" src="http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png">
            <img v-else src="http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png">
          </div>
         
          <div class="mp-hotsale-info">
            <div class="mp-hotsale-sight">{{item.name}}</div>
            <div class="mp-hotsale-price">
              <span class="mp-price">¥</span><span class="mp-price-num">{{item.price}}</span>起
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QunarHomeRecommend',
  props:{
    items:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';

  .mp-list
    margin-top .2rem
    background #fff
    .mp-hotsale-item:not(:first-child){
      margin-left: .12rem
    }
    .mp-list-title
      position relative
      padding .24rem 0 .26rem
      .mp-title-img
        display inline-block
        overflow hidden
        width .3rem
        height .3rem
        margin-left .2rem
        vertical-align top
      .mp-title
        display inline-block
        margin-left .08rem
        height .44rem
        color #212121
        font-size .32rem
        line-height .44rem
      .mp-title-more
        position absolute
        top .36rem
        right .32rem
        color #616161
        font-size .24rem
        line-height .28rem
      .mp-more-icon
        margin-left .04rem
        position relative
        top .01rem
    .mp-hotsale-list
      padding 0 .24rem
      overflow-x scroll
      white-space: nowrap
      .mp-hotsale-item
        position relative
        display inline-block
        padding .06rem 0 .2rem
        width 2rem
      .mp-fulllink
        display block
        width 100%
        height 100%
      .mp-hotsale-img-icon
        overflow: hidden
        width: 2rem
        height: 0
        padding-bottom: 100%
        img
          width 100%
      .mp-hotsale-tag
        position absolute
        top 0
        left 0
        z-index 1
        overflow hidden
        width .84rem
        height .4rem
        img
          width 100%
      .mp-hotsale-sight,.mp-hotsale-price
        font-size .24rem
        text-align center
      .mp-hotsale-sight
        margin-top .12rem
        color #212121
        line-height .32rem
      .mp-hotsale-price
        color #616161
        font-size .24rem
        line-height .36rem
        .mp-price,.mp-price-num
          color #ff8300
        .mp-price-num
          font-size .28rem
      

</style>
