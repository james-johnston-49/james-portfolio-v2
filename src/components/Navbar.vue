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
  padding: 1.5rem 4rem; 
  background-color: var(--cream); 
  color: var(--brown);
  border-bottom: 1px solid var(--brown); 
  
  /* Change to fixed */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; 
}

.nav-center {
  display: flex;
  gap: 2rem;
}

.nav-left, .nav-center, .nav-right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
}

/* Optional: Add a subtle hover effect to the links */
.nav-center span {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.nav-center span:hover {
  opacity: 0.5;
}
</style>