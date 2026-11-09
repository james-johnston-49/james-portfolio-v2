<template>
  <section class="art-teaser-section" id="gallery">
    
    <!-- TOP SECTION: HEADER & TEXT -->
    <div class="art-header-grid">
      
      <div class="header-left">
        <div class="header-label">
          <span class="dot"></span> 04 // VISUAL EXPERIMENTS
        </div>
        <h2 class="header-title-main">
          NO USE CASE<br />
          REQUIRED.
        </h2>
      </div>

      <div class="header-right">
        <p class="art-blurb">
          Not everything needs a practical explanation. A space for visual stories, character concepts, and following an idea just to see where it goes.
        </p>
        <a href="/art" class="link-arrow">ENTER THE GALLERY ↗</a>
      </div>

    </div>

    <!-- BOTTOM SECTION: THE ART -->
    <div class="art-display-grid">
      
      <!-- LEFT IMAGE -->
      <div class="art-piece left-piece">
        <div class="polaroid">
          <div class="polaroid-image-wrapper">
            <img :src="mossCat" alt="Moss Cat Creature" />
          </div>
          <div class="polaroid-caption">// FIG. A / CHARACTER STUDY</div>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="art-piece right-piece">
        <div class="polaroid">
          <div class="polaroid-image-wrapper">
            <img :src="poisonIvy" alt="Poison Ivy" />
          </div>
          <div class="polaroid-caption">// FIG. B / PORTRAIT STUDY</div>
        </div>
        
        <!-- The bottom text under the right image -->
        <div class="bottom-blurb-area">
          <div class="color-palette">
            <span class="swatch" style="background-color: #382319;"></span>
            <span class="swatch" style="background-color: #4caf50;"></span>
            <span class="swatch" style="background-color: #f4c33b;"></span>
          </div>
          <p class="small-blurb">
            A space for visual stories, character concepts, and following an idea just to see where it goes.
          </p>
          <span class="credit">ORIGINAL ARTWORK / JAMES JOHNSTON</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import mossCat from '../assets/art/moss-cat-creature.png'
import poisonIvy from '../assets/art/absolute-poison-ivy.png'
</script>

<style scoped>
/* Main Container */
.art-teaser-section {
  background-color: var(--cream); 
  color: var(--brown);
  
  /* CHANGED: Reduced padding from 8rem to 5rem on top and bottom */
  padding: 5rem 4rem 5rem 4rem; 
  
  border-bottom: 2px solid var(--brown);
  overflow: hidden; 
}

/* --- TOP SECTION --- */
.art-header-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 4rem;
  margin-bottom: 3rem; /* Reduced from 4rem */
  align-items: start; 
}

.header-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 1rem; /* Reduced from 1.5rem */
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--brown);
  border-radius: 50%;
}

.header-title-main {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 6rem; /* Changed from 7rem */
  line-height: 0.9;
  margin: 0;
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2rem; 
}

.art-blurb {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 90%;
}

.link-arrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--brown);
  text-decoration: none;
  border-bottom: 1px solid var(--brown);
  padding-bottom: 0.2rem;
  transition: opacity 0.2s ease;
}

.link-arrow:hover {
  opacity: 0.6;
}

/* --- BOTTOM SECTION --- */
.art-display-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr; 
  
  /* CHANGED: Reduced gap from 6rem to 3rem */
  gap: 3rem; 
  
  align-items: start; 
  max-width: 1100px; 
  margin: 0 auto; 
}

.art-piece {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.left-piece {
  margin-top: 1rem; 
}

.right-piece {
  /* Kept the stagger, but reduced slightly */
  margin-top: -3rem; 
}

/* THE POLAROID STYLING */
.polaroid {
  background-color: #fff;
  padding: 1rem 1rem 3rem 1rem; 
  box-shadow: 5px 15px 30px rgba(56, 35, 25, 0.15); 
  transition: transform 0.3s ease;
}

.left-piece .polaroid { transform: rotate(-2deg); }
.right-piece .polaroid { transform: rotate(2deg); }

.polaroid:hover { transform: rotate(0deg) scale(1.02); }

.polaroid-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3; 
  overflow: hidden;
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;
}

.polaroid-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.polaroid-caption {
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  color: #555;
  letter-spacing: 0.05em;
}

/* Bottom blurb area */
.bottom-blurb-area {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Reduced gap */
  padding-left: 1rem; 
}

.color-palette { display: flex; gap: 0.5rem; }
.swatch { width: 12px; height: 12px; border-radius: 2px; }

.small-blurb {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  max-width: 90%;
}

.credit {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  opacity: 0.5;
  margin-top: 0.5rem;
}

/* Mobile Fallback */
@media (max-width: 900px) {
  .art-header-grid, .art-display-grid {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }
  
  .header-title-main { font-size: 5rem; }
  .header-right { padding-top: 0; }
  
  .left-piece, .right-piece { margin-top: 0; }
  
  .left-piece .polaroid, .right-piece .polaroid {
    transform: rotate(0deg); 
  }
}
</style>