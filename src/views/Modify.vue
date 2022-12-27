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
            <label class="dt">이름</label>
            <div class="dd">
              <span class="input"><input type="text"  :value="$store.state.userInfo.nick" spellcheck="false" readonly placeholder="입력하세요"></span>
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
          <li>
            <label class="dt">사진</label>
            <Files ref="files" :max="this.max"/>
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
import Files from '../components/Files.vue';
import { useRoute } from 'vue-router';
import { getStorage, ref,uploadBytes ,getDownloadURL, deleteObject   } from "firebase/storage";
import store from '@/store';
export default {
  name: 'ModifyItem',
  props: {
    msg: String
  },
  components: {
    Files
  },
  data() {
    return {
      Views: {},
      files:[],
      max:5,
    }
  },
  created(){
    ui.init();
    const route = useRoute();  
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.read(ids);
    this.pram = ids;
  },
  mounted(){
    document.querySelector(".header .htit").textContent = '글 수정';
    
  },
  methods: {
    // 데이터 가져오기 https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko&authuser=0
    async read(ids){
      const docRef = doc(db, "bbs" , ids);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.Views.uid = docSnap.data().uid;
        this.Views.title = docSnap.data().title;
        this.Views.img = docSnap.data().img;
        this.Views.content = docSnap.data().content.replace(/<br>/ig, '\n').replace(/&nbsp;/g,'\u0020');
        this.Views.timestamp = new Intl.DateTimeFormat('ko-KR',{ dateStyle: 'full', timeStyle: 'medium'}).format( docSnap.data().timestamp.toDate() ) ;
        this.files = this.Views.img;
        console.log(this.files);
        // this.$refs.files.items = this.files;
        this.$refs.files.itemSet(this.files);
    
        console.log(this.Views.uid , store.state.userInfo.uid);
        if(this.Views.uid != store.state.userInfo.uid){
          console.log("내글 아님");
          // alert("내글 아님")
          this.$router.push('/');
          return
        }
      }else{
        console.log("No such document!");
      }
    },
    async fileAdd(){
      const $fileInput = document.querySelector("input#fileInput");
      /* 업로드  */
      // let imgUrl = [];
      if (this.files.length > this.max) {
        alert("d")
      }
      let fileList = "";
      const storage = getStorage();
      console.log($fileInput.files[0]);
      if ($fileInput.files[0]) {
        const filename = $fileInput.files[0].name;
        const storageRef = ref(storage, "images/"+filename);
        await uploadBytes( storageRef , $fileInput.files[0] ).then((snapshot) => {
          console.log('Uploaded a blob or file!',storageRef.fullPath , snapshot);
        });
        await getDownloadURL(ref(storage, "images/"+filename))
        .then((url) => {
          this.files.push(url);
          console.log(this.files , this.$refs);
          this.$refs.files.itemSet(this.files);
          const docRef = doc(db, "bbs", this.pram );
          updateDoc(docRef, { img: this.files }).then(()=>{ this.Views.img = this.files }).catch (e =>{ console.error(e); });
          this.fileList = fileList;
          $fileInput.value = '';
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    async fileDel(index){
      console.log(this.files[index]);
      if ( confirm("첨부한 파일을 삭제하시겠습니까?") ) {
        const storage = getStorage();
        console.log(this.files[index]);
        const desertRef = ref(storage, this.files[index]);
        const docRef = doc(db, "bbs", this.pram );
        await deleteObject(desertRef).then(() => {
          console.log("파일삭제 성공 ");
          this.files.splice(index, 1);
          this.$refs.files.itemSet(this.files);
          updateDoc(docRef, { img: this.files }).then(()=>{ this.Views.img = this.files }).catch (e =>{ console.error(e); });
        }).catch((error) => { console.log(error); });
      }else{
        return
      }
    },
    
    async modify(){
      const $title = this.Views.title;
      const $content = this.Views.content
      const $fileInput = document.querySelector("input#fileInput");
      console.log("수정" + this.pram);
      
      /* 업로드  */
      const storage = getStorage();
      console.log($fileInput.files[0]);
      let imgUrl = "";
      if ($fileInput.files[0] != undefined) {
        const filename = $fileInput.files[0].name;
        const storageRef = ref(storage, "images/"+filename);
        await uploadBytes( storageRef , $fileInput.files[0] ).then((snapshot) => {
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

      // 데이터 수정 https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0

      const docRef = doc(db, "bbs", this.pram );
      await updateDoc(docRef, {
        title: $title,
        content: $content.replace(/\u0020/g,'&nbsp;').replace(/\n/g,'<br>'),
        uid: store.state.userInfo.uid,
        author: store.state.userInfo.nick,
        avatar: store.state.userInfo.avatar,
        img: imgUrl || this.Views.img
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
