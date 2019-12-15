<template>
  <div id="v_order_search">
    <div class="middleView" style="height: 1.2rem;z-index: 1;background: #FFFFFF">
      <div class="middleViewAS" style="width: 13%">
        <img class="middleView" src="../../static/image/public/klt_bak_arrow.png"
             style="width: 0.3rem;height: 0.5rem;margin-left: 0.422rem;"/>
      </div>
      <div class="middleViewA" style="width: 74%;">
        <input type="text" v-model="searchValue" placeholder="搜索商品"
               style="width: 100%;height: 0.6rem;background-color: white;border:1px solid #e3e3e3;border-radius: 0.2rem;padding-left: 0.1rem"/>
        <img @click="getGoodsList" src="../../static/image/order/ico-search.png"
             style="position: absolute;width: 0.4rem;right: 15%;cursor:pointer"/>
      </div>
      <div class="middleViewAE" style="width: 13%">
        <img src="../../static/image/order/kefu.png" style="width: 0.5rem;height: 0.5rem;margin-right: 0.422rem"/>
      </div>
    </div>
    <!--商品列表-->
    <div class="middleViewS" style="margin-top: 0.4rem;overflow:scroll;">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
        <template v-for="(value,index) in goodList">
          <div class="middleView" style="margin-bottom: 0.25rem;">
            <div class="middleView" style="width: 30%;">
              <img :src="value.img" style="width: 2.031rem;height: 1.875rem;border-radius: 0.188rem;">
            </div>
            <div class="middleViewS" style="width: 70%;">
              <div class="middleViewS" style="margin-top: 0.1rem;">
                <span style="font-size: 0.313rem;" v-text="value.name"></span>
              </div>

              <div class="middleViewS" style="margin-top: 0.05rem;">
                <div class="middleViewA" style="width: 1.8rem;height: 0.6rem;background-color: #21bf64;margin-right: 0.2rem;border-radius: 0.1rem">  <span style="font-size: 0.2rem;color: white;">七天保障</span></div>
                <div class="middleViewA" style="width: 1.8rem;height: 0.6rem;background: #333333;border-radius: 0.1rem"><span style="font-size: 0.2rem;color: white; ">闪电发货</span> </div>
              </div>

              <div class="middleViewS" style="margin-top: 0.1rem;">
                <span style="font-size: 0.313rem;color: #ef504a;" v-text="$options.filters.showPrice(value.money)"></span>
              </div>
            </div>
          </div>
          <div style="width: 100%; height: 1px; background: #e1e1e1;margin-bottom:0.25rem "></div>
        </template>
      </mt-loadmore>
    </div>

  </div>

</template>

<script>
  import '../../static/css/common.css'
  /*引入公共样式*/
  import {Loadmore} from 'mint-ui';
  export default {
    components: {
      'Loadmore.name': Loadmore,
    },
    data(){
      return {
        selected: 'main',
        searchValue: "",
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
      getGoodsList: function () {
        if (this.searchValue) {
          this.getSearchList(searchValue);
        }
      },
      getSearchList: function (searchValue) {
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
          },
          {
            img: '../../static/image/home/yypay.jpg',
            name: '多玩平台Y币充值100元',
            money: '15.95'
          }
        ];
         this.goodList=temp;
      },
      loadBottom: function () {
        let that = this;
        that.$refs.loadmore.onBottomLoaded();
        that.getSearchList("");
        if(that.loadTime >= 6){
          that.allLoaded = true;// 若数据已全部获取完毕
        }
      },
    },
    filters: {
      showPrice (money) {
        return  '$'+money+' USD'
      }
    },
  }
</script>

<style>
  .mint-loadmore{
    width: 100%;
  }
</style>
