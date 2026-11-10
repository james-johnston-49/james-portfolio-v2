<template>
  <section class="about-section" id="about">
    
    <!-- TOP SECTION: Split layout -->
    <div class="about-top-grid">
      
      <!-- Left: Big Headlines -->
      <div class="about-left">
        <div class="header-label">
          03 // ABOUT
        </div>
        
        <h2 class="about-headline">
          A BUILDER'S<br />
          MIND.
        </h2>
        
        <p class="about-subheadline">
          Different tools. The same curiosity.
        </p>
      </div>

      <!-- Right: Paragraphs & CV -->
      <div class="about-right">
        <!-- Fancy Intro -->
        <p class="about-intro-fancy">
          I am a software developer who believes that technical logic and visual storytelling aren't enemies—they're a team. I specialize in building web applications that are fast, functional, and intuitive to use.
        </p>
        <!-- Standard Body -->
        <p class="about-body">
          Because I also work as a digital artist, I don't just build the logic; I understand how to structure the UI so it feels natural to the user. I approach every project with a builder's mind, but I code with an artist's eye. Ultimately, my goal is simple: to make something that works, and makes people feel something.
        </p>
        
        <div class="about-actions">
          <!-- UPDATED: Correct path to certificates folder -->
          <a href="/certificates/James_Johnston_CV.pdf" class="btn-cv" target="_blank" rel="noopener noreferrer">VIEW CV ↗</a>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
/* Main Container */
.about-section {
  background-color: var(--cyan); 
  color: var(--brown);
  
  padding: 6rem 4rem; 
  
  border-bottom: 2px solid var(--brown);
}

/* --- TOP GRID --- */
.about-top-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem; 
  align-items: start; 
}

.about-left {
  display: flex;
  flex-direction: column;
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

.about-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 6rem; 
  line-height: 0.9;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.about-subheadline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.8rem;
  opacity: 0.9;
}

/* --- RIGHT SIDE TEXT --- */
.about-right {
  display: flex;
  flex-direction: column;
  padding-top: 4rem; 
}

.about-intro-fancy {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: var(--brown);
}

.about-body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.about-actions {
  margin-top: 1rem;
}

/* CV Button */
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

/* Mobile Fallback */
@media (max-width: 900px) {
  .about-top-grid {
    grid-template-columns: 1fr; 
    gap: 2rem;
  }
  
  .about-headline {
    font-size: 5rem;
  }
  
  .about-right {
    padding-top: 0;
  }
}
</style>