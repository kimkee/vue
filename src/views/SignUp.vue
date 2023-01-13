<template>
  <div class="container sign up">
    <main class="contents">
      <div class="sign-form">
        <!-- <h1 class="hdt">회원가입</h1>  -->
        <ul class="list">
          <li>
            <label class="dt">이메일</label>
            <div class="dd">
              <span class="input"><input v-model="userEmail" type="email" placeholder="예) test@naver.com"></span>
            </div>
          </li>
          <li>
            <label class="dt">비밀번호</label>
            <div class="dd">
              <span class="input"><input v-model="userPwd" type="password" placeholder="6자리 이상 예) 111111 "></span>
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
          <button type="button" class="btn" :disabled="isBtnJoin ? false : true" @click="join"><i class="fa-solid fa-right-to-bracket"></i><em>회원가입</em></button>
        </div>
        <div class="link">
          이미 회원이신가요? <router-link class="bt" to="/signin">로그인 하러가기 <i class="fa-solid fa-chevron-right"></i></router-link>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import ui from '@/ui.js';

export default {
  name: 'JoinItem',
  props: {
    msg: String
  },
  data() {
    return {
      avatarVal: 0,
      userEmail: "",
      userPwd: "",
      userNick: "",
      isBtnJoin: false,
      erMsg: {
        "auth/user-not-found": "존재하지 않는 사용자 정보로 로그인을 시도한 경우 발생",
        "auth/wrong-password": "비밀번호가 잘못된 경우 발생",
        "auth/too-many-requests": "연속된 로그인 요청이 여러 번 감지되어 로그인 요청이 금지됨",
        "auth/weak-password": "비밀번호가 6자리 미만인 경우 발생",
        "auth/invalid-email": "잘못된 포맷의 이메일을 입력한 경우 발생",
        "auth/email-already-in-use": "이미 사용 중인 이메일 계정 ID로 회원 가입을 시도하는 경우 발생",
        "auth/invalid-phone-number": "잘못된 포맷의 핸드폰 번호를 입력한 경우 발생",
        "auth/internal-error": "비밀번호를 입력하세요.",
      }
    }
  },
  created() {
    ui.init();

  },
  mounted() {
    console.log(this.avatarVal);
    document.querySelector(".header .htit").textContent = '회원가입';
    // document.querySelectorAll('input[name="avatar"]')[0].checked = true;
  },
  watch: {
    userEmail() {
      this.valCheck();
    },
    userPwd() {
      this.valCheck();
    },
    userNick() {
      this.valCheck();
    }
  },
  methods: {
    valCheck() {
      if (this.userNick.length > 0 && this.userPwd.length >= 6) {
        this.isBtnJoin = true;
      } else {
        this.isBtnJoin = false;
      }
    },
    async join() {
      ui.loading.show();
      const email = this.userEmail;
      const password = this.userPwd;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          console.log("uid : " + user.uid);
          console.log("액세스토큰: " + user.accessToken);
          const gourl = localStorage.getItem("preurl").replace("#", "");
          this.addMember(user, gourl)

        })
        .catch((error) => {
          console.log(error.code);
          const emsg = this.erMsg[error.code]
          ui.alert(emsg);
        });

    },
    async addMember(user, gourl) {
      await setDoc(doc(db, "member", user.uid), {
        id: user.uid,
        email: user.email,
        nick: this.userNick,
        avatar: this.avatarVal,
        liked: [],
        date: new Date(),
      }).then(() => {
        console.log("멤버 생성: ");
        ui.alert("가입되었습니다.", {
          ycb: () => { this.$router.push(gourl); }
        });
      }).catch(e => {
        console.error("멤버 생성 Error : ", e);
      });
    }

  }
}
</script>
