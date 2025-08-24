// 🔄 وظيفة تغيير اللغة بناءً على الصفحة الحالية
function switchLanguage(targetPage) {
  window.location.href = targetPage;
}

// ✨ تأثير عند تمرير الصفحة - يمكن تطويره لاحقًا
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-fade, .animate-slide");
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 50) {
      el.classList.add("show-animation");
    }
  });
});

// ✅ تنبيه عند إرسال النموذج
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سيتم الرد عليك قريباً.");
    contactForm.reset();
  });
}

  // Smooth Scroll to Top
  document.querySelectorAll('a[href=\"#top\"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  });

  const scrollSections = document.querySelectorAll('.scroll-section');
  scrollSections.forEach(section => observer.observe(section));
      

// ?? ??? script.js
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.videos-slider-grid');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');
  const sliderItems = document.querySelectorAll('.slider-box');
  const itemWidth = sliderItems[0].offsetWidth + 20; // ????? + ??????? ??? ???????
  
  // ?? ??????
  nextBtn.addEventListener('click', function() {
    slider.scrollBy({
      left: itemWidth,
      behavior: 'smooth'
    });
  });
  
  // ?? ??????
  prevBtn.addEventListener('click', function() {
    slider.scrollBy({
      left: -itemWidth,
      behavior: 'smooth'
    });
  });
  
  // ????? ????? ??? ????? ??? ???????
  document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // ????? ??? ????? ???? ????? ???????
      console.log('?? ????? ??? ???????');
    });
  });
});