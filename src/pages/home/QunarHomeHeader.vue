<template>
  <header class="mp-header">
    <a href="#" class="mp-header-left">
      <span class="iconfont">&#xe618;</span>
    </a>
    <div class="mp-header-title">
      <a href="#"  class="mp-linkarea">
        <i class="mp-icon-search iconfont">&#xe661;</i>
        <span class="mp-single-line">输入城市/景点/游玩主题</span>
      </a>
    </div>
    <div class="mp-header-right">
      <router-link :to="{name: 'city'}" class="mp-linkarea">
        <span>
          {{city}}<i class="iconfont">&#xe6aa;</i>
        </span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'QunarHomeHeader',

  computed:{
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  @import '~styles/mixins.styl';

  .mp-header
    display flex
    height .88rem
    background $bgColor

    .mp-linkarea
      display block
      height 100%

    .mp-header-left
      display inline-block
      width .4rem
      line-height .88rem
      padding 0 .2rem
      color #fff
      font-size .36rem
    

    .mp-header-title
      flex 1
      position relative
      height .6rem
      margin .14rem 0
      background #fff
      line-height .6rem
      border-radius .06rem

      .mp-icon-search
        position absolute
        left .21rem
        top 50%
        transform translateY(-50%)
        color #e4e7ea
        ellipsis()

      .mp-single-line
        overflow hidden
        position absolute
        left .62rem
        top 0
        width 3.6rem
        white-space nowrap
        text-overflow ellipsis
        color #e4e7ea

    .mp-header-right
      width 1.32rem
      text-align center
      .mp-linkarea
        display inline-block
        line-height .88rem
        margin-right .04rem
        color #fff
    
</style>
