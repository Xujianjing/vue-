<template>
   <header>
       
        <img src="../../assets/logo.gif" alt="" class="logo">
        <span class="txt"><input type="text" placeholder="请输入您要购买的商品" @focus="result"><i class="icon iconfont icon-fangdajing"></i></span>
        <span class="shop"><img src="../../assets/shoping.png" alt=""> <b>我的店铺</b></span>
   </header>
</template>

<script>
export default {
    methods: {
        result () {
            this.$router.push({name: 'search'});
        }
    }
}
</script>

<style scoped>
   header{
       height: 0.9rem;
       display: flex;
       align-items: center;
       padding: 0 0.3rem;
       background: #fff;
   }
   .logo{
       width: 0.94rem;
   }
   b{
       display: block;
       font-weight: normal;
       margin-top: -0.1rem;
   }
   .txt{
       flex: 1;
       text-align: center;
       position: relative;
   }
   .txt i.icon{
       position: absolute;
       left:0.3rem;
       top: 0.1rem;
       font-size: 0.36rem;
   }
   .txt input{
       width:95%;
       text-align: center;
       line-height: 0.57rem;
       background: #f5f5f5;
       border-radius: 5px;
       border: none
   }
   span{
       text-align: center;
       font-size: 0.2rem;
   }
   .shop{
       color: #f00;
   }
   .shop img{
       width: 0.5rem;
       vertical-align: center;
   }
  
</style>
