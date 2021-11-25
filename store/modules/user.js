import request from "@/request/index.js"
const axios = new request()
// 用户数据模块
export default {
  namespaced: true,
  state: {
    dotData: "什么",
  },
  mutations: {
    // 示例
    SET_DOT_DATA: (state, data) => {
      state.dotData = data
    }
  },
  actions: {
    async getShopList({ commit, state }) {
      // console.log(await axios.ajax()) 
    },
  }
}
