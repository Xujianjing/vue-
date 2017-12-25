<template>
   <div>
       <header>
           <span><input type="text" placeholder="请输入您想购买的商品" v-model.trim="goods"><i class="icon iconfont icon-fangdajing"></i></span>
           <span class="search" @click="searchGoods">搜索</span>
       </header>
       <section>
           <p v-if="ulist.length == 0">暂时没有搜索记录</p>
         <ul v-if="ulist.length != 0" class="uli">
           <li v-for="(v,i) in ulist" :key="i">
               {{v}}
           </li>
         </ul>
       </section>
   </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'search',
    data () {
        return {
            goods: '',
            ulist: []
        }
    },
    methods: {
        searchGoods () {
            let ls = localStorage;
            if (!ls.getItem('goodsHistory')) {
                ls.setItem('goodsHistory','[]');
            } else {
                let newList = JSON.parse(ls.getItem('goodsHistory'));
                if(this.goods) {
                    newList.unshift(this.goods);
                    newList = _.uniq(newList);
                }
                ls.setItem('goodsHistory',JSON.stringify(newList));
                this.ulist = newList;
            }
        }
    },
    created () {
        this.searchGoods();
        // localStorage.removeItem('goodsHistory')
    }
}
</script>

<style scoped>
    header{
        height: 0.8rem;
        background: #fff;
        display: flex;
        padding: 0 0.2rem;
        align-items: center;
        justify-content: space-between;
    }
    header span:nth-child(1){
        width:70%;
        text-align: center;
        position: relative;
    }
    header span:nth-child(1) input{
        width:100%;
        background: #f2f2f2;
        border:none;
        border-radius: 5px;
        line-height: 0.5rem;
        padding-left: 0.6rem;
    }
    header span:nth-child(1) i.icon{
        position: absolute;
        left: 0.1rem;
        top:0.1rem;
    }
    header span:nth-child(2){
        text-align: center;
        line-height: 0.5rem;
        width:20%;
        background: #f2f2f2;
        border-radius: 5px;
    }
    p{
        line-height: 1rem;
        text-align: center;
    }
    .uli{
        display: flex;
        flex-wrap: wrap;
    }
    .uli li{
        margin: 0.1rem;
        padding: 0.1rem 0.15rem;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        line-height: 0.4rem;
        background: #fff;
    }
</style>