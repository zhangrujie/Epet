<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide  v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  html,body
    width 100%
    height 100%
    #app
      height 100%
      width 100%
</style>
