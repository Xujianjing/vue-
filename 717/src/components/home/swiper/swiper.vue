<template>
    <div class="swiper-container" id="container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v, i) in ulList" :key="i">
                <img :src='v.src' alt="">
            </div>
        </div>
        <div class="swiper-pagination">

        </div>
    </div>
</template>

<script>
import Swiper from '@/static/js/swiper.min.js';
import '@/static/css/swiper.min.css';
export default {
    data () {
        return {
            ulList: []
        }
    },
    created () {
        this.$http.post('/mall/index/banner').then((res) => {
            this.ulList = res.data;
            this.$nextTick(function(){
                new Swiper('#container', {
                    autoplay: 2000,
                    pagination: '.swiper-pagination'
                })
            })
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
</style>
