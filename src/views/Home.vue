<template>
  <div class="container home">
    <main class="contents">


      <div class="ui-loading-dot">
        <div class="bx">
          <em><i></i></em>
        </div>
      </div>

      <swiper class="slide"
        :modules="modules"
        :auto-height="true" :slides-per-view="1" 
        :loop="false" effect="fade"
        :space-between="10" navigation :pagination="{ clickable: true }"
        @swiper="onSwiper" @slideChangeTransitionEnd="onSlideChange">
        <swiper-slide>
          <Clock/>
        </swiper-slide>
        <swiper-slide> 
          <div class="mn-box">
            <div class="msg">
              <i class="fa-sharp fa-solid fa-cube"></i>
              <p>로그인, 가입 , 파일 업로드</p>
              <p>댓글: [읽기,쓰기, 삭제]</p>
              <p>게시글:[읽기, 쓰기, 수정, 삭제, 글자수제한]</p>
              <p>조회수, 좋아요 , 시간</p>
            </div>
            <div class="icos">
              <span class="ico" @click="sss"><img src="../../public/img/ico_vue.svg" alt=""></span>
              <span class="pls">+</span>
              <span class="ico" @click="fff"><img src="../../public/img/ico_firebase.svg" alt=""></span>
              <!-- <span class="pls">+</span>
              <span class="ico"><img src="../../public/img/ico_react.svg" alt=""></span> -->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="https://blog.logrocket.com/wp-content/uploads/2022/03/how-to-build-deploy-vue-js-app-cloud-firestore-vuefire.png" alt="">
        </swiper-slide>
      </swiper>


      <RecentPost :dbTable="{'id':'bbs',num:3}"/>
      
      
    </main>
  </div>
</template>

<script>
import RecentPost from '../components/RecentPost.vue'
import Clock from '../components/Clock.vue'
import store from '../store';

import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { onMounted } from 'vue';


export default {
  name: 'HomeItem',
  components: {
    RecentPost,
    Clock,
    Swiper,
    SwiperSlide,
  },
  props: {
    
  },
  data() {
      return {
          
      }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log('slide change  '+ swiper.$el);
      swiper.$el.forEach(element => {
        console.log(swiper.activeIndex);
        element.querySelector(".swiper-slide-active").classList.add("dfsaaaaa")
      });
    };
    const swiper = useSwiper();
    const kkk = ()=> console.log("KKK")
    onMounted(()=>{
      console.log("onMounted");
      kkk();
    });
    const fff = ()=>{
      store.dispatch('increment')
      // store.state.count ++
      console.log("Fff",store.state.count);
    }
    return {
      fff,
      swiper,
      onSwiper,
      onSlideChange,
      EffectFade,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  created(){
    ui.init();
    console.log("home created");
  },
  mounted() {
   console.table( store.state.userInfo);
  },
  methods:{
    
    sss(){
      console.log(store.state.todos);
      store.state.todos = "1111111111111111111111111111"
    }
  }
}





// document.addEventListener("DOMContentLoaded", clock.init() );




</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
