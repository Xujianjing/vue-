<template>
    <div>
        <p><span class="ads">{{v.name}}</span> {{v.tel}}</p>
        <p>{{v.province}} {{v.city}} {{v.area}} {{v.ps}}</p>
        <p class="set">               
        <span><b :class="{bg: isChecked}" @click="change">√</b> 设为默认 </span>

        <span>
            <i @click="setAds(v)">编辑</i>  <i @click="delAds(v.id)">删除</i>   
        </span>
        
        </p>
    </div>
</template>

<script>
export default {
    props: {
        v: {
            type: Object,
            required: true
        }
    },
    created(){
        console.log(this.v.name)
    },
    data () {
        return {
            isChecked: false
        }
    },
    methods: {
        change () {
            this.isChecked = !this.isChecked;
        },
        delAds (id) {
            console.log(id)
            this.$http_token.post('/delAds', {
                id: id
            }).then((res) => {
                if (res.data.msg === 'success') {
                    this.$store.commit('changeAdsList', res.data.data);
                } else {
                    this.$message('登录失效');
                    let that = this;
                    setTimeout(function(){
                        that.$router.push({name: 'login'});
                    },1000)
                }
            })
        },
        setAds (v) {
            this.$router.push({name: 'setaddress', params: v})
        }
    }
}
</script>

<style scoped>
p{
    line-height: 0.6rem;
    color: #666
   }
   span.ads{
       color: #333;
       font-size: 0.36rem;
   }
.set{
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    align-items: center;
}
   .set span b {
       display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.36rem;
  margin-top: 0.15rem;
  color: #fff;
}
.set span b.bg {
  background: #f00;
  border-color: #f00;
}
i{
    font-style: normal;
}
</style>
