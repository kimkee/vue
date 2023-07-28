<template>
  <div class="container board list" ref="page">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" ref="popup" :opts="{dbTable}"  />
      </transition>
    </router-view>
    <main class="contents">
      <div class="board-list">
        <div v-if="Boards.length == 0" class="nodata">
          <p><i class="fa-regular fa-message-dots"></i> 게시글이 없습니다.</p>
        </div>
        <div v-else>
          <div class="bbs-opt">
            <div class="tots"><i class="fa-regular fa-square-poll-horizontal"></i> 게시글 : {{postTotal}} 개</div>
            <div class="more"></div>
          </div>
          <ul class="list">
            <li v-for="board in Boards" :key="board.id" :data-id="board.id" :data-uid="board.uid">
              <router-link class="box" :to="{ name: 'bbsView', params: { id: board.id }}">
                <div class="cont">
                  <div class="pics" v-if="board.img.length"><img class="img" :src="board.img" onerror="this.src='./img/noimage.png';"></div>
                  <div class="desc">
                    <h4 class="tits">{{ board.title }}</h4>
                    <div class="text" v-html="board.content"></div>
                  </div>
                </div>
                <div class="info">
                  <div class="dd">
                    <div class="user"><span class="pic"><img :src="$store.state.avatar[board.avatar]" alt="" class="img"></span> <span class="txt">{{board.author}}</span></div>
                    <div class="keys">{{ board.id }}</div>
                  </div>
                  <div class="dd">
                    <div class="hits">
                      <em><i class="fa-regular fa-comment-dots"></i> <b>{{ board.comtNum }}</b></em>
                      <em><i class="fa-regular fa-eye"></i> <b>{{ board.count }}</b></em>
                      <em><i class="fa-regular fa-heart"></i> <b>{{board.likes}}</b></em>
                    </div>
                    <div class="date" v-html="board.date"></div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="ui-loadmore" ref="uiLoadmore">
            <em><i class="fa-duotone fa-spinner"></i></em>
            <button type="button" class="btn-load" @click="addItem" title="불러오기"><i class="fa-regular fa-rotate-right"></i></button>
          </div>
        </div>
      </div>

      <div class="floatnav">
        <button type="button" class="bt top" @click="goTop"><i class="fa-solid fa-arrow-up"></i><em>위로</em></button>
        <router-link class="bt reg" to="/bbs/write"><i class="fa-regular fa-pen"></i><em>게시글동록</em></router-link>
      </div>

    </main>
  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import store from '@/store';
import { collection, query, doc, getDoc, getDocs, orderBy, limit } from 'firebase/firestore'; //limitToLast
import ui from '@/ui.js';


export default {
  name: 'ListItem',
  props: {

  },
  data() {
    return {
      Boards: [],
      callStat: false,
      countItem: 10, // 한번에 로드할 아이템 갯수
      loadItem: 0, // 로드한 아이템 갯수
      postTotal:0, // 전체 개시물 숫자
      dbTable:'bbs',
    }
  },
  created() {
    ui.init();
    ui.loading.show();
    console.log("list created");
    this.postNum();
    this.read(this.countItem);
    // console.log(db);
  },
  watch:{
    '$route'(to,from){
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-out' : 'slide-in';
      console.log(this.transitionName);
      // this.$refs.popup.$refs.popLayer.classList.add("ani");
    }
  },
  mounted() {
    console.table(store.state.userInfo);
    window.addEventListener("scroll", this.scrollEvent);
    document.querySelector(".header .htit").textContent = 'Board';
    this.callStat = true;
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollEvent);
  },
  methods: {
    async read(nums) {
      console.log(nums);
      this.callStat = false;
      const q = query(collection(db, "bbs"), orderBy("timestamp", "desc"), limit(nums));
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
    goTop (){
      // window.scrollTo(0,0);
      ui.scrollTo("body", 0, 200);
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
      if ( ui.lock.stat) return;
      if ( ui.viewport.scrollTop() > 50 ) {
      document.querySelector(".floatnav")?.classList.add("on-top");
      }else{
        document.querySelector(".floatnav")?.classList.remove("on-top");
      }
    }
  }
}
</script>
