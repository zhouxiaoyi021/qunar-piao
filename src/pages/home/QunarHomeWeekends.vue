<template>
  <div class="mp-list">
    <div class="mp-list-title"><h2>周末去哪儿</h2></div>
    <ul class="mp-weekend-list">
      <li class="mp-weekend-item" v-for="item of items" :key="item.id">
        <a href="javascript:;" class="mp-fulllink">
          <div class="mp-weekend-img-wrap">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="mp-info">
            <p class="mp-info-name">{{item.place}}</p>
            <p class="mp-info-desc">{{item.description}}</p>
          </div>
        </a>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QunarHomeWeekends',
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
    .mp-list-title
      height .8rem
      padding-left .26rem
      line-height .8rem
      color #212121
    .mp-weekend-list
      .mp-weekend-img-wrap
        height 0
        overflow hidden
        padding-bottom 33.4375%
        background red
        img
          width 100%
      .mp-info
        background #fff
        position relative
        padding .14rem .2rem .2rem .2rem
        .mp-info-name, .mp-info-desc
          padding-right 1.4rem
          ellipsis()
        .mp-info-name
          color #212121
          font-size .28rem
          line-height .48rem
        .mp-info-desc
          color #616161
          font-size: .24rem
          line-height: .42rem
</style>

