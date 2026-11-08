<template>
  <nav class="navbar">
    
    <!-- LEFT SIDE: Logo / Name -->
    <div class="nav-left">
      <span>JAMES JOHNSTON</span>
    </div>

    <!-- MIDDLE SIDE: Links -->
    <div class="nav-center">
      <a href="#projects">01 // PROJECTS</a>
      <a href="#toolkit">02 // TOOLKIT</a>
      <a href="#about">03 // ABOUT</a>
      <a href="#gallery">04 // GALLERY</a>
      <a href="#contact">05 // CONTACT</a>
    </div>

    <!-- RIGHT SIDE: Empty for now (CV is in Hero) -->
    <div class="nav-right">
      <!-- We can add social icons or a "Back to top" here later -->
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

.nav-left span, .nav-center a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--brown);
  text-decoration: none;
}

.nav-left span {
  font-size: 0.9rem; /* Make your name slightly bigger */
}

/* Subtle hover effect for the links */
.nav-center a {
  transition: opacity 0.2s ease;
}

.nav-center a:hover {
  opacity: 0.5;
  text-decoration: line-through; /* Adds a cool editorial strike-through on hover */
}
</style>