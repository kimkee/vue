<template>
  
    <div class="recent">
      <h1>{{ msg }}</h1> 
      <div class="board-list">
        <div class="bbs-opt">
          <div class="tots">최근 게시물 : {{Recents.length}} 개</div>
          <div class="more"><router-link class="bt" to="/list">더보기 ></router-link></div>
        </div>
        <ul class="list">
          <li v-for="recent in Recents" :key="recent.key">
              <router-link class="box" :to="{ name: 'view', params: { id: recent.key }}">
                <h4 class="tits">{{ recent.title }}</h4>
                <!-- <div class="cont">
                  <div class="text" v-html="recent.content"></div>
                </div> -->
                <div class="info">
                  <div class="keys">{{ recent.key }}</div>
                  <div class="date">{{ recent.timestamp }}</div>
                </div>
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, query, getDocs, orderBy, limit  } from "firebase/firestore";



export default {
  name: 'ListItem',
  props: {
    msg: String
  },
  data() {
      return {
          Recents: []
      }
  },
  created(){
    this.read();
    // console.log(db);
  },
  mounted(){
    
  },
  methods:{
    async read(){
      const q = query(collection(db, "test"), orderBy("timestamp", "desc") , limit(5) );
      const querySnapshot = await getDocs(q);
      this.Recents = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().title);
        this.Recents.push({
          key: doc.id,
          title: doc.data().title,
          // content: doc.data().content,
          timestamp:  new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( doc.data().timestamp.toDate() ) 
          // date:  new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'long'}).format( doc.data().date ) 
        });
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
