<template>
  <div v_order>
    <div class="middle" style="background: #EEEEEE">
      <!--头部-->
      <header-bar></header-bar>

      <!-- 热门分类-->
      <div class="middleViewA" style="height: 1.60rem;">
        <img style="margin-right: 0.1rem;width: 0.4rem" src="../../static/image/order/fenlei_1.png"/>
        <a href="#" style="font-size: 0.312rem">热门分类</a>
      </div>

      <!-- 热门分类项-->
      <div class="middleViewAS" style="background-color: #fff;padding:0 0.4rem 0.4rem 0.4rem;">
        <template v-for="(value,index) in hotOrderArr">
          <div class="middleView" style="width: 25%;">
            <div class="middleView" style="width: 1.8rem;">
              <img :src="value.img" style="width: 1.4rem;height:1.4rem;margin-top: 0.4rem;">
              <a href="#" style="font-size: 0.312rem;margin-top: 0.18rem;" v-text="value.name"></a>
            </div>
          </div>
        </template>
      </div>
      <!--全部分类-->

      <div class="middleViewA" style="height: 1.20rem;">
        <img style="margin-right: 0.1rem;width: 0.4rem" src="../../static/image/order/qyanbu_1.png"/>
        <span style="font-size: 0.312rem">热门分类</span>
      </div>

      <!--全部分类项-->
      <div class="middleViewAS" style="background-color: #fff">
        <template v-for="(value,index) in allOrderArr">
          <div class="middleViewA allOrderItemBorder" :class="{'hasBorderRight':index % 4 != 3}">
            <a href="#" v-text=value.name></a>
          </div>
        </template>
      </div>
    </div>
    <div style="background: #EEEEEE;height: 2.3rem"></div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import header from '../components/HeadBar.vue'
  import '../../static/css/common.css'
  import footer from '../components/FootBar.vue'
  /*引入公共样式*/
  export default {
    components: {
      'header-bar': header,
      'footer-bar': footer
    },
    data(){
      return {
        hotOrderArr: [
          {"routUrl": "/", "img": "../../static/image/order/brand_150.png","name": "支付宝"},
          {"routUrl": "/", "img": "../../static/image/order/brand_150.png","name": "苹果品牌"},
          {"routUrl": "/", "img": "../../static/image/order/brand_150.png","name": "金山游戏"},
          {"routUrl": "/", "img": "../../static/image/order/brand_150.png","name": "网易游戏"},
          {"routUrl": "/", "img": "../../static/image/order/brand_150.png","name": "盛大在线"},
          {"routUrl": "/", "img": "../../static/image/order/brand_150.png","name": "网易战网"}
        ],
        allOrderArr: [
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
          {"routUrl": "/", "name": "实物代购"},
        ],
      }
    }
  }
</script>

<style>
  .allOrderItemBorder {
    width: 25%;
    font-size: 0.312rem;
    height: 1.2rem;
    box-sizing: border-box;
    border-top: solid 1px #BEBEBE
  }

  .hasBorderRight {
    border-right: solid 1px gray;
  }
</style>
