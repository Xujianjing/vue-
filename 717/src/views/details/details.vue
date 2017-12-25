<template>
    <div class="main">
        <header>
           <span @click="goBack">
                <i class="icon iconfont icon-xiangzuo"></i>
               返回
           </span>

           <span>
               <b :class="{'bg': page==='swiperItem'}" @click="goods">商品</b>
               <b :class="{'bg': page==='msgItem'}" @click="msg">详情</b>
           </span>
           <span id="inx">
               <i class="icon iconfont icon-shouye"></i>
           </span>
        </header>
        <section>
           <component :is="page" :item='data.dl'></component>
        </section>
        <footer>
            <span>
                <img src="http://www.lb717.com/static/mobile/images/food/05.png" alt="">
                <b>客服</b>
            </span>
            <span>
                <img src="http://www.lb717.com/static/mobile/images/footer/3.png" alt="">
                <b>购物车</b>
            </span>
            <button>
                加入购物车
            </button>
            <button>
                立即购买
            </button>
        </footer>
    </div>
</template>

<script>
import swiperItem from './swiper';
import msgItem from './imgMsg';
export default {
    name: 'details',
    components: {
        swiperItem,
        msgItem
    },
    data () {
        return {
            page: 'swiperItem',
            data: this.$route.query
        };
    },
    methods: {
        goBack () {
            this.$router.back(1);
        },
        goods () {
            this.page = 'swiperItem';
        },
        msg () {
            this.page = 'msgItem';
        }
    }
};
</script>

<style scoped>
    .main{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    header{
        height: 1rem;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.3rem;
        border-bottom: 1px solid #ccc;
    }
    header span:nth-child(3) i.icon{
        font-size: 0.48rem;
    }
    header span b{
        font-weight: normal;
        font-size: 0.36rem;
        padding: 0.1rem;
        border-bottom: 2px solid transparent;
    }
    header span b.bg{
        border-bottom: 2px solid #666;
    }
    
    section{
        flex: 1;
        overflow-y: scroll;
    }
    footer{
        height: 1.4rem;
        background: #fff;
        display: flex;
        align-items: center;
        border-top: 1px solid #eee;
    }
    footer span{
        flex: 1;
        text-align: center;
    }
    footer span img{
        width: 0.5rem;
    }
    footer span b{
        display: block;
        font-weight: normal;
    }
    footer button{
        flex: 2;
        height: 100%;
        border: none;
        background: #ff7772;
        font-size: 0.34rem;
        color: #fff;
    }
    footer button:nth-of-type(2){
        background: #FF2B2D;
    }
</style>
