<template>
  <section>
    <goods-item v-for="(v,i) in $store.state.carList" :key="i" :goods="v"/>
  </section>
</template>

<script>
import goodsItem from './goods/goods'; 
export default {
    components: {
        goodsItem
    },
    mounted () {
       // console.log(this.$store.state.carList)
    }
};
</script>

<style scoped>
  section{
    flex:1;
    overflow-y: auto;
  }
</style>
