const navigationBar = document.querySelector(".navigation-bar");
const listItems = document.querySelectorAll(".list-item");
const hamburger = document.querySelector(".hamburger");
const crossmark = document.querySelector(".fa-times");
const bars = document.querySelector(".fa-bars");

function toggleHamburger() {
  if (navigationBar.classList.contains("show-menu")) {
    navigationBar.classList.remove("show-menu");
    crossmark.style.display = "none";
    bars.style.display = "block";
  } else {
    navigationBar.classList.add("show-menu");
    crossmark.style.display = "block";
    bars.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleHamburger);

listItems.forEach( 
  function(listItem) { 
    listItem.addEventListener("click", toggleHamburger);
  }
)

