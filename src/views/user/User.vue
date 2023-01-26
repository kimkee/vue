<template>
  <div class="container user view">
    <main class="contents">
      <!-- {{$route.params.id}} -->
      
      <div class="user">
        <span class="pic"><img :src="$store.state.avatar[uInfo.avatar]" class="img"></span>
        <div class="info">
          <div class="post b"><b class="n">{{uInfo.bbsNum}}</b><p class="t">게시글</p></div>    
          <div class="post p"><b class="n">{{uInfo.photoNum}}</b><p class="t">사진</p></div>    
          <div class="post l"><b class="n">{{uInfo.liked}}</b><p class="t">좋아요</p></div>    
        </div>
      </div>
      <div class="desc">
        <span class="txt">{{uInfo.nick}}</span>
        <span class="txt">{{uInfo.email}}</span>
        <span class="txt">{{uInfo.bbsNum}}</span>
        <span class="txt">{{uInfo.photoNum}}</span>
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

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

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
    // Swiper,
    // SwiperSlide,
  },
  setup() {
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = (swiper) => {
    //   console.log('slide change' + swiper + this);
    // };
    // const swiper = useSwiper();
    // return {
    //   swiper,
    //   onSwiper,
    //   onSlideChange,
    //   modules: [Navigation, Pagination, Scrollbar, A11y],
    // };
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
    async view(ids) {
      const docRef = doc(db, this.dbTable, ids);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.uInfo.id = docSnap.id;
        this.uInfo.uid = docSnap.data().uid;
        this.uInfo.nick = docSnap.data().nick;
        this.uInfo.avatar = docSnap.data().avatar;
        this.uInfo.email = docSnap.data().email;
        this.uInfo.liked = docSnap.data().liked.length ;
        document.querySelector(".page.user").classList.add("load");
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
      
      ui.loading.hide();
    }
  }
}
</script>
