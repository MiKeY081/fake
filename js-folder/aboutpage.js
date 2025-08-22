// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    setTimeout(() => {
      const preloader = document.querySelector(".preloader")
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }, 1500)
  
    // Custom cursor
    const cursor = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-dot-outline")
  
    if (window.innerWidth > 992) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.opacity = "1"
        cursorOutline.style.opacity = "1"
  
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
  
        cursorOutline.style.left = e.clientX + "px"
        cursorOutline.style.top = e.clientY + "px"
      })
  
      document.addEventListener("mouseout", () => {
        cursor.style.opacity = "0"
        cursorOutline.style.opacity = "0"
      })
  
      // Add cursor effects on interactive elements
      const interactiveElements = document.querySelectorAll("a, button, input, textarea, .faq-question")
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseover", () => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
          cursor.style.transform = "translate(-50%, -50%) scale(0.5)"
        })
  
        element.addEventListener("mouseout", () => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
          cursor.style.transform = "translate(-50%, -50%) scale(1)"
        })
      })
    }
  
    // Particles.js initialization
    if (document.getElementById("particles-js")) {
      // Check if particlesJS is defined before using it
      if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        })
      } else {
        console.error("particlesJS is not defined. Make sure the particles.js library is included.")
      }
    }
  
    // Header scroll effect
    const header = document.querySelector(".header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuClose = document.querySelector(".mobile-menu-close")
    const body = document.body
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      body.style.overflow = "hidden"
    })
  
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      body.style.overflow = "auto"
    })
  
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        body.style.overflow = "auto"
      })
    })
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".reveal-text")
  
    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed")
        }
      })
    }
  
    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Initial check
  
    // Counter animation for stats
    const statItems = document.querySelectorAll(".stat-item")
  
    function animateStats() {
      statItems.forEach((item) => {
        const target = Number.parseInt(item.getAttribute("data-count"))
        const statNumber = item.querySelector(".stat-number")
        const current = Number.parseInt(statNumber.innerText)
  
        if (current < target) {
          const increment = Math.ceil(target / 50)
          const newValue = Math.min(current + increment, target)
          statNumber.innerText = newValue
  
          if (newValue < target) {
            setTimeout(animateStats, 50)
          }
        }
      })
    }
  
    // Start counter animation when in viewport
    const statsSection = document.querySelector(".hero-stats")
  
    function checkStatsVisibility() {
      if (statsSection) {
        const statsSectionTop = statsSection.getBoundingClientRect().top
  
        if (statsSectionTop < window.innerHeight) {
          animateStats()
          window.removeEventListener("scroll", checkStatsVisibility)
        }
      }
    }
  
    window.addEventListener("scroll", checkStatsVisibility)
    checkStatsVisibility() // Initial check
  
    // Testimonials slider
    // const testimonialsWrapper = document.querySelector(".testimonials-wrapper")
    // const testimonialItems = document.querySelectorAll(".testimonial-item")
    // const prevBtn = document.querySelector(".testimonial-prev")
    // const nextBtn = document.querySelector(".testimonial-next")
    // const dotsContainer = document.querySelector(".testimonial-dots")
  
    // if (testimonialsWrapper && testimonialItems.length > 0) {
    //   let currentIndex = 0
  
      // Create dots
    //   testimonialItems.forEach((_, index) => {
    //     const dot = document.createElement("div")
    //     dot.classList.add("testimonial-dot")
    //     if (index === 0) dot.classList.add("active")
  
    //     dot.addEventListener("click", () => {
    //       goToSlide(index)
    //     })
  
    //     dotsContainer.appendChild(dot)
    //   })
  
    //   const dots = document.querySelectorAll(".testimonial-dot")
  
      // Set initial position
    //   testimonialsWrapper.style.width = `${testimonialItems.length * 100}%`
    //   testimonialItems.forEach((item) => {
    //     item.style.width = `${100 / testimonialItems.length}%`
    //   })
  
      // Navigation functions
    //   function goToSlide(index) {
    //     currentIndex = index
    //     testimonialsWrapper.style.transform = `translateX(-${currentIndex * (100 / testimonialItems.length)}%)`
  
        // Update dots
    //     dots.forEach((dot, i) => {
    //       dot.classList.toggle("active", i === currentIndex)
    //     })
    //   }
  
    //   function goToPrev() {
    //     currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length
    //     goToSlide(currentIndex)
    //   }
  
    //   function goToNext() {
    //     currentIndex = (currentIndex + 1) % testimonialItems.length
    //     goToSlide(currentIndex)
    //   }
  
      // Event listeners
    //   prevBtn.addEventListener("click", goToPrev)
    //   nextBtn.addEventListener("click", goToNext)
  
      // Auto slide
    //   let autoSlideInterval = setInterval(goToNext, 500)
  
    //   testimonialsWrapper.addEventListener("mouseenter", () => {
    //     clearInterval(autoSlideInterval)
    //   })
  
    //   testimonialsWrapper.addEventListener("mouseleave", () => {
    //     autoSlideInterval = setInterval(goToNext, 5000)
    //   })
    // }
  
    // FAQ accordion
    const faqQuestions = document.querySelectorAll(".faq-question")
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling
        const toggle = this.querySelector(".faq-toggle")
  
        // Close all other FAQs
        faqQuestions.forEach((q) => {
          if (q !== question) {
            q.nextElementSibling.classList.remove("active")
            q.querySelector(".faq-toggle").classList.remove("active")
          }
        })
  
        // Toggle current FAQ
        answer.classList.toggle("active")
        toggle.classList.toggle("active")
      })
    })
  
    // Video modal
    const videoPlayBtn = document.querySelector(".video-play-btn")
  
    if (videoPlayBtn) {
      videoPlayBtn.addEventListener("click", () => {
        // Create modal
        const modal = document.createElement("div")
        modal.classList.add("video-modal")
        modal.innerHTML = `
          <div class="video-modal-content">
            <button class="video-modal-close">&times;</button>
            <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        `
  
        document.body.appendChild(modal)
        document.body.style.overflow = "hidden"
  
        // Add styles
        const style = document.createElement("style")
        style.textContent = `
          .video-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }
          
          .video-modal-content {
            position: relative;
            width: 90%;
            max-width: 800px;
          }
          
          .video-modal-close {
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 2rem;
            color: white;
            background: transparent;
            border: none;
            cursor: pointer;
          }
          
          .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          }
          
          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `
  
        document.head.appendChild(style)
  
        // Close modal
        const closeBtn = document.querySelector(".video-modal-close")
        closeBtn.addEventListener("click", () => {
          document.body.removeChild(modal)
          document.body.style.overflow = "auto"
        })
  
        // Close modal when clicking outside
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            document.body.removeChild(modal)
            document.body.style.overflow = "auto"
          }
        })
      })
    }
  
    // Back to top button
    const backToTopBtn = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })
  
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Form submission
    const forms = document.querySelectorAll("form")
  
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simple form validation
        let isValid = true
        const requiredInputs = form.querySelectorAll("[required]")
  
        requiredInputs.forEach((input) => {
          if (!input.value.trim()) {
            isValid = false
            input.classList.add("error")
          } else {
            input.classList.remove("error")
          }
        })
  
        if (isValid) {
          // Show success message
          const formContainer = form.parentElement
          const successMessage = document.createElement("div")
          successMessage.classList.add("form-success")
          successMessage.innerHTML = `
            <div class="success-icon">
              <i class="fas fa-check"></i>
            </div>
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          `
  
          // Add styles
          const style = document.createElement("style")
          style.textContent = `
            .form-success {
              text-align: center;
              padding: 2rem;
            }
            
            .success-icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
              background-color: #10b981;
              color: white;
              border-radius: 50%;
              font-size: 1.5rem;
              margin: 0 auto 1.5rem;
            }
            
            .form-success h3 {
              font-size: 1.5rem;
              margin-bottom: 0.5rem;
            }
            
            .form-success p {
              color: var(--text-light);
            }
          `
  
          document.head.appendChild(style)
  
          // Replace form with success message
          formContainer.innerHTML = ""
          formContainer.appendChild(successMessage)
        }
      })
    })
  })
  
  