<!--suppress XmlDuplicatedId -->
<template>
  <div id="v_order">

    <!--顶部导航栏-->
    <div class="middleView" style="height: 1.2rem;z-index: 1;background: #FFFFFF">
      <div class="middleViewAS" style="width: 13%;height: 100%">
        <img class="middleView" src="../../static/image/public/klt_bak_arrow.png"
             style="width: 0.3rem;height: 0.5rem;margin-left: 0.422rem;"/>
      </div>
      <!--顶部选项卡-->
      <div class="middleViewA" style="width: 74%;;height: 100%">
        <mt-navbar v-model="selected">
          <mt-tab-item id="nav_goods">商品</mt-tab-item>
          <mt-tab-item id="nav_gooodsDetail">详情</mt-tab-item>
          <mt-tab-item id="nav_goods_comment">评论</mt-tab-item>
        </mt-navbar>
      </div>
      <div class="middleViewAE" style="width: 13%;height: 100%">
        <img src="../../static/image/order/kefu.png" style="width: 0.5rem;height: 0.5rem;margin-right: 0.422rem"/>
      </div>
    </div>

    <div style="width: 100%; height: 1px;background: #e8e8e8;"></div>
    <!-- tab-container中间页面部分 -->
    <div id="v_container" style="margin-top: 0.5rem">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="nav_goods">
          <div class="middleView">
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
            <!--输入-->
            <div class="middleView" v-if="isGame">
              <div class="middleViewAS" style="height: 1.34rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
                <div class="middleViewAS" style="width: 50%;">充值金额</div>
                <div class="middleViewAS" style="width: 50%"><input type="text" v-model="RechargeMoney" value="1"/>
                </div>
              </div>
              <div class="middleViewAS" style="height: 1.34rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
                <div class="middleViewAS" style="width: 50%;">支付宝账号</div>
                <div class="middleViewAS" style="width: 50%"><input type="text" placeholder="请输入您要充值的账号"/></div>
              </div>
              <div class="middleViewAS"
                   style="height: 1.34rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
                <div class="middleViewAS" style="width: 50%;">支付宝账户姓名</div>
                <div class="middleViewAS" style="width: 50%"><input type="text" placeholder="请输入您支付宝账户姓名"/></div>
              </div>
              <div class="middleViewAS" style="height: 1.34rem;padding-left: 0.5rem;color: #dbdbdb;margin-top: 0.3rem;">
                <span>*应付美金金额(填好人民币数额后自动显示)：<br><span style="font-size: 0.313rem;color: #ef504a;font-weight: bolder;" v-text="$options.filters.showPrice(goods.limitTimeMoney * RechargeMoney)"></span>(支持所有外币,支付时自动兑)</span>
              </div>
            </div>
            <div class="middleView" v-if="!isGame">
              <div class="middleViewAS" style="height: 1.6rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;">
                <div class="middleViewAS" style="width: 50%;">购买数量</div>
                <div class="middleViewAS" style="width: 50%">
                  <img style="width: 0.9rem;height: 0.8rem;margin-right: 0.12rem" @click="changeBuyNum(-1)" src="../../static/image/order/jian_1.jpg"/>
                  <input style="width: 2rem;height: 0.8rem;background:#eeeeee;border-radius: 0.1rem;text-align: center" type="text" v-model="buyNum" placeholder=""/>
                  <img style="width: 0.9rem;height: 0.8rem;margin-left: 0.12rem" @click="changeBuyNum(1)" src="../../static/image/order/jia_1.jpg"/>
                </div>
              </div>
              <div class="middleViewAS" style="height: 1.6rem;border-bottom: 0.02rem solid #E8E8E8;padding-left: 0.5rem;" :style="{visibility:isShowChageCount}">
                <div class="middleViewAS" style="width: 50%;">充值账号</div>
                <div class="middleViewAS" style="width: 50%"><input type="text" placeholder="请输入您要充值的账号"/></div>
              </div>
              <div style="height: 2.48rem"></div>
            </div>
            <!--总计与立即购买-->
            <div class="middleViewCE" style="height: 7.1rem;">
              <div class="middleViewA" style="width: 60%;height: 1.5rem;background-color: #333333"><span
                style="font-size: 0.313rem;color: white;font-weight: bolder;">总计： <span
                v-text="totalMoney"></span></span></div>
              <div class="middleViewA" style="width: 40%;height: 1.5rem;background-color: #22bf64"><span
                style="color: white">立即购买</span></div>
            </div>
          </div>
        </mt-tab-container-item>

        <!--详情-->
        <mt-tab-container-item id="nav_gooodsDetail">
          <div class="middleView" style="padding-left: 0.4rem;padding-right: 0.4rem">
            <img style="width: 75%" v-for="(value,index) in goods.goods_detail_imgs" :src="value"/>
          </div>
        </mt-tab-container-item>

        <!--评价-->
        <mt-tab-container-item id="nav_goods_comment">
          <comment v-for="(value,index) in goods_comments" :comment_emai="value.comment_email"
                   :comment_time="value.comment_time" :comment_message="value.comment_message"></comment>
          <img style="margin-left: 1.5rem;margin-bottom: -0.1rem" src="../../static/image/order/xiangshang.png"/>
          <div class="middleView" style="">
            <p style="width: 90%; background: #eeeeee;border-radius: 0.15rem;box-sizing: border-box;padding: 0.18rem">
              <span>管理员：您的满意是我们永恒的追求，售后如有任何问题，建议您联系我们，我们将积极妥善地为您解决。</span></p>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>

</template>

<script>

  import '../../static/css/common.css';
  import comment from '../components/Comment.vue'
  export default {
    components: {
      'comment': comment,
    },
    data(){
      return {
        selected: 'nav_goods_comment',
        RechargeMoney: 0.00,
        isGame:false,
        isShowChageCount:"visiable",/*"hidden",*/
        buyNum:1,
        goods: {
          img: '../../static/image/home/alipay.jpg',
          name: '支付宝红包充值100元',
          onSaleMoney: '15.96',
          limitTimeMoney: '10.95',
          goods_detail_imgs: [
            "../../static/image/home/alipay.jpg",
            "../../static/image/home/alipay.jpg",
            "../../static/image/home/alipay.jpg",
            "../../static/image/home/alipay.jpg",
            "../../static/image/home/alipay.jpg",
            "../../static/image/home/alipay.jpg",
            "../../static/image/home/alipay.jpg",
          ]
        },

        goods_comments: [
          {
            comment_email: "876516308@qq.com",
            comment_time: "2019-12-11 23:00:00",
            comment_star: 3,
            comment_message: "这个东西不错这个东西不错这个东西不错这个东西不错这个东西不错这个东西不错这个东西不错",
          },
          {
            comment_email: "876516308@qq.com",
            comment_time: "2019-12-11 23:00:00",
            comment_star: 3,
            comment_message: "这个东西不错这个东西不错这个东西不错这个东西不错这个东西不错这个东西不错这个东西不错",
          },
        ]

      }
    },
    filters: {
      showPrice (money) {
        return '$' + parseFloat(money).toFixed(2) + ' USD'
      }
    },
    methods: {
      reversedMoney: function () {
        return this.message.split('').reverse().join('')
      },
      changeBuyNum:function (num) {
        this.buyNum += num;
      }
    },
    computed:{
           totalMoney:function () {
             if(this.isGame){
               return this.$options.filters.showPrice(this.goods.limitTimeMoney * this.RechargeMoney)
             }else {
               return this.$options.filters.showPrice(this.goods.limitTimeMoney * this.buyNum)
             }
           }
    }
  }
</script>

<style>

  .mint-navbar {
    width: 80%
  }

  .mint-tab-item {
    padding: 0.32rem 0 !important;
    font-size: 15px;
  }

  .is-selected {
    border-bottom: 0.1rem solid #21bf64 !important;
    color: #21bf64 !important;
  }

</style>
