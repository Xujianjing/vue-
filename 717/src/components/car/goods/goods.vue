<template>
    <div class="sec">
        <dl>
            <dd class="btn">
                <span :class="{bg: goods.isChecked}" @click="changeSum">√</span>
                <img :src="goods.src">
            </dd>
        <dt>
            <p class="tit">{{goods.name}}</p>
            <p> × {{goods.count}}</p>
            <p class="price"> ￥ {{goods.price}}</p>
            <p class="changeCount"><b @click="subCount">-</b> <span>{{sums}}</span> <b @click="addCount">+</b></p>
        </dt>
    </dl>
</div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Object
        }
    },
    data () {
        return {
            sums: this.goods.count
        };
    },
    methods: {
        addCount () {
            this.sums++;
            this.$store.commit('addCount', {
                id: this.goods.id,
                isChecked: this.goods.isChecked
            })
        },
        subCount () {
            this.sums--;
            if (this.sums <= 0) {
                this.sums = 1;
                this.$message('不能再减啦，主人！');
                return;
            }
            this.$store.commit('subCount', {
                id: this.goods.id,
                isChecked: this.goods.isChecked
            })
        },
        changeSum () {
            this.goods.isChecked = !this.goods.isChecked;
           this.$store.commit('changeSum', {
               id: this.goods.id,
               isChecked: this.goods.isChecked
           }) 
        }
    }
}
</script>

<style scoped>
 .sec{
       background: #fff; 
       padding: 0.2rem;
       height: 2.4rem;
    }
    dl{
       
    }
    dl dd{
        padding: 0 0.6rem;
        position: relative;
        float: left;
    }
    dl dd img{
        width:2rem;
    }
        .btn span {
        width: 0.6rem;
        height: 0.6rem;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        position: absolute;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.36rem;
        margin-top: 0.15rem;
        color: #fff;
        left: -0.1rem;
        top:0.3rem;
        z-index: 999;
}
.btn span.bg {
  background: #f00;
  border-color: #f00;
}
    dl dt{
        position: relative;
    }
    
    p.tit{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    dl dt p{
        line-height: 0.6rem;
    }
    .changeCount{
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
    }
    .changeCount span{
        border: 1px solid #ccc;
        padding: 0.06rem 0.3rem; 
    }
    .changeCount b{
        border: 1px solid #ccc;
        padding: 0.06rem 0.1rem;
    }
    .price{
        color: #f00;
        font-size: 0.36rem;
    }

</style>
