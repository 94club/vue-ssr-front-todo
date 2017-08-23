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

## 技术栈
- [vue2](https://github.com/vuejs/vue) - A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
- [vue-router](https://github.com/vuejs/vue-router) - The official router for Vue.js. 
- [vuex](https://github.com/vuejs/vuex) - Centralized State Management for Vue.js.
- [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) - Effortlessly keep vue-router and vuex store in sync. 
- [element-ui](https://github.com/ElemeFE/element) - A Vue.js 2.0 UI Toolkit for Web
- [semantic-ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS) - CSS Only distribution http://www.semantic-ui.com
- [axios](https://github.com/mzabriskie/axios) - Promise based HTTP client for the browser and node.js.
- [js-cookie](https://github.com/js-cookie/js-cookie) - A simple, lightweight JavaScript API for handling browser cookies.
- [timeago.js](https://github.com/hustcc/timeago.js) - timeago.js is a tiny(~2.0kb) library used to format date with `*** time ago` statement. eg: '3 hours ago'. No dependency & localization & tiny. 
- [downloadjs](https://github.com/rndme/download) - file downloading using client-side javascript

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