<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main class="main-content">
      <router-view />
    </main>

    <!-- Back to Top Button -->
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      class="back-to-top"
      aria-label="Back to top"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue' 

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.app-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  width: 100%;
  flex-grow: 1;
}

/* --- Back to Top Button Styles --- */
.back-to-top {
  position: fixed;
  bottom: 2.5rem;
  
  /* CHANGED: Reduced from 2.5rem to 1.5rem to shift it right */
  right: 1.5rem; 
  
  width: 60px; 
  height: 60px; 
  border-radius: 50%;
  
  background-color: var(--cyan);
  color: var(--brown); 
  
  border: 3px solid var(--brown); 
  
  font-size: 1.8rem;
  font-weight: 900;
  cursor: pointer;
  z-index: 999; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  box-shadow: 6px 6px 0px var(--brown); 
  
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.back-to-top:hover {
  background-color: var(--brown);
  color: var(--cyan);
  transform: translate(3px, 3px); 
  box-shadow: 2px 2px 0px var(--brown);
}

/* Hide back-to-top on mobile and tablets */
@media (max-width: 900px) {
  .back-to-top {
    display: none !important;
  }
}
</style>