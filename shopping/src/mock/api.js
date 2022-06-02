import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,//(|10001-11000)可以随机生成在1001-11000的id
    "username": "@name",//@cname---随机生成中文名   @name---随机生成中文名称
    "email": "admin@51purse.com",
    "phone": null,//
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});