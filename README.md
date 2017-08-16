# vue + ssr 前端常见技术示例
客户端用vue+ssr，服务端用koa2-API-template为客户端提供api数据。  
前后端分离的方式演示网站开发中的常见技术示例

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