<template>
<div>
    <div class="swiper-container" id="container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v, i) in ulList" :key="i">
                <img :src='v.src' alt="">
            </div>
        </div>
         <div class="swiper-pagination"></div>
    </div>
    
    <h3>{{item.goods_name}}</h3>
    <div class="price">
        <div>
            <p>￥ {{item.discount_price}} <span>￥{{item.discount_price*1.2}}</span></p>   
            <p>(运费： ￥ 0.00)</p>
        </div>
        <button>溯源查询</button>
    </div>
</div>
</template>

<script>
import Swiper from '@/static/js/swiper.min.js';
import '@/static/css/swiper.min.css';
export default {
    props: {
        item:{
            type: Object
        }
    },
    data () {
        return {
            ulList: [
                {
                    'src': 'http://www.lb717.com/' + this.item.obj_data
                },
                {
                    'src': 'http://www.lb717.com//public/upload/temp/2017/07-17/67ebc65a3e61b404a2954fca2574fe5d.jpg'
                },
                {
                    'src': 'http://www.lb717.com//public/upload/temp/2017/07-17/0bbc44e58c83a3eb8190913cc1b93937.jpg'
                }
            ]
        }
    },
    mounted () {
        new Swiper('#container', {
            autoplay: 1500,
            loop: true,
            pagination: '.swiper-pagination'
        })
    }
}
</script>

<style scoped>
    #container{
        width: 100%;
    }
    #container .swiper-slide{
        width:100%;
    }
    #container img{
        width:100%;
    }
    h3{
        padding: 0 0.2rem;
        background: #fff;

    }
    .price{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem;
        background: #fff;
    }
    .price p{
        line-height: 0.5rem;
        color: #666;

    }
    .price p span{
        text-decoration: line-through;
        color: #999;
        margin-left: 0.2rem;
    }
    .price button{
        border: none;
        background: steelblue;
        padding: 0 0.2rem;
        color: #fff;
        border-radius: 5px;
    }
</style>
