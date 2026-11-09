<template>
  <div class="home-view">
    <HeroSection />
    <ProjectsSection />
    <ToolkitSection />
    
    <!-- Add the About section here -->
    <AboutSection />

  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ToolkitSection from '../components/ToolkitSection.vue'
import AboutSection from '../components/AboutSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>