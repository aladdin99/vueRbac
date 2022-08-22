var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  const result = {
    data:{
      userInfo: {
        id: 1,
        userName: "kamiro",
        token: "xsijowee"
      },
      menuList: [
        {
            id: 1,
            authName: "用户管理",
            icon: "icon-user",
            children: [
                {id: 1, authName: "小陈", path: "users"}
            ],
            persisson: ['add','edit'],
        },
        {
            id: 3,
            authName: "商品管理",
            icon: "icon-user",
            children: [
                {id: 1, authName: "小面包", path: "goods"}
            ],
            persisson: ['add','view'],
        }
      ],
    },
    message: "登陆成功",
    status: 200
  }
  res.send(JSON.stringify(result));
});

router.get('/getViewData', function(req, res, next) {
  res.send("get view data success!");
});

router.put('/deleteData', function(req, res, next) {
  res.send("delete data success!");
});
module.exports = router;
