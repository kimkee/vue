<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <!-- {{$route.params.id}} -->

      <!-- {{Views}} -->

      <div class="board-view">
        <div class="dt">
          <h4 class="tits">{{ Views.title }} {{ Views.key }}</h4>
        </div>
        <dd class="dd">
          <div class="cont">{{ Views.content }}</div>
          <p class="date">{{ Views.timestamp }}</p>
        </dd>
        <div class="btn-set">
          <router-link class="btn sm" to="/list">목록</router-link>
          <!-- <router-link class="btn sm" to="/list">수정</router-link>
          <router-link class="btn sm" to="/list">삭제</router-link> -->
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { useRoute } from 'vue-router';


export default {
  name: 'ViewItem',
  props: {
    msg: String
  },
  data() {
      return {
          Views: {}
      }
  },
  created(){
    console.log("list created");
    console.log(db);
    
    

    const route = useRoute();  
    const id = route.params.id; // read parameter id (it is reactive) 
    this.view(id);
    console.log(`페이지 :  ${id}`);

  },
  mounted(){
    document.querySelector(".header .cdt .tit").textContent = '보기';
  },
  methods:{
    async view(ids){
      const q = query(collection(db, "test"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      this.Boards = [];
      querySnapshot.forEach( doc => {
        console.log(doc.id);
        if( doc.id == ids ){
          this.Views.title = doc.data().title;
          this.Views.content = doc.data().content;
          this.Views.timestamp = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( doc.data().timestamp.toDate() ) ;
        }
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
