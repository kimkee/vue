<template>
  <div class="container sign up">
    <main class="contents">
      <div class="sign-form">
        <!-- <h1 class="hdt">회원가입</h1>  -->
        <ul class="list">
          <li>
            <label class="dt">이메일</label>
            <div class="dd">
              <span class="input"><input type="email" id="email" placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">비밀번호</label>
            <div class="dd">
              <span class="input"><input type="password" id="password" placeholder="입력하세요"></span>
            </div>
          </li>
        </ul>
        <div class="btsbox btn-set">
            <!-- <router-link class="btn" to="/signin">로그인</router-link> -->
            <button type="button" class="btn" @click="join">가입</button>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export default {
  name: 'JoinItem',
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
    document.querySelector(".header .cdt .htit").textContent = '회원가입';
  },
  methods: {
    
    async join () {
      const email = document.querySelector("input#email").value;
      const password = document.querySelector("input#password").value;
      
      console.log(email, password);
      try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const { stsTokenManager, uid  } = user;
        console.log(user.email  );
        console.log("uid : "+uid );
        console.log("액세스토큰: "+stsTokenManager.accessToken);
        
        alert("가입되었습니다.\n" + user.email +"\n "+ uid  );
        this.$router.push('/');
      } catch ({ code, message }) {
        console.log({ code, message });
        // alert(errorMessage[code]);
        if (code == 'auth/invalid-email') {
          alert("이메일 형식이 아닙니다.")
        }
        if (code == 'auth/email-already-in-use') {
          alert("이미 가입된 메일입니다.")
        }
      }
    }
      
      
      
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
