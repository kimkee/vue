<template>
  <div class="container photo view">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" ref="popup" :opts="{dbTable}"  />
      </transition>
    </router-view>
    <main class="contents">
      <!-- {{$route.params.id}} -->
      <div class="photo-view">
        <div class="vcont">
          <div class="hdt">
            
          </div>
          <dd class="cdt">
            <div class="cont">

              <swiper class="photo" ref="photoSlide" v-if="typeof Views.img == 'object'" 
                :modules="modules"
                :auto-height="true" 
                :slides-per-view="1" 
                :observer="true"
                :observeParents="true"
                :watchOverflow="true"
                :preloadImages="false"
                :lazy="true"
                :loop="true"
                :space-between="0" navigation :pagination="{ clickable: true }"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="image,index in Views.img" :key="index">
                  <router-link :to="{ name: 'photoPop', params: { num :index }}" class="box">
                    <div class="pic">
                      <img class="img swiper-lazy" :src="image" alt="" onerror="this.src='./img/noimage.png';" loading="lazy">
                      <div class="swiper-lazy-preloader"><i class="fa-regular fa-loader"></i></div>
                    </div>
                  </router-link>
                </swiper-slide>
              </swiper> 
              
            </div> 
            <div class="info">
              <div class="dd">
                <router-link class="user" :to="`/user/${Views.uid}`">
                  <span class="pic"><img :src="$store.state.avatar[Views.avatar]" alt="" class="img"></span>
                  <span class="txt"> {{Views.author}}</span>
                </router-link>
              </div>
              <div class="dd">
                <div class="hits">
                    <em><i class="fa-regular fa-eye"></i> <b>{{ Views.count }}</b></em>
                    <em><i class="fa-regular fa-heart"></i> <b>{{Views.likes}}</b></em>
                </div>
                <div class="date"><i class="fa-regular fa-calendar-days"></i> {{ Views.timestamp }}</div>
              </div>
              
            </div>
            <div class="text" v-html="Views.content"></div>

            
          </dd>
          <Vote ref="VoteItem" :opts="{dbTable:dbTable, param:param}"/>
        
          <div class="btsbox btn-set">
            <router-link class="btn sm" to="/photo"><i class="fa-regular fa-list"></i><em>목록</em></router-link>
            <router-link v-if="Views.uid == $store.state.userInfo.uid" class="btn sm" :to="`/photo/${this.param}/modify`"><i class="fa-regular fa-pen-to-square"></i><em>수정</em></router-link>
            <button v-if="Views.uid == $store.state.userInfo.uid" type="button" class="btn sm" @click="delpost"><i class="fa-regular fa-trash"></i><em>삭제</em></button>
          </div>
        </div>
      </div>
      
      <Comments :opts="{dbTable:dbTable}"/>

    </main>
    
  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import Comments from '@/components/Comments.vue';
import Vote from '@/components/Vote.vue';
import { useRoute } from 'vue-router';
import store from '@/store';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ui from '@/ui.js';
export default {
  name: 'ViewItem',
  props: {

  },
  data() {
    return {
      Views: {},
      Coments: [],
      dbTable: "photo",
      transitionName: "",
    }
  },
  components: {
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
      console.log('slide change' + swiper + this);
    };
    const swiper = useSwiper();
    return {
      swiper,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  created() {
    ui.init();
    document.querySelector(".header .htit").textContent = 'Photo';
    document.querySelector(".header").classList.add('trans');
    ui.loading.show();
    console.log("view created");
    const route = useRoute();
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.$watch( () => this.$route.params, (toParams, previousParams) => {
      // 라우트 변경에 대응...
      console.log(toParams, previousParams);
      (route.name == "photoView") ? this.view(toParams.id) : null;
    });
    this.view(ids);
    this.param = ids;
  },
  watch:{
    '$route'(to,from){
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-out' : 'slide-in';
      console.log(this.transitionName);
      // this.$refs.popup.$refs.popLayer.classList.add("ani");
    }
  },
  mounted() {

  },
  unmounted(){
    document.querySelector(".header").classList.remove('trans');
  },
  methods: {
    async view(ids) {
      const docRef = doc(db, this.dbTable, ids);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.Views.id = docSnap.id;
        this.Views.uid = docSnap.data().uid;
        this.Views.title = docSnap.data().title;
        this.Views.author = docSnap.data().author || "익명";
        this.Views.avatar = docSnap.data().avatar || 0;
        this.Views.content = docSnap.data().content.replace(ui.rex.pattern['url'], ui.rex.replace['url']).replace(ui.rex.pattern['hash'], ui.rex.replace['hash']);
        this.Views.timestamp = ui.dateForm(docSnap.data().timestamp.toDate());
        this.Views.img = docSnap.data().img;
        this.Views.coments = docSnap.data().coments;
        this.Views.count = docSnap.data().count;
        this.Views.likeUsr = [...new Set(docSnap.data().likeUsr || [])];
        this.Views.likes = this.Views.likeUsr.length || 0;
        document.querySelector(".page.view").classList.add("load");
        const newHits = this.Views.count + 1;
        this.hits(newHits);
      } else {
        console.log("No such document!");
      }
      console.table(this.Views);
      this.$refs.VoteItem.getUser();
      ui.loading.hide();
    },
    async delpost() {
      ui.confirm("이 글을 삭제하시겠습니까?", {
        ycb: () => {
          this.Views.img.forEach(imgUrl => {
            console.log(imgUrl);
            const storage = getStorage();
            const desertRef = ref(storage, imgUrl);
            deleteObject(desertRef).then(() => {
              console.log("파일삭제 성공 ");
            }).catch((error) => { console.log(error); });
          });
          deleteDoc(doc(db, this.dbTable, this.param));
          this.postMinus();
          console.log("삭제 성공: ");
          this.$router.push('/' + this.dbTable);
        },
        ncb: () => {
          console.log("안지움 ㄷㄷㄷ");
        },
        ybt: "예",
        nbt: "아니오",
      });

    },
    async postMinus (){
      // 게시글 숫자 내리기
      const docRef = doc(db, this.dbTable, "count");
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return;
      const postNum = docSnap.data().post - 1;
      updateDoc(docRef, {
        post: postNum,
      }).then(() => {
        console.log("조회수 UP: ");
      }).catch(e => {
        console.error("Error adding document: ", e);
      });
      // 게시글 숫자 내리기
    },
    async hits(newHits) { // 조회수
      console.log(newHits);
      const docRef = doc(db, this.dbTable, this.param);
      this.Views.count = newHits;
      await updateDoc(docRef, {
        count: newHits,
      }).then(() => {
        console.log("조회수 UP: ", newHits, store.state.userInfo.liked);
      }).catch(e => {
        console.error("Error adding document: ", e);
      });
    },
  }
}
</script>
