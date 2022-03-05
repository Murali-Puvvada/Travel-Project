const menuLogo = document.querySelector(".menu-logo");
const main = document.querySelector(".main");

menuLogo.addEventListener("click", () => {
  main.classList.toggle("active");
});

function changeIcon(x) {
  if (x.classList.contains("gg-menu")) {
    x.classList.remove("gg-menu");
    x.classList.add("gg-close");
  } else {
    x.classList.remove("gg-close");
    x.classList.add("gg-menu");
  }
}
