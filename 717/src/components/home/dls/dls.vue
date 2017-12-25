<template>
   <div class="context">
      <dl v-for="(v, i) in dlList" :key="i"  @click="toMsg(v)">
          <dd>
              
              <img v-lazy='"http://www.lb717.com/"+v.obj_data' alt="">
          </dd>
          <dt>
              <h3>{{v.goods_name}}</h3>
              <p>￥ <span>{{v.discount_price}}</span> <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="" @click.stop="pushCar(v)"></p>
          </dt>
      </dl>
   </div>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
    components: {
        Lazyload
    },
    props: {
        dlList: {
            type: Array
        }
    },
    methods: {
        toMsg (val) {
            this.$router.push({name: 'details',query: {
                'dl': val
            }});
        },
        pushCar (val) {
            this.$store.commit('pushCar', {
                name: val.goods_name,
                price: val.discount_price,
                src: 'http://www.lb717.com/'+val.obj_data,
                id: val.goods_id
            })
            this.$message('加入购物车');
        }
    }
}
</script>

<style scoped>
    .context{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .context dl{
        width: 48%;
        background: #fff;
        margin-bottom: 0.2rem;
    }
    .context dl dd img{
        width: 100%;
    }
    .context h3{
        word-break:break-all;
        -webkit-line-clamp:2;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        font-weight: normal;
        height: 0.8rem;
    }
   dl dt p{
       color: #f00;
       padding: 0.1rem 0.08rem;
   }
   dl dt p span{
       font-weight: 800;
       font-size: 0.32rem;
   }
   dl dt p img{
       width: 0.54rem;
       float: right;
       margin-right: 0.1rem;
   }
</style>
