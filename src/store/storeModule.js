import Vue from "vue";
export default {
  namespaced: true,
  state: {
    myData: [],
    error: null
  },
  mutations: {
    SET_MY_DATA(state, { data, index }) {
      Vue.set(state.myData[index], "foo", data);
    },
  },
  actions: {
    setMyData({ commit }, { data, index }) {
      commit("SET_MY_DATA", { data, index });
    },
  },
  getters: {}
};
