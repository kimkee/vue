<template>
  
    <div class="recent">
      <!-- <h1>{{ this.opts.id }}</h1>  -->
      <div class="board-list">
        <div class="bbs-opt">
          <div class="tots"><i class="fa-regular fa-square-poll-horizontal"></i> 최근 게시물 : {{Recents.length}} 개</div>
          <div class="more"><router-link class="bt" to="/bbs">더보기 <i class="fa-regular fa-chevron-right"></i></router-link></div>
        </div>
        <ul class="list">
          <li v-for="recent in Recents" :key="recent.key">
              <router-link class="box" :to="{ name: 'homeBbsView', params: { id: recent.key }}">
                <div class="cont">
                  <div class="pics" v-if="recent.img.length"><img class="img" :src="recent.img" onerror="this.src='./img/noimage.png';"></div>
                  <div class="desc">
                    <h4 class="tits">{{ recent.title }}</h4>
                    <div class="text" v-html="recent.content"></div>
                  </div>
                </div>
                <!-- <div class="info">
                  <div class="dd">
                    <div class="user"><span class="pic"><img :src="$store.state.avatar[recent.avatar]" alt="" class="img"></span> <span class="txt">{{recent.author}}</span></div>
                    <div class="keys">{{ recent.key }}</div>
                  </div>
                  <div class="dd">
                    <div class="hits">
                      <em><i class="fa-regular fa-comment-dots"></i> <b>{{ recent.comtNum }}</b></em>
                      <em><i class="fa-regular fa-eye"></i> <b>{{ recent.count }}</b></em>
                      <em><i class="fa-regular fa-heart"></i> <b>{{ recent.likes }}</b></em>
                    </div>
                    <div class="date" v-html="recent.date"></div>
                  </div>
                </div> -->
              </router-link>
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
    async read() {
      console.log("dbTable ======================= " + this.opts['dbTable']);
      const q = query(collection(db, this.opts.dbTable), orderBy("timestamp", "desc"), limit(this.opts.num));
      const querySnapshot = await getDocs(q);
      this.Recents = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().title);
        this.Recents.push({
          key: doc.id,
          title: doc.data().title,
          author: doc.data().author || "익명",
          avatar: doc.data().avatar || 0,
          comtNum: doc.data().coments.length,
          content: doc.data().content,
          count: doc.data().count,
          likes: doc.data().likes,
          img: doc.data().img,
          date: ui.timeForm(doc.data().timestamp.toDate())
        });
      });
      document.querySelector(".page.home")?.classList.add("load");
      ui.loading.hide();
    }

  }
}
</script>
