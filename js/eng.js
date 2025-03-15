particlesJS.load('particles-js', './js/particlesjs-config.json', function () {
  console.log('Particles.js config loaded');
});



const textEng = "WE CREATE DIGITAL SOLUTIONS FOR YOUR BUSINESS {...}";
let j = 0; 
const typingSpeed = 50;

function typeEffect2() {
  const typewriterElement2 = document.getElementById("typewriter-text2");
  if (j < textEng.length) {
    typewriterElement2.textContent += textEng.charAt(j); 
    j++;
    setTimeout(typeEffect2, typingSpeed);
  }
}
window.onload = () => {
  typeEffect2();
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


      
document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


const API_URL = "https://webnova-9sru.onrender.com/send"; // URL вашего сервера

document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);
        if (response.ok) this.reset();
    } catch (error) {
        alert("Ошибка! Попробуйте позже.");
    }
});

function changeLanguage(lang) {
        const languagePages = {
            'ru': 'index.html',
            'en': 'eng_index.html',
        };
        window.location.href = languagePages[lang];
    }