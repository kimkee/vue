<template>
  <div class="container board view">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <!-- {{$route.params.id}} -->
      <div class="board-view">
        <div class="ui-loading-dot">
          <div class="bx"><em><i></i></em></div>
        </div>
          <div class="vcont">
          <div class="hdt">
            <div class="tits">
              <h4 class="tit">{{ Views.title }}</h4>
            </div>
            <div class="info">
              <div class="dd">
                <div class="user"><i class="fa-solid fa-user"></i> {{Views.author}}</div>
              </div>
              <div class="dd">
                <div class="hits">
                    <em><i class="fa-solid fa-eye"></i> <b>0</b></em>
                    <em><i class="fa-solid fa-heart"></i> <b>0</b></em>
                 </div>
                <div class="date"><i class="fa-solid fa-calendar-days"></i> {{ Views.timestamp }}</div>
              </div>
            </div>
          </div>
          <dd class="cdt">
            <div class="cont">
              
              <div v-if="Views.img" class="pics"><img :src="Views.img" alt="" onerror="this.src='./img/noimage.png';"></div>
              
              <div class="text" v-html="Views.content"></div>

              <div class="vote">
                <button type="button" class="bt-vote">
                  <i class="fa-solid fa-heart"></i>
                  <p>좋아요</p>
                </button>
              </div>
            </div>
          
            <div class="btsbox btn-set">
              <router-link class="btn sm" to="/list"><i class="fa-solid fa-list"></i><em>목록</em></router-link>
              <router-link class="btn sm" :to="`/modify/${this.pram}`"><i class="fa-solid fa-pen-to-square"></i><em>수정</em></router-link>
              <button type="button" class="btn sm" @click="delpost"><i class="fa-solid fa-trash"></i><em>삭제</em></button>
            </div>
          </dd>
        </div>
      </div>
      
      <Comments :userstate="userstate" :userInfo="this.userInfo"/>


    </main>


    
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import Comments from '../components/Comments.vue'
import { getDoc, doc ,deleteDoc} from "firebase/firestore";
import { useRoute } from 'vue-router';

export default {
  name: 'ViewItem',
  props: {
    msg: String,
    userstate: String,
    userInfo: Object
  },
  data() {
      return {
          Views: {},
          Coments: [],
      }
  },
  components:{
    Comments
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
    document.querySelector(".header .cdt .htit").textContent = '';
  },
  methods:{
    dateForm(d){
      return new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'medium', timeStyle: 'medium'}).format( d )
    },
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

      const docRef = doc(db, "bbs" , ids);
      try {
        const docSnap = await getDoc(docRef);

        this.Views.title = docSnap.data().title;
        this.Views.author = docSnap.data().author || "익명";
        this.Views.content = docSnap.data().content.replace(userPatterns['url'], userReplaceFunctions['url']);
        this.Views.timestamp = this.dateForm( docSnap.data().timestamp.toDate() ) ;
        this.Views.img = docSnap.data().img;
        this.Views.coments = docSnap.data().coments ;
        document.querySelector(".board-view").classList.add("load");
      } catch(error) {
        console.log(error)
      }
    },
    async delpost(){
      if (confirm("이 글을 작세하시겠습니까?")) {
        await deleteDoc(doc(db, "bbs",  this.pram ));
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
