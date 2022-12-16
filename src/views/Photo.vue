<template>
  <div class="container photo">
    <main class="contents">


      <div class="ut-tblist">
        <ul class="list load" id="dp_list">
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/1.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/2.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/3.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/4.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/5.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/7.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/6.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/8.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/9.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/10.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/1.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/2.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/3.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/4.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/5.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/7.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/6.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/8.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/9.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/10.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/1.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/2.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/3.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/4.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/5.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/7.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/6.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/8.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/9.jpg" alt=""></div></a></div></li>
          <li><div class="box"><a href="javascript:;"><div class="img"><img src="//kimkee.github.io/ui/static/img/temp/10.jpg" alt=""></div></a></div></li>
        </ul>
        <div class="ui-loadmore active">
          <em></em>
          <button type="button" class="btn-load" onclick="addItem.using()" id="btn_list_more" disabled="">불러오기</button>
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
    
  },
  methods:{
    photoLoad(){
      
    }
  }
}
</script>
<style scoped>
</style>
