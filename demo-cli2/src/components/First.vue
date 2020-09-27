<template>
  <div>
    <div class="hello"> hello world </div>
    <router-link to="/a">to A page</router-link>
    <router-link to="/b">to B page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style scoped>
  .hello {
    background-color: #b3af3a;
  }
</style>
