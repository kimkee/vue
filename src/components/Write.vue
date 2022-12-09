<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <ul>
        <li>
          <label class="form-label">제목</label>
          <input type="text" class="form-control" id="title" required>
        </li>
        <li>
          <label class="form-label">내용</label>
          <input type="text" class="form-control" id="content" required>
        </li>
      </ul>

      <button type="button" @click="write">쓰기</button>
    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore";
export default {
  name: 'Write',
  props: {
    msg: String
  },
  data() {
      return {
         
      }
  },
  methods: {
    write(){
      console.log("쓰기");
      try {
        const today = new Date();
        const docRef = addDoc(collection(db, "test"), {
          title: document.querySelector("input#title").value,
          content: document.querySelector("input#content").value,
          date: new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'long'}).format( today )
        });
        console.log("쓰기 성공: ", docRef.title ,docRef.content , docRef);
        this.$router.push('/list');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
