<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected"  fixed>
      <mt-tab-item id="首页">
        <img :src="img_index" slot="icon" >
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img :src="img_order" slot="icon" >
        订单
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img :src="img_sort" slot="icon" >
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img :src="img_mine" slot="icon" >
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script>
    export default {

        data(){
            return{
                selected:'main',
                img_index:"src/assets/img_index.png",
                img_order:"src/assets/img_order.png",
                img_sort:"src/assets/img_sort.png",
                img_mine:"src/assets/img_mine.png"
            }
    },
    methods: {

    }

    }
</script>

<style>

</style>
