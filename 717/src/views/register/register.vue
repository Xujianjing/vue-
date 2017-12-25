<template>
<div>
      <header>
          <span @click="back"><img src="http://www.lb717.com/static/mobile/images/denglu_img/return.png" alt=""></span>
          <span>
            注册会员
          </span>
          <span class="red" @click="toLogin">登录</span>
      </header>
      <section>
          <div class="info">
                <ul>
                    <li><img src="http://lb717.com//static/mobile/images/denglu_img/number.png" alt=""><input type="number" placeholder="请输入您的手机号" name="user_mobile" v-model.trim="user"></li>
                    <li><img src="http://www.lb717.com/static/mobile/images/denglu_img/code.png" alt=""><input type="text" placeholder="请输入验证码" name="user_password"><span>获取验证码</span></li>
                    <li><img src="http://lb717.com//static/mobile/images/denglu_img/password.png" alt=""><input type="password" placeholder="请输入您的密码" name="user_password"  v-model.trim="pwd"></li>
                </ul>
                <div class="loadBut">
                    <p><span @click="toRegister">确定</span></p>
                </div>
          </div>
            
      </section>
</div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            user: '',
            pwd: ''
        };
    },
    methods: {
        toRegister () {
            if (this.user && this.pwd) {
                if (!/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.user)) {
                    alert('this user must be phone');

                } else {
                    this.$http.post('/admin/register', {
                        user: this.user,
                        pwd: this.pwd
                    }).then((res) => {
                        console.log(res.data);
                        if(res.data.code == 0) {
                            this.$router.push({name:'login'});
                        } else {
                            this.user = '';
                            this.pwd = '';
                        }
                    })
                }
            } else {
                console.log('手机号和密码不能为空');
            }
        },
        toLogin () {
            this.$router.push({name: 'login'});
        },
        back () {
            this.$router.back(1);
        }
    }
}
</script>

<style scoped>
  header{
      height: 1.28rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.3rem;
      background: #fafafa;
  }
  header span{
            font-size: 0.36rem;
  }
  header span.red{
      font-size: 0.28rem;
      color: #f00;
  }
  header span img{
      width: 0.2rem;
  }
  .info{
      background: #fff;
  }
  .info > ul > li {
    width: 100%;
    height: 1.2rem;
    position: relative;
}
.info > ul > li img {
    margin-top: .34rem;
    margin-left: .5rem;
    width: .45rem;
    height: .49rem;
}
  .info > ul > li > input {
    width: 6rem;
    height: 1.15rem;
    margin-top: .035rem;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    margin-left: .3rem;
    font-size: .32rem;
    font-family: PingFangSC-Regular, sans-serif;
  }
  .info > ul > li > span{
      position: absolute;
      right: 0.2rem;
      top: 0.4rem;
      border:1px solid #fc4141;
      padding: 0.1rem 0.2rem;
      border-radius: 3px;
      color: #666;
  }
  .loadBut {
    position: relative;
    width: 100%;
    height: 4rem;
    background: #f4f4f4;
}
.loadBut > p {
    position: relative;
    top: 1rem;
    width: 100%;
    height: 1.13rem;
    background: #f4f4f4;
    text-align: center;
    line-height: 1.13rem;
}
.loadBut > p span {
    position: absolute;
    left: 50%;
    margin-left: -2.8rem;
    width: 5.57rem;
    height: 1.13rem;
    display: block;
    color: #fff;
    background: #fc4141;
    border-radius: 50px;
    font-size: .36rem;
}
a:hover {
    text-decoration: none;
}
.loadBut > span {
    float: right;
    margin-right: 1rem;
    color: #999999;
    border-bottom: 1px solid #999999;
}
</style>
