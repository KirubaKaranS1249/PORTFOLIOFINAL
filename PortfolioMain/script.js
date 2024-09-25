document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle functionality
  //const navToggle = document.querySelector(".hamburger-menu"); // Assuming you have a hamburger menu element with this class
  const navMenu = document.querySelector(".nav-right"); // Assuming your menu container has this class

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  // Smooth scroll and zoom effect for navbar links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function zoomHeading(sectionId) {
    const sectionHeading = document.querySelector(`${sectionId} h2`);

    if (sectionHeading) {
      sectionHeading.classList.add("heading-zoom");
      sectionHeading.style.color = "red";

      setTimeout(() => {
        sectionHeading.classList.remove("heading-zoom");
        sectionHeading.style.color = "";
      }, 2000);
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor link behavior

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Smooth scrolling behavior
          block: "start", // Align the element at the start of the viewport
        });

        // Apply the zoom effect to the heading
        zoomHeading(targetId);
      }
    });
  });
});
