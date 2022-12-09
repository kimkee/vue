<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <p class="tot">게시물 : {{Boards.length}} 개</p>
      <ul class="board-list">
        <li v-for="board in Boards" :key="board.key">
            <h4 class="tits">{{ board.title }} : {{ board.key }}</h4>
            <p class="cont">{{ board.content }}</p>
            <p class="date">{{ board.date }}</p>
        </li>
      </ul>

      <div class="floatnav">
        <router-link class="bt reg" to="/write">게시글동록</router-link>
      </div>

    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, onSnapshot , orderBy } from "firebase/firestore";
export default {
  name: 'Write',
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
  methods:{
    read(){
      const result = collection(db, "test")
      onSnapshot( result, orderBy('createdAt',"desc"),  (querySnapshot) => {
        this.Boards = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data().title);
          this.Boards.push({
            key: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            date:  doc.data().date
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
