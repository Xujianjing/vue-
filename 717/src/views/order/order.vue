<template>
    <div class="main">
       <head-item tit="我的订单"/>
       <sec-item/>
    </div>
</template>

<script>
import headItem from '@/common/head.vue';
import secItem from './sec.vue';
export default {
    components: {
        headItem,
        secItem
    }
}
</script>

<style scoped>
  .main{
      height: 100%;
      width:100%;
      display: flex;
      flex-direction: column;
  }
</style>
