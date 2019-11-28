<template>
  <div id="app">
    <div class="content-div">
        <router-view/>
          <footer-bar></footer-bar>
    </div>

  </div>
</template>

<script>
  import Footer from './components/FootBar.vue'
  export default {
    el: 'App',
    components: {
      'footer-bar': Footer
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
