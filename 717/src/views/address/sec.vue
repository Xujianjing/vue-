<template>
     <div>
         <div class="address">
             <ads-item v-for="(v, i) in $store.state.adsList" :key="i" :v="v"/>
         </div>
         <h3>
             <span class="add" @click="addAddress">
                 新增收货地址
             </span>
         </h3>
     </div>
</template>

<script>
import adsItem from './adsMsg/adsMsg';
export default {
   methods: {
       addAddress () {
           this.$router.push({name: 'setaddress'});
       }
   },
   components: {
       adsItem
   },
   created () {
       this.$http_token.get('/getAdsList').then((res) => {
           this.$store.commit('changeAdsList', res.data);
       })
   }
}
</script>

<style scoped>
   h3{
       text-align: center;
       margin-top: 0.2rem;
   }
   .address{
       background:#fff;
       border-bottom: 1px solid #eee;
       padding: 0.1rem 0.2rem;
   }
   .add{
       padding: 0.2rem;
       color: #fff;
       background: orangered;
       line-height: 0.6rem;
       border-radius: 5px;
   }
   
</style>
