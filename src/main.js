import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import './assets/main.css'

const app = createApp(App)

// --- THE SCROLL ANIMATION DIRECTIVE ---
app.directive('reveal', {
  mounted(el) {
    // Set initial hidden state
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When it enters the screen, reveal it
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          // Stop observing once it's revealed
          observer.unobserve(el)
        }
      })
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    })

    observer.observe(el)
  }
})

app.use(router)
app.use(store)
app.mount('#app')