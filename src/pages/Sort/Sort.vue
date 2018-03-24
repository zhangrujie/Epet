<template>
  <div class="sort_all">
    <div class="sort_header">
      <div class="sort_header_left">
        <div class="left_narrow">
          <a href="">分类</a>
        </div>
      </div>
      <div class="sort_header_right">
        <div class="right_narrow">
          <a href="">品牌</a>
          <img src="./imags/search.png" alt="">
        </div>
      </div>
    </div>
    <div class="sort_main on">
      <div class="main_container" style="display: none">
        <div class="sort_main_left">
          <ul>
            <li>为您推荐</li>
            <li>E宠国际</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
            <li>狗狗服饰</li>
            <li>狗狗窝垫</li>
            <li>狗狗生活</li>
            <li>狗狗玩具</li>
            <li>狗狗保健</li>
            <li>狗狗医疗</li>
            <li>狗狗牵引</li>
            <li>狗狗美容</li>
            <li>狗狗周边</li>
            <li>狗狗清洁</li>
          </ul>
        </div>
        <div class="sort_main_right">
          <div class="sort_main_right_container">
            <span class="container_word">热门分类</span>
            <div class="container_picture">
              <div class="picture_word">
                <img src="./sort/1.jpg" >
                <span>肠胃调理</span>
              </div>
              <div class="picture_word">
                <img src="./sort/2.jpg" >
                <span>国产狗粮</span>
              </div>
              <div class="picture_word">
                <img src="./sort/3.jpg" >
                <span>强化免疫</span>
              </div>
              <div class="picture_word">
                <img src="./sort/4.jpg" >
                <span>磨牙洁齿</span>
              </div>
              <div class="picture_word">
                <img src="./sort/5.jpg" >
                <span>进口狗粮</span>
              </div>
              <div class="picture_word">
                <img src="./sort/6.jpg" >
                <span>体内驱虫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sort_brand">
        <div class="brand_container">
          <div class="brand_title">
            <span>——推荐品牌——</span>
          </div>
          <div class="brand_content">
            <ul class="brand_list">
              <li class="brand_item">
                <img src="./imags/brand1.jpg">
                <span class="brand_name">冠能</span>
                <span class="country">美国</span>
              </li>
              <li class="brand_item">
                <img src="./imags/brand1.jpg">
                <span class="brand_name">冠能</span>
                <span class="country">美国</span>
              </li>
              <li class="brand_item">
                <img src="./imags/brand1.jpg">
                <span class="brand_name">冠能</span>
                <span class="country">美国</span>
              </li>
              <li class="brand_item">
                <img src="./imags/brand1.jpg">
                <span class="brand_name">冠能</span>
                <span class="country">美国</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'

  export default{
    mounted(){
//      new BScroll('.sort_main_left',{
//        click:true
//      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  *{
    box-sizing: border-box;
  }
  body,html{
    width 100%
    height 100%
    background #fff
  }
  .sort_all
    width 100%
    height 100%
    position relative
    .sort_header
      width 100%
      height 40px
      position fixed
      font-size 14px
      border-bottom: 1px solid #cbcbcb;
      background-color: #fff
      top 0
      z-index 111
      .sort_header_left
        width 50%
        height 40px
        line-height 40px
        float left
        text-align center
        .left_narrow
          justify-content center
          width 90%
          height 40px
          position relative

          a
            color #000000
            border-bottom 1px solid red
            float right
      /*background lightblue*/
      .sort_header_right
        width 50%
        height 40px
        line-height 40px
        /*background hotpink*/
        float left
        .right_narrow
          margin-left 10%
          width 85%
          height 40px
          display flex
          justify-content space-between
          align-items center
          a
            color #000000
            border-bottom 1px solid red
          img
            margin-right 3px
            width 16px
            height 16px
            &.on
              display block



    .sort_main
      /*padding-top 40px*/
      width 100%
      height 100%
      margin-top 40px
      font-size 14px
      .main_container
        width 100%
        height 100%
        .sort_main_left
          height 100%
          width 20%
          background #fff
          float left
          border-right: 5px solid #f3f4f5;
          ul
            padding-bottom 100px
            li
              width 70px
              height 50px
              font-size 13px
              border-bottom: 1px solid #f3f4f5;
              display flex
              justify-content center
              align-items center

        .sort_main_right
          border-top: 5px solid #f3f4f5;
          width 80%
          height 100%
          background #fff
          float right
          .sort_main_right_container
            width 100%
            border-top: 1px solid #f3f4f5;
            .container_word
              margin-top 15px
              margin-left 5px
              display block
              color: #999;
              font-size 12px
            .container_picture
              .picture_word
                margin-top 10px
                font-size 13px
                text-align center
                width 33.33%
                float left
                img
                  width 85px
                  height 85px
                span
                  display: block
                  margin-top 10px

      .sort_brand
        width 100%
        height 100%
        .brand_container
          width 100%
          .brand_title
            padding-top 20px
            width 100%
            text-align center
            span
              font-size 12px
              color #999


          .brand_content
            width 100%
            .brand_list
              box-sizing border-box
              padding 15px 5px
              width 100%
              display flex
              flex-wrap wrap
              .brand_item
                padding 0 5px
                margin-top 15px
                text-align center
                display flex
                flex-direction column
                justify-content space-between
                width 33.3%
                >img
                  width 100%
                  display block
                  border 1px solid #e2e2e2
                >span
                  margin-top 10px
                .brand_name
                  font-size 14px
                .country
                  font-size 12px
                  color #999
</style>
