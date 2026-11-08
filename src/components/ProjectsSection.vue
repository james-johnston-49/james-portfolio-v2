<template>
  <section class="projects-section" id="projects">
    
    <!-- Section Header -->
    <div class="section-header">
      <div class="header-label">01 // SELECTED PROJECTS</div>
      <h2 class="header-title">BUILT TO WORK.</h2>
    </div>

    <!-- The Folder Stack -->
    <div class="project-stack">
      
      <!-- Loop through the projects -->
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="folder-card"
        :class="[
          project.colorClass, 
          { 'is-active': activeProject === index }
        ]"
        @click="activeProject = index"
      >
        <!-- The Folder Tab (Offset using inline styles based on index) -->
        <div 
          class="folder-tab" 
          :style="{ left: `${index * 8}rem` }"
        >
          <span>// PROJECT 0{{ index + 1 }}</span>
        </div>
        
        <div class="folder-content">
          <div class="project-info">
            <div class="project-meta-top">
              <span>{{ project.date }}</span>
              <span>{{ project.tools }}</span>
            </div>
            <h3 class="project-name">{{ project.name }}</h3>
            
            <!-- This wrapper expands and collapses -->
            <div class="expandable-content">
              <div class="inner-padding">
                <p class="project-desc">
                  {{ project.desc }}
                </p>
                
                <div class="project-details">
                  <div class="detail-row">
                    <strong>ROLE:</strong> <span>{{ project.role }}</span>
                  </div>
                  <div class="detail-row">
                    <strong>STACK:</strong> <span>{{ project.stack }}</span>
                  </div>
                </div>

                <a href="#" class="project-link" @click.stop>VIEW PROJECT ↗</a>
              </div>
            </div>
          </div>
          
          <!-- The Image -->
          <div class="project-image">
            <div class="img-placeholder">{{ project.name }} UI</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    name: 'GigBridge',
    date: 'MAR 2, 2024',
    desc: 'A dual-sided freelance portal connecting early-career talent with small businesses needing agile support.',
    tools: 'Vue.js / Python',
    role: 'Full-Stack Developer & UI Designer',
    stack: 'Vue.js, Python, MySQL, Figma',
    colorClass: 'card-brown'
  },
  {
    name: 'ModernTech',
    date: 'JAN 15, 2024',
    desc: 'A full-stack HR portal replacing fragmented spreadsheet-and-email processes with a single, user-friendly system.',
    tools: 'React / Node.js',
    role: 'Front-End Developer',
    stack: 'React, Node.js, Express, Figma',
    colorClass: 'card-yellow'
  },
  {
    name: "JAM'N",
    date: 'NOV 10, 2023',
    desc: 'A community-driven music discovery web app and B2C multi-vendor marketplace for South African artists.',
    tools: 'Vue.js / Firebase',
    role: 'UI/UX Designer & Front-End Dev',
    stack: 'Vue.js, Firebase, CSS, Figma',
    colorClass: 'card-cyan'
  }
])

// Start with the third project (index 2) at the front
const activeProject = ref(2) 
</script>

<style scoped>
/* Main Container */
.projects-section {
  background-color: var(--cream); 
  color: var(--brown);
  padding: 6rem 4rem 12rem 4rem; /* Increased bottom padding for the taller stack */
  border-bottom: 2px solid var(--brown);
}

/* Section Header */
.section-header {
  margin-bottom: 4rem;
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

/* The Folder Stack */
.project-stack {
  display: flex;
  flex-direction: column;
  align-items: center; 
  position: relative;
  padding-top: 3rem; 
}

/* Individual Folder Card */
.folder-card {
  background-color: var(--brown);
  color: var(--cyan);
  border: 2px solid var(--brown);
  border-radius: 1rem; 
  width: 100%;
  max-width: 1200px; /* Made wider */
  
  /* 1. MORE OVERLAP */
  margin-top: -250px; 
  
  /* Made taller */
  min-height: 550px; 
  
  /* Smooth sliding animation */
  transition: margin-top 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
              transform 0.3s ease,
              box-shadow 0.3s ease;
              
  box-shadow: 0 -10px 20px rgba(0,0,0,0.15);
  cursor: pointer;
  position: relative;
}

/* The very first card doesn't need a negative margin */
.folder-card:first-child {
  margin-top: 0;
}

/* 3. HOVER STATE (No z-index change, just a slight lift) */
.folder-card:not(.is-active):hover {
  transform: translateY(-15px); 
  box-shadow: 0 -20px 40px rgba(0,0,0,0.25);
}

/* ACTIVE STATE */
.folder-card.is-active {
  margin-top: 0; 
  margin-bottom: 40px; 
  z-index: 10 !important;
  cursor: default;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3); 
}

/* Base stacking order */
.folder-card:nth-child(1) { z-index: 1; order: 1; }
.folder-card:nth-child(2) { z-index: 2; order: 2; }
.folder-card:nth-child(3) { z-index: 3; order: 3; }

/* The Color Variants */
.card-brown { background-color: var(--brown); color: var(--cyan); }
.card-yellow { background-color: #f4c33b; color: var(--brown); border-color: var(--brown); }
.card-cyan { background-color: var(--cyan); color: var(--brown); border-color: var(--brown); }

/* The Folder Tab */
.folder-tab {
  position: absolute;
  top: -2.5rem; 
  /* Left is handled by inline styles now */
  background-color: inherit; 
  padding: 0.5rem 2rem;
  border: 2px solid inherit;
  border-bottom: none;
  border-radius: 1rem 1rem 0 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: left 0.4s ease; /* Animates the tab when becoming active */
}

/* Folder Content Area */
.folder-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  padding: 3rem 4rem; 
  gap: 4rem;
  align-items: center;
  height: 100%; 
}

/* Project Info (Left) */
.project-info {
  display: flex;
  flex-direction: column;
}

.project-meta-top {
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.project-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 5rem; /* Made name bigger */
  line-height: 1;
  margin-bottom: 0;
}

/* THE SLIDE-OUT ANIMATION */
.expandable-content {
  display: grid;
  grid-template-rows: 0fr; 
  transition: grid-template-rows 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  opacity: 0;
}

.folder-card.is-active .expandable-content {
  grid-template-rows: 1fr; 
  opacity: 1;
}

.inner-padding {
  overflow: hidden;
  padding-top: 1.5rem;
}

.project-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem; /* Slightly bigger text */
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-details {
  background-color: rgba(0,0,0,0.1); 
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border: 1px dashed currentColor; 
}

.card-yellow .project-details, 
.card-cyan .project-details {
  background-color: rgba(255,255,255,0.3); 
}

.project-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.2rem;
  width: fit-content;
  transition: opacity 0.2s ease;
  display: inline-block;
}

.project-link:hover { opacity: 0.6; }

/* Project Image (Right) */
.project-image {
  width: 100%;
  /* Made image area taller */
  aspect-ratio: 4 / 3; 
  background-color: rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid currentColor; 
}

.img-placeholder {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  opacity: 0.5;
}
</style>