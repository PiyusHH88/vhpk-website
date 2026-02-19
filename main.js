// ====== Smooth Scroll for internal links ======
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ====== Reveal elements on scroll ======
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ====== Sticky header shadow ======
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

// ====== Mobile menu toggle ======
const nav = document.querySelector(".nav");
const brand = document.querySelector(".brand");

if (window.innerWidth < 768) {
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("menu-btn");
  menuBtn.innerHTML = "&#9776;"; // hamburger icon
  header.appendChild(menuBtn);

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

// ====== Card hover animation for scaling ======
const cards = document.querySelectorAll(".card, .product-card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ====== Auto-update year in footer ======
document.addEventListener("DOMContentLoaded", () => {
  const yearRail = document.getElementById("year-rail");
  const yearAgri = document.getElementById("year-agri");
  const yearLanding = document.getElementById("year-landing");
  const year = new Date().getFullYear();
  if (yearRail) yearRail.textContent = year;
  if (yearAgri) yearAgri.textContent = year;
  if (yearLanding) yearLanding.textContent = year;
});

// ====== Smooth fade in for product images ======
const productImages = document.querySelectorAll(
  ".product-card img, .gallery img",
);
productImages.forEach((img) => {
  img.style.opacity = 0;
  img.style.transition = "opacity 0.6s ease";
  img.addEventListener("load", () => {
    img.style.opacity = 1;
  });
});

// ====== Responsive adjustments ======
function responsiveAdjust() {
  if (window.innerWidth < 768) {
    nav.style.flexDirection = "column";
    nav.style.display = "none";
    nav.classList.remove("nav-open");
  } else {
    nav.style.flexDirection = "row";
    nav.style.display = "flex";
  }
}
window.addEventListener("resize", responsiveAdjust);
window.addEventListener("load", responsiveAdjust);

// ====== Optional: Scroll parallax for hero ======
const railHero = document.querySelector(".rail-hero");
const agriHero = document.querySelector(".agri-hero");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (railHero) {
    railHero.style.backgroundPositionY = `${scrollPos * 0.3}px`;
  }
  if (agriHero) {
    agriHero.style.backgroundPositionY = `${scrollPos * 0.3}px`;
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Fix
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.onclick = () => {
            navLinks.classList.toggle('nav-active');
            // Toggle between hamburger and X icon
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        };
    }

    // 3. Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});