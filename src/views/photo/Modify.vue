<template>
  <div class="container photo modify">
    <main class="contents">
      <div class="board-write">
        <ul class="list">
          <li>
            <label class="dt">사진</label>
            <Files ref="FileItem" :opts="{mode:'modify', page:'photo', param:param, max:5}"/>
          </li>
          <li>
            <label class="dt">내용</label>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" spellcheck="false" data-ui="autoheight" :placeholder="'입력하세요(최대'+contentMax+'글자)'" v-model="content"></textarea>
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
          <button type="button" class="btn" :disabled="isBtnSave ? false : true" @click="modify"><i class="fa-solid fa-pen-to-square"></i><em>저장</em></button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import Files from '@/components/Files.vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import ui from '@/ui.js';

export default {
  name: 'ModifyItem',
  props: {

  },
  components: {
    Files
  },
  data() {
    return {
      content: '',
      contentNow: 0,
      contentMax: new Intl.NumberFormat().format(1000),
      isBtnSave: false,
      Views: {},
      files: [],
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
    const route = useRoute();
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.read(ids);
    this.param = ids;
  },
  mounted() {
    document.querySelector(".header .htit").textContent = '글 수정';

  },
  methods: {
    commasDel(str) {
      console.log(str);
      if (typeof str == 'number') { return; }
      return parseInt(str.replace(/,/g, ''));
    },
    valCheck() {
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
    // 데이터 가져오기 https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko&authuser=0
    async read(ids) {
      const docRef = doc(db, "photo", ids);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.Views.uid = docSnap.data().uid;
        this.title = docSnap.data().title;
        this.Views.img = docSnap.data().img;
        this.content = ui.textHtml(docSnap.data().content, "decode");
        this.Views.timestamp = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'full', timeStyle: 'medium' }).format(docSnap.data().timestamp.toDate());
        this.files = this.Views.img;
        console.log(this.files);
        this.$refs.FileItem.itemSet(this.files);

        console.log(this.Views.uid, store.state.userInfo.uid);
        if (this.Views.uid != store.state.userInfo.uid) {
          console.log("내글 아님");
          this.$router.push('/');
          return
        }
      } else {
        console.log("No such document!");
      }
    },
    async modify() {
      console.log("수정" + this.param);
      // 데이터 수정 https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0
      const docRef = doc(db, "photo", this.param);
      await updateDoc(docRef, {
        content: ui.textHtml(this.content, "incode"),
        uid: store.state.userInfo.uid,
        author: store.state.userInfo.nick,
        avatar: store.state.userInfo.avatar,
        img: this.$refs.FileItem.Files
      }).then(() => {
        console.log("수정 성공: ");
        this.$router.push('/photo/' + this.param);
      }).catch(e => {
        console.error("Error adding document: ", e);
      });

    }
  }
}
</script>
