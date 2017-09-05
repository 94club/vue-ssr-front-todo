import { apiFetch } from '../../api'

import Cookies from 'js-cookie'

const userToken = 'User-Token'

const user = {
  state: {
    userInfo: {},
    users: [],
    token: Cookies.get(userToken)
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_USERS: (state, users) => {
      state.users = users
    }
  },

  actions: {
    // 登录
    Login ({ commit }, user) {
      // const username = user.username.trim()
      const data = {
        username: user.username,
        password: user.password
      }
      apiFetch({
        url: '/public/users/login',
        method: 'post',
        data
      }).then(response => {
        // 验证失败时也执行判断是否有response
        if (response) {
          const token = response.data.result.token
          Cookies.set(userToken, token)
          commit('SET_TOKEN', token)
        }
      })
    },

    GetUsers({ commit }) {
      apiFetch({
        url: '/public/users',
        method: 'get'
      }).then(response => {
        commit('SET_USERS', response.data.result)
      })
    }
    /*
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data;
          commit('SET_USERINFO', data.role);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          Cookies.remove('Admin-Token');
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    }
    */
  }
};

export default user;
