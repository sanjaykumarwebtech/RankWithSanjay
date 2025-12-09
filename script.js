 function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
  }

  // Scroll Animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  document.querySelectorAll('.service-card, .why-box, .testimonial-card')
    .forEach(el => observer.observe(el));


  
function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".carousel-dots span");

function showSlide(index){
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide(){
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function setSlide(index){
  currentSlide = index;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
showSlide(0);



// const cards = document.querySelectorAll('.service-card');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// });

// cards.forEach(card => observer.observe(card));


// Counter animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 30;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Fade-in cards
const whyCards = document.querySelectorAll('.why-card');
const whyObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }, index * 150);
    }
  });
});

whyCards.forEach(card => whyObserver.observe(card));




let testiIndex = 0;

function showTestimonial(){
  const track = document.getElementById("testiTrack");
  const total = document.querySelectorAll(".testi-card").length;

  if(testiIndex < 0) testiIndex = total - 1;
  if(testiIndex >= total) testiIndex = 0;

  track.style.transform = `translateX(-${testiIndex * 100}%)`;
}

function nextTestimonial() {
  testiIndex++;
  showTestimonial();
}

function prevTestimonial() {
  testiIndex--;
  showTestimonial();
}

setInterval(nextTestimonial, 6000);



const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = "❌ Something went wrong. Try again.";
    }
  } catch (error) {
    status.innerHTML = "❌ Network error. Please try later.";
  }
});





document.getElementById("year").innerText = new Date().getFullYear();

document.getElementById("topBtn").addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("newsletterForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("newsletterStatus").innerText = "✅ Subscribed successfully!";
});
