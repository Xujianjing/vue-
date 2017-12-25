<template>
  <div class="main">
    <head-item/>
    <sec-item/>
  </div>
</template>

<script>
import headItem from '@/components/kind/head';
import secItem from '@/components/kind/sec';

export default {
    components: {
      headItem,
      secItem
    }
};
</script>

<style>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
