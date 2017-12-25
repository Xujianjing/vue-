<template>
   <header>
       <p>
           <input type="text" placeholder="请输入你要购买的商品" @focus="result">
           <i class="icon iconfont icon-fangdajing"></i>

       </p>
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
        height: 0.98rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    header p{
        width: 100%;
        position: relative;
        text-align: center;
    }
    header input{
        width: 80%;
        text-align: center;
        background: #f5f5f5;
        border: none;
        border-radius: 5px;
        line-height: 0.6rem;
    }
    header p i.icon{
        position: absolute;
        left: 25%;
        font-size: 0.36rem;
        top: 0.12rem;
    }
</style>
