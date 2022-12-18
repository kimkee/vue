<template>
  <div class="container sign up">
    <main class="contents">
      <div class="sign-form">
        <!-- <h1 class="hdt">회원가입</h1>  -->
        <ul class="list">
          <li>
            <label class="dt">이메일</label>
            <div class="dd">
              <span class="input"><input v-model="userEmail" type="email" placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">비밀번호</label>
            <div class="dd">
              <span class="input"><input v-model="userPwd" type="password" placeholder="6자리 이상 "></span>
            </div>
          </li>
          <li>
            <label class="dt">닉네임</label>
            <div class="dd">
              <span class="input"><input v-model="userNick" type="text" placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">아바타</label>
            <div class="dd">
              <!-- {{this.avatarVal}} -->
              <div class="ut-avata">
                <label  v-for="(icon,index) in $store.state.avatar" :key="index">
                  <input type="radio" name="avatar" :value="index" v-model="avatarVal" :checked=" index == 0 ? true : false"> <span class="txt"><img class="img" :src="icon" alt=""></span>
                </label>
              </div>
            </div>
          </li>
        </ul>
        <div class="btsbox btn-set">
            <!-- <router-link class="btn" to="/signin">로그인</router-link> -->
          <button type="button" class="btn" @click="join"><i class="fa-solid fa-right-to-bracket"></i><em>회원가입</em></button>
        </div>
        <div class="link">
          이미 회원이신가요? <router-link class="bt" to="/signin">로그인 하러가기 <i class="fa-solid fa-chevron-right"></i></router-link>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  name: 'JoinItem',
  props: {
    msg: String
  },
  data() {
    return {
      avatarVal:0,
      userEmail:null,
      userPwd:null,
      userNick:null,
      erMsg : {
        "auth/user-not-found" :	"존재하지 않는 사용자 정보로 로그인을 시도한 경우 발생",
        "auth/wrong-password" :	"비밀번호가 잘못된 경우 발생",
        "auth/too-many-requests" : "연속된 로그인 요청이 여러 번 감지되어 로그인 요청이 금지됨",
        "auth/weak-password" : "비밀번호가 6자리 미만인 경우 발생",
        "auth/invalid-email" : "잘못된 포맷의 이메일을 입력한 경우 발생",
        "auth/email-already-in-use" :	"이미 사용 중인 이메일 계정 ID로 회원 가입을 시도하는 경우 발생",
        "auth/invalid-phone-number" : "잘못된 포맷의 핸드폰 번호를 입력한 경우 발생",
        "auth/internal-error" : "비밀번호를 입력하세요.",
      }
    }
  },
  created(){
    
  },
  mounted(){
    ui.init();
    console.log(this.avatarVal);
    document.querySelector(".header .cdt .htit").textContent = '회원가입';
    // document.querySelectorAll('input[name="avatar"]')[0].checked = true;
  },
  methods: {
    async join () {
      const email = this.userEmail;
      const password = this.userPwd;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user  );
        console.log("uid : "+user.uid );
        console.log("액세스토큰: "+ user.accessToken);
        alert("가입되었습니다.\n" + user.email +"\n "+ user.uid  );
        this.$router.push('/');
      })
      .catch((error) => {
        console.log( error.code);
        const emsg = this.erMsg[error.code] 
        alert(  emsg );
        // ..
      });
    }
    
    // async join () {
    //   const email = document.querySelector("input#email").value;
    //   const password = document.querySelector("input#password").value;
      
    //   console.log(email, password);
    //   try {
    //     const auth = getAuth();
    //     const { user } = await createUserWithEmailAndPassword(auth, email, password);
    //     const { stsTokenManager, uid  } = user;
    //     console.log(user.email  );
    //     console.log("uid : "+uid );
    //     console.log("액세스토큰: "+stsTokenManager.accessToken);
        
    //     alert("가입되었습니다.\n" + user.email +"\n "+ uid  );
    //     this.$router.push('/');
    //   } catch ({ code, message }) {
    //     console.log({ code, message });
    //     // alert(errorMessage[code]);
    //     if (code == 'auth/invalid-email') {
    //       alert("이메일 형식이 아닙니다.")
    //     }
    //     if (code == 'auth/email-already-in-use') {
    //       alert("이미 가입된 메일입니다.")
    //     }
    //   }
    // }
      

      
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
