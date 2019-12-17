<template>
  <div class="middle">
    <header-bar :title="title"></header-bar>
    <div class="middleView" style="margin-top: 1.453rem;">
      <img src="../../static/image/login/logo.jpg" style="width: 2.969rem;height: 0.859rem;">
    </div>
    <div class="middleViewAS" style="margin:1.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;padding-bottom: 0.219rem;">
      <span style="font-size: 0.406rem;color: #000;" @click="openCountry">中国+86</span>
      <img src="../../static/image/public/arrow_down.png" style="margin-left: 0.156rem;width: 0.328rem;height: 0.219rem;">
      <input type="number" style="margin-left: 0.313rem;font-size: 0.406rem;" placeholder="000 0000 0000">
    </div>
    <div class="middleView" style="margin:0.438rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;padding-bottom: 0.219rem;">
      <div class="middleViewAS" style="width: 60%;">
        <input type="number" style="font-size: 0.406rem;" placeholder="请输入验证码">
      </div>
      <div class="middleViewAE" style="width: 40%;">
        <template v-if="getCodeIng == false">
          <template v-if="firstGetCode == true">
            <span style="color: #22c064;font-size: 0.406rem;" @click="getCode">获取验证码</span>
          </template>
          <template v-else>
            <span style="color: #22c064;font-size: 0.406rem;" @click="getCode">重新获取</span>
          </template>
        </template>
        <template v-else>
          <span style="color: #cbc7cd;font-size: 0.406rem;"><span v-text="time"></span> 秒后可重新获取</span>
        </template>
      </div>
    </div>
    <div class="middleViewAS" style="margin: 0.438rem 0.422rem 0rem;font-size: 0.375rem;">
      <span style="font-size: 0.406rem;color: #cbc7cd;" v-text="errorMsg"></span>
    </div>
    <div class="middleViewA" style="margin: 1.563rem 0.422rem 0rem;height: 1.25rem;background: #22c064;border-radius:0.625rem;" @click="look">
      <span style="color: #fff;font-size: 0.438rem;">立即找回</span>
    </div>

  </div>

</template>

<script>
    import header from '../components/HeadBar.vue';
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "phoneLook",
        components: {
            'header-bar': header,
        },
        data() {
            return {
                title: '手机找回',
                getCodeIng: false,
                firstGetCode: true,
                time: 60,
                errorMsg: ''
            }

        },
        methods: {
            //点击获取验证码
            getCode: function () {
                let that = this;
                if(that.time == 0){
                    that.time = 60;
                }
                if(that.firstGetCode == true){
                    that.firstGetCode = false;
                }
                that.getCodeIng = true;//获取中的状态，等服务端拿到验证码将这个置为false.并且清楚定时器clearInterval

                let int = setInterval(function () {
                    if(that.time > 0){
                        --that.time;
                        // console.log(that.time);
                    }else{
                        that.getCodeIng = false;
                        clearInterval(int);
                    }
                },1000);
            },
            //找回
            look: function () {
            },
            //跳转国际区号选择页面
            openCountry: function () {

            }

        },
        filters: {

        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
