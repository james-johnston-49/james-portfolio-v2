<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue' 
</script>

<style>
.app-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* This is the magic line to stop scrollbars */
  overflow-x: hidden; 
}

.main-content {
  width: 100%;
  flex-grow: 1;
}
</style>