<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">joohyun's</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">

        <router-link to="/">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </router-link>

        <router-link to="/list">
        <a class="nav-link" href="#">List</a>
        </router-link>

        <router-link to="/detail">
        <a class="nav-link" href="#">Detail</a>
        </router-link>

      </div>
    </div>
  </div>
</nav>

<router-link to="/">홈페이지 </router-link>
<router-link to="/list">리스트페이지</router-link>
<router-link to="/detail">상세보기</router-link>

<router-view :blog="blog"></router-view>

<!-- <List :blog="blog"/> -->


</template>

<script>
// import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data(){
    return {
       blog : blog
    }
  },
  components: {
    // List,
  }
}
</script>

<style>  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
