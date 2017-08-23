import { apiFetch } from '../../api'

const todoList = {
  state: {
    todoPage: []
  },

  mutations: {
    SET_TODOLIST: (state, todoPage) => {
      state.todoPage = todoPage
    }
  },

  actions: {
    // 事项列表分页数据
    TodoPages({ commit }, page = 1) {
      apiFetch({
        url: `/public/v1/todolist/?page=${page}`,
        method: 'get'
      }).then(response => {
        commit('SET_TODOLIST', response.data.result)
      })
    },

    GetTodo({ commit }, id) {
      apiFetch({
        url: '/public/users',
        method: 'get'
      }).then(response => {
        commit('SET_USERS', response.data.result)
      })
    }
  }
}

export default todoList
