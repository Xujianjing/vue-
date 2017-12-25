<template>
  <div class="main">
    <head-item/>
    <sec-item/>
    <foot-item/>
  </div>
</template>

<script>
import headItem from '@/components/car/header';
import secItem from '@/components/car/sec';
import footItem from '@/components/car/foot.vue';
export default {
    components: {
      headItem,
      secItem,
      footItem
    }
}
</script>

<style scoped>
 .main{
   display: flex;
   width:100%;
   height: 100%;
   flex-direction: column;
 }
</style>
