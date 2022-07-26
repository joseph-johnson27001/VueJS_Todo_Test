import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        title: 'Todo A',
        project: 'Project A',
        done: false
      },
      {
        title: 'Todo B',
        project: 'Project B',
        done: true
      },
      {
        title: 'Todo C',
        project: 'Project C',
        done: false
      },
      {
        title: 'Todo D',
        project: 'Project D',
        done: false
      }
    ]
  },
  mutations: {
    REMOVE_TODO(state, data) {
      state.todoList.splice(data, 1);
    },
    CHANGE_TODO_TITLE(state, data) {
      const todoIndex = data.index;
      const todoTitle = data.title;

      state.todoList[todoIndex].title = todoTitle;
    },
    CHANGE_TODO_PROJECT(state, data) {
      const todoIndex = data.index;
      const todoProject = data.project;

      state.todoList[todoIndex].project = todoProject;
    }
  },
  actions: {
    deleteTodo({ commit }, data) {
      commit('REMOVE_TODO', data);
    },
    changeTodoTitle({ commit }, data) {
      commit('CHANGE_TODO_TITLE', data);
    },
    changeTodoProject({ commit }, data) {
      commit('CHANGE_TODO_PROJECT', data);
    }
  }
});
