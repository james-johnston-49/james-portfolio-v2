
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
                  <span>{{ currentProject.role }}</span>
                </div>

                <div class="detail-row">
                  <strong>STACK:</strong>
                  <span>{{ currentProject.stack }}</span>
                </div>

              </div>

              <a
                :href="currentProject.link"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW PROJECT ↗
              </a>

            </div>

            <!-- RIGHT: PROJECT IMAGE -->
            <div class="project-image">
              <div class="img-placeholder">
                {{ currentProject.name }} UI
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


// PROJECT DATA
const projects = ref([
  {
    name: 'GigBridge',
    date: 'MAR 2, 2024',

    desc: 'A dual-sided freelance portal connecting early-career talent with small businesses needing agile support.',

    tools: 'Vue.js / Python',

    role: 'Full-Stack Developer & UI Designer',

    stack: 'Vue.js, Python, MySQL, Figma',

    colorClass: 'card-brown',

    link: '#'
  },

  {
    name: 'ModernTech',
    date: 'JAN 15, 2024',

    desc: 'A full-stack HR portal replacing fragmented spreadsheet-and-email processes with a single, user-friendly system.',

    tools: 'React / Node.js',

    role: 'Front-End Developer',

    stack: 'React, Node.js, Express, Figma',

    colorClass: 'card-yellow',

    link: '#'
  },

  {
    name: "JAM'N",
    date: 'NOV 10, 2023',

    desc: 'A community-driven music discovery web app and B2C multi-vendor marketplace for South African artists.',

    tools: 'Vue.js / Firebase',

    role: 'UI/UX Designer & Front-End Dev',

    stack: 'Vue.js, Firebase, CSS, Figma',

    colorClass: 'card-cyan',

    link: '#'
  }
])


// ACTIVE PROJECT
// Project 01 is open by default.
const activeIndex = ref(0)


// CURRENT PROJECT
const currentProject = computed(() => {
  return projects.value[activeIndex.value]
})


// SWITCH PROJECT
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

  padding: 6rem 4rem 10rem;

  border-bottom: 2px solid var(--brown);
}


/* =========================================
   SECTION HEADER
========================================= */

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

  font-size: 6rem;
  line-height: 0.9;

  margin: 0;
}


/* =========================================
   PROJECT STACK
========================================= */

.project-stack {
  position: relative;

  width: 100%;
  max-width: 1320px;

  margin: 0 auto;
}


/* =========================================
   ACTIVE FOLDER
========================================= */

.folder-card {
  position: relative;

  width: 100%;
  height: 600px;

  box-sizing: border-box;

  border: 2px solid var(--brown);
  border-radius: 1rem;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

  transition: background-color 0.3s ease;
}


/* =========================================
   FOLDER COLOURS
========================================= */

.card-brown {
  background-color: var(--brown);
  color: var(--cyan);
}

.card-yellow {
  background-color: #f4c33b;
  color: var(--brown);
}

.card-cyan {
  background-color: var(--cyan);
  color: var(--brown);
}


/* =========================================
   TOP FOLDER TAB
========================================= */

.folder-tab {
  position: absolute;

  top: -2.5rem;
  left: -2px;

  padding: 0.65rem 2.2rem;

  background-color: inherit;
  color: inherit;

  border: 2px solid var(--brown);
  border-bottom: none;

  border-radius: 1rem 1rem 0 0;

  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;

  letter-spacing: 0.05em;

  white-space: nowrap;
}


/* =========================================
   PROJECT CONTENT
========================================= */

.folder-content {
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  padding: 4rem;
  padding-bottom: 5rem;

  display: grid;

  grid-template-columns: 1fr 1.2fr;

  gap: 4rem;

  align-items: center;
}


/* =========================================
   PROJECT INFORMATION
========================================= */

.project-info {
  display: flex;
  flex-direction: column;
}

.project-meta-top {
  display: flex;

  justify-content: space-between;
  gap: 1rem;

  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;

  margin-bottom: 0.5rem;

  opacity: 0.7;
}

.project-name {
  font-family: 'Bebas Neue', sans-serif;

  font-size: 5rem;
  line-height: 1;

  margin: 0 0 1rem;
}

.project-desc {
  font-family: 'Inter', sans-serif;

  font-size: 1.1rem;
  line-height: 1.6;

  margin-bottom: 1.5rem;
}


/* =========================================
   PROJECT DETAILS
========================================= */

.project-details {
  background-color: rgba(0, 0, 0, 0.1);

  padding: 1.5rem;

  border-radius: 0.5rem;

  margin-bottom: 1.5rem;

  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  border: 1px dashed currentColor;
}

.card-yellow .project-details,
.card-cyan .project-details {
  background-color: rgba(255, 255, 255, 0.3);
}

.detail-row {
  display: flex;
  flex-wrap: wrap;

  gap: 0.4rem;
}


/* =========================================
   PROJECT LINK
========================================= */

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
}

.project-link:hover {
  opacity: 0.6;
}


/* =========================================
   PROJECT IMAGE
========================================= */

.project-image {
  width: 100%;

  aspect-ratio: 4 / 3;

  background-color: rgba(0, 0, 0, 0.1);

  border: 1px solid currentColor;

  border-radius: 0.5rem;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.img-placeholder {
  font-family: 'JetBrains Mono', monospace;

  font-size: 1rem;

  opacity: 0.5;
}


/* =========================================
   BOTTOM PROJECT SWITCHER
========================================= */

.project-switcher {
  position: absolute;

  bottom: -2px;
  left: 0;

  width: 100%;

  display: flex;
  align-items: flex-end;

  gap: 0.6rem;

  padding-left: 12rem;

  box-sizing: border-box;
}

.switcher-tab {
  position: relative;

  padding: 0.65rem 2rem;

  border: 2px solid var(--brown);
  border-bottom: none;

  border-radius: 1rem 1rem 0 0;

  font-family: 'JetBrains Mono', monospace;

  font-size: 0.8rem;
  font-weight: 700;

  letter-spacing: 0.05em;

  cursor: pointer;

  transition: transform 0.25s ease;
}

.switcher-tab:hover {
  transform: translateY(-6px);
}


/* =========================================
   PROJECT TRANSITION
========================================= */

.project-enter-active,
.project-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.25s ease;
}

.project-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.project-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 900px) {

  .projects-section {
    padding: 4rem 1.5rem 8rem;
  }

  .header-title {
    font-size: 4rem;
  }

  .folder-card {
    height: auto;
    min-height: 600px;
  }

  .folder-content {
    grid-template-columns: 1fr;

    padding: 3rem 1.5rem 5rem;

    gap: 2rem;
  }

  .project-name {
    font-size: 4rem;
  }

  .project-switcher {
    padding-left: 1rem;
    gap: 0.3rem;
  }

  .switcher-tab {
    padding: 0.6rem 0.8rem;

    font-size: 0.65rem;
  }

}

</style>
