document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const placeholder = document.getElementById("navbar-placeholder")
  const main = document.querySelector("main");
  let threshold = navbar.getBoundingClientRect().top;

  window.addEventListener("scroll", function () {
      if (window.scrollY > threshold + 300) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});
