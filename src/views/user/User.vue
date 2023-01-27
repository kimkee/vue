<template>
  <div class="container user view">
    <main class="contents">
      <!-- {{$route.params.id}} -->
      
      <div class="user">
        <span class="pic"><img :src="$store.state.avatar[uInfo.avatar]" class="img"></span>
        <div class="info">
          <div class="num b"><b class="n">{{uInfo.bbsNum}}</b><p class="t">게시글</p></div>    
          <div class="num p"><b class="n">{{uInfo.photoNum}}</b><p class="t">사진</p></div>    
          <div class="num l"><b class="n">{{uInfo.liked}}</b><p class="t">좋아요</p></div>    
        </div>
      </div>
      <div class="desc">
        <span class="txt"><i class="fa-solid fa-calendar-days"></i> 가입 : {{uInfo.date}}</span>
        <span class="txt"><i class="fa-solid fa-envelope"></i> {{uInfo.email}}</span>
      </div>
      
      <div class="post">
        <ul class="menu" ref="menuSlide">
          <li class="active">
            <a class="bt" @click="gotoSlide(0)" data-val="tab_a_1" href="javascript:;"><span><i class="fa-solid fa-list"></i></span></a>
          </li>
          <li>
            <a class="bt" @click="gotoSlide(1)" data-val="tab_a_2" href="javascript:;"><span><i class="fa-solid fa-camera"></i></span></a>
          </li>
          <li>
            <a class="bt" @click="gotoSlide(2)" data-val="tab_a_3" href="javascript:;"><span><i class="fa-solid fa-heart"></i></span></a>
          </li>
        </ul>
        <swiper class="pctn"
          ref="swiperRef"
          :modules="modules"
          :auto-height="true" :slides-per-view="1" 
          :space-between="0" navigation 
          
          @swiper="onSwiper" @slideChange="onSlideChange" @slideChangeTransitionEnd="onSlideChangeTransitionEnd">
          <swiper-slide class="ctn b" data-val="tab_a_1">
            BBS
          </swiper-slide>
          <swiper-slide class="ctn p" data-val="tab_a_2">
            PHOTO
          </swiper-slide>
          <swiper-slide class="ctn l" data-val="tab_a_3">
            LIKE
          </swiper-slide>
        </swiper>
      </div>
      

    </main>
    
  </div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
// import Comments from '@/components/Comments.vue';
// import Vote from '@/components/Vote.vue';
import { collection, query, getDocs, getDoc, doc, where } from 'firebase/firestore';
// import { getStorage, ref, deleteObject } from 'firebase/storage';
import { useRoute } from 'vue-router';
// import store from '@/store';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';  //, useSwiper
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
      uid: String,
      uInfo:{},
      dbTable: 'member',
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = (swiper) => {
    //   console.log('slide change' + swiper.realIndex);
    //   console.log(swiper.realIndex, swiper.$el[0].querySelector(".swiper-slide-active").getAttribute("data-val") );
    // };
    // const swiper = useSwiper();
    // const gotoSlide = (index , swiper)=>{
    //   const swiperRef = ref();
    //   const slides = this.$refs.swiperRef.value.swiper
    //   console.log(slides);
    //   console.log( index ,  event.currentTarget );
    //   swiper.slideTo(index);
    // }
    return {
      // swiper,
      // onSwiper,
      // onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      // gotoSlide,
    };
  },
  created() {
    ui.init();
    ui.loading.show();
    console.log("view created");
    const route = useRoute();
    const ids = route.params.id; // read parameter id (it is reactive) 
    this.$watch( () => this.$route.params, (toParams, previousParams) => {
      // 라우트 변경에 대응...
      console.log(toParams, previousParams);
      (route.name == "user") ? this.view(toParams.id) : null;
    });
    this.view(ids);
    this.uid = ids;
  },
  mounted() {
    // document.querySelector(".header .htit").textContent = this.uInfo.nick;
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      this.swiper.slideTo(0);
    },
    gotoSlide(i) {
      this.swiper.slideTo(i);
    },
    onSlideChangeTransitionEnd() {
      console.log('slide change' + this.swiper.realIndex);
      console.log(this.swiper.realIndex, this.swiper.$el[0].querySelector(".swiper-slide-active").getAttribute("data-val") );
      const idx = this.swiper.realIndex + 1;
      this.$refs.menuSlide.querySelectorAll("li").forEach(li => li.classList.remove("active"));
      this.$refs.menuSlide.querySelector('[data-val="tab_a_'+idx+'"]').closest("li").classList.add("active");

    },
    async view(ids) {
      const docRef = doc(db, this.dbTable, ids);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.uInfo.id = docSnap.id;
        this.uInfo.uid = docSnap.data().uid;
        this.uInfo.nick = docSnap.data().nick;
        this.uInfo.avatar = docSnap.data().avatar;
        this.uInfo.email = docSnap.data().email;
        this.uInfo.date = ui.dateForm( docSnap.data().date.toDate() );
        this.uInfo.liked = docSnap.data().liked.length ;
        
        document.querySelector(".header .htit").textContent = this.uInfo.nick;
        
      } else {
        console.log("No such document!");
      }
      const bbs = query(collection(db, "bbs"), where("uid", "==", docSnap.id));
      const photo = query(collection(db, "photo"), where("uid", "==", docSnap.id));
      const bbsSnap = await getDocs(bbs);
      const photoSnap = await getDocs(photo);
      console.log(bbsSnap.size);
      this.uInfo.bbsNum = bbsSnap.size;
      this.uInfo.photoNum = photoSnap.size;
      bbsSnap.forEach( (doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      document.querySelector(".page.user").classList.add("load");
      ui.loading.hide();
    }
  }
}
</script>
