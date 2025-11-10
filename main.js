
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');
const logo = document.getElementById('logo');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  });
});

const navbar = document.querySelector('.navbar');
const navbarscr = document.getElementById('navbar-scr');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    navbarscr.style.backgroundColor = '#ce875eff'
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    navbarscr.style.backgroundColor = '#d9594c'
  }

  lastScroll = currentScroll;
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:snapinventures@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  )}`;

  window.location.href = mailtoLink;

  contactForm.reset();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

const animateElements = document.querySelectorAll('.about-card, .service-card, .team-card, .contact-item');

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

function isMobileUserAgent() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
}

if (isMobileUserAgent()) {
  logo.style.visibility = "hidden";
}
