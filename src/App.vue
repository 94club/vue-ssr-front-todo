<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/todolist">事项列表</router-link>
        <router-link to="/new">骇客新闻</router-link>
        <a class="regist" href="#">注册</a>
        <a class="login" href="#">登录</a>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="stylus">

</style>
