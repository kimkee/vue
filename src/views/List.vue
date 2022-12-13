<template>
  <div class="container board list">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-list">
        <div v-if="Boards.length == 0" class="nodata">
          <p><i class="fa-solid fa-message-dots"></i> 게시글이 없습니다.</p>
        </div>
        <div v-if="Boards.length > 0">
          <div class="bbs-opt">
            <div class="tots"><i class="fa-solid fa-square-poll-horizontal"></i> 게시글 : {{Boards.length}} 개</div>
            <div class="more"></div>
          </div>
          <ul class="list">
            <li v-for="board in Boards" :key="board.key">
                <router-link class="box" :to="{ name: 'view', params: { id: board.key }}">
                  <h4 class="tits">{{ board.title }}</h4>
                  <div class="cont">
                    <div v-if="board.img" class="pics"><img class="img" :src="board.img" onerror="this.src = './img/logo.png';"></div>
                    <div class="text" v-html="board.content"></div>
                  </div>
                  <div class="info">
                    <div class="keys">{{ board.key }}</div>
                    <div class="date">{{ board.timestamp }}</div>
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
import { collection, query, getDocs, orderBy, limit , limitToLast } from "firebase/firestore";



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
    console.log("list created");
    this.read();
    // console.log(db);
  },
  mounted(){
    ui.init();
    document.querySelector(".header .cdt .htit").textContent = '목록';
  },
  methods:{
    async read(){
      const q = query(collection(db, "bbs"), orderBy("timestamp", "desc") , limit(), limitToLast() );
      const querySnapshot = await getDocs(q);
      this.Boards = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().title);
        this.Boards.push({
          key: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          img: doc.data().img,
          timestamp:  new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( doc.data().timestamp.toDate() ) 
          // date:  new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'long'}).format( doc.data().date ) 
        });
      });
      document.querySelector(".board-list").classList.add("load");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
