// Toggle light/dark theme
function toggleTheme() {
    document.body.classList.toggle("dark");
    // Save preference
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  }
  
  // On load: check saved theme and show sections
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  
    // Scroll-to-top button visibility
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    // Scroll to top functionality
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Section fade-in effect
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.classList.add("fade-in");
    });
  });
  
  // Toggle mobile menu (hamburger)
  function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
  }
  
  // Submit contact form (show mock success message)
  function submitForm(e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    status.innerText = "Message sent successfully ✅";
    setTimeout(() => (status.innerText = ""), 3000);
  }
  
  // Search through projects (projects.html only)
  function filterProjects() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(p => {
      const text = p.innerText.toLowerCase();
      p.style.display = text.includes(input) ? "block" : "none";
    });
  }
  
  // Filter projects by category
  function filterCategory(category) {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(p => {
      const cat = p.getAttribute("data-category");
      if (category === "all" || cat === category) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });
  }
  // Handle page transitions with fade-out effect
window.addEventListener('beforeunload', function () {
    document.body.classList.add('fade-out');
});

// Handle page load fade-in effect
window.addEventListener('load', function () {
    document.body.classList.remove('fade-out');
});





