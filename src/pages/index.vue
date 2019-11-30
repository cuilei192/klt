<template>
  <div id="app">
    <div class="middle"></div>
  </div>
</template>

<script>
  import footer from '../components/FootBar.vue'
  import './../static/css/common.css' /*引入公共样式*/
  export default {
      el:'App',
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
