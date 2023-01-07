<template>
  <div class="container board view">
    <main class="contents">
      <!-- {{$route.params.id}} -->
      <div class="board-view">
        <div class="vcont">
          <div class="hdt">
            <div class="tits">
              <h4 class="tit">{{ Views.title }}</h4>
            </div>
            <div class="info">
              <div class="dd">
                <div class="user"><span class="pic"><img :src="$store.state.avatar[Views.avatar]" alt="" class="img"></span> <span class="txt"> {{Views.author}}</span></div>
              </div>
              <div class="dd">
                <div class="hits">
                    <em><i class="fa-solid fa-eye"></i> <b>{{ Views.count }}</b></em>
                    <em><i class="fa-solid fa-heart"></i> <b>{{Views.likes}}</b></em>
                 </div>
                <div class="date"><i class="fa-solid fa-calendar-days"></i> {{ Views.timestamp }}</div>
              </div>
            </div> 
          </div>
          <dd class="cdt">
            <div class="cont">

              <swiper class="photo" v-if="typeof Views.img == 'object'" 
                :modules="modules"
                :auto-height="true" :slides-per-view="1" 
                :space-between="10" navigation :pagination="{ clickable: true }"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="image,index in Views.img" :key="index" class="pics">
                  <img :src="image" alt="" onerror="this.src='./img/noimage.png';">
                </swiper-slide>
              </swiper>

              
              <div class="text" v-html="Views.content"></div>

            </div>


            <Vote ref="VoteItem" :opts="{dbTable:this.dbTable, param:param}"/>
          
            <div class="btsbox btn-set">
              <router-link class="btn sm" to="/bbs"><i class="fa-solid fa-list"></i><em>목록</em></router-link>
              <router-link v-if="Views.uid == $store.state.userInfo.uid" class="btn sm" :to="`/bbs/${this.param}/modify`"><i class="fa-solid fa-pen-to-square"></i><em>수정</em></router-link>
              <button v-if="Views.uid == $store.state.userInfo.uid" type="button" class="btn sm" @click="delpost"><i class="fa-solid fa-trash"></i><em>삭제</em></button>
            </div>

          </dd>
        </div>
      </div>
      <Comments :opts="{dbTable:this.dbTable}"/>


    </main>


    
  </div>
</template>

<script>
import db  from '../../firebaseConfig.js';
import Comments from '../../components/Comments.vue';
import Vote from '../../components/Vote.vue';
import { getDoc, doc ,deleteDoc ,updateDoc} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { useRoute } from 'vue-router';
import store from '../../store';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ui from '../../ui.js';
export default {
  name: 'ViewItem',
  props: {

  },
  data() {
    return {
      Views: {},
      Coments: [],
      dbTable: "bbs",
    }
  },
  components:{
    Comments,
    Vote,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log('slide change'+ swiper + this);
    };
    const swiper = useSwiper();
    return {
      swiper,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  created(){
    ui.init();
    ui.loading.show();
    const route = useRoute();  
    console.log("view created" , route.name);
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.view(ids);
    this.param = ids;
  },
  mounted(){
    document.querySelector(".header .htit").textContent = 'Board';
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

      const docRef = doc(db, this.dbTable , ids);
      try {
        const docSnap = await getDoc(docRef);

        this.Views.id = docSnap.id;
        this.Views.uid = docSnap.data().uid;
        this.Views.title = docSnap.data().title;
        this.Views.author = docSnap.data().author || "익명";
        this.Views.avatar = docSnap.data().avatar || 0;
        this.Views.content = docSnap.data().content.replace(userPatterns['url'], userReplaceFunctions['url']);
        this.Views.timestamp = ui.dateForm( docSnap.data().timestamp.toDate() ) ;
        this.Views.img = docSnap.data().img;
        this.Views.coments = docSnap.data().coments ;
        this.Views.count = docSnap.data().count ;
        this.Views.likes = docSnap.data().likes || 0 ;
        document.querySelector(".page.board.view").classList.add("load");
        const newHits = this.Views.count + 1;
        this.hits( newHits );
        setTimeout(() => {
        }, 10);
        console.table(this.Views);
      } catch(error) {
        console.log(error)
      }
      this.$refs.VoteItem.getUser();

      ui.loading.hide();
    },
    async delpost(){

      ui.confirm("이 글을 삭제하시겠습니까?",{
        ycb:()=>{
          this.Views.img.forEach( imgUrl =>{
            console.log(imgUrl);
            const storage = getStorage();
            const desertRef = ref(storage, imgUrl);
            deleteObject(desertRef).then(() => {
              console.log("파일삭제 성공 ");
            }).catch((error) => { console.log(error); });
          });
          deleteDoc(doc(db, this.dbTable, this.param ));
          console.log("삭제 성공: ");
          this.$router.push('/'+this.dbTable);
        },
        ncb:()=>{
          console.log("안지움 ㄷㄷㄷ");
        },
        ybt:"예",
        nbt:"아니오",
      });

    },
    async hits(newHits){ // 조회수
      console.log(newHits);
      const docRef = doc(db, this.dbTable, this.param );
      this.Views.count = newHits;
      await updateDoc(docRef, {
        count: newHits,
      }).then(()=>{
        console.log("조회수 UP: ",newHits , store.state.userInfo.liked );
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
