document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav"),
      searchIcon = document.querySelector("#searchIcon"),
      navOpenBtn = document.querySelector(".navOpenBtn"),
      navCloseBtn = document.querySelector(".navCloseBtn");
  
    if (navOpenBtn) {
      navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove("openSearch");
      });
    }
  
    if (navCloseBtn) {
      navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
      });
    }
  
    if (searchIcon) {
      searchIcon.addEventListener("click", () => {
        nav.classList.toggle("openSearch");
        nav.classList.remove("openNav");
      });
    }
  });
  