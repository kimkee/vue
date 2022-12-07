<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->

    <ul class="board-list">
      <li v-for="board in Boards" :key="board.key">
          <h4 class="tits">{{ board.title }}</h4>
          <p class="cont">{{ board.content }}</p>
          <p class="date">{{ board.date }}</p>
      </li>
    </ul>
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
    console.log("created");
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
