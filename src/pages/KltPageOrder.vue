<template>
              <div class="middle" style="background: #EEEEEE">
                <header-bar></header-bar>
                <div class="middleViewA" style="height: 1.40rem;">
                   <img style="margin-right: 0.1rem;width: 0.4rem" src="../../static/image/order/fenlei_1.png"/>
                  <span style="font-size: 0.312rem">热门分类</span>
                </div>
              </div>
</template>

<script>
  import header from '../components/HeadBar.vue'
  import '../../static/css/common.css' /*引入公共样式*/
    export default {
      components: {
        'header-bar': header,
      },
        data(){
            return {
                selected: 'main',
            }
        }
    }
</script>

<style>

</style>
