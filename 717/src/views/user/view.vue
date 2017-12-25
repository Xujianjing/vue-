<template>
<div id="main">
  <div class="sec">
    <router-view></router-view>
  </div>
  <foot-item/>
</div>
</template>

<script>
import footItem from './foot.vue';
export default {
   components: {
       footItem
   }
}
</script>

<style scoped>
 #main{
   width:100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
 .sec{
    flex: 1;
    overflow: hidden;
 }
</style>
