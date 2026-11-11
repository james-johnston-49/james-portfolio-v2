<template>
  <nav class="navbar">
    
    <!-- LEFT SIDE: Logo / Name -->
    <div class="nav-left">
      <span>JAMES JOHNSTON</span>
    </div>

    <!-- DESKTOP: Middle Links -->
    <div class="nav-center" :class="{ 'is-open': isMenuOpen }">
      <a href="#projects" @click="closeMenu">01 // PROJECTS</a>
      <a href="#toolkit" @click="closeMenu">02 // TOOLKIT</a>
      <a href="#about" @click="closeMenu">03 // ABOUT</a>
      <a href="#gallery" @click="closeMenu">04 // GALLERY</a>
      <a href="#contact" @click="closeMenu">05 // CONTACT</a>
    </div>

    <!-- RIGHT SIDE: Mobile Burger Toggle -->
    <button class="nav-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
      <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
    </button>

  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
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
  font-size: 0.9rem; 
}

.nav-center a {
  transition: opacity 0.2s ease;
  cursor: pointer;
}

.nav-center a:hover {
  opacity: 0.5;
  text-decoration: line-through; 
}

/* Hide the burger on desktop */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;
}

/* Hamburger Icon Styling */
.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--brown);
  position: relative;
  transition: background-color 0.3s ease;
}

.hamburger::before, .hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--brown);
  transition: transform 0.3s ease, top 0.3s ease;
}

.hamburger::before { top: -8px; }
.hamburger::after { top: 8px; }

/* Animate burger into an X when open */
.hamburger.is-active { background-color: transparent; }
.hamburger.is-active::before { top: 0; transform: rotate(45deg); }
.hamburger.is-active::after { top: 0; transform: rotate(-45deg); }

/* =========================================
   MOBILE NAVBAR
========================================= */
@media (max-width: 900px) {
  .navbar {
    padding: 1.5rem;
  }

  /* Show the burger */
  .nav-toggle {
    display: block;
  }

  /* Hide the links by default on mobile, slide them down when open */
  .nav-center {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--cream);
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--brown);
    
    /* Animation */
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  .nav-center.is-open {
    transform: translateY(0);
  }
}
</style>