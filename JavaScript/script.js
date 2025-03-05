function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Save preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  
  // Load saved theme
  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // Hide the loading spinner after the content is loaded
    document.getElementById('spinner').style.display = 'none';
  };
  
  // Smooth scroll effect
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll animations
  const fadeElements = document.querySelectorAll('.scroll-fade');
  
  const scrollFade = () => {
    fadeElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', scrollFade);
  
  // Initial scroll effect when page loads
  scrollFade();
  