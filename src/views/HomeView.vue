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
        
        <!-- Top Label -->
        <div class="hero-label">
          // SOFTWARE DEVELOPER + DIGITAL ARTIST
        </div>

        <div class="text-block">
          <!-- Massive Headline -->
          <h2 class="hero-headline">
            SERIOUS<br />
            ABOUT<br />
            PLAY.
          </h2>

          <!-- Sub-headline -->
          <p class="hero-subheadline">
            There's room for creativity in code. I'm always looking for new ways to build and bring ideas to life.
          </p>

          <!-- Intro Paragraph -->
          <p class="hero-intro">
            Hi, I'm James. I'm a software developer and digital artist. I build meaningful web applications and interactive experiences, approaching every project with a developer's logic and an artist's eye for detail.
          </p>

          <!-- Buttons -->
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">EXPLORE MY WORK ↗</a>
            <a href="#" class="btn-secondary">DOWNLOAD CV ↓</a>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE: IMAGE -->
      <div class="hero-image-area">
        <div class="placeholder-box">Image Carousel</div>
      </div>

    </div>

  </section>
</template>

<script setup>
// No logic yet
</script>

<style scoped>
/* Main container */
.hero-section {
  background-color: #50DCE8;
  color: #382319;
  padding: 2rem 4rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #382319;
}

/* TOP HEADER */
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

/* MAIN CONTENT GRID */
.hero-content {
  display: grid;
  /* Changed to 0.8fr (text) and 1.2fr (image) so image gets more space */
  grid-template-columns: 1fr 1.2fr; 
  gap: 3rem;
  align-items: start; 
}

/* LEFT SIDE TEXT */
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
}

.text-block {
  display: flex;
  flex-direction: column;
}

.hero-headline {
  font-family: 'Bebas Neue', sans-serif;
  /* Adjusted size so it fits nicely in the narrower column */
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

/* Buttons Container */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem; 
}

/* Button Styles */
.btn-primary {
  display: inline-block;
  background-color: #382319;
  color: #50DCE8;
  padding: 1rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: 50px;
  transition: transform 0.2s ease;
  white-space: nowrap; /* Prevents button text from wrapping */
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: #382319;
  padding: 1rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 2px solid #382319;
  border-radius: 50px;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.btn-secondary:hover {
  background-color: rgba(56, 35, 25, 0.1);
}

/* RIGHT SIDE IMAGE AREA */
.hero-image-area {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 3rem; 
}

.placeholder-box {
  width: 100%;
  aspect-ratio: 4 / 3; 
  background-color: #382319;
  /* height: 500px; */
  color: #50DCE8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
}
</style>