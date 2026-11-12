<template>
  <section class="hero-section" v-reveal>
    
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
            <a href="/certificates/James_Johnston_CV.pdf" download="James_Johnston_CV.pdf" class="btn-secondary">DOWNLOAD CV ↓</a>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE: PROFILE IMAGE IN TERMINAL FRAME -->
      <div class="hero-image-area">
        <div class="terminal-frame">
          
          <div class="terminal-top">
            <span>// PROFILE_IMAGE.WEBP</span>
            <span class="terminal-dot"></span>
          </div>

          <div class="terminal-image-wrapper">
            <img :src="profileImage" alt="James Johnston" />
          </div>

          <div class="terminal-bottom">
            <span class="footer-script">A builder's mind.</span>
            <span class="footer-meta">DEVELOPER<br>ARTIST / JJ</span>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile_image.webp'
</script>

<style scoped>
/* --- HERO BASE STYLES --- */
.hero-section {
  background-color: var(--cyan); 
  color: var(--brown); 
  padding: 5rem 4rem 4rem 4rem; 
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--brown); 
  min-height: 100vh; 
}

/* Top Header */
.hero-header {
  border-bottom: 1px solid rgba(56, 35, 25, 0.2);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
}

.header-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 7rem; 
  line-height: 0.9;
  letter-spacing: 0.03em;
  margin: 0;
}

/* Main Content Grid */
.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 1fr; 
  gap: 5rem; 
  align-items: start; 
}

/* Left Text Column */
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
  margin-bottom: 1rem; 
}

.text-block { 
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.hero-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 5rem; 
  line-height: 0.9; 
  margin-bottom: 1.5rem; 
  letter-spacing: 0.02em;
}

.hero-subheadline {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-size: 1.1rem; 
  line-height: 1.4;
  margin-bottom: 1rem; 
  max-width: 90%;
}

.hero-intro {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem; 
  line-height: 1.6;
  margin-bottom: 1rem; 
  max-width: 90%;
}

.hero-actions { 
  display: flex; 
  gap: 1rem; 
  margin-top: 0.5rem; 
}

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

/* --- TERMINAL FRAME STYLES --- */
.hero-image-area {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 1rem; 
}

.terminal-frame {
  width: 100%;
  aspect-ratio: 16 / 12.3; 
  background-color: var(--brown); 
  position: relative; 
  overflow: hidden; 
  display: grid;
  grid-template-rows: auto 1fr auto; 
  padding: 1.5rem; 
  margin-top: 0.5rem;
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

.terminal-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center 18%; 
}

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

/* Mobile Fallback */
@media (max-width: 900px) {
  .hero-section {
    padding: 6rem 1.5rem 3rem 1.5rem;
    min-height: auto;
  }

  .header-name {
    font-size: 4.5rem;
    line-height: 1;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-text {
    margin-top: -1rem;
  }

  .hero-headline {
    font-size: 4.5rem;
  }

  .hero-subheadline, 
  .hero-intro {
    max-width: 100%;
  }

  .hero-image-area {
    margin-top: 0;
    justify-content: center;
  }

  .terminal-frame {
    aspect-ratio: 4 / 5;
  }
}
</style>