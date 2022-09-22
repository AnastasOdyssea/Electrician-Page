const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const hamburger= document.querySelector(".hamburger");
const close= document.querySelector(".close");
const menuicon = document.querySelector(".menuicon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    close.style.display = "none";
    menuicon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    close.style.display = "block";
    menuicon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);