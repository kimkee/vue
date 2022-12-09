<template>
  <div class="container board">
    <main class="contents">
      <h1>{{ msg }}</h1> 
      {{$route.params.id}}

      {{Boards}}
    </main>
  </div>
</template>

<script>
import db  from '../firebaseConfig.js';
import { collection, onSnapshot  } from "firebase/firestore";


export default {
  name: 'View',
  props: {
    msg: String
  },
  data() {
      return {
          Boards: []
      }
  },
  created(){
    console.log("list created");
    this.view();
    console.log(db);
    
  },
  methods:{
    view(){
      const result = collection(db, "test")
      console.log(result);
      onSnapshot( result, (querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.docs.forEach( key => {
          console.log(key);
        });
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
