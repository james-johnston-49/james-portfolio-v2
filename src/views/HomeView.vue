<template>
  <div class="home-view">
    
    <!-- 1. Hero Section -->
    <HeroSection />

    <!-- 2. Projects Section (We will build this next) -->
    <!-- <ProjectsSection /> -->

    <!-- 3. Toolkit Section -->
    <!-- <ToolkitSection /> -->

    <!-- 4. About Section -->
    <!-- <AboutSection /> -->

    <!-- 5. Art Teaser Section -->
    <!-- <ArtTeaserSection /> -->

    <!-- 6. Contact Footer -->
    <!-- <ContactFooter /> -->

  </div>
</template>

<script setup>
// Import the components you are using
import HeroSection from '../components/HeroSection.vue'

// Import future components here as we build them:
// import ProjectsSection from '../components/ProjectsSection.vue'
// import ToolkitSection from '../components/ToolkitSection.vue'
// import AboutSection from '../components/AboutSection.vue'
// import ArtTeaserSection from '../components/ArtTeaserSection.vue'
// import ContactFooter from '../components/ContactFooter.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>