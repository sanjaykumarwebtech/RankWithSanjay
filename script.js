/* ================= HEADER & MENU ================= */

document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("show");
    });
  }

  // const servicesToggle = document.querySelector(".services-toggle");

  // if (servicesToggle) {
  //   const dropdown = servicesToggle.closest(".dropdown");

  //   servicesToggle.addEventListener("click", function (e) {
  //     if (window.innerWidth <= 768) {
  //       e.preventDefault();
  //       dropdown.classList.toggle("open");
  //     }
  //   });
  // }

});







/* ================= SCROLL ANIMATIONS ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll('.service-card, .why-box, .testimonial-card')
  .forEach(el => observer.observe(el));

/* ================= SLIDER ================= */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".carousel-dots span");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
showSlide(0);

/* ================= COUNTER ================= */
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / 30;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

/* ================= TESTIMONIAL ================= */
let testiIndex = 0;

function showTestimonial() {
  const track = document.getElementById("testiTrack");
  const total = document.querySelectorAll(".testi-card").length;
  testiIndex = (testiIndex + total) % total;
  track.style.transform = `translateX(-${testiIndex * 100}%)`;
}

setInterval(() => {
  testiIndex++;
  showTestimonial();
}, 6000);

/* ================= FOOTER & UI ================= */
document.getElementById("year").innerText = new Date().getFullYear();

document.getElementById("topBtn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("newsletterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("newsletterStatus").innerText =
    "✅ Subscribed successfully!";
});


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".services-toggle");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggle.parentElement.classList.toggle("open");
    }
  });
});

