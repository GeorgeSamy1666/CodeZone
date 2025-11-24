const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "abcdefghijklmnopqrstuvwxyz0123456789";
letters = letters.split("");

let fontSize = 16;
let columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00cc6d";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

window.addEventListener("resize", () => {
<<<<<<< HEAD
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
=======
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
>>>>>>> f219c7c482d50822a0b2e3234e7de6c7def437a1
});
// animation code ends here
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
<<<<<<< HEAD
    "header h1, header p, header .btn, .feature, .testimonial, .side-bar a, .newsletter p, .newsletter input, .newsletter .btn, .login-container .container, .register .container, .sec-nav, .course-card, .services-container, .contact-container, .faq, .about, .team-member"
  );

  const revealOnScroll = () => {
    elements.forEach((el) => {
=======
    "header h1, header p, header .btn, .feature, .testimonial, .side-bar a, .newsletter p, .newsletter input, .newsletter .btn"
  );

  const revealOnScroll = () => {
    elements.forEach(el => {
>>>>>>> f219c7c482d50822a0b2e3234e7de6c7def437a1
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
<<<<<<< HEAD
      else {
        el.classList.remove("show");
      }
=======
>>>>>>> f219c7c482d50822a0b2e3234e7de6c7def437a1
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
<<<<<<< HEAD
});
document.querySelectorAll(".service-item, .contact-container, .faq, .about, .team-member")
  .forEach(el => el.classList.add("show"));
=======
});
>>>>>>> f219c7c482d50822a0b2e3234e7de6c7def437a1
