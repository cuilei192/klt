<template>
  <div id="v_comment" >
    <div class="middleView" style="height: 2rem; padding-left: 0.4rem;">
            <div class="middleViewAS" style="width: 50%">
              <span v-text="comment_emai"></span><br>
            </div>

             <div class="middleViewA" style="width: 50%;">
               <span v-text="comment_time"></span>
             </div>

            <div class="middleViewS" style="width: 100%;padding-right: 0.4rem;margin-top: 0.4rem;" >
              <span v-text="comment_message"></span>
            </div>
    </div>
    <div style="width: 100%; height: 1px;background: #e8e8e8;margin: 0.2rem 0"></div>
  </div>

</template>

<script>
  import '../../static/css/common.css';
  export default {
    data(){
      return {
        selected: 'main',
      }
    },
    props: {
      comment_emai: String,
      comment_time: String,
      comment_star:Number,
      comment_message:String,
    }
  }
</script>

<style>

</style>
