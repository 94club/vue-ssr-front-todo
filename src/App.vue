<template>
  <div id="app">
    <!-- <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/todolist">事项列表</router-link>
        <router-link to="/new">骇客新闻</router-link>
        <a class="regist" href="#">注册</a>
        <a class="login" href="#">登录</a>
      </nav>
    </header> -->


    <!-- Page Contents -->
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">

        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <router-link to="/" exact>
              <img class="logo" src="~public/logo-48.png" alt="logo">
            </router-link>
            <router-link class="item active" to="/todolist">事项列表</router-link>
            <router-link class="item" to="/new">骇客新闻</router-link>
            <!-- <a class="active item">Work</a>
            <a class="item">Company</a>
            <a class="item">Careers</a> -->
            <div class="right item">
              <a class="ui inverted button">登录</a>
              <a class="ui inverted button">注册</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
  .logo {
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: bottom;
  }
  .ui.inverted.segment, .ui.primary.inverted.segment {
      background: #10A3A3;
      color: rgba(255, 255, 255, 0.9);
  }
  .ui.segment {
    padding: 0.3em 1em;
  }
  .ui.inverted.menu, .ui.secondary.inverted.pointing.menu {
    border: none;
    line-height: 37px;
  }
  .ui.secondary.inverted.menu a.item {
    color: none;
  }
  /* .menu a.router-link-active {
      color: #fff !important;
   } */
   .ui.secondary.pointing.menu .item {
     border-bottom: none;
     line-height: 25px;
   }
  .masthead .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .secondary.pointing.menu .toc.item {
      display: none;
  }

  @media only screen and (max-width: 700px) {
    .ui.fixed.menu {
      display: none !important;
    }
    .secondary.pointing.menu .item,
    .secondary.pointing.menu .menu {
      display: none;
    }
    .secondary.pointing.menu .toc.item {
      display: block;
    }
    .masthead h1.ui.header {
      font-size: 2em;
      margin-top: 1.5em;
    }
    .masthead h2 {
      margin-top: 0.5em;
      font-size: 1.5em;
    }
  }
   
</style>
