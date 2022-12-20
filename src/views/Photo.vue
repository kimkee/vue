<template>
  <div class="container photo">
    <main class="contents">

      <div class="ui-loading-dot"><div class="bx"><em><i></i></em></div></div>
      <div class="ut-tblist">
        <ul class="list" id="dp_list"></ul>
        <div class="ui-loadmore">
          <em></em>
          <button type="button" class="" @click="addItem" id="btn_list_more">불러오기</button>
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>


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
    document.querySelector(".header .cdt .htit").textContent = 'Photo';
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
        
        JSON.parse( res).forEach( (data) =>{
          pHtml += `<li><div class="box"><a href="javascript:;"><div class="pic"><img class="img"  src="${data.urls}" alt=""></div></a></div></li>`
        });

        setTimeout(() => {
          document.querySelector("#dp_list").insertAdjacentHTML("beforeend",pHtml);
          document.querySelector('.ui-loadmore').classList.remove("active");
          document.querySelector(".page.photo").classList.add("load");
          this.callStat = true;
          this.Photos = [...this.Photos, ...(JSON.parse( res))]
          console.log(  this.Photos.length );
        }, 1000);
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
