<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-write">
        <ul class="list">
          <li>
            <label class="dt">제목</label>
            <div class="dd">
              <span class="input"><input type="text" id="title" placeholder="입력하세요" :value="Views.title"></span>
            </div>
          </li>
          <li>
            <label class="dt">내용</label>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" id="content" data-ui="autoheight" placeholder="입력하세요" v-model="Views.content"></textarea>
                <!-- <span class="num"><i class="i">102</i>/<b class="n">3,000</b></span> -->
              </span>
            </div>
          </li>
        </ul>
        <div class="btn-set">
          <router-link class="btn sm" to="/list">목록</router-link>
          <button type="button" class="btn sm" @click="modify">수정</button>
        </div>
    </div>
    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { getDoc, doc , updateDoc } from "firebase/firestore";
import { useRoute } from 'vue-router';
export default {
  name: 'ModifyItem',
  props: {
    msg: String
  },
  data() {
    return {
          Views: {}
      }
  },
  created(){
    const route = useRoute();  
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.read(ids);
    this.pram = ids;
  },
  mounted(){
    document.querySelector(".header .cdt .tit").textContent = '글 수정';
  },
  methods: {

    async read(ids){
      const docRef = doc(db, "test" , ids);
      try {
        const docSnap = await getDoc(docRef);
        // console.log(`
        //   제목 : ${docSnap.data().title} 
        //   내용 : ${docSnap.data().content}
        // `);

        this.Views.title = docSnap.data().title;
        this.Views.content = docSnap.data().content;
        this.Views.timestamp = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( docSnap.data().timestamp.toDate() ) ;
      } catch(error) {
        console.log(error)
      }
    }
    ,
    async modify(){
      console.log("수정");
      const $title = document.querySelector("input#title");
      const $content = document.querySelector("textarea#content")

      try {
        console.log(this.pram);
        const thisDoc = doc(db, "test", this.pram );

        await updateDoc(thisDoc, {
          title: $title.value,
          content: $content.value,
        });
        console.log("수정 성공: ");
        this.$router.push('/view/'+this.pram);
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
