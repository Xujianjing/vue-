<template>
    <section>
        <div class="left">
            <ul>
                <li v-for="(v,i) in navList" :class="{'bgli': i == cls}" :key="i" @click="category(i, v.cate_id)">
                   {{v.cate_name}} 
                </li>
            </ul>
        </div>
        <div class="page">
            <div v-for="(val,i) in imgList" :key="i">
                <dl>
                    <dt>
                        <img :src="'http://www.lb717.com'+val.cate_icon" alt="">
                    </dt>
                    <dd>
                        {{val.cate_name}}
                    </dd>
                </dl>
            </div>
        </div>
    </section>  
</template>

<script>
export default {
    data () {
        return {
            navList: [],
            inx: 0,
            cls: 0,
            imgList: []
        };
    },
    methods:{
        category (inx, id) {
            this.cls = inx;
            this.$http.post('mobile/Category/categorySon', {id}).then((res) => {
                this.imgList = res.data;
            })
        }
    },
    mounted () {
        this.$http.post('/mall/category/topCategory').then((res) => {
            this.navList = res.data.data;
        });
        this.category(0, 2);
    }
}
</script>

<style scoped>
  section{
      flex: 1;
      display: flex;
  }
  .left{
      width: 30%;
  }
  .page{
      width: 100%;
      background: #fff;
  }
  .left ul li{
      color: #333;
    text-align: center;
    border-right: none;
    line-height: 0.8rem;
    border-left: 2px solid transparent;
  }
  .left ul .bgli {
    color: #fc4141;
    background: #fff;
    text-align: center;
    border-right: none;
    border-left: 2px solid #fc4141;
  }
  
  .page div{
    width: 30%;
    background: #f7f7f7;
    height: 2rem;
    display: inline-block;
    margin: 0.06rem 0.06rem;
  }
  .page div img{
      width: 1.5rem;
  }
  .page dd{
      text-align: center;
  }
</style>
