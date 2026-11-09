<template>
  <div class="home-view">
    <HeroSection />
    <ProjectsSection />
    <ToolkitSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ToolkitSection from '../components/ToolkitSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>