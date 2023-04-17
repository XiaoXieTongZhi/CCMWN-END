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
  app.use(express.static(__dirname+'/views'));



  //设置接受所有请求
  app.use(cors());

  //只接受我网站的请求
//   const corsOptions = {
//     origin: 'http://ccmwn.cn'
//   };
//   app.use(cors(corsOptions))

//修改模板文件后缀名为html
app.engine('html',ejs.__express);
app.set('view engine','html');

//自动解析前端数据
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 
//引入路由

//require('./routes/index')(app);
// require('./routes/files')(app);

//监听启动服务器
app.listen(config.port,()=>{
  console.log(`${config.port}端口被启动了,http://127.0.0.1:3000`);
});

