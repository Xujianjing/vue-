<template>
  <div class="main">
    <head-item/>
    <sec-item/>
  </div>
</template>

<script>
import headItem from '@/components/my/head.vue';
import secItem from '@/components/my/sec.vue';
export default {
    components: {
      headItem,
      secItem
    }
};
</script>

<style scoped>
    .main{
      display: flex;
      flex-direction: column;
    }
</style>
