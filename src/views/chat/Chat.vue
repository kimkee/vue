<template>
  <div class="container home">
    <main class="contents">
      <div class="chat-view">
        <!-- <div>{{ chatMsgList }}</div> -->
        
        <article v-for="chmsg,idx in chatMsgList" :key="idx" class="chmsg" 
          :data-secs="chmsg.secs" :data-uid="chmsg.userId" :data-idx="idx"
          :class="$store.state.userInfo.uid == chmsg.userId ? 'me' : 'op'" >
          <div class="name">{{ chmsg.userName }}</div>
          <div class="usr">
            <img v-if="$store.state.userInfo.uid == chmsg.userId" :src="$store.state.avatar[$store.state.userInfo.avatar]" class="img">
            <img v-else :src="$store.state.avatar[chmsg.avatar]" class="img dsfsd">
          </div>
          <div class="msg">
            <p class="txt" v-html="chmsg.msg"></p> 
            <time class="tm" v-html="chmsg.time"></time>
          </div>
        </article>
        
        <!-- <article class="chmsg me same">
          <div class="usr">
            <img v-if="$store.state.userInfo.stat" :src="$store.state.avatar[$store.state.userInfo.avatar]" class="img">
          </div>
          <div class="msg">
            <p class="txt">대화 케이스</p> 
            <time class="tm">오후 12:26</time>
          </div>
        </article>

        <article class="chmsg op same">
          <div class="usr">
            <img v-if="$store.state.userInfo.stat" :src="$store.state.avatar[$store.state.userInfo.avatar]" class="img">
          </div>
          <div class="msg">
            <p class="txt">대화 케이스</p> 
            <time class="tm">오후 12:26</time>
          </div>
        </article> -->

      </div>

      <nav class="floatbots">
        <div class="inr">
          <div class="ut-rpwrite">
            <div class="rwset">
              <div class="user">
                <a href="javascript:;" class="pic">
                  <img v-if="$store.state.userInfo.stat" :src="$store.state.avatar[$store.state.userInfo.avatar]" onerror="this.src='./img/user.png';" class="img">
                  <img v-if="!$store.state.userInfo.stat" :src="'./img/user.png'" class="img" onerror="this.src='./img/user.png';">
                </a>
              </div>
              <div class="form">
                <textarea data-ui="autoheight" ref="msgbox" class="ment" v-model="inputReply" 
                @input="autoHeight"
                @focus="comFocus"
                :placeholder="$store.state.userInfo.stat ? '메시지를 입력해주세요' : '로그인해주세요'"
                
                spellcheck="false"></textarea>
              </div>
              <div class="bts"><button type="button" class="btsend" :disabled="$store.state.userInfo.stat ? false : true" @click="chatWrite"><i class="fa-solid fa-pen"></i><em>보내기</em></button></div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  </div>
</template>

<script>

import store from "@/store";
import ui from "@/ui.js";
import { getDatabase, ref, set, push, child, get, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";
export default {
  name: 'TestItem',
  props: {
    msg: String
  },
  data() {
      return {
        chatRoomName:null,
        chatMsgList: {},
        inputReply:'',
      }
  },
  created(){
    ui.init();
    ui.loading.show();
    console.log("created");
    this.chatRoomName = 'room2023111153510'
    // console.log(db);
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'DB_CHAT/'+this.chatRoomName)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },
  mounted(){
    this.chatRead();
    document.querySelector(".header .htit").textContent = 'Chat';
    const db = getDatabase();
    const commentsRef = ref(db, 'DB_CHAT/'+this.chatRoomName);
    onChildAdded(commentsRef, () => {
      this.chatRead();
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
    });

    onChildChanged(commentsRef, () => {
      this.chatRead();
      // setCommentValues(postElement, data.key, data.val().text, data.val().author);
    });

    onChildRemoved(commentsRef, () => {
      this.chatRead();
      // deleteComment(postElement, data.key);
    });
    this.reflesh = setInterval(() => this.chatRead(), 60000);
  },
  unmounted(){
    clearInterval(this.reflesh);
  },
  methods:{
    async chatRead(){
      console.log("chatRead");
      const dbRef = ref(getDatabase());
      const chats = {};
      await get(child(dbRef, 'DB_CHAT/'+this.chatRoomName)).then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach( (key) => {
            // console.log(snapshot.val()[key]);
            const kkk =  {
              userName: snapshot.val()[key].userName,
              userId: snapshot.val()[key].userId,
              msg: snapshot.val()[key].msg,
              avatar: snapshot.val()[key].avatar,
              time: ui.timeForm(snapshot.val()[key].time),
              secs: snapshot.val()[key].time,
            }
            chats[key] =  kkk ;
          });
          this.chatMsgList = chats;
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      // console.log(this.chatMsgList);
      window.scrollTo(0,ui.viewport.docHeight());
      ui.loading.hide();
      this.sameStat();
    },
    sameStat(){
      const arChatOp = document.querySelectorAll("article.chmsg.op");
      arChatOp.forEach( (el)=>{
        const prevId = el.getAttribute("data-uid");
        console.log(prevId);
        const nextId = el.nextElementSibling?.getAttribute("data-uid");
        console.log(nextId);
        console.log(prevId ==nextId);
        (prevId ==nextId) ? el.nextElementSibling.classList.add("same") : null;
      });
      const arChatMe = document.querySelectorAll("article.chmsg.me");
      arChatMe.forEach( (el)=>{
        const prevId = el.getAttribute("data-uid");
        console.log(prevId);
        const nextId = el.nextElementSibling?.getAttribute("data-uid");
        console.log(nextId);
        console.log(prevId ==nextId);
        (prevId ==nextId) ? el.nextElementSibling.classList.add("same") : null;
      });
    },
    comFocus(){
      if (!store.state.userInfo.uid ) { 
        ui.confirm("로그인이 필요합니다.<br>로그인페이지로 이동하시겠습니까?",{
          ycb:()=>{ this.$router.push('/signin'); return; },
          ccb:()=>{ return;},
          ybt:"예",
          nbt:"아니오",
        });
        return;
      }
    },
    chatWrite(){
      if (this.inputReply == '') {
        ui.alert("댓글을 입력하세요",{
          ycb:()=>{
            this.$refs.msgbox.focus();
          }
        });
        return;
      }
      const chatOpts = {
        roomName : this.chatRoomName,
        userId : store.state.userInfo.uid,
        userName : store.state.userInfo.nick,
        avatar : store.state.userInfo.avatar,
        msg : this.inputReply.replace(/\u0020/g,'&nbsp;').replace(/\n/g,'<br>'),
        time: Date.now(),
      };

      const db = getDatabase();
      const postListRef = ref(db, 'DB_CHAT/'+this.chatRoomName);
      const newPostRef = push(postListRef);
      set(newPostRef, chatOpts);
      this.chatRead();
      this.inputReply = '';
      this.$refs.msgbox.style.height ="";
      this.$refs.msgbox.focus();
    },
    autoHeight(){ // 댓글에 자동높이 기능
      const $els = this.$refs.msgbox;
      let tboxS;
      $els.style.height = "1px";
      tboxS = $els.scrollHeight ;
      $els.style.height = tboxS+"px";
    }
  }
}
</script>
