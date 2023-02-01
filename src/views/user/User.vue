<template>
  <div class="container user view">
    <main class="contents">
      <!-- {{$route.params.id}} -->
      <div class="profile">
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
      </div>
      
      <div class="post">
        <ul class="menu" ref="menuSlide">
          <li class="">
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
          :space-between="20" navigation 
          :observer="true"
          :observeParents="true"
          :watchOverflow="true"
          @swiper="onSwiper" 
          @init="onInit" 
          @slideChange="onSlideChange">
          <swiper-slide class="ctn b" data-val="tab_a_1">
            <div v-if="Boards.length == 0" class="nodata">
              <p><i class="fa-solid fa-message-dots"></i> 게시글이 없습니다.</p>
            </div>
            <div v-else class="board-list">
              <ul class="list">
                
                <li v-for="board in Boards" :key="board.id" :data-id="board.id" :data-uid="board.uid">
                  <router-link class="box" :to="{ name: 'bbsView', params: { id: board.id }}">
                    <div class="cont">
                      <div class="pics" v-if="board.img.length"><img class="img" :src="board.img" onerror="this.src='./img/noimage.png';"></div>
                      <div class="desc">
                        <h4 class="tits">{{ board.title }}</h4>
                        <div class="text" v-html="board.content"></div>
                      </div>
                    </div>
                    <div class="info">
                      <div class="dd">
                        <div class="hits">
                          <em><i class="fa-solid fa-comment-dots"></i> <b>{{ board.coments.length }}</b></em>
                          <em><i class="fa-solid fa-eye"></i> <b>{{ board.count }}</b></em>
                          <em><i class="fa-solid fa-heart"></i> <b>{{board.likes}}</b></em>
                        </div>
                        
                      </div>
                      <div class="dd">
                        <div class="date" v-html="board.date"></div>
                        <!-- <div class="user"><span class="pic"><img :src="$store.state.avatar[board.avatar]" alt="" class="img"></span> <span class="txt">{{board.author}}</span></div> -->
                        <div class="keys">{{ board.id }}</div>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide class="ctn p" data-val="tab_a_2">
            <div class="photo-list">
              <div v-if="Photos.length == 0" class="nodata">
                <p><i class="fa-solid fa-message-dots"></i> 게시글이 없습니다.</p>
              </div>
              <ul v-else class="list" id="dp_list">
                <!-- {{Photos}} -->
                <li v-for="board in Photos" :key="board.id" :data-id="board.id" :data-uid="board.uid">
                  <div class="box">
                    <router-link class="lk" :to="{ name: 'photoView', params: { id: board.id }}">
                      <div class="pic" v-if="board.img.length"><img class="img" loading="lazy" :src="board.img" onerror="this.src='./img/noimage.png';"></div>
                      <div class="nums" v-if="board.img.length > 1"><em><i class="fa-solid fa-images"></i></em></div>
                      <div class="info">
                        <em v-if="board.comtNum > 0"><i class="fa-solid fa-comment-dots"></i> <b>{{ board.comtNum }}</b></em>
                        <!-- <em><i class="fa-solid fa-eye"></i> <b>{{ board.count }}</b></em> -->
                        <em v-if="board.likes > 0"><i class="fa-solid fa-heart"></i> <b>{{board.likes}}</b></em>
                      </div>
                    </router-link>
                  </div>
                </li>
              </ul>
              <div class="ui-loadmore">
                <em></em>
                <button type="button" class="btn-load" @click="addItem" title="불러오기"><i class="fa-solid fa-rotate-right"></i></button>
              </div>
            </div>
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
import { collection, query, getDocs, orderBy, getDoc, doc, where } from 'firebase/firestore';
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
      Boards:[],
      Photos:[],
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
      this.swiper.update();
    });
    this.view(ids);
    this.uid = ids;
  },
  mounted() {
    // document.querySelector(".header .htit").textContent = this.uInfo.nick;
    this.gotoSlide(0);
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    gotoSlide(i,s) {
      // console.log('slide change' + i);
      this.swiper.slideTo(i,s);
      const idx = i + 1;
      this.$refs.menuSlide.querySelectorAll("li").forEach(li => li.classList.remove("active"));
      this.$refs.menuSlide.querySelector('[data-val="tab_a_'+idx+'"]').closest("li").classList.add("active");
    },
    onInit() {
      console.log('onSlideInit');
    },
    onSlideChange() {
      this.gotoSlide(this.swiper.realIndex);
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
      
      const bbs = query(collection(db, "bbs"), where("uid", "==", docSnap.id), orderBy("timestamp", "desc"));
      const pto = query(collection(db, "photo"), where("uid", "==", docSnap.id), orderBy("timestamp", "desc"));
      const bbsSnap = await getDocs(bbs);
      const ptoSnap = await getDocs(pto);
      this.uInfo.bbsNum = bbsSnap.size;
      this.uInfo.photoNum = ptoSnap.size;
      
      const nBbs = [];
      bbsSnap.forEach( (doc) => nBbs.push(doc.data()) );
      this.Boards = nBbs;

      const nPto = [];
      ptoSnap.forEach( (doc) => nPto.push(doc.data()) );
      this.Photos = nPto;

      this.gotoSlide(0,0);
      document.querySelector(".page.user").classList.add("load");
      ui.loading.hide();
    }
  }
}
</script>
