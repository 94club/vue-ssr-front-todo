<template>
    <div class="app-container">
        <el-table :data="todoPage" border fit highlight-current-row style="width: 100%">
    
            <el-table-column align="center" label="序号" width="65">
                <template scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
    
            <el-table-column width="160" align="center" label="时间">
                <template scope="scope">
                    <span>{{scope.row.created_at}}</span>
                </template>
            </el-table-column>
    
            <el-table-column min-width="300" label="内容">
                <template scope="scope">
                    <span class="link-type">{{scope.row.content}}</span>
                </template>
            </el-table-column>
    
            <el-table-column width="90" align="center" label="作者">
                <template scope="scope">
                    <span>{{scope.row.user.username}}</span>
                </template>
            </el-table-column>
    
            <el-table-column align="center" label="操作" width="150">
                <template scope="scope">
                    <el-button size="small" type="success">增加</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
    
        </el-table>
    </div>
</template>

<script>
// import { watchList } from '../api'

export default {
  name: 'todolist-view',
  data () {
    return {
      page: 1
    }
  },

  computed: {
    todoPage () {
      return this.$store.state.todoList.todoPage
    }
  },

  asyncData ({ store }) {
    return store.dispatch('TodoPages')
  },

//   methods: {
//     loadItems () {
//       this.$bar.start()
//       this.$store.dispatch('TodoPages', {
//         page: this.page
//       }).then(() => {
//         this.$bar.finish()
//       })
//     }
//   },
//   首页数据用watchList不好用
//   beforeMount () {
//     if (this.$root._isMounted) {
//       this.loadItems()
//     }
//     // watch the current list for realtime updates
//     this.unwatchList = watchList(ids => {
//       this.$store.dispatch('TodoPages', {
//         page: this.page
//       })
//     })
//   },

//   beforeDestroy () {
//     this.unwatchList()
//   },

  title () {
    return '待完成的事项列表'
  }
}
</script>

<style lang="stylus" scoped>

</style>
