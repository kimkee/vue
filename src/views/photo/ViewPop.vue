<template>
  <article class="pop-layer a bottom popup photo view" ref="popLayer">
    <div class="pbd">
      <button type="button" class="btn-pop-close" @click="$router.go(-1);"><i class="fa-regular fa-xmark"></i></button>
      <!--       
      <div class="phd">
        <div class="inr">
          <h1 class="ptit">{{popData.tits}}</h1>
          <button type="button" class="btn-pop-close" @click="$router.go(-1);"><i class="fa-regular fa-xmark"></i></button>
        </div>
      </div> -->
      <div class="pct">
        <main class="poptents">
          <div class="ut-photo-slide">
            <!--   -->
            <swiper class="slides" v-if="typeof Pic.img == 'object'"
                :wrapperTag="ul"
                :tag="li"
                :modules="modules"
                :slides-per-view="auto" 
                :observer="true"
                :observeParents="true"
                :watchOverflow="true"
                :watchSlidesProgress="true"
                :auto-height="true"
                :preloadImages="true"
                :loop="Pic.img.length > 1 ? false : false"
                :initialSlide="num"
                :zoom="{ maxRatio: 2}"
                :lazy="{ loadPrevNext: true }"
                :space-between="0" navigation :pagination="{ clickable: true ,type:'fraction'}"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide  class="box" v-for="image,index in Pic.img" :key="index">
                  <div class="item">
                    <div class="pic swiper-zoom-container">
                      <img class="img swiper-lazy" :src="image" alt="" onerror="this.src='./img/noimage.png';" loading="lazy">
                      <!-- <div class="swiper-lazy-preloader"><i class="fa-regular fa-loader"></i></div> -->
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
          </div>
        </main>
      </div>
    </div>
  </article>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { getDoc, doc} from 'firebase/firestore';
import { useRoute } from 'vue-router';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
// import ui from '@/ui.js';
export default {
  name: 'PhotoViewPop',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    opts: Object,
    baseURL: String,
  },
  data() {
    return {
      Pic: {},
      id: "",
      num: "",
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
      
      const route = useRoute();
      const sidx = parseInt(route.params.num)+1;      
      console.log(sidx);
      swiper.slideTo(sidx,0);
    };
    const onSlideChange = (swiper) => {
      console.log("slide change == " + swiper );
    };
    const swiper = useSwiper();
    // swiper.slideTo(this.num);
    return {
      swiper,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  created() {
    const route = useRoute();
    this.id = route.params.id;
    this.num = route.params.num;

    console.log("CREATED" ,this.id , this.num);

    this.$watch( () => this.$route.params, (toParams, previousParams) => {
      // 라우트 변경에 대응...
      console.log(toParams, previousParams);
      !toParams ? this.view(this.id, this.num) : null;  
      ui.lock.using(false);
    });
    
  },
  mounted() {
    
    this.$refs.popLayer.classList.add("ani");
    setTimeout(() => {
      this.$refs.popLayer.classList.add("on");
      this.size();
    });
    this.view(this.id, this.num) ;
    ui.lock.using(true);
  },
  unmounted(){
    console.log("unmouted");
    setTimeout(() => {
      ui.lock.using(false);
    }, 500);
  },
  methods: {
    size(){
      let $pop =  this.$refs.popLayer;
      let pctnH =  $pop.offsetHeight || 0;
      let pbtnH =  $pop.querySelector(".pbt")?.offsetHeight || 0 ;
      let phtnH =  $pop.querySelector(".phd")?.offsetHeight || 0 ;
      pctnH = (pctnH - phtnH) || 0 ;
      console.log(pctnH  );
      $pop.querySelector(".pct").style.height = pctnH - pbtnH+"px" ; 

      
    },
    async view(id, num){
      console.log(id , num);
      const docRef = doc(db, this.opts.dbTable, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.Pic.id = docSnap.id;
        this.Pic.img = docSnap.data().img;
      } else {
        console.log("No such document!");
      }
      console.table(this.Pic , this.num);
      
    }
  }
}
</script>
<style>
</style>

