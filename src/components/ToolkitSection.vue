<template>
  <section class="toolkit-section" id="toolkit">
    
    <!-- Section Header -->
    <div class="section-header">
      <div class="header-label">02 // THE TOOLKIT</div>
      <h2 class="header-title">ALWAYS IN THE MAKING.</h2>
    </div>

    <!-- The 3 Columns -->
    <div class="toolkit-grid">
      
      <!-- Column 1: Development -->
      <div class="toolkit-column">
        <h3 class="column-title">DEVELOPMENT</h3>
        <ul class="skill-list">
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
          <li>MySQL</li>
        </ul>
      </div>

      <!-- Column 2: Design & Visual -->
      <div class="toolkit-column">
        <h3 class="column-title">DESIGN & VISUAL</h3>
        <ul class="skill-list">
          <li>Figma</li>
          <li>UI/UX Design</li>
          <li>Wireframing</li>
          <li>Digital Illustration</li>
          <li>Character Design</li>
          <li>Photoshop</li>
        </ul>
      </div>

      <!-- Column 3: Core Strengths -->
      <div class="toolkit-column">
        <h3 class="column-title">CORE STRENGTHS</h3>
        <ul class="skill-list">
          <li>Problem Solving</li>
          <li>User Research</li>
          <li>Responsive Design</li>
          <li>Project Management</li>
          <li>Creative Direction</li>
        </ul>
      </div>

    </div>

    <!-- The Certificates List -->
    <div class="certificates-area">
      <h3 class="column-title">CERTIFICATES & COURSES</h3>
      
      <!-- We will make these actual links later -->
      <div class="cert-row">
        <span class="cert-issuer">CISCO</span>
        <span class="cert-name">Cybersecurity</span>
        <span class="cert-link">VIEW ↗</span>
      </div>
      
      <div class="cert-row">
        <span class="cert-issuer">CISCO</span>
        <span class="cert-name">Data Science</span>
        <span class="cert-link">VIEW ↗</span>
      </div>
      
      <div class="cert-row">
        <span class="cert-issuer">LIFE CHOICES ACADEMY</span>
        <span class="cert-name">YouthCode</span>
        <span class="cert-link">VIEW ↗</span>
      </div>

    </div>
  </section>
</template>

<script setup>
// No logic needed yet
</script>

<style scoped>
/* Main Container */
.toolkit-section {
  background-color: var(--brown); 
  color: var(--cyan); /* Keep base text cyan */
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

/* The 3 Column Grid */
.toolkit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 6rem;
}

/* Individual Column */
.toolkit-column {
  display: flex;
  flex-direction: column;
}

/* CHANGED: Column titles are now Cream */
.column-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  color: var(--cream); 
  border-bottom: 1px solid rgba(80, 220, 232, 0.3); 
}

/* Skill Lists */
.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-list li {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--cyan); /* Explicitly cyan */
}

/* Certificates Area */
.certificates-area {
  margin-top: 4rem;
}

/* Certificate Rows */
.cert-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(80, 220, 232, 0.3);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cert-row:hover {
  background-color: rgba(80, 220, 232, 0.05); 
}

.cert-issuer {
  opacity: 0.7;
  color: var(--cyan);
}

.cert-name {
  color: var(--cyan);
}

/* CHANGED: View links are now Cream */
.cert-link {
  text-align: right;
  font-weight: 700;
  color: var(--cream); 
}

/* Mobile Fallback */
@media (max-width: 900px) {
  .toolkit-grid {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }
  
  .header-title {
    font-size: 5rem;
  }
  
  .cert-row {
    grid-template-columns: 1fr; 
    gap: 0.5rem;
  }
  
  .cert-link {
    text-align: left;
    margin-top: 0.5rem;
  }
}
</style>