<template>
  <section class="about-section" id="about">
    
    <!-- Section Header -->
    <div class="section-header">
      <div class="header-label">03 // ABOUT</div>
      <h2 class="header-title">A BUILDER'S MIND.</h2>
    </div>

    <div class="about-content">
      
      <!-- LEFT SIDE: The Photo -->
      <div class="about-image-area">
        <div class="image-frame">
          <div class="image-top-bar">
            <span>// JAMES_JOHNSTON.JPG</span>
            <span class="dot"></span>
          </div>
          
          <img :src="profileImage" alt="James Johnston" class="profile-img" />
          
          <div class="image-bottom-bar">
            <span>SOFTWARE DEVELOPER</span>
            <span>EST. 2024</span>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE: The Text & Terminal -->
      <div class="about-text-area">
        
        <p class="about-intro">
          I am a software developer who believes that technical logic and visual storytelling aren't enemies—they're a team. I specialize in building web applications that are fast, functional, and intuitive to use.
        </p>
        
        <p class="about-body">
          Because I also work as a digital artist, I don't just build the logic; I understand how to structure the UI so it feels natural to the user. I approach every project with a builder's mind, but I code with an artist's eye. Ultimately, my goal is simple: to make something that works, and makes people feel something.
        </p>

        <!-- Styled CV Button -->
        <div class="about-actions">
          <a href="#" class="btn-cv" target="_blank">DOWNLOAD CV ↓</a>
        </div>

        <!-- The Terminal Block with Title -->
        <div class="terminal-wrapper">
          <div class="terminal-title">// RANDOM FACTS & CURRENT STATUS</div>
          
          <div class="terminal-block">
            <div class="terminal-line">
              <span class="terminal-key">CURRENTLY_BUILDING:</span>
              <span class="terminal-value">This Portfolio</span>
            </div>
            <div class="terminal-line">
              <span class="terminal-key">CURRENTLY_LEARNING:</span>
              <span class="terminal-value">Advanced Vue & UX Research</span>
            </div>
            <div class="terminal-line">
              <span class="terminal-key">FUEL:</span>
              <span class="terminal-value">Iced Coffee & Lo-fi Beats</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile_image.jpg'
</script>

<style scoped>
/* Main Container */
.about-section {
  background-color: var(--cyan); 
  color: var(--brown);
  padding: 8rem 4rem; 
  border-bottom: 2px solid var(--brown);
}

/* Section Header */
.section-header {
  margin-bottom: 5rem;
}

.header-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.header-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 7rem;
  line-height: 0.9;
  margin: 0;
}

/* Layout Grid */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr; 
  gap: 5rem;
  align-items: start; 
}

/* --- LEFT SIDE: PHOTO FRAME --- */
.about-image-area {
  display: flex;
  justify-content: flex-start; 
}

.image-frame {
  background-color: var(--brown);
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 0 rgba(56, 35, 25, 0.2); 
  display: flex;
  flex-direction: column;
}

.image-top-bar, .image-bottom-bar {
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--cyan);
  letter-spacing: 0.05em;
  padding: 0.5rem 0;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--cyan);
  border-radius: 50%;
}

.profile-img {
  width: 100%;
  flex-grow: 1; 
  object-fit: cover; 
  border-radius: 0.25rem;
  display: block;
}

/* --- RIGHT SIDE: TEXT & TERMINAL --- */
.about-text-area {
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem; 
}

.about-intro {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.about-body {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 95%;
}

/* STYLED CV BUTTON (Matches Hero Secondary) */
.about-actions {
  margin-bottom: 3rem;
}

.btn-cv {
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

.btn-cv:hover {
  background-color: var(--brown);
  color: var(--cream);
}

/* Terminal Wrapper with Title */
.terminal-wrapper {
  background-color: rgba(56, 35, 25, 0.1); 
  border: 1px dashed var(--brown);
  border-radius: 0.5rem;
  max-width: 95%;
  overflow: hidden; 
  margin-top: 2rem; 
}

.terminal-title {
  background-color: rgba(56, 35, 25, 0.15); 
  border-bottom: 1px dashed var(--brown);
  padding: 0.5rem 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--brown);
}

.terminal-block {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
}

.terminal-line {
  display: flex;
  gap: 1rem;
}

.terminal-key {
  font-weight: 700;
  color: var(--brown);
  opacity: 0.7;
}

.terminal-value {
  color: var(--brown);
}

/* Mobile Fallback */
@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr; 
    gap: 4rem;
  }
  
  .header-title {
    font-size: 5rem;
  }
  
  .image-frame {
    max-width: 100%;
  }
  
  .terminal-line {
    flex-direction: column;
    gap: 0.2rem;
  }
}
</style>