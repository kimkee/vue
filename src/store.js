
import { createStore } from 'vuex'
import {db} from '@/firebaseConfig.js';
import { getDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const store = createStore({
  state: {
    userInfo:{
      stat: false,
      uid: false,
      email: null,
      nick: null,
      avatar: null,
      liked: [],
    },
    avatar:[
      "https://cdn-icons-png.flaticon.com/128/3899/3899618.png",
      "https://cdn-icons-png.flaticon.com/128/805/805370.png ",
      "https://cdn-icons-png.flaticon.com/128/1154/1154448.png",
      "https://cdn-icons-png.flaticon.com/128/1211/1211015.png",
      "https://cdn-icons-png.flaticon.com/128/949/949635.png",
      "https://cdn-icons-png.flaticon.com/128/4322/4322992.png",
      "https://cdn-icons-png.flaticon.com/128/547/547413.png",
      "https://cdn-icons-png.flaticon.com/128/4322/4322991.png",
      "https://cdn-icons-png.flaticon.com/128/4202/4202843.png",
      "https://cdn-icons-png.flaticon.com/128/2589/2589136.png",
      "https://cdn-icons-png.flaticon.com/128/1785/1785918.png",
      "https://cdn-icons-png.flaticon.com/128/4139/4139993.png",
      "https://cdn-icons-png.flaticon.com/128/1154/1154473.png",
      "https://cdn-icons-png.flaticon.com/128/4532/4532510.png",
    ],
    todos : "fdsssssss", 
    saying : "sssssssss",
    count: 0,
  },
  mutations: {
    authState(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getUser(user);
          sessionStorage.setItem("user",JSON.stringify(user));
          return;
        }
        sessionStorage.removeItem("user");
        store.state.userInfo = {};
        store.state.userInfo.stat = false;
        console.log('logout 된 상태' , store.state.userInfo);
        console.table(store.state.userInfo);

      });
      const getUser = async (user)=>{
        const docRef =  doc(db, "member" , user.uid);
        try {
          const docSnap = await getDoc(docRef);
          store.state.userInfo.stat = true;
          store.state.userInfo.email = docSnap.data().email;
          store.state.userInfo.avatar = docSnap.data().avatar;
          store.state.userInfo.nick = docSnap.data().nick;
          store.state.userInfo.uid = user.uid;
          store.state.userInfo.liked = docSnap.data().liked || [];
          console.table(store.state.userInfo);
        } catch(error) {
          console.log(error)
        }
      }
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment');
    },
    authState (context) {
      context.commit('authState');
    }
  }
});
store.dispatch('authState');
export default store;