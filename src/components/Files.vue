<template>
<!-- {{opts.mode}} {{opts.page}}  {{opts.param}} -->
<div class="ut-attfiles">
  <div class="adbts">
    <input type="file" class="file" id="fileInput" ref="fileInput" @change="fileAdd" accept="image/* , video/*" multiple maxlength="5">
    <span class="btfiles" @click="numCheck" :class="this.btnDis">
      <i class="fa-solid fa-camera"></i>
      <span class="num"><b class="i">{{Files.length}}</b>/<b class="n">{{this.opts.max}}</b></span>
    </span>
  </div>
  <div class="attach" ref="attach">
    <div v-for="image,index in Files" :key="index" :data-index="index" class="pic">
      <b>{{ index }}</b>
      <img class="img" :src="image" alt="" onerror="this.src='./img/noimage.png';">
      <button class="del" type="button" @click="fileDel(index)"><i class="fa-solid fa-xmark"></i></button>
      <input type="radio" name="rdFIle" @change="rodPos" :data-index="index" class="rdo" :checked=" index == 0 ? true : false">
      <div class="rbt" v-if="Files.length > 1">
        <button @click="fMove('prev')" :data-index="index-1" class="mbt"><i class="fa-solid fa-angle-left"></i></button>
        <button @click="fMove('next')" :data-index="index+1" class="mbt"><i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
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
      btnDis: "",
    }
  },
  created() {
  },
  mounted() {
    console.log(this.opts.mode);
    console.log(this.Files[0]);
  },
  methods: {
    fMove(opt){
      let target = event.currentTarget.dataset.index;
      let ptarget = event.currentTarget.closest(".pic").dataset.index;
      console.log(opt, ptarget , target , 0);
      if(target < 0){ target = this.Files.length-1 }
      if(target >= this.Files.length){ target = 0 }

      let tmp = this.Files[ptarget];
      this.Files[ptarget] = this.Files[target];
      this.Files[target] = tmp;
      console.log(target , this.$refs.attach.querySelector(".pic[data-index='"+target+"'] .rdo"));
      this.$refs.attach.querySelector(".pic[data-index='"+target+"'] .rdo").checked  = true;
      this.rodPos();
    },
    rodPos(){ // 선택한 이미지위치로 스크롤
      const pic = this.$refs.attach.querySelector(".rdo:checked").closest(".pic");
      const left = pic.offsetLeft - pic.offsetWidth;
      console.log(left);
      this.$refs.attach.scrollTo(left,0)
    },
    itemSet(files) {
      console.log("itemSet()" + this.Files.length);
      this.Files = files;
      // console.log(!!this.Files);
      this.btnDis = this.Files.length >= this.opts.max ? "off" : "on";
    },
    numCheck() {
      ui.alert(`최대 ${this.opts.max} 개 까지 가능합니다.`);

    },
    async fileAdd() { // 파일 첨부
      const files = this.$refs.fileInput.files;

      const storage = getStorage();
      // console.log($fileInput.files[0]);

      /*
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
    */
      const uptime = ui.timeVer();
      const promises = [];

      console.log(files);
      /* if(files.length >this.opts.max){
        ui.alert(`최대 ${this.opts.max} 개 까지 가능합니다.`);
        return;
      } */
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        const filename = files[i].name;
        const metadata = {
          cacheControl: 'public,max-age=31536000',
        }
        if (file !== null) {
          const storageRef = ref(storage, this.opts.page + "/" + uptime + "_" + filename);
          promises.push(uploadBytes(storageRef, file, metadata).then(uploadResult => {
            return getDownloadURL(uploadResult.ref).then((url) => { this.Files.push(url); })
          }).catch( (error)=> {
            console.log(error);
            ui.alert("업로드파일 1개의 용량제한은 <br> 1M이하 입니다.");
          } ));
        }
      }
      // Get all the downloadURLs   // 파일 다올릴때 까지 기다리기..
      const photos = await Promise.all(promises);      
      
      console.log(this.opts.page, this.opts.param , this.FIles , photos , promises);
      if (this.opts.mode == "modify") {
        const docRef = doc(db, this.opts.page, this.opts.param );
        await updateDoc(docRef, {
          img: this.Files
        }).then(() => {
          this.itemSet(this.Files);
        }).catch((error) => {
          console.log(error);
        })
      }
      console.log(this.Files);

      // 파일 갯수가 넘으면 삭제 시키기
      console.log(this.Files.length, " = ", this.opts.max);
      if (this.Files.length >= this.opts.max) {
        this.Files.forEach((imgUrl, index) => {
          console.log(index, this.opts.max, imgUrl);
          if (index >= this.opts.max) {
            const storage = getStorage();
            const desertRef = ref(storage, imgUrl);
            deleteObject(desertRef).then(() => {
              this.numCheck();
              this.itemSet(this.Files)
              console.log("파일삭제 성공 ");
              this.Files.pop();
            }).catch((error) => { console.log(error); });
          }
        });
      }

      this.$parent.files = this.Files;
      this.$parent.valCheck();
      this.$refs.fileInput.value = '';
    },
    async fileDel(index) { // 파일 삭제
      console.log(this.Files[index]);
      ui.confirm("첨부한 파일을 삭제하시겠습니까?", {
        ycb: () => {
          const storage = getStorage();
          console.log(this.Files[index]);
          const desertRef = ref(storage, this.Files[index]);
          deleteObject(desertRef).then(() => {
            console.log("파일삭제 성공 ");
            this.Files.splice(index, 1);
            this.itemSet(this.Files);
            this.$parent.files = this.Files;
            this.$parent.valCheck();
            if (this.opts.mode == "modify") {
              const docRef = doc(db, this.opts.page, this.opts.param);
              updateDoc(docRef, { img: this.Files }).then(() => { this.$parent.Views.img = this.Files }).catch(e => { console.error(e); });
            }
            console.log(this.Files);
          }).catch((error) => { 
            console.log(error.code,  this.Files)
            console.log(index , this.Files[index])
            if( error.code == 'storage/object-not-found'){
              this.Files.splice(index, 1);
              this.itemSet(this.Files);
              const docRef = doc(db, this.opts.page, this.opts.param);
              updateDoc(docRef, { img: this.Files }).then(() => { this.$parent.Views.img = this.Files }).catch(e => { console.error(e); });
            }
          });
        },
        ybt: "예",
        nbt: "아니오",
      });
    },
  }
}
</script>
<style>
</style>