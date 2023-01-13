<template>
  <div class="container work">
    <main class="contents">

      <!-- <p>{{workData.update}}</p> -->

      <div class="work-list">
        <div class="hdts"><h3 class="title"><i class="fa-solid fa-window-restore"></i> UI/UX Development</h3></div>
        <ul class="wlst">
          <li v-for="(item, index) in workData.puix" :key="index">
            <div class="box">
              <div class="hdt">
                <h4 class="tits">{{item.tits}}</h4>
              </div>
              <div class="cdt">
                <div class="pics"><img :src="'//kimkee.github.io/'+item.imgs" class="img" alt="" loading="lazy"></div>
                <div class="tech">
                  <span class="ico" v-for="ico in workData.puix[index].tech" :key="ico">{{ico}}</span>
                </div>
              </div>
              <div class="date">{{item.date}}</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="work-list">
        <div class="hdts"><h3 class="title"><i class="fa-solid fa-compass-drafting"></i> Web Design &amp; UI/UX Development</h3></div>
        <ul class="wlst">
          <li v-for="(item, index) in workData.pdeg" :key="index">
            <div class="box">
              <div class="hdt">
                <h4 class="tits">{{item.tits}}</h4>
              </div>
              <div class="cdt">
                <div class="pics"><img :src="'//kimkee.github.io/'+item.imgs" class="img" alt="" loading="lazy"></div>
                <div class="tech">
                  <span class="ico" v-for="ico in workData.pdeg[index].tech" :key="ico">{{ico}}</span>
                </div>
              </div>
              <div class="date">{{item.date}}</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="work-list">
        <div class="hdts"><h3 class="title"><i class="fa-solid fa-bolt-lightning"></i> Flash ActionScript</h3></div>
        <ul class="wlst">
          <li v-for="(item, index) in workData.pfla" :key="index">
            <div class="box">
              <div class="hdt">
                <h4 class="tits">{{item.tits}}</h4>
              </div>
              <div class="cdt">
                <div class="pics"><img :src="'//kimkee.github.io/'+item.imgs" class="img" alt="" loading="lazy"></div>
                <div class="tech">
                  <span class="ico" v-for="ico in workData.pfla[index].tech" :key="ico">{{ico}}</span>
                </div>
              </div>
              <div class="date">{{item.date}}</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- <p>{{workData.puix}}</p> -->
      <!-- <p>{{workData.pdeg}}</p> -->
      <!-- <p>{{workData.pfla}}</p> -->
      
      
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
      workData: {}
    }
  },
  created() {
    ui.init();
    ui.loading.show();
    // this.workData = data;
    // console.log(this.workData);

    document.querySelector(".header .htit").textContent = 'Works';
  },
  async mounted() {
    await fetch('https://kimkee.github.io/js/data.json').then(res => res.ok && res.text()).then(res => {

      this.workData = JSON.parse(res);
      console.log(this.workData);
      ui.loading.hide();
    });
    document.querySelector(".page.work").classList.add("load");

  },
  methods: {

  }
}
</script>
