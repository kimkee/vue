<template>
  <div class="container photo">
    <main class="contents">

      <div class="ui-loading-dot"><div class="bx"><em><i></i></em></div></div>
      <div class="ut-tblist">
        <ul class="list" id="dp_list">
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=1" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/360/640/?v=2" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=3" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/360/640/?v=4" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=5" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/360/640/?v=6" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=7" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/360/640/?v=8" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=9" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/360/640/?v=10" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=11" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/360/640/?v=12" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=13" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=14" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=15" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=16" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=17" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=18" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=19" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=20" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=21" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=22" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=23" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=24" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=25" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=26" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=27" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=28" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=29" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="pic"><img class="img" loading="lazy" src="//picsum.photos/640/360/?v=30" alt=""></div></a></div></li>
        </ul>
        <div class="ui-loadmore active">
          <em></em>
          <button type="button" class="btn-load" @click="photoLoad" id="btn_list_more">불러오기</button>
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
        Photos:{}
      }
  },
  created(){
    ui.init();
    document.querySelector(".header .cdt .htit").textContent = 'Photo';
  },
  mounted() {
    document.querySelector(".page.photo").classList.add("load");
  },
  methods:{
    photoLoad(){

    }
  }
}
</script>
<style scoped>
</style>
