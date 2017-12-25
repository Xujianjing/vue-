<template>
  <section>
    <div class="userTit">
      <img 
        src="http://www.lb717.com/static/mobile/images/default_avatar.png" 
        alt="">
      <span @click="tologin">{{user}}</span>
    </div>
    <p class="myShop">
      <img 
        src="http://www.lb717.com/static/mobile/images/myimg/my9.png" 
        alt="">
      <span>我的店铺</span>  
      <img 
        src="http://www.lb717.com/static/mobile/images/myimg/my14.png" 
        alt="">
    </p>
    <ul class="ulist">
        <li>
            <img src="http://www.lb717.com/static/mobile/images/myimg/my4.png" alt="">
            代付款
        </li>
        <li>
            <img src="http://www.lb717.com/static/mobile/images/myimg/my5.png" alt="">
            待发货
        </li>
        <li>
            <img src="http://www.lb717.com/static/mobile/images/myimg/my6.png" alt="">
            待收货
        </li>
        <li>
            <img src="http://www.lb717.com/static/mobile/images/myimg/my7.png" alt="">
            售后
        </li>
        <li @click="toOrder">
            <img src="http://www.lb717.com/static/mobile/images/myimg/my8.png" alt="">
            我的订单
        </li>
    </ul>
    <ul class="ulist2">
      <li>
         <span> <img src="http://www.lb717.com/static/mobile/images/myimg/myhome.png" alt="">
          
              我的社区
          </span>
          <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="" class="toLink">
      </li>
      <li>
         <span> <img src="http://www.lb717.com/static/mobile/images/myimg/my10.png" alt="">
              账户余额
          </span>
          <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="" class="toLink">
      </li>
      <li @click="toSetAdd">
         <span> <img src="http://www.lb717.com/static/mobile/images/myimg/my12.png" alt="">
          
              地址管理
          </span>
          <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="" class="toLink">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    data () {
        return {
            user: ''
        };
    },
    methods: {
        toOrder () {
            this.$router.push({name: 'order'});
        },
        toSetAdd () {
            this.$router.push({name: 'address'});
        },
        tologin () {
            this.$router.push({'name': 'login'});
        }
    },
    created () {
        this.user = localStorage.getItem('userName')? localStorage.getItem('userName') : '请登录';
    }
}
</script>

<style scoped>
section{
    flex: 1;
}
.userTit{
    height: 1.97rem;
    color: #fff;
    background: rgb(235, 87, 34);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.userTit img{
    width: 1.23rem;
    height: 1.24rem;
}
.myShop{
    height: 1rem;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    width: 100%;
}
.myShop img:nth-child(1){
    width: 0.8rem;
    margin-right: 0.3rem;
}
.myShop img:nth-child(3){
    width: 0.2rem;
    position: absolute;
    right: 0.3rem;
}
.ulist{
    display: flex;
    padding: 0.3rem;
    background: #fff;
    border-top: 1px solid #ccc;
}
.ulist li{
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.ulist li img{
    width: 0.45rem;
    height: 0.45rem;
    display: block;
}
.ulist2{
    margin-top:0.2rem;
}
.ulist2 li{
    background: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    height: 1.1rem;
    font-size: 0.36rem 
}
.ulist2 li img{
    width:0.5rem;

}
.ulist2 .toLink{
    width: 0.2rem;
}
</style>
