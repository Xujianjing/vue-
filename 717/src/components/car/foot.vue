<template>
  <footer>
    <p class="btn"><span :class="{bg: $store.state.check_all}" @click="checkAll">√</span></p>
    <p>全选</p>
    <p>
      合计：<b>￥ {{$store.state.sum.toFixed(2)}} </b>
    </p>
    <p>结算</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isCol: false
    };
  },
  methods: {
    checkAll() {
      this.$store.state.check_all = !this.$store.state.check_all;
      this.$store.commit('checkAll', this.$store.state.check_all);
    }
  }
};
</script>

<style scoped>
footer {
  height: 0.9rem;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
}
footer p {
  height: 100%;
}
footer p:nth-child(1) {
  width: 13%;
  text-align: center;
  padding-left: 0.1rem;
}
.btn span {
  width: 0.6rem;
  height: 0.6rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: block;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.36rem;
  margin-top: 0.15rem;
  color: #fff;
}
.btn span.bg {
  background: #f00;
  border-color: #f00;
}
footer p:nth-child(2) {
  width: 17%;
  line-height: 0.9rem;
  font-size: 0.32rem;
}
footer p:nth-child(3) {
  width: 40%;
  line-height: 0.9rem;
  font-size: 0.34rem;
  text-align: center;
}
footer p:nth-child(3) b {
  color: #fc4141;
  font-size: 0.36rem;
}
footer p:nth-child(4) {
  width: 30%;
  line-height: 0.9rem;
  color: #fff;
  font-size: 0.36rem;
  text-align: center;
  background: #fc4141;
}
</style>
