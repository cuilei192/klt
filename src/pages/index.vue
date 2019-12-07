<template>
  <div id="v_home">
    <div class="middle">
      <!-- 下载 -->
      <template v-if="showDownFlag == true">
        <div class="middleView" style="position: fixed;height: 1.016rem;z-index: 1;">
          <div class="middleViewAS" style="width: 70%;background: #333;">
            <img style="width: 0.53rem;margin-left: 0.234rem;" src="../../static/image/home/cancel.png" @click="closeDown()">
            <img style="width: 0.81rem;margin-left: 0.219rem;" src="../../static/image/public/logo.png">
            <span style="font-size: 0.375rem;color: #a8a8a8;margin-left: 0.22rem;">下载APP享受优质体验！</span>
          </div>
          <div class="middleViewA" style="width: 30%;background: #22bf64;">
            <span style="color:#fff;font-size: 0.375rem;">立即打开</span>
          </div>
        </div>
      </template>
      <!-- END 下载 -->
      <!-- 轮播 -->
      <div class="middleView" :style="showDownFlag ? 'margin-top: 1.016rem;height: 5.72rem;position: relative;' : 'height: 5.72rem;position: relative;'">
        <mt-swipe :auto="4000" style="width: 100%;">
          <mt-swipe-item><img :src="banner_1" style="height: 5.72rem;width: 100%;border-radius: 0.125rem;"></mt-swipe-item>
          <mt-swipe-item><img :src="banner_1" style="height: 5.72rem;width: 100%;border-radius: 0.125rem;"></mt-swipe-item>
<!--          <mt-swipe-item>1</mt-swipe-item>-->
<!--          <mt-swipe-item>2</mt-swipe-item>-->
<!--          <mt-swipe-item>3</mt-swipe-item>-->
        </mt-swipe>
        <div class="middleView" style="position: absolute;margin-top: 0.281rem;">
          <div class="middleViewAS" style="width: 86%;">
            <img src="../../static/image/home/dollar.png" style="width: 0.438rem;height: 0.438rem;margin-left: 0.203rem;">
            <span style="font-size: 0.25rem;margin-left: 0.15rem;color: #fff;">USD</span>
            <div class="middleViewA" style="width: 6.625rem;height: 0.75rem;background: rgba(255,255,255,0.5);border-radius: 5px;margin-left: 0.4rem;">
              <img src="../../static/image/home/search.png" style="width: 0.375rem;height: 0.375rem;">
              <span style="font-size: 0.281rem;margin-left: 0.1rem;color: #0a8c0f;">搜索商品</span>
            </div>
          </div>
          <div class="middleView" style="width: 14%;">
            <img class="middleView" src="../../static/image/home/kefu.png" style="width: 0.438rem;height: 0.422rem;">
            <span class="middleView" style="color: #fff;font-size: 0.25rem;">客服</span>
          </div>
        </div>
      </div>
      <!-- END 轮播 -->
      <!-- 选项 -->
      <div class="middleView" style="height: 2.61rem;">
        <div class="middleView" style="width: 25%;">
          <div class="middleView" style="width: 1.8rem;">
            <img src="../../static/image/home/icon_zfb.png" style="width: 1.28rem;height:1.28rem;margin-top: 0.47rem;">
            <span style="font-size: 0.31rem;">支付宝</span>
          </div>
        </div>
        <div class="middleView" style="width: 25%;">
          <div class="middleView" style="width: 1.8rem;">
            <img src="../../static/image/home/icon_mycard.png" style="width: 1.28rem;height:1.28rem;margin-top: 0.47rem;">
            <span style="font-size: 0.31rem;">mycard</span>
          </div>
        </div>
        <div class="middleView" style="width: 25%;">
          <div class="middleView" style="width: 1.8rem;">
            <img src="../../static/image/home/icon_itunes.png" style="width: 1.28rem;height:1.28rem;margin-top: 0.47rem;">
            <span style="font-size: 0.31rem;">iTunes</span>
          </div>
        </div>
        <div class="middleView" style="width: 25%;">
          <div class="middleView" style="width: 1.8rem;">
            <img src="../../static/image/home/icon_psn.png" style="width: 1.28rem;height:1.28rem;margin-top: 0.47rem;">
            <span style="font-size: 0.31rem;">PSN</span>
          </div>
        </div>
      </div>
      <!-- END 选项 -->
      <div class="middleView" style="height: 0.125rem;background: #eeeeee;"></div>

      <div class="middleView" style="border: 1px solid #dadada;">
        <div class="middleViewB" style="width: 50%;box-sizing: border-box;border-right: 1px solid #dadada;">
          <div class="middleView" style="margin-top: 0.55rem;">
            <span style="color: #4fb875;">卡乐透冲破历史最低价</span>
          </div>
          <div class="middleView">
            <img src="../../static/image/home/klt.png" style="width: 3.797rem;height: 3.672rem;margin-top: 0.9rem;">
          </div>
        </div>
        <div class="middleView" style="width: 50%;">
          <div class="middleView" style="border-bottom: 1px solid #dadada;">
            <div class="middleView" style="width: 60%;">
              <div class="middleViewS" style="margin-top: 0.5rem;margin-left: 0.42rem;">
                <span style="font-size: 0.42rem;">手机充值</span>
              </div>
              <div class="middleViewS" style="margin-top: 0.125rem;margin-left: 0.42rem;margin-bottom:0.3rem;color: #4fb875;">
                <span style="font-size: 0.42rem;">随心所欲想玩就玩</span>
              </div>
            </div>
            <div class="middleViewA" style="width: 40%;">
              <img src="../../static/image/home/mobile.png" style="width: 1rem;height: 1.16rem;">
            </div>
          </div>
          <div class="middleView" style="border-bottom: 1px solid #dadada;">
            <div class="middleView" style="width: 60%;">
              <div class="middleViewS" style="margin-top: 0.5rem;margin-left: 0.42rem;">
                <span style="font-size: 0.42rem;">游戏点卡</span>
              </div>
              <div class="middleViewS" style="margin-top: 0.125rem;margin-left: 0.42rem;margin-bottom:0.3rem;color: #4fb875;">
                <span style="font-size: 0.42rem;">全网最低价</span>
              </div>
            </div>
            <div class="middleViewA" style="width: 40%;">
              <img src="../../static/image/home/game.png" style="width: 1rem;height: 1.16rem;">
            </div>
          </div>
          <div class="middleView" style="border-bottom: 1px solid #dadada;">
            <div class="middleView" style="width: 60%;">
              <div class="middleViewS" style="margin-top: 0.5rem;margin-left: 0.42rem;">
                <span style="font-size: 0.42rem;">直播平台</span>
              </div>
              <div class="middleViewS" style="margin-top: 0.125rem;margin-left: 0.42rem;margin-bottom:0.3rem;color: #4fb875;">
                <span style="font-size: 0.42rem;">多种直播平台火爆热销</span>
              </div>
            </div>
            <div class="middleViewA" style="width: 40%;">
              <img src="../../static/image/home/zhibo.png" style="width: 1rem;height: 1.16rem;">
            </div>
          </div>
        </div>

      </div>

      <div class="middleView" style="height: 0.156rem;background: #eeeeee;">
      </div>
      <!-- 列表 -->
      <div class="middleView" style="margin-bottom: 3rem;">
        <div class="middleViewS" style="margin-top: 0.438rem;">
          <span style="margin-left: 0.469rem;font-size: 0.313rem;">热卖商品</span>
          <span style="font-size: 0.313rem;color: #999999;margin-left: 0.1rem;"> · HOT GOODS</span>
        </div>
        <div class="middleViewS" style="margin-top: 0.313rem;margin-left: 0.5rem;overflow:scroll;">
          <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
            <template v-for="(value,index) in goodList">
              <div class="middleView" style="margin-bottom: 0.25rem;">
                <div class="middleViewS" style="width: 30%;">
                  <img :src="value.img" style="width: 2.031rem;height: 1.875rem;border-radius: 0.188rem;">
                </div>
                <div class="middleViewS" style="width: 70%;">
                  <div class="middleViewS" style="margin-top: 0.2rem;">
                    <span style="font-size: 0.313rem;" v-text="value.name"></span>
                  </div>
                  <div class="middleViewS" style="margin-top: 0.5rem;">
                    <span style="font-size: 0.313rem;color: #ef504a;" v-text="$options.filters.showPrice(value.money)"></span>
                  </div>
                </div>
              </div>
            </template>
          </mt-loadmore>

        </div>
      </div>
      <!-- END 列表 -->
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import footer from '../components/FootBar.vue'
  import '../../static/css/common.css' /*引入公共样式*/
  import { Swipe, SwipeItem } from 'mint-ui';
  import { Loadmore } from 'mint-ui';

  export default {
      name: "home",
      components: {
          'footer-bar': footer,
          'Swipe.name': Swipe,
          'SwipeItem.name': SwipeItem,
          'Loadmore.name': Loadmore
      },

      data() {
          return {
              banner_1: '../../static/image/home/banner1.jpg',
              showDownFlag: true,//是否显示头部下载栏
              allLoaded: false,
              loadTime:  0,
              goodList: [
                  {
                      img: '../../static/image/home/alipay.jpg',
                      name: '支付宝红包充值100元',
                      money: '15.95'
                  },
                  {
                      img: '../../static/image/home/yypay.jpg',
                      name: '多玩平台Y币充值100元',
                      money: '15.95'
                  }
              ],
          }

      },
      methods: {
          //关闭下载
          closeDown: function () {
              this.showDownFlag = false;
          },
          // 加载更多数据
          loadBottom: function () {
              let that = this;
              that.$refs.loadmore.onBottomLoaded();
              that.getGoods();
              if(that.loadTime >= 6){
                  that.allLoaded = true;// 若数据已全部获取完毕
              }
          },
          //获取数据
          getGoods: function () {
              let that = this;
              let temp = [
                  {
                      img: '../../static/image/home/alipay.jpg',
                      name: '支付宝红包充值100元',
                      money: '15.95'
                  },
                  {
                      img: '../../static/image/home/yypay.jpg',
                      name: '多玩平台Y币充值100元',
                      money: '15.95'
                  }
              ];
              that.goodList = that.goodList.concat(temp);
              that.loadTime ++;
          }
      },
      filters: {
          showPrice (money) {
              return  '$'+money+' USD'
          }
      },
      watch: {
          loadTime (newTime,oldTime){
              // let that = this;
              console.log('newTime:'+newTime);
              console.log('oldTime:'+oldTime);
              if(this.loadTime === 7){
                  console.log('goodList长度：'+ this.goodList.length);
              }
          }
      }
  }
</script>

<style scoped>

</style>
