<script setup>
 import Index from './components/index.vue'

</script>

<template>
  <div id="app" class="layout">
    <Index/>
    <!-- <div style="flex: 1; overflow: auto;"></div> -->
    <router-view />  
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
</style>
