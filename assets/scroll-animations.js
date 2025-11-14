/**
 * Broadcast Theme - Scroll Animation System
 * Apple-quality scroll reveal animations for all sections
 */

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "-10% 0px -10% 0px",
    }

    this.init()
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setupAnimations())
    } else {
      this.setupAnimations()
    }
  }

  setupAnimations() {
    // Create intersection observer
    this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), this.observerOptions)

    // Observe all animated elements
    this.observeElements()

    // Setup parallax effects
    this.setupParallax()

    // Setup stagger animations
    this.setupStaggerAnimations()
  }

  observeElements() {
    // Observe sections
    const sections = document.querySelectorAll("[data-scroll-animate]")
    sections.forEach((section) => this.observer.observe(section))

    // Observe individual elements
    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((element) => this.observer.observe(element))
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      const element = entry.target
      const animationType = element.getAttribute("data-scroll-animate") || element.getAttribute("data-animate")

      // Calculate visibility percentage
      const visibilityPercent = Math.round(entry.intersectionRatio * 100)
      element.style.setProperty("--scroll-progress", visibilityPercent / 100)

      if (entry.isIntersecting) {
        // Element is in view
        if (entry.intersectionRatio > 0.2) {
          element.classList.add("is-visible")
          element.classList.add("animate-in")

          // Apply specific animation
          if (animationType) {
            element.classList.add(`animate-${animationType}`)
          }
        }
      } else {
        // Element is out of view (optional: remove for one-time animations)
        // element.classList.remove('is-visible', 'animate-in');
      }
    })
  }

  setupStaggerAnimations() {
    // Find all stagger groups
    const staggerGroups = document.querySelectorAll("[data-stagger-children]")

    staggerGroups.forEach((group) => {
      const children = group.children
      const delay = Number.parseInt(group.getAttribute("data-stagger-delay")) || 100

      Array.from(children).forEach((child, index) => {
        child.style.setProperty("--stagger-delay", `${index * delay}ms`)
        child.setAttribute("data-animate", "fade-up")
        this.observer.observe(child)
      })
    })
  }

  setupParallax() {
    const parallaxElements = document.querySelectorAll("[data-parallax]")

    if (parallaxElements.length === 0) return

    let ticking = false

    const updateParallax = () => {
      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-parallax")) || 0.5
        const rect = element.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const elementTop = rect.top + scrolled
        const elementHeight = element.offsetHeight
        const viewportHeight = window.innerHeight

        // Only calculate if element is in viewport range
        if (scrolled + viewportHeight > elementTop && scrolled < elementTop + elementHeight) {
          const yPos = (scrolled - elementTop) * speed
          element.style.transform = `translate3d(0, ${yPos}px, 0)`
        }
      })

      ticking = false
    }

    const requestParallaxUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener("scroll", requestParallaxUpdate, { passive: true })
    updateParallax() // Initial call
  }
}

// Initialize scroll animations
new ScrollAnimations()
