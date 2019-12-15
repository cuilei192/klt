<template>
  <div class="middleView" style="height: 1.2rem;z-index: 1;background: #FFFFFF;border-bottom: 1px solid #e8e8e8;">
    <div class="middleViewAS" style="width: 15%">
      <img class="middleView" src="../../static/image/public/klt_bak_arrow.png" style="width: 0.25rem;height: 0.422rem;margin-left: 0.422rem;"/>
    </div>
    <div class="middleViewA" style="width: 70%;">
      <span style="font-size: 0.375rem" v-text="title"></span>
    </div>
    <div class="middleViewAE" style="width: 15%">
      <img src="../../static/image/public/kefu.png" style="width: 0.406rem;height: 0.391rem;margin-right: 0.422rem;"/>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            title: String,
            required: true
        }
    }
</script>

<style>

</style>
