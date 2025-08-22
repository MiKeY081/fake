// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Toggle Test Details
function toggleDetails(detailsId) {
  const details = document.getElementById(detailsId);
  if (details.classList.contains('active')) {
    details.classList.remove('active');
  } else {
    // Close all other details first
    const allDetails = document.querySelectorAll('.test-card-details');
    allDetails.forEach(item => {
      item.classList.remove('active');
    });
    // Open the clicked one
    details.classList.add('active');
  }
}

// Toggle Question Answers
function toggleQuestion(questionId) {
  const question = document.getElementById(questionId);
  question.classList.toggle('active');
}

// File Upload Preview
const uploadArea = document.getElementById('upload-area');
const uploadInput = document.getElementById('upload-input');

uploadArea.addEventListener('click', () => {
  uploadInput.click();
});

uploadInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    const fileName = e.target.files[0].name;
    uploadArea.querySelector('h3').textContent = 'File Selected';
    uploadArea.querySelector('.upload-text').textContent = fileName;
    uploadArea.style.borderColor = 'var(--success)';
  }
});

// Drag and Drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  uploadArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  uploadArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  uploadArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  uploadArea.classList.add('highlight');
}

function unhighlight() {
  uploadArea.classList.remove('highlight');
}

uploadArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  
  if (files.length > 0) {
    const fileName = files[0].name;
    uploadArea.querySelector('h3').textContent = 'File Selected';
    uploadArea.querySelector('.upload-text').textContent = fileName;
    uploadArea.style.borderColor = 'var(--success)';
    uploadInput.files = files;
  }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    }
  });
});

// Navigation Active State
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current || (current === 'home' && link.getAttribute('href') === '#')) {
      link.classList.add('active');
    }
  });
});

// Animation on Scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-title, .section-subtitle, .test-card, .resource-card, .timeline-item, .tip-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Set initial styles for animation
document.querySelectorAll('.section-title, .section-subtitle, .test-card, .resource-card, .timeline-item, .tip-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Functions from original code
function BackToMainPage() {
  window.location.href = "index.html";
}

function GoToNextPage() {
  window.location.href = 'index.html';
}

function expandCompartment(compartment) {
  document.querySelectorAll('.university-compartment').forEach(item => {
    if (item !== compartment) {
      item.classList.remove('expanded');
    }
  });
  compartment.classList.toggle('expanded');
}





const chatContainer = document.querySelector('.chat-container');
const chatButton = document.querySelector('.chat-button');
const chatClose = document.querySelector('.chat-close');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const chatSend = document.querySelector('.chat-send');

// Toggle chat visibility when chat button is clicked
chatButton.addEventListener('click', () => {
    chatContainer.classList.add('active');
    chatButton.style.display = 'none';
});

chatClose.addEventListener('click', () => {
    chatContainer.classList.remove('active');
    chatButton.style.display = 'flex';
});

// Function to handle sending user messages and bot responses
function sendChatMessage() {
    const message = chatInput.value.trim();  // Get user input
    if (!message) return; // If the message is empty, do nothing
    
    // Add user message to chat
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'chat-message user';
    userMessageElement.textContent = message;
    chatMessages.appendChild(userMessageElement);

    // Clear input after sending message
    chatInput.value = '';

    // Scroll to the bottom of the chat container
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot response after a delay
    setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat-message bot';
        botMessageElement.textContent = 'Thanks for your message! One of our team members will get back to you shortly. Is there anything else I can help you with?';
        chatMessages.appendChild(botMessageElement);
        
        // Scroll to the bottom of the chat container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000); // 1-second delay for the first response

    // Simulate further responses based on user input
    setTimeout(() => {
        if (message.toLowerCase().includes('USAL')) {
            const serviceMessageElement = document.createElement('div');
            serviceMessageElement.className = 'chat-message bot';
            serviceMessageElement.textContent = 'USA Self Learn (USAL) is an online community dedicated to providing valuable information and resources for students planning to study in the United States or currently residing there. Our content includes podcasts featuring discussions on campus life, scholarships, visa tips, and personal experiences from students and professionals. These discussions aim to inspire and assist students in their educational journey in the USA.';
            chatMessages.appendChild(serviceMessageElement);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else if (message.toLowerCase().includes('founder of usal')) {
            const videoEditingMessage = document.createElement('div');
            videoEditingMessage.className = 'chat-message bot';
            videoEditingMessage.textContent = 'kiki the boss and the end';
            chatMessages.appendChild(videoEditingMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }else if (message.toLowerCase().includes('tell me aabout usa f1 visa processing')) {
            const videoEditingMessage = document.createElement('div');
            videoEditingMessage.className = 'chat-message bot';
            videoEditingMessage.textContent = 'ok sure';
            chatMessages.appendChild(videoEditingMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
         else if (message.toLowerCase().includes('university') || message.toLowerCase().includes(' compuer science university')) {
            const designMessage = document.createElement('div');
            designMessage.className = 'chat-message bot';
            designMessage.textContent = 'kent state university wilks university, texa a and m university north texas university';
            chatMessages.appendChild(designMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else if (message.toLowerCase().includes('seo') || message.toLowerCase().includes('digital marketing')) {
            const seoMessage = document.createElement('div');
            seoMessage.className = 'chat-message bot';
            seoMessage.textContent = 'Our SEO and Digital Marketing services help boost your online presence. We focus on on-page SEO, off-page SEO, paid advertising, social media strategies, and more to ensure your business ranks higher and reaches a broader audience.';
            chatMessages.appendChild(seoMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            const defaultResponse = document.createElement('div');
            defaultResponse.className = 'chat-message bot';
            defaultResponse.textContent = 'thank you for asking question, I am currently unavaible for answering this question . this question will updated soon';
            chatMessages.appendChild(defaultResponse);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }, 2000); // 2-second delay for the next response
}

// Handle sending the message when the "send" button is clicked
chatSend.addEventListener('click', sendChatMessage);

// Handle sending the message when the "Enter" key is pressed
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});





// Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');
    
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const questionCategories = document.querySelectorAll('.questions-category');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    filterTabs.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    const filter = tab.getAttribute('data-filter');
    
    // Show/hide categories based on filter
    if (filter === 'all') {
      questionCategories.forEach(cat => {
        cat.style.display = 'block';
      });
    } else {
      questionCategories.forEach(cat => {
        if (cat.getAttribute('data-category') === filter) {
          cat.style.display = 'block';
        } else {
          cat.style.display = 'none';
        }
      });
    }
    
    // Check if any questions are visible
    checkNoResults();
  });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  let hasVisibleItems = false;
  
  accordionItems.forEach(item => {
    const questionText = item.querySelector('.accordion-header').textContent.toLowerCase();
    
    if (questionText.includes(searchTerm)) {
      item.style.display = 'block';
      hasVisibleItems = true;
    } else {
      item.style.display = 'none';
    }
  });
  
  // Check if any questions are visible
  checkNoResults();
});

function checkNoResults() {
  const activeFilter = document.querySelector('.filter-tab.active').getAttribute('data-filter');
  const searchTerm = searchInput.value.toLowerCase();
  let hasVisibleItems = false;
  
  accordionItems.forEach(item => {
    if (item.style.display !== 'none') {
      const category = item.closest('.questions-category').getAttribute('data-category');
      if (activeFilter === 'all' || activeFilter === category) {
        hasVisibleItems = true;
      }
    }
  });
  
  if (!hasVisibleItems) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});
