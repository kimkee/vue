<template>
  
  <div class="vote">
    <button type="button" class="bt-vote" :class="likeOn" @click="likeTog" v-show="likeShow" :disabled="likeShow?false:true">
      <i class="fa-solid fa-heart"></i>
      <p v-if="$parent.Views.likes>0">{{ $parent.Views.likes }}</p>
    </button>
  </div>

</template>

<script>
import db  from '@/firebaseConfig.js';
import { getDoc, doc ,updateDoc} from "firebase/firestore";
import store from '@/store';
import ui from '@/ui.js';
export default {
  name: 'VoteItem',
  props: {
    opts: Object,
  },
  data() {
    return {
      likeShow: false,
      likeOn: "",      
    }
  },
  created(){ 
    console.log(this.opts);
  },
  updated(){
    // ui.gnb.using("close");

  },
  methods:{
    async likeTog(e){
      if(!store.state.userInfo.stat) {
        ui.confirm("로그인 하시겠습니까?.",{
          ycb:()=>{
            this.$router.push("/signin");
          },
          ybt:"예",
          nbt:"아니오",
        });
        return;
      }
      const btlike = e.currentTarget;
      console.log(btlike);
      const isLiked = btlike.classList.contains("on");
      let nLike = this.$parent.Views.likes;
      if (isLiked) {
        btlike.classList.remove("on");
        nLike--;
        this.likeAct(nLike);
        this.likeMem(store.state.userInfo.uid,"rem");
      }else{
        btlike.classList.add("on");
        nLike++;
        this.likeAct(nLike);
        this.likeMem(store.state.userInfo.uid,"add");
      }
    },
    likeAct (n){ // 좋아요 +- 
      const  docRef = doc(db, this.opts.dbTable, this.opts.param );
      this.$parent.Views.likes = n;
      updateDoc(docRef, {
        likes: n,
      }).then(()=>{
        console.log("좋아요: ",this.opts.param , n);
      }).catch (e =>{
        console.error("Error adding document: ", e);
      });
    },
    async getUser(){
      console.log(store.state.userInfo.uid);
      if( store.state.userInfo.uid ){
        const memRef = doc(db, "member", store.state.userInfo.uid );
        const memSnap = await getDoc(memRef);
        console.log( memSnap.data().liked);
        memSnap.data().liked.map( lk => { 
          lk = JSON.parse(lk);
          console.log(lk[this.opts.dbTable] , this.opts.param);
          if( lk[this.opts.dbTable] == this.opts.param ){
            // document.querySelector(".bt-vote").classList.add("on");
            this.likeOn = "on";
          }
        });
      }
      // document.querySelector(".bt-vote").disabled = false;
      this.likeShow = true;
    },
    async likeMem (likeID, addrem){ // userInfo 에 좋아요 누른 정보 저장
      const docID = this.opts.param;
      console.log(this.opts.dbTable);
      const memRef = doc(db, "member", likeID );
      const memSnap = await getDoc(memRef);
      const arrLike = memSnap.data().liked || [];
      const item = `{\"${this.opts.dbTable}\":\"${docID}\"}`
      console.log(item);
      let NarrLike;
      if (addrem == "add") {
        arrLike.push(item);
        NarrLike = [...new Set(arrLike)];
        console.log(NarrLike);
      }
      if (addrem == "rem") {
        NarrLike = arrLike.filter( data => data != item );
        console.log(NarrLike);
      }
      updateDoc(memRef, { liked:NarrLike })
      .then(()=>{ console.log("좋아요: ",likeID ); })
      .catch (e =>{ console.error("Error adding document: ", e); });
    }
  }
}
</script>

<style scoped>
</style>
