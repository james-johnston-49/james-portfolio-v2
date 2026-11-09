<template>
  <div class="home-view">
    <HeroSection />
    <ProjectsSection />
    <ToolkitSection />
    <AboutSection />
    <ArtTeaserSection />
    
    <!-- Add the Contact Footer here -->
    <ContactFooter />

  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ToolkitSection from '../components/ToolkitSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ArtTeaserSection from '../components/ArtTeaserSection.vue'
import ContactFooter from '../components/ContactFooter.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>