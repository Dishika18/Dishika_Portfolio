
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const roles = ["Web Developer", "UI/UX Designer", "Open-Source Enthusiast", "Programmer", "Student"];
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const deletingSpeed = 50;
  const pause = 750;
  const element = document.getElementById("dynamic-text");
  
  function typeAnimation() {
    const currentRole = roles[currentRoleIndex];
  
    if (isDeleting) {
      // When deleting, reduce characters and fade out if fully deleted
      if (currentCharIndex >= 0) {
        element.textContent = currentRole.slice(0, currentCharIndex--);
        setTimeout(typeAnimation, deletingSpeed);
      } else {
        // Fade out completely before changing to next text
        element.style.opacity = 0;
        setTimeout(() => {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          currentCharIndex = 0;
          element.style.opacity = 1; // Fade back in
          setTimeout(typeAnimation, 300);
        }, 300);
      }
    } else {
      // Typing new text
      element.textContent = currentRole.slice(0, currentCharIndex++);
      element.classList.add("typing"); // Adds blinking cursor effect
      if (currentCharIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(typeAnimation, pause);
      } else {
        setTimeout(typeAnimation, typingSpeed);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeAnimation, pause);
  });
    