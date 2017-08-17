<template>
  <div class="user-view">
    <template v-if="users">
      <ul class="meta">
        <li v-for="user in users" :key="user.id">
          <span class="label">username:</span> {{ user.username }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>

export default {
  name: 'user-view',

  computed: {
    users () {
      return this.$store.state.user.users
    }
  },

  asyncData ({ store }) {
    return store.dispatch('GetUsers')
  },

  title () {
    return '用户列表'
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  margin-top 20px
  background-color #fff
  box-sizing border-box
  padding 2em 3em
  h1
    margin 0
    font-size 1.5em
  .meta
    list-style-type none
    padding 0
  .label
    display inline-block
    min-width 4em
  .about
    margin 1em 0
  .links a
    text-decoration underline
</style>
