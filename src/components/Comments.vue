<template>
  <!-- {{userInfo.email}} {{userstate}} -->
  <div class="comts">
    <!-- <span v-if="userstate == 'true'" class="bt email"><i class="fa-regular fa-envelope"></i><em> {{userInfo.email}}</em></span> -->
    <div class="ut-reply">
      <div class="rplist">
        <div class="rtop r1" v-if="Coments.length == 0">
          첫 댓글을 남겨 보세요!
        </div>
        <div class="rtop r2" v-else>
          댓글 {{Coments.length}} 개
        </div>
        <ul class="rlist a">
          <li v-for="cmt in Coments" :key="cmt.key" :data-coment-idx="cmt.idx">
            <div class="rpset">
              <div class="user">
                <router-link class="pic" :to="`/user/${cmt.uid}`"><img :src="$store.state.avatar[cmt.avatar]" alt="사진"  class="img"></router-link>
              </div>
              <div class="infs">
                <div class="name">
                  <em class="nm">{{cmt.author}}</em>
                </div>
                <div class="desc">
                  <em class="time" v-html="cmt.date"></em>
                  <button v-if="cmt.uid == $store.state.userInfo.uid" type="button" class="bt delt" title="삭제" @click="comtDelete(cmt.idx)"><i class="fa-regular fa-xmark"></i></button>

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
            <div class="user">
              <a href="javascript:;" class="pic">
                <img v-if="$store.state.userInfo.stat" :src="$store.state.avatar[$store.state.userInfo.avatar]" :alt="this.postId" onerror="this.src='./img/user.png';"  class="img">
                <img v-if="!$store.state.userInfo.stat" src="" onerror="this.src='./img/user.png';" class="img">
              </a>
            </div>
            <div class="form">
              <textarea data-ui="autoheight" ref="msgbox" class="ment" v-model="inputReply" 
              @input="autoHeight"
              @focus="comFocus"
              :placeholder="$store.state.userInfo.stat ? '댓글을 입력해주세요' : '로그인해주세요'"
              
              spellcheck="false"></textarea>
            </div>
            <div class="bts"><button type="button" class="btsend" :disabled="$store.state.userInfo.stat ? false : true" @click="comtWrite"><i class="fa-regular fa-pen"></i><em>보내기</em></button></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useRoute } from 'vue-router';
import store from '@/store';
import ui from '@/ui.js';
export default {
  name: 'CommentsItem',
  props: {
    msg: String,
    opts: Object,
  },
  data() {
    return {
      Coments: [],
      postId: '',
      inputReply: '',
    }
  },
  created() {
    const route = useRoute();
    this.postId = route.params.id
    const ids = route.params.id;
    this.comtList(ids);
  },
  mounted() {

  },
  methods: {
    async comtList(ids) {
      console.log(this.opts.dbTable, ids);
      const docRef = doc(db, this.opts.dbTable, ids);
      try {
        console.log("글 id === " + ids);
        const docSnap = await getDoc(docRef);
        this.Coments = docSnap.data().coments || [];
        this.Coments.forEach((c, i) => {
          this.Coments[i] = (c);
          this.Coments[i].date = ui.dateForm(this.Coments[i].timestamp.toDate(), "short")
        });
        console.log(`댓글 수 = ${this.Coments.length}`);
      } catch (error) {
        console.log(error);
      }
      console.log(this.Coments);
    },
    comFocus() {
      if (!store.state.userInfo.uid) {
        ui.confirm("로그인이 필요합니다.<br>로그인페이지로 이동하시겠습니까?", {
          ycb: () => { this.$router.push('/signin'); return; },
          ccb: () => { return; },
          ybt: "예",
          nbt: "아니오",
        });
        return;
      }
    },
    comtWrite() {
      console.log(this.inputReply);
      console.log(store.state.userInfo.uid);

      if (this.inputReply == '') {
        ui.alert("댓글을 입력하세요", {
          ycb: () => {
            this.$refs.msgbox.focus();
          }
        });
        return;
      }
      const today = new Date();
      this.comtSed({
        idx: this.postId + "_comt_" + ui.randomStr(),
        author: store.state.userInfo.nick,
        avatar: store.state.userInfo.avatar,
        uid: store.state.userInfo.uid,
        email: store.state.userInfo.email,
        reply: ui.textHtml(this.inputReply, "incode"),
        timestamp: today,
        date: ui.dateForm(today)
      });

      this.inputReply = "";
      this.$refs.msgbox.style.height = "";
    },
    async comtSed(opt) {

      console.log("댓글 전송 =======");
      console.table(opt);

      this.Coments.push(opt)
      const thisDoc = doc(db, this.opts.dbTable, this.postId);
      await updateDoc(thisDoc, {
        coments: this.Coments
      }).then(() => {
        const li = document.querySelector("li[data-coment-idx='" + opt.idx + "']");
        const liTop = li.offsetTop;
        console.log(liTop);
        // window.scrollTo(0, liTop);
        this.$parent.$refs.popLayer.querySelector(".pct").scrollTo(0,liTop)
        console.log(this.$parent.$refs.popLayer.querySelector(".pct"));
        li.focus();
        // setTimeout(() => { },100);
      });
    },
    async comtDelete(cmtIdx) {
      console.log(cmtIdx);

      ui.confirm("댓글을 삭제하시겠습니까?", {
        ycb: () => {
          this.Coments.forEach((e, i) => {
            if (e.idx == cmtIdx) {
              console.log(i)
              this.Coments.splice(i, 1);
            }
          })
          const docRef = doc(db, this.opts.dbTable, this.postId);
          updateDoc(docRef, {
            coments: this.Coments
          }).then(() => {
            console.log("댓글삭제 됨");
          }).catch(e => {
            console.error("댓글삭제 Error ", e);
          });
        },
        ncb: () => { },
        ybt: "예",
        nbt: "아니오",
      });

    },
    autoHeight() { // 댓글에 자동높이 기능
      const $els = this.$refs.msgbox;
      let tboxS;
      $els.style.height = "1px";
      tboxS = $els.scrollHeight;
      $els.style.height = tboxS + "px";
    }
  }
}
</script>
