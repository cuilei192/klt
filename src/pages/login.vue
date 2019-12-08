<template>
    <div class="middle">
      <header-bar :title="title"></header-bar>
    </div>
</template>

<script>
    import header from '../components/HeadBar.vue'
    import '../../static/css/common.css' /*引入公共样式*/
    export default {
        name: "login",
        components: {
            'header-bar': header,
        },
        data() {
            return {
                title: '会员登录',

            }

        },
        methods: {


        },
        filters: {

        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
