const express = require('express');
const path = require('path');
const cors = require('cors');
//模板
 let ejs = require('ejs');
 let config = require('./config/default');

 //服务器创建
  let app = express();

  //静态路径
  //访问前端打包的文件
  app.use(express.static(__dirname+'/dist'));
  //访问存储图片的文件夹
  app.use(express.static(__dirname+'/data'));



  //设置接受所有请求
  app.use(cors());

  //只接受我的请求
//   const corsOptions = {
//     origin: 'http://ccmwn.cn'
//   };

//   app.use(cors(corsOptions))