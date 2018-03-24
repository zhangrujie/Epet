<template>
  <div class="cart_page">
    <div class="cart_header">
      <div class="cart_container">
        <span class="back_btn" @click="$router.back()"></span>
        <span class="cart_font">购物车</span>
        <span class="fangkuai"></span>
      </div>
    </div>
    <div class="cart_content border-1px">
      <div class="cart_box">
        <div class="cart_car">
          <i class="iconfont icon-gouwucar"></i>
        </div>
        <div class="cart_blank">购物车是空的</div>
        <div class="cart_btn">
          <a href="javascript:">去逛逛</a>
          <a href="javascript:">我的收藏</a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart_page
    background #fff
    .cart_header
      background #fff
      width 100%
      height 55px
      .cart_container
        margin-left 10px
        margin-right 10px
        height 40px
        display flex
        justify-content space-between
        align-items center
        .cart_font
          /*width 90%*/
          height 45px
          align-items center
          font-size 18px
          margin-top 40px
          color #333
        .back_btn
          width 22px
          height 20px
          background url('./images/personal-bico1.png') no-repeat
          background-size 9px 17px
          margin-top 16px
        .fangkuai
          width 20px
          height 20px
          background url('./images/imgtk-new.png') no-repeat
          background-size 20px 20px
          margin-top 16px

    .cart_content
      position relative
      width 100%
      height 298px
      top-border-1px(#e4e4e4)
      display flex
      justify-content center
      .cart_box
        height 100%
        display flex
        flex-direction column
        justify-content center
        .cart_car
          width 100%
          height 120px
          text-align center
          /*padding-top 50px*/
          .iconfont
            margin 50px auto 20px
            font-size 110px
            color #dbdbdb
        .cart_blank
          height 20px
          text-align center
          color #dbdbdb
          line-height 20px
        .cart_btn
          padding-top 20px
          width 100%
          height 40px
          box-sizing border-box
          >a
            text-align center
            display inline-block
            width 100px
            height 40px
            border solid 1px #999
            line-height 40px
            border-radius 5px
            color #dbdbdb
            margin-left 5px
</style>
