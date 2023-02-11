const scrollToTopBtn = document.getElementById("scroll-to-top");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});