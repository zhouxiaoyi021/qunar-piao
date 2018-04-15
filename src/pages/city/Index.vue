<template>
  <div>
    <ul>
      <li v-for="city of cities" :key="city.id" @click="changeCityHandle(city.name)">
       {{city.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      cities: [
        {
          id:1, name:'上海'}, 
          {id:2, name:'南京'}, 
          {id:3, name:'北京'}
        ]
    }
  },
  methods:{
    ...mapMutations(['changeCity']),
    changeCityHandle(city){
      this.changeCity(city)
      //跳转到首页
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  li{
    font-size:120px;
  }
</style>
