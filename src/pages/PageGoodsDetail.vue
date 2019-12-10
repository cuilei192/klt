<!--suppress XmlDuplicatedId -->
<template>
  <div id="v_order">

    <!--顶部导航栏-->
    <div class="middleView" style="height: 1.2rem;z-index: 1;background: #FFFFFF">
      <div class="middleViewAS" style="width: 13%">
        <img class="middleView" src="../../static/image/public/klt_bak_arrow.png"
             style="width: 0.3rem;height: 0.5rem;margin-left: 0.422rem;"/>
      </div>
      <!--顶部选项卡-->
      <div class="middleViewA" style="width: 74%;">
        <mt-navbar v-model="selected">
          <mt-tab-item id="nav_goods">商品</mt-tab-item>
          <mt-tab-item id="nav_gooodsDetail">详情</mt-tab-item>
          <mt-tab-item id="nav_goods_comment">评论</mt-tab-item>
        </mt-navbar>
      </div>
      <div class="middleViewAE" style="width: 13%">
        <img src="../../static/image/order/kefu.png" style="width: 0.5rem;height: 0.5rem;margin-right: 0.422rem"/>
      </div>
    </div>

    <div style="width: 100%; height: 1px;background: #e8e8e8;margin-top: 0.1rem;"></div>
    <!-- tab-container中间页面部分 -->
    <div id="v_container" style="margin-top: 0.5rem">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="nav_goods">
          <div class="middleViewA" style="padding-left: 0.4rem;margin-bottom: 0.2rem">
            <div class="middleViewS" style="width: 30%;">
              <img :src="goods.img" style="width: 2.4rem;height: 2.4rem;border-radius: 0.188rem;">
            </div>
            <div class="middleViewS" style="width: 70%;">
              <div class="middleViewS" style="margin-top: 0.1rem;">
                <span style="font-size: 0.313rem;" v-text="goods.name"></span>
              </div>
              <div class="middleViewS" style="margin-top: 0.1rem;">
                <span style="font-size: 0.313rem;#9e9d9d: #ef504a;text-decoration: line-through;">本店售价：<span
                  v-text="$options.filters.showPrice(goods.onSaleMoney)"></span></span>
              </div>
              <div class="middleViewS" style="margin-top: 0.1rem;">
                <span style="font-size: 0.313rem;color: #ef504a;">限时价格：<span
                  v-text="$options.filters.showPrice(goods.limitTimeMoney)"></span></span>
              </div>
            </div>
          </div>
          <div style="width: 100%; height: 0.45rem;background: #eeeeee;margin-top: 0.1rem;"></div>

          <div class="middleViewAS" style="height: 1.34rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
            <div class="middleViewAS" style="width: 50%;">充值金额</div>
            <div class="middleViewAS" style="width: 50%"><input type="text" v-model="RechargeMoney" value="1"/></div>
          </div>
          <div class="middleViewAS" style="height: 1.34rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
            <div class="middleViewAS" style="width: 50%;">支付宝账号</div>
            <div class="middleViewAS" style="width: 50%"><input type="text" placeholder="请输入您要充值的账号"/></div>
          </div>
          <div class="middleViewAS" style="height: 1.34rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
            <div class="middleViewAS" style="width: 50%;">支付宝账户姓名</div>
            <div class="middleViewAS" style="width: 50%"><input type="text" placeholder="请输入您支付宝账户姓名"/></div>
          </div>
          <div class="middleViewAS" style="height: 1.34rem;padding-left: 0.5rem;color: #dbdbdb;margin-top: 0.3rem;">
            <span>*应付美金金额(填好人民币数额后自动显示)：<br ><span style="font-size: 0.313rem;color: #ef504a;font-weight: bolder;" v-text="$options.filters.showPrice(goods.limitTimeMoney * RechargeMoney)"></span>(支持所有外币,支付时自动兑)</span>
          </div>

          <div class="middleViewAS" style="height: 2rem;">
            <div class="middleViewA" style="width: 60%;height: 1.5rem;background-color: #333333"><span style="font-size: 0.313rem;color: white;font-weight: bolder;">总计： <span  v-text="$options.filters.showPrice(goods.limitTimeMoney * RechargeMoney)"></span></span></div>
            <div class="middleViewA" style="width: 40%;height: 1.5rem;background-color: #22bf64"><span style="color: white">立即购买</span></div>
          </div>

        </mt-tab-container-item>


        <mt-tab-container-item id="nav_gooodsDetail">
          <mt-cell v-for="n in 4" :title="'测试 ' + n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="nav_goods_comment">
          <mt-cell v-for="n in 6" :title="'选项 ' + n"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>

</template>

<script>

  import '../../static/css/common.css';
  export default {
    components: {},
    data(){
      return {
        selected: 'main',
        RechargeMoney:0.00,
        goods: {
          img: '../../static/image/home/alipay.jpg',
          name: '支付宝红包充值100元',
          onSaleMoney: '15.96',
          limitTimeMoney: '10.95'
        }

      }
    },
    filters: {
      showPrice (money) {
        return '$' + money + ' USD'
      }
    },
    methods: {
      reversedMoney: function () {
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

<style>

  .mint-navbar {
    width: 80%
  }

</style>
