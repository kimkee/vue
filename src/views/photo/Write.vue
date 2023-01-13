<template>
  <div class="container photo write">
    <main class="contents">
      <div class="board-write">
        <ul class="list">
          <li>
            <Files ref="FileItem" :opts="{mode:'write', page:'photo', max:5}"/>
          </li>
          <li>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" spellcheck="false" v-model="content" data-ui="autoheight" :placeholder="'입력하세요(최대'+contentMax+'글자)'"></textarea>
                <span class="num"><i class="i">{{contentNow}}</i>/<b class="n">{{contentMax}}</b></span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <nav class="floatbots">
      <div class="inr">
        <div class="btsbox btn-set">
          <button type="button" class="btn" @click="$router.back()"><i class="fa-solid fa-list"></i><em>취소</em></button>
          <button type="button" class="btn" :disabled="isBtnSave ? false : true" @click="write"><i class="fa-solid fa-pen-to-square"></i><em>저장</em></button>  
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import Files from '@/components/Files.vue';
import store from '@/store';
import ui from '@/ui.js';


export default {
  name: 'WriteItem',
  props: {

  },
  components: {
    Files
  },
  data() {
    return {
      content: '',
      contentNow: 0,
      contentMax: new Intl.NumberFormat().format(500),
      isBtnSave: false,
      files: [],
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(store.state.userInfo.stat);
    if (store.state.userInfo.stat == true) {
      return next();
    } else {
      ui.confirm("로그인이 필요합니다.<br>로그인페이지로 이동하시겠습니까?", {
        ycb: () => { next('/signin'); },
        ccb: () => { },
        ybt: "예",
        nbt: "아니오",
      });
    }
  },
  watch: {
    files() {
      this.valCheck();
    },
    content() {
      this.contentNow = new Intl.NumberFormat().format(this.content.length);
      this.valCheck();
    }
  },
  created() {
    ui.init();
  },
  mounted() {
    document.querySelector("input#fileInput").value = "";
    document.querySelector(".header .htit").textContent = '글 쓰기';
  },
  methods: {
    commasDel(str) {
      console.log(str);
      if (typeof str == 'number') { return; }
      return parseInt(str.replace(/,/g, ''));
    },
    valCheck() {
      console.log(this.files);
      if (this.files.length > 0 && this.content.length > 0) {
        this.isBtnSave = true;
      } else {
        this.isBtnSave = false;
      }
      if (this.content.length > this.commasDel(this.contentMax)) {
        console.log("내용 글자수 맥스");
        this.content = this.content.slice(0, this.commasDel(this.contentMax));
        ui.alert("내용의 글자수는 " + this.contentMax + "자 까지 입니다.");
      }
    },

    async write() {
      console.log("쓰기", this.$refs.FileItem.Files);
      const today = new Date();

      const docRef = doc(db, "photo", "count");
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) return;
      const postNum = docSnap.data().post + 1;
      console.log(postNum);
      setDoc(doc(db, "photo", "" + postNum), {
        content: ui.textHtml(this.content, "incode"),
        timestamp: today,
        uid: store.state.userInfo.uid,
        author: store.state.userInfo.nick,
        avatar: store.state.userInfo.avatar,
        date: ui.dateForm(today),
        count: 0,
        coments: [],
        likes: 0,
        likeUsr: [],
        img: this.$refs.FileItem.Files || []
      }).then(() => {
        console.log("쓰기 성공: ");
        setDoc(doc(db, "photo", "count"), { post: postNum }).then(() => { });  // count + 1
        this.$router.push('/photo');
      }).catch(e => {
        console.error("Error adding document: ", e);
      });
    },

  }
}
</script>
