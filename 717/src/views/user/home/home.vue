<template>
  <div class="main">
    <head-item/>
    <sec-item/>
  </div>
</template>

<script>
import headItem from '@/components/home/head';
import secItem from '@/components/home/sec';

export default {
    components: {
      headItem,
      secItem
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
