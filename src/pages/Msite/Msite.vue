<template>
  <div class="msite_page">
    <div class="msite_header">
      <div class="hidden_img">
        <span><img src="./images/closebtn_03.png" ></span>
      </div>
      <div class="header_nav">
        <div class="nav_top">
          <div class="nav_container">
            <a class="nav_city" href="javascript:">
              <span>狗狗</span>
              <span>|</span>
              <span>北京</span>
              <i class="iconfont icon-zhcc_xiangxiajiantou"></i>
            </a>
            <span class="nav_search">
              <a class="nav_boo" href="javascript:">
                <input type="search" placeholder="搜索商品和品牌">
                <i class="iconfont icon-sousuo"></i>
              </a>
            </span>
            <a class="nav_msg" href="javascript:">
              <img src="./images/mydope.png">
            </a>
          </div>
        </div>
        <!--nav列表-->
        <div class="nav_bottom swiper-container" ref="nav">
          <ul class="nav_list swiper-wrapper" >
            <li class="nav_item swiper-slide"
                v-for="(menu,index) in homeData.menus" :key="index" @click="selectMenu(index)">
              <span class="nav_type" :class="{on:currentIndex === index}">{{menu.menu_name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="msite_scroll">
      <div class="msite_main">
        <div class="msite_carousel swiper-container" ref="lunbo">
          <div class="carousel_list swiper-wrapper">
            <a class="swiper-slide" href="javascript:"  v-for="dogBanner in homeData.dog_banner"><img :src="dogBanner"></a>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="msite_menu">
          <ul class="menu_list">
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu1.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu2.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu3.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu4.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu5.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu6.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu7.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu8.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu9.jpg">
              </a>
            </li>
            <li class="menu_item">
              <a href="javascript:">
                <img src="./images/menu10.jpg">
              </a>
            </li>
          </ul>
        </div>
        <div class="msite_newPop">
          <a class="newPop_img" href="javascript:">
            <img src="./images/newpeple.gif">
          </a>
        </div>
        <div class="msite_crazy">
          <div class="crazy_title">
            <span class="title_img"><img src="./images/crazy.png"></span>
            <div class="crazy_time">
              <span>本场结束</span>
              <span class="time_num">
              <i>17</i>:
              <i>00</i>
            </span>
              <span class="more">更多<i class="iconfont icon-icon-more"></i></span>
            </div>
          </div>
          <div class="crazy_goods swiper-container" ref="crazy">
            <ul class="crazy_container swiper-wrapper">
              <li class="goods_detail swiper-slide">
                <a href="javascript:">
                  <span class="goods_img"><img src="./images/goods.jpg"></span>
                  <span class="red_font">￥12.00</span>
                  <span class="gray_font">省108.00</span>
                </a>
              </li>
              <li class="goods_detail swiper-slide">
                <a href="javascript:">
                  <span class="goods_img"><img src="./images/goods2.jpg"></span>
                  <span class="red_font">￥12.00</span>
                  <span class="gray_font">省108.00</span>
                </a>
              </li>
              <li class="goods_detail swiper-slide">
                <a href="javascript:">
                  <span class="goods_img"><img src="./images/goods3.jpg"></span>
                  <span class="red_font">￥12.00</span>
                  <span class="gray_font">省108.00</span>
                </a>
              </li>
              <li class="goods_detail swiper-slide">
                <a href="javascript:">
                  <span class="goods_img"><img src="./images/goods4.jpg"></span>
                  <span class="red_font">￥12.00</span>
                  <span class="gray_font">省108.00</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="msite_strong">
          <img src="./images/strong.jpg">
        </div>
        <div class="msite_315">
          <img src="./images/315.gif">
        </div>
        <div class="msite_strong">
          <img src="./images/strong.jpg">
        </div>
        <div class="msite_starRou">
          <ul class="starRou_list">
            <li class="starRou_item">
              <a class="starRou_img" href="javascript:">
                <img src="./images/starRou1.jpg">
              </a>
            </li>
            <li class="starRou_item">
              <a class="starRou_img" href="javascript:">
                <img src="./images/starRou1.jpg">
              </a>
            </li>
            <li class="starRou_item">
              <a class="starRou_img" href="javascript:">
                <img src="./images/starRou1.jpg">
              </a>
            </li>
            <li class="starRou_item">
              <a class="starRou_img" href="javascript:">
                <img src="./images/starRou1.jpg">
              </a>
            </li>
          </ul>
        </div>
        <div class="msite_strong">
          <img src="./images/strong.jpg">
        </div>
        <div class="msite_carousel2 swiper-container"  ref="carousel">
          <div class="carousel2_list swiper-wrapper">
            <a class="swiper-slide" href="javascript:"><img src="./images/carousel1.jpg"></a>
            <a class="swiper-slide" href="javascript:"><img src="./images/carousel1.jpg"></a>
            <a class="swiper-slide" href="javascript:"><img src="./images/carousel1.jpg"></a>
            <a class="swiper-slide" href="javascript:"><img src="./images/carousel1.jpg"></a>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="msite_strong">
          <img src="./images/strong.jpg">
        </div>
        <div class="msite_goodGoods">
          <div class="goodGoods_container">
            <ul class="goodGoods_left">
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left2.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_right">
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right1.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right3.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_left">
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left2.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_right">
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right1.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right3.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_left">
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left2.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_right">
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right1.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right3.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_left">
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left2.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_right">
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right1.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right3.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_left">
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left1.jpg">
                </a>
              </li>
              <li class="left_list">
                <a href="javascript:">
                  <img src="./images/left2.jpg">
                </a>
              </li>
            </ul>
            <ul class="goodGoods_right">
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right1.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right2.jpg">
                </a>
              </li>
              <li class="right_list">
                <a href="javascript:">
                  <img src="./images/right3.jpg">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="msite_gold">
          <a class="gold_img" href="javascript:">
            <img src="./images/gold.jpg">
          </a>
        </div>
        <div class="msite_strong">
          <img src="./images/strong.jpg">
        </div>
        <div class="msite_fashion">
          <div class="fashion_left">
            <a class="fashion_left_img" href="javascript:">
              <img src="./images/fashion1.jpg">
            </a>
          </div>
          <div class="fashion_right">
            <a class="fashion_right_img" href="javascript:">
              <img src="./images/fashion2.jpg">
            </a>
            <a class="fashion_right_img" href="javascript:">
              <img src="./images/fashion3.jpg">
            </a>
          </div>
        </div>
        <div class="msite_strong">
          <img src="./images/strong.jpg">
        </div>
        <div class="msite_feature">
          <ul class="feature_left">
            <li class="left_img">
              <a href="javascript:">
                <img src="./images/feature.jpg">
              </a>
            </li>
            <li class="left_img">
              <a href="javascript:">
                <img src="./images/feature.jpg">
              </a>
            </li>
            <li class="left_img">
              <a href="javascript:">
                <img src="./images/feature.jpg">
              </a>
            </li>
          </ul>
          <ul class="feature_right">
            <li class="right_img">
              <a href="javascript:">
                <img src="./images/feature.jpg">
              </a>
            </li>
            <li class="right_img">
              <a href="javascript:">
                <img src="./images/feature.jpg">
              </a>
            </li>
            <li class="right_img">
              <a href="javascript:">
                <img src="./images/feature.jpg">
              </a>
            </li>
          </ul>
      </div>
        <div class="msite_footer">
          <div class="footer_top">
            <span class="red_font">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <p class="footer_bottom">
            <a href="javascript:" class="company">
              ©wap.epet.com版权 : 重庆易宠科技有限公司
            </a>
          </p>
        </div>
      </div>
      <div class="dog"></div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        //初始化菜单导航
        menus:[],
        currentIndex: 0,
        dog_banner:[],
      }
    },
    mounted(){

      this.$store.dispatch('getHomeData', ()=>{
        this.$nextTick(()=>{
          var swiper1 = new Swiper(this.$refs.nav, {
            slidesPerView: 5,
            spaceBetween: 20,
          });

          var swiper2 = new Swiper(this.$refs.carousel, {
            loop: true,
            centeredSlides: true,
            autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination'
            },
          });

          var swiper3 = new Swiper(this.$refs.lunbo, {
            loop: true,
            centeredSlides: true,
            autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination'
            },
          });

          var swiper4 = new Swiper(this.$refs.crazy, {
            slidesPerView: 3,
            spaceBetween: 20,
          });
        })
      })
      new BScroll('.msite_scroll', {click: true})
    },
    computed: {
      ...mapState(['homeData'])
    },
    methods: {
      // 选中当前menu，更新样式
      selectMenu(index){
        this.currentIndex = index
      },
      // 关闭广告
      closeAdvertising(){
        this.showAdvertising = false
      }
    }
  }
</script>
  <style lang="stylus" rel="stylesheet/stylus">
    .msite_page
      position relative
      width 100%
      height 100%
      .msite_header
        position fixed
        left 0
        top 0
        right 0
        z-index 100
        .hidden_img
          position relative
          height 55px
          margin-top 0
          background url('./images/guanggao.jpg') no-repeat
          background-size 100% 55px
          >span
            width 5%
            vertical-align middle
            position absolute
            top 15px
            left 2%
            >img
              width 19px
        .header_nav
          width 100%
          height 86px
          /*top 55px*/
          background  #fff
          .nav_top
            width 100%
            height 50px
            padding-top 5px
            .nav_container
              margin 0 10px
              height 40px
              text-algin center
              line-height 40px
              .nav_city
                font-size 14px
                text-algin center
                >span
                  color #898989
                >i
                  font-size 12px
                  margin-left -3px
              .nav_search
                margin-left 3px
                margin-right 3px
                display inline-block
                position relative
                width 233px
                height 25px
                background #e9e9e9
                line-height 22px
                border-radius 4px
                .nav_boo
                  color #333333
                  input
                    margin-left 10px
                    border 0
                    height 25px
                    background #e9e9e9
                    border-radius 4px
                    color #bcbcbc
                    font-size 13px
                  .iconfont
                    font-size 8px
                    position absolute
                    right 5px
                    top 2px
              .nav_msg
                >img
                  width 25px
                  vertical-align middle
          .nav_bottom
            width 100%
            height 36px
            text-align center
            .nav_list
              width 100%
              display flex
              justify-content space-between
              .nav_item
                width 100%
                .nav_type
                  text-align center
                  width 100%
                  height 100%
                  line-height 20px
                  font-size 14px
                .on
                  color green
                  border-bottom 1px solid green
      .msite_scroll
        width 100%
        height 100%
        .msite_main
          background #fff
          position absolute
          top 141px
          width 100%
          .msite_carousel
            width 100%
            height 160px
            .carousel_list
              width 100%
              height 100%
              >a
                >img
                  width 100%
                  display block
          .msite_menu
            width 100%
            height 180px
            .menu_list
              width 100%
              height 100%
              display flex
              justify-content space-between
              flex-wrap wrap
              .menu_item
                height 90px
                >a
                  >img
                    width 75px
                    height:90px
          .msite_newPop
            width 100%
            height 120px
            .newPop_img
              display block
              >img
                height 120px
                width 100%
          .msite_crazy
            width 100%
            height 169.77px
            background #fff
            .crazy_title
              width 100%
              height 39.2px
              display flex
              justify-content space-between
              .title_img
                >img
                  width 85px
                  height 19.2px
              .crazy_time
                text-align center
                >span
                  font-size 13px
                  >i
                    font-style normal
                    display inline-block
                    height 20px
                    border 1px solid #ddd
                    padding 1px 2px
                    line-height 20px
                .more
                  margin-left 10px
                  color #999
                  .iconfont
                    font-size 12px
                    border none

          .crazy_goods
            width 100%
            height 130px
            .crazy_container
              height 100%
              display flex
              .goods_detail
                /*display inline-block*/
                width 98.5714px
                margin-right 10px
                display flex
                flex-direction column
                justify-content center
                text-align center
                >a
                  .goods_img
                    >img
                      width 84.56px
                      height 84.56px
                  .red_font
                    /*display block*/
                    font-size 14px
                    color red
                    text-align center
                  .gray_font
                    margin-top 10px
                    display block
                    font-size 12px
                    color #999
                    text-align center
          .msite_strong
            pointer-events: auto;
            width 100%
            >img
              display block
              width 100%

          .msite_315
            width 100%
            >img
              display block
              width 100%
          .msite_starRou
            width 100%
            .starRou_list
              display flex
              justify-content space-between
              flex-wrap wrap
              .starRou_item
                width 50%
                .starRou_img
                  >img
                    width 100%

          .msite_carousel2
            width 100%
            .carousel2_list
              width 100%
              display flex
              >a
                >img
                  display block
                  width 100%
          .msite_goodGoods
            width 100%
            .goodGoods_container
              width 100%
              .goodGoods_left
                float left
                width 50%
                .left_list
                  width 100%
                  >a
                    >img
                      display block
                      width 100%
              .goodGoods_right
                float right
                width 50%
                .right_list
                  width 100%
                  >a
                    >img
                      display block
                      width 100%
          .msite_gold
            width 100%
            .gold_img
              width 100%
              >img
                width 100%
                display block
          .msite_fashion
            display flex
            justify-content space-between
            width 100%
            .fashion_left
              width 50%
              .fashion_left_img
                >img
                  width 100%
                  display block
            .fashion_right
              width 50%
              display flex
              flex-direction column
              justify-content space-between
              .fashion_right_img
                >img
                  width 100%
                  display block
          .msite_feature
            background #000
            width 100%
            display flex
            .feature_left
              display flex
              flex-direction column
              justify-content center
              width 50%
              .left_img
                margin-top 0
                width 100%
                >a
                  >img
                    width 100%
            .feature_right
              width 50%
              .right_img
                width 100%
                >a
                  >img
                    width 100%
          .msite_footer
            background #fff
            padding-bottom 200px
            width 100%
            text-align center
            font-size 14px
            margin-top 30px
            .footer_top
              display flex
              width 100%
              justify-content center
              .red_font
                color #f00
              >span
                margin-left 20px
            .footer_bottom
              font-size 14px
              display flex
              justify-content center
              .company
                padding-top 10px
                margin-left 13px
                color #000

        .dog
          position fixed
          right 0
          bottom 100px
          z-index 222
          width 43px
          height 47px
          background url('./images/dog.png') no-repeat
          background-size 85px 47px
          animation dog_animation 2s steps(1, end) infinite
          @keyframes dog_animation
            50%
              background-position -43px 0
  </style>
