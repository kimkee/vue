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

export default {
  name: 'SingOut',
  props: {
    msg: String
  },
  data() {
      return {
         
      }
  },
  created(){
    
  },
  mounted(){
    ui.init();
    this.logout();
  },
  methods: {
    
    logout(){
      // console.log(isLogOut);
     // const isLogOut = window.confirm(authMessage['auth/logout-confirm']);
      //if (!isLogOut) return;

      try {
        const auth = getAuth();
        signOut(auth);
        // setAuthInfo(initialState);
        // alert("로그아웃 성공");
        this.$router.push('/');
      } catch ({ code, message }) {
        console.log({ code, message });
        // alert(errorMessage[code]);
      }
    
    }
      
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
