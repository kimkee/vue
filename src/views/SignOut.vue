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
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
      this.$router.push('/');
    },   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
