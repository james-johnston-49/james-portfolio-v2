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
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #ddd;
  background-color: transparent;
}

.nav-center {
  display: flex;
  gap: 2rem;
}

.nav-left, .nav-center, .nav-right {
  font-size: 0.9rem;
}
</style>