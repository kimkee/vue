<template>
<div class="ut-attfiles">
  <div class="attach">
    <div class="adbts">
      <input type="file" class="file" id="fileInput" @change="this.$parent.fileAdd" accept="image/* , video/*">
      <span class="btfiles" @click="numCheck" :class="this.btnDis">
        <i class="fa-solid fa-camera"></i>
        <span class="num"><b class="i">{{Files.length}}</b>/<b class="n">{{max}}</b></span>
      </span>
    </div>
    <div v-for="image,index in Files" :key="index" :data-index="index" class="pic">
      <img class="img" :src="image" alt="">
      <button class="del" type="button" @click="this.$parent.fileDel(index)"><i class="fa-solid fa-xmark"></i></button>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'FilseItem',
  props: {
    // items: Array,
    max: Number,
  },
  data() {
      return {
        Files: [],
        MaxItem: this.max,
        btnDis:""
      }
  },
  created(){
  },
  mounted(){    

  },
  methods: {
    itemSet(files){
      console.log("itemSet()");
      this.Files = files;
      console.log(!!this.Files);
      this.btnDis =  this.Files.length >= this.MaxItem ? "off" : "on";
  },
  numCheck(){
      alert(`최대 ${this.MaxItem} 개 까지 가능합니다.`);
    }
  }
}
</script>
<style>
</style>