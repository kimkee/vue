<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-write">
        <ul class="list">
          <li>
            <label class="dt">제목</label>
            <div class="dd">
              <span class="input"><input type="text" id="title" placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">내용</label>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" id="content" data-ui="autoheight" placeholder="입력하세요"></textarea>
                <span class="num"><i class="i">102</i>/<b class="n">3,000</b></span>
              </span>
            </div>
          </li>
        </ul>
        <br><br>
        <div class="btn-set">
          <button type="button" class="btn" @click="write">쓰기</button>
        </div>
    </div>
    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, addDoc } from "firebase/firestore";
export default {
  name: 'WriteItem',
  props: {
    msg: String
  },
  data() {
      return {
         
      }
  },
  created(){
    
  },
  mounted(){
    document.querySelector("input#title").value = "";
    document.querySelector("textarea#content").value = "";
    document.querySelector(".header .cdt .tit").textContent = '쓰기';
  },
  methods: {
    write(){
      console.log("쓰기");
      const $title = document.querySelector("input#title");
      const $content = document.querySelector("textarea#content")
      const today = new Date();

      try {
        const docRef = addDoc(collection(db, "test"), {
          title: $title.value,
          content: $content.value,
          timestamp: today
          // date: new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'long'}).format( today )
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
