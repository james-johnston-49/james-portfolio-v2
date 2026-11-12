<template>
  <section class="projects-section" id="projects">

    <!-- SECTION HEADER -->
    <div class="section-header" v-reveal>
      <div class="header-label">01 // SELECTED PROJECTS</div>
      <h2 class="header-title">BUILT TO WORK.</h2>
    </div>

    <!-- FILING CABINET -->
    <div class="project-stack" v-reveal>

      <!-- TOP TABS: always rendered, always in the same order -->
      <div class="project-tabs" role="tablist" aria-label="Projects">
        <button
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-tab"
          :class="[project.colorClass, { 'is-active': index === activeIndex }]"
          role="tab"
          :aria-selected="index === activeIndex"
          @click="selectProject(index)"
        >
          // PROJECT 0{{ index + 1 }}
        </button>
      </div>

      <!-- THE FOLDER -->
      <div class="folder-card" :class="currentProject.colorClass">

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
  padding: 6rem 4rem 8rem;
  border-bottom: 2px solid var(--brown);
}

.section-header { margin-bottom: 4rem; }

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
   PROJECT STACK
========================================= */
.project-stack {
  position: relative; width: 100%;
  max-width: 1150px;
  margin: 0 auto;
}

/* =========================================
   TOP TABS (fixed order, always visible)
========================================= */
.project-tabs {
  display: flex;
  align-items: flex-end;   /* all tabs share the same baseline: the card's top edge */
  gap: 0.6rem;
  position: relative;
}

.project-tab {
  position: relative;
  z-index: 0;              /* below the card (z-index 1): the card edge covers a tucked tab's bottom */
  padding: 0.65rem 2.2rem;
  border: 2px solid var(--brown);
  border-bottom: none;
  border-radius: 1rem 1rem 0 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.05em; white-space: nowrap;
  cursor: pointer;

  /* INACTIVE: tucked 6px behind the card */
  transform: translateY(6px);
  transition: transform 0.2s ease;
}

.project-tab:not(.is-active):hover { transform: translateY(3px); }

/* Thin strip that covers the card's top border so the active tab fuses into the folder.
   It's a separate element so the tab itself never changes size. */
.project-tab::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background-color: inherit;
  opacity: 0;
  transition: opacity 0.1s linear;
}

/* ACTIVE: rises, THEN moves above the card and the strip fades in */
.project-tab.is-active {
  z-index: 2;
  transform: translateY(0);
  cursor: default;
  /* z-index flips after the 0.2s rise has finished, so the tab never pops over the card mid-move */
  transition: transform 0.2s ease, z-index 0s linear 0.2s;
}

.project-tab.is-active::after {
  opacity: 1;
  transition: opacity 0.1s linear 0.18s;
}

/* Colours (shared by the tabs and the card) */
.card-brown  { background-color: var(--brown); color: var(--cyan); }
.card-yellow { background-color: #f4c33b; color: var(--brown); }
.card-cyan   { background-color: var(--cyan); color: var(--brown); }

/* =========================================
   THE FOLDER
========================================= */
.folder-card {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  border: 2px solid var(--brown);
  border-radius: 0 1rem 1rem 1rem;   /* square top-left so Tab 1 joins it seamlessly */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  /* same duration as the tab's rise, so tab and card finish together */
  transition: background-color 0.2s ease, color 0.2s ease;
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
   CONTENT TRANSITIONS
========================================= */
.project-enter-active, .project-leave-active { transition: opacity 0.2s ease, transform 0.25s ease; }
.project-enter-from { opacity: 0; transform: translateY(15px); }
.project-leave-to { opacity: 0; transform: translateY(-10px); }

/* Respect people who ask their device for less motion */
@media (prefers-reduced-motion: reduce) {
  .project-tab, .project-tab::after, .folder-card,
  .project-enter-active, .project-leave-active { transition-duration: 0.01s; transition-delay: 0s; }
}

/* =========================================
   MOBILE
========================================= */
@media (max-width: 900px) {
  .projects-section {
    padding: 4rem 1.5rem 8rem;
  }

  .header-title {
    font-size: 5rem;
  }

  /* Three equal tabs that always fit the screen width */
  .project-tabs { gap: 0.3rem; }

  .project-tab {
    flex: 1 1 0;
    min-width: 0;
    padding: 0.55rem 0.3rem;
    font-size: 0.6rem;
    letter-spacing: 0.02em;
    text-align: center;
    border-radius: 0.75rem 0.75rem 0 0;
  }

  .folder-card {
    height: auto;
    min-height: 100%;
    padding-bottom: 2rem;
  }

  .folder-content {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem 0 1.5rem;
    gap: 2rem;
  }

  .project-name {
    font-size: 4rem;
  }

  .project-desc {
    font-size: 0.95rem;
  }

  .project-image {
    margin-top: 0;
    width: 100%;
  }

  .project-screenshot {
    width: 100%;
  }

  .project-links-group {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    gap: 1.5rem;
    justify-content: center;
  }
}
</style>