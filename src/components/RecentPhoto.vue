<template>
  
    <div class="recent">
      <div v-if="Recents.length == 0" class="nodata">
        <p><i class="fa-regular fa-message-dots"></i> 게시글이 없습니다.</p>
      </div>
      <div  v-else class="photo-list">
        <ul class="list" id="dp_list">
          <!-- {{Boards}} -->
          <li v-for="board in Recents" :key="board.id" :data-id="board.id" :data-uid="board.uid">
            <div class="box">
              <router-link class="lk" :to="{ name: 'homePhotoView', params: { id: board.id }}">
                <div class="pic" v-if="board.img.length"><img class="img" loading="lazy" :src="board.img" onerror="this.src='./img/noimage.png';"></div>
                <div class="nums" v-if="board.img.length > 1"><em><i class="fa-regular fa-images"></i></em></div>
                <div class="info">
                  <em v-if="board.comtNum > 0"><i class="fa-regular fa-comment-dots"></i> <b>{{ board.comtNum }}</b></em>
                  <!-- <em><i class="fa-regular fa-eye"></i> <b>{{ board.count }}</b></em> -->
                  <em v-if="board.likes > 0"><i class="fa-regular fa-heart"></i> <b>{{board.likes}}</b></em>
                </div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  
</template>

<script>
import { db } from '@/firebaseConfig.js';
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import ui from '@/ui.js';


export default {
  name: 'ListItem',
  props: {
    opts: Object
  },
  data() {
    return {
      Recents: []
    }
  },
  created() {
    this.read();
    // console.log(db);
  },
  mounted() {

  },
  methods: {
    testConfirm() {
      ui.confirm('컨펌 메시지입니다.', {
        'tit': '타이틀',
        'ycb': () => {
          console.log("확인");
        },
        'ncb': () => {
          console.log("취소");
        }
      });
    },
    async read(nums) {
      console.log(nums);
      this.callStat = false;
      const q = query(collection(db, "photo"), orderBy("timestamp", "desc"), limit(this.opts.num));
      const querySnapshot = await getDocs(q);
      this.Recents = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().title);
        this.Recents.push({
          id: doc.id,
          uid: doc.data().uid,
          author: doc.data().author || "익명",
          avatar: doc.data().avatar || 0,
          title: doc.data().title,
          content: doc.data().content,
          comtNum: doc.data().coments.length,
          count: doc.data().count,
          likes: doc.data().likes,
          img: doc.data().img,
          date: ui.timeForm(doc.data().timestamp.toDate())
        });
      });
      this.loadItem = this.loadItem + this.countItem;
      if( this.loadItem >= this.postTotal) {
        this.$refs.uiLoadmore.classList.add("hide");
        this.callStat = false;
      }else{
        this.callStat = true;
      }
      this.$refs.page?.classList.add("load");
      ui.loading.hide();
    },

  }
}
</script>
