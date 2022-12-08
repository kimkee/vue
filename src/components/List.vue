<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <ul class="board-list">
        <li v-for="board in Boards" :key="board.key">
            <h4 class="tits">{{ board.title }}</h4>
            <p class="cont">{{ board.content }}</p>
            <p class="date">{{ board.date }}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, onSnapshot } from "firebase/firestore";
export default {
  name: 'HelloWorld',
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
      onSnapshot(collection(db, "test"), (querySnapshot) => {
        console.log("afsd");
        this.Boards = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data().title);
          this.Boards.push({
            key: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            date:  new Intl.DateTimeFormat('ko-KR').format( doc.data().date )
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
