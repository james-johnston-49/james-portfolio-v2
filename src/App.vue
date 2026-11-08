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
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  width: 100%;
  /* Ensure this doesn't have overflow: hidden */
  display: flex;
  flex-direction: column;
}
</style>