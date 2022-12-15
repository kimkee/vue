<template>
  <div class="container photo">
    <main class="contents">


      <h2>Photo</h2>
      
      
      
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
        workData:{}
      }
  },
  created(){
    ui.init();
    // this.workData = data;
    // console.log(this.workData);

    
    fetch('https://kimkee.github.io/js/data.json').then( res => res.ok && res.text() ).then( res => { 
        // console.log(  JSON.parse( res  )  );
        // console.log(  res  );
        this.workData = JSON.parse( res);
    });
    
  },
  methods:{

  }
}
</script>
<style scoped>
</style>
