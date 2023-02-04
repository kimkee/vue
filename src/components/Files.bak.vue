<template>
<!-- {{opts.mode}} {{opts.page}}  {{opts.param}} -->
<div class="ut-attfiles">
  <div class="attach">
    <div class="adbts">
      <input type="file" class="file" id="fileInput" ref="fileInput" @change="fileAdd" accept="image/* , video/*">
      <span class="btfiles" @click="numCheck" :class="this.btnDis">
        <i class="fa-regular fa-camera"></i>
        <span class="num"><b class="i">{{Files.length}}</b>/<b class="n">{{this.opts.max}}</b></span>
      </span>
    </div>
    <div v-for="image,index in Files" :key="index" :data-index="index" class="pic">
      <img class="img" :src="image" alt="">
      <button class="del" type="button" @click="fileDel(index)"><i class="fa-regular fa-xmark"></i></button>
    </div>
  </div>
  
</div>
</template>

<script>
import {db} from '@/firebaseConfig.js';
import { doc , updateDoc } from 'firebase/firestore';
import { getStorage, ref,uploadBytes ,getDownloadURL ,deleteObject } from 'firebase/storage';
import ui from '@/ui.js';
export default {
  name: 'FilseItem',
  props: {
    // items: Array,
    // max: Number,
    opts: Object,
 },
  data() {
      return {
        Files: [],
        btnDis:"",
      }
  },
  created(){
  },
  mounted(){    
    console.log(this.opts.mode);

  },
  methods: {
    itemSet(files){
      console.log("itemSet()");
      this.Files = files;
      console.log(!!this.Files);
      this.btnDis =  this.Files.length >= this.opts.max ? "off" : "on";
    },
    numCheck(){
      ui.alert(`최대 ${this.opts.max} 개 까지 가능합니다.`);
    },
    async fileAdd(){ // 파일 첨부
      const $fileInput = this.$refs.fileInput;

      const storage = getStorage();
      console.log($fileInput.files[0]);
      
      if ($fileInput.files[0]) {
        const filename = $fileInput.files[0].name;
        const uptime = ui.timeVer();
        const storageRef = ref(storage, this.opts.page+"/"+uptime+"_"+filename);
        await uploadBytes( storageRef , $fileInput.files[0] ).then((snapshot) => {
          console.log('Uploaded a blob or file!',storageRef.fullPath , snapshot);
        });
        await getDownloadURL(ref(storage, this.opts.page+"/"+uptime+"_"+filename))
        .then((url) => {
          this.Files.push(url);
          console.log(this.Files , this.$refs );
          this.itemSet(this.Files);
          if(this.opts.mode == "modify"){
            const docRef = doc(db, this.opts.page, this.opts.param );
            updateDoc(docRef, { img: this.Files }).then(()=>{ this.$parent.Views.img = this.Files }).catch (e =>{ console.error(e); });
          }
          this.$parent.files = this.Files;
          this.$parent.valCheck();
          $fileInput.value = '';
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    async fileDel(index){ // 파일 삭제
      console.log(this.Files[index]);
      ui.confirm("첨부한 파일을 삭제하시겠습니까?",{
        ycb: ()=>{
          const storage = getStorage();
          console.log(this.Files[index]);
          const desertRef = ref(storage, this.Files[index]);
          deleteObject(desertRef).then(() => {
            console.log("파일삭제 성공 ");
            this.Files.splice(index, 1);
            this.itemSet(this.Files);
            this.$parent.files = this.Files;
            this.$parent.valCheck();
            if(this.opts.mode == "modify"){
              const docRef = doc(db, this.opts.page, this.opts.param );
              updateDoc(docRef, { img: this.Files }).then(()=>{ this.$parent.Views.img = this.Files }).catch (e =>{ console.error(e); });
            }
            console.log(this.Files);
          }).catch((error) => { console.log(error); });
        },
        ybt:"예",
        nbt:"아니오",
      });
    },
  }
}
</script>
<style>
</style>