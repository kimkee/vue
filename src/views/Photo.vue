<template>
  <div class="container photo">
    <main class="contents">

      <div class="ut-tblist">
        <ul class="list" id="dp_list"></ul>
        <div class="ui-loadmore">
          <em></em>
          <button type="button" class="btn-load" @click="addItem" title="불러오기"><i class="fa-solid fa-rotate-right"></i></button>
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>

import ui from '../ui.js';
export default {
  name: 'PhotoItem',
  components: {
    
  },
  props: {
    userstate: String
  },
  data() {
      return {
        Photos:[],
        callStat:true,
      }
  },
  created(){
    ui.init();
    ui.loading.show();
    document.querySelector(".header .htit").textContent = 'Photo';
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent);
    this.callStat = true;
    this.addItem();
    console.log("================================");
  },
  unmounted(){
    window.removeEventListener("scroll", this.scrollEvent);
  },
  methods:{
    addItem(){
      let pHtml = "";
      document.querySelector('.ui-loadmore').classList.add("active");
      this.callStat = false;
      fetch("./js/photo.json").then( res => res.ok && res.text() ).then( res => { 
        const result = JSON.parse( res);
        result.forEach( (data) =>{
          pHtml += `<li><div class="box"><a href="javascript:;"><div class="pic"><img class="img"  src="${data.urls}" alt=""></div></a></div></li>`
        });

        setTimeout(() => {
          document.querySelector("#dp_list").insertAdjacentHTML("beforeend",pHtml);
          document.querySelector('.ui-loadmore').classList.remove("active");
          document.querySelector(".page.photo").classList.add("load");
          this.callStat = true;
          this.Photos = [...this.Photos, ...(result)]
          console.log(  this.Photos.length );
          ui.loading.hide();
        }, 1000);
      }).catch( e=>{
        console.log("오프라인");
        document.querySelector('.ui-loadmore').classList.remove("active");
        document.querySelector('.ui-loadmore').classList.add("error");
        console.log(e);
      });
    },
    scrollEvent(){
      // console.log(this.callStat,  ui.viewport.height() ,ui.viewport.scrollTop() , ui.viewport.docHeight() );
      const wHt = ui.viewport.height() ;
      const docH =  ui.viewport.docHeight();
      const scr = ui.viewport.scrollTop() + wHt + 10; 
      if (docH <= scr && this.callStat == true) {
        console.log("바닥도착");
        this.addItem();
      }
    }
  }
}
</script>
<style scoped>
</style>
