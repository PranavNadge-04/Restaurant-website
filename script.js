document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Validation + Animation
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name.length < 3){
    alert("Name must be at least 3 characters");
    return;
  }

  if(!email.includes("@")){
    alert("Enter valid email");
    return;
  }

  if(message.length < 10){
    alert("Message must be at least 10 characters");
    return;
  }

  alert("✨ Message sent successfully!");
});

document.getElementById("bookingForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value;
  const date = this.querySelector("input[type='date']").value;
  const time = this.querySelector("input[type='time']").value;

  alert(`🍽️ Table booked for ${name} on ${date} at ${time}`);
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.feature, .item, .about');

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// Initial styles for animation
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener('scroll', revealOnScroll);

const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "50%";
toggleBtn.style.cursor = "pointer";

document.body.appendChild(toggleBtn);

let darkMode = true;

toggleBtn.addEventListener("click", () => {
  if(darkMode){
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    toggleBtn.innerText = "☀️";
  } else {
    document.body.style.background = "#111";
    document.body.style.color = "#fff";
    toggleBtn.innerText = "🌙";
  }
  darkMode = !darkMode;
});