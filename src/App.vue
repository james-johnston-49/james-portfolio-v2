<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue' 
</script>

<style>
/* Ensure the wrapper takes the full width */
.app-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Prevents side-to-side scrolling */
}
</style>