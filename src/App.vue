<template>
<div class="gridContainer">
    <Navbar/>
  <router-view/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
components: {
  Navbar
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
  overflow: hidden;
  min-height: 100vh;
}

.gridContainer{
  display: grid;
  grid-template-columns: 2fr 9fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
}

@media screen and (max-width: 760px){
  .gridContainer{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .nav-background{
    display: none !important;
  }
}
</style>
