<template>
  
  <div class="comts">

    <div class="ut-reply">
      <div class="rplist">
        <ul class="rlist a">
          <li v-for="cmt in Coments" :key="cmt.key">
            <div class="rpset">
              <div class="user"><a href="javascript:;" class="pic"><img src="" alt="사진" onerror="this.src = './img/user.png';" class="img"></a></div>
              <div class="infs">
                <div class="name"><em class="nm">{{cmt.author}}</em></div>
                <div class="desc">
                  <em class="time">4일전</em>
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
import { getDoc, doc  } from "firebase/firestore";
import { useRoute } from 'vue-router';


export default {
  name: 'CommentsItem',
  props: {
    msg: String
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
    this.autoHeight();
  },
  methods:{
    async comtList(ids){
      console.log("댓글" + ids);
      const docRef = doc(db, "bbs" , ids);
      try {
          const docSnap = await getDoc(docRef);
          this.Coments = docSnap.data().coments || [] ;
          this.Coments.forEach((c, i) => {         
            this.Coments[i] = ( JSON.parse(c) );
            this.Coments[i].reply = this.Coments[i].reply.replace(/\n/g,'<br>');
          });
          console.log(  `댓글 수 = ${ this.Coments.length }` );
      }catch(error) {
        console.log(error);
      }
    },
    comtWrite(e){
      console.log(e.currentTarget, e);
      const sendBtn = e.currentTarget;
      const inputReply =  sendBtn.closest(".ut-rpwrite").querySelector("#input_reply");
      console.log(inputReply.value.replace(/\n/g,'<br>') );
      inputReply.value = "";
      inputReply.focus();
    },
    autoHeight(){ // 댓글에 자동높이 기능
      document.querySelector('[data-ui="autoheight"]').addEventListener("input",e =>{

        // if( $els.value.indexOf("\n") > -1 ) {
        //   const newval = $els.value.replace(/\n/gi, '');
        //   $els.value = newval;
        //   return false;
        // }      
        
        console.log(e.currentTarget.value);
        const $els = e.currentTarget;
        const tboxH = $els.offsetHeight;
        let tboxS;
        $els.style.height = "1px";
        tboxS = $els.scrollHeight ;
        console.log( tboxH , tboxS);
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
