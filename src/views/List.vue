<template>
  <div class="container board list">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-list">
        <div class="ui-loading-dot">
          <div class="bx">
            <em><i></i></em>
          </div>
        </div>
        <div v-if="Boards.length == 0" class="nodata">
          <p><i class="fa-solid fa-message-dots"></i> 게시글이 없습니다.</p>
        </div>
        <div v-else>
          <div class="bbs-opt">
            <div class="tots"><i class="fa-solid fa-square-poll-horizontal"></i> 게시글 : {{Boards.length}} 개</div>
            <div class="more"></div>
          </div>
          <ul class="list">
            <li v-for="board in Boards" :key="board.id" :data-id="board.id" :data-uid="board.uid">
                <router-link class="box" :to="{ name: 'view', params: { id: board.id }}">
                  <h4 class="tits">{{ board.title }}</h4>
                  <div class="cont">
                    <div class="text" v-html="board.content"></div>
                    <div class="pics" v-if="board.img.length"><img class="img" :src="board.img" onerror="this.src='./img/noimage.png';"></div>
                  </div>
                  <div class="info">
                    <div class="dd">
                      <div class="user"><span class="pic"><img :src="$store.state.avatar[board.avatar]" alt="" class="img"></span> <span class="txt">{{board.author}}</span></div>
                      <div class="keys">{{ board.id }}</div>
                    </div>
                    <div class="dd">
                      <div class="hits">
                        <em><i class="fa-solid fa-comment-dots"></i> <b>{{ board.comtNum }}</b></em>
                        <em><i class="fa-solid fa-eye"></i> <b>{{ board.count }}</b></em>
                        <em><i class="fa-solid fa-heart"></i> <b>{{board.likes}}</b></em>
                      </div>
                      <div class="date" v-html="board.date"></div>
                    </div>
                  </div>
                </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="floatnav">
        <router-link class="bt reg" to="/write"><i class="fa-solid fa-pen"></i><em>게시글동록</em></router-link>
      </div>

    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import store from '../store';
import { collection, query, getDocs, orderBy, limit , limitToLast } from "firebase/firestore";
import ui from '../ui.js';


export default {
  name: 'ListItem',
  props: {
    msg: String
  },
  data() {
      return {
          Boards: []
      }
  },
  created(){
    ui.init();
    console.log("list created");
    this.read();
    // console.log(db);
  },
  mounted(){
    console.table(store.state.userInfo);
    document.querySelector(".header .htit").textContent = 'Board';
  },
  methods:{
    dateForm(d){
      return new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'short', timeStyle: 'short'}).format( d )
    },
    async read(){
      const q = query(collection(db, "bbs"), orderBy("timestamp", "desc") , limit(), limitToLast() );
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
          // date: this.dateForm(doc.data().timestamp.toDate() )
          date: ui.timeForm( doc.data().timestamp.toDate()  )
        });
      });
      document.querySelector(".board-list").classList.add("load");
      document.querySelector(".ui-loading-dot").classList.add("load");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
