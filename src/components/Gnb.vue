<template>
  
  <nav class="gnb" id="gnb">
    <div class="bts"><button class="bt close" tabindex="-1">메뉴닫기</button></div>
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/">Home</router-link></li>
        <li><router-link class="bt" to="/list">Board</router-link></li>
        <!-- <li><a href="javascript:;" class="bt">Contact</a></li>
        <li><a href="javascript:;" class="bt">Sign in</a></li> -->
      </ul>
      
      <div class="sign">
        
        <!-- <div v-if="userstate == true">로긴됨</div>
        <div v-if="userstate == false">로긴아웃</div> -->
        <router-link v-if="userstate == 'false'" class="bt" to="/signin">Login</router-link>
        <router-link v-if="userstate == 'false'" class="bt" to="/signup">Join</router-link>
        
        <span v-if="userstate == 'true'">{{userInfo.email}}</span>
        <button v-if="userstate == 'true'" class="bt" @click="logout">Logout</button>

      </div>
    </div>
  </nav>
  <div class="gnb-screen" tabindex="-1"></div>

</template>

<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: 'GnbItem',
  props: {
    userstate: String,
    userInfo: Object
  },
  data() {
      return {
          
      }
  },
  created(){
    
  },
  methods:{
    logout(){
      // console.log(isLogOut);
     // const isLogOut = window.confirm(authMessage['auth/logout-confirm']);
      //if (!isLogOut) return;

      try {
        const auth = getAuth();
        signOut(auth);
        // setAuthInfo(initialState);
        alert("로그아웃 성공");
        this.$router.push('/');
      } catch ({ code, message }) {
        console.log({ code, message });
        // alert(errorMessage[code]);
      }
    
    }
  }
}
</script>

<style scoped>
</style>
