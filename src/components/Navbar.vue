<template>
  <nav class="navbar">
    
    <!-- LEFT SIDE -->
    <div class="nav-left">
      <span>LEFT SIDE PLACEHOLDER</span>
    </div>

    <!-- MIDDLE SIDE -->
    <div class="nav-center">
      <span>Link 1</span>
      <span>Link 2</span>
      <span>Link 3</span>
    </div>

    <!-- RIGHT SIDE -->
    <div class="nav-right">
      <span>RIGHT SIDE PLACEHOLDER</span>
    </div>

  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Changed padding to match the Hero section (4rem sides) */
  padding: 1.5rem 4rem; 
  /* Added color and border to match Figma */
  background-color: #50DCE8; 
  color: #382319;
  border-bottom: 1px solid rgba(56, 35, 25, 0.2);
}

.nav-center {
  display: flex;
  gap: 2rem;
}

.nav-left, .nav-center, .nav-right {
  /* Added the monospace font for the dev vibe */
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
}
</style>