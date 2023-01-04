<template>
  <div class="container board write">
    <main class="contents">
      <div class="board-write">
        <ul class="list">
          <li>
            <label class="dt">닉네임</label>
            <div class="dd">
              <span class="input"><input type="text"  :value="$store.state.userInfo.nick" spellcheck="false" readonly placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">제목</label>
            <div class="dd">
              <span class="input"><input type="text" v-model="title" spellcheck="false" :placeholder="'입력하세요(최대'+titleMax+'글자)'"></span>
            </div>
          </li>
          <li>
            <label class="dt">내용</label>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" spellcheck="false" v-model="content" data-ui="autoheight" :placeholder="'입력하세요(최대'+contentMax+'글자)'"></textarea>
                <span class="num"><i class="i">{{contentNow}}</i>/<b class="n">{{contentMax}}</b></span>
              </span>
            </div>
          </li>
          <li>
            <label class="dt">사진</label>
            <Files ref="FileItem" :opts="{mode:'write', page:'bbs', max:5}"/>
            
          </li>
        </ul>
      </div>
    </main>
    <nav class="floatbots">
      <div class="inr">
        <div class="btsbox btn-set">
          <button type="button" class="btn" @click="$router.back()"><i class="fa-solid fa-list"></i><em>취소</em></button>
          <button type="button" class="btn" :disabled="isBtnSave ? false : true" @click="write"><i class="fa-solid fa-pen-to-square"></i><em>저장</em></button>  
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import db  from '../../firebaseConfig.js';
import { getDoc, doc, setDoc } from "firebase/firestore";
import Files from '../../components/Files.vue';
import store from '@/store';
import ui from '../../ui.js';


export default {
  name: 'WriteItem',
  props: {
    
  },
  components: {
    Files
  },
  data() {
    return {
      title:'',
      titleMax: 50,
      content:'',
      contentNow: 0,
      contentMax: new Intl.NumberFormat().format(1000),
      isBtnSave: false,
      files:[],
    }
  },
  beforeRouteEnter: (to, from, next) => {
      console.log(store.state.userInfo.stat);
      if(store.state.userInfo.stat == true) {
        return next();
      }else{
        ui.confirm("로그인 필요합니다.<br>로그인페이지로 이동하시겠습니까?",{
          ycb:()=>{ next('/signin'); },
          ccb:()=>{ },
          ybt:"예",
          nbt:"아니오",
        });
      }
  },
  watch:{
    title(){
      this.valCheck();
    },
    content(){
      this.contentNow = new Intl.NumberFormat().format(this.content.length);
      this.valCheck();
    }
  },
  created(){
    ui.init();
  },
  mounted(){
    document.querySelector("input#fileInput").value = "";
    document.querySelector(".header .htit").textContent = '글 쓰기';
  },
  methods: {
    commasDel(str){
      console.log(str);
      if (typeof str == 'number') { return; }
			return parseInt(str.replace(/,/g , ''));
		},
    valCheck(){
      if (this.title.length > 0 && this.content.length > 0) {
        this.isBtnSave = true;
      }else{
        this.isBtnSave = false;
      }
      if(this.title.length > this.titleMax ){
        console.log("내용 글자수 맥스");
        this.title = this.title.slice(0, this.titleMax);
        ui.alert("제목의 글자수는 "+this.titleMax+"자 까지 입니다.");
      }
      if(this.content.length > this.commasDel(this.contentMax) ){
        console.log("내용 글자수 맥스");
        this.content = this.content.slice(0, this.commasDel(this.contentMax));
        ui.alert("내용의 글자수는 "+this.contentMax+"자 까지 입니다.");
      }
    },
    
    async write(){
      console.log("쓰기" , this.$refs.FileItem.Files );
      const $title = this.title;
      const $content = this.content;
      const today = new Date();
      
      const docRef = doc(db, "bbs" , "count");
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) return;
      const postNum = docSnap.data().post + 1;
      console.log( postNum );
      setDoc(doc(db, "bbs" , ""+postNum), {
        title: $title,
        content: $content.replace(/\u0020/g,'&nbsp;').replace(/\n/g,'<br>'),
        timestamp: today,
        uid: store.state.userInfo.uid,
        author: store.state.userInfo.nick,
        avatar: store.state.userInfo.avatar,
        date: ui.dateForm( today ),
        count: 0,
        coments:[],
        likes:0,
        img: this.$refs.FileItem.Files || []
      }).then(()=>{
        console.log("쓰기 성공: ");
        setDoc(doc(db, "bbs" , "count"), { post: postNum }).then( ()=> { });  // count + 1
        this.$router.push('/bbs');
      }).catch (e =>{
        console.error("Error adding document: ", e);
      });
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
