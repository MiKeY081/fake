 // Mobile Menu Toggle
 const menuIcon = document.getElementById('menu-icon');
 const mobileNav = document.getElementById('mobile-nav');
 const overlay = document.getElementById('overlay');

 menuIcon.addEventListener('click', () => {
     mobileNav.classList.toggle('active');
     overlay.classList.toggle('active');
 });

 overlay.addEventListener('click', () => {
     mobileNav.classList.remove('active');
     overlay.classList.remove('active');
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

 // Tab Functionality
 const tabButtons = document.querySelectorAll('.tab-button');
 const tabContents = document.querySelectorAll('.tab-content');

 tabButtons.forEach(button => {
     button.addEventListener('click', () => {
         // Remove active class from all buttons and contents
         tabButtons.forEach(btn => btn.classList.remove('active'));
         tabContents.forEach(content => content.classList.remove('active'));
         
         // Add active class to clicked button
         button.classList.add('active');
         
         // Show corresponding content
         const tabId = button.getAttribute('data-tab');
         document.getElementById(`${tabId}-tab`).classList.add('active');
     });
 });

 // Animation on Scroll
 function animateOnScroll() {
     const elements = document.querySelectorAll('.article-card, .blog-post-card, .university-info-item, .usa-rules-item');
     
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
 document.querySelectorAll('.article-card, .blog-post-card, .university-info-item, .usa-rules-item').forEach(element => {
     element.style.opacity = '0';
     element.style.transform = 'translateY(20px)';
     element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 });

 window.addEventListener('scroll', animateOnScroll);
 window.addEventListener('load', animateOnScroll);

 // Load blog posts from API
 async function loadPublicData() {
     try {
         const response = await fetch('http://localhost:5000/api/public-data');
         const data = await response.json();
         
         // Process news articles
         const newsGrid = document.querySelector('.article-grid');
         if (newsGrid && data.news) {
             newsGrid.innerHTML = '';
             
             data.news.forEach(item => {
                 const articleCard = document.createElement('div');
                 articleCard.classList.add('article-card');
                 articleCard.innerHTML = `
                     <div class="article-card-img-container">
                         <img src="${item.imageUrl || 'https://via.placeholder.com/400x300'}" alt="${item.title}" class="article-card-img">
                         <span class="article-card-category">${item.category || 'General'}</span>
                     </div>
                     <div class="article-card-body">
                         <div class="article-card-date">
                             <i class="fas fa-calendar-alt"></i>
                             <span>${new Date(item.datePosted).toLocaleDateString()}</span>
                         </div>
                         <h3 class="article-card-title">${item.title}</h3>
                         <p class="article-card-excerpt">${item.content.slice(0, 120)}...</p>
                         <div class="article-card-footer">
                             <div class="article-card-author">
                                 <img src="${item.authorImage || 'https://via.placeholder.com/40x40'}" alt="Author" class="article-card-author-img">
                                 <span class="article-card-author-name">${item.author || 'USAL Team'}</span>
                             </div>
                             <a href="#" class="article-card-read-more">
                                 Read More <i class="fas fa-arrow-right"></i>
                             </a>
                         </div>
                     </div>
                 `;
                 newsGrid.appendChild(articleCard);
             });
         }
         
         // Process blog posts
         const blogGrid = document.querySelector('.blog-post-grid');
         if (blogGrid && data.blogs) {
             blogGrid.innerHTML = '';
             
             data.blogs.forEach(item => {
                 const blogCard = document.createElement('div');
                 blogCard.classList.add('blog-post-card');
                 blogCard.innerHTML = `
                     <div class="blog-post-card-img-container">
                         <img src="${item.imageUrl || 'https://via.placeholder.com/400x300'}" alt="${item.title}" class="blog-post-card-img">
                         <span class="blog-post-card-category">${item.category || 'General'}</span>
                     </div>
                     <div class="blog-post-card-body">
                         <div class="blog-post-card-date">
                             <i class="fas fa-calendar-alt"></i>
                             <span>${new Date(item.datePosted).toLocaleDateString()}</span>
                         </div>
                         <h3 class="blog-post-card-title">${item.title}</h3>
                         <p class="blog-post-card-excerpt">${item.content.slice(0, 120)}...</p>
                         <div class="blog-post-card-footer">
                             <div class="blog-post-card-author">
                                 <img src="${item.authorImage || 'https://via.placeholder.com/40x40'}" alt="Author" class="blog-post-card-author-img">
                                 <span class="blog-post-card-author-name">${item.author || 'USAL Team'}</span>
                             </div>
                             <a href="#" class="blog-post-card-read-more">
                                 Read More <i class="fas fa-arrow-right"></i>
                             </a>
                         </div>
                     </div>
                 `;
                 blogGrid.appendChild(blogCard);
             });
         }
         
         // Re-apply animations
         document.querySelectorAll('.article-card, .blog-post-card').forEach(element => {
             element.style.opacity = '0';
             element.style.transform = 'translateY(20px)';
             element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
         });
         
         animateOnScroll();
     } catch (err) {
         console.error('Error fetching public data:', err);
     }
 }

 // Uncomment to load data from API
 // window.onload = loadPublicData;


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
