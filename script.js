// Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });   

 // script.js
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
  
    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Add 'scrolled' class
      } else {
        navbar.classList.remove("scrolled"); // Remove 'scrolled' class
      }
    }
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  });