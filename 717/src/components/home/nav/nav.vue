<template>
<div class="navs">
  <ul class="ulist">
      <li v-for="(v, i) in navList" :key="i">
          <img :src="v.src" alt="">
          <span>{{v.tit}}</span>
      </li>
  </ul>
  <div class='btm'>
            <span>商城动态</span>
            <div class='adverCont'>
                <div class="swiper-container smallSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                                717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！
                        </div>
                        <div class="swiper-slide">
                                7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import Swiper from '@/static/js/swiper.min.js';
import '@/static/css/swiper.min.css';
export default {
    data () {
        return {
            navList: []
        };
    },
    created () {
        this.$http.post('/mall/index/nav').then((res) => {
            this.navList = res.data;
        })
    },
    mounted () {
       new Swiper('.smallSwiper', {
           loop:true,
           direction: 'vertical',
           autoplay: 2000
       })
    }
}
</script>

<style scoped>
.navs{
    background: #fff;
    padding: 0.25rem 0;
}
 .ulist{
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding-bottom: 0.2rem;
 }
 .ulist li{
     width: 25%;
     flex-shrink: 0;
     text-align: center;
 }
 .ulist li span{
     display: block;
 }
 .ulist li img{
     width: 0.88rem;
 }
.btm {
  display: flex;
  width: 100%;
}
.btm span{
  width: .9rem;
  height: .8rem;
  font-size: 17px;
  display: inline-block;
  line-height: .4rem;
  color: #ff6d00;
  margin-left: .3rem;
}
.adverCont{
  width: 80%;
  height: .8rem;
  border:1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.adverCont .swiper-slide {
  padding-left:.2rem;
  font-size: .26rem;
}
</style>
