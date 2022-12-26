<template>
<div class="attach" v-show="items.length">
  <div v-for="image,index in Files" :key="index" :data-index="index" class="pic">
    <img class="img" :src="image" alt="">
    <button class="del" type="button" @click="this.$parent.fileDel(index)"><i class="fa-solid fa-xmark"></i></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilseItem',
  props: {
    items: Array,
  },
  data() {
      return {
        Files:[],
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
    }
  }
}
</script>
<style>
</style>