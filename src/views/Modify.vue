<template>
  <div class="container board modify">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-write">
        <ul class="list">
          <li>
            <label class="dt">제목</label>
            <div class="dd">
              <span class="input"><input type="text" spellcheck="false" placeholder="입력하세요" v-model="Views.title"></span>
            </div>
          </li>
          <li>
            <label class="dt">내용</label>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" spellcheck="false" data-ui="autoheight" placeholder="입력하세요" v-model="Views.content"></textarea>
                <!-- <span class="num"><i class="i">102</i>/<b class="n">3,000</b></span> -->
              </span>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <nav class="floatbots">
      <div class="inr">
        <div class="btsbox btn-set">
          <router-link class="btn" to="/list"><i class="fa-solid fa-list"></i><em>목록</em></router-link>
          <button type="button" class="btn" @click="modify"><i class="fa-solid fa-pen-to-square"></i><em>저장</em></button>
        </div>
      </div>
    </nav>
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
    ui.init();
    document.querySelector(".header .cdt .htit").textContent = '글 수정';
  },
  methods: {
    // 데이터 가져오기 https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko&authuser=0
    async read(ids){
      const docRef = doc(db, "bbs" , ids);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.Views.title = docSnap.data().title;
        this.Views.content = docSnap.data().content.replace(/<br>/ig, '\n');
        this.Views.timestamp = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( docSnap.data().timestamp.toDate() ) ;
      }else{
        console.log("No such document!");
      }      
    }
    ,
    async modify(){
      // 데이터 수정 https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0
      const $title = this.Views.title;
      const $content = this.Views.content
      console.log("수정" + this.pram);
      const docRef = doc(db, "bbs", this.pram );
      await updateDoc(docRef, {
        title: $title,
        content: $content.replace(/\n/g,'<br>'),
      }).then(()=>{
        console.log("수정 성공: ");
        this.$router.push('/view/'+this.pram);
      }).catch (e =>{
        console.error("Error adding document: ", e);
      });
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
