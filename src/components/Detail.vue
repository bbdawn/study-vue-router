// $route.params.id
<template>

  <div>
    <br><br>
    <h5>상세페이지</h5>
    <h6>{{blog[$route.params.id].title}}</h6>
    <h6>{{blog[$route.params.id].content}}</h6>
    <p>{{blog[$route.params.id].date}}</p>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
    name: 'TheDetail',
    props : {
        blog : Array,
    }
}
</script>

<style>

</style>