const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const queryApi = require('./queryApi.js');
const jwt = require('jsonwebtoken');
let app = express();
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, user');
    res.header('Content-Type', 'application/json');
    next();
});
// 注册
app.post('/admin/register', function (req, res) {
    let userList = JSON.parse(fs.readFileSync('../Mock/data/user.json'));
    let code = 0;
    let msg = '注册成功';
    userList.forEach(item => {
        if (req.body.user === item.user) {
            msg = '您已经注册过，请直接登录';
            code = 1;
        } 
    });
    if (code === 0) {
        req.body.address = [];
        userList[req.body.user] = req.body;
        fs.writeFile('../Mock/data/user.json', JSON.stringify(userList));
    }
    let obj = {
        code,
        msg
    }
    res.end(JSON.stringify(obj));
})
// 登录
app.post('/admin/login', function (req, res) {
    let userList = JSON.parse(fs.readFileSync('../Mock/data/user.json'));
    let msg = '用户名与密码不匹配';
    let code = 1;
        if (userList[req.body.user].pwd === req.body.pwd) {
            msg = '登录成功';
            code = 0;
            let token = jwt.sign(req.body, 'soda', {expiresIn: 600});
            res.end(JSON.stringify({
                code,
                msg,
                token
            }));       
        }
    
    let obj = {
        code,
        msg
    }
    res.end(JSON.stringify(obj));
})
// home页dl数据
app.post('/mall/index/getGoodsChannel', function (req, res) {
    queryApi('/mall/index/getGoodsChannel', req.body, 'POST').then((data) => {
        res.end(data);
    });
});
// home的banner图数据
app.post('/mall/index/banner', function(req, res) {
    res.end(fs.readFileSync('../Mock/data/banner.json'));
});
// home的导航栏
app.post('/mall/index/nav', function(req, res) {
    res.end(fs.readFileSync('../Mock/data/nav.json'));
});
// kind 侧栏导航
app.post('/mall/category/topCategory', function (req, res) {
    queryApi('/mall/category/topCategory', req.body, 'POST').then((data) => {
        res.end(data);
    });
});
// kind侧栏对应的数据
app.post('/mobile/Category/categorySon', function (req, res) {
    // queryApi('mobile/Category/categorySon?sonid=2', req.body, 'GET').then((data) => {
    //     res.end(data);
    // });
    let list = JSON.parse(fs.readFileSync('../Mock/data/classChild.json'));
    res.end(JSON.stringify(list[req.body.id]));
});
// 地址列表的获取
app.get('/getAdsList', function (req, res) {
    let obj = JSON.parse(fs.readFileSync('../Mock/data/user.json'));
    let user = req.headers.user;
    res.end(JSON.stringify(obj[user].address));
}) 
// 地址列表的添加
app.post('/addAds', function(req, res) {
    let userList = JSON.parse(fs.readFileSync('../Mock/data/user.json'));
    let len = userList[req.headers.user].address.length;
    if (len === 0) {
        req.body.id = 0;
    } else {
        req.body['id'] = userList[req.headers.user].address[len-1]['id'] + 1;
    }
    userList[req.headers.user].address.push(req.body);

    fs.writeFile('../Mock/data/user.json', JSON.stringify(userList));
    res.end('success');
})
// 地址列表的删除
app.post('/delAds', function(req, res) {
    jwt.verify(req.headers.authorization, 'soda', (errs, decoded) => {
        if (errs) {
            res.end(JSON.stringify({'msg': 'error'}));
        } else {
            // console.log(req.body);
            let user = req.headers.user;
            let list = JSON.parse(fs.readFileSync('../Mock/data/user.json'));
            list[user].address.forEach((item, i) => {
                if(item.id === req.body.id) {
                    list[user].address.splice(i,1);
                }
            })
            fs.writeFile('../Mock/data/user.json', JSON.stringify(list));
            res.end(JSON.stringify({
                msg: 'success',
                data: list[user].address
            }));
        }
    })
})
// 地址列表的编辑
app.post('/setAds', function(req, res) {
    let user = req.headers.user;
    let list = JSON.parse(fs.readFileSync('../Mock/data/user.json'));
    list[user].address.forEach((item, i) => {
        if(item.id === req.body.id) {
            list[user].address[i] = req.body;
        }
    })
    fs.writeFile('../Mock/data/user.json', JSON.stringify(list));
    res.end(JSON.stringify({
        msg: 'success',
        data: list[user].address
    }));
})
// 城市列表的获取
app.get('/getProvince', function (req, res) {
    res.end(fs.readFileSync('../Mock/data/province.json'));
})
app.listen(3000, (data) => {
    console.log('server is listen 3000');
});

