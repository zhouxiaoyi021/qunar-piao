<template>
  <div class="mp-download">
    <span class="mp-download-close" @click="closePanel">X</span>
    <span class="mp-download-logo"></span>
    <p class="mp-download-des">使用去哪儿门票客户端<br>享受专属优惠体验更流畅</p>
    <a href="http://sight.qunarzz.com/com.mqunar.sight/Qunar_Spider_C0010_60001138_release_20160718_1038.apk" class="mp-download-btn">立即下载</a>
  </div>
</template>

<script>
export default {
  name: 'QunarHomeDownload',
  methods:{
    closePanel(){
      this.$emit('close-event')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mp-download
    position fixed
    z-index 100
    bottom 0
    left 0
    width 100%
    height 1rem
    background: rgba(0,0,0,.8)
    .mp-download-close
      display inline-block;
      position absolute;
      top: 0
      left: 0
      width .5rem
      height .5rem
      line-height .4rem
      text-indent .1rem
      background #afafaf
      border-radius 0 0 .5rem 0
      color #fff
    .mp-download-logo
      display inline-block
      position relative
      top .15rem
      left .65rem
      width .7rem
      height .7rem
      background url(//imgs.qunarzz.com/piao/fusion/1606/44/2605d5bd522e109a.png)
      background-size .7rem .7rem
      border-radius .1rem
    .mp-download-des
      position: absolute
      left 1.6rem
      top .2rem;
      line-height .32rem
      font-size .24rem
      color #fff
    .mp-download-btn
      position absolute
      display block
      top: .22rem
      right .2rem
      width 1.4rem
      height .56rem
      line-height .56rem
      text-align center
      border .02rem solid #1d8f96
      border-radius .08rem
      font-size .26rem
      color #1d8f96
      
</style>
