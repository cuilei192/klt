<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" style="border-top: 1px solid #eeeeee;" fixed>
      <mt-tab-item id="首页">
        <img :src="img_index" slot="icon">
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img :src="img_sort" slot="icon">
        <span>分类</span>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img :src="img_order" slot="icon">
        <span>订单</span>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img :src="img_mine" slot="icon">
        <span>我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script>
    export default {

        data(){
            return{
                selected:'main',
                img_index:"static/image/public/img_index.png",
                img_order:"static/image/public/img_order.png",
                img_sort:"static/image/public/img_sort.png",
                img_mine:"static/image/public/img_mine.png"
            }
    },
    methods: {

    }

    }
</script>

<style>

</style>
