<template>
  <!-- {{userInfo.email}} {{userstate}} -->
  <div class="comts">
    <!-- <span v-if="userstate == 'true'" class="bt email"><i class="fa-solid fa-envelope"></i><em> {{userInfo.email}}</em></span> -->
    <div class="ut-reply">
      <div class="rplist">
        
        <ul class="rlist a">
          <li v-for="cmt in Coments" :key="cmt.key" :data-coment-idx="cmt.idx">
            <div class="rpset">
              <div class="user"><a href="javascript:;" class="pic"><img src="" alt="사진" onerror="this.src = './img/user.png';" class="img"></a></div>
              <div class="infs">
                <div class="name"><em class="nm">{{cmt.author}}</em></div>
                <div class="desc">
                  <em class="time">{{cmt.date}}</em>
                  <button type="button" class="bt delt" title="삭제" @click="comtDelete(cmt.idx)"><i class="fa-solid fa-xmark"></i></button>
                </div>
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
            <div class="user"><a href="javascript:;" class="pic"><img src="" :alt="this.postId" onerror="this.src = './img/user.png';" class="img"></a></div>
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
        postId:''
    }
  },
  created(){
    const route = useRoute();  
    this.postId = route.params.id
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
    dateForm(d){
      return new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'short', timeStyle: 'short'}).format( d )
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
            this.Coments[i].date = this.dateForm(this.Coments[i].timestamp.toDate() )
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
      console.log(!this.userInfo?.uid);
      if (this.userInfo == null) { 
        if(confirm("로그인이 필요합니다.")){
          this.$router.push('/signin');
        }else{
          return;
        }
      }
      const today = new Date() ;
      const random = (length = 6) => {
        return Math.random().toString(16).substr(2, length);
      };
      this.comtSed({
        idx: this.postId+"_comt_"+random(),
        author : "홍길동",
        uid : this.userInfo.uid,
        email : this.userInfo.email,
        reply: inputReply.value.replace(/\n/g,'<br>'),
        timestamp: today,
        date: this.dateForm( today )
      });

      // inputReply.style = ""
      inputReply.value = "";
      inputReply.focus();
      inputReply.dispatchEvent(new Event('input'));
    },
    async comtSed(opt){

      console.log("댓글 전송 =======");
      console.table(opt);

      this.Coments.push(opt)
      const thisDoc = doc(db, "bbs", this.postId);
      await updateDoc ( thisDoc, {
        coments : this.Coments
      });

    },
    async comtDelete(cmtIdx){
      console.log(cmtIdx);
      if (confirm("댓글을 삭제하시겠습니까?")) {
        this.Coments.forEach( (e,i)=>{ 
            if( e.idx == cmtIdx ){
                console.log(i)
                this.Coments.splice(i, 1);
            }
        })
  
        const docRef = doc(db, "bbs", this.postId );
        await updateDoc(docRef, {
          coments:this.Coments
        }).then(()=>{
          console.log("댓글삭제 됨");
        }).catch (e =>{
          console.error("댓글삭제 Error " ,e);
        });
      }

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
