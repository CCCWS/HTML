const hiddenBtn = document.querySelector("#hiddenBtn");
const hidMenu = document.querySelector("#hidMenu");

function openMenu() {
  hidMenu.classList.toggle("hidden");
}

hiddenBtn.addEventListener("click", openMenu);
