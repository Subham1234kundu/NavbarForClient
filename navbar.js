// Get all elements
const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const plusIcons = document.querySelectorAll('.plus');
const hamburger = document.querySelector('.hamburger');
const mobileHeader = document.querySelector('.mobileHeader');

hamburger.addEventListener('click', () => {
  mobileHeader.classList.toggle('bgWhite');
});

// Add event listener to menu button
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("scroll-stop");
  menu.classList.toggle("show-menu");
  
});

// Add event listener to each plus icon
plusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Get the parent menu item
    const menuItem = icon.parentNode;

    // Toggle the class of the menu item
    menuItem.classList.toggle('active');

    // Toggle the plus icon
    icon.classList.toggle('minus');
    icon.textContent = icon.classList.contains('minus') ? '-' : '+';

    // Toggle the display of the openPlus div
    const openPlusDiv = menuItem.querySelector('.openPlus');
    if (openPlusDiv) {
      openPlusDiv.classList.toggle('show');
    }
  });
});