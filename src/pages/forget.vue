<template>
  <div class="middle">
    <header-bar :title="title"></header-bar>
    <div class="middleView" style="margin-top: 1.453rem;">
      <img src="../../static/image/login/logo.jpg" style="width: 2.969rem;height: 0.859rem;">
    </div>
    <div class="middleView" style="margin: 1.406rem 0.422rem 0rem;">
      <div class="middleViewA" style="height:1.25rem;border: 1px solid #22c064;border-radius: 0.625rem;background: #fff;" @click="phoneLook">
        <span style="color: #22c064;font-size: 0.438rem;">手机找回</span>
      </div>

    </div>
    <div class="middleView" style="margin: 0.313rem 0.422rem 0rem;">
      <div class="middleViewA" style="height:1.25rem;border: 1px solid #22c064;border-radius: 0.625rem;background: #fff;" @click="emailLook">
        <span style="color: #22c064;font-size: 0.438rem;">邮箱找回</span>
      </div>
    </div>
  </div>
</template>

<script>
    import header from '../components/HeadBar.vue';
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "forget",
        components: {
            'header-bar': header
        },
        data() {
            return {
                title: '找回密码',
            }
        },
        methods: {
            //跳转手机找回页面
            phoneLook: function () {

            },
            //跳转邮箱找回页面
            emailLook: function () {

            }
        }
    }
</script>

<style scoped>

</style>
