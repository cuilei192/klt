<template>
  <div id="v_home">
    <div class="middle">
      <div class="middleView" style="position: fixed;height: 1.625rem;">
        <div class="middleViewAS" style="width: 70%;background: #333;">
          <img style="width: 0.85rem;margin-left: 0.35rem;" src="../../static/image/home/cancel.png">
          <img style="width: 1.3rem;margin-left: 0.2rem;" src="../../static/image/public/logo.png">
          <span style="font-size: 0.45rem;color: #a8a8a8;margin-left: 0.35rem;">下载APP享受优质体验！</span>
        </div>
        <div class="middleViewA" style="width: 30%;background: #22bf64;">
          <span style="color:#fff;font-size: 0.45rem;">立即打开</span>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import footer from '../components/FootBar.vue'
  import '../../static/css/common.css' /*引入公共样式*/
  export default {
      el:'v_home',
      components: {
          'footer-bar': footer
      },
      name: "home",
      methods: {

      }
  }
</script>

<style scoped>

</style>
