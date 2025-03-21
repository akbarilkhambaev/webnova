particlesJS.load('particles-js', './js/particlesjs-config.json', function () {
  console.log('Particles.js config loaded');
});

const text = 'МЫ СОЗДАЁМ ЦИФРОВЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА {...}';

let i = 0;
const typingSpeed = 50;

function typeEffect() {
  const typewriterElement = document.getElementById('typewriter-text');
  if (i < text.length) {
    typewriterElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, typingSpeed);
  }
}

window.onload = () => {
  typeEffect();
};

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service_card');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.classList.add('animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => observer.observe(card));
});
document.addEventListener('DOMContentLoaded', function () {
  const timelineItems = document.querySelectorAll('.timeline ul li');
  const contentItems = document.querySelectorAll('.show_content ul li');

  timelineItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      timelineItems.forEach((timelineItem) =>
        timelineItem.classList.remove('li_active')
      );
      item.classList.add('li_active');
      contentItems.forEach((content) => content.classList.remove('active'));
      contentItems[index].classList.add('active');
    });
  });
});

document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const API_URL = 'https://webnova-1.onrender.com/send';

document
  .getElementById('contact-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST', // Должен быть POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      alert('Заявка успешно отправлена!');
      this.reset();
    } catch (error) {
      console.error('Ошибка запроса:', error);
      alert('Ошибка! Попробуйте позже.');
    }
  });
function changeLanguage(lang) {
  const languagePages = {
    ru: 'index.html',
    en: 'eng_index.html',
  };
  window.location.href = languagePages[lang];
}
