# day01
  ## 功能
    1、使用 vue-cli 简单搭建epet E宠商城项目
    2、大致画了一下整体布局，没有写静态页面，直接在组件模板
    2、使用 vue-router 技术，搭建首页/分类/购物车/我的E宠 4个一级路由
    3、使用 BScroll 技术实现导航菜单的水平滑动（橡皮筋）效果
    4、使用 Swiper 第三方库实现首页轮播效果
    5、底部footer_guide功能
  ## 问题
    1、问题：WebStorm上使用stylus的时候经常报错找不到class
       原因：网速太慢，下载stylus 和 stylus-loader依赖包的时候丢包
       注意：1）如果写静态页面使用stylus，最好创建stylus文件夹/index.styl文件，然后再创建一个
       css文件夹，然后在WebStorm终端执行 cd stylus（进入该文件夹）--> stylus -w index.styl -o ../css/index.css
       执行完毕，在css文件夹下会多一个index.css文件，记得在主页面引入该生成的index.css文件
       2）如果直接在项目组件里面写stylus，那就不用执行上面的代码，直接在组件的style标签按照正常格式写就可以了，
       style标签要配置成<style lang="stylus" rel="stylesheet/stylus"></style>
    2、问题：使用Swiper做轮播图，一致报错，不出效果
            报错： "TypeError: Swiper is not a constructor"
       原因：使用let 重复定义了Swiper 不应写let Swiper = new Swiper()
             配置写错误，pagination是配置小圆点的
    3、问题：使用BScroll给主体内容做Y轴的滚动效果（带橡皮筋的效果的），没有效果，滑动不了
       原因：要用来绑定创建BScroll对象的这个容器没有限定高度（案例中该容器的高度应该为600多才对），内容完全
       是子元素撑开的，所以产生不了滚动，所以要给给容器确定高度，并且它左右的子元素的高度总和要高于它的高度，
       方案：一层一层找上去参考父级的百分百height，最终参考到初始包含块一样就可以，如果还不行，就在主组件App的
       根标签也添加一个id='app'，跟主页面index.html一致，因为有可能这里多了一层div有可能找不到id='app'

  ## 使用到的插件的下载方式
     1、使用vue的脚手架创建项目
        npm install -g vue-cli （如果已经全局安装过就不用再执行）
        vue init webpack edogs  （使用webpack构建工具，项目名edogs）
        cd edogs    （进入到项目文件夹）
        npm install   （安装所有依赖，或者直接 npm i）
        npm run dev    （运行项目,访问: localhost:8080）
        注意：如果想要npm run dev后自动打开浏览器，可以在config文件夹/app.js，改一下配置
          autoOpenBrowser: false, 将false改成true就可以了
     2、安装stylus依赖包
      npm install stylus stylus-loader --save-dev
    3、安装swiper
      npm install --save swiper
      在当前使用的组件引入(实现图片轮播)
        import Swiper from 'swiper'
        import 'swiper/dist/css/swiper.min.css'  （样式）
      1）模版必须使用它的结构,类名也必须一样，如果要创建多个swiper对象，那可以给
          swiper-container后面再加一个属于自己的类名，配置获取到该元素时，两个类名同时写
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="javascript:" class="link_to">
                           // 上面三层结构必不可少的，下面a标签及img是的可替换的内容
                          <img src="./images/2-bander1.jpg">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="javascript:" class="link_to">
                           // 上面三层结构必不可少的，下面a标签及img是的可替换的内容
                          <img src="./images/2-bander1.jpg">
                        </a>
                      </div>
                    </div>
                    // 小圆点
                    <div class="swiper-pagination"></div>
                  </div>
      2）js配置
          <script>
            import Swiper from 'swiper'
            import 'swiper/dist/css/swiper.min.css'
            export default{
              mounted(){
               new Swiper('.swiper-container', {
                  loop: true,
                 // 配置小圆点
                  pagination: {
                    // el必须是小圆点的结构
                    el: '.swiper-pagination'
                  },
                  autoplay: {  // 配置无限循环轮播
                           delay: 1500,
                           disableOnInteraction: false,
                  }
                })
              }
            }
          </script>
       3）style样式设置
          .swiper-container
            width 100%
            .swiper-wrapper
              width 100%
              .swiper-slide
                width 100%
                .link_to
                  display block
                  width 100%
                  >img
                    display block
                    width 100%
            .swiper-pagination
              >span.swiper-pagination-bullet-active
                background #02a774
       ## 使用swiper来做文字导航菜单的滑动的配置
                // menu菜单导航
                new Swiper('.home_menu.swiper-container',{
                  slidesPerView: 5,  //设置一页显示的个数
                  //spaceBetween: 20   // 每个之间的间距
                })

    4、安装BScroll
          npm install --save better-scroll
          当前组件引入 import BScroll from 'better-scroll'
          1)在mounted函数中创建BScroll对象
          if(!this.scroll){  // 如果还没有scroll对象则创建一个
            this.scroll = new BScroll('.home_container',{
              click: true
            })
          }else{  // 已经存在scroll对象，则要通知该对象更新
            this.scroll.refresh()
          }
          注意: 注意使用的条件，①容器的高度要确定，②滑动的列表高度不确定但是必须要高于容器的高度
            home_container的高度要确定（不用具体，参考父级的百分百就可以，一层一层的父级都要参考，
           最终参考到body的百分百，并且要设置box-sizing border-box，如果还不行，就在App.vue组件的模版标签的
           根标签div也加一个与主页面一致

    5、swiper的监视方式两种
      1）在mounted的中dispatch('actionName',callback),
          ①callback +  $nextTick() ②在相应的action函数中接收callback，并且在commit之后判断
          并调用（callback && callback（））
      2）使用watch + $nextTick()
          // 第二中实现使用Swiper显示轮播，创建Swiper对象方法
          watch: {
             foodTypes(){
               this.$nextTick(() => {
                 //swiper
                 var swiper = new Swiper('.swiper-container', {
                   loop: true,
                   pagination: {
                     el: '.swiper-pagination'
                   }
                 })
               })
             }
           }
    6、使用mock模拟数据
      （1）原理：拦截ajax请求，生成随机的数据返回，但是现在我没有使用随机的，而是自己做的JSON数据
      （2）相关链接：a.http://mockjs.com/      b.https://github.com/nuysoft/Mock
      （3）安装：npm install mockjs --save
      （4）使用：
          1）在mock文件夹中的MockServer.jx中引入mockjs和JSON数据
              import Mock from 'mockjs'
              import homeData from './homepage.json'
              // 向外提供多个数据接口，格式如下：
              //1、向外提供头部menus的数据，注意code是标识成功返回信息的
              Mock.mock('/menus', {code:0, data:homeData.menus})
          2）在JS入口主文件引入（引入方式与css样式类似，就可以直接用数据了）、
              import './mock/MockServer'
          3）在api文件夹中引入之前封装好的ajax.js（使用axios封装的，注意最后返回直接是data数据了，
          直接取数据就可以了，如果不封装就返回的是promise对象，取数据要response.data才可以）
          4）api/app.js：当前项目接口ajax请求模块
              根据mock提供的接口，写ajax请求函数,比如
             // 向外提供首页home的数据
             Mock.mock('/home_data', {code: 0 , data: homeDate})
          5）在store/state.js中初始化要显示的数据
              homeDate: {}
              然后就是vuex的一套流程了：
                actions.js --> mutation-typys --> mutations.js --> 组件
              最后记得在js入口主文件配置store
    7、使用axios封装ajax
         （1）安装 ： npm install axios --save
# day 02
  ## 1、功能
    1、将首页的静态页面写完了，一般的轮播和滑动效果都做了
    2、分类页面的写到分类列表

  ## 2、问题
    （1）使用stylus的混合时，报错expected "indent", got "function and"
      原因：写媒体查询时，关键字and与后面的括号没有空格，所以报错了
    （2）首页的小狗眨眼的动画还是无法实现
    （3）首页整体Y方向滑动效果，无法看到底部的内容，给该容器添加的padding-bottom
        内容是能看到了，橡皮筋效果也没有影响，但是使用默认滚动条或者是滚轮滑动就会
        看到设置的padding空白的
  ## 注意：
     1、使用1px适配时要注意，使用的元素不要设置padding值，可以设置margin，否则的这条
       1px线会被盖住，看不见的
       具体使用如下，用stylus写的混合，使用时，在当前组件直接引入就可以了
           // 注意and与后面的括号要有一个空格，关键字与关键字之间要有空格
           //根据像素比缩放1px像素边框
           @media only screen and (-webkit-device-pixel-ratio: 2)
             .border-1px
               &::before
                 transform scaleY(.5)
           @media only screen and (-webkit-device-pixel-ratio: 3)
             .border-1px
               &::before
                 transform scaleY(.333333333333)

           // 一像素下边框
           bottom-border-1px($color)
             position relative
             &::before
               content ''
               position absolute
               z-index 200px
               left 0
               right 0
               bottom 0
               height 1px
               background-color $color
               transform scaleY(.5)

           // 一像素上边框
           top-border-1px($color)
             position relative
             &::before
               content ''
               position absolute
               z-index 200px
               top 0
               left 0
               right 0
               height 1px
               background $color
               transform scaleY(.5)

           //根据像素比来使用 2x图 3x图
           bg-image($url)
             background-image:url($url+"@2x.png")
             @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
               background-image:url($url+"@3x.png")

           //清除浮动
           clearFix()
           *zoom 1
           &::after
             content ''
             display block
             clear both
# day 03
   ## 1、任务
     （1）将购物车和注册登录页面的静态页面写完
     （2）初步实现这两个页面的基本动画效果
     （3）使用mock创建数据
   ## 2、遇到的问题
       （1）在购物车页面
             1）问题： 购物车的页面，点击右上角的分类按钮，整个分类列表和头部都隐藏了，
               原因：头部的z-index没有设置，因为分类列表设置了一个padding来给头部留位置的,
                 所以一点击就没有了，只要给头部开启层级了就可以
             2）问题：点击购物车页面右上角按钮，分类列表的显示与隐藏的动画,列表是从下面
                  滑上来的，然后又自动隐藏
               原因：设置动画的时候，slide-enter,slide-leave-to应该heigth设置为0，也就是进入前和
                  离开后的状态应该是隐藏的，设定的列表高度是100px的高度
               具体代码如下：
                模版代码：
                    <transition name="slide">
                      <div class="show" v-show="isShow">
                        <a href="javascript:;" class="link_to">
                          <span class="iconfont icon-shouye1"></span>
                          <span>首页</span>
                        </a>
                        ...5个a链接
                      </div>
                    </transition>
                stylus样式：
                     .show
                      padding-top 50px
                      width 100%
                      height 100px
                      overflow hidden
                      background #fff
                      display flex
                      text-align center
                      align-items center
                      justify-content space-around
                      &.slide-enter-active
                        transition all 1s ease-out
                      &.slide-leave-active
                        transition all 1.5s ease-out
                      &.slide-enter,&.slide-leave-to
                        height 0px
              3）问题：点击购物车页面和登录页面左上角返回按钮，跳转不对，或者没有反应
                  给FooterGuide.vue中配置跳转的方法改成push()，不要使用replace(),使用
                  replace(),会导致浏览器没有历史记录，返回不了上一页
       （2）底部导航FooterGuide的显示与隐藏
                在路由的index.js中需要显示的组件路由中添加一个meta属性的配置为true
                 ①  {
                      path: '/home',
                      component: Home,
                      meta: {  // 自定义名字showFoter，设置为true
                        showFooter: true
                      }
                   }
                 ②在App.vue主组件中在FooterGuide标签中通过$route.meta设置是否显示
                    <FooterGuide v-show="$route.meta.showFooter"/>
       （3）登录页面 Person.vue
             问题：选中登录方式显示下面的小白三角无法贴到父级的底部，达不到理想的效果
             解决：给父级设置 line-height 为 0 ，再设置一个margin-top就不会与父级的兄弟元素的文本重合了
       （4）在首页实现menus导航菜单的动态数据展现，选中当前menu显示的样式出不来
            解决：1）在data中初始化一个currentIndex（当前menu的下标），然后给遍历出来的li中的span标签设置
                :class="{on: currentIndex === index}
                2）给li绑定事件，并传入index   -->   @click="selectMenu(index)"
                3)在methods中更新currentIndex -->  selectMenu(index){this.currentIndex = index}

   ## 3、使用到技术
      （1）使用插件vue-lazyload图片懒加载
        安装：npm i vue-lazyload --save
        引入：在js入口主文件index.js中引入 import VueLazyload from 'vue-lazyload'
        声明：Vue.use(VueLazyload,{loading}), // 这样内部会定义一个全局指令lazy
