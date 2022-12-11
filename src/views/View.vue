<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <!-- {{$route.params.id}} -->

      <div class="board-view">
        <div class="dt">
          <h4 class="tits">{{ Views.title }}</h4>
        </div>
        <dd class="dd">
          <p class="date">작성일 : {{ Views.timestamp }}</p>
          <div class="cont">{{ Views.content }}</div>
          
        </dd>
        
      </div>

    </main>

    <nav class="floatbots">
      <div class="inr">
        <div class="btsbox btn-set">
        <router-link class="btn" to="/list">목록</router-link>
        <router-link class="btn" :to="`/modify/${this.pram}`">수정</router-link>
        <button type="button" class="btn" @click="delpost">삭제</button>
      </div>
      </div>
    </nav>
    
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { getDoc, doc ,deleteDoc} from "firebase/firestore";
import { useRoute } from 'vue-router';

export default {
  name: 'ViewItem',
  props: {
    msg: String
  },
  data() {
      return {
          Views: {},
      }
  },
  created(){
    console.log("view created");
    console.clear();
    const route = useRoute();  
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.view(ids);
    this.pram = ids;
  },
  mounted(){
    document.querySelector(".header .cdt .htit").textContent = '보기';
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
    },
    async delpost(){
      if (confirm("이 글을 작세하시겠습니까?")) {
        await deleteDoc(doc(db, "test",  this.pram ));
        console.log("삭제 성공: ");
        this.$router.push('/list');
      }else{
        console.log("안지움 ㄷㄷㄷ");
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
