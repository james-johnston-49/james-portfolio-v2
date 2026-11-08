<template>
  <section class="hero-section">
    
    <!-- LEFT SIDE: TEXT -->
    <div class="hero-text">
      
      <!-- Top Label -->
      <div class="hero-label">
        // SOFTWARE DEVELOPER + DIGITAL ARTIST
      </div>

      <!-- Massive Headline -->
      <h1 class="hero-headline">
        SERIOUS<br />
        ABOUT<br />
        PLAY.
      </h1>

      <!-- Sub-headline -->
      <p class="hero-subheadline">
        There's room for creativity in code. I'm always looking for new ways to build and bring ideas to life.
      </p>

      <!-- Intro Paragraph -->
      <p class="hero-intro">
        Hi, I'm James. I'm a software developer and digital artist. I build meaningful web applications and interactive experiences, approaching every project with a developer's logic and an artist's eye for detail.
      </p>

      <!-- Buttons -->
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">EXPLORE MY WORK</a>
        <a href="#" class="btn-secondary">DOWNLOAD CV</a>
      </div>

    </div>

    <!-- RIGHT SIDE: IMAGE -->
    <div class="hero-image-area">
      <div class="placeholder-box">Image Carousel</div>
    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  padding: 4rem 2rem;
  display: flex;
  gap: 4rem;
}

.placeholder-box {
  width: 100%;
  height: 400px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>