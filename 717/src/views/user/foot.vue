<template>
  <footer>
    <ul>
      <li>
        <router-link to="home">
          <i class="icon iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
      </li>
        <li>
            <router-link to="kind">
               <i class="icon iconfont icon-fenlei"></i>
               <span>分类</span>
            </router-link>
        </li>
        <li>
            <router-link to="social">
               <img src="http://www.lb717.com/static/mobile/images/footer/inter.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="car">
               <i class="icon iconfont icon-gouwuche"></i>
               <span>购物车</span>
               <span class="goods_count" v-if="$store.state.count>0">{{$store.state.count}}</span>
            </router-link>
        </li>
        <li>
               <router-link to="my">
               <i class="icon iconfont icon-wode"></i>
               <span>我的</span>
               </router-link>
           </li>
       </ul>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  height: 1rem;
  background: #fff;
  border-top: 1px solid #ccc;
  flex-shrink: 0;
}
ul {
  width: 100%;
  display: flex;
  height: 0.9rem;
  align-items: center;
}
ul li {
  flex: 1;
  text-align: center;
}
ul li a.bg {
  color: #f00;
}
ul li span {
  display: block;
}
ul li i.icon {
  font-size: 0.46rem;
}
ul li img {
  width: 60%;
}
ul li:nth-child(4) {
  position: relative;
}
ul li:nth-child(4) .goods_count {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  top: -0.1rem;
  background: #f00;
  color: #fff;
  border-radius: 50%;
  right: 0.25rem;
}
</style>
