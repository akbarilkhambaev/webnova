particlesJS.load('particles-js', './js/particlesjs-config.json', function () {
  console.log('Particles.js config loaded');
});

const text = "МЫ СОЗДАЁМ ЦИФРОВЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА {...}"; 
let i = 0; 
const typingSpeed = 50; 

function typeEffect() {
    const typewriterElement = document.getElementById("typewriter-text");
    if (i < text.length) {
        typewriterElement.textContent += text.charAt(i); 
        i++;
        setTimeout(typeEffect, typingSpeed);
    }
}


window.onload = () => {
    typeEffect();
};


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service_card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add("animate__fadeInUp");
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
            contentItems.forEach((content) =>
              content.classList.remove('active')
            );
            contentItems[index].classList.add('active');
          });
        });
      });

      document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  console.log(formData);

  alert('Ваше сообщение отправлено!');

  e.target.reset();
});
      

