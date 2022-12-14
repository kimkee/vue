<template>
  <!-- {{userInfo.email}} {{userstate}} -->
  <div class="comts">
    <!-- <span v-if="userstate == 'true'" class="bt email"><i class="fa-solid fa-envelope"></i><em> {{userInfo.email}}</em></span> -->
    <div class="ut-reply">
      <div class="rplist">
        <ul class="rlist a">
          <li v-for="cmt in Coments" :key="cmt.key">
            <div class="rpset">
              <div class="user"><a href="javascript:;" class="pic"><img src="" alt="사진" onerror="this.src = './img/user.png';" class="img"></a></div>
              <div class="infs">
                <div class="name"><em class="nm">{{cmt.author}}</em></div>
                <div class="desc"><em class="time">{{cmt.date}}</em></div>
                <div class="ment" v-html="cmt.reply"></div>
                <!-- <div class="rbt"><button type="button" class="bt repy">답글달기</button></div> -->
                <!-- <div class="bts"><button type="button" class="bt accu">신고하기</button></div> -->
              </div>
            </div>
          </li>
        </ul>
        
      </div>
    </div>

    <nav class="floatbots">
      <div class="inr">
        <div class="ut-rpwrite">
          <div class="rwset">
            <div class="user"><a href="javascript:;" class="pic"><img src="" :alt="this.userId" onerror="this.src = './img/user.png';" class="img"></a></div>
            <div class="form">
              <textarea data-ui="autoheight" class="ment" id="input_reply" placeholder="댓글을 입력해주세요"  spellcheck="false"></textarea>
            </div>
            <div class="bts"><button type="button" class="btsend" @click="comtWrite"><i class="fa-solid fa-pen"></i><em>보내기</em></button></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<script>
import db  from '../firebaseConfig.js';
import { getDoc, doc , updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRoute } from 'vue-router';


export default {
  name: 'CommentsItem',
  props: {
    msg: String,

  },
  data() {
    return {
        Coments: [],
        userId:''
    }
  },
  created(){
    const route = useRoute();  
    this.userId = route.params.id
    const ids = route.params.id;
    this.comtList(ids);
  },
  mounted(){
    this.authState();
    this.autoHeight();
  },
  methods:{
    authState(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userstate = "true";
          this.userInfo = user;
          console.log(this.userInfo.email , this.userstate);
          return;
        }
        // 사용자 로그아웃 시 동작

        
      });
    },
    async comtList(ids){
      const docRef = doc(db, "bbs" , ids);
      try {
        console.log("uid === " + ids);
          const docSnap = await getDoc(docRef);
          this.Coments = docSnap.data().coments || [] ;
          this.Coments.forEach((c, i) => {         
            this.Coments[i] = ( c );
            this.Coments[i].reply = this.Coments[i].reply.replace(/\n/g,'<br>');
            this.Coments[i].date = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'short'}).format( this.Coments[i].date );
            
          });
          console.log(  `댓글 수 = ${ this.Coments.length }` );
      }catch(error) {
        console.log(error);
      }
      console.log(this.Coments);
    },
    
    comtWrite(e){
      const sendBtn = e.currentTarget;
      const inputReply =  sendBtn.closest(".ut-rpwrite").querySelector("#input_reply");
      if(inputReply.value == "") return;     
/* 
      const rHTML = `
        <li>
          <div class="rpset">
            <div class="user"><a href="javascript:;" class="pic"><img src="" alt="사진" onerror="this.src = './img/user.png';" class="img"></a></div>
            <div class="infs">
              <div class="name"><em class="nm">${this.userInfo.email}</em></div>
              <div class="desc"><em class="time">4일전</em></div>
              <div class="ment">${inputReply.value.replace(/\n/g,'<br>')}</div>
              <!-- <div class="rbt"><button type="button" class="bt repy">답글달기</button></div> -->
              <!-- <div class="bts"><button type="button" class="bt accu">신고하기</button></div> -->
            </div>
          </div>
        </li>`;

      document.querySelector(".ut-reply ul.rlist.a").insertAdjacentHTML("beforeend",rHTML);
 */
      const today = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'short'}).format( new Date() ) ;
      // const today = new Date();
      this.comtSed({
        author : "홍길동",
        uid : this.userInfo.uid,
        email : this.userInfo.email,
        reply: inputReply.value.replace(/\n/g,'<br>'),
        date: today
      });

      // inputReply.style = ""
      inputReply.value = "";
      inputReply.focus();
      inputReply.dispatchEvent(new Event('input'));
    },
    async comtSed(opt){

      console.log("댓글 전송 =======");
      console.table(JSON.stringify(opt));

      this.Coments.push(opt)
      const thisDoc = doc(db, "bbs", this.userId);
      await updateDoc ( thisDoc, {
        coments : this.Coments
      });




    },
    autoHeight(){ // 댓글에 자동높이 기능
      document.querySelector('[data-ui="autoheight"]').addEventListener("input",e =>{
        // console.log(e.currentTarget.value);
        const $els = e.currentTarget;
        let tboxS;
        $els.style.height = "1px";
        tboxS = $els.scrollHeight ;
        // console.log(  tboxS);
        $els.style.height = tboxS+"px";
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
