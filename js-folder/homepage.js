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
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
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
    const elements = document.querySelectorAll('.social-card, .community-card, .point, .university-card, .resource-card');
    
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
document.querySelectorAll('.social-card, .community-card, .point, .university-card, .resource-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// YouTube and Telegram API
function fetchSubscriberCount() {
    const apiKey = "AIzaSyDUhY32v_888zTHoqzWp4liOrwTnBaEx1A";
    const channelId = "UClDYnqtEinrFgvpGvh6roTg";

    const YTurl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    fetch(YTurl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const channel = data.items[0];
                document.getElementById('sub1_count').innerText = channel.statistics.subscriberCount;
            }
        })
        .catch(error => {
            console.error("Error fetching YouTube data:", error);
        });

    const botToken = "7447690896:AAEtUiV1L4NeJtEIMMOyIO4gB3r2L8sol8s";
    const chatId = "-1002008601392"; 

    const TELEurl = `https://api.telegram.org/bot${botToken}/getChatMembersCount?chat_id=${chatId}`;

    fetch(TELEurl)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById('sub2_count').innerText = data.result;
            } 
        })
        .catch(error => {
            console.error("Error fetching Telegram data:", error);
        });
}

// Navigation Functions
function GoToNextPage() {
    window.location.href = 'resource.html#process';
}

function GoToUniPage() {
    window.location.href = 'university.html';
}

function GoToResourcesPage() {
    window.location.href = 'resource.html';
}

window.onload = function() {
    fetchSubscriberCount();
    animateOnScroll();
};







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
        if (message.toLowerCase().includes('USAL') || message.toLowerCase().includes('USAL') || message.toLowerCase().includes('usal') || message.toLowerCase().includes('usa self learn')|| message.toLowerCase().includes('usaselflearn') || message.toLowerCase().includes('usa self learn(USAL)')|| message.toLowerCase().includes('USA SELF LEARN')) {
            const serviceMessageElement = document.createElement('div');
            serviceMessageElement.className = 'chat-message bot';
            serviceMessageElement.textContent = 'USA Self Learn (USAL) is an online community dedicated to providing valuable information and resources for students planning to study in the United States or currently residing there. Our content includes podcasts featuring discussions on campus life, scholarships, visa tips, and personal experiences from students and professionals. These discussions aim to inspire and assist students in their educational journey in the USA.';
            chatMessages.appendChild(serviceMessageElement);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else if (message.toLowerCase().includes('founder of usal')|| message.toLowerCase().includes('FOUNDER OF USAL') || message.toLowerCase().includes('Founder of USAL') || message.toLowerCase().includes('Who is the founder of usal') || message.toLowerCase().includes('WHO IS THE FOUNDER OF USAL') || message.toLowerCase().includes('founder')) {
            const videoEditingMessage = document.createElement('div');
            videoEditingMessage.className = 'chat-message bot';
            videoEditingMessage.textContent = 'The Founder of USAL are KIKI THE BOSS AND THE END.';
            chatMessages.appendChild(videoEditingMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }else if (message.toLowerCase().includes('WHO IS KIKI THE BOSS') || message.toLowerCase().includes('Who is kiki the boss')|| message.toLowerCase().includes('Tell me something about kiki the boss') || message.toLowerCase().includes('About kiki') || message.toLowerCase().includes('who is kiki') || message.toLowerCase().includes('WHO IS KIKI')|| message.toLowerCase().includes('kiki')) {
            const videoEditingMessage = document.createElement('div');
            videoEditingMessage.className = 'chat-message bot';
            videoEditingMessage.textContent = 'Kiki the Boss is the founder of *USA Self Learn (USAL)*, a platform dedicated to helping Nepalese students apply to study in the USA without relying on expensive agencies. Kiki started USAL as a small Telegram group, which quickly grew into a large community across YouTube, Facebook, Instagram, and TikTok. Kiki was motivated to start this initiative after seeing how agencies exploited students with high fees and false promises. Through USAL, they provide *free, transparent, and reliable* guidance on the application process, visa interviews, scholarships, and student life in the USA. In less than a year, USAL has helped thousands of students navigate the complex study-abroad journey. Kiki is passionate about empowering students making education accessible, and building a platform where students can get all the necessary resources to achieve their study-abroad dreams.';
            chatMessages.appendChild(videoEditingMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }else if (message.toLowerCase().includes('WHO IS ISIS') || message.toLowerCase().includes('Who is isis')|| message.toLowerCase().includes('Tell me something about Isis') || message.toLowerCase().includes('About Isis') || message.toLowerCase().includes('who is Isis') || message.toLowerCase().includes('WHO IS ISIS')|| message.toLowerCase().includes('isis')) {
            const videoEditingMessage = document.createElement('div');
            videoEditingMessage.className = 'chat-message bot';
            videoEditingMessage.textContent = 'ISIS is a boy who want to help ';
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
        } 
        else if (message.toLowerCase().includes('university') || message.toLowerCase().includes(' compuer science university')) {
            const designMessage = document.createElement('div');
            designMessage.className = 'chat-message bot';
            designMessage.textContent = 'kent state university wilks university, texa a and m university north texas university';
            chatMessages.appendChild(designMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }else if (message.toLowerCase().includes('hey') || message.toLowerCase().includes('HEY') || message.toLowerCase().includes('Hey') || message.toLowerCase().includes('Hello') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('HELLO')|| message.toLowerCase().includes('hi') || message.toLowerCase().includes('HI') || message.toLowerCase().includes('Hi') || message.toLowerCase().includes('HEY THERE') || message.toLowerCase().includes('HEY there') || message.toLowerCase().includes('Hey there') || message.toLowerCase().includes('hi there')|| message.toLowerCase().includes('HI THERE')) {
            const seoMessage = document.createElement('div');
            seoMessage.className = 'chat-message bot';
            seoMessage.textContent = 'Hello, Welcome to Live chat of USAL. I am USAl Bot, here to help you....!';
            chatMessages.appendChild(seoMessage);

            // Scroll to the bottom of the chat container
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            const defaultResponse = document.createElement('div');
            defaultResponse.className = 'chat-message bot';
            defaultResponse.textContent = 'We are sorry to hear about your issue. but that question hasnot still been updateded. Please contract US by email or by anny socialo media platform like telegram, facebook.';
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
