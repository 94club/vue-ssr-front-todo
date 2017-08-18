const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  users: state => state.user.users,
  todoPage: state => state.todoList.todoPage
}
export default getters