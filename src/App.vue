<template>
  <div id="app">
    <div class="content-div">
        <router-view/>
    </div>

  </div>
</template>

<script>
  import FootBar from './components/FootBar.vue'
  export default {
    components: {
      'footer-bar': FootBar
    },
    methods: {
      HandleClick: function () {
        this.$toast('Hello world');
      }
    }

  }
</script>

<style>
    .content-div{
      margin-bottom: 5px;
    }
</style>
