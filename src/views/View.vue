<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <!-- {{$route.params.id}} -->

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
          <router-link class="btn sm" to="/list">수정</router-link>
          <router-link class="btn sm" to="/list">삭제</router-link>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { getDoc, doc } from "firebase/firestore";
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
    console.log("view created");
    console.clear();
    const route = useRoute();  
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.view(ids);
  },
  mounted(){
    document.querySelector(".header .cdt .tit").textContent = '보기';
  },
  methods:{
    async view(ids){
      const docRef = doc(db, "test" , ids);
      try {
        const docSnap = await getDoc(docRef);
        console.log(`
          제목 : ${docSnap.data().title} 
          내용 : ${docSnap.data().content}
        `);

        this.Views.title = docSnap.data().title;
        this.Views.content = docSnap.data().content;
        this.Views.timestamp = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( docSnap.data().timestamp.toDate() ) ;
      } catch(error) {
        console.log(error)
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
