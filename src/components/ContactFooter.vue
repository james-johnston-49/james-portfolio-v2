<template>
  <footer class="contact-section" id="contact">
    
    <!-- TOP LABEL -->
    <div class="header-label">
      <span class="dot"></span> 05 // CONTACT
    </div>

    <div class="contact-grid">
      
      <!-- LEFT SIDE: Massive Text & Contact Info -->
      <div class="contact-left">
        <h2 class="contact-headline">
          LET'S MAKE<br />
          SOMETHING<br />
          INTERESTING.
        </h2>

        <div class="contact-details">
          <div class="details-label">HAVE AN IDEA? SAY HELLO.</div>
          
          <a href="mailto:jaston2706@gmail.com" class="email-link">
            jaston2706@gmail.com
          </a>
          
          <a href="tel:+27691379046" class="phone-link">
            +27 69 137 9046
          </a>
        </div>
      </div>

      <!-- RIGHT SIDE: Social Links -->
      <div class="contact-right">
        <div class="social-links">
          
          <div class="social-row">
            <span class="social-platform">GITHUB</span>
            <a href="https://github.com/james-johnston-49" target="_blank" class="social-handle">
              james-johnston-49 ↗
            </a>
          </div>

          <div class="social-row">
            <span class="social-platform">INSTAGRAM</span>
            <a href="https://instagram.com" target="_blank" class="social-handle">
              james.not.so.special ↗
            </a>
          </div>

          <div class="social-row">
            <span class="social-platform">LINKEDIN</span>
            <a href="https://linkedin.com" target="_blank" class="social-handle">
              james-johnston-ab2a412b3 ↗
            </a>
          </div>

        </div>
      </div>

    </div>

    <!-- BOTTOM BAR -->
    <div class="footer-bottom">
      <span class="copyright">© 2026 JAMES JOHNSTON. ALL RIGHTS RESERVED.</span>
      <span class="footer-script">A little logic. A lot of imagination.</span>
    </div>
  </footer>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Main Container */
.contact-section {
  background-color: var(--brown); 
  color: var(--cyan); 
  padding: 4rem 4rem 2rem 4rem; /* Reduced top padding from 6rem to 4rem */
  
  /* CHANGED: Removed min-height: 80vh and replaced it with auto */
  min-height: auto; 
  
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--brown);
}

/* TOP LABEL */
.header-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 3rem; /* Reduced from 4rem */
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--cyan);
  border-radius: 50%;
}

/* MAIN GRID */
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr; 
  gap: 4rem;
  /* Removed flex-grow: 1 so it doesn't stretch to fill the screen */
}

/* --- LEFT SIDE --- */
.contact-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Changed from space-between to flex-start */
}

.contact-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8.5rem; 
  line-height: 0.9;
  margin-bottom: 3rem; /* Reduced from 4rem */
  letter-spacing: 0.02em;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.details-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.7;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

/* ... Keep Email and Phone styles exactly the same ... */
.email-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  color: var(--cream); 
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
  width: fit-content;
}

.email-link:hover {
  color: var(--cyan);
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 6px;
}

.phone-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: var(--cream);
  text-decoration: none;
  font-weight: 700;
  margin-top: 1rem;
  transition: color 0.2s ease;
}

.phone-link:hover {
  color: var(--cyan);
}

/* --- RIGHT SIDE --- */
.contact-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns links to the top instead of bottom */
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.social-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(80, 220, 232, 0.2); 
  padding-bottom: 0.8rem;
}

.social-platform {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--cream);
  opacity: 0.8;
}

.social-handle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cyan);
  text-decoration: none;
  transition: color 0.2s ease; 
}

.social-handle:hover {
  color: var(--cream);
}

/* --- BOTTOM BAR --- */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid rgba(80, 220, 232, 0.2);
  padding-top: 2rem;
  
  /* CHANGED: Reduced margin-top from 6rem to 3rem */
  margin-top: 3rem; 
  
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.copyright {
  color: var(--cream);
  opacity: 0.8;
}

.footer-script {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--cyan); 
  opacity: 1;
}

/* Mobile Fallback */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr; 
    gap: 3rem; /* Reduced gap on mobile too */
  }
  
  .contact-headline {
    font-size: 5rem;
  }
  
  .email-link {
    font-size: 2.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>