<template>
    <div class="middle">
      <header-bar :title="title"></header-bar>
      <div class="middleView" style="margin-top: 1.453rem;">
        <img src="../../static/image/login/logo.jpg" style="width: 2.969rem;height: 0.859rem;">
      </div>
      <div class="middleView" style="margin:1.563rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;">
        <input class="middleViewAS" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="用户名/电子邮件地址/海外电话" >
      </div>
      <div class="middleView" style="margin:0.438rem 0.422rem 0rem;border-bottom: 1px solid #c7c7cd;position: relative">
        <input class="middleViewAS" :type="showPassword == false ? 'password' : 'text'" style="font-size: 0.406rem;color: #cbc7cd;padding-bottom: 0.156rem;" placeholder="请输入密码" >
        <img :src="showPassword == false ? '../../static/image/login/close_eye.png' : '../../static/image/login/open_eye.png'" style="width: 0.391rem;position: absolute;right:0;" @click="setShowPass">
      </div>
      <div class="middleView" style="margin:0.4rem 0.422rem 0rem;">
        <div class="middleViewS" style="width: 50%;">
          <span style="color: #aaa8a9;font-size: 0.406rem;" @click="forgetPass">忘记密码</span>
        </div>
        <div class="middleViewE" style="width: 50%;">
          <span style="color: #22c064;font-size: 0.406rem;">快速注册</span>
        </div>
      </div>
      <div class="middleViewA" style="margin: 1.563rem 0.422rem 0rem;height: 1.25rem;background: #22c064;border-radius:0.625rem;" @click="login">
        <span style="color: #fff;font-size: 0.438rem;">登录</span>
      </div>
      <div class="middleView" style="margin-top: 0.359rem;" @click="openSMSLogin">
        <span style="color: #aaa8a9;font-size: 0.406rem;">手机短信登录</span>
      </div>
      <div class="login-box" style="position:absolute;top:2.8rem;">
        <div class="puzzle-box">
          <PuzzleVerification
            v-model="showSlide"
            :puzzleImgList="puzzleImgList"
            deviation="20"
            blockType="puzzle"
            :onSuccess="onSuccess"
            :onError="onFail"
          />
        </div>
      </div>
    </div>

</template>

<script>
    import header from '../components/HeadBar.vue';
    import PuzzleVerification from 'vue-puzzle-verification'
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "login",
        components: {
            'header-bar': header,
            'PuzzleVerification': PuzzleVerification
        },
        data() {
            return {
                title: '会员登录',
                showFlag: false,
                // msg: '图片加载中，请稍待',
                showSlide: false,//是否显示拼图验证码 false 不显示 true 显示
                showPassword: false,//是否显示明文密码 true 显示 false 不显示
                puzzleImgList: [
                    "../../static/image/login/img_code_1.jpg",
                    "../../static/image/login/img_code_2.jpg",
                    "../../static/image/login/img_code_3.jpg",
                    "../../static/image/login/img_code_4.jpg",
                    "../../static/image/login/img_code_5.jpg",
                    "../../static/image/login/img_code_6.jpg",
                    "../../static/image/login/img_code_7.jpg",
                    "../../static/image/login/img_code_8.jpg",
                    "../../static/image/login/img_code_9.jpg",
                    "../../static/image/login/img_code_10.jpg",
                    "../../static/image/login/img_code_11.jpg",
                    "../../static/image/login/img_code_12.jpg",
                    "../../static/image/login/img_code_13.jpg",
                    "../../static/image/login/img_code_14.jpg",
                    "../../static/image/login/img_code_15.jpg",
                    "../../static/image/login/img_code_16.jpg",
                    "../../static/image/login/img_code_17.jpg",
                    "../../static/image/login/img_code_18.jpg",
                    "../../static/image/login/img_code_19.jpg",
                    "../../static/image/login/img_code_20.jpg",
                ]
            }

        },
        methods: {
            //滑动成功
            onSuccess: function () {
                this.showSlide = false;
            },
            //滑动成功失败
            onFail: function () {
                // this.msg = '验证失败，您需要把拼图拖到指定的位置范围';

                // this.showSlide = false;
            },
            onRefresh: function () {

            },
            //设置显示隐藏明文密码
            setShowPass: function () {
                this.showPassword = !this.showPassword;
            },
            //登录
            login: function () {
                this.showSlide = true;
            },
            //跳转短信登录
            openSMSLogin: function () {

            },
            //忘记密码
            forgetPass: function () {

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
