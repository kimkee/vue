<template>
  <div class="container photo" ref="page">
    <main class="contents">
      
      <div v-if="Boards.length == 0" class="nodata">
        <p><i class="fa-solid fa-message-dots"></i> 게시글이 없습니다.</p>
      </div>
      <div  v-else class="ut-tblist">
        <ul class="list" id="dp_list">
          <!-- {{Boards}} -->
          <li v-for="board in Boards" :key="board.id" :data-id="board.id" :data-uid="board.uid">
            <div class="box">
              <router-link class="lk" :to="{ name: 'photoView', params: { id: board.id }}">
                <div class="pic" v-if="board.img.length"><img class="img" loading="lazy" :src="board.img" onerror="this.src='./img/noimage.png';"></div>
                <div class="nums" v-if="board.img.length > 1"><em><i class="fa-solid fa-images"></i></em></div>
                <div class="info">
                  <em v-if="board.comtNum > 0"><i class="fa-solid fa-comment-dots"></i> <b>{{ board.comtNum }}</b></em>
                  <!-- <em><i class="fa-solid fa-eye"></i> <b>{{ board.count }}</b></em> -->
                  <em v-if="board.likes > 0"><i class="fa-solid fa-heart"></i> <b>{{board.likes}}</b></em>
                </div>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="ui-loadmore" ref="uiLoadmore">
          <em></em>
          <button type="button" class="btn-load" @click="addItem" title="불러오기"><i class="fa-solid fa-rotate-right"></i></button>
        </div>
      </div>
      
    </main>
    <div class="floatnav">
      <router-link class="bt reg" to="/photo/write"><i class="fa-solid fa-camera"></i><em>사진동록</em></router-link>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import store from '@/store';
import { collection, query, doc, getDoc, getDocs, orderBy, limit } from 'firebase/firestore'; //limitToLast
import ui from '@/ui.js';

export default {
  name: 'PhotoItem',
  components: {

  },
  props: {
    userstate: String
  },
  data() {
    return {
      // Photos: [],
      Boards: [],
      callStat: true,
      countItem: 15, // 한번에 로드할 아이템 갯수
      loadItem: 0, // 로드한 아이템 갯수
      postTotal:0, // 전체 개시물 숫자
      dbTable:'photo',
    }
  },
  created() {
    ui.init();
    ui.loading.show();
    document.querySelector(".header .htit").textContent = 'Photo';
    console.log("photo created");
    this.postNum();
    this.read(this.countItem);
  },
  mounted() {
    console.table(store.state.userInfo);
    window.addEventListener("scroll", this.scrollEvent);
    this.callStat = true;
    // this.addItem();
    console.log("================================");
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollEvent);
  },
  methods: {
    async read(nums) {
      console.log(nums);
      this.callStat = false;
      const q = query(collection(db, "photo"), orderBy("timestamp", "desc"), limit(nums));
      const querySnapshot = await getDocs(q);
      this.Boards = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().title);
        this.Boards.push({
          id: doc.id,
          uid: doc.data().uid,
          author: doc.data().author || "익명",
          avatar: doc.data().avatar || 0,
          title: doc.data().title,
          content: doc.data().content,
          comtNum: doc.data().coments.length,
          count: doc.data().count,
          likes: doc.data().likes,
          img: doc.data().img,
          date: ui.timeForm(doc.data().timestamp.toDate())
        });
      });
      this.loadItem = this.loadItem + this.countItem;
      if( this.loadItem >= this.postTotal) {
        this.$refs.uiLoadmore.classList.add("hide");
        this.callStat = false;
      }else{
        this.callStat = true;
      }
      this.$refs.page.classList.add("load");
      ui.loading.hide();
    },
    async postNum(){
      const docRef = doc(db, this.dbTable, "count");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          this.postTotal = docSnap.data().post;
      }      
    },
    scrollEvent() {
      const wHt = ui.viewport.height();
      const docH = ui.viewport.docHeight();
      const scr = ui.viewport.scrollTop() + wHt + 10;
      if (docH <= scr && this.callStat == true) {
        console.log("바닥도착");
        this.$refs.uiLoadmore?.classList.add("active");
        this.callStat = false;
        setTimeout( ()=> this.read(this.loadItem + this.countItem) ,1000 );
      }
    },
    addItem() {
      let pHtml = "";
      this.$refs.uiLoadmore.classList.add("active");
      this.callStat = false;
      fetch("./js/photo.json").then(res => res.ok && res.text()).then(res => {
        const result = JSON.parse(res);
        result.forEach((data) => {
          pHtml += `
            <li>
              <div class="box">
                <a href="javascript:;" class="lk">
                  <div class="pic"><img class="img"  src="${data.urls}" alt=""></div>
                  <div class="nums"><em><i class="fa-solid fa-images"></i></em></div>
                  <div class="info"><em><i class="fa-solid fa-comment-dots"></i> <b>1</b></em><em><i class="fa-solid fa-heart"></i> <b>2</b></em></div>
                </a>
              </div>
            </li>`
        });

        setTimeout(() => {
          document.querySelector("#dp_list").insertAdjacentHTML("beforeend", pHtml);
          this.$refs.uiLoadmore.classList.remove("active");
          document.querySelector(".page.photo").classList.add("load");
          this.callStat = true;
          this.Photos = [...this.Photos, ...(result)]
          console.log(this.Photos.length);
          ui.loading.hide();
          if (this.countItem >= 2) {
            this.$refs.uiLoadmore.classList.add("hide");
            this.callStat = false;
          }

        }, 1000);
      }).catch(e => {
        console.log("오프라인");
        document.querySelector('.ui-loadmore').classList.remove("active");
        document.querySelector('.ui-loadmore').classList.add("error");
        console.log(e);
      });
    },
  }
}
</script>
<style scoped>
</style>
