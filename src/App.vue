<template>
  <div id="app">
    <Header/>
    <router-view/>
    <br>
    <Footer/>
  </div>
</template>

<script>

document.title = 'iClassified';
export default {
  name: 'App',
  watch:{
    $route(){
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
</style>
