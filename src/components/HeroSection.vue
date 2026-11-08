<template>
  <section class="hero-section">
    
    <!-- TOP HEADER: JAMES JOHNSTON -->
    <div class="hero-header">
      <h1 class="header-name">JAMES JOHNSTON</h1>
    </div>

    <!-- MAIN CONTENT AREA -->
    <div class="hero-content">
      
      <!-- LEFT SIDE: TEXT -->
      <div class="hero-text">
        
        <div class="hero-label">
          // SOFTWARE DEVELOPER + DIGITAL ARTIST
        </div>

        <div class="text-block">
          <h2 class="hero-headline">
            SERIOUS<br />
            ABOUT<br />
            PLAY.
          </h2>

          <p class="hero-subheadline">
            There's room for creativity in code. I'm always looking for new ways to build and bring ideas to life.
          </p>

          <p class="hero-intro">
            Hi, I'm James. I'm a software developer and digital artist. I build meaningful web applications and interactive experiences, approaching every project with a developer's logic and an artist's eye for detail.
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn-primary">EXPLORE MY WORK ↗</a>
            <a href="#" class="btn-secondary">DOWNLOAD CV ↓</a>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE: THE CAROUSEL -->
      <div class="hero-image-area">
        <div class="carousel-frame">
          
          <!-- TOP BAR -->
          <div class="terminal-top">
            <span>A LOT OF IMAGINATION.</span>
            <span class="terminal-dot"></span>
          </div>

          <!-- IMAGE AREA -->
          <div class="terminal-image-wrapper">
            <div 
              v-for="(image, index) in images" 
              :key="index"
              class="carousel-slide"
              :class="{ active: index === activeIndex }"
            >
              <img :src="image.src" :alt="image.alt" />
            </div>
            
            <!-- MANUAL ARROWS -->
            <button class="nav-arrow left" @click="prevImage">←</button>
            <button class="nav-arrow right" @click="nextImage">→</button>

            <!-- NEW: OVERLAY BUTTON -->
            <a href="/art" class="btn-gallery-overlay">VIEW GALLERY ↗</a>
          </div>

          <!-- BOTTOM BAR -->
          <div class="terminal-bottom">
            <span class="footer-script">Characters welcome here.</span>
            <span class="footer-meta">ORIGINAL<br>ART / JJ</span>
          </div>
          
          <!-- Dots -->
          <div class="carousel-dots">
            <span 
              v-for="(image, index) in images" 
              :key="'dot-' + index"
              class="dot"
              :class="{ active: index === activeIndex }"
              @click="activeIndex = index"
            ></span>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

import mossCat from '../assets/art/moss-cat-creature.png'
import poisonIvy from '../assets/art/absolute-poison-ivy.png'
// import reptile from '../assets/art/reptilian-creature.png'
// import kyren from '../assets/art/kyre-character-sheet.png'

const images = ref([
  { src: mossCat, alt: 'Moss Cat Creature' }, 
  { src: poisonIvy, alt: 'Poison Ivy' },
])

const activeIndex = ref(0)

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length
}

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<style scoped>
/* --- HERO BASE STYLES --- */
.hero-section {
  background-color: var(--cyan); 
  color: var(--brown); 
  padding: 7rem 4rem 4rem 4rem; 
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--brown); 
  
  /* ADD THIS LINE */
  min-height: 100vh; 
}

.hero-header {
  border-bottom: 1px solid rgba(56, 35, 25, 0.2);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.header-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 9rem; 
  line-height: 0.9;
  letter-spacing: 0.03em;
  margin: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr; 
  gap: 3rem;
  align-items: start; 
}

.hero-text {
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
}

.hero-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 3rem;
  margin-bottom: 1.7rem;
}

.text-block { display: flex; flex-direction: column; }

.hero-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 6.5rem; 
  line-height: 0.9; 
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.hero-subheadline {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  max-width: 90%;
}

.hero-intro {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 90%;
}

.hero-actions { display: flex; gap: 1rem; margin-top: 1rem; }

.btn-primary {
  display: inline-block;
  background-color: var(--brown);
  color: var(--cyan);
  padding: 1rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: 50px;
  transition: transform 0.2s ease;
  white-space: nowrap; 
}

.btn-primary:hover { transform: translateY(-2px); }

.btn-secondary {
  display: inline-block;
  background-color: var(--cream);
  color: var(--brown);
  padding: 1rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 2px solid var(--brown);
  border-radius: 50px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--brown);
  color: var(--cream);
}

/* --- CAROUSEL STYLES --- */
.hero-image-area {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 3rem; 
}

.carousel-frame {
  width: 100%;
  aspect-ratio: 4 / 3; 
  background-color: var(--brown); 
  position: relative; 
  overflow: hidden; 
  display: grid;
  grid-template-rows: auto 1fr auto; 
  padding: 1.5rem; 
}

.terminal-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--cyan);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.terminal-dot {
  width: 6px;
  height: 6px;
  background-color: var(--cyan);
  border-radius: 50%;
}

.terminal-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; 
  transition: opacity 0.5s ease-in-out; 
}

.carousel-slide.active { opacity: 1; }

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(56, 35, 25, 0.7);
  color: var(--cyan);
  border: 1px solid var(--cyan);
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease;
}

.nav-arrow:hover { background: var(--brown); }
.nav-arrow.left { left: 1rem; }
.nav-arrow.right { right: 1rem; }

/* --- THE OVERLAY BUTTON --- */
.btn-gallery-overlay {
  position: absolute;
  bottom: 1rem; /* Distance from the bottom of the image */
  right: 1rem; /* Distance from the right of the image */
  background-color: var(--cream);
  color: var(--brown);
  padding: 0.8rem 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 2px solid var(--brown);
  z-index: 10; /* Ensures it stays on top of the images and arrows */
  transition: all 0.2s ease;
}

.btn-gallery-overlay:hover {
  background-color: var(--brown);
  color: var(--cream);
}

/* --- BOTTOM BAR --- */
.terminal-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--cyan);
  margin-top: 1rem; 
}

.footer-script {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.3rem;
}

.footer-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  text-align: right;
  line-height: 1.2;
}

.carousel-dots {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: rgba(80, 220, 232, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active { background-color: var(--cyan); }
</style>