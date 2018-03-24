<template>
  <div class="person">
    <div class="person_header">
      <span class="iconfont icon-fanhui" @click="$router.back()"></span>
      <a href="javascript:;" class="register">注册</a>
    </div>
    <div class="login_way">
      <ul class="btn_wrap">
        <li class="btn" @click="showLoginWay">
          <span>普通登录</span>
          <span class="icon_span" v-show="isShow">
            <i class="iconfont icon-xiangshang2"></i>
          </span>
        </li>
        <li class="btn" @click="showLoginWay">
          <span>手机动态密码登录</span>
          <span class="icon_span"  v-show="!isShow">
            <i class="iconfont icon-xiangshang2"></i>
          </span>
        </li>
      </ul>
    </div>
    <div class="login_wrap" >
      <!-- 普通登录 -->
      <ul class="login_container"  v-show="isShow" >
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-account"></i>
          </span>
          <input class="commen_input" type="text" placeholder="手机号/邮箱/用户名">
        </li>
        <li class="commen_li">
            <span class="icon_span">
              <i class="iconfont icon-suo"></i>
            </span>
          <input class="commen_input" type="text" placeholder="输入密码">
        </li>
        <li class="forgetpwd">
          <p class="forgetpwd_text">忘记密码？</p>
        </li>
        <li class="login_btn">
          <div class="btn_text">登录</div>
        </li>
      </ul>
      <!-- 手机动态密码登录 -->
      <ul class="login_container" v-show="!isShow">
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-shouji"></i>
          </span>
          <input class="commen_input" type="text" placeholder="已注册的手机号">
        </li>
        <li class="commen_li">
            <span class="icon_span">
              <i class="iconfont icon-suo"></i>
            </span>
          <input class="commen_input" type="text" placeholder="请输入图片验证码">
          <span class="getimg">
            <img src="./images/yan.jpg" alt="">
          </span>
        </li>
        <li class="commen_li">
          <span class="icon_span">
            <i class="iconfont icon-suo"></i>
          </span>
          <input class="commen_input" type="text" placeholder="手机验证码">
          <span class="getcode">获取验证码</span>
        </li>
        <li class="forgetpwd">
          <p class="forgetpwd_text">忘记密码？</p>
        </li>
        <li class="login_btn">
          <div class="btn_text">登录</div>
        </li>
      </ul>
    </div>
    <div class="partner_web">
      <div class="partner_web_title">
        <span>合作网站登录</span>
      </div>
      <div class="partner_web_icon">
        <a href="javascript:;" class="login_icon">
          <img src="./images/zhi.png" alt="">
        </a>
        <a href="javascript:;" class="login_icon">
          <img src="./images/QQ.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        isShow: true
      }
    },
    methods: {
      showLoginWay(){
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .person
    width 100%
    height 100%
    position relative
    .person_header
      position fixed
      top 0
      z-index 100
      width 100%
      padding 0 10px
      line-height 40px
      box-sizing border-box
      background-size
      height 50px
      display flex
      justify-content space-between
      .iconfont
        font-size 22px
        color #fff
      .register
        display block
        color #fff
    .login_way
      background url('./images/bj.png')
      background-repeat no-repeat
      background-size 100% 100%
      width 100%
      height 200px
      display flex
      justify-content space-around
      align-items flex-end
      .btn_wrap
        width 100%
        display flex
        justify-content space-around
        padding-top 10px
        background rgba(200,200,200,.3)
        font-size 14px
        color #fff
        .icon_span
          display block
          text-align center
          margin-top 10px
          line-height 0
          .iconfont
            font-size 18px
            color #fff




    .login_wrap
      width 100%
      box-sizing border-box
      padding 0 20px
      .login_container
        width 100%
        .commen_li
          width 100%
          line-height 50px
          font-size 14px
          border-bottom 1px solid #ddd
          color #ddd
          >input::-webkit-input-placeholder
            color #ddd
          .commen_input
            outline none
          .getimg
            margin-left 50px
            line-height 0
            text-align bottom
          .getcode
            margin-left 50px
            padding  3px
            border 1px solid #ddd

        .forgetpwd
          width 100%
          box-sizing border-box
          padding 10px 10px
          text-align right
          .forgetpwd_text
            padding-right 20px
            font-size 22px
            color #999


        .login_btn
          width 100%
          .btn_text
            line-height 50px
            color #fff
            font-size 18px
            text-align center
            background #2ec975
            border-radius 8px

    .partner_web
      width 100%
      position fixed
      bottom 0
      .partner_web_title
        width 100%
        text-align center
        margin-bottom 20px
        color #ddd
      .partner_web_icon
        width 100%
        text-align center
        margin-bottom 20px
        .login_icon
          &:nth-child(1)
            margin-right 20px
          >img
            width 50px
</style>
