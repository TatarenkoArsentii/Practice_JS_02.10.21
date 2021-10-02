"use strict";
const slideEl = document.querySelectorAll(".slide");
let activeItemEl = document.querySelector(".active");

slideEl.forEach((el) => {
  el.addEventListener("click", activeSlide);
});

function activeSlide() {
  if (activeItemEl) activeItemEl.classList.remove("active");
  activeItemEl = this;
  this.classList.add("active");
}
