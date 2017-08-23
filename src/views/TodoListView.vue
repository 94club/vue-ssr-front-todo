<template>
    <!-- <div class="app-container">
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
    </div> -->
    <div>
        <div class="ui container">
            <div class="ui items">
                <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加事项</el-button>

                <div class="item" v-for="todo in todoPage" :key="todo.id">
                  <div class="ui small image">
                    <img src="/public/image.png">
                    </div>
                    <div class="content">
                    <div class="header">{{todo.title}}</div>
                    <div class="meta">
                        <div class="ui feed">
                            <div class="event">
                                <div class="label">
                                    <img src="/public/jenny.jpg">
                                </div>
                                    <div class="content">
                                        <div class="summary">{{todo.user.username}} <div class="date">{{todo.created_at | newTimeAgo}} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="description">
                        <p>{{todo.content}}</p>
                    </div>
                    <div class="extra">
                        <div class="ui right floated primary button">Buy tickets <i class="right chevron icon"></i> </div>
                        <div class="ui label">Limited</div>
                    </div>
                  </div>
                </div>
                <!-- <div class="item">
                    <div class="ui small image">
                    <img src="/public/image.png">
                    </div>
                    <div class="content">
                    <div class="header">箭头谷露营</div>
                    <div class="meta">
                        <span class="price">1200 美元</span>
                        <span class="stay">1 个月</span>
                    </div>
                    <div class="description">
                        <p>它接受一个DOM节点对象作为参数，返回一个包含该节点最终样式信息的对象。所谓“最终样式信息”，指的是各种CSS规则叠加后的结果。</p>
                    </div>
                    </div>
                </div> -->
            </div>
        </div>

        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
            <el-form class="small-space" :model="todo" label-position="left" label-width="70px" style='width: 500px; margin-left:50px;'>

                <el-form-item label="事项标题">
                <el-input v-model="todo.title"></el-input>
                </el-form-item>

                <el-form-item label="重要性">
                <el-rate style="margin-top:8px;" v-model="todo.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
                </el-form-item>

                <el-form-item label="事项内容">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" placeholder="请输入内容" v-model="todo.content">
                </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button v-if="dialogStatus=='create'" type="primary" @click="create">确 定</el-button>
                <el-button v-else type="primary" @click="update">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
// import { watchList } from '../api'
import { apiFetch } from '../api'
import { newTimeAgo } from '../util/filters'

export default {
  name: 'todolist-view',
  data () {
    return {
      page: 1, // 默认第一页
      todo: {
        title: '', // 标题
        content: '', // 内容
        importance: 0, // 重要性
      },
      textMap: {
        update: '编辑',
        create: '创建'
       },
      dialogStatus: '', // 对话框的状态 创建或更新
      dialogFormVisible: false // 显示对话框
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

  methods: {
    // loadItems () {
    //   this.$bar.start()
    //   this.$store.dispatch('TodoPages', {
    //     page: this.page
    //   }).then(() => {
    //     this.$bar.finish()
    //   })
    // }
    handleCreate () {
        this.resetTodo()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
    },
    // 新增事项
    create () {
      apiFetch({
        url: '/api/v1/todolist/',
        method: 'post',
        data: this.todo
      }).then(response => {
          // 更新todo列表
        this.$store.dispatch('TodoPages')
        this.dialogFormVisible = false
        this.$message({
          message: '成功新增一条事项',
          type: 'success'
        })
      })
        // this.$notify({
        //     title: '成功',
        //     message: '创建成功',
        //     type: 'success',
        //     duration: 2000
        // });
    },
    // 更新事项
    update () {

    },
    resetTodo () {
      this.todo = {
        title: '', // 标题
        content: '', // 内容
        importance: 0, // 重要性
      }
    }
  },
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
.container
    margin-top 20px
.ui.items > .item > .content > .header
    margin 2px 0px 0px
</style>
