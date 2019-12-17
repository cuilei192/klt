<template>
  <div class="middle">
    <header-bar :title="title"></header-bar>
    <div class="middleView" style="margin-top: 1.453rem;">
      <img src="../../static/image/login/logo.jpg" style="width: 2.969rem;height: 0.859rem;">
    </div>
    <div class="middleView" style="margin:1.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;">
      <input class="middleViewAS" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="请输入正确的电子邮箱" >
    </div>
    <div class="middleView" style="margin:0.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;position: relative">
      <input class="middleViewAS" :type="showPassword1 == false ? 'password' : 'text'" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="请设置6-20位登录密码" >
      <img :src="showPassword1 == false ? '../../static/image/login/close_eye.png' : '../../static/image/login/open_eye.png'" style="width: 0.391rem;position: absolute;right:0;" @click="setShowPass1">
    </div>
    <div class="middleView" style="margin:0.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;position: relative">
      <input class="middleViewAS" :type="showPassword2 == false ? 'password' : 'text'" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="确认密码" >
      <img :src="showPassword2 == false ? '../../static/image/login/close_eye.png' : '../../static/image/login/open_eye.png'" style="width: 0.391rem;position: absolute;right:0;" @click="setShowPass2">
    </div>
    <div class="middleView" style="margin:0.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;">
      <input class="middleViewAS" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="联系电话（选填）" >
    </div>
    <div class="middleView" style="margin:0.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;">
      <input class="middleViewAS" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="QQ号码（选填）" >
    </div>
    <div class="middleViewAS" style="margin: 0.438rem 0.422rem 0rem;font-size: 0.375rem;">
      <span style="font-size: 0.406rem;color: #cbc7cd;" v-text="errorMsg"></span>
    </div>
    <div class="middleViewAS" style="margin: 0.3rem 0.422rem 0rem;">
      <input type="checkbox" name="checkbox" v-model="agree" @click="select">
      <span style="font-size: 0.375rem;color: #aaa8a9;margin-left: 0.2rem;">我已看过并同意《用户协议》</span>
    </div>
    <div class="middleViewA" style="margin: 1.563rem 0.422rem 0rem;height: 1.25rem;background: #22c064;border-radius:0.625rem;" @click="register">
      <span style="color: #fff;font-size: 0.438rem;">注册</span>
    </div>
  </div>

</template>

<script>
    import header from '../components/HeadBar.vue';
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "emailRegister",
        components: {
            'header-bar': header,
        },
        data() {
            return {
                title: '邮箱注册',
                errorMsg: '',
                showPassword1: false,//是否显示明文密码 true 显示 false 不显示
                showPassword2: false,//是否显示明文密码 true 显示 false 不显示
                agree: false,
                errorMsg: ''
            }

        },
        methods: {
            //设置显示隐藏明文密码
            setShowPass1: function () {
                this.showPassword1 = !this.showPassword1;
            },
            setShowPass2: function () {
                this.showPassword2 = !this.showPassword2;
            },
            //勾选用户协议
            select: function () {
                this.agree = !this.agree;
            },
            //注册
            register: function () {

            },


        },
        filters: {

        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
