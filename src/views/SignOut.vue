<template>
  <div class="container sign up">
    <main class="contents">
      <div class="sign-form">
        
      </div>
    </main>

  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';
import store from "../store";
import ui from '../ui.js';
export default {
  name: 'SingOut',
  props: {
    msg: String
  },
  data() {
      return {
         
      }
  },
  beforeRouteEnter: (to, from, next) => {
    if(store.state.userInfo.stat == true) {
      console.table(store.state.userInfo);
      ui.confirm("로그아웃 하시겠습니까?", {
          ycb: () => {
              localStorage.setItem("preurl", location.hash);
              return next();
          },
          ccb: () => { from(); },
          ybt: "예",
          nbt: "아니오",
      });
    }else{
      next(from.fullPath);
    }
  },
  created(){
    ui.init();
    
  },
  mounted(){
    this.logout();
  },
  methods: {
    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        // alert("로그아웃 성공!!");
        const gourl = localStorage.getItem("preurl").replace("#","");
        this.$router.push(gourl);
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
    },   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
