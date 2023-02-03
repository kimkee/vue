<template>
  <article class="pop-layer c pop-works" id="pop-works" ref="popLayer">
    <div class="pbd">
      <div class="phd">
        <div class="inr">
          <h1 class="ptit">{{popData.tits}}</h1>
					<button type="button" class="btn-pop-close" @click="$router.go(-1);"><i class="fa-solid fa-xmark"></i></button>
				</div>
			</div>
			<div class="pct">
        <main class="poptents">
          <div class="pbox">
            <div class="ss">
              <div class="pic">
                <img class="img" :src="'//kimkee.github.io/'+popData.imgs" alt="SS" loading="lazy">
              </div>
              <div class="pack">
                <span :class="skill[ico]" v-for="ico in popData.tech" :key="ico">{{ico}}</span>
              </div>
            </div>
            <!-- <div class="name">{{popData.tits}}</div> -->
            <div class="info"><span class="date">{{popData.date}}</span> <span class="place">{{ popData.plce }}</span></div>
          </div>
					<!-- <div class="btn-set">
						<button type="button" class="btn lg a" @click="$router.go(-1);">닫기</button>
					</div> -->
				</main>
			</div>
		</div>
	</article>
</template>

<script>
import { useRoute } from 'vue-router';
// import ui from '@/ui.js';
export default {
  name: 'WorksPop',
  components: {

  },
  props: {
    opts: Object,

  },
  data() {
    return {
      workList: this.workData,
      popData: {},
      cate: "",
      id: "",
      skill :{
        "HTML": "icotech html",
        "CSS": "icotech css",
        "SASS": "icotech css",
        "JS": "icotech js",
        "Mobile": "icotech mobile",
        "PC": "icotech pc",
        "Respond": "icotech mobile",
        "Design": "icotech design",
        "Flash": "icotech flash",
        "ActionScript": "icotech flash" ,
      }
    }
  },
  created() {
    const route = useRoute();
    this.cate = route.params.cate;
    this.id = route.params.id;
    console.log("CREATED");
    this.$watch( () => this.$route.params, (toParams, previousParams) => {
      // 라우트 변경에 대응...
      console.log(toParams, previousParams);
      !toParams ? this.view(this.cate, this.id) : null;  
      ui.lock.using(false);
    });
    
  },
  mounted() {
    
    this.$refs.popLayer.classList.add("ani");
    setTimeout(() => {
      this.$refs.popLayer.classList.add("on");
    });
    this.view(this.cate, this.id) ;
    ui.lock.using(true);
  },
  unmounted(){
    console.log("unmouted");
    setTimeout(() => {
      ui.lock.using(false);
    }, 500);
  },
  methods: {
    view(prd){
      try {
        console.log(this.opts , prd);
        console.log(this.cate, this.id);
        console.log(this.opts);
        this.popData = this.opts[this.cate][this.id];
      } catch (error) {
        this.$router.go(-1);
      }
    }
  }
}
</script>
<style>
</style>

