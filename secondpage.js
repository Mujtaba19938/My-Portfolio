document.addEventListener("DOMContentLoaded", function() {
  // Glass container tilt effect
  const glassContainer = document.getElementById("glass-container");

  if (glassContainer) {
      glassContainer.addEventListener("mousemove", (e) => {
          const { offsetWidth: width, offsetHeight: height } = glassContainer;
          const { offsetX: x, offsetY: y } = e;
  
          const rotateX = ((y / height) - 0.5) * 10;
          const rotateY = ((x / width) - 0.5) * -10;
  
          glassContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      glassContainer.addEventListener("mouseleave", () => {
          glassContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
  }

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
      window.addEventListener('scroll', function() {
          scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
      });

      scrollToTopBtn.addEventListener('click', function(event) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  // Preloader
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  if (preloader && mainContent) {
      function showPreloader() {
          preloader.style.display = "block";
          mainContent.style.display = "none";
      }

      function hidePreloader() {
          preloader.style.display = "none";
          mainContent.style.display = "block";
      }

      showPreloader();
      setTimeout(hidePreloader, 3000);
      window.onload = hidePreloader;
  }

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });
  }
});
