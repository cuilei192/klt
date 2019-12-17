<template>
  <div class="middle">
    <header-bar :title="title"></header-bar>
    <div class="middleView" style="margin-top: 1.453rem;">
      <img src="../../static/image/public/logo_black.png" style="width: 2.969rem;height: 0.859rem;">
    </div>
    <div class="middleViewS" style="margin: 0.688rem 0.422rem 0rem;">
      <span style="font-size: 0.375rem;">您可通过电子邮箱重置密码</span>
    </div>
    <div class="middleViewAS" style="margin-top: 0.8rem;height: 1.719rem;background: #fff;border-top: 1px solid #bfbfbf;border-bottom: 1px solid #bfbfbf;">
      <div class="middleViewAS" style="margin-left: 0.422rem;margin-right: 0.422rem;">
        <span style="font-size: 0.438rem;">邮箱</span>
        <input style="margin-left: 0.813rem;font-size: 0.438rem;" placeholder="电子邮件地址" v-model="email">
      </div>
    </div>
    <div class="middleViewA" style="margin: 1.563rem 0.422rem 0rem;height: 1.25rem;background: #22c064;border-radius:0.625rem;" @click="submit">
      <span style="color: #fff;font-size: 0.438rem;">提交</span>
    </div>

  </div>

</template>

<script>
    import header from '../components/HeadBar.vue';
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "emailLook",
        components: {
            'header-bar': header,
        },
        data() {
            return {
                title: '邮箱找回',
                email: '',
            }

        },
        methods: {
            //提交
            submit: function () {
                let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                if (reg.test(this.email) === false) {
                    alert('邮箱格式不正确，请重新输入');
                    return false;
                }
            },

        },
        filters: {

        },
        watch: {

        }
    }
</script>

<style scoped>
body{
  background: #eeeeee;
}
</style>
