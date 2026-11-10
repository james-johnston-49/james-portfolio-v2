<template>
  <section class="projects-section" id="projects">

    <!-- SECTION HEADER -->
    <div class="section-header">
      <div class="header-label">01 // SELECTED PROJECTS</div>
      <h2 class="header-title">BUILT TO WORK.</h2>
    </div>

    <!-- FILING CABINET -->
    <div class="project-stack">

      <!-- ACTIVE PROJECT -->
      <div
        class="folder-card"
        :class="currentProject.colorClass"
      >

        <!-- TOP FOLDER TAB -->
        <div class="folder-tab">
          // PROJECT 0{{ activeIndex + 1 }}
        </div>

        <!-- PROJECT CONTENT -->
        <Transition name="project" mode="out-in">

          <div class="folder-content" :key="activeIndex">

            <!-- LEFT: PROJECT INFORMATION -->
            <div class="project-info">

              <div class="project-meta-top">
                <span>{{ currentProject.date }}</span>
                <span>{{ currentProject.tools }}</span>
              </div>

              <h3 class="project-name">
                {{ currentProject.name }}
              </h3>

              <p class="project-desc">
                {{ currentProject.desc }}
              </p>

              <div class="project-details">

                <div class="detail-row">
                  <strong>ROLE:</strong>
                  <ul class="role-list">
                    <li v-for="(roleItem, i) in currentProject.roles" :key="i">
                      {{ roleItem }}
                    </li>
                  </ul>
                </div>

                <div class="detail-row">
                  <strong>STACK:</strong>
                  <span>{{ currentProject.stack }}</span>
                </div>

              </div>

            </div>

            <!-- RIGHT: PROJECT IMAGE & LINKS -->
            <div class="project-image-area">
              
              <div class="project-image">
                <img 
                  v-if="currentProject.image" 
                  :src="currentProject.image" 
                  :alt="currentProject.name + ' screenshot'" 
                  class="project-screenshot"
                />
                <div v-else class="img-placeholder">
                  {{ currentProject.name }} UI
                </div>
              </div>

              <!-- LINKS GROUP -->
              <div class="project-links-group">
                <a
                  v-if="currentProject.link"
                  :href="currentProject.link"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE SITE ↗
                </a>

                <a
                  v-if="currentProject.github"
                  :href="currentProject.github"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB ↗
                </a>

                <a
                  v-if="currentProject.figma"
                  :href="currentProject.figma"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FIGMA DESIGN ↗
                </a>
              </div>

            </div>

          </div>

        </Transition>

        <!-- BOTTOM PROJECT TABS -->
        <div class="project-switcher">

          <button
            v-for="(project, index) in projects"
            :key="project.name"
            v-show="index !== activeIndex"
            class="switcher-tab"
            :class="project.colorClass"
            @click="selectProject(index)"
          >
            // PROJECT 0{{ index + 1 }}
          </button>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup>
import { ref, computed } from 'vue'

// IMPORT IMAGES
import gigbridgeImg from '../assets/images/gigbridge.png'
import moderntechImg from '../assets/images/moderntech.png'
import jamnImg from '../assets/images/jamn.png'

// PROJECT DATA
const projects = ref([
  {
    name: 'GigBridge',
    date: 'JUNE 2026',
    desc: 'A specialized, dual-sided freelance portal that bridges the gap between early-career talent seeking portfolio-building experience and small businesses needing agile, cost-effective support.',
    tools: 'HTML / CSS / JS',
    roles: [
      'Unified CSS & Styling',
      'Community Page Features',
      'Wireframe Design'
    ],
    stack: 'HTML5, CSS3, JavaScript, Figma, Git & GitHub',
    colorClass: 'card-brown',
    image: gigbridgeImg,
    link: 'https://leratoyapi.github.io/lca-gigbridge-startup-launch/',
    github: 'https://github.com/leratoyapi/lca-gigbridge-startup-launch',
    figma: 'https://www.figma.com/design/ScHK2SBde0vTjTiXaQuwgZ/SKILLBRIDGE?node-id=0-1&t=VCK5146sENQSTqEn-0'
  },

  {
    name: 'ModernTech',
    date: 'AUG 2026', 
    desc: 'A full-stack HR portal built to replace fragmented spreadsheet-and-email HR processes with a single, user-friendly system.',
    tools: 'Vue 3 / Node.js',
    roles: [
      'Sole UI/UX Designer (Figma)',
      'Front-End Assistance (Attendance & Time Off)',
      'Dashboard & Performance Reviews APIs'
    ],
    stack: 'Vue 3, Chart.js, Node.js, Express, MySQL, Figma',
    colorClass: 'card-yellow',
    image: moderntechImg,
    link: 'https://roaring-fenglisu-d675db.netlify.app/',
    github: 'https://github.com/chefmanie27-pixel/project-modern-tech-solutions-',
    figma: 'https://www.figma.com/design/XRBCO1Ay0vCAoLJJ9kVhI9/Untitled?node-id=0-1&t=2DelupChxbIR18RJ-1'
  },

  {
    name: "JAM'N",
    date: 'SEPT 2026',
    desc: 'A community-driven music discovery web app and B2C multi-vendor marketplace built specifically for independent South African artists, producers, and music consumers.',
    tools: 'Vue 3 / Node.js',
    roles: [
      'Sole Wireframe Designer',
      'Front-End (Discover, Library, Profiles, Account, Settings, Beat Store, Subscriptions)'
    ],
    stack: 'Vue 3, Node.js, MySQL, Figma',
    colorClass: 'card-cyan',
    image: jamnImg, 
    link: 'https://jamn-two.vercel.app/',
    github: 'https://github.com/totoseahlumile-dot/JAM-N',
    figma: 'https://www.figma.com/design/wZBJ5r5cWHu22gxKfd9NJU/JAM-N?node-id=0-1'
  }
])

const activeIndex = ref(0)
const currentProject = computed(() => projects.value[activeIndex.value])

const selectProject = (index) => {
  if (index === activeIndex.value) return
  activeIndex.value = index
}

</script>


<style scoped>
/* =========================================
   MAIN SECTION
========================================= */
.projects-section {
  background-color: var(--cream);
  color: var(--brown);
  
  /* CHANGED: Reduced bottom padding by 2rem */
  padding: 6rem 4rem 8rem; 
  
  border-bottom: 2px solid var(--brown);
}

/* CHANGED: Increased margin-bottom by 2rem to push the stack down */
.section-header { margin-bottom: 6rem; }

.header-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem; font-weight: 700;
  letter-spacing: 0.05em; margin-bottom: 1rem;
}
.header-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 6rem; line-height: 0.9; margin: 0;
}

/* =========================================
   PROJECT STACK & FOLDER
========================================= */
.project-stack {
  position: relative; width: 100%;
  max-width: 1150px; 
  margin: 0 auto;
}

.folder-card {
  position: relative; width: 100%;
  height: 600px; 
  box-sizing: border-box;
  border: 2px solid var(--brown); border-radius: 1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.card-brown { background-color: var(--brown); color: var(--cyan); }
.card-yellow { background-color: #f4c33b; color: var(--brown); }
.card-cyan { background-color: var(--cyan); color: var(--brown); }

.folder-tab {
  position: absolute; top: -2.5rem; left: -2px;
  padding: 0.65rem 2.2rem; background-color: inherit; color: inherit;
  border: 2px solid var(--brown); border-bottom: none;
  border-radius: 1rem 1rem 0 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.05em; white-space: nowrap;
}

/* =========================================
   CONTENT
========================================= */
.folder-content {
  width: 100%; height: 100%; box-sizing: border-box;
  padding: 3rem 4rem 4rem 4rem; 
  display: grid; 
  grid-template-columns: 0.8fr 1.2fr;
  gap: 4rem; 
  align-items: start; 
}

.project-info { 
  display: flex; 
  flex-direction: column; 
  height: 100%; 
  justify-content: space-between; 
}

.project-meta-top {
  display: flex; justify-content: space-between; gap: 1rem;
  font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;
  margin-bottom: 1rem; opacity: 0.7;
}
.project-name { 
  font-family: 'Bebas Neue', sans-serif; 
  font-size: 4.5rem; 
  line-height: 1; 
  margin: 0 0 1.5rem; 
}
.project-desc { 
  font-family: 'Inter', sans-serif; 
  font-size: 1rem; 
  line-height: 1.8; 
  margin-bottom: 2rem; 
}

.project-details {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1.5rem; 
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'JetBrains Mono', monospace; 
  font-size: 0.85rem; 
  gap: 1rem; 
  display: flex; 
  flex-direction: column;
  border: 1px dashed currentColor;
}

.card-yellow .project-details, .card-cyan .project-details { background-color: rgba(255, 255, 255, 0.3); }

.detail-row { 
  display: flex; 
  flex-direction: column; 
  gap: 0.4rem; 
}

.role-list {
  list-style: none; 
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.role-list li {
  position: relative;
  padding-left: 1rem;
}

.role-list li::before {
  content: '—'; 
  position: absolute;
  left: 0;
  opacity: 0.5;
}

/* =========================================
   IMAGE & LINKS
========================================= */
.project-image-area {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-image {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem; 
}

.project-screenshot {
  width: 100%;
  height: auto; 
  border: 2px solid currentColor; 
  border-radius: 0.5rem;
}

.img-placeholder {
  width: 100%; 
  aspect-ratio: 16 / 9;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid currentColor; 
  border-radius: 0.5rem;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem; opacity: 0.5;
}

.project-links-group { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 2rem; 
  margin-top: 2.5rem; 
}

.project-link {
  font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 700;
  text-decoration: none; color: inherit; border-bottom: 2px solid currentColor;
  padding-bottom: 0.2rem; width: fit-content; transition: opacity 0.2s ease;
}
.project-link:hover { opacity: 0.6; }

/* =========================================
   BOTTOM SWITCHER & TRANSITIONS
========================================= */
.project-switcher {
  position: absolute; bottom: -2px; left: 0;
  width: 100%; display: flex; align-items: flex-end;
  gap: 0.6rem; padding-left: 12rem; box-sizing: border-box;
}
.switcher-tab {
  position: relative; padding: 0.65rem 2rem;
  border: 2px solid var(--brown); border-bottom: none;
  border-radius: 1rem 1rem 0 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em;
  cursor: pointer; transition: transform 0.25s ease;
}
.switcher-tab:hover { transform: translateY(-6px); }

.project-enter-active, .project-leave-active { transition: opacity 0.2s ease, transform 0.25s ease; }
.project-enter-from { opacity: 0; transform: translateY(15px); }
.project-leave-to { opacity: 0; transform: translateY(-10px); }

/* =========================================
   MOBILE
========================================= */
@media (max-width: 900px) {
  .projects-section { padding: 4rem 1.5rem 8rem; }
  .header-title { font-size: 4rem; }
  .folder-card { height: auto; min-height: 600px; }
  .folder-content { grid-template-columns: 1fr; padding: 3rem 1.5rem 5rem; gap: 2rem; }
  .project-name { font-size: 4rem; }
  .project-image { margin-top: 0; }
  .project-links-group { margin-top: 1.5rem; margin-bottom: 1rem; }
  .project-switcher { padding-left: 1rem; gap: 0.3rem; }
  .switcher-tab { padding: 0.6rem 0.8rem; font-size: 0.65rem; }
}
</style>