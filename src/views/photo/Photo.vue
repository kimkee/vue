<template>
  <div class="container photo">
    <main class="contents">
      
      <div class="ut-tblist">
        <div v-if="Boards.length == 0" class="nodata">
          <p><i class="fa-solid fa-message-dots"></i> 게시글이 없습니다.</p>
        </div>
        <ul v-else class="list" id="dp_list">
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
        <div class="ui-loadmore">
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
import db  from '../../firebaseConfig.js';
import store from '../../store';
import { collection, query, getDocs, orderBy, limit , limitToLast } from "firebase/firestore";
import ui from '../../ui.js';

export default {
  name: 'PhotoItem',
  components: {
    
  },
  props: {
    userstate: String
  },
  data() {
    return {
      Photos:[],
      callStat:true,
      countItem:0,
      Boards: []
    }
  },
  created(){
    ui.init();
    ui.loading.show();
    document.querySelector(".header .htit").textContent = 'Photo';
    console.log("photo created");
    this.read();
  },
  mounted() {
    console.table(store.state.userInfo);
    window.addEventListener("scroll", this.scrollEvent);
    this.callStat = true;
    // this.addItem();
    console.log("================================");
  },
  unmounted(){
    window.removeEventListener("scroll", this.scrollEvent);
  },
  methods:{
    async read(){
      const q = query(collection(db, "photo"), orderBy("timestamp", "desc") , limit(), limitToLast() );
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
          date: ui.timeForm( doc.data().timestamp.toDate()  )
        });
      });
      // document.querySelector(".board-list").classList.add("load");
      ui.loading.hide();
    },

    addItem(){
      let pHtml = "";
      document.querySelector('.ui-loadmore').classList.add("active");
      this.callStat = false;
      fetch("./js/photo.json").then( res => res.ok && res.text() ).then( res => { 
        const result = JSON.parse( res);
        result.forEach( (data) =>{
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
          document.querySelector("#dp_list").insertAdjacentHTML("beforeend",pHtml);
          document.querySelector('.ui-loadmore').classList.remove("active");
          document.querySelector(".page.photo").classList.add("load");
          this.callStat = true;
          this.Photos = [...this.Photos, ...(result)]
          console.log(  this.Photos.length );
          ui.loading.hide();
          if(this.countItem >= 2){
            document.querySelector('.ui-loadmore').classList.add("hide");
            this.callStat = false;
          }

        }, 1000);
      }).catch( e=>{
        console.log("오프라인");
        document.querySelector('.ui-loadmore').classList.remove("active");
        document.querySelector('.ui-loadmore').classList.add("error");
        console.log(e);
      });
    },
    scrollEvent(){
      // console.log(this.callStat,  ui.viewport.height() ,ui.viewport.scrollTop() , ui.viewport.docHeight() );
      const wHt = ui.viewport.height() ;
      const docH =  ui.viewport.docHeight();
      const scr = ui.viewport.scrollTop() + wHt + 10; 
      if (docH <= scr && this.callStat == true) {
        console.log("바닥도착");
        this.addItem();
        this.countItem ++;
      }
    }
  }
}
</script>
<style scoped>
</style>
