<template>
<div>
      <header>
          <span @click="back"><img src="http://www.lb717.com/static/mobile/images/denglu_img/return.png" alt=""></span>
          <span>
            登录
          </span>
          <span class="red" @click="toRegister">注册</span>
      </header>
      <section>
          <div class="info">
                <ul>
                    <li><img src="http://lb717.com//static/mobile/images/denglu_img/number.png" alt=""><input type="number" placeholder="请输入您的手机号" name="user_mobile" v-model="user"></li>
                    <li><img src="http://lb717.com//static/mobile/images/denglu_img/password.png" alt=""><input type="password" placeholder="请输入您的密码" name="user_password" v-model="pwd"></li>
                </ul>
                <div class="loadBut">
                    <p><span @click="toLogin">立即登录</span></p>
                    <span>忘记密码 ? </span>
                </div>
          </div>
          <h3> 使用第三方账号登录</h3>
            <div class="link">
                    <ul>
                        <li>
                                <dl>
                                    <dt><img src="http://lb717.com//static/mobile/images/denglu_img/weChat.png" alt=""></dt>
                                    <dd>微信</dd>
                                </dl>
                            
                        </li>
                        <li>
                                <dl>
                                    <dt><img src="http://lb717.com//static/mobile/images/denglu_img/qq.png" alt=""></dt>
                                    <dd>QQ</dd>
                                </dl>
                        </li>
                        <li>
                                <dl>
                                    <dt><img src="http://lb717.com/static/mobile/images/denglu_img/micro-blog.png" alt=""></dt>
                                    <dd>微博</dd>
                                </dl>
                        </li>
                    </ul>
            </div>
      </section>
</div>
</template>

<script>
import {setCookie} from '../../utiles/token';
export default {
    name: 'login',
    data () {
        return {
            user: '',
            pwd: ''
        };
    },
    methods: {
        toLogin () {
            if (this.user && this.pwd) {
                if (!/^1[3|4|5|8|7][0-9]{9}$/.test(this.user)) {
                   alert('手机格式不正确');
                } else {
                    this.$http_token.post('/admin/login', {
                        user: this.user,
                        pwd: this.pwd
                    }).then((res) => {
                        alert(res.data.msg);
                        if (res.data.code == 0) {
                            localStorage.setItem('userName', this.user);
                            setCookie({'token':'token', 'val': res.data.token});
                            this.$router.push({name:'home'})
                        }
                    });
                }
            }
        },
        toRegister () {
            this.$router.push({name:'register'})
        },
        back () {
            this.$router.back(1);
        }
    },
    created () {
        localStorage.removeItem('userName');
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
    margin-top: 1.1rem;
    margin-right: 1rem;
    color: #999999;
    border-bottom: 1px solid #999999;
}
h3{
    line-height: 0.5rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #666;
}
.link{
    width:100%;
}
.link a{
    color: #999;
}
.link ul{
    padding: 0 0.5rem;
    display: flex;
}
.link ul li{
    text-align: center;
    color: #999;
}
.link ul li img{
    width: 60%;
}
</style>
