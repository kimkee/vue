<template>
  <div class="container work">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" ref="popup" :opts="workData" :baseURL="baseURL"/>
      </transition>
    </router-view>

    <main class="contents">

      <!-- <p>{{workData.update}}</p> -->

      <div class="work-list">
        <div class="hdts"><h3 class="title"><i class="fa-regular fa-window-restore"></i> UI/UX Development</h3></div>
        <ul class="wlst">
          <li v-for="(item, index) in workData.puix" :key="index">
            <router-link :to="{ name: 'worksPop', params: { cate: 'puix', id :index }}" class="box">
              <div class="hdt">
                <h4 class="tits">{{item.tits}}</h4>
              </div>
              <div class="cdt">
                <div class="pics"><img :src="baseURL+item.imgs" class="img" alt="" loading="lazy"></div>
                <div class="tech">
                  <span class="ico" v-for="ico in workData.puix[index].tech" :key="ico">{{ico}}</span>
                </div>
              </div>
              <div class="date"><i class="fa-regular fa-calendar-days"></i> <span>{{item.date}}</span></div>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="work-list">
        <div class="hdts"><h3 class="title"><i class="fa-regular fa-compass-drafting"></i> Web Design &amp; UI/UX Development</h3></div>
        <ul class="wlst">
          <li v-for="(item, index) in workData.pdeg" :key="index">
            <router-link :to="{ name: 'worksPop', params: { cate: 'pdeg', id :index }}" class="box">
              <div class="hdt">
                <h4 class="tits">{{item.tits}}</h4>
              </div>
              <div class="cdt">
                <div class="pics"><img :src="baseURL+item.imgs" class="img" alt="" loading="lazy"></div>
                <div class="tech">
                  <span class="ico" v-for="ico in workData.pdeg[index].tech" :key="ico">{{ico}}</span>
                </div>
              </div>
              <div class="date"><i class="fa-regular fa-calendar-days"></i> <span>{{item.date}}</span></div>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="work-list">
        <div class="hdts"><h3 class="title"><i class="fa-regular fa-bolt-lightning"></i> Flash ActionScript</h3></div>
        <ul class="wlst">
          <li v-for="(item, index) in workData.pfla" :key="index">
            <router-link :to="{ name: 'worksPop', params: { cate: 'pfla', id :index }}" class="box">
              <div class="hdt">
                <h4 class="tits">{{item.tits}}</h4>
              </div>
              <div class="cdt">
                <div class="pics"><img :src="baseURL+item.imgs" class="img" alt="" loading="lazy"></div>
                <div class="tech">
                  <span class="ico" v-for="ico in workData.pfla[index].tech" :key="ico">{{ico}}</span>
                </div>
              </div>
              <div class="date"><i class="fa-regular fa-calendar-days"></i> <span>{{item.date}}</span></div>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
    


  </div>
</template>

<script>
import ui from '@/ui.js';
export default {
  name: 'WorksItem',
  components: {

  },
  props: {
    userstate: String
  },
  data() {
    return {
      baseURL:"//kimkee.github.io/",
      workData: {},
      popData:{},
      transitionName: "",
    }
  },
  created() {
    ui.init();
    ui.loading.show();
    // this.workData = data;

    document.querySelector(".header .htit").textContent = 'Works';
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
  async mounted() {
    await fetch('https://kimkee.github.io/js/data.json').then(res => res.ok && res.text()).then(res => {

      this.workData = JSON.parse(res);
      console.log(this.workData);
      ui.loading.hide();
      // this.$refs.popup.view(true);
    });
    document.querySelector(".page.work").classList.add("load");

  },
  methods: {
    setOpt(item){
      console.log(item);
      this.popData = item;
    }
  }
}
</script>
<style scoped>
</style>