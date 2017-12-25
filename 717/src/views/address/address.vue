<template>
  <div>
      <head-item tit="收货地址"/>
      <sec-item/>
  </div>
</template>

<script>
import headItem from '@/common/head';
import secItem from './sec.vue';
export default {
    components: {
        secItem,
        headItem
    }
}
</script>

<style>

</style>
