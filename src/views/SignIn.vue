<template>
  <div class="container sign in">
    <main class="contents">
      <div class="sign-form">
        <ul class="list">
          <li>
            <label class="dt">이메일 (user@test.com) </label>
            <div class="dd">
              <span class="input"><input type="email" id="email" placeholder="입력하세요" v-model="userEmail"></span>
            </div>
          </li>
          <li>
            <label class="dt">비밀번호 (123456) </label>
            <div class="dd">
              <span class="input"><input type="password" id="password" v-model="userPassword" placeholder="입력하세요"></span>
            </div>
          </li>
        </ul>
        <div class="savelogin">
          <label class="checkbox">
            <input type="checkbox" ref="autoLogin" @click="saveSheck">
            <span class="txt">자동 로그인</span>
          </label>
        </div>
        <div class="btsbox btn-set">
          <button type="button" class="btn" @click="login"><i class="fa-solid fa-right-to-bracket"></i><em>로그인</em></button>
        </div>
        <div class="link">
          <router-link class="bt" to="/signup">회원가입하러 가기 <i class="fa-solid fa-chevron-right"></i></router-link>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth'; //inMemoryPersistence
import store from '@/store';
import ui from '@/ui.js';
export default {
  name: 'LoginItem',
  props: {
    msg: String
  },
  data() {
    return {
      userEmail: null,
      userPassword: null,
      saveLogin: false,
      erMsg: { //https://firebase.google.com/docs/auth/admin/errors?hl=ko&authuser=0
        "auth/user-not-found": "존재하지 않는 사용자 정보로 로그인을 시도한 경우 발생",
        "auth/wrong-password": "비밀번호가 잘못된 경우 발생",
        "auth/too-many-requests": "연속된 로그인 요청이 여러 번 감지되어 로그인 요청이 금지됨",
        "auth/weak-password": "비밀번호가 6자리 미만인 경우 발생",
        "auth/missing-email": "정확한 이메일을 입력하세요",
        "auth/invalid-email": "잘못된 포맷의 이메일을 입력한 경우 발생",
        "auth/email-already-in-use": "이미 사용 중인 이메일 계정 ID로 회원 가입을 시도하는 경우 발생",
        "auth/invalid-phone-number": "잘못된 포맷의 핸드폰 번호를 입력한 경우 발생",
        "auth/internal-error": "비밀번호를 입력하세요.",
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(store.state.userInfo.stat);
    console.log(to, from.fullPath);
    if (store.state.userInfo.stat == true) {
      next(from.fullPath)
    } else {
      if (location.hash != "#/signin") {
        localStorage.setItem("preurl", location.hash);
      }
      return next();
    }
  },
  created() {
    ui.init();

  },
  mounted() {
    document.querySelector(".header .htit").textContent = '로그인';
    console.log(this.$refs.autoLogin.checked);
  },
  methods: {
    async login() {
      const email = this.userEmail;
      const password = this.userPassword;
      const auth = getAuth();
      ui.loading.show();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email);
          const gourl = localStorage.getItem("preurl").replace("#", "");
          ui.loading.hide();
          ui.alert("" + user.email + "<br> 로그인 성공!", {
            ycb: () => {
              this.$router.push(gourl);
            }
          });
        })
        .catch((error) => {
          console.log(error.code);
          const emsg = this.erMsg[error.code]
          ui.loading.hide();
          ui.alert(emsg, { tit: "로그인 실패" });
          // alert( error.code , error.message);
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });

      if (this.saveLogin == false) {
        // 로그인 세션 저장 https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=ko&authuser=0
        setPersistence(auth, browserSessionPersistence) // browserSessionPersistence , inMemoryPersistence
          .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, "====", errorMessage);
          });
      }
    },
    saveSheck() {
      this.saveLogin = this.$refs.autoLogin.checked;
      if (this.saveLogin) {
        const msg = `
          자동로그인을 사용하시면<br> 
          다음부터 회원아이디와 비밀번호를<br>
          입력하실 필요가 없습니다.<br><br>
          공공장소에서는 개인정보가 유출될 수 있으니 사용을 자제하여 주십시오.<br><br>
          자동로그인을 사용하시겠습니까?
        `;
        ui.confirm(msg, {
          tit: "로그인 설정",
          ycb: () => {
            this.$refs.autoLogin.checked = true;
          },
          ncb: () => {
            this.$refs.autoLogin.checked = false;
          },
          ybt: "예",
          nbt: "아니오",
        });
      }
    }
  }
}
</script>