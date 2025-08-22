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
  const elements = document.querySelectorAll('.section-title, .section-subtitle, .guide-step, .timeline-content, .university-card');
  
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
document.querySelectorAll('.section-title, .section-subtitle, .guide-step, .timeline-content, .university-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// University Profile Matcher
document.getElementById('match-btn').addEventListener('click', function() {
  alert('Profile matching feature coming soon! This will help you find universities that match your academic profile and preferences.');
});

// Navigation Functions
function BackToMainPage() {
  window.location.href = "index.html";
}

function GoToNextPage() {
  window.location.href = 'universities.html';
}







// University data
const universities = [
 {
   id: 'idaho',
   name: 'University of Idaho',
   location: 'Moscow, Idaho',
   description: 'The University of Idaho is a public land-grant research university in Moscow, Idaho. It is the state\'s flagship and oldest public university, established in 1889. The university offers 142 degree programs, from bachelor\'s to doctorate levels, across 10 colleges.',
   image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Biology', 'Engineering', 'Computer Science', 'Business', 'Agriculture'],
   tuition: 18,
   acceptanceRate: '85%',
   studentFacultyRatio: '15:1',
   rating: 4.0,
   website: 'https://www.uidaho.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 2.5',
     'SAT or ACT scores',
     'Personal statement'
   ]
 },
 {
   id: 'texarkana',
   name: 'Texas A&M University - Texarkana',
   location: 'Texarkana, Texas',
   description: 'Texas A&M University–Texarkana is a public university in Texarkana, Texas. It is part of the Texas A&M University System and offers undergraduate and graduate programs with a focus on quality education at an affordable price.',
   image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Business', 'Biology', 'Hospitality Management', 'Computer Science', 'Education'],
   tuition: 16,
   acceptanceRate: '90%',
   studentFacultyRatio: '18:1',
   rating: 4.5,
   website: 'https://www.tamut.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 2.0',
     'SAT or ACT scores',
     'Completed application form'
   ]
 },
 {
   id: 'latech',
   name: 'Louisiana Tech University',
   location: 'Ruston, Louisiana',
   description: 'Louisiana Tech University is a public research university in Ruston, Louisiana. It is a space-grant college and a member of the University of Louisiana System. The university offers bachelor\'s, master\'s, and doctoral degree programs.',
   image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Computer Science', 'Engineering', 'Business', 'Architecture', 'Health Sciences'],
   tuition: 20,
   acceptanceRate: '65%',
   studentFacultyRatio: '20:1',
   rating: 4.0,
   website: 'https://www.latech.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 2.5',
     'SAT or ACT scores',
     'Letters of recommendation'
   ]
 },
 {
   id: 'bgsu',
   name: 'Bowling Green State University',
   location: 'Bowling Green, Ohio',
   description: 'Bowling Green State University is a public research university in Bowling Green, Ohio. The university offers more than 200 undergraduate programs, as well as master\'s and doctoral degrees through eight academic colleges.',
   image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Business', 'Computer Science', 'Education', 'Media', 'Psychology'],
   tuition: 19,
   acceptanceRate: '72%',
   studentFacultyRatio: '17:1',
   rating: 4.0,
   website: 'https://www.bgsu.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 2.5',
     'SAT or ACT scores',
     'Personal statement'
   ]
 },
 {
   id: 'mtsu',
   name: 'Middle Tennessee State University',
   location: 'Murfreesboro, Tennessee',
   description: 'Middle Tennessee State University is a public university in Murfreesboro, Tennessee. Founded in 1911, it is the oldest and largest public university in the Tennessee Board of Regents system.',
   image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Biology', 'Computer Science', 'Business', 'Media', 'Aviation'],
   tuition: 23,
   acceptanceRate: '94%',
   studentFacultyRatio: '16:1',
   rating: 3.5,
   website: 'https://www.mtsu.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 2.0',
     'SAT or ACT scores',
     'Completed application form'
   ]
 },
 {
   id: 'lyon',
   name: 'Lyon College',
   location: 'Batesville, Arkansas',
   description: 'Lyon College is a private liberal arts college in Batesville, Arkansas. Founded in 1872, it is affiliated with the Presbyterian Church (USA). The college is known for its small class sizes and personalized education.',
   image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Biology', 'Liberal Arts', 'Business', 'Psychology', 'Computer Science'],
   tuition: 28,
   acceptanceRate: '68%',
   studentFacultyRatio: '10:1',
   rating: 4.8,
   website: 'https://www.lyon.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 3.0',
     'SAT or ACT scores',
     'Personal essay',
     'Letters of recommendation'
   ]
 },
 {
   id: 'uwgb',
   name: 'University of Wisconsin-Green Bay',
   location: 'Green Bay, Wisconsin',
   description: 'The University of Wisconsin–Green Bay is a public university in Green Bay, Wisconsin. It offers undergraduate and graduate programs with an interdisciplinary approach to learning.',
   image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Business', 'Environmental Science', 'Psychology', 'Nursing', 'Education'],
   tuition: 17,
   acceptanceRate: '87%',
   studentFacultyRatio: '22:1',
   rating: 4.0,
   website: 'https://www.uwgb.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 2.5',
     'SAT or ACT scores',
     'Completed application form'
   ]
 },
 {
   id: 'truman',
   name: 'Truman State University',
   location: 'Kirksville, Missouri',
   description: 'Truman State University is a public liberal arts and sciences university in Kirksville, Missouri. It is known for its rigorous academics and is consistently ranked as one of the top public universities in the Midwest.',
   image: 'https://images.unsplash.com/photo-1554485744-75fcd3efa6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
   majors: ['Liberal Arts', 'Business', 'Biology', 'Computer Science', 'Health Sciences'],
   tuition: 21,
   acceptanceRate: '67%',
   studentFacultyRatio: '16:1',
   rating: 4.5,
   website: 'https://www.truman.edu/',
   noApplicationFee: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 3.0',
     'SAT or ACT scores',
     'Personal statement',
     'Extracurricular activities'
   ]
 },
 {
   id: 'harvard',
   name: 'Harvard University',
   location: 'Cambridge, Massachusetts',
   description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, it is the oldest institution of higher learning in the United States and is widely regarded as one of the most prestigious universities in the world.',
   image: 'https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
   majors: ['Liberal Arts', 'Business', 'Law', 'Medicine', 'Computer Science'],
   tuition: 55,
   acceptanceRate: '5%',
   studentFacultyRatio: '6:1',
   rating: 4.9,
   website: 'https://www.harvard.edu/',
   noApplicationFee: false,
   featured: true,
   requirements: [
     'High school diploma or equivalent',
     'Exceptional academic record',
     'High SAT or ACT scores',
     'Outstanding personal essays',
     'Strong letters of recommendation',
     'Demonstrated leadership',
     'Extracurricular achievements'
   ]
 },
 {
   id: 'utaustin',
   name: 'University of Texas at Austin',
   location: 'Austin, Texas',
   description: 'The University of Texas at Austin is a public research university in Austin, Texas. Founded in 1883, it is the flagship institution of the University of Texas System and is known for its strong academic programs and vibrant campus culture.',
   image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
   majors: ['Engineering', 'Business', 'Computer Science', 'Communications', 'Liberal Arts'],
   tuition: 40,
   acceptanceRate: '32%',
   studentFacultyRatio: '18:1',
   rating: 4.7,
   website: 'https://www.utexas.edu/',
   noApplicationFee: false,
   featured: true,
   requirements: [
     'High school diploma or equivalent',
     'Competitive GPA',
     'SAT or ACT scores',
     'Essays',
     'Extracurricular activities',
     'Leadership experience'
   ]
 },
 {
   id: 'alabama',
   name: 'University of Alabama',
   location: 'Tuscaloosa, Alabama',
   description: 'The University of Alabama is a public research university in Tuscaloosa, Alabama. Founded in 1820, it is the oldest and largest of the public universities in Alabama and is known for its strong programs in business, engineering, and communications.',
   image: 'https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
   majors: ['Business', 'Engineering', 'Communications', 'Education', 'Nursing'],
   tuition: 31,
   acceptanceRate: '80%',
   studentFacultyRatio: '20:1',
   rating: 4.3,
   website: 'https://www.ua.edu/',
   noApplicationFee: false,
   featured: true,
   requirements: [
     'High school diploma or equivalent',
     'Minimum GPA of 3.0',
     'SAT or ACT scores',
     'Completed application form'
   ]
 },
 {
   id: 'stanford',
   name: 'Stanford University',
   location: 'Stanford, California',
   description: 'Stanford University is a private research university in Stanford, California. Founded in 1885, it is known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world\'s top universities.',
   image: 'https://images.unsplash.com/photo-1564644411685-b4c0bfbfb4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
   majors: ['Computer Science', 'Engineering', 'Business', 'Medicine', 'Law'],
   tuition: 56,
   acceptanceRate: '4%',
   studentFacultyRatio: '5:1',
   rating: 4.9,
   website: 'https://www.stanford.edu/',
   noApplicationFee: false,
   featured: true,
   requirements: [
     'High school diploma or equivalent',
     'Exceptional academic record',
     'High SAT or ACT scores',
     'Outstanding personal essays',
     'Strong letters of recommendation',
     'Demonstrated leadership',
     'Extracurricular achievements'
   ]
 },
 {
   id: 'mit',
   name: 'Massachusetts Institute of Technology',
   location: 'Cambridge, Massachusetts',
   description: 'The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. Founded in 1861, MIT has played a key role in the development of modern technology and science and is known for its innovation and academic strength.',
   image: 'https://images.unsplash.com/photo-1569714636216-9ffaf3423e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80',
   majors: ['Engineering', 'Computer Science', 'Physics', 'Mathematics', 'Economics'],
   tuition: 55,
   acceptanceRate: '7%',
   studentFacultyRatio: '3:1',
   rating: 4.9,
   website: 'https://www.mit.edu/',
   noApplicationFee: false,
   featured: true,
   requirements: [
     'High school diploma or equivalent',
     'Exceptional academic record',
     'High SAT or ACT scores',
     'Outstanding personal essays',
     'Strong letters of recommendation',
     'Demonstrated technical aptitude',
     'Innovative projects or research'
   ]
 }
];

// Scholarship data
const scholarships = [
 {
   id: 'gates',
   name: 'Gates Scholarship',
   provider: 'Bill & Melinda Gates Foundation',
   amount: 'Full Cost of Attendance',
   description: 'The Gates Scholarship is a highly selective, full scholarship for exceptional, Pell-eligible, minority, high school seniors. The scholarship covers the full cost of attendance that is not already covered by other financial aid and the expected family contribution.',
   requirements: [
     'Be a high school senior',
     'Be from at least one of the following ethnicities: African-American, American Indian/Alaska Native, Asian & Pacific Islander American, and/or Hispanic American',
     'Be eligible for a Federal Pell Grant',
     'Be a US citizen, national, or permanent resident',
     'Have a minimum cumulative weighted GPA of 3.3 on a 4.0 scale'
   ],
   deadline: 'September 15, 2023',
   website: 'https://www.thegatesscholarship.org/'
 },
 {
   id: 'coca-cola',
   name: 'Coca-Cola Scholars Program',
   provider: 'The Coca-Cola Company',
   amount: '$20,000',
   description: 'The Coca-Cola Scholars Program scholarship is an achievement-based scholarship awarded to graduating high school seniors. Students are recognized for their capacity to lead and serve, as well as their commitment to making a significant impact on their schools and communities.',
   requirements: [
     'Be a current high school senior',
     'US Citizens, US Nationals, US Permanent Residents, Refugees, Asylees, Cuban-Haitian Entrants, or Humanitarian Parolees',
     'Minimum 3.0 GPA',
     'Demonstrate leadership and service'
   ],
   deadline: 'October 31, 2023',
   website: 'https://www.coca-colascholarsfoundation.org/'
 },
 {
   id: 'jackKent',
   name: 'Jack Kent Cooke Foundation Scholarship',
   provider: 'Jack Kent Cooke Foundation',
   amount: 'Up to $55,000 per year',
   description: 'The Jack Kent Cooke Foundation College Scholarship Program is an undergraduate scholarship program available to high-achieving high school seniors with financial need who seek to attend the nation\'s best four-year colleges and universities.',
   requirements: [
     'Senior standing in high school',
     'Minimum cumulative unweighted GPA of 3.5',
     'Demonstrate financial need',
     'Plan to attend an accredited four-year college or university'
   ],
   deadline: 'November 20, 2023',
   website: 'https://www.jkcf.org/'
 },
 {
   id: 'horatio',
   name: 'Horatio Alger Scholarship',
   provider: 'Horatio Alger Association',
   amount: '$25,000',
   description: 'The Horatio Alger Scholarship Programs specifically assist high school students who have faced and overcome great obstacles in their young lives. The scholarships are funded by Horatio Alger Members who, like the Scholars, have experienced challenges but ultimately overcame them to become successful business and civic leaders.',
   requirements: [
     'Be enrolled full time as a high school senior',
     'Exhibit a strong commitment to pursue and complete a bachelor\'s degree',
     'Demonstrate critical financial need ($55,000 or lower adjusted gross family income)',
     'Be involved in co-curricular and community service activities',
     'Display integrity and perseverance in overcoming adversity',
     'Maintain a minimum GPA of 2.0',
     'Be a United States citizen'
   ],
   deadline: 'October 25, 2023',
   website: 'https://scholars.horatioalger.org/'
 },
 {
   id: 'national-merit',
   name: 'National Merit Scholarship',
   provider: 'National Merit Scholarship Corporation',
   amount: '$2,500',
   description: 'The National Merit Scholarship Program is an academic competition for recognition and scholarships. High school students enter the program by taking the Preliminary SAT/National Merit Scholarship Qualifying Test (PSAT/NMSQT), which serves as an initial screen of approximately 1.5 million entrants each year.',
   requirements: [
     'Take the PSAT/NMSQT in the specified year of the high school program',
     'Be enrolled as a high school student, progressing normally toward graduation',
     'Plan to enroll full time in college the following fall',
     'Be a U.S. citizen or lawful permanent resident'
   ],
   deadline: 'Varies based on PSAT/NMSQT test date',
   website: 'https://www.nationalmerit.org/'
 },
 {
   id: 'daniels',
   name: 'Daniels Scholarship',
   provider: 'Daniels Fund',
   amount: 'Varies (covers tuition, fees, room & board)',
   description: 'The Daniels Scholarship Program provides a four-year annually renewable college scholarship for graduating high school seniors in Colorado, New Mexico, Utah, and Wyoming who demonstrate exceptional character, leadership, and a commitment to serving their communities.',
   requirements: [
     'Be a resident of Colorado, New Mexico, Utah, or Wyoming',
     'Be a high school senior graduating from a school in these states',
     'Earn SAT or ACT scores that meet minimum requirements',
     'Demonstrate financial need',
     'Be a U.S. citizen or permanent resident'
   ],
   deadline: 'November 15, 2023',
   website: 'https://www.danielsfund.org/'
 }
];

// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const universityTabs = document.getElementById('university-tabs');
const universitiesGrid = document.getElementById('universities-grid');
const universitiesSpinner = document.getElementById('universities-spinner');
const universityModal = document.getElementById('university-modal');
const modalClose = document.getElementById('modal-close');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-university-name');
const modalContent = document.getElementById('modal-content');
const modalApplyBtn = document.getElementById('modal-apply-btn');
const searchForm = document.getElementById('search-form');
const universitySearch = document.getElementById('university-search');
const majorSelect = document.getElementById('major-select');
const locationSelect = document.getElementById('location-select');
const paginationItems = document.querySelectorAll('.pagination-item');
const featuredGrid = document.getElementById('featured-grid');
const featuredSpinner = document.getElementById('featured-spinner');
const scholarshipGrid = document.getElementById('scholarship-grid');
const scholarshipsSpinner = document.getElementById('scholarships-spinner');
const scholarshipModal = document.getElementById('scholarship-modal');
const scholarshipModalClose = document.getElementById('scholarship-modal-close');
const scholarshipModalCloseBtn = document.getElementById('scholarship-modal-close-btn');
const scholarshipModalTitle = document.getElementById('modal-scholarship-name');
const scholarshipModalContent = document.getElementById('scholarship-modal-content');
const scholarshipModalApplyBtn = document.getElementById('scholarship-modal-apply-btn');
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
 menuToggle.classList.toggle('active');
 mobileMenu.classList.toggle('active');
});

// Theme toggle functionality
function setTheme(isDark) {
 if (isDark) {
   document.body.classList.add('dark');
   themeIcon.classList.remove('fa-moon');
   themeIcon.classList.add('fa-sun');
   localStorage.setItem('theme', 'dark');
 } else {
   document.body.classList.remove('dark');
   themeIcon.classList.remove('fa-sun');
   themeIcon.classList.add('fa-moon');
   localStorage.setItem('theme', 'light');
 }
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
 setTheme(true);
}

themeToggle.addEventListener('click', () => {
 const isDark = document.body.classList.contains('dark');
 setTheme(!isDark);
});

// Render university cards
function renderUniversityCards(universities) {
 universitiesSpinner.style.display = 'none';
 
 if (universities.length === 0) {
   universitiesGrid.innerHTML = `
     <div class="text-center col-span-full py-12">
       <h3 class="text-xl font-semibold mb-2">No universities found</h3>
       <p class="text-muted-foreground">Try adjusting your search criteria</p>
     </div>
   `;
   return;
 }
 
 universitiesGrid.innerHTML = universities.map((university, index) => `
   <div class="university-card fade-in delay-${index % 5}">
     <div class="university-image-wrapper">
       <img src="${university.image}" alt="${university.name}" class="university-image">
       ${university.noApplicationFee ? '<span class="university-badge">No App Fee</span>' : ''}
     </div>
     <div class="university-content">
       <h3 class="university-name">${university.name}</h3>
       <div class="university-location">
         <i class="fas fa-map-marker-alt"></i>
         <span>${university.location}</span>
       </div>
       <div class="university-features">
         ${university.majors.slice(0, 3).map(major => `
           <span class="university-feature">${major}</span>
         `).join('')}
       </div>
       <div class="university-stats">
         <div class="university-stat">
           <span class="stat-value">${university.acceptanceRate}</span>
           <span class="stat-label">Acceptance</span>
         </div>
         <div class="university-stat">
           <span class="stat-value">$${university.tuition}K</span>
           <span class="stat-label">Tuition</span>
         </div>
         <div class="university-stat">
           <span class="stat-value">${university.studentFacultyRatio}</span>
           <span class="stat-label">Student/Faculty</span>
         </div>
       </div>
       <div class="university-footer">
         <div class="university-rating">
           <div class="rating-stars">
             ${renderStars(university.rating)}
           </div>
           <span class="rating-value">${university.rating.toFixed(1)}</span>
         </div>
         <button class="btn btn-sm btn-primary view-details" data-id="${university.id}">View Details</button>
       </div>
     </div>
   </div>
 `).join('');
 
 // Add event listeners to view details buttons
 document.querySelectorAll('.view-details').forEach(button => {
   button.addEventListener('click', () => {
     const universityId = button.getAttribute('data-id');
     openUniversityModal(universityId);
   });
 });
}

// Render featured universities
function renderFeaturedUniversities() {
 featuredSpinner.style.display = 'none';
 
 const featuredUniversities = universities.filter(uni => uni.featured);
 
 featuredGrid.innerHTML = featuredUniversities.map((university, index) => `
   <div class="featured-card fade-in delay-${index}">
     <div class="featured-image-wrapper">
       <img src="${university.image}" alt="${university.name}" class="featured-image">
       <span class="featured-badge">Full Ride</span>
     </div>
     <div class="featured-content">
       <h3 class="featured-name">${university.name}</h3>
       <p class="featured-description">${university.description}</p>
       <div class="featured-stats">
         <div class="featured-stat">
           <span class="featured-stat-value">${university.acceptanceRate}</span>
           <span class="featured-stat-label">Acceptance Rate</span>
         </div>
         <div class="featured-stat">
           <span class="featured-stat-value">$${university.tuition}K</span>
           <span class="featured-stat-label">Tuition</span>
         </div>
       </div>
       <div class="featured-footer">
         <button class="featured-link" data-id="${university.id}">Learn more <i class="fas fa-arrow-right"></i></button>
       </div>
     </div>
   </div>
 `).join('');
 
 // Add event listeners to learn more buttons
 document.querySelectorAll('.featured-link').forEach(button => {
   button.addEventListener('click', () => {
     const universityId = button.getAttribute('data-id');
     openUniversityModal(universityId);
   });
 });
}

// Render scholarship cards
function renderScholarshipCards() {
 scholarshipsSpinner.style.display = 'none';
 
 scholarshipGrid.innerHTML = scholarships.map((scholarship, index) => `
   <div class="scholarship-card fade-in delay-${index % 3}">
     <div class="scholarship-header">
       <h3 class="scholarship-name">${scholarship.name}</h3>
       <div class="scholarship-provider">${scholarship.provider}</div>
     </div>
     <div class="scholarship-content">
       <div class="scholarship-amount">${scholarship.amount}</div>
       <p class="scholarship-description">${scholarship.description.substring(0, 150)}...</p>
       <div class="scholarship-requirements">
         <div class="requirement-title">Requirements:</div>
         <ul class="requirements-list">
           ${scholarship.requirements.slice(0, 3).map(req => `
             <li class="requirement-item"><i class="fas fa-check-circle"></i> ${req}</li>
           `).join('')}
         </ul>
       </div>
     </div>
     <div class="scholarship-footer">
       <div class="deadline">Deadline: <span class="deadline-date">${scholarship.deadline}</span></div>
       <button class="btn btn-sm btn-primary view-scholarship" data-id="${scholarship.id}">Details</button>
     </div>
   </div>
 `).join('');
 
 // Add event listeners to view scholarship details buttons
 document.querySelectorAll('.view-scholarship').forEach(button => {
   button.addEventListener('click', () => {
     const scholarshipId = button.getAttribute('data-id');
     openScholarshipModal(scholarshipId);
   });
 });
}

// Generate star rating HTML
function renderStars(rating) {
 const fullStars = Math.floor(rating);
 const hasHalfStar = rating % 1 >= 0.5;
 const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
 
 let starsHTML = '';
 
 // Full stars
 for (let i = 0; i < fullStars; i++) {
   starsHTML += '<i class="fas fa-star"></i>';
 }
 
 // Half star
 if (hasHalfStar) {
   starsHTML += '<i class="fas fa-star-half-alt"></i>';
 }
 
 // Empty stars
 for (let i = 0; i < emptyStars; i++) {
   starsHTML += '<i class="far fa-star"></i>';
 }
 
 return starsHTML;
}

// Filter universities based on active tab
function filterUniversities(tabId) {
 if (tabId === 'all') {
   return universities;
 } else if (tabId === 'no-app-fee') {
   return universities.filter(uni => uni.noApplicationFee);
 } else if (tabId === 'full-ride') {
   return universities.filter(uni => uni.featured);
 } else {
   return universities.filter(uni => 
     uni.majors.some(major => major.toLowerCase().includes(tabId.replace('-', ' ')))
   );
 }
}

// Open university details modal
function openUniversityModal(universityId) {
 const university = universities.find(uni => uni.id === universityId);
 
 if (university) {
   modalTitle.textContent = university.name;
   
   // Create modal content
   modalContent.innerHTML = `
     <div class="university-detail-image mb-6">
       <img src="${university.image}" alt="${university.name}" class="w-full h-64 object-cover rounded-xl">
     </div>
     <div class="university-detail-info space-y-4">
       <p><strong>Location:</strong> ${university.location}</p>
       <p><strong>Description:</strong> ${university.description}</p>
       <p><strong>Acceptance Rate:  ${university.description}</p>
       <p><strong>Acceptance Rate:</strong> ${university.acceptanceRate}</p>
       <p><strong>Tuition:</strong> $${university.tuition}K per year</p>
       <p><strong>Student-to-Faculty Ratio:</strong> ${university.studentFacultyRatio}</p>
       <p><strong>Popular Majors:</strong> ${university.majors.join(', ')}</p>
       
       <div class="mt-6">
         <h4 class="font-semibold mb-2">Admission Requirements:</h4>
         <ul class="list-disc pl-5 space-y-1">
           ${university.requirements.map(req => `<li>${req}</li>`).join('')}
         </ul>
       </div>
       
       <p class="mt-4">
         <strong>Website:</strong> 
         <a href="${university.website}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-light transition-colors">
           ${university.website}
         </a>
       </p>
     </div>
   `;
   
   modalApplyBtn.href = university.website;
   universityModal.classList.add('active');
   document.body.style.overflow = 'hidden';
 }
}

// Open scholarship details modal
function openScholarshipModal(scholarshipId) {
 const scholarship = scholarships.find(s => s.id === scholarshipId);
 
 if (scholarship) {
   scholarshipModalTitle.textContent = scholarship.name;
   
   // Create modal content
   scholarshipModalContent.innerHTML = `
     <div class="space-y-4">
       <p><strong>Provider:</strong> ${scholarship.provider}</p>
       <p><strong>Amount:</strong> ${scholarship.amount}</p>
       <p><strong>Description:</strong> ${scholarship.description}</p>
       
       <div class="mt-6">
         <h4 class="font-semibold mb-2">Requirements:</h4>
         <ul class="list-disc pl-5 space-y-1">
           ${scholarship.requirements.map(req => `<li>${req}</li>`).join('')}
         </ul>
       </div>
       
       <p><strong>Deadline:</strong> ${scholarship.deadline}</p>
       <p>
         <strong>Website:</strong> 
         <a href="${scholarship.website}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-light transition-colors">
           ${scholarship.website}
         </a>
       </p>
     </div>
   `;
   
   scholarshipModalApplyBtn.href = scholarship.website;
   scholarshipModal.classList.add('active');
   document.body.style.overflow = 'hidden';
 }
}

// Close university modal
function closeUniversityModal() {
 universityModal.classList.remove('active');
 document.body.style.overflow = '';
}

// Close scholarship modal
function closeScholarshipModal() {
 scholarshipModal.classList.remove('active');
 document.body.style.overflow = '';
}

// Tab functionality
universityTabs.addEventListener('click', (e) => {
 if (e.target.classList.contains('tab')) {
   const tabId = e.target.getAttribute('data-tab');
   
   // Update active tab
   document.querySelectorAll('.tab').forEach(tab => {
     tab.classList.remove('active');
   });
   e.target.classList.add('active');
   
   // Filter universities
   const filteredUniversities = filterUniversities(tabId);
   renderUniversityCards(filteredUniversities);
 }
});

// Search form submission
searchForm.addEventListener('submit', (e) => {
 e.preventDefault();
 
 const query = universitySearch.value.toLowerCase();
 const major = majorSelect.value.toLowerCase();
 const location = locationSelect.value.toLowerCase();
 
 let results = [...universities];
 
 if (query) {
   results = results.filter(uni => 
     uni.name.toLowerCase().includes(query) ||
     uni.location.toLowerCase().includes(query)
   );
 }
 
 if (major) {
   results = results.filter(uni => 
     uni.majors.some(m => m.toLowerCase().includes(major))
   );
 }
 
 if (location) {
   results = results.filter(uni => 
     uni.location.toLowerCase().includes(location)
   );
 }
 
 // Reset active tab
 document.querySelectorAll('.tab').forEach(tab => {
   tab.classList.remove('active');
 });
 document.querySelector('[data-tab="all"]').classList.add('active');
 
 renderUniversityCards(results);
});

// Newsletter form submission
newsletterForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const email = newsletterEmail.value;
 
 if (email) {
   newsletterForm.innerHTML = `
     <p style="text-align: center; font-weight: 600; font-size: 1.25rem;">Thank you for subscribing!</p>
     <p style="text-align: center;">We'll send personalized university recommendations to ${email} soon.</p>
   `;
 }
});

// Pagination
paginationItems.forEach(item => {
 item.addEventListener('click', () => {
   if (!item.classList.contains('active') && !item.querySelector('.fa-ellipsis-h') && !item.querySelector('.fa-chevron-right')) {
     paginationItems.forEach(i => i.classList.remove('active'));
     item.classList.add('active');
     
     // In a real application, you would load the corresponding page of universities
     console.log(`Selected page: ${item.textContent}`);
   }
 });
});

// Modal event listeners
modalClose.addEventListener('click', closeUniversityModal);
modalCloseBtn.addEventListener('click', closeUniversityModal);
universityModal.addEventListener('click', (e) => {
 if (e.target === universityModal) {
   closeUniversityModal();
 }
});

scholarshipModalClose.addEventListener('click', closeScholarshipModal);
scholarshipModalCloseBtn.addEventListener('click', closeScholarshipModal);
scholarshipModal.addEventListener('click', (e) => {
 if (e.target === scholarshipModal) {
   closeScholarshipModal();
 }
});

// Intersection Observer for animations
const observerOptions = {
 root: null,
 rootMargin: '0px',
 threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
   if (entry.isIntersecting) {
     entry.target.style.animationPlayState = 'running';
     observer.unobserve(entry.target);
   }
 });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
 element.style.animationPlayState = 'paused';
 observer.observe(element);
});

// Fetch universities from API (simulated)
function fetchUniversities() {
 return new Promise((resolve) => {
   // Simulate API delay
   setTimeout(() => {
     resolve(universities);
   }, 500);
 });
}

// Fetch scholarships from API (simulated)
function fetchScholarships() {
 return new Promise((resolve) => {
   // Simulate API delay
   setTimeout(() => {
     resolve(scholarships);
   }, 700);
 });
}

// Initialize the application
async function initApp() {
 try {
   // Fetch and render universities
   const universitiesData = await fetchUniversities();
   renderUniversityCards(universitiesData);
   
   // Fetch and render scholarships
   const scholarshipsData = await fetchScholarships();
   renderScholarshipCards();
   
   // Render featured universities
   renderFeaturedUniversities();
 } catch (error) {
   console.error('Error initializing app:', error);
   universitiesGrid.innerHTML = `
     <div class="error-message col-span-full">
       <p>There was an error loading university data. Please try again later.</p>
     </div>
   `;
   scholarshipGrid.innerHTML = `
     <div class="error-message col-span-full">
       <p>There was an error loading scholarship data. Please try again later.</p>
     </div>
   `;
 }
}

// Start the application
initApp();




















 