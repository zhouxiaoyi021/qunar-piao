<template>
  <div class="mp-price-desc">
    <span class="iconfont mp-price-desc-icon">&#xe6b6;</span>
    <div class="mp-price-desc-info">
      <span class="mp-price-desc-highlight">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
  </div>
</template>

<script>
export default {
  name: 'QunarHomePriceDesc'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .mp-price-desc
    margin-top .1rem
    padding .14rem .1rem
    font-size .24rem
    line-height .32rem
    background #fff
    color #616161
    .mp-price-desc-icon
      width .24rem
      line-height .32rem
      display block
      float left
    .mp-price-desc-info
      margin-left .4rem
      .mp-price-desc-highlight
        font-weight bold      

</style>
