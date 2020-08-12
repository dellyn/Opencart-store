const menu = document.querySelector(".menu-burger");
const menuItems = document.querySelector(".menu-items");
const menuBg = document.querySelector(".menu-bg");

// Menu for mobile

function toggleMenu() {
  // e.preventDefault;
  menu.classList.toggle("fs");
  menuBg.classList.toggle("fs");
  menuItems.classList.toggle("fs");
  menu.textContent == "☰" ? (menu.textContent = "✕") : (menu.textContent = "☰");
  menu.classList.contains("fs")
    ? document.querySelector("body").classList.add("overflow-h")
    : document.querySelector("body").classList.remove("overflow-h");
}
menu.addEventListener("click", toggleMenu);
