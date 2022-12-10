<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-list">
        <p class="tot">게시물 : {{Boards.length}} 개</p>
        <ul class="list">
          <li v-for="board in Boards" :key="board.key">
              <router-link class="box" :to="{ name: 'view', params: { id: board.key }}">
                <h4 class="tits">{{ board.title }} : {{ board.key }}</h4>
                <p class="cont">{{ board.content }}</p>
                <p class="date">{{ board.timestamp }}</p>
              </router-link>
          </li>
        </ul>
      </div>

      <div class="floatnav">
        <router-link class="bt reg" to="/write">게시글동록</router-link>
      </div>

    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import {onSnapshot, collection, orderBy  } from "firebase/firestore";
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
    document.querySelector(".header .cdt .tit").textContent = '목록';
  },
  methods:{
    async read(){
      onSnapshot( collection(db, "test"), orderBy("timestamp", "desc"), (querySnapshot) => {
        this.Boards = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data().title);
          this.Boards.push({
            key: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            timestamp:  new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( doc.data().timestamp.toDate() ) 
            // date:  new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'long'}).format( doc.data().date ) 
          })
        })
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
