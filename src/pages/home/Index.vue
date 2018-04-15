<template>
  <div class="mp-page">
    
    <qunar-home-header></qunar-home-header>
    <qunar-home-slider :items="slides"></qunar-home-slider>
    <qunar-home-icons :items="icons"></qunar-home-icons>
    <qunar-home-item-list></qunar-home-item-list>
    <qunar-home-recommend-list :items="recommend"></qunar-home-recommend-list>
    <qunar-home-guess-you-like :items="guess"></qunar-home-guess-you-like>
    <qunar-home-weekends :items="weekends"></qunar-home-weekends>
    <qunar-home-price-desc></qunar-home-price-desc>
    <qunar-home-download v-if="isShow" @close-event="isShow = false"></qunar-home-download>

  </div>
</template>


<script>
import { mapState } from 'vuex'
import axios from 'axios'
import QunarHomeHeader from './QunarHomeHeader.vue'
import QunarHomeSlider from './QunarHomeSlider.vue'
import QunarHomeIcons from './QunarHomeIcons.vue'
import QunarHomeItemList from './QunarHomeItemList.vue'
import QunarHomeRecommendList from './QunarHomeRecommendList.vue'
import QunarHomeGuessYouLike from './QunarHomeGuessYouLike.vue'
import QunarHomeWeekends from './QunarHomeWeekends.vue'
import QunarHomePriceDesc from './QunarHomePriceDesc'

import QunarHomeDownload from './QunarHomeDownload.vue'

export default {
  name: 'Home',

  computed:{
    ...mapState(['city'])
  },

  data(){
    return {
      slides: [],
      icons: [],
      recommend:[],
      weekends:[],
      guess:[],
      lastCity:'',
      isShow: true
    }
  },
  components:{
    QunarHomeHeader,
    QunarHomeSlider,
    QunarHomeIcons,
    QunarHomeItemList,
    QunarHomeRecommendList,
    QunarHomeGuessYouLike,
    QunarHomeWeekends,
    QunarHomePriceDesc,
    QunarHomeDownload
  },
  mounted(){
    console.log('mounted被调用')
    this.setLastCityAndGetIndexData()
  },

  activated(){
    console.log('activated被调用')
    if(this.lastCity !== this.city){
      this.setLastCityAndGetIndexData()
    }
  },  
  methods:{
    getData(){
      axios.get(`/api/index.json?city=${this.city}`)
        .then( res => res.data )
        .then( data => this.getIndexRes(data.data) )
    },
    getIndexRes(data){
      this.slides = data.swiper
      this.icons = data.icons
      this.recommend = data.city.BJ.recommend
      this.weekends = data.city.BJ.weekends
      this.guess = data.city.BJ.guess_you_like
    },

    setLastCityAndGetIndexData(){
      this.lastCity = this.city
      this.getData()
    }
  }
}

</script>

<style lang="stylus" scoped>
  .mp-page
    position absolute
    top 0
    left 0
    width 100%
    min-height 100%
    background #f5f5f5
  
</style>
