// we make sure the JavaScript file loads after our HTML by using a function to test if the HTML is loaded
function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   

docReady(function() {
  const nav = document.querySelector(".navigation");
  const offset = nav.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY > offset + 50) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
});

