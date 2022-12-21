<template>
  <div class="container board write">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      <div class="board-write">
        <ul class="list">
          <li>
            <label class="dt">제목</label>
            <div class="dd">
              <span class="input"><input type="text" v-model="Views.title" spellcheck="false" placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">이름</label>
            <div class="dd">
              <span class="input"><input type="text"  :value="$store.state.userInfo.nick" spellcheck="false" readonly placeholder="입력하세요"></span>
            </div>
          </li>
          <li>
            <label class="dt">내용</label>
            <div class="dd">
              <span class="textarea">
                <textarea class="reply" spellcheck="false" v-model="Views.content" data-ui="autoheight" placeholder="입력하세요"></textarea>
                <!-- <span class="num"><i class="i">102</i>/<b class="n">3,000</b></span> -->
              </span>
            </div>
          </li>
          <li>
            <label class="dt">사진</label>
            <div class="dd">
              <span class="input"><input type="file" id="fileInput" accept="image/*" placeholder="선택하세요"></span>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <nav class="floatbots">
      <div class="inr">
        <div class="btsbox btn-set">
          <router-link class="btn" to="/list"><i class="fa-solid fa-list"></i><em>목록</em></router-link>
          <button type="button" class="btn" @click="write"><i class="fa-solid fa-pen-to-square"></i><em>저장</em></button>  
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, addDoc  } from "firebase/firestore";
// import { doc, setDoc  } from "firebase/firestore";
import { getStorage, ref,uploadBytes ,getDownloadURL  } from "firebase/storage";
import store from '@/store';

export default {
  name: 'WriteItem',
  props: {
    msg: String
  },
  data() {
      return {
        Views:{}
      }
  },
  created(){
    
  },
  mounted(){
    ui.init();
    document.querySelector("input#fileInput").value = "";
    document.querySelector(".header .cdt .htit").textContent = '글 쓰기';
  },
  methods: {
    dateForm(d){
      return new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'medium', timeStyle: 'medium'}).format( d )
    },
    async write(){
      console.log("쓰기");
      const $title = this.Views.title;
      const $content = this.Views.content;
      const $fileInput = document.querySelector("input#fileInput");
      const today = new Date();
      let imgUrl = "";
      /* 업로드  */
      const storage = getStorage();
      // const mountainsRef = ref(storage, $fileInput.files[0].name);
      /* const metadata = {
        contentType: 'image/jpeg',
      }; */
      console.log($fileInput.files[0]);
      if ($fileInput.files[0]) {
        const filename = $fileInput.files[0].name;
        const storageRef = ref(storage, "images/"+filename);

        uploadBytes( storageRef , $fileInput.files[0] ).then((snapshot) => {
          console.log('Uploaded a blob or file!',storageRef.fullPath , snapshot);
        });
        
        await getDownloadURL(ref(storage, "images/"+filename))
        .then((url) => {
          imgUrl = url;
          console.log(imgUrl);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      
      // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0
      // const docRef = await setDoc(doc(db, "bbs"), {
      const docRef = await addDoc(collection(db, "bbs"), {
        title: $title,
        content: $content.replace(/\n/g,'<br>'),
        timestamp: today,
        uid: store.state.userInfo.uid,
        author: store.state.userInfo.nick,
        avatar: store.state.userInfo.avatar,
        date: this.dateForm( today ),
        count: 0,
        coments:[],
        img: imgUrl
      }).then(()=>{
        console.log("쓰기 성공: ");
        this.$router.push('/list');
      }).catch (e =>{
        console.error("Error adding document: ", e);
      });
      docRef
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
