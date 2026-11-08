<template>
  <div class="home-view">
    <HeroSection />
    <ProjectsSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>