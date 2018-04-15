<template>
  <div class="mp-item-list border-top">
    <div class="mp-listentrance-item border-right">
      <i class="iconfont">&#xe639;</i>定位失败
    </div>
    <div class="mp-listentrance-item">
      <i class="iconfont">&#xe600;</i>5折泡温泉
    </div>
  </div>
</template>

<script>
export default {
  name: 'QunarHomeItemList'
}
</script>

<style lang="stylus" scoped>
  .mp-item-list
    display flex 
    width: 100%
    background #fff
    .mp-listentrance-item
      overflow hidden
      flex 1
      height .98rem
      line-height .98rem
      text-align center
      i
        margin-right .05rem
        color #616161
        font-size: .32rem
        
      
    
</style>
