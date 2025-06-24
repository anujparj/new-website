// Wait for the DOM to load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Select the hamburger menu toggle button
  const toggle = document.querySelector('.mobile-toggle');

  // Select the nav links container
  const navLinks = document.querySelector('.nav-links');

  // If both elements exist, add click event
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('show'); // Add/remove 'show' class
    });
  } else {
    console.warn('⚠️ .mobile-toggle or .nav-links not found in the DOM.');
  }
});
