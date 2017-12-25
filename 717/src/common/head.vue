<template>
  <header>
      <span @click="back">
          <img 
            src="http://www.lb717.com/static/mobile/images/return.png" 
            alt="">
            返回
      </span>
      <span>
          {{tit}}
      </span>
      <div class="index" @click="toHome">
          <img src="http://www.lb717.com/static/mobile/images/index.png" alt="">
      </div>
  </header>
</template>

<script>
export default {
    methods: {
        back () {
            this.$router.back(1);
        },
        toHome () {
            this.$router.push({name:'home'});
        }
    },
    props: {
        'tit':{
            type: String
        }
    }
}
</script>

<style scoped>
    header{
        background: #fff;
        border-bottom: 1px solid #eee;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.2rem;
    }
    header span img{
        width:0.4rem;
    }
    .index img{
        width: 0.8rem;
    }
</style>
