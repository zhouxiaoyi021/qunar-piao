<template>
  <div class="mp-list">
    <div class="mp-list-title">
      <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt=""><span class="mp-title">猜你喜欢</span>
    </div>
    <ul class="mp-like-list">
      <li class="mp-like-item border-bottom" v-for="item of items" :key="item.id">
        <a href="javascript:;" class="mp-fulllink">
          <div class="mp-like-img-icon">
            <img :src="item.imgUrl" alt="">
          </div>
      
          <div class="mp-like-tag mp-like-today" v-if="item.predefined_type === 1">可订今日</div>
          <div class="mp-like-tag  mp-like-tomorrow" v-if="item.predefined_type === 2">可订明日</div>

          <div class="mp-like-info">
            <div class="mp-like-title">{{item.title}}</div>
          <div class="mp-like-comment">
            <span class="mp-starlevel">
              <strong class="iconfont mp-starlevel-gain" :style="{ width: `${item.comments.starlevel * 20 }%` }">&#xe722;&#xe722;&#xe722;&#xe722;&#xe722;</strong>
              <strong class="iconfont mp-starlevel-total">&#xe722;&#xe722;&#xe722;&#xe722;&#xe722;</strong>
            </span>
            <span class="mp-comment-num">{{item.comments.num}}条评论</span>
          </div>
          <div class="mp-like-price">
            <span class="mp-price">¥</span>
            <span class="mp-price-num">{{item.price}}</span>起
            <span class="mp-like-address">{{item.address}}</span>
          </div>
          <div class="mp-like-feature" v-if="item.feature">
            <div>{{item.feature}}</div>
          </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QunarHomeGuessYouLike',
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
    .mp-like-list
      margin-left .24rem 
      .mp-like-item
        position relative
        overflow hidden
        padding .2rem 0
        .mp-fulllink
          display block
          width 100%
          height 100%
          .mp-like-img-icon
            float left
            overflow: hidden
            width: 2rem
            height 2rem
            img
              width 100%
          .mp-like-tag
            position: absolute
            top .2rem
            left 0
            width 1.02rem
            height .38rem
            background-size 100%
            color #fff
            font-size .2rem
            line-height .38rem
            text-indent .04rem
          .mp-like-today
            background-image url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
          .mp-like-tomorrow
            background-image url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)
          .mp-like-info
            overflow hidden
            padding-left .22rem
            .mp-like-title
              margin-top .26rem
              height .44rem
              line-height .44rem
              color #212121
              font-size .32rem
              ellipsis()
            .mp-like-price
              position: relative
              margin-top .22rem
              color #616161;
              font-size .24rem
              line-height .4rem
              .mp-price, .mp-price-num
                color #ff8300
              .mp-price-num
                font-size .4rem
              .mp-like-address
                position absolute
                right .24rem
                bottom 0
            .mp-like-feature
              display inline-block
              margin-top .48rem
              margin-right .24rem
              background #fff9f9
              padding .04rem .1rem
              color #f55
              font-size .24rem
              line-height .34rem
            .mp-like-comment
              margin-top .14rem
              height .34rem
              .mp-starlevel
                display inline-block
                position relative
                width 1.66rem
                height .28rem
                line-height .28rem
                font-size .28rem
                letter-spacing .02rem
                transform scale(.83)
                transform-origin: 0 0
                .mp-starlevel-gain, .mp-starlevel-total
                  overflow hidden
                  position absolute
                  top .04rem
                  left 0
                  height .28rem
                .mp-starlevel-gain
                  z-index 2
                  color #ffb436
                .mp-starlevel-total
                  z-index 1
                  color #e0e0e0
              .mp-comment-num
                color #616161
                font-size .24rem
                line-height .34rem
                vertical-align text-bottom
</style>
