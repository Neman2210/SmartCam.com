// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// Вопросы и ответы
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
  });
});

// Инициализация частиц для верхней панели
particlesJS.load('particles-header', 'particles-header.json', function() {
  console.log('Particles.js for header loaded!');
});

// Инициализация частиц для заднего фона
particlesJS.load('particles-background', 'particles-background.json', function() {
  console.log('Particles.js for background loaded!');
});

document.addEventListener('DOMContentLoaded', function() {
  const footerItems = document.querySelectorAll('.contact-item, .social-links, .footer-links, .copyright');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.5 });

  footerItems.forEach(item => {
      observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.5 });

  elements.forEach(element => {
      observer.observe(element);
  });
});