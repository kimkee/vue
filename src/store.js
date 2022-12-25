
import { createStore } from 'vuex'


export default createStore({
  state: {
    userInfo:{
      stat: null,
      uid: null,
      email: null,
      nick: null,
      avatar: null,
      liked: [],
    },
    avatar:[
      "https://cdn-icons-png.flaticon.com/512/3899/3899618.png",
      "https://cdn-icons-png.flaticon.com/512/805/805370.png ",
      "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
      "https://cdn-icons-png.flaticon.com/512/1211/1211015.png",
      "https://cdn-icons-png.flaticon.com/512/949/949635.png",
      "https://cdn-icons-png.flaticon.com/512/4322/4322992.png",
      "https://cdn-icons-png.flaticon.com/512/547/547413.png",
      "https://cdn-icons-png.flaticon.com/512/4322/4322991.png",
      "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
      "https://cdn-icons-png.flaticon.com/512/2589/2589136.png",
      "https://cdn-icons-png.flaticon.com/512/1785/1785918.png",
      "https://cdn-icons-png.flaticon.com/512/4139/4139993.png",
      "https://cdn-icons-png.flaticon.com/512/1154/1154473.png",
      "https://cdn-icons-png.flaticon.com/512/4532/4532510.png",
    ],
    todos : "fdsssssss", 
    saying : "sssssssss",
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
});