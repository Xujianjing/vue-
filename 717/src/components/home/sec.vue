<template>
   <section @scroll="result" ref="sec">
       <div ref="main">
        <swiper-item/>
        <nav-item/>
        
            <div class="today">
                        <p>
                            <img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/todayimg.png'">
                            <em>天天特惠</em>
                            <small>每天有惊喜</small>
                        </p>
                        <span>更多<i class="icon iconfont icon-right"></i></span>
            </div>
            <div class="coupon">
                    <div class="leftcont">
                        <img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/home1.png'">
                    </div>
                    <div class="rightcont">
                        <p class="rightcont-top"> <img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/ruwei.png'"></p>
                        <p class="rightcont-bottom"><img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/gaodian.png'"></p>
                    </div>
            </div>
            <div class="homeTit">
                <b></b>
                <h4><img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/homelandlogo.png'"> 家乡味道</h4>
                <span>更多<i class="icon iconfont icon-right"></i></span>
            </div>

            <div class="dls">
                <dl-item :dlList="dlList"/>
                <p v-if='isload'>{{altTit}}</p>
            </div>
       </div>
   </section>
</template>

<script>
import swiperItem from './swiper/swiper';
import navItem from './nav/nav';
import dlItem from './dls/dls';
export default {
    data () {
        return {
            id: 2,
            dlList: [],
            isScroll: true,
            isload: true,
            altTit: '已经很努力的加载数据了...'
        };
    },
    components: {
        swiperItem,
        navItem,
        dlItem
    },
    methods: {
        randerDlList () {
            this.$http({
                url: '/mall/index/getGoodsChannel',
                method: 'POST',
                data: {
                    channel_id: this.id
                }
            }).then((res) =>{
                let arr = res.data.data.data;
                if (arr.length === 0) {
                    this.altTit = '我可是有底线的！！！';
                    this.isScroll = false;
                    return;
                }
                this.dlList = this.dlList.concat(arr);
                this.isScroll = true;
            })
        },
        result () {
            let secHeight = this.$refs.sec.offsetHeight;
            let conHeighht = this.$refs.main.offsetHeight;
            let scrollHeight = this.$refs.sec.scrollTop;
            if (this.isScroll) {
                if ((secHeight + scrollHeight + 10) > conHeighht) {
                    this.id++;
                    this.isScroll = false;
                    let that = this;
                    setTimeout(function () {
                        that.randerDlList();
                    }, 500)
                }
            }
            
        }
    },
    created () {
        this.randerDlList();
    }
}
</script>

<style scoped>
   section{
       flex: 1;
       overflow-y: scroll;
   }
   .today {
  width: 100%;
  background: #fff;
  margin:.1rem 0;
  display: flex;
  justify-content: space-between;
  padding: .1rem .2rem;
  align-items: center;
}
.today p img{
  width: .4rem;
  height: .4rem;
  vertical-align: middle;
}
.today p em {
  color: #ff6d00;
  font-size: .34rem;
 
}
.today p small{
  color: #ff6d00;
  font-size: .26rem;
}
.today span{
  color: #999;
}
.coupon{
  width: 100%;
  height: 4.24rem;
  padding-bottom: .2rem;
  display: flex;
  margin-bottom: .1rem;
}
.coupon>div{
  flex:1;
}
.leftcont{
  padding-right: .05rem;
}
.coupon>div img{
  width: 100%;
}
.rightcont{
  display: flex;
  flex-direction: column;
}
.rightcont .rightcont-top {
  padding-bottom: .05rem;
}
.homeTit{
  width: 100%;
  padding:.1rem 0;
  position: relative;
  background: #fff;
  margin-bottom: .1rem;
}
.homeTit b{
  position: absolute;
  width: 60%;
  height: .02rem;
  background: #FF6D00;
  top:50%;
  left:50%;
  margin-left: -30%;
}
.homeTit h4{
  width: 35%;
  background: #fff;
  padding:.1rem;
  margin-left:30%;
  color:#FF6D00;
  position: relative;
  z-index: 999;
  font-weight: normal;

}
.homeTit h4 img{
  width: .4rem;
  height: .4rem;
  vertical-align: middle;
  margin:0 .1rem ;
}
.homeTit span{
  position: absolute;
  right: .2rem;
  top:.2rem;
  font-weight: normal;
  color:#999;
}
.dls p{
    line-height: 0.5rem;
    text-align: center;
}
</style>
