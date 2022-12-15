<template>
  <div class="container works">
    <main class="contents">


      <h2>WORKS</h2>
      <p>{{workData.update}}</p>
      <p>{{workData.puix}}</p>
      <p>{{workData.pdeg}}</p>
      <p>{{workData.pfla}}</p>
      
      
    </main>
  </div>
</template>

<script>


export default {
  name: 'WorksItem',
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
        console.log(  JSON.parse( res  )  );
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
