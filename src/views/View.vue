<template>
  <div class="container board view">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <!-- {{$route.params.id}} -->

      <div class="board-view">
        <div class="dt">
          <h4 class="tits">{{ Views.title }}</h4>
        </div>
        <dd class="dd">
          <p class="date">작성일 : {{ Views.timestamp }}</p>
          <div class="cont" v-html="Views.content"></div>
          
        </dd>
        
      </div>

    </main>

    <nav class="floatbots">
      <div class="inr">
        <div class="btsbox btn-set">
          <router-link class="btn" to="/list"><i class="fa-solid fa-list"></i><em>목록</em></router-link>
          <router-link class="btn" :to="`/modify/${this.pram}`"><i class="fa-solid fa-pen-to-square"></i><em>수정</em></router-link>
          <button type="button" class="btn" @click="delpost"><i class="fa-solid fa-trash"></i><em>삭제</em></button>
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
    const route = useRoute();  
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.view(ids);
    this.pram = ids;
  },
  mounted(){
    ui.init();
    document.querySelector(".header .cdt .htit").textContent = '보기';
  },
  methods:{
    async view(ids){


      const userPatterns = {
        'email' : /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
        'url'   : /(?:(?:(https?|ftp|telnet):\/\/|[\s\t\r\n\[\]\`\<\>\"\'])((?:[\w$\-_\.+!*\'\(\),]|%[0-9a-f][0-9a-f])*\:(?:[\w$\-_\.+!*\'\(\),;\?&=]|%[0-9a-f][0-9a-f])+\@)?(?:((?:(?:[a-z0-9\-가-힣]+\.)+[a-z0-9\-]{2,})|(?:[\d]{1,3}\.){3}[\d]{1,3})|localhost)(?:\:([0-9]+))?((?:\/(?:[\w$\-_\.+!*\'\(\),;:@&=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f][0-9a-f])+)*)(?:\/([^\s\/\?\.:<>|#]*(?:\.[^\s\/\?:<>|#]+)*))?(\/?[\?;](?:[a-z0-9\-]+(?:=[^\s:&<>]*)?\&)*[a-z0-9\-]+(?:=[^\s:&<>]*)?)?(#[\w\-]+)?)/gmi
      }
      // userPatterns

      var userReplaceFunctions = {
        'email': function(_email){return '<a href="mailto:' + _email + '">'+ _email +'</a>'},
        'url'  : function(_url){return '<a href="' + _url + '" target="_blank">'+ _url +'</a>'}
      }
      // userReplaceFunctions




      const docRef = doc(db, "test" , ids);
      try {
        const docSnap = await getDoc(docRef);
        console.log(`제목 : ${docSnap.data().title} || 내용 : ${docSnap.data().content}`);

        this.Views.title = docSnap.data().title;
        this.Views.content = docSnap.data().content.replace(userPatterns['url'], userReplaceFunctions['url']);
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

</style>
