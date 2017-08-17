# Vue 2.0 + ssr 前端常见技术示例
客户端用 Vue 2.0 + vue-router + vuex，服务端用[koa2-API-template](https://github.com/yzijun/koa2-API-template)为客户端提供api数据。  
前后端分离的方式演示网站开发中的常见技术示例  
基于[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)项目,并且在此基础上做了修改能很好的和服务端结合。

## Koa2 RESTful API 服务器模板
服务端 [koa2-API-template](https://github.com/yzijun/koa2-API-template)  

## 技术示例
- 用户注册、登录
- 访问api授权
- 上传和下载文件
- TodoMVC
- hackernews

## 开发说明

``` bash
# install dependencies
npm install # or yarn

# or 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

**Node.js版本**

node >= 8.0.0  
npm >= 5.0.0

## License

MIT