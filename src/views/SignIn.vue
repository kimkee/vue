<template>
  <div class="container sign in">
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
            <button type="button" class="btn" @click="login">로그인</button>
        </div>
        <div class="btsbox btn-set">
            <router-link class="bt" to="/signup">회원가입 >></router-link>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default {
  name: 'LoginItem',
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
    document.querySelector(".header .cdt .htit").textContent = '로그인';
  },
  methods: {
    
    async login () {
        const email = document.querySelector("input#email").value;
        const password = document.querySelector("input#password").value;  
        try {
          const auth = getAuth();
          const { user } = await signInWithEmailAndPassword(auth, email, password);
          const { stsTokenManager, uid } = user;
          console.log(user.email  );
          console.log("uid : "+uid );
          console.log("액세스토큰: "+stsTokenManager.accessToken);
          // setAuthInfo({ uid, email, authToken: stsTokenManager });
          alert(user.email + "\n 로그인 성공!");
          this.$router.push('/');
        } catch ({ code, message }) {
          alert(user.email + "\n 로그인 실패!");
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
