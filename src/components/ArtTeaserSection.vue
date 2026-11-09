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
      
      <!-- LEFT COLUMN: Polaroid + Color Fan -->
      <div class="left-column">
        
        <!-- LEFT IMAGE -->
        <div class="art-piece left-piece">
          <div class="polaroid">
            <div class="polaroid-image-wrapper">
              <img :src="mossCat" alt="Moss Cat Creature" />
            </div>
            <div class="polaroid-caption">// FIG. A / CHARACTER STUDY</div>
          </div>
        </div>

        <!-- THE COLOR FAN -->
        <div class="color-fan-wrapper">
          <div class="color-fan">
            
            <div class="swatch-card dark-slate">
              <div class="text-container">
                <span class="hex">#2d2d2d</span>
                <span class="color-name">Carbon Slate</span>
              </div>
            </div>
            
            <div class="swatch-card gold">
              <div class="text-container">
                <span class="hex">#d4af37</span>
                <span class="color-name">Old Gold</span>
              </div>
            </div>
            
            <div class="swatch-card open-book">
              <div class="text-container">
                <span class="hex">#f5f0e6</span>
                <span class="color-name">Open Book</span>
              </div>
            </div>
            
            <div class="swatch-card clover">
              <div class="text-container">
                <span class="hex">#4a7c59</span>
                <span class="color-name">Irish Clover</span>
              </div>
            </div>
            
            <div class="swatch-card regents">
              <div class="text-container">
                <span class="hex">#1a3d1a</span>
                <span class="color-name">Queen of Trees</span>
              </div>
            </div>

          </div>
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
  padding: 8rem 4rem 17rem 4rem; 
  border-bottom: 2px solid var(--brown);
  overflow: hidden; 
  position: relative; 
}

/* --- TOP SECTION --- */
.art-header-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 4rem;
  margin-bottom: 3rem; 
  align-items: end; 
}

.header-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--brown);
  border-radius: 50%;
}

.header-title-main {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 7rem; 
  line-height: 0.9;
  margin: 0;
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1rem;
}

.art-blurb {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
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
  grid-template-columns: 0.8fr 1.2fr; 
  gap: 4rem; 
  align-items: start;
}

/* Left Column */
.left-column {
  position: relative; 
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.art-piece {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* THE POLAROID STYLING */
.polaroid {
  background-color: #fff;
  padding: 1rem 1rem 3.5rem 1rem; 
  box-shadow: 5px 15px 30px rgba(56, 35, 25, 0.15); 
  transition: transform 0.3s ease;
}

.left-piece .polaroid {
  transform: rotate(-3deg); 
}

.right-piece .polaroid {
  transform: rotate(2deg); 
}

.polaroid:hover {
  transform: rotate(0deg) scale(1.02);
}

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

/* --- THE COLOR FAN --- */
.color-fan-wrapper {
  position: absolute;
  top: 100%; 
  left: 0;
  margin-top: 12rem; 
  margin-left: 13rem;
  transform: rotate(25deg); 
  display: flex;
  flex-direction: column;
}

.color-fan {
  position: relative;
  height: 350px; 
  width: 500px;
  cursor: pointer;
}

.swatch-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px; 
  height: 350px; 
  border-radius: 12px;
  transform-origin: bottom center;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  
  display: flex;
  
  /* CHANGED: Aligns text to the top of the card */
  align-items: flex-start; 
  justify-content: flex-start;
  
  /* CHANGED: Padding moved to top to push text away from the edge */
  padding-top: 2rem; 
  padding-left: 0.8rem; 
  overflow: hidden;
}

/* TEXT CONTAINER INSIDE THE CARDS */
.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  
  /* To make the text readable at the top, we keep it vertical but flip it */
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg); 
}

.swatch-card .hex {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem; 
  font-weight: 700;
}

.swatch-card .color-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  opacity: 0.9;
}

/* 
  DEFAULT FANNED STATE 
*/
.dark-slate { background-color: #2d2d2d; color: #fff; transform: rotate(-40deg); z-index: 1; }
.gold { background-color: #d4af37; color: #000; transform: rotate(-20deg); z-index: 2; }

/* CHANGED: Stronger border on the white card */
.open-book { background-color: #f5f0e6; color: #000; transform: rotate(0deg); z-index: 3; border: 2px solid #d1c7b8; }

.clover { background-color: #4a7c59; color: #fff; transform: rotate(20deg); z-index: 4; }
.regents { background-color: #1a3d1a; color: #fff; transform: rotate(40deg); z-index: 5; }

/* HOVER EFFECT */
.color-fan:hover .dark-slate { transform: rotate(-60deg) translateY(-10px); }
.color-fan:hover .gold { transform: rotate(-30deg) translateY(-15px); }
.color-fan:hover .open-book { transform: rotate(0deg) translateY(-20px); }
.color-fan:hover .clover { transform: rotate(30deg) translateY(-15px); }
.color-fan:hover .regents { transform: rotate(60deg) translateY(-10px); }

/* Bottom blurb area */
.bottom-blurb-area {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1rem; 
}

.color-palette {
  display: flex;
  gap: 0.5rem;
}

.swatch {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.small-blurb {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  max-width: 80%;
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
  .art-teaser-section {
    padding-bottom: 8rem; 
  }
  
  .art-header-grid, .art-display-grid {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }
  
  .header-title-main {
    font-size: 5rem;
  }
  
  .left-column {
    margin-top: 0;
  }
  
  .left-piece .polaroid, .right-piece .polaroid {
    transform: rotate(0deg); 
  }
  
  .color-fan-wrapper {
    display: none; 
  }
}
</style>