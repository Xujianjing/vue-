<template>
  <div>
      <head-item tit="收货人"/>
      <section class="main">
            <ul>
                <li>
                    <input type="text" placeholder="收货人姓名" v-model="name">
                </li>
                <li>
                    <input type="text" placeholder="手机号" v-model="tel">
                </li>
                <li>
                    <!-- 省 -->
                    <select @change="changeCity" v-model="province">
                        <option v-for='(sItem, sIndex) in provinceList' :value="sItem.name"  :key='sIndex'>{{sItem.name}}</option>
                    </select>
                    <!-- 市 -->
                    <select name="" id="" @change="changeArea" v-model="city" >
                        <option v-for='(sItem, sIndex) in cityList'  :value="sItem.name" :key='sIndex'>{{sItem.name}}</option>
                    </select>
                </li>
                <li>
                    <!-- 区 -->
                    <select name="" id="" v-model="area">
                        <option v-for='(sItem, sIndex) in areaList' :value="sItem"  :key='sIndex'>{{sItem}}</option>
                    </select>
                </li>
                <li>
                    <input type="text" placeholder="详细地址" v-model="ps">
                </li>
                <li>
                    <p>
                        <b>√</b>设为默认地址
                    </p>
                </li>
                <li>
                    <button @click="hold">保存</button>
                </li>
            </ul>

      </section>
  </div>
</template>

<script>
import headItem from "@/common/head";
export default {
  data () {
    return {
      provinceList: [],
      cityList: [],
      areaList: [],
      name: '',
      tel: '',
      province: '',
      city: '',
      area: '',
      ps: ''
    };
  },
  components: {
    headItem
  },
  methods: {
    changeCity () {
        this.provinceList.forEach((item, inx) => {
          if(item.name === this.province) {
            this.cityList = item.city;
          }
        })
    },
    changeArea () {
        this.cityList.forEach((item, inx) => {
          if(item.name === this.city) {
            this.areaList = item.area;
          }
        })
    },
    hold () {
      if (this.name && /^1[3|4|5|8|7][0-9]{9}$/.test(this.tel)) { 
        if (this.province && this.city && this.area) {
          if (this.$route.params.province) {
              this.$http_token.post('/setAds', {
                  name: this.name,
                  tel: this.tel,
                  province: this.province,
                  city: this.city,
                  area: this.area,
                  ps: this.ps,
                  id: this.$route.params.id
              }).then((res) => {
                  if (res.data.msg === 'success') {
                          this.$router.push({name: 'address'});
                  }
            })
          } else {
              this.$http_token.post('/addAds', {
                  name: this.name,
                  tel: this.tel,
                  province: this.province,
                  city: this.city,
                  area: this.area,
                  ps: this.ps
              }).then((res) => {
                if (res.data === 'success') {
                  this.$router.push({name: 'address'});
               }
              })
          }
          
         
        } else {
          this.$message('城市选择不完整');
        }
      } else {
        this.$message('用户名或电话格式不正确');
      }
    }
  },
  created () {
    this.$http.get('/getProvince').then((res) => {
      this.provinceList = res.data
    });
    if( this.$route.params.province ) {
      let params = this.$route.params;
      this.name = params.name;
      this.tel = params.tel;
      this.city = params.city;
      this.province = params.province;
      this.area = params.area;
      this.ps = params.ps;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background: #fff;
}
.main ul {
  width: 100%;
  padding: 0.2rem;
}
ul {
  width: 100%;
  padding: 0.2rem;
}
li {
  padding: 0.2rem;
  background: #fff;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
}
button,
input {
  width: 100%;
  padding: 0.1rem;
  background: none;
  outline: none;
  border: none;
}
li:nth-child(3) {
  background: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  
}
select {
    width: 45%;
  }
 select option {
      font-size: 0.25rem;
    }
li:nth-child(4) {
  display: flex;
  justify-content: space-between;
}
li:nth-child(6) {
  background: none;
}
li:nth-child(7) {
  background: none;
  text-align: center;
}
button {
  width: 80%;
  padding: 0.2rem;
  background: orangered;
  color: #fff;
  border-radius: 5rem;
}
</style>
