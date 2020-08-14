const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const link = document.querySelector(".navbar__link");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  link.classList.toggle("active");
});
