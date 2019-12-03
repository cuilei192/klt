<template>
  <mt-header title="headTitle">
    <router-link to="/" slot="left">
    </router-link>
    <mt-button icon="more" slot="right">
    </mt-button>
  </mt-header>
</template>

<script>
    export default {
        data(){
            return {
                selected: 'main',
            }
        },
      props: ['headTitle'],
    }
</script>

<style>

</style>
