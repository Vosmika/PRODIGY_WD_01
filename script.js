const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
